<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, LogarithmicScale,
  Filler, Tooltip, Legend, CategoryScale } from 'chart.js'
import { marked } from 'marked'
import { professions, industryColors, industryGroups } from './data/service-cost-markup.ts'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'

Chart.register(LineController, LineElement, PointElement, LinearScale, LogarithmicScale,
  Filler, Tooltip, Legend, CategoryScale)

const markdownFiles = import.meta.glob('../projects/service-cost-markup/results/*.md', { query: '?raw', import: 'default', eager: true })

// State
const selectedId = ref(null)
const hoveredId = ref(null)
const activeIndustries = ref(new Set(industryGroups))
const rawChartEl = ref(null)
const changeChartEl = ref(null)
let rawChart = null
let changeChart = null

const selectedProfession = computed(() =>
  selectedId.value ? professions.find(p => p.id === selectedId.value) : null
)

function getMarkdownHtml(id) {
  const key = `../projects/service-cost-markup/results/${id}.md`
  const raw = markdownFiles[key]
  if (!raw) return '<p>No research found.</p>'
  const cleaned = raw
    .replace(/<!--\s*COMPLETE\s*-->\s*$/, '')
    .replace(/^# .+\n/, '')
    .trim()
  return marked(cleaned)
}

// Chart helpers
function alphaHex(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

function buildDatasets(mode) {
  return professions
    .filter(p => activeIndustries.value.has(p.industry))
    .filter(p => {
      if (mode === 'change') {
        const baseline = p.data[0]?.ratio || 0
        if (baseline < 1) return false
      }
      return true
    })
    .map(p => {
      const color = industryColors[p.industry]
      const isSelected = selectedId.value === p.id
      const isHovered = hoveredId.value === p.id
      const highlighted = isSelected || isHovered
      const baseline = p.data[0]?.ratio

      const data = mode === 'raw'
        ? p.data.map(d => ({ x: d.year, y: d.ratio }))
        : p.data.map(d => ({ x: d.year, y: ((d.ratio / baseline) - 1) * 100 }))

      return {
        label: p.profession,
        data,
        borderColor: highlighted ? color : alphaHex(color, 0.25),
        backgroundColor: highlighted ? color : alphaHex(color, 0.25),
        borderWidth: isSelected ? 3.5 : isHovered ? 2.5 : 1.2,
        pointRadius: highlighted ? 3 : 0,
        pointHoverRadius: 5,
        tension: 0.3,
        fill: false,
        order: highlighted ? 0 : 1,
        _id: p.id,
      }
    })
}

function chartOpts(mode) {
  const c = chartColors()
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    interaction: { mode: 'nearest', intersect: false, axis: 'xy' },
    scales: {
      x: {
        type: 'linear',
        title: { display: true, text: 'Year', color: c.text },
        min: 1958, max: 2026,
        ticks: { stepSize: 10, color: c.text, callback: v => String(v) },
        grid: { color: c.grid },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: mode === 'raw' ? 'Worker share of customer dollar (%)' : 'Change from baseline (%)',
          color: c.text,
        },
        ...(mode === 'change' ? { min: -100, max: 100 } : {}),
        ticks: { callback: v => v + '%', color: c.text },
        grid: { color: c.grid },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (items) => items.length ? items[0].dataset.label : '',
          label: (item) => {
            const suffix = mode === 'raw' ? '% of customer dollar' : '% from baseline'
            return `${item.parsed.x}: ${item.parsed.y.toFixed(1)}${suffix}`
          },
        },
      },
    },
    onClick: (_event, elements, chart) => {
      if (!elements.length) { selectedId.value = null; return }
      const id = chart.data.datasets[elements[0].datasetIndex]._id
      selectedId.value = selectedId.value === id ? null : id
    },
    onHover: (_event, elements, chart) => {
      if (!elements.length) { hoveredId.value = null; return }
      const id = chart.data.datasets[elements[0].datasetIndex]._id
      if (hoveredId.value !== id) hoveredId.value = id
    },
  }
}

