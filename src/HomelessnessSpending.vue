<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import {
  Chart,
  LineController, LineElement, PointElement,
  BarController, BarElement,
  LinearScale, CategoryScale, Tooltip, Filler, Legend,
} from 'chart.js'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'
import { data, methodology } from './data/homelessness-spending.ts'

Chart.register(
  LineController, LineElement, PointElement,
  BarController, BarElement,
  LinearScale, CategoryScale, Tooltip, Filler, Legend,
)

const FED_COLOR = '#3a5a78'        // navy — federal
const FED_SOFT = 'rgba(58, 90, 120, 0.18)'
const STATE_COLOR = '#7c4a3e'      // muted maroon — state/local
const STATE_SOFT = 'rgba(124, 74, 62, 0.18)'
const CHARITY_COLOR = '#5a7c3a'    // muted olive — charity
const CHARITY_SOFT = 'rgba(90, 124, 58, 0.18)'
const RATE_COLOR = '#c97a3e'       // burnt orange — homeless rate

const spendingCanvas = ref(null)
const rateCanvas = ref(null)
const perCapitaCanvas = ref(null)
const dollarBasis = ref('real')  // 'real' (2024 dollars) | 'nominal'
let spendingChart = null
let rateChart = null
let perCapitaChart = null

const labels = data.map((d) => d.year)

// Convert a nominal billion-dollar figure for `d.year` into the active basis.
function adjust(d, value) {
  if (value == null) return null
  return dollarBasis.value === 'real' ? value * d.cpiMultiplier : value
}

const homelessPerThousand = computed(() =>
  data.map((d) =>
    d.pitCount == null ? null : (d.pitCount / (d.usPopulationMillions * 1_000_000)) * 1000,
  ),
)

// Mark the 2021 partial point with a different style.
const ratePointRadii = computed(() => data.map((d) => (d.pitPartial ? 6 : 4)))
const ratePointStyles = computed(() => data.map((d) => (d.pitPartial ? 'triangle' : 'circle')))

const totalSpending = computed(() =>
  data.map((d) => ({
    fed: adjust(d, d.fedMid),
    state: adjust(d, d.stateLocalMid),
    charity: adjust(d, d.charityMid),
    total: (adjust(d, d.fedMid) ?? 0) + (adjust(d, d.stateLocalMid) ?? 0) + (adjust(d, d.charityMid) ?? 0),
  })),
)

// Spending per homeless person — federal-only, fed+state/local, fed+state/local+charity.
// In active basis ($ per homeless person per year). Suppress for years with partial PIT (2021).
const cashTable = computed(() =>
  data.map((d, i) => {
    if (d.pitCount == null || d.pitPartial) {
      return { year: d.year, fed: null, fedState: null, fedStateCharity: null, partial: true }
    }
    const fed = (adjust(d, d.fedMid) ?? 0) * 1_000_000_000
    const state = (adjust(d, d.stateLocalMid) ?? 0) * 1_000_000_000
    const charity = (adjust(d, d.charityMid) ?? 0) * 1_000_000_000
    return {
      year: d.year,
      fed: fed / d.pitCount,
      fedState: (fed + state) / d.pitCount,
      fedStateCharity: (fed + state + charity) / d.pitCount,
      partial: false,
    }
  }),
)

const spendingPerHomeless = computed(() =>
  cashTable.value.map((r) => (r.partial ? null : r.fedStateCharity)),
)

const headline = computed(() => {
  const first = data[0]
  const last = data[data.length - 1]
  const firstTotal = (adjust(first, first.fedMid) ?? 0) + (adjust(first, first.stateLocalMid) ?? 0) + (adjust(first, first.charityMid) ?? 0)
  const lastTotal = (adjust(last, last.fedMid) ?? 0) + (adjust(last, last.stateLocalMid) ?? 0) + (adjust(last, last.charityMid) ?? 0)
  const firstRate = (first.pitCount / (first.usPopulationMillions * 1_000_000)) * 100
  const lastRate = (last.pitCount / (last.usPopulationMillions * 1_000_000)) * 100
  return {
    firstYear: first.year,
    lastYear: last.year,
    firstTotal,
    lastTotal,
    spendingMult: (lastTotal / firstTotal).toFixed(1),
    firstRate,
    lastRate,
    firstSpendingPer: ((firstTotal * 1_000_000_000) / first.pitCount),
    lastSpendingPer: ((lastTotal * 1_000_000_000) / last.pitCount),
    basisLabel: dollarBasis.value === 'real' ? 'in 2024 dollars' : 'in nominal dollars',
  }
})

