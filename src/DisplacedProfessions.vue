<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { Chart, BubbleController, ScatterController, LineController, LineElement, PointElement,
  LinearScale, Tooltip, Legend } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { events } from './data/displaced-professions.ts'
import { initTheme, toggleTheme, chartColors } from './theme.js'

Chart.register(BubbleController, ScatterController, LineController, LineElement, PointElement,
  LinearScale, Tooltip, Legend, annotationPlugin)

const isDark = ref(false)
const selectedId = ref(null)
const activeMechanisms = ref(new Set(['gradual', 'tipping', 'shock']))

// --- Colors & helpers ---
const mechColor = (m) => ({ gradual: '#3b82f6', tipping: '#f97316', shock: '#ef4444' })[m]
const mechColorAlpha = (m, a) => {
  const hex = mechColor(m)
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}
const mechLabel = (m) => ({ gradual: 'Gradual erosion', tipping: 'Tipping point', shock: 'Discrete shock' })[m]
const mechBorder = (m) => ({ gradual: 'border-l-blue-400 dark:border-l-blue-600', tipping: 'border-l-orange-400 dark:border-l-orange-600', shock: 'border-l-red-400 dark:border-l-red-600' })[m]

function formatNum(n) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `${Math.round(n / 1000)}K`
  return `${n}`
}

// --- Process timeline data for SVG mini-charts ---
const W = 300, H = 180, L = 38, R = 292, T = 12, B = 152

function processEvent(e) {
  const wfs = e.timeline.map(d => d[1])
  const peak = Math.max(...wfs)
  const years = e.timeline.map(d => d[0])
  const minY = Math.min(...years), maxY = Math.max(...years)
  const yr = maxY - minY || 1
  const peakTimelineYear = e.timeline.find(d => d[1] === peak)[0]

  const points = e.timeline.map(d => ({
    x: L + (d[0] - minY) / yr * (R - L),
    y: B - (d[1] / peak * 100) / 110 * (B - T),
    year: d[0], workforce: d[1], pct: d[1] / peak * 100, source: d[2],
  }))
  const polyline = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const baselineY = B - 100 / 110 * (B - T)
  const halfY = B - 50 / 110 * (B - T)
  const ticks = [...new Set([minY, peakTimelineYear, maxY])].sort((a, b) => a - b)
  const xTicks = ticks.map(y => ({ year: y, x: L + (y - minY) / yr * (R - L) }))

  return { ...e, peak, peakTimelineYear, minYear: minY, maxYear: maxY, points, polyline, baselineY, halfY, xTicks }
}

const processed = computed(() => events.map(processEvent))

const selectedEvent = computed(() =>
  selectedId.value ? processed.value.find(e => e.id === selectedId.value) : null
)

// --- Scatter data: events with both yearsTo75pctDecline AND incomeRecoveryPct ---
const scatterEvents = computed(() =>
  events.filter(e => e.yearsTo75pctDecline != null && e.incomeRecoveryPct != null
    && activeMechanisms.value.has(e.mechanism))
)
const excludedEvents = computed(() =>
  events.filter(e => e.yearsTo75pctDecline == null || e.incomeRecoveryPct == null)
)

function bubbleRadius(peakWorkforce) {
  return Math.max(5, (Math.log10(peakWorkforce) - 3) * 8)
}

// --- Charts ---
const scatterCanvas = ref(null)
const spaghettiCanvas = ref(null)
let scatterChart = null
let spaghettiChart = null

function buildScatterDatasets() {
  const mechanisms = ['gradual', 'tipping', 'shock']
  return mechanisms
    .filter(m => activeMechanisms.value.has(m))
    .map(m => {
      const evts = events.filter(e => e.mechanism === m && e.yearsTo75pctDecline != null && e.incomeRecoveryPct != null)
      return {
        label: mechLabel(m),
        data: evts.map(e => ({
          x: e.yearsTo75pctDecline,
          y: e.incomeRecoveryPct,
          r: bubbleRadius(e.peakWorkforce),
          _id: e.id,
          _name: e.name,
          _workforce: e.peakWorkforce,
        })),
        backgroundColor: mechColorAlpha(m, 0.45),
        borderColor: mechColor(m),
        borderWidth: 1.5,
        hoverBorderWidth: 3,
      }
    })
}

