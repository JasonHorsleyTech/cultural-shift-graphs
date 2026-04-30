<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, Tooltip, Legend } from 'chart.js'
import { commodities, wages, productivity } from './data/grandpas-eggs.ts'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'

Chart.register(LineController, LineElement, PointElement, LinearScale, Tooltip, Legend)

const CHEAPEST = '#3b82f6'
const QUALITY = '#ef4444'
const BENCHMARK = '#94a3b8'

const selectedId = ref(null)
const charts = {}
const canvasRefs = {}
const expandedChartEl = ref(null)
let expandedChart = null

function setCanvasRef(id, el) { if (el) canvasRefs[id] = el }

function laborMin(price, year) {
  const w = wages[year]
  return w ? (price / w) * 60 : null
}

function benchMin(commodity, year) {
  const base = commodity.prices.find(p => p.year === 1955)
  if (!base) return null
  const bm = laborMin(base.cheapest, 1955)
  if (!bm) return null
  const p55 = productivity[1955]
  const py = productivity[year]
  if (!p55 || !py) return null
  return bm / (py / p55)
}

function hasGap(c) {
  return c.prices.some(p => Math.abs(p.qualityEquiv - p.cheapest) / Math.max(p.cheapest, 0.01) > 0.05)
}

function verdictColor(v) {
  return { 'Quality degraded': '#ef4444', 'Progress wins': '#22c55e', 'Mixed': '#f59e0b', 'No change': '#94a3b8' }[v] || '#94a3b8'
}

function fmtMin(m) {
  if (m == null) return '\u2014'
  if (m >= 600) return Math.round(m / 60) + ' hr'
  if (m >= 60) return (m / 60).toFixed(1) + ' hr'
  return m.toFixed(1) + ' min'
}

function fmtPrice(p) {
  if (p >= 100) return '$' + Math.round(p).toLocaleString()
  return '$' + p.toFixed(2)
}

const categories = computed(() => [
  { name: 'Food', items: commodities.filter(c => c.category === 'Food') },
  { name: 'Services', items: commodities.filter(c => c.category === 'Services') },
  { name: 'Durables', items: commodities.filter(c => c.category === 'Durables') },
])

const selected = computed(() =>
  selectedId.value ? commodities.find(c => c.id === selectedId.value) : null
)

const selectedHasGap = computed(() => selected.value ? hasGap(selected.value) : false)

const degradedCount = commodities.filter(c => c.verdict === 'Quality degraded').length
const progressCount = commodities.filter(c => c.verdict === 'Progress wins').length

function buildDatasets(commodity, expanded) {
  const cheap = commodity.prices.map(p => ({ x: p.year, y: laborMin(p.cheapest, p.year) })).filter(d => d.y != null)
  const qual = commodity.prices.map(p => ({ x: p.year, y: laborMin(p.qualityEquiv, p.year) })).filter(d => d.y != null)
  const bench = commodity.prices.map(p => ({ x: p.year, y: benchMin(commodity, p.year) })).filter(d => d.y != null)
  const gap = hasGap(commodity)
  const bw = expanded ? 2.5 : 2
  const pr = expanded ? 3 : 0

  const ds = [{
    label: 'Cheapest available',
    data: cheap,
    borderColor: CHEAPEST, backgroundColor: CHEAPEST,
    borderWidth: bw, pointRadius: pr, pointHoverRadius: expanded ? 5 : 0,
    tension: 0.3, fill: false,
  }]

  if (gap) {
    ds.push({
      label: "What grandpa got",
      data: qual,
      borderColor: QUALITY, backgroundColor: QUALITY,
      borderWidth: bw, pointRadius: pr, pointHoverRadius: expanded ? 5 : 0,
      tension: 0.3, fill: false,
    })
  }

  ds.push({
    label: 'If productivity were shared',
    data: bench,
    borderColor: BENCHMARK, backgroundColor: BENCHMARK,
    borderDash: [5, 4],
    borderWidth: expanded ? 2 : 1.5, pointRadius: 0,
    tension: 0.3, fill: false,
  })

  return ds
}