function setBasis(b) {
  dollarBasis.value = b
  nextTick(rebuildAll)
}

function fmtMoney(v) {
  if (v == null) return '—'
  if (v >= 1000) return `$${(v / 1000).toFixed(0)}K`
  return `$${Math.round(v).toLocaleString()}`
}
function fmtMonthly(v) {
  if (v == null) return '—'
  return `$${Math.round(v / 12).toLocaleString()}/mo`
}

function buildSpendingChart() {
  if (spendingChart) spendingChart.destroy()
  if (!spendingCanvas.value) return
  const cc = chartColors()

  spendingChart = new Chart(spendingCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets: [
        // Federal band
        { label: 'Federal low', data: data.map((d) => adjust(d, d.fedLow)), borderColor: 'transparent', pointRadius: 0, fill: false },
        { label: 'Federal high', data: data.map((d) => adjust(d, d.fedHigh)), borderColor: 'transparent', pointRadius: 0, fill: '-1', backgroundColor: FED_SOFT },
        { label: 'Federal', data: data.map((d) => adjust(d, d.fedMid)), borderColor: FED_COLOR, backgroundColor: FED_COLOR, borderWidth: 2.5, pointRadius: 3.5, pointHoverRadius: 6, fill: false, tension: 0.25 },
        // State/local band
        { label: 'State+Local low', data: data.map((d) => adjust(d, d.stateLocalLow)), borderColor: 'transparent', pointRadius: 0, fill: false },
        { label: 'State+Local high', data: data.map((d) => adjust(d, d.stateLocalHigh)), borderColor: 'transparent', pointRadius: 0, fill: '-1', backgroundColor: STATE_SOFT },
        { label: 'State + Local', data: data.map((d) => adjust(d, d.stateLocalMid)), borderColor: STATE_COLOR, backgroundColor: STATE_COLOR, borderWidth: 2.5, pointRadius: 3.5, pointHoverRadius: 6, fill: false, tension: 0.25 },
        // Charity band
        { label: 'Charity low', data: data.map((d) => adjust(d, d.charityLow)), borderColor: 'transparent', pointRadius: 0, fill: false },
        { label: 'Charity high', data: data.map((d) => adjust(d, d.charityHigh)), borderColor: 'transparent', pointRadius: 0, fill: '-1', backgroundColor: CHARITY_SOFT },
        { label: 'Charity', data: data.map((d) => adjust(d, d.charityMid)), borderColor: CHARITY_COLOR, backgroundColor: CHARITY_COLOR, borderWidth: 2.5, pointRadius: 3.5, pointHoverRadius: 6, fill: false, tension: 0.25 },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      scales: {
        x: { title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } }, ticks: { color: cc.text }, grid: { color: cc.grid } },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Annual spending ($ billions)', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text, callback: (v) => `$${v}B` },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: {
          display: true, position: 'bottom',
          labels: {
            color: cc.text,
            generateLabels: (chart) => {
              const items = Chart.defaults.plugins.legend.labels.generateLabels(chart)
              return items.filter((i) => i.text === 'Federal' || i.text === 'State + Local' || i.text === 'Charity')
            },
          },
        },
        tooltip: {
          callbacks: {
            title: (items) => `${labels[items[0].dataIndex]} (${dollarBasis.value === 'real' ? '2024 $' : 'nominal $'})`,
            label: (ctx) => {
              const d = data[ctx.dataIndex]
              const v = ctx.parsed.y
              if (ctx.dataset.label === 'Federal') return `Federal: $${v.toFixed(1)}B (range $${adjust(d, d.fedLow).toFixed(1)}–$${adjust(d, d.fedHigh).toFixed(1)}B)`
              if (ctx.dataset.label === 'State + Local') return `State + Local: $${v.toFixed(1)}B (range $${adjust(d, d.stateLocalLow).toFixed(1)}–$${adjust(d, d.stateLocalHigh).toFixed(1)}B)`
              if (ctx.dataset.label === 'Charity') return `Charity: $${v.toFixed(1)}B (range $${adjust(d, d.charityLow).toFixed(1)}–$${adjust(d, d.charityHigh).toFixed(1)}B)`
              return null
            },
            afterBody: (ctx) => {
              const d = data[ctx[0].dataIndex]
              return d.anchorNote ? '\n' + d.anchorNote : ''
            },
          },
          filter: (ctx) => ctx.dataset.label === 'Federal' || ctx.dataset.label === 'State + Local' || ctx.dataset.label === 'Charity',
        },
      },
    },
  })
}