function scatterOpts() {
  const c = chartColors()
  return {
    responsive: true, maintainAspectRatio: false, animation: false,
    interaction: { mode: 'nearest', intersect: true },
    scales: {
      x: {
        type: 'linear', title: { display: true, text: 'Years from peak to 75% workforce decline', color: c.text },
        min: 0, max: 75,
        ticks: { color: c.text, stepSize: 10 },
        grid: { color: c.grid },
      },
      y: {
        type: 'linear', title: { display: true, text: 'Income recovery (% of peak)', color: c.text },
        min: 0, max: 145,
        ticks: { color: c.text, stepSize: 25, callback: v => v + '%' },
        grid: { color: c.grid },
      },
    },
    plugins: {
      legend: {
        display: true, position: 'top', labels: { color: c.text, usePointStyle: true, pointStyle: 'circle', padding: 16 },
      },
      tooltip: {
        callbacks: {
          title(ctx) { return ctx[0]?.raw?._name || '' },
          label(ctx) {
            const d = ctx.raw
            return [
              `${d.x} years to 75% decline`,
              `${d.y}% income recovery`,
              `Peak workforce: ${formatNum(d._workforce)}`,
            ]
          },
        },
      },
      annotation: {
        annotations: {
          breakeven: {
            type: 'line', yMin: 100, yMax: 100, borderColor: c.grid, borderWidth: 1.5, borderDash: [6, 4],
            label: { display: true, content: '100% recovery', position: 'end', backgroundColor: 'transparent', color: c.text, font: { size: 10, style: 'italic' } },
          },
          decade: {
            type: 'line', xMin: 10, xMax: 10, borderColor: c.grid, borderWidth: 1, borderDash: [4, 4],
            label: { display: true, content: '10 years', position: 'start', backgroundColor: 'transparent', color: c.text, font: { size: 10, style: 'italic' } },
          },
        },
      },
    },
    onClick(_event, elements, chart) {
      if (!elements.length) { selectedId.value = null; return }
      const id = chart.data.datasets[elements[0].datasetIndex].data[elements[0].index]._id
      selectedId.value = selectedId.value === id ? null : id
      scrollToDetail()
    },
  }
}

function buildSpaghettiDatasets() {
  return processed.value
    .filter(e => activeMechanisms.value.has(e.mechanism))
    .map(e => {
      const isSelected = selectedId.value === e.id
      const data = e.timeline.map(d => ({ x: d[0] - e.peakYear, y: d[1] / e.peak * 100 }))
      return {
        label: e.name, data, showLine: true,
        borderColor: isSelected ? mechColor(e.mechanism) : mechColorAlpha(e.mechanism, 0.35),
        borderWidth: isSelected ? 3 : 1.5,
        pointRadius: isSelected ? 3 : 1.5,
        pointBackgroundColor: mechColor(e.mechanism),
        pointBorderColor: 'transparent',
        tension: 0, fill: false,
        order: isSelected ? 0 : 1,
        _id: e.id,
      }
    })
}

function spaghettiOpts() {
  const c = chartColors()
  return {
    responsive: true, maintainAspectRatio: false, animation: false,
    interaction: { mode: 'nearest', intersect: false, axis: 'xy' },
    scales: {
      x: {
        type: 'linear', title: { display: true, text: 'Years from peak employment', color: c.text },
        min: -50, max: 70,
        ticks: { color: c.text, stepSize: 10, callback: v => v === 0 ? 'Peak' : v > 0 ? `+${v}` : `${v}` },
        grid: { color: c.grid },
      },
      y: {
        title: { display: true, text: 'Workforce (% of peak)', color: c.text },
        min: 0, max: 110,
        ticks: { color: c.text, stepSize: 25, callback: v => `${v}%` },
        grid: { color: c.grid },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title(ctx) { return ctx[0].dataset.label },
          label(ctx) {
            const x = ctx.parsed.x
            const label = x === 0 ? 'Peak year' : x > 0 ? `${x}y after peak` : `${Math.abs(x)}y before peak`
            return `${label}: ${ctx.parsed.y.toFixed(0)}% of peak`
          },
        },
      },
      annotation: {
        annotations: {
          peakLine: { type: 'line', xMin: 0, xMax: 0, borderColor: c.text, borderWidth: 1, borderDash: [4, 4] },
          baseline: { type: 'line', yMin: 100, yMax: 100, borderColor: c.grid, borderWidth: 1, borderDash: [6, 4] },
        },
      },
    },
    onClick(_event, elements, chart) {
      if (!elements.length) { selectedId.value = null; return }
      const id = chart.data.datasets[elements[0].datasetIndex]._id
      selectedId.value = selectedId.value === id ? null : id
      scrollToDetail()
    },
  }
}

