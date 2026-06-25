<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'
import { points, methodology } from './data/richest-man-in-the-world.ts'

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
)

const PRIVATE_COLOR = '#c79a3b' // muted gold — private fortunes
const PRIVATE_SOFT = 'rgba(199, 154, 59, 0.16)'
const SOVEREIGN_COLOR = '#7b5ea7' // royal purple — sovereign / state-blended wealth

const metric = ref('incomes') // 'incomes' | 'gold'
const mainCanvas = ref(null)
let mainChart = null

function shortName(person) {
  if (person.includes('Brunei')) return 'Brunei'
  if (person.includes('Slim')) return 'Slim'
  if (person.includes('Getty')) return 'Getty'
  if (person.includes('Basil')) return 'Basil II'
  const parts = person.split(' ')
  return parts[parts.length - 1]
}

/** Compact human number: 65.9M, 14.6K, 1.2B. */
function fmtCompact(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B'
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + 'K'
  return String(Math.round(n))
}

function fmtFull(n) {
  return Math.round(n).toLocaleString()
}

const metricMeta = {
  incomes: {
    label: 'Average global incomes controlled',
    axis: 'Average annual incomes the fortune equals (log scale)',
    unit: 'avg incomes',
    mid: (p) => p.incomesControlled,
    low: (p) => p.incomesControlledLow,
    high: (p) => p.incomesControlledHigh,
  },
  gold: {
    label: 'Pounds of gold',
    axis: 'Pounds of gold the fortune could buy (log scale)',
    unit: 'lbs of gold',
    mid: (p) => p.poundsOfGold,
    low: (p) => p.poundsOfGoldLow,
    high: (p) => p.poundsOfGoldHigh,
  },
}

const m = computed(() => metricMeta[metric.value])

const newest = computed(() => points[points.length - 1])

/** Musk 2026 vs the lowest private fortune in the set (Fugger), on the incomes metric. */
const privateGrowth = computed(() => {
  const privates = points.filter((p) => p.kind === 'private')
  const lo = privates.reduce((a, b) => (a.incomesControlled < b.incomesControlled ? a : b))
  return {
    fromPerson: shortName(lo.person),
    fromYear: lo.year,
    fromVal: lo.incomesControlled,
    toVal: newest.value.incomesControlled,
    factor: Math.round(newest.value.incomesControlled / lo.incomesControlled),
  }
})

function setMetric(value) {
  metric.value = value
  nextTick(buildChart)
}

function buildChart() {
  if (mainChart) mainChart.destroy()
  if (!mainCanvas.value) return
  const cc = chartColors()
  const meta = metricMeta[metric.value]

  const labels = points.map((p) => [String(p.year), shortName(p.person)])
  const pointColors = points.map((p) => (p.kind === 'sovereign' ? SOVEREIGN_COLOR : PRIVATE_COLOR))
  const pointStyles = points.map((p) => (p.kind === 'sovereign' ? 'rectRot' : 'circle'))

  mainChart = new Chart(mainCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Low estimate',
          data: points.map(meta.low),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: false,
        },
        {
          label: 'High estimate',
          data: points.map(meta.high),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: '-1',
          backgroundColor: PRIVATE_SOFT,
        },
        {
          label: meta.label,
          data: points.map(meta.mid),
          borderColor: PRIVATE_COLOR,
          backgroundColor: pointColors,
          pointBackgroundColor: pointColors,
          pointBorderColor: pointColors,
          pointStyle: pointStyles,
          borderWidth: 2.5,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: false,
          tension: 0.25,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      scales: {
        x: {
          ticks: { color: cc.text, font: { size: 11 } },
          grid: { color: cc.grid },
        },
        y: {
          type: 'logarithmic',
          title: { display: true, text: meta.axis, color: cc.text, font: { size: 12 } },
          ticks: {
            color: cc.text,
            callback: (v) => {
              const log = Math.log10(v)
              return Number.isInteger(log) || Math.abs(log - Math.round(log)) < 1e-9
                ? fmtCompact(v)
                : ''
            },
          },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => {
              const p = points[items[0].dataIndex]
              return `${p.year} — ${p.person}`
            },
            label: () => '',
            afterBody: (items) => {
              const p = points[items[0].dataIndex]
              const meta = metricMeta[metric.value]
              const lines = [
                `${meta.label}: ${fmtFull(meta.mid(p))} ${meta.unit}`,
                `Range: ${fmtCompact(meta.low(p))} – ${fmtCompact(meta.high(p))}`,
                '',
                `Net worth: ${p.netWorthLabel}`,
                `Gold: ${p.goldPriceLabel}`,
                `Avg income: ${p.incomeLabel}`,
                `${p.kind === 'sovereign' ? '♦ sovereign/state-blended' : '● private fortune'}` +
                  ` · confidence: ${p.confidence}` +
                  (p.contested ? ' · contested' : ''),
              ]
              return lines.join('\n')
            },
          },
        },
      },
    },
  })
}