function buildRateChart() {
  if (rateChart) rateChart.destroy()
  if (!rateCanvas.value) return
  const cc = chartColors()

  rateChart = new Chart(rateCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Homeless per 1,000 Americans',
        data: homelessPerThousand.value,
        borderColor: RATE_COLOR,
        backgroundColor: RATE_COLOR,
        borderWidth: 2.5,
        pointRadius: ratePointRadii.value,
        pointStyle: ratePointStyles.value,
        pointHoverRadius: 7,
        tension: 0.25,
        spanGaps: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      scales: {
        x: { title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } }, ticks: { color: cc.text }, grid: { color: cc.grid } },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Homeless per 1,000 Americans', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text, callback: (v) => v.toFixed(2) },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => `${labels[items[0].dataIndex]}`,
            label: (ctx) => {
              const d = data[ctx.dataIndex]
              if (d.pitCount == null) return d.pitNote || 'No reliable data'
              const pct = (d.pitCount / (d.usPopulationMillions * 1_000_000)) * 100
              return [
                `${d.pitCount.toLocaleString()} people homeless`,
                `= ${pct.toFixed(3)}% of US population`,
                `= 1 in ${Math.round((d.usPopulationMillions * 1_000_000) / d.pitCount).toLocaleString()} Americans`,
              ]
            },
            afterBody: (ctx) => {
              const d = data[ctx[0].dataIndex]
              return d.pitNote ? '\n' + d.pitNote : ''
            },
          },
        },
      },
    },
  })
}

function buildPerCapitaChart() {
  if (perCapitaChart) perCapitaChart.destroy()
  if (!perCapitaCanvas.value) return
  const cc = chartColors()

  perCapitaChart = new Chart(perCapitaCanvas.value, {
    type: 'bar',
    data: {
      labels: data.filter((d) => d.pitCount != null).map((d) => d.year),
      datasets: [{
        label: 'Total spending per homeless person',
        data: spendingPerHomeless.value.filter((v) => v != null),
        backgroundColor: RATE_COLOR,
        borderColor: RATE_COLOR,
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } }, ticks: { color: cc.text }, grid: { color: cc.grid } },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Total US spending ÷ homeless count', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text, callback: (v) => `$${(v / 1000).toFixed(0)}K` },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `$${Math.round(ctx.parsed.y).toLocaleString()} per homeless person per year`,
          },
        },
      },
    },
  })
}

function rebuildAll() {
  buildSpendingChart()
  buildRateChart()
  buildPerCapitaChart()
}

onMounted(() => nextTick(rebuildAll))
</script>

