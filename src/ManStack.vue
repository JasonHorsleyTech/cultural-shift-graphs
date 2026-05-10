<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  Chart, ScatterController, LineController, PointElement, LineElement,
  LinearScale, CategoryScale, Tooltip, Legend, Filler,
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { marked } from 'marked'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'
import { heartthrobs, summary } from './data/man-stack.ts'

Chart.register(
  ScatterController, LineController, PointElement, LineElement,
  LinearScale, CategoryScale, Tooltip, Legend, Filler, annotationPlugin,
)

// Markdown research reports loaded at build time.
const reportModules = import.meta.glob('../projects/man-stack/results/*.md', { query: '?raw', eager: true })
const reportsById = {}
for (const [path, mod] of Object.entries(reportModules)) {
  const filename = path.split('/').pop().replace('.md', '')
  let slug = filename.replace(/^\d+-/, '')
  if (slug === 'bridgerton-lead') slug = 'bridgerton-simon'
  reportsById[slug] = mod.default
}

// Colors keyed to the gender of the *character*, not the audience.
const MALE_CHAR_COLOR = '#3b82f6'   // blue-500
const FEMALE_CHAR_COLOR = '#ec4899' // pink-500

function colorFor(audience) {
  return audience === 'female' ? MALE_CHAR_COLOR : FEMALE_CHAR_COLOR
}

function hashToUnit(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10000) / 10000
}

function supDigits(n) {
  const map = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻' }
  return String(n).split('').map(c => map[c] || c).join('')
}

// Cultural anchor for log10(probability), keyed by integer exponent (e.g. -7).
const ANCHORS = {
  '0': 'everyone',
  '-1': 'a close friend',
  '-2': 'someone you know',
  '-3': 'someone at your school',
  '-4': 'someone in your town',
  '-5': 'someone in your city',
  '-6': 'someone in your state',
  '-7': 'a small country',
  '-8': 'a big country',
  '-9': 'everyone alive',
  '-10': 'rarer than anyone alive',
  '-11': 'every human ever',
  '-12': 'rarer than every human',
  '-14': 'cells in your body',
  '-16': 'every ant on Earth',
  '-18': 'grains of sand on Earth',
  '-20': 'human cells × every ant',
  '-22': 'stars in the universe',
  '-24': 'atoms in a glass of water',
}

