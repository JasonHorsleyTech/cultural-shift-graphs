<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'
import { estimates, agoMembership, organUse, methodology } from './data/church-organist-decline.ts'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend, annotationPlugin)

const mainCanvas = ref(null)
const agoCanvas = ref(null)
const view = ref('perCapita') // 'perCapita' | 'raw'
let mainChart = null
let agoChart = null

const perCapita = computed(() =>
  estimates.map((e) => ({
    year: e.year,
    low: (e.organistsLow * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
    mid: (e.organistsMid * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
    high: (e.organistsHigh * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
  }))
)

const peakPerCapita = computed(() => {
  const peak = perCapita.value.reduce((a, b) => (a.mid > b.mid ? a : b))
  const now = perCapita.value[perCapita.value.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.mid,
    nowMid: now.mid,
    declinePct: Math.round((1 - now.mid / peak.mid) * 100),
  }
})

const peakRaw = computed(() => {
  const peak = estimates.reduce((a, b) => (a.organistsMid > b.organistsMid ? a : b))
  const now = estimates[estimates.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.organistsMid,
    nowMid: now.organistsMid,
    declinePct: Math.round((1 - now.organistsMid / peak.organistsMid) * 100),
  }
})

function buildMainChart() {
  if (mainChart) mainChart.destroy()
  if (!mainCanvas.value) return
  const cc = chartColors()

  const labels = estimates.map((e) => e.year)
  const isPerCapita = view.value === 'perCapita'
  const series = isPerCapita
    ? perCapita.value.map((p) => ({ low: p.low, mid: p.mid, high: p.high }))
    : estimates.map((e) => ({ low: e.organistsLow, mid: e.organistsMid, high: e.organistsHigh }))

  const accent = '#7c4a3e' // muted maroon — pipe organ wood, dignified
  const accentSoft = 'rgba(124, 74, 62, 0.18)'

  mainChart = new Chart(mainCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Low estimate',
          data: series.map((s) => s.low),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: false,
        },
        {
          label: 'High estimate',
          data: series.map((s) => s.high),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: '-1',
          backgroundColor: accentSoft,
        },
        {
          label: isPerCapita ? 'Organists per million Americans' : 'Total organists (thousands)',
          data: series.map((s) => s.mid),
          borderColor: accent,
          backgroundColor: accent,
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      scales: {
        x: {
          title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: isPerCapita ? 'Organists per million Americans' : 'Organists (thousands)',
            color: cc.text,
            font: { size: 12 },
          },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: cc.text,
            filter: (item) => item.text.startsWith('Organists') || item.text === 'High estimate',
            generateLabels: (chart) => {
              const items = Chart.defaults.plugins.legend.labels.generateLabels(chart)
              return items
                .filter((i) => i.text === 'High estimate' || i.text.startsWith('Organists'))
                .map((i) => {
                  if (i.text === 'High estimate') {
                    return { ...i, text: 'Estimate range (low → high)', fillStyle: accentSoft, strokeStyle: accentSoft }
                  }
                  return i
                })
            },
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const e = estimates[ctx.dataIndex]
              const p = perCapita.value[ctx.dataIndex]
              if (isPerCapita) {
                return [
                  `Estimate: ${Math.round(p.mid)} per million`,
                  `Range: ${Math.round(p.low)} – ${Math.round(p.high)} per million`,
                  `Implied total: ~${e.organistsMid}K organists`,
                  `US pop: ${e.usPopulationMillions}M`,
                ]
              }
              return [
                `Estimate: ${e.organistsMid}K organists`,
                `Range: ${e.organistsLow}K – ${e.organistsHigh}K`,
                `US pop: ${e.usPopulationMillions}M`,
              ]
            },
            afterBody: (ctx) => {
              const e = estimates[ctx[0].dataIndex]
              return e.note ? '\n' + e.note : ''
            },
          },
        },
        annotation: {
          annotations: {
            peakLine: {
              type: 'line',
              xMin: isPerCapita
                ? labels.indexOf(peakPerCapita.value.peakYear)
                : labels.indexOf(peakRaw.value.peakYear),
              xMax: isPerCapita
                ? labels.indexOf(peakPerCapita.value.peakYear)
                : labels.indexOf(peakRaw.value.peakYear),
              borderColor: cc.text + '40',
              borderWidth: 1,
              borderDash: [4, 4],
              label: {
                display: true,
                content: 'estimated peak',
                position: 'start',
                color: cc.text,
                backgroundColor: 'transparent',
                font: { size: 10, style: 'italic' },
              },
            },
          },
        },
      },
    },
  })
}