function makeOpts(expanded) {
  const c = chartColors()
  return {
    responsive: true, maintainAspectRatio: false, animation: false,
    ...(expanded ? { interaction: { mode: 'index', intersect: false } } : {}),
    plugins: {
      legend: expanded
        ? { display: true, labels: { color: c.text, usePointStyle: true, font: { size: 11 } } }
        : { display: false },
      tooltip: expanded
        ? { callbacks: { title: i => i.length ? String(i[0].parsed.x) : '', label: i => `${i.dataset.label}: ${fmtMin(i.parsed.y)}` } }
        : { enabled: false },
    },
    scales: {
      x: {
        type: 'linear', min: 1950, max: 2025,
        ticks: expanded
          ? { stepSize: 10, color: c.text, callback: v => String(v) }
          : { callback: v => (v === 1950 || v === 2025) ? String(v) : '', color: c.text, font: { size: 9 }, maxTicksLimit: 4 },
        grid: expanded ? { color: c.grid } : { display: false },
        title: expanded ? { display: true, text: 'Year', color: c.text } : { display: false },
      },
      y: {
        suggestedMin: 0,
        ticks: expanded
          ? { color: c.text, callback: v => fmtMin(v) }
          : { maxTicksLimit: 3, color: c.text, font: { size: 9 }, callback: v => v >= 60 ? Math.round(v / 60) + 'h' : Math.round(v) },
        grid: { color: expanded ? c.grid : c.grid + '40' },
        title: expanded ? { display: true, text: 'Minutes of median work', color: c.text } : { display: false },
      },
    },
  }
}

function select(id) { selectedId.value = selectedId.value === id ? null : id }