function fmtFullNumber(p) {
  if (p >= 1) return '1'
  const log = -Math.log10(p)
  const expFloor = Math.floor(log)
  const mantissa = Math.pow(10, log - expFloor)
  let mantTimes10 = Math.round(mantissa * 10)
  let finalExp = expFloor - 1
  if (mantTimes10 === 100) { mantTimes10 = 10; finalExp = expFloor }
  if (finalExp < 0) {
    return Math.round(1 / p).toLocaleString('en-US')
  }
  const digits = String(mantTimes10) + '0'.repeat(finalExp)
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function fmtBriefOneIn(p) {
  if (p >= 1e-3) return `1 in ${Math.round(1 / p).toLocaleString()}`
  const log = -Math.log10(p)
  const expFloor = Math.floor(log)
  const mant = Math.pow(10, log - expFloor)
  return `1 in ${mant.toFixed(1)}×10${supDigits(expFloor)}`
}

function fmtProb(p) {
  if (p >= 0.01) return `${(p * 100).toFixed(1)}%`
  const log = Math.log10(p)
  const exp = Math.floor(log)
  const mant = Math.pow(10, log - exp)
  return `${mant.toFixed(1)}×10${supDigits(exp)}`
}

const maleChars = computed(() => heartthrobs.filter(h => h.audience === 'female'))   // male leads
const femaleChars = computed(() => heartthrobs.filter(h => h.audience === 'male'))   // female love interests

// === Combined per-character distribution chart ===
const charChartRef = ref(null)
let charChart = null

const SCATTER_WIDTH = 4000
const SCATTER_HEIGHT = 620

// Two rows: male leads at y = +1.5, female love interests at y = -1.5.
// Tight jitter within each row to spread overlapping dots without making
// labels dance.
const MALE_ROW = 1.5
const FEMALE_ROW = -1.5
const ROW_JITTER = 0.18
function buildCharPoints(group, rowY) {
  return group.map(h => {
    const sign = hashToUnit(h.id) < 0.5 ? -1 : 1
    const mag = ROW_JITTER * (0.3 + 0.7 * hashToUnit(h.id + 'y'))
    return { x: h.log10Prob, y: rowY + sign * mag, h, rowY }
  })
}

// Lane-assignment plugin: every character name is drawn, with vertical lane
// stacking to avoid horizontal collisions. Connector lines tie each name to
// its dot.
function makeLabelPlugin(malePts, femalePts) {
  return {
    id: 'allLabels',
    afterDatasetsDraw(ch) {
      const { ctx, scales: { x: xs, y: ys } } = ch
      ctx.save()
      ctx.font = '12px ui-sans-serif, system-ui, sans-serif'
      ctx.textBaseline = 'middle'

      const placeGroup = (group, color, direction) => {
        // direction = -1 → labels above the dot (for top row, male leads)
        // direction = +1 → labels below the dot (for bottom row, female love interests)
        // Sort by pixel position so lanes work whether the axis is reversed or not.
        const withPx = group.map(pt => ({ pt, px: xs.getPixelForValue(pt.x) }))
        withPx.sort((a, b) => a.px - b.px)
        const lanes = [] // rightmost X pixel occupied per lane
        const placements = []
        const GAP = 8
        const LANE_HEIGHT = 18
        const FIRST_LANE_OFFSET = 26
        // Use row baseline (not jittered y) for label positioning so they
        // align neatly even when dots wobble.
        const rowYpx = ys.getPixelForValue(group[0]?.rowY ?? 0)
        for (const { pt, px } of withPx) {
          const dotY = ys.getPixelForValue(pt.y)
          const w = ctx.measureText(pt.h.name).width
          const left = px - w / 2
          const right = px + w / 2
          let lane = 0
          while (lane < lanes.length && lanes[lane] + GAP > left) lane++
          if (lane === lanes.length) lanes.push(right)
          else lanes[lane] = right
          const labelY = rowYpx + direction * (FIRST_LANE_OFFSET + lane * LANE_HEIGHT)
          placements.push({ pt, px, dotY, labelY, lane })
        }
        // Draw connectors from each dot to its label.
        ctx.strokeStyle = color + '55'
        ctx.lineWidth = 1
        for (const p of placements) {
          ctx.beginPath()
          ctx.moveTo(p.px, p.dotY + direction * 5)
          ctx.lineTo(p.px, p.labelY - direction * 7)
          ctx.stroke()
        }
        // Draw names.
        ctx.fillStyle = color
        ctx.textAlign = 'center'
        for (const p of placements) {
          ctx.fillText(p.pt.h.name, p.px, p.labelY)
        }
      }

      placeGroup(malePts, MALE_CHAR_COLOR, -1)
      placeGroup(femalePts, FEMALE_CHAR_COLOR, +1)
      ctx.restore()
    },
  }
}

function buildCharChart() {
  charChart?.destroy()
  if (!charChartRef.value) return
  const c = chartColors()

  const malePts = buildCharPoints(maleChars.value, MALE_ROW)
  const femalePts = buildCharPoints(femaleChars.value, FEMALE_ROW)

  const annotations = {
    maleMedian: {
      type: 'line',
      xMin: summary.female.median, xMax: summary.female.median,
      yMin: MALE_ROW - ROW_JITTER - 0.25, yMax: MALE_ROW + ROW_JITTER + 0.25,
      borderColor: MALE_CHAR_COLOR,
      borderWidth: 2,
    },
    femaleMedian: {
      type: 'line',
      xMin: summary.male.median, xMax: summary.male.median,
      yMin: FEMALE_ROW - ROW_JITTER - 0.25, yMax: FEMALE_ROW + ROW_JITTER + 0.25,
      borderColor: FEMALE_CHAR_COLOR,
      borderWidth: 2,
    },
    centerLine: {
      type: 'line',
      yMin: 0, yMax: 0,
      xMin: -25, xMax: 0,
      borderColor: c.grid,
      borderWidth: 1,
      borderDash: [4, 4],
    },
  }

  charChart = new Chart(charChartRef.value, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Male leads',
          data: malePts,
          backgroundColor: MALE_CHAR_COLOR + 'cc',
          borderColor: MALE_CHAR_COLOR,
          borderWidth: 1,
          pointRadius: 6,
          pointHoverRadius: 9,
        },
        {
          label: 'Female love interests',
          data: femalePts,
          backgroundColor: FEMALE_CHAR_COLOR + 'cc',
          borderColor: FEMALE_CHAR_COLOR,
          borderWidth: 1,
          pointRadius: 6,
          pointHoverRadius: 9,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 8, bottom: 24, left: 24, right: 48 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: c.surface,
          titleColor: c.text,
          bodyColor: c.text,
          borderColor: c.grid,
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: (items) => items[0].raw.h.name,
            label: (item) => {
              const h = item.raw.h
              return [
                `${h.source} · ${h.decade}`,
                `Joint p ≈ ${fmtProb(h.adjustedProb)}  (${fmtBriefOneIn(h.adjustedProb)})`,
                ``,
                `Stack: ${h.traitSummary}`,
                `${h.hook}`,
              ]
            },
          },
        },
        annotation: { annotations },
      },
      scales: {
        x: {
          type: 'linear',
          min: -25,
          max: 0,
          reverse: true,
          grid: { color: c.grid },
          border: { color: c.grid },
          ticks: {
            color: c.text,
            stepSize: 1,
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            font: { size: 11 },
            callback: (v) => {
              const exp = Math.round(v)
              const main = exp === 0 ? '1 in 1' : `1 in 10${supDigits(-exp)}`
              const anchor = ANCHORS[String(exp)]
              return anchor ? [main, anchor] : [main, '']
            },
          },
        },
        y: {
          type: 'linear',
          min: -4,
          max: 4,
          grid: { display: false },
          border: { display: false },
          ticks: { display: false },
        },
      },
    },
    plugins: [makeLabelPlugin(malePts, femalePts)],
  })
}