function buildAgoChart() {
  if (agoChart) agoChart.destroy()
  if (!agoCanvas.value) return
  const cc = chartColors()
  const accent = '#7c4a3e'

  agoChart = new Chart(agoCanvas.value, {
    type: 'line',
    data: {
      labels: agoMembership.map((p) => p.year),
      datasets: [{
        label: 'AGO members',
        data: agoMembership.map((p) => p.members),
        borderColor: accent,
        backgroundColor: accent,
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { ticks: { color: cc.text }, grid: { color: cc.grid } },
        y: { beginAtZero: true, ticks: { color: cc.text }, grid: { color: cc.grid } },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const p = agoMembership[ctx.dataIndex]
              return [`${p.members.toLocaleString()} members`, p.source]
            },
          },
        },
      },
    },
  })
}

function setView(v) {
  view.value = v
  nextTick(buildMainChart)
}

function rebuildAll() {
  buildMainChart()
  buildAgoChart()
}

onMounted(() => {
  nextTick(rebuildAll)
})
</script>

<template>
  <GraphWrapper title="Did the church organist die?" max-width="4xl" @theme-change="nextTick(rebuildAll)">
    <template #subtitle>
      A one-off, for my dad. He played for forty years; his father did the same. Most of the
      professions on <a href="/graphable/displaced-professions/" class="underline hover:text-[var(--text-primary)]">the displaced-professions graph</a>
      collapsed in dramatic fashion. The church organist did something quieter — and arguably stranger.
    </template>

    <!-- Short answer callout -->
    <div class="mt-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">The short answer</h3>
      <p class="mt-2 text-[var(--text-primary)]">
        Yes — but slowly, and the slowness is what hides it. By raw count, US church-organist
        positions have fallen roughly <strong>{{ peakRaw.declinePct }}%</strong> from their estimated peak around
        <strong>{{ peakRaw.peakYear }}</strong>. Per capita, the decline is closer to <strong>{{ peakPerCapita.declinePct }}%</strong> —
        because the US population more than doubled in the meantime, the same number of organists
        means a much smaller cultural footprint. There's no Census occupation code for "church
        organist," so the totals below are honest estimates, not counted figures.
      </p>
    </div>

    <!-- Main chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 class="text-lg font-semibold">The decline, 1900&ndash;2026</h3>
        <div class="flex gap-1 text-xs">
          <button
            @click="setView('perCapita')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              view === 'perCapita'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Per million Americans</button>
          <button
            @click="setView('raw')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              view === 'raw'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Raw count</button>
        </div>
      </div>
      <div style="height: 380px;">
        <canvas ref="mainCanvas"></canvas>
      </div>
      <p class="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
        The shaded band is the joint uncertainty range across our inputs (number of congregations,
        share using organ music, organists per congregation). The line is the midpoint estimate.
        Hover for the per-data-point note. The per-capita view shows the cultural footprint;
        the raw-count view shows the absolute trajectory.
      </p>
    </div>

    <!-- Findings -->
    <div class="mt-8 grid gap-3 md:grid-cols-2">
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Why it doesn't feel dramatic</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          47% of US churches still have organ music. Lutherans 88%; Northeast 58%. Unlike whalers
          or switchboard operators, organists never went to zero — they just got rarer per capita
          while the population doubled around them.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Why the next 20 years will look steeper</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          58% of current AGO members have served 31+ years and most are mid-50s to mid-70s.
          Master's-degree enrollment in organ performance fell ~14% in a single year (2012→2013)
          and kept falling. The aging cohort is a back-loaded death scheduled to arrive ~2040.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The mechanism</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Cultural shift, not technological displacement. Vatican II opened Catholic worship to
          contemporary forms. The 1970s Jesus Movement brought guitars into evangelical churches.
          Megachurches consolidate worship into bands. The customer base shrank too — US religious
          unaffiliation went from ~7% (1972) to ~30% (2024).
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Why it's not on the main graph</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          The displaced-professions project picked events with clean longitudinal data — Census
          occupation codes, BLS series, union rolls. Church organist has none of those. The honest
          version of this story is "estimated, with wide error bars" rather than "27 data points
          from BLS." It's a real decline, just one that doesn't sit naturally next to the others.
        </p>
      </div>
    </div>

    <!-- AGO hard data -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <h3 class="text-lg font-semibold">The hard data we do have: AGO membership</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        The American Guild of Organists has tracked membership since its 1896 founding. It's not
        a count of all church organists — it's a voluntary professional guild — but it's the only
        longitudinal series we have. AGO membership peaked around <strong>2007</strong>, decades
        after the profession itself peaked. The lag is partly because the guild grew through the
        late 20th century even as the underlying population of organists was already shrinking
        — better recruiting from a smaller pool.
      </p>
      <div class="mt-4" style="height: 240px;">
        <canvas ref="agoCanvas"></canvas>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)]">
        AGO membership has fallen ~<strong>46%</strong> since its 2007 peak. That's the steepest
        hard-data trajectory in the picture, and it's likely an undercount of the underlying
        decline because guild penetration tends to be higher among older members.
      </p>
    </div>

    <!-- Methodology -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-6">
      <h3 class="text-lg font-semibold">How honest is this?</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        This is the part most graphs skip. Here's what's measured directly versus triangulated.
      </p>
      <div class="mt-4 space-y-3">
        <div
          v-for="m in methodology"
          :key="m.signal"
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-3 border-b border-[var(--border-light)] last:border-0 last:pb-0"
        >
          <div class="flex-shrink-0 sm:w-44">
            <span
              :class="[
                'inline-block px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wide',
                m.status === 'hard'
                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : m.status === 'estimated'
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200'
                    : 'bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-200'
              ]"
            >{{ m.status }}</span>
            <div class="mt-1 text-sm font-semibold text-[var(--text-primary)]">{{ m.signal }}</div>
          </div>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ m.detail }}</p>
        </div>
      </div>
      <div class="mt-5 pt-4 border-t border-[var(--border-light)] text-sm text-[var(--text-muted)] leading-relaxed">
        <strong class="text-[var(--text-secondary)]">Where it could be wrong:</strong>
        Mostly in the volunteer/honorarium boundary. If you count any church member who
        regularly plays organ at services for free as an "organist," the peak number is much
        higher — maybe 250K+ in 1955. If you only count people whose primary income comes from
        organ work, the peak is much lower — maybe 30&ndash;50K. The midpoint above counts paid
        and honorarium positions but excludes pure volunteers, which tracks how the BLS-tracked
        professions on the main graph were defined.
      </div>
    </div>

    <!-- Sources -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Sources</h3>
      <ul class="mt-3 space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
        <li>
          <a href="https://en.wikipedia.org/wiki/American_Guild_of_Organists" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            American Guild of Organists (Wikipedia)
          </a> — founding, current membership, structure.
        </li>
        <li>
          <a href="https://news.gallup.com/poll/358364/religious-americans.aspx" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Gallup: Religious service attendance trend
          </a> — 49% peak in 1955 and 1958; ~32% recent.
        </li>
        <li>
          <a href="https://research.lifeway.com/2021/08/25/9-ways-the-modern-worship-service-is-changing/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Lifeway Research: How worship is changing
          </a> — 53% (1998) → 47% of US churches use organ music; denominational and regional breakdowns.
        </li>
        <li>
          <a href="https://westfield.org/programs/curious-facts/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Westfield Center: Curious facts about the organ
          </a> — Carnegie's 1873&ndash;1919 program donated 8,812 organs to churches, schools, and civic institutions.
        </li>
        <li>
          <a href="https://religionnews.com/2017/04/13/organists-declining-but-still-in-demand-for-easter/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Religion News Service: Organist decline
          </a> — AGO 18,367 (2007) → 14,880 (2017); 58% serving 31+ years; aging demographics.
        </li>
        <li>
          <a href="https://hirr.hartfordinternational.edu/fast-facts-on-american-religion/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Hartford Institute: Fast facts on American religion
          </a> — congregation counts, denominational data.
        </li>
        <li>
          <a href="https://www.census.gov/content/dam/Census/library/publications/1968/demo/tech-18.pdf" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            US Census 1950 occupation classifications
          </a> — 166,000 musicians + music teachers (no church-organist sub-code).
        </li>
        <li>
          <a href="https://www.bls.gov/oes/current/oes272042.htm" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            BLS OES: Musicians and singers
          </a> — current US workforce, organ subset not separable.
        </li>
      </ul>
    </div>
  </GraphWrapper>
</template>