watch(selectedId, (newId) => {
  if (expandedChart) { expandedChart.destroy(); expandedChart = null }
  if (newId) {
    nextTick(() => {
      rebuildExpandedChart()
      const panel = document.querySelector('.detail-panel')
      if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
})

function rebuildExpandedChart() {
  if (expandedChart) { expandedChart.destroy(); expandedChart = null }
  if (!expandedChartEl.value || !selected.value) return
  expandedChart = new Chart(expandedChartEl.value, {
    type: 'line',
    data: { datasets: buildDatasets(selected.value, true) },
    options: makeOpts(true),
  })
}

const tableData = computed(() => {
  if (!selected.value) return []
  return selected.value.prices.map(p => ({
    year: p.year,
    wage: wages[p.year],
    cp: p.cheapest,
    qp: p.qualityEquiv,
    cm: laborMin(p.cheapest, p.year),
    qm: laborMin(p.qualityEquiv, p.year),
    bm: benchMin(selected.value, p.year),
  }))
})

function rebuildAllCharts() {
  for (const c of commodities) {
    if (charts[c.id]) { charts[c.id].destroy(); delete charts[c.id] }
    if (canvasRefs[c.id]) {
      charts[c.id] = new Chart(canvasRefs[c.id], {
        type: 'line', data: { datasets: buildDatasets(c, false) }, options: makeOpts(false),
      })
    }
  }
  if (selected.value) rebuildExpandedChart()
}

onMounted(() => {
  for (const c of commodities) {
    if (canvasRefs[c.id]) {
      charts[c.id] = new Chart(canvasRefs[c.id], {
        type: 'line', data: { datasets: buildDatasets(c, false) }, options: makeOpts(false),
      })
    }
  }
})

onUnmounted(() => {
  for (const id in charts) charts[id]?.destroy()
  expandedChart?.destroy()
})
</script>

<template>
  <GraphWrapper title="Grandpa's Eggs" max-width="6xl" @theme-change="rebuildAllCharts">
    <template #subtitle>
      How many minutes of work does it take to buy what grandpa got in 1955?
      For 10 commodities, we tracked the cheapest version and the quality-equivalent &mdash;
      the product that matches what was simply "the default" 70 years ago.
      The gap between them is the hidden quality tax no price index captures.
    </template>

      <!-- Stats -->
      <div class="flex flex-wrap gap-6 mb-8 text-center">
        <div>
          <div class="text-2xl font-bold text-red-500">{{ degradedCount }}/10</div>
          <div class="text-xs text-[var(--text-muted)]">quality degraded</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-green-500">{{ progressCount }}/10</div>
          <div class="text-xs text-[var(--text-muted)]">progress wins</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-[var(--text-primary)]">16&times;</div>
          <div class="text-xs text-[var(--text-muted)]">college vs productivity</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-[var(--text-primary)]">11&times;</div>
          <div class="text-xs text-[var(--text-muted)]">suit quality tax</div>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap gap-4 mb-8 text-sm text-[var(--text-secondary)]">
        <div class="flex items-center gap-1.5">
          <span class="inline-block w-5 h-0.5 rounded" :style="{ background: '#3b82f6' }"></span>
          Cheapest available
        </div>
        <div class="flex items-center gap-1.5">
          <span class="inline-block w-5 h-0.5 rounded" :style="{ background: '#ef4444' }"></span>
          What grandpa got
        </div>
        <div class="flex items-center gap-1.5">
          <span class="inline-block w-5 border-t border-dashed" style="border-color: #94a3b8; width: 20px"></span>
          If productivity were shared
        </div>
      </div>

      <!-- Category grids -->
      <div v-for="cat in categories" :key="cat.name" class="mb-10">
        <h2 class="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">{{ cat.name }}</h2>
        <div class="grid gap-3" :class="cat.items.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'">
          <div v-for="c in cat.items" :key="c.id"
               @click="select(c.id)"
               class="bg-[var(--bg-surface)] rounded-lg p-3 border cursor-pointer transition-all hover:shadow-md"
               :class="selectedId === c.id ? 'border-[var(--text-primary)] shadow-md' : 'border-[var(--border-light)]'">
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium text-[var(--text-primary)]">{{ c.name }}</span>
              <span class="text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap"
                    :style="{ backgroundColor: verdictColor(c.verdict) + '22', color: verdictColor(c.verdict) }">
                {{ c.verdict }}
              </span>
            </div>
            <div class="h-36">
              <canvas :ref="el => setCanvasRef(c.id, el)"></canvas>
            </div>
            <div class="text-[10px] text-[var(--text-faint)] mt-1">per {{ c.unit }}</div>
          </div>
        </div>
      </div>

      <!-- Expanded detail -->
      <transition name="fade">
        <div v-if="selected" class="detail-panel bg-[var(--bg-surface)] rounded-lg p-6 mb-8 border border-[var(--border)]">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h2 class="text-xl font-bold text-[var(--text-primary)]">{{ selected.name }}</h2>
              <span class="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block"
                    :style="{ backgroundColor: verdictColor(selected.verdict) + '33', color: verdictColor(selected.verdict) }">
                {{ selected.verdict }}
              </span>
            </div>
            <button @click="selectedId = null" class="text-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer px-2">&times;</button>
          </div>
          <p class="text-sm text-[var(--text-secondary)] mb-4">{{ selected.description }}</p>

          <div class="relative bg-[var(--bg-surface-alt)] rounded-lg p-4 border border-[var(--border-light)] mb-4" style="height: 400px;">
            <canvas ref="expandedChartEl"></canvas>
          </div>

          <div v-if="selected.annotations.length" class="flex flex-wrap gap-3 mb-4">
            <span v-for="a in selected.annotations" :key="a.year" class="text-xs text-[var(--text-muted)] bg-[var(--bg-surface-alt)] px-2 py-1 rounded">
              <strong>{{ a.year }}:</strong> {{ a.label }}
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-left text-[var(--text-muted)] border-b border-[var(--border)]">
                  <th class="py-2 pr-4">Year</th>
                  <th class="py-2 pr-4">Wage</th>
                  <th class="py-2 pr-4">Cheapest</th>
                  <th v-if="selectedHasGap" class="py-2 pr-4">Quality</th>
                  <th class="py-2 pr-4">Work (cheap)</th>
                  <th v-if="selectedHasGap" class="py-2 pr-4">Work (quality)</th>
                  <th class="py-2">Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableData" :key="row.year"
                    class="border-b border-[var(--border-light)] text-[var(--text-secondary)]">
                  <td class="py-1.5 pr-4 font-medium text-[var(--text-primary)]">{{ row.year }}</td>
                  <td class="py-1.5 pr-4">${{ row.wage.toFixed(2) }}</td>
                  <td class="py-1.5 pr-4">{{ fmtPrice(row.cp) }}</td>
                  <td v-if="selectedHasGap" class="py-1.5 pr-4">{{ fmtPrice(row.qp) }}</td>
                  <td class="py-1.5 pr-4">{{ fmtMin(row.cm) }}</td>
                  <td v-if="selectedHasGap" class="py-1.5 pr-4">{{ fmtMin(row.qm) }}</td>
                  <td class="py-1.5">{{ fmtMin(row.bm) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </transition>

      <!-- Methodology -->
      <div class="text-xs text-[var(--text-faint)] mt-8 max-w-3xl">
        <p class="mb-2">
          <strong class="text-[var(--text-muted)]">How to read this:</strong>
          Each chart shows how many minutes of median work it takes to buy one unit.
          Blue is the cheapest available version. Red is the quality-equivalent &mdash;
          the modern product that matches what the standard product was in 1955. The dashed grey line
          shows where the cost would be if productivity gains since 1955 were shared proportionally
          with workers.
        </p>
        <p>
          <strong class="text-[var(--text-muted)]">Sources:</strong>
          BLS CES/CPS median earnings, BLS OPHNFB productivity index, BLS APU series &amp; USDA ERS (food),
          NCES &amp; College Board (tuition), NATO (movies), Sears catalogs &amp; BLS CPI (durables).
          30 research tickets with full citations in project files.
        </p>
      </div>
  </GraphWrapper>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