function rebuildAllCharts() {
  scatterChart?.destroy(); spaghettiChart?.destroy()
  scatterChart = null; spaghettiChart = null
  if (scatterCanvas.value) scatterChart = new Chart(scatterCanvas.value, { type: 'bubble', data: { datasets: buildScatterDatasets() }, options: scatterOpts() })
  if (spaghettiCanvas.value) spaghettiChart = new Chart(spaghettiCanvas.value, { type: 'scatter', data: { datasets: buildSpaghettiDatasets() }, options: spaghettiOpts() })
}

function refreshCharts() {
  if (scatterChart) { scatterChart.data.datasets = buildScatterDatasets(); scatterChart.update('none') }
  if (spaghettiChart) { spaghettiChart.data.datasets = buildSpaghettiDatasets(); spaghettiChart.update('none') }
}

watch([selectedId, activeMechanisms], refreshCharts, { deep: true })

function scrollToDetail() {
  nextTick(() => {
    const el = document.querySelector('.detail-panel')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function selectEvent(id) {
  selectedId.value = selectedId.value === id ? null : id
  scrollToDetail()
}

function toggleMechanism(m) {
  const s = new Set(activeMechanisms.value)
  s.has(m) ? s.delete(m) : s.add(m)
  if (s.size > 0) activeMechanisms.value = s
}

function onToggleTheme() {
  isDark.value = toggleTheme()
  rebuildAllCharts()
}

onMounted(async () => {
  isDark.value = initTheme()
  await nextTick()
  rebuildAllCharts()
})
onUnmounted(() => { scatterChart?.destroy(); spaghettiChart?.destroy() })

// Mechanism groups for card layout
const groups = [
  { title: 'Gradual erosion', subtitle: 'Market forces slowly eroded demand over decades.', mechanism: 'gradual' },
  { title: 'Tipping point', subtitle: 'Nonlinear collapse past a threshold — the floor dropped out.', mechanism: 'tipping' },
  { title: 'Discrete shock', subtitle: 'A single event or decision killed it overnight.', mechanism: 'shock' },
]
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12 font-sans">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <a href="/graphable/" class="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]">&larr; graphable</a>
      <button @click="onToggleTheme" class="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm cursor-pointer px-2 py-1 rounded border border-[var(--border)]">
        {{ isDark ? 'Light' : 'Dark' }}
      </button>
    </div>

    <h1 class="mt-4 text-3xl font-bold">What happens when a profession dies?</h1>
    <p class="mt-3 text-[var(--text-secondary)] leading-relaxed max-w-3xl">
      27 professions destroyed or displaced over 200 years of history. How fast did it happen?
      Did the workers recover? The answer depends almost entirely on <em>how</em> the profession died.
    </p>

    <!-- Mechanism filter -->
    <div class="mt-5 flex flex-wrap gap-3">
      <button v-for="m in ['gradual', 'tipping', 'shock']" :key="m"
        @click="toggleMechanism(m)"
        class="px-3 py-1.5 rounded-full text-xs font-medium border transition-opacity cursor-pointer"
        :class="activeMechanisms.has(m) ? 'opacity-100' : 'opacity-30'"
        :style="{ borderColor: mechColor(m), backgroundColor: mechColorAlpha(m, 0.12), color: mechColor(m) }">
        {{ mechLabel(m) }} ({{ events.filter(e => e.mechanism === m).length }})
      </button>
    </div>

    <!-- === SECTION 1: Meta-scatter bubble chart === -->
    <section class="mt-10">
      <h2 class="text-xl font-semibold">Speed vs. recovery</h2>
      <p class="mt-1 text-sm text-[var(--text-muted)] max-w-3xl">
        Each bubble is one profession. X-axis: how many years from peak employment to 75% gone.
        Y-axis: income recovery (100% = workers found comparable pay). Bubble size = peak workforce displaced.
        Events above the dashed line recovered financially. Events to the left died fast.
      </p>
      <div class="mt-4 border border-[var(--border-light)] rounded-lg p-4 bg-[var(--bg-surface)]">
        <div class="h-[480px]"><canvas ref="scatterCanvas"></canvas></div>
      </div>
      <div v-if="excludedEvents.length" class="mt-3 text-xs text-[var(--text-faint)]">
        <strong>Not shown</strong> (missing one axis):
        <span v-for="(e, i) in excludedEvents" :key="e.id">
          {{ e.name }}<span v-if="e.yearsTo75pctDecline == null"> (still declining)</span><span v-else> (no income data)</span><span v-if="i < excludedEvents.length - 1">, </span>
        </span>
      </div>
    </section>

    <!-- === SECTION 2: Spaghetti overlay === -->
    <section class="mt-14">
      <h2 class="text-xl font-semibold">All 27 overlaid</h2>
      <p class="mt-1 text-sm text-[var(--text-muted)]">
        Each line is one profession, aligned at peak employment and normalized to % of peak. Hover for details. Click to select.
      </p>
      <div class="mt-4 border border-[var(--border-light)] rounded-lg p-4 bg-[var(--bg-surface)]">
        <div class="h-[460px]"><canvas ref="spaghettiCanvas"></canvas></div>
      </div>
    </section>

    <!-- === Detail panel === -->
    <transition name="fade">
      <div v-if="selectedEvent" class="detail-panel mt-8 bg-[var(--bg-surface)] rounded-lg p-6 border border-[var(--border)]">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold">{{ selectedEvent.name }}</h2>
            <span class="inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1"
              :style="{ backgroundColor: mechColorAlpha(selectedEvent.mechanism, 0.15), color: mechColor(selectedEvent.mechanism) }">
              {{ mechLabel(selectedEvent.mechanism) }}
            </span>
            <span class="text-xs text-[var(--text-muted)] ml-2">{{ selectedEvent.country }} &middot; Peak {{ selectedEvent.peakYear }}</span>
          </div>
          <button @click="selectedId = null" class="text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer text-lg px-2">&times;</button>
        </div>

        <p class="text-sm text-[var(--text-secondary)] mb-4">{{ selectedEvent.killingEvent }}</p>

        <!-- Stats row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div class="bg-[var(--bg-surface-alt)] rounded-lg p-3">
            <div class="text-xs text-[var(--text-muted)]">Peak workforce</div>
            <div class="text-lg font-bold">{{ formatNum(selectedEvent.peakWorkforce) }}</div>
          </div>
          <div class="bg-[var(--bg-surface-alt)] rounded-lg p-3">
            <div class="text-xs text-[var(--text-muted)]">Years to 75% decline</div>
            <div class="text-lg font-bold">{{ selectedEvent.yearsTo75pctDecline ?? 'Ongoing' }}</div>
          </div>
          <div class="bg-[var(--bg-surface-alt)] rounded-lg p-3">
            <div class="text-xs text-[var(--text-muted)]">Income recovery</div>
            <div class="text-lg font-bold">{{ selectedEvent.incomeRecoveryPct != null ? selectedEvent.incomeRecoveryPct + '%' : 'N/A' }}</div>
          </div>
          <div class="bg-[var(--bg-surface-alt)] rounded-lg p-3">
            <div class="text-xs text-[var(--text-muted)]">Status</div>
            <div class="text-lg font-bold">{{ selectedEvent.currentStatus }}</div>
          </div>
        </div>

        <!-- Where they went -->
        <h3 class="text-sm font-semibold text-[var(--text-secondary)] mb-2">Where they went</h3>
        <div class="space-y-2 mb-5">
          <div v-for="d in selectedEvent.destinations" :key="d.name" class="flex items-center gap-3">
            <div class="flex-1">
              <div class="flex justify-between text-xs mb-0.5">
                <span class="text-[var(--text-secondary)]">{{ d.name }}</span>
                <span class="text-[var(--text-muted)] tabular-nums">{{ d.pct }}%</span>
              </div>
              <div class="h-2 rounded-full bg-[var(--bg-surface-alt)] overflow-hidden">
                <div class="h-full rounded-full transition-all"
                  :style="{ width: d.pct + '%', backgroundColor: mechColor(selectedEvent.mechanism) }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Texture -->
        <div class="bg-[var(--bg-surface-alt)] rounded-lg p-4 text-sm text-[var(--text-secondary)] italic border-l-2"
          :style="{ borderLeftColor: mechColor(selectedEvent.mechanism) }">
          "{{ selectedEvent.texture }}"
        </div>
      </div>
    </transition>

    <!-- === SECTION 3: Individual mini-charts === -->
    <section v-for="group in groups" :key="group.mechanism" class="mt-14"
      v-show="activeMechanisms.has(group.mechanism)">
      <h2 class="text-xl font-semibold">{{ group.title }}</h2>
      <p class="mt-1 text-sm text-[var(--text-muted)]">{{ group.subtitle }}</p>

      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="e in processed.filter(ev => ev.mechanism === group.mechanism)" :key="e.id"
          @click="selectEvent(e.id)"
          :class="['rounded-lg border border-[var(--border-light)] border-l-4 bg-[var(--bg-surface)] p-4 cursor-pointer transition-shadow hover:shadow-md', mechBorder(e.mechanism), selectedId === e.id ? 'ring-2 ring-offset-1' : '']"
          :style="selectedId === e.id ? { ringColor: mechColor(e.mechanism) } : {}">

          <div class="flex items-baseline justify-between mb-1">
            <h3 class="text-sm font-semibold text-[var(--text-primary)]">{{ e.name }}</h3>
            <span class="text-xs text-[var(--text-muted)] tabular-nums">{{ e.peakYear }}</span>
          </div>
          <p class="text-xs text-[var(--text-muted)] mb-2">
            Peak: {{ formatNum(e.peak) }} &middot; {{ e.declineShape }} &middot; {{ e.currentStatus }}
          </p>

          <svg :viewBox="`0 0 ${W} ${H}`" class="w-full h-auto">
            <line :x1="L" :y1="e.baselineY" :x2="R" :y2="e.baselineY" stroke="var(--chart-grid)" stroke-width="0.5" stroke-dasharray="4,3" />
            <line :x1="L" :y1="e.halfY" :x2="R" :y2="e.halfY" stroke="var(--chart-grid)" stroke-width="0.5" stroke-dasharray="4,3" />
            <line :x1="L" :y1="B" :x2="R" :y2="B" stroke="var(--chart-grid)" stroke-width="0.5" />
            <text :x="L - 4" :y="e.baselineY + 3" font-size="9" fill="var(--chart-text)" text-anchor="end">100%</text>
            <text :x="L - 4" :y="e.halfY + 3" font-size="9" fill="var(--chart-text)" text-anchor="end">50%</text>
            <text :x="L - 4" :y="B + 3" font-size="9" fill="var(--chart-text)" text-anchor="end">0%</text>
            <text v-for="tick in e.xTicks" :key="tick.year" :x="tick.x" :y="B + 14" font-size="9" fill="var(--chart-text)" text-anchor="middle">{{ tick.year }}</text>
            <polyline :points="e.polyline" fill="none" :stroke="mechColor(e.mechanism)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
            <g v-for="(p, i) in e.points" :key="i">
              <circle :cx="p.x" :cy="p.y" r="3.5" :fill="mechColor(e.mechanism)" stroke="var(--bg-surface)" stroke-width="1">
                <title>{{ p.year }}: {{ formatNum(p.workforce) }} ({{ p.pct.toFixed(0) }}%) — {{ p.source }}</title>
              </circle>
            </g>
          </svg>
        </div>
      </div>
    </section>

    <!-- Sources -->
    <div class="mt-14 text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
      <p><strong>Data sources:</strong> US Census, BLS OES/CES, UK Census, AISI, Heritage Newfoundland,
      Starbuck (1878), Grier (2005), Kirk-Greene, Perez et al. (2024), and others. Hover over data points for individual sources.
      Income recovery estimates based on contemporary wage data and academic research where available; some pre-1900 events use qualitative assessments.
      Bubble sizes on the scatter chart are proportional to log(peak workforce).</p>
    </div>

    <div class="h-[20vh]"></div>
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