function refreshCharts() {
  if (rawChart) { rawChart.data.datasets = buildDatasets('raw'); rawChart.update('none') }
  if (changeChart) { changeChart.data.datasets = buildDatasets('change'); changeChart.update('none') }
  refreshCompChart()
}

function rebuildCharts() {
  if (rawChart) { rawChart.destroy(); rawChart = null }
  if (changeChart) { changeChart.destroy(); changeChart = null }
  rawChart = new Chart(rawChartEl.value, { type: 'line', data: { datasets: buildDatasets('raw') }, options: chartOpts('raw') })
  changeChart = new Chart(changeChartEl.value, { type: 'line', data: { datasets: buildDatasets('change') }, options: chartOpts('change') })
  rebuildCompChart()
}

watch([selectedId, hoveredId, activeIndustries], refreshCharts, { deep: true })

function toggleIndustry(industry) {
  const s = new Set(activeIndustries.value)
  s.has(industry) ? s.delete(industry) : s.add(industry)
  activeIndustries.value = s
}
function showAll() { activeIndustries.value = new Set(industryGroups) }
function soloIndustry(industry) { activeIndustries.value = new Set([industry]) }

onMounted(async () => {
  rawChart = new Chart(rawChartEl.value, { type: 'line', data: { datasets: buildDatasets('raw') }, options: chartOpts('raw') })
  changeChart = new Chart(changeChartEl.value, { type: 'line', data: { datasets: buildDatasets('change') }, options: chartOpts('change') })
  // Load inflation data dynamically
  try {
    const mod = await import('./data/inflation-indices.ts')
    window.__inflationIndices = mod.inflationIndices
    inflationData.value = mod.inflationIndices
    await nextTick()
    rebuildCompChart()
  } catch (e) { console.warn('Inflation data not yet available:', e.message) }
})
onUnmounted(() => { rawChart?.destroy(); changeChart?.destroy(); compChart?.destroy() })

// Inflation chart
const compChartEl = ref(null)
let compChart = null
const selectedIndex = ref('cpiU')
const compMode = ref('pct') // 'dollars' | 'pct'
const inflationData = ref(null)

function buildCompDatasets() {
  if (!window.__inflationIndices) return []
  const index = window.__inflationIndices[selectedIndex.value]
  if (!index) return []
  const base = index.values[2024] || index.values[2023] || 1

  return professions
    .filter(p => activeIndustries.value.has(p.industry))
    .filter(p => {
      // Exclude MLB from dollars mode — it's a massive outlier that crushes the scale
      if (compMode.value === 'dollars' && p.id === '045-professional-athlete') return false
      if (compMode.value === 'pct') {
        const first = p.data.find(d => d.workerComp && index.values[d.year])
        return first && first.workerComp > 0
      }
      return true
    })
    .map(p => {
      const color = industryColors[p.industry]
      const isSelected = selectedId.value === p.id
      const isHovered = hoveredId.value === p.id
      const highlighted = isSelected || isHovered

      // For non-annual professions, scale per-transaction comp to estimated annual salary
      const latestComp = p.data[p.data.length - 1]?.workerComp || 1
      const annualMultiplier = p.annualSalary2024 ? p.annualSalary2024 / latestComp : 1

      const realPoints = p.data
        .filter(d => d.workerComp && index.values[d.year])
        .map(d => ({
          year: d.year,
          real: Math.round(d.workerComp * annualMultiplier * (base / index.values[d.year]))
        }))

      const baselineReal = realPoints[0]?.real || 1
      const data = compMode.value === 'dollars'
        ? realPoints.map(d => ({ x: d.year, y: d.real }))
        : realPoints.map(d => ({ x: d.year, y: ((d.real / baselineReal) - 1) * 100 }))

      return {
        label: p.profession,
        data,
        borderColor: highlighted ? color : alphaHex(color, 0.25),
        backgroundColor: highlighted ? color : alphaHex(color, 0.25),
        borderWidth: isSelected ? 3.5 : isHovered ? 2.5 : 1.2,
        pointRadius: highlighted ? 3 : 0,
        pointHoverRadius: 5,
        tension: 0.3,
        fill: false,
        order: highlighted ? 0 : 1,
        _id: p.id,
      }
    })
}