// === By-decade line chart, inverted Y ===
const decadeChartRef = ref(null)
let decadeChart = null

function buildDecadeChart() {
  decadeChart?.destroy()
  if (!decadeChartRef.value) return
  const c = chartColors()

  const decades = ['1980s', '1990s', '2000s', '2010s', '2020s']
  const meanRarity = (group, audience) => {
    const xs = heartthrobs
      .filter(h => h.audience === audience)
      .filter(h => h.decade === group)
      .map(h => h.log10Prob)
    return xs.length ? -(xs.reduce((s, x) => s + x, 0) / xs.length) : null
  }
  const maleData = decades.map(d => meanRarity(d, 'female'))
  const femaleData = decades.map(d => meanRarity(d, 'male'))
  const yMax = Math.ceil(Math.max(...maleData, ...femaleData) + 1)

  decadeChart = new Chart(decadeChartRef.value, {
    type: 'line',
    data: {
      labels: decades,
      datasets: [
        {
          label: 'Male leads',
          data: maleData,
          borderColor: MALE_CHAR_COLOR,
          backgroundColor: MALE_CHAR_COLOR + '33',
          pointBackgroundColor: MALE_CHAR_COLOR,
          pointRadius: 6,
          pointHoverRadius: 9,
          borderWidth: 2.5,
          tension: 0.25,
          fill: false,
        },
        {
          label: 'Female love interests',
          data: femaleData,
          borderColor: FEMALE_CHAR_COLOR,
          backgroundColor: FEMALE_CHAR_COLOR + '33',
          pointBackgroundColor: FEMALE_CHAR_COLOR,
          pointRadius: 6,
          pointHoverRadius: 9,
          borderWidth: 2.5,
          tension: 0.25,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 16, bottom: 8, left: 8, right: 16 } },
      plugins: {
        legend: {
          labels: { color: c.text, boxWidth: 14, font: { size: 12 } },
        },
        tooltip: {
          callbacks: {
            label: (item) => {
              const v = item.parsed.y
              return `${item.dataset.label}: mean ${fmtBriefOneIn(Math.pow(10, -v))}`
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: c.text, font: { size: 12 } },
        },
        y: {
          min: 0,
          max: yMax,
          grid: { color: c.grid },
          border: { color: c.grid },
          ticks: {
            color: c.text,
            stepSize: 2,
            autoSkip: false,
            font: { size: 11 },
            callback: (v) => {
              const exp = Math.round(v)
              const main = exp === 0 ? '1 in 1' : `1 in 10${supDigits(exp)}`
              const anchor = ANCHORS[String(-exp)]
              return anchor ? [main, anchor] : main
            },
          },
        },
      },
    },
  })
}

function buildAll() {
  buildCharChart()
  buildDecadeChart()
}

onMounted(() => buildAll())
onUnmounted(() => {
  charChart?.destroy()
  decadeChart?.destroy()
})

const maleMedianOneIn = computed(() => fmtFullNumber(Math.pow(10, summary.female.median)))
const femaleMedianOneIn = computed(() => fmtFullNumber(Math.pow(10, summary.male.median)))
const gapOrders = computed(() => Math.abs(Math.round(summary.male.median - summary.female.median)))

const expandedId = ref(null)
function toggleExpanded(id) {
  expandedId.value = expandedId.value === id ? null : id
}
function renderReport(id) {
  const raw = reportsById[id]
  if (!raw) return '<p class="text-[var(--text-muted)]">No detailed report for this character yet.</p>'
  return marked.parse(raw)
}

const sortedHeartthrobs = computed(() =>
  [...heartthrobs].sort((a, b) => a.adjustedProb - b.adjustedProb),
)
</script>

<template>
  <GraphWrapper title="The Man Stack" max-width="6xl" @theme-change="buildAll">
    <template #subtitle>
      Take a romance heartthrob — Christian Grey, Aragorn, Princess Peach — and add up the rarity of every
      universal-desirable trait the character actually has (height, income, virtuoso skills, body composition, etc.).
      Multiply with correlation adjustments. The result is the joint probability that any real human matches the full stack.
      50 cultural heartthrobs, generationally stratified across the 1980s–2020s. Both axes are stacked.
      But not the same way.
    </template>

    <!-- Combined per-character chart, horizontal scroll -->
    <section class="mt-6">
      <div class="flex items-baseline justify-between gap-4 mb-2">
        <h2 class="text-base font-semibold">Every character, plotted</h2>
        <div class="text-xs text-[var(--text-muted)] flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5">
            <span class="inline-block h-2.5 w-2.5 rounded-full" :style="{ background: MALE_CHAR_COLOR }"></span>
            male leads
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span class="inline-block h-2.5 w-2.5 rounded-full" :style="{ background: FEMALE_CHAR_COLOR }"></span>
            female love interests
          </span>
          <span class="hidden md:inline">scroll →</span>
        </div>
      </div>
      <p class="text-xs text-[var(--text-muted)] mb-2">
        Top row blue = male leads (the Christian Greys). Bottom row pink = female love interests. Further right = rarer.
        All female-love-interest stacks cluster on the left; the male-lead stacks have a tail that runs all the way out to "atoms in a glass of water."
      </p>
      <div class="bg-[var(--bg-surface)] rounded-lg border border-[var(--border)] overflow-x-auto">
        <div :style="{ width: SCATTER_WIDTH + 'px', height: SCATTER_HEIGHT + 'px' }">
          <canvas ref="charChartRef"></canvas>
        </div>
      </div>
    </section>

    <!-- Headline cards -->
    <section class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="text-xs text-[var(--text-muted)] uppercase tracking-wide">Probability of average "hot guy"</div>
        <div class="mt-1 text-2xl font-bold tabular-nums break-all" :style="{ color: MALE_CHAR_COLOR }">
          1 in {{ maleMedianOneIn }}
        </div>
        <div class="text-xs text-[var(--text-muted)] mt-1">
          Half of male leads stack <em>rarer</em> than this. Christian Grey is on the right of the right of the right of this.
        </div>
      </div>
      <div class="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="text-xs text-[var(--text-muted)] uppercase tracking-wide">Probability of average "hot girl"</div>
        <div class="mt-1 text-2xl font-bold tabular-nums break-all" :style="{ color: FEMALE_CHAR_COLOR }">
          1 in {{ femaleMedianOneIn }}
        </div>
        <div class="text-xs text-[var(--text-muted)] mt-1">
          Half the female love interests stack rarer than this — about 1 in your city.
        </div>
      </div>
      <div class="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="text-xs text-[var(--text-muted)] uppercase tracking-wide">Median gap</div>
        <div class="mt-1 text-2xl font-bold">{{ gapOrders }} orders of magnitude</div>
        <div class="text-xs text-[var(--text-muted)] mt-1">
          Male-lead stacks are rarer than female-love-interest stacks by this much, on average.
        </div>
      </div>
    </section>

    <!-- By-decade line chart, inverted Y so rarer is up -->
    <section class="mt-10">
      <h2 class="text-base font-semibold">Average heartthrob, by decade</h2>
      <p class="text-xs text-[var(--text-muted)] mt-1">
        Mean rarity of each side's typical heartthrob, decade by decade. Up = rarer. The female-love-interest
        line stays close to the floor; the male-lead line spikes hard in the 2000s (Aragorn / Edward Cullen)
        and 2010s (Christian Grey).
      </p>
      <div class="mt-2 bg-[var(--bg-surface)] rounded-lg border border-[var(--border)] p-3 md:p-5"
        style="height: 380px">
        <canvas ref="decadeChartRef"></canvas>
      </div>
    </section>

    <!-- Methodology — collapsed by default -->
    <details class="mt-10 group rounded-lg border border-[var(--border)] bg-[var(--bg-surface)]">
      <summary class="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
        <span class="text-base font-semibold text-[var(--text-primary)]">Two methods, comparable units</span>
        <span class="text-xs text-[var(--text-muted)] group-open:hidden">click to expand</span>
        <span class="text-xs text-[var(--text-muted)] hidden group-open:inline">click to collapse</span>
      </summary>
      <div class="px-4 pb-4 text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed">
        <p>
          Both stacks measure the same thing — <em>P(real human matches every universal-desirable trait simultaneously)</em>
          — but the trait lists differ because the stacking patterns differ. Female-target media stacks
          <strong>achievement</strong> traits onto male leads (height, wealth, intelligence, virtuoso skills, multilingualism, prime age).
          Male-target media stacks <strong>perfection-and-frictionlessness</strong> traits onto female love interests
          (top-quintile attractiveness, slim build, often DD-busty, single, childless, low neuroticism, "cool girl" agreeableness, aligned interests).
          Symmetric rigor, asymmetric trait lists. Threshold method for the male-lead stack, conditional-filter method for the female-love-interest stack.
          Both terminate in the same units: the probability of a real human clearing every bar.
        </p>
        <p>
          Base rates for each individual trait — height, income, IQ, BMI, body composition, agreeableness, neuroticism, age window —
          come from CDC NHANES, US Census ACS, IRS Statistics of Income, Forbes, BLS, FAA airmen data, OkCupid match-rate distributions,
          and Big Five normative samples. Joint distributions are encoded once, with correlation adjustments cited per pair, then reused
          across all 50 characters. Full base-rates ledger and per-character derivations live in
          <code class="text-xs">projects/man-stack/</code>.
        </p>
        <h3 class="text-base font-semibold text-[var(--text-primary)] mt-4">Why the asymmetry is real (and why the gap is bigger than it looks)</h3>
        <p>Naïve multiplication of marginal rates assumes traits are independent. They aren't.</p>
        <ul class="list-disc list-inside ml-2 space-y-1">
          <li>
            <strong :style="{ color: MALE_CHAR_COLOR }">Male-lead traits are negatively correlated.</strong> Time-to-billionaire trades against
            time-to-virtuoso-pianist; CEO-by-29 trades against time-to-master-three-languages and FAA pilot certification.
            When traits trade against each other, the true joint is <em>rarer</em> than the product of marginals. The male-lead numbers shown here
            are <em>conservative</em>: reality is even more absurd than the math suggests.
          </li>
          <li>
            <strong :style="{ color: FEMALE_CHAR_COLOR }">Female-love-interest traits are weakly positively correlated.</strong>
            Top-quintile attractiveness, low neuroticism, and high agreeableness all halo together in survey data; childless and slim-BMI cluster via life-stage effects.
            The true joint is slightly <em>less rare</em> than the product. The female-love-interest numbers shown here are <em>liberal</em>: reality is slightly
            less absurd than the math suggests.
          </li>
        </ul>
        <p>
          Net: the gap between the two distributions <em>under-represents</em> how much rarer the male-lead stacks really are.
        </p>
        <h3 class="text-base font-semibold text-[var(--text-primary)] mt-4">Honest caveats, surfaced</h3>
        <ul class="list-disc list-inside ml-2 space-y-1">
          <li>
            <strong>The trait lists are calibrated to the stacking patterns of the genre, not arbitrarily picked.</strong>
            You won't find Christian Grey being measured on bust size or Princess Peach on FAA pilot certifications — those aren't
            the axes their genres stack along. Each genre is measured by its own stacking yardstick, then compared in shared units.
          </li>
          <li>
            <strong>Personality is excluded by design.</strong> Brooding, witty, mysterious, damaged, sweet — all the things that make a character
            a <em>character</em> are out of the calculation. Han Solo's roguish charm, Buffy's sharp tongue, Augustus Waters' verbosity, Nick Nelson's
            softness — none counted. Only sliders the median audience-member would push up if given the choice.
          </li>
          <li>
            <strong>The dataset is genuinely mixed.</strong> Some male leads (Nick Nelson, Sam Wheat, Augustus Waters) score genuinely modest
            rarity — the soft-boy archetype defies the slider-max pattern. Some female love interests (Mikaela Banes, 2B, CJ Parker) sit deep
            in 1-in-a-million territory once you stack DD + slim + cool-girl + aligned-interests. The headline is the <em>medians</em>, not "every female lead is unrealistic."
          </li>
          <li>
            <strong>Bracket ranges per character are wide.</strong> Each adjusted estimate has a 1-order-of-magnitude bracket reflecting
            plausible reviewer disagreement. The dot positions are point estimates within those brackets — see the per-character files
            for the bracketed ranges and judgment calls.
          </li>
        </ul>
      </div>
    </details>

    <!-- Per-character table with expandable research reports -->
    <section class="mt-10">
      <h2 class="text-lg font-semibold mb-2">Every character, ranked rarest first</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-3">
        Click any name to read the full research file — base rates, correlation adjustments, edge cases, and why the number landed where it did.
      </p>
      <div class="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table class="w-full text-sm">
          <thead class="bg-[var(--bg-surface-alt)] text-xs uppercase text-[var(--text-muted)]">
            <tr>
              <th class="text-left px-3 py-2">Rank</th>
              <th class="text-left px-3 py-2">Character</th>
              <th class="text-left px-3 py-2">Source</th>
              <th class="text-left px-3 py-2">Decade</th>
              <th class="text-left px-3 py-2">Type</th>
              <th class="text-right px-3 py-2">Joint probability</th>
              <th class="text-right px-3 py-2">1 in</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border-light)]">
            <template v-for="(h, i) in sortedHeartthrobs" :key="h.id">
              <tr class="bg-[var(--bg-surface)]"
                :class="expandedId === h.id ? 'border-b-0' : ''">
                <td class="px-3 py-2 font-mono text-[var(--text-muted)]">{{ i + 1 }}</td>
                <td class="px-3 py-2 font-medium">
                  <button
                    @click="toggleExpanded(h.id)"
                    class="inline-flex items-center gap-2 hover:underline text-left cursor-pointer"
                    :class="expandedId === h.id ? 'text-blue-500' : ''"
                  >
                    <span class="inline-block h-2 w-2 rounded-full shrink-0"
                      :style="{ backgroundColor: colorFor(h.audience) }"></span>
                    {{ h.name }}
                    <span class="text-[10px] text-[var(--text-muted)]">
                      {{ expandedId === h.id ? '▲' : '▼' }}
                    </span>
                  </button>
                </td>
                <td class="px-3 py-2 text-[var(--text-secondary)]">{{ h.source }}</td>
                <td class="px-3 py-2 text-[var(--text-secondary)]">{{ h.decade }}</td>
                <td class="px-3 py-2">
                  <span class="text-xs px-2 py-0.5 rounded"
                    :style="{
                      background: colorFor(h.audience) + '22',
                      color: colorFor(h.audience),
                    }">
                    {{ h.audience === 'female' ? 'Male lead' : 'Female love interest' }}
                  </span>
                </td>
                <td class="px-3 py-2 text-right font-mono">{{ fmtProb(h.adjustedProb) }}</td>
                <td class="px-3 py-2 text-right font-mono text-[var(--text-secondary)]">{{ fmtBriefOneIn(h.adjustedProb) }}</td>
              </tr>
              <tr v-if="expandedId === h.id" class="bg-[var(--bg-surface)]">
                <td colspan="7" class="p-0 border-t border-[var(--border-light)]">
                  <div class="px-6 py-6 overflow-x-auto">
                    <div class="prose prose-sm dark:prose-invert max-w-none break-words
                      prose-headings:text-[var(--text-primary)]
                      prose-p:text-[var(--text-secondary)]
                      prose-li:text-[var(--text-secondary)]
                      prose-strong:text-[var(--text-primary)]
                      prose-table:text-xs prose-th:text-[var(--text-primary)] prose-td:text-[var(--text-secondary)]
                      prose-th:border-[var(--border)] prose-td:border-[var(--border-light)]
                      prose-a:text-blue-500 dark:prose-a:text-blue-400
                      [&_pre]:overflow-x-auto [&_pre]:max-w-full
                      [&_code]:break-all [&_code]:whitespace-pre-wrap"
                      v-html="renderReport(h.id)"></div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-10 text-xs text-[var(--text-muted)] leading-relaxed space-y-2">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)]">Project notes</h3>
      <p>
        Character list locked at project graduation, before research began, to prevent post-hoc list-tweaking. 25 male leads
        and 25 female love interests, 5 per decade × 5 decades (1980s–2020s). Selection from aggregate
        cultural-recognition lists (Goodreads "Best Book Boyfriends," Cosmopolitan rom-com lists, FHM/Maxim, IGN "best video
        game love interests," MyAnimeList top-waifu rankings) cross-validated against consumption data (box office, sales, viewership).
      </p>
      <p>
        50 individual character files, one shared base-rates ledger, two list-validation passes. The probability of any one trait
        is calculated from real public data; the joint is calculated with documented correlation adjustments per character.
        <a href="https://github.com/JasonHorsleyTech/cultural-shift-graphs/tree/main/projects/man-stack"
          class="underline hover:text-[var(--text-secondary)]">All research files are in the project repo</a>.
      </p>
    </section>
  </GraphWrapper>
</template>