<template>
  <GraphWrapper title="What does America spend on homelessness — and how many Americans are homeless?" max-width="4xl" @theme-change="nextTick(rebuildAll)">
    <template #subtitle>
      A one-off. The three series Jason asked for, on the same axis where possible, with honest
      uncertainty where the data demands it. Federal spending is the cleanest signal. State and
      local is the hardest — there&rsquo;s no national clearinghouse, so the wide band is real.
      Charity is anchored to one solid 2015 study and scaled from there.
    </template>

    <!-- Headline -->
    <div class="mt-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">The short answer ({{ headline.basisLabel }})</h3>
      <p class="mt-2 text-[var(--text-primary)]">
        From <strong>{{ headline.firstYear }}</strong> to <strong>{{ headline.lastYear }}</strong>,
        US spending on homelessness (federal + state/local + charity, mid-estimate) grew from
        roughly <strong>${{ headline.firstTotal.toFixed(0) }}B</strong> to
        <strong>${{ headline.lastTotal.toFixed(0) }}B</strong> — a
        <strong>{{ headline.spendingMult }}×</strong> increase {{ headline.basisLabel }}.
        The share of Americans homeless on any given night went from
        <strong>{{ headline.firstRate.toFixed(3) }}%</strong> to
        <strong>{{ headline.lastRate.toFixed(3) }}%</strong> — essentially flat, then a spike in 2023–2024.
        Spending per homeless person rose from
        ~<strong>${{ Math.round(headline.firstSpendingPer / 1000) }}K/year</strong> to
        ~<strong>${{ Math.round(headline.lastSpendingPer / 1000) }}K/year</strong>.
        Roughly 1 in {{ Math.round(335.6 / 0.7715).toLocaleString() }} Americans is homeless on a given night.
      </p>
    </div>

    <!-- Spending chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
        <h3 class="text-lg font-semibold">Spending on homelessness, 2007–2024</h3>
        <div class="flex gap-1 text-xs">
          <button
            @click="setBasis('real')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              dollarBasis === 'real'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Real (2024 $)</button>
          <button
            @click="setBasis('nominal')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              dollarBasis === 'nominal'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Nominal</button>
        </div>
      </div>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        Federal (HUD HAG + VA + HHS + others), state-and-local own-source, and charity — each shown
        as a mid-estimate with an uncertainty band. Federal is the cleanest series. State/local has
        the widest band because there&rsquo;s no national reporting standard.
      </p>
      <div class="mt-4" style="height: 380px;">
        <canvas ref="spendingCanvas"></canvas>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
        Default view: real 2024 dollars (CPI-U adjusted). Toggle to see nominal. Even in real
        dollars, total spending roughly tripled while the homeless rate barely moved until 2023.
        Hover any year for ranges and source anchors.
      </p>
    </div>

    <!-- Rate chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <h3 class="text-lg font-semibold">Homeless per 1,000 Americans</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        HUD Point-in-Time count divided by US population. The PIT count is a single-night enumeration
        every January and undercounts the truly unsheltered, but it&rsquo;s the only consistent national series.
        The 2021 dip is an artifact: HUD declined to publish a full unsheltered count that year because
        COVID disrupted enumeration in about 40% of CoCs (including most of California). The 326K plotted
        for 2021 is sheltered-only — the true total was likely close to 2020 and 2022 (~580K).
      </p>
      <div class="mt-4" style="height: 320px;">
        <canvas ref="rateCanvas"></canvas>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
        The y-axis is per thousand because the rate is tiny in absolute terms (0.2% of the population),
        but the variation is the point. 2016 was the lowest on record; 2024 the highest. Hover 2021
        for the methodology caveat.
      </p>
    </div>

    <!-- Per-homeless chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <h3 class="text-lg font-semibold">What if we just gave the money to homeless people?</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        Pure thought experiment: take all the money in each bucket, hand it directly to every PIT-counted
        homeless person, and see what shows up in their bank account. {{ headline.basisLabel }}.
        Three cumulative cuts: federal only, federal + state/local, and all three.
      </p>
      <div class="mt-4" style="height: 320px;">
        <canvas ref="perCapitaCanvas"></canvas>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
        Total spending (all three buckets) ÷ PIT count, plotted as bars. The detailed breakdown is in the
        table below. (2021 omitted — PIT count is partial.)
      </p>

      <!-- Cash equivalent table -->
      <div class="mt-6 overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] text-left text-[var(--text-secondary)]">
              <th class="py-2 pr-4 font-semibold">Year</th>
              <th class="py-2 pr-4 font-semibold">Homeless (PIT)</th>
              <th class="py-2 pr-4 font-semibold">Federal $/yr</th>
              <th class="py-2 pr-4 font-semibold">+ State/Local $/yr</th>
              <th class="py-2 pr-4 font-semibold">+ Charity $/yr</th>
              <th class="py-2 pr-4 font-semibold text-[var(--text-primary)]">All three $/mo</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in cashTable"
              :key="row.year"
              :class="['border-b border-[var(--border-light)]', row.partial ? 'opacity-50' : '']"
            >
              <td class="py-2 pr-4 font-mono">{{ row.year }}</td>
              <td class="py-2 pr-4 font-mono">{{ row.partial ? 'partial' : (data.find((d) => d.year === row.year)?.pitCount || 0).toLocaleString() }}</td>
              <td class="py-2 pr-4 font-mono">{{ fmtMoney(row.fed) }}</td>
              <td class="py-2 pr-4 font-mono">{{ fmtMoney(row.fedState) }}</td>
              <td class="py-2 pr-4 font-mono">{{ fmtMoney(row.fedStateCharity) }}</td>
              <td class="py-2 pr-4 font-mono text-[var(--text-primary)] font-semibold">{{ fmtMonthly(row.fedStateCharity) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
        Important caveat: this is not what each homeless person actually receives. Much of the
        money pays for shelter operations, overhead, housing development, prevention services, and
        bureaucratic infrastructure that never reaches anyone in the form of cash. This is the
        "if all the dollars became dollars" counterfactual — a benchmark for thinking about how
        much money is in the system, not a claim about who gets what.
      </p>
    </div>

    <!-- Observations -->
    <div class="mt-8 grid gap-3 md:grid-cols-2">
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Real spending nearly tripled. Homelessness didn&rsquo;t fall.</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          In inflation-adjusted dollars, total US spending on homelessness rose from ~$19B (2007)
          to ~$52B (2024) — a 2.7× increase. The PIT count is up 19%.
          The per-capita rate barely moved until 2023, then jumped. The most charitable read:
          spending kept homelessness from exploding even harder against rising rents. The harshest
          read: we are spending vastly more in real terms for a worse outcome.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">State and local is doing the heavy lifting</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          In real dollars, federal spending grew roughly 2×. State-and-local grew closer to 5× —
          California alone went from a couple billion to roughly $5B/year after Newsom&rsquo;s 2019
          homelessness push. The center of gravity for homelessness spending has shifted away from
          Washington.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The 2023–2024 spike is real</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          18% jump in a single year, 2023→2024. The end of pandemic-era eviction moratoria, expanded
          unemployment, and rental assistance (ERA) lines up with the timing. The migrant influx
          shows up in NYC and Chicago shelter counts. Rents stayed elevated. Multiple drivers, same
          direction.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Charity is a smaller share than people think</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Private donations to homeless-services nonprofits run roughly $10–12B/year in 2024 dollars
          — about a quarter of total US spending. Most "charity" homeless services are actually paid
          for by government grants flowing through nonprofit shelter operators. The pure-philanthropy
          line is smaller than the rhetoric suggests.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The big number: ~$5,600/month per homeless person</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Take all US public + charity spending on homelessness in 2024 and divide by the PIT count,
          and you get roughly $67K/person/year — about $5,600/month. That&rsquo;s rent on a nice
          apartment in most US cities. It&rsquo;s not what each homeless person receives, of course
          — most of the money pays for shelter operations, overhead, and housing development. But
          it&rsquo;s a stark benchmark for the scale of the system.
        </p>
      </div>
    </div>

    <!-- Methodology -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-6">
      <h3 class="text-lg font-semibold">How honest is this?</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        Where each number comes from and how solid it is.
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
        The biggest uncertainty is state-and-local. There&rsquo;s no national rollup, and even within
        California the audit found that "homelessness" spending often blurs into broader housing
        programs. If you draw the line tightly (only programs that explicitly target unhoused
        people), the totals could be 30–40% lower. If you include all subsidized housing and
        rental assistance that prevents homelessness, they&rsquo;d be substantially higher. The chart
        sits in the middle — what most analysts mean when they say "spending on homelessness."
        Years 2008, 2009, 2011, 2012, and 2013 use interpolated spending figures anchored to
        adjacent years&rsquo; known HUD HAG appropriations; the PIT counts for those years are
        directly published by HUD.
      </div>
    </div>

    <!-- Sources -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Sources</h3>
      <ul class="mt-3 space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
        <li>
          <a href="https://www.huduser.gov/portal/datasets/ahar.html" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            HUD AHAR — Annual Homelessness Assessment Reports
          </a> — Point-in-Time counts, 2007–2024.
        </li>
        <li>
          <a href="https://endhomelessness.org/state-of-homelessness/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            National Alliance to End Homelessness — State of Homelessness 2025
          </a> — year-by-year PIT totals, demographic breakdowns.
        </li>
        <li>
          <a href="https://archives.hud.gov/budget/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            HUD Budget Archives — Homeless Assistance Grants
          </a> — annual appropriations history.
        </li>
        <li>
          <a href="https://www.usich.gov/sites/default/files/document/FY_2024_Proposed_Federal_Budget_for_Homelessness.pdf" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            USICH — Targeted Federal Homelessness Funding
          </a> — cross-agency federal spending.
        </li>
        <li>
          <a href="https://nlihc.org/sites/default/files/Estimated-Revenue-of-the-Nonprofit-Homeless-Shelter-Industry-in-the-United-States-Implications-for-a-More-Comprehensive-Approach-to-Unmet-Shelter.pdf" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Culhane & An (NLIHC, 2021) — Nonprofit Homeless Shelter Industry Revenue
          </a> — $8.5B in 2015, the charity anchor.
        </li>
        <li>
          <a href="https://www.cbsnews.com/sanfrancisco/news/california-homelessness-spending-audit-24b-five-years-didnt-consistently-track-outcomes/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            CA State Auditor — $24B in 5 years on homelessness
          </a> — California 2019–2024 spending audit.
        </li>
        <li>
          <a href="https://givingusa.org/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Giving USA — Annual Report on Philanthropy
          </a> — human services giving trend.
        </li>
        <li>
          <a href="https://www.census.gov/topics/population.html" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            US Census Bureau — Population Estimates
          </a> — denominators for per-capita calculations.
        </li>
      </ul>
    </div>
  </GraphWrapper>
</template>