function compChartOpts() {
  const c = chartColors()
  const isPct = compMode.value === 'pct'
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    interaction: { mode: 'nearest', intersect: false, axis: 'xy' },
    scales: {
      x: {
        type: 'linear',
        title: { display: true, text: 'Year', color: c.text },
        min: 1958, max: 2026,
        ticks: { stepSize: 10, color: c.text, callback: v => String(v) },
        grid: { color: c.grid },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: isPct ? 'Change in real compensation (%)' : 'Estimated annual salary (2024 dollars)',
          color: c.text,
        },
        ...(isPct ? { min: -100, max: 200 } : { min: 0, max: 500000 }),
        ticks: {
          ...(isPct ? {} : { stepSize: 50000 }),
          callback: isPct
            ? (v => v + '%')
            : (v => {
                if (v >= 1000000) return '$' + (v / 1000000) + 'M'
                if (v >= 1000) return '$' + Math.round(v / 1000) + 'k'
                return '$' + v
              }),
          color: c.text,
        },
        grid: { color: c.grid },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (items) => items.length ? items[0].dataset.label : '',
          label: (item) => {
            if (isPct) return `${item.parsed.x}: ${item.parsed.y > 0 ? '+' : ''}${item.parsed.y.toFixed(1)}% from baseline`
            const prof = professions.find(p => p.id === item.dataset._id)
            const suffix = prof?.annualSalary2024 ? ' (est. annual, 2024 $)' : ' (2024 $)'
            return `${item.parsed.x}: $${item.parsed.y.toLocaleString()}${suffix}`
          },
        },
      },
    },
    onClick: (_event, elements, chart) => {
      if (!elements.length) { selectedId.value = null; return }
      const id = chart.data.datasets[elements[0].datasetIndex]._id
      selectedId.value = selectedId.value === id ? null : id
    },
    onHover: (_event, elements, chart) => {
      if (!elements.length) { hoveredId.value = null; return }
      const id = chart.data.datasets[elements[0].datasetIndex]._id
      if (hoveredId.value !== id) hoveredId.value = id
    },
  }
}

function refreshCompChart() {
  if (compChart) {
    compChart.data.datasets = buildCompDatasets()
    compChart.update('none')
  }
}

function rebuildCompChart() {
  if (compChart) { compChart.destroy(); compChart = null }
  if (compChartEl.value && window.__inflationIndices) {
    compChart = new Chart(compChartEl.value, { type: 'line', data: { datasets: buildCompDatasets() }, options: compChartOpts() })
  }
}

watch([selectedIndex, compMode], rebuildCompChart)



// Profession list helpers
const professionsByIndustry = computed(() => {
  const groups = {}
  for (const ig of industryGroups) {
    groups[ig] = professions.filter(p => p.industry === ig).sort((a, b) => {
      const aChange = a.data[a.data.length-1].ratio - a.data[0].ratio
      const bChange = b.data[b.data.length-1].ratio - b.data[0].ratio
      return aChange - bChange // most squeezed first
    })
  }
  return groups
})