function rebuild() {
  buildChart()
}

onMounted(() => {
  nextTick(rebuild)
})
</script>

<template>
  <GraphWrapper
    title="The richest man in the world — in gold, and in other people's lives"
    max-width="5xl"
    @theme-change="nextTick(rebuild)"
  >
    <template #subtitle>
      A dollar figure tells you almost nothing across a thousand years — inflation, exchange rates and
      currencies that no longer exist get in the way. So here is the world's richest person at
      logarithmically-spaced dates (this year, then 1, 2, 4, 8 … 1024 years ago), with each fortune
      shown two honest ways: how many <strong>pounds of gold</strong> it could buy at that year's gold
      price, and how many <strong>average people's entire annual incomes</strong> it equals. Both are
      immune to inflation. The data is estimated and the deep past is fuzzy — that's labeled throughout.
    </template>

    <!-- Short answer -->
    <div class="mt-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">The short answer</h3>
      <p class="mt-2 text-[var(--text-primary)]">
        In 2026 the richest man — Elon Musk, briefly the world's first trillionaire — controls roughly
        <strong>{{ fmtCompact(newest.incomesControlled) }} average global incomes</strong>: his fortune
        equals the entire yearly income of about {{ fmtFull(newest.incomesControlled) }} ordinary people.
        That is more than any documented private individual in history, and more even than the
        state-blended treasuries of ancient emperors. Among purely <em>private</em> fortunes, the figure
        has grown roughly <strong>{{ privateGrowth.factor.toLocaleString() }}×</strong> since
        {{ privateGrowth.fromPerson }} in {{ privateGrowth.fromYear }}. But measured in
        <em>gold</em>, the recent climb is far more muted — gold rose so fast in the 2020s that Musk's
        wealth barely gained ground until the 2026 IPO. Two different honest metrics, two different stories.
      </p>
    </div>

    <!-- Main chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 class="text-lg font-semibold">{{ m.label }}, 1002&ndash;2026</h3>
        <div class="flex gap-1 text-xs">
          <button
            @click="setMetric('incomes')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              metric === 'incomes'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Average incomes</button>
          <button
            @click="setMetric('gold')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              metric === 'gold'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Pounds of gold</button>
        </div>
      </div>
      <div style="height: 420px;">
        <canvas ref="mainCanvas"></canvas>
      </div>
      <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[var(--text-muted)]">
        <span class="inline-flex items-center gap-1.5">
          <span class="inline-block w-3 h-3 rounded-full" :style="{ background: PRIVATE_COLOR }"></span>
          private fortune
        </span>
        <span class="inline-flex items-center gap-1.5">
          <span class="inline-block w-3 h-3 rotate-45" :style="{ background: SOVEREIGN_COLOR }"></span>
          sovereign / state-blended
        </span>
        <span>shaded band = realistic estimate range · log scale · x-axis is not linear in time</span>
      </div>
    </div>

    <!-- Findings -->
    <div class="mt-8 grid gap-3 md:grid-cols-2">
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Modern wealth beats the god-emperors</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Basil II (1002) sat on ~64 tonnes of imperial gold and still "controlled" only ~3.7M average
          incomes — and that was the whole Byzantine <em>state</em>. Today's #1 private fortune more than
          quadruples that. Wealth concentration in a single private pair of hands is genuinely without
          historical precedent.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Gold and income disagree</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Flip the toggle. In <em>income</em> terms wealth marches up almost monotonically. In
          <em>gold</em> terms Musk's 2022&ndash;2025 fortune actually flat-lined — gold rose ~90% over
          those years, so the same billions bought no more metal. Only the 2026 trillion-dollar moment
          broke out. Which metric you trust changes the headline.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The private–sovereign trap</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          The two purple diamonds (Basil II, the Sultan of Brunei) tower over the private merchants of
          their eras for a boring reason: when one man <em>is</em> the state, his "net worth" is the
          national treasury. The private dukes and bankers of 1514 and 1770 controlled far less. We keep
          them on the chart but mark them, because mixing them silently would be dishonest.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The bars are wide on purpose</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          A modern fortune is mostly stock, so it swings tens of billions in a week. Musk's 2025 band runs
          $300B&ndash;$726B; his 2026 band touched $1.45T before falling back below $1T. The deep-past
          points are order-of-magnitude reconstructions. The error bands are the honest part — the single
          line is just the best guess inside them.
        </p>
      </div>
    </div>

    <!-- Data table -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6 overflow-x-auto">
      <h3 class="text-lg font-semibold">Every data point</h3>
      <p class="mt-1 text-sm text-[var(--text-muted)]">
        Net worth is in each year's own currency; the two right-hand columns are the inflation-proof
        normalizations. Hover the chart for sources and notes.
      </p>
      <table class="mt-4 w-full text-sm border-collapse">
        <thead>
          <tr class="text-left text-[var(--text-secondary)] border-b border-[var(--border)]">
            <th class="py-2 pr-3 font-semibold">Year</th>
            <th class="py-2 pr-3 font-semibold">Richest person</th>
            <th class="py-2 pr-3 font-semibold text-right">Net worth</th>
            <th class="py-2 pr-3 font-semibold text-right">Gold price</th>
            <th class="py-2 pr-3 font-semibold text-right">Avg income</th>
            <th class="py-2 pr-3 font-semibold text-right">Avg incomes</th>
            <th class="py-2 font-semibold text-right">Lbs of gold</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in [...points].reverse()"
            :key="p.year"
            class="border-b border-[var(--border-light)] last:border-0 align-top"
          >
            <td class="py-2 pr-3 font-mono text-[var(--text-muted)]">{{ p.year }}</td>
            <td class="py-2 pr-3">
              <span class="text-[var(--text-primary)]">{{ shortName(p.person) }}</span>
              <span
                v-if="p.kind === 'sovereign'"
                class="ml-1.5 inline-block px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wide bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-200"
              >sovereign</span>
              <span
                v-if="p.contested"
                class="ml-1.5 inline-block px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wide bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200"
              >contested</span>
            </td>
            <td class="py-2 pr-3 text-right text-[var(--text-muted)] whitespace-nowrap">{{ p.netWorthLabel }}</td>
            <td class="py-2 pr-3 text-right text-[var(--text-muted)] whitespace-nowrap">{{ p.goldPriceLabel.split(' (')[0] }}</td>
            <td class="py-2 pr-3 text-right text-[var(--text-muted)] whitespace-nowrap">{{ p.incomeLabel.split(' (')[0] }}</td>
            <td class="py-2 pr-3 text-right font-semibold text-[var(--text-primary)] whitespace-nowrap">{{ fmtCompact(p.incomesControlled) }}</td>
            <td class="py-2 text-right font-semibold text-[var(--text-primary)] whitespace-nowrap">{{ fmtCompact(p.poundsOfGold) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Methodology -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-6">
      <h3 class="text-lg font-semibold">How honest is this?</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        What's measured directly, what's estimated, and what's derived. The further back you go, the
        softer the numbers — but the gold price is solid for most of the range, and the two ratios are
        unit-clean even when the underlying currency is long dead.
      </p>
      <div class="mt-4 space-y-3">
        <div
          v-for="note in methodology"
          :key="note.signal"
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-3 border-b border-[var(--border-light)] last:border-0 last:pb-0"
        >
          <div class="flex-shrink-0 sm:w-40">
            <span
              :class="[
                'inline-block px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wide',
                note.status === 'measured'
                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : note.status === 'estimated'
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200'
                    : 'bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-200'
              ]"
            >{{ note.status }}</span>
            <div class="mt-1 text-sm font-semibold text-[var(--text-primary)]">{{ note.signal }}</div>
          </div>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ note.detail }}</p>
        </div>
      </div>
      <div class="mt-5 pt-4 border-t border-[var(--border-light)] text-sm text-[var(--text-muted)] leading-relaxed">
        <strong class="text-[var(--text-secondary)]">Where it could be wrong:</strong>
        The deep-past identities are genuinely uncertain — 1770 has no documented "world's richest," and
        1002 blurs personal and imperial wealth. The modern net worths depend entirely on which day you
        snapshot. We chose the Forbes annual list for consistency, which makes 2024 belong to Bernard
        Arnault even though Musk took the lead by December. None of that moves the headline: private
        wealth concentration today is off the historical chart.
      </div>
    </div>

    <!-- Sources -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Sources</h3>
      <p class="mt-2 text-xs text-[var(--text-muted)]">
        Gold prices: gold standard / Bretton Woods records and World Gold Council annual averages.
        Net worths: Forbes, Bloomberg, Guinness World Records, and historical scholarship (Steinmetz on
        Fugger; standard biographies for Clive, Rockefeller, Getty). Average income: World Bank
        (NY.GDP.PCAP.CD) and the Maddison Project / Our World in Data for pre-1960 figures.
      </p>
      <ul class="mt-3 space-y-2 text-xs text-[var(--text-muted)] leading-relaxed">
        <li v-for="p in [...points].reverse()" :key="p.year">
          <span class="font-mono text-[var(--text-secondary)]">{{ p.year }}</span>
          <span class="text-[var(--text-primary)]">· {{ shortName(p.person) }}</span> —
          <span v-for="(s, i) in p.sources" :key="i">{{ s.source }}<span v-if="i < p.sources.length - 1">; </span></span>
        </li>
      </ul>
    </div>
  </GraphWrapper>
</template>