function selectProfession(id) {
  selectedId.value = id
  nextTick(() => {
    const detail = document.querySelector('.detail-panel')
    if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

// Stats
const professionCount = professions.length
const downCount = professions.filter(p => p.data[p.data.length - 1]?.ratio < p.data[0]?.ratio * 0.9).length
const upCount = professions.filter(p => p.data[p.data.length - 1]?.ratio > p.data[0]?.ratio * 1.1).length
</script>

<template>
  <GraphWrapper title="Where Does My Dollar Go?" max-width="7xl" @theme-change="rebuildCharts">
    <template #subtitle>
      For {{ professionCount }} service professions, we tracked how much of what you pay
      actually reaches the person doing the work — and how that share has changed over
      decades. Of {{ professionCount }} professions studied, {{ downCount }} saw their
      share decline and only {{ upCount }} saw it grow.
    </template>

      <!-- Industry Legend -->
      <div class="flex flex-wrap gap-2 mb-6">
        <button
          v-for="industry in industryGroups" :key="industry"
          @click="toggleIndustry(industry)"
          @dblclick.prevent="soloIndustry(industry)"
          class="px-3 py-1 rounded-full text-xs font-medium border transition-opacity cursor-pointer"
          :class="activeIndustries.has(industry) ? 'opacity-100' : 'opacity-30'"
          :style="{ borderColor: industryColors[industry], backgroundColor: industryColors[industry] + '22', color: industryColors[industry] }"
        >{{ industry }} ({{ professions.filter(p => p.industry === industry).length }})</button>
        <button @click="showAll" class="px-3 py-1 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer">
          Show all
        </button>
      </div>
      <p class="text-xs text-[var(--text-faint)] mb-6">Click to toggle, double-click to solo. Click a line on the chart to see its research.</p>

      <!-- Raw % Chart -->
      <div class="mb-12">
        <h2 class="text-lg font-semibold text-[var(--text-secondary)] mb-2">Worker's Share of the Customer Dollar</h2>
        <p class="text-sm text-[var(--text-muted)] mb-3">
          Each line is one profession. The Y axis shows what percentage of the price you pay
          actually goes to the worker's compensation. Higher = more of your money reaches the person.
        </p>
        <div class="relative bg-[var(--bg-surface)] rounded-lg p-4 border border-[var(--border-light)]" style="height: 500px;">
          <canvas ref="rawChartEl"></canvas>
        </div>
      </div>

      <!-- Normalized Change Chart -->
      <div class="mb-12">
        <h2 class="text-lg font-semibold text-[var(--text-secondary)] mb-2">How Much Did the Worker Get Squeezed?</h2>
        <p class="text-sm text-[var(--text-muted)] mb-3">
          Same data, normalized. Each profession's earliest data point is the baseline (0%).
          A line at -50% means the worker's share was cut in half, regardless of whether they
          started at 90% or 10%. This reveals who got squeezed the most in relative terms.
        </p>
        <div class="relative bg-[var(--bg-surface)] rounded-lg p-4 border border-[var(--border-light)]" style="height: 500px;">
          <canvas ref="changeChartEl"></canvas>
        </div>
      </div>

      <!-- Selected Profession Detail -->
      <transition name="fade">
        <div v-if="selectedProfession" class="detail-panel bg-[var(--bg-surface)] rounded-lg p-6 mb-8 border border-[var(--border)]">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">{{ selectedProfession.profession }}</h2>
              <span class="inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1"
                :style="{ backgroundColor: industryColors[selectedProfession.industry] + '33', color: industryColors[selectedProfession.industry] }">
                {{ selectedProfession.industry }}
              </span>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold" :class="
                selectedProfession.data[selectedProfession.data.length - 1].ratio < selectedProfession.data[0].ratio * 0.9
                  ? 'text-red-500 dark:text-red-400'
                  : selectedProfession.data[selectedProfession.data.length - 1].ratio > selectedProfession.data[0].ratio * 1.1
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-[var(--text-muted)]'
              ">
                {{ selectedProfession.data[0].ratio }}% &rarr; {{ selectedProfession.data[selectedProfession.data.length - 1].ratio }}%
              </div>
              <div class="text-xs text-[var(--text-muted)]">
                {{ selectedProfession.data[0].year }} &ndash; {{ selectedProfession.data[selectedProfession.data.length - 1].year }}
              </div>
            </div>
          </div>

          <div class="prose dark:prose-invert prose-sm max-w-none
            prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)]
            prose-a:text-blue-500 dark:prose-a:text-blue-400
            prose-strong:text-[var(--text-primary)]
            prose-table:text-sm prose-th:text-[var(--text-primary)] prose-td:text-[var(--text-secondary)]
            prose-th:border-[var(--border)] prose-td:border-[var(--border-light)]"
            v-html="getMarkdownHtml(selectedProfession.id)"
          ></div>

          <button @click="selectedId = null" class="mt-6 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer">
            &times; Close
          </button>
        </div>
      </transition>

      <!-- All Professions List -->
      <div class="mb-12">
        <h2 class="text-lg font-semibold text-[var(--text-secondary)] mb-4">All {{ professionCount }} Professions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="industry in industryGroups" :key="industry">
            <h3 class="text-sm font-semibold mb-2" :style="{ color: industryColors[industry] }">{{ industry }}</h3>
            <ul class="space-y-1">
              <li v-for="p in professionsByIndustry[industry]" :key="p.id">
                <button
                  @click="selectProfession(p.id)"
                  class="text-left w-full text-sm py-0.5 px-1.5 rounded cursor-pointer hover:bg-[var(--bg-surface-alt)] transition-colors"
                  :class="selectedId === p.id ? 'bg-[var(--bg-surface)] font-semibold' : ''"
                >
                  <span class="text-[var(--text-primary)]">{{ p.profession }}</span>
                  <span class="text-xs ml-1" :class="
                    p.data[p.data.length-1].ratio < p.data[0].ratio * 0.9
                      ? 'text-red-500 dark:text-red-400'
                      : p.data[p.data.length-1].ratio > p.data[0].ratio * 1.1
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-[var(--text-faint)]'
                  ">
                    {{ p.data[0].ratio }}% &rarr; {{ p.data[p.data.length-1].ratio }}%
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Inflation-Adjusted Compensation Chart -->
      <div class="mb-12">
        <h2 class="text-lg font-semibold text-[var(--text-secondary)] mb-2">What Happened to the Actual Paycheck?</h2>
        <p class="text-sm text-[var(--text-muted)] mb-3">
          The charts above show the worker's <em>share</em> of the pie. But did the pie grow
          fast enough to offset a shrinking slice? This chart shows what each worker actually
          earns, adjusted for inflation to 2024 dollars. If a line goes up, the worker is
          materially better off despite getting a smaller cut. If it's flat, the system
          extracted value without hurting the worker. If it goes down — both the share and the
          real paycheck shrank.
        </p>
        <div class="flex flex-wrap items-center gap-4 mb-3">
          <div class="flex items-center gap-2">
            <label class="text-xs text-[var(--text-muted)]">Show:</label>
            <button @click="compMode = 'pct'"
              class="text-xs px-2 py-1 rounded border cursor-pointer"
              :class="compMode === 'pct' ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]' : 'border-[var(--border)] text-[var(--text-muted)]'">
              % Change
            </button>
            <button @click="compMode = 'dollars'"
              class="text-xs px-2 py-1 rounded border cursor-pointer"
              :class="compMode === 'dollars' ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]' : 'border-[var(--border)] text-[var(--text-muted)]'">
              Dollars
            </button>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs text-[var(--text-muted)]">Inflation index:</label>
            <select v-model="selectedIndex"
              class="text-sm bg-[var(--bg-surface)] border border-[var(--border)] rounded px-2 py-1 text-[var(--text-primary)] cursor-pointer">
              <option value="cpiU">CPI-U (official BLS)</option>
              <option value="shadowStats">ShadowStats 1980 CPI (alternative)</option>
              <option value="gold">Gold (USD/oz)</option>
            </select>
          </div>
        </div>
        <div class="relative bg-[var(--bg-surface)] rounded-lg p-4 border border-[var(--border-light)]" style="height: 500px;">
          <canvas ref="compChartEl"></canvas>
        </div>
        <p class="text-xs text-[var(--text-faint)] mt-2">
          Different indices tell radically different stories. CPI-U is the official government
          number. ShadowStats reconstructs CPI using pre-1980 methodology (before hedonic
          adjustments and substitution effects) — it shows dramatically higher inflation, implying
          real wages have cratered. Gold treats the gold price as the true measure of the dollar's
          value — volatile, but a favorite of sound-money advocates.
        </p>
        <p class="text-xs text-[var(--text-faint)] mt-1">
          Some professions' research tracked per-transaction compensation (per surgery, per ride,
          per session, etc.) rather than annual salary. For those, we estimate annual salary by
          scaling to BLS 2024 median wages, assuming the transaction-to-annual ratio is roughly
          constant over time. This is approximate but preserves the trend.
        </p>
      </div>
  </GraphWrapper>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
