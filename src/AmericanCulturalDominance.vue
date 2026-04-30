<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { metrics } from './data/american-cultural-dominance.ts'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'

Chart.register(...registerables, annotationPlugin)

let mainChart = null

const categoryMeta = {
  language: { label: 'Language', color: '#3b82f6' },
  film: { label: 'Film', color: '#ef4444' },
  music: { label: 'Music', color: '#a855f7' },
  tv: { label: 'Television', color: '#f97316' },
  brands: { label: 'Brands & Lifestyle', color: '#22c55e' },
  economic: { label: 'Economic', color: '#eab308' },
  education: { label: 'Education', color: '#14b8a6' },
  military: { label: 'Military', color: '#64748b' },
  media: { label: 'Media & Tech', color: '#ec4899' },
  defensive: { label: 'Defensive Response', color: '#b45309' },
}

function interpolate(metric, year) {
  const pts = metric.dataPoints
  if (year < pts[0].year || year > pts[pts.length - 1].year) return null
  for (let i = 0; i < pts.length - 1; i++) {
    if (year >= pts[i].year && year <= pts[i + 1].year) {
      const t = (year - pts[i].year) / (pts[i + 1].year - pts[i].year)
      return pts[i].penetration + t * (pts[i + 1].penetration - pts[i].penetration)
    }
  }
  return pts[pts.length - 1].penetration
}

const minYear = Math.min(...metrics.map(m => m.dataPoints[0].year))
const maxYear = Math.max(...metrics.map(m => m.dataPoints[m.dataPoints.length - 1].year))

function computeLine(subset) {
  const points = []
  for (let year = minYear; year <= maxYear; year += 5) {
    let sum = 0, count = 0
    for (const m of subset) {
      const v = interpolate(m, year)
      if (v !== null) { sum += v; count++ }
    }
    if (count > 0) points.push({ x: year, y: sum / count, count })
  }
  return points
}

const compositeData = computeLine(metrics)
const categoryLines = Object.fromEntries(
  Object.keys(categoryMeta).map(cat => [cat, computeLine(metrics.filter(m => m.category === cat))])
)

const showCategories = ref(true)
const latestComposite = compositeData[compositeData.length - 1]
const peakComposite = compositeData.reduce((a, b) => a.y > b.y ? a : b)

const chartCanvas = ref(null)

function buildChart() {
  const c = chartColors()
  const datasets = []

  if (showCategories.value) {
    for (const [key, meta] of Object.entries(categoryMeta)) {
      const line = categoryLines[key]
      if (line.length === 0) continue
      datasets.push({
        label: meta.label,
        data: line,
        borderColor: meta.color,
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.3,
        fill: false,
      })
    }
  }

  datasets.push({
    label: 'Composite Index',
    data: compositeData,
    borderColor: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
    borderWidth: 3,
    pointRadius: 0,
    pointHoverRadius: 5,
    tension: 0.3,
    fill: false,
  })

  return new Chart(chartCanvas.value, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'nearest', axis: 'x', intersect: false },
      plugins: {
        tooltip: {
          callbacks: {
            title: items => items[0]?.raw?.x != null ? String(items[0].raw.x) : '',
            label: ctx => {
              const count = ctx.raw.count ? ` (${ctx.raw.count} metrics)` : ''
              return `${ctx.dataset.label}: ${ctx.raw.y.toFixed(1)}%${count}`
            },
          },
        },
        legend: { display: false },
        annotation: {
          annotations: {
            fifty: {
              type: 'line', yMin: 50, yMax: 50,
              borderColor: c.grid, borderWidth: 1, borderDash: [6, 4],
            },
          },
        },
      },
      scales: {
        x: {
          type: 'linear',
          title: { display: true, text: 'Year', color: c.text },
          min: minYear, max: maxYear,
          ticks: { stepSize: 20, callback: v => String(v), color: c.text },
          grid: { color: c.grid },
        },
        y: {
          title: { display: true, text: 'Penetration (%)', color: c.text },
          min: 0, max: 100,
          ticks: { callback: v => `${v}%`, stepSize: 20, color: c.text },
          grid: { color: c.grid },
        },
      },
    },
  })
}

function rebuildChart() {
  mainChart?.destroy()
  mainChart = buildChart()
}

function onToggleCategories() {
  showCategories.value = !showCategories.value
  rebuildChart()
}

const expandedMetric = ref(null)
function toggleMetric(id) {
  expandedMetric.value = expandedMetric.value === id ? null : id
}

const metricsByCategory = Object.entries(categoryMeta).map(([key, meta]) => ({
  key,
  ...meta,
  metrics: metrics.filter(m => m.category === key).map(m => {
    const last = m.dataPoints[m.dataPoints.length - 1]
    const peak = m.dataPoints.reduce((a, b) => a.penetration > b.penetration ? a : b)
    return { ...m, latest: last, peak }
  }),
}))

onMounted(async () => {
  await nextTick()
  mainChart = buildChart()
})
</script>

<template>
  <GraphWrapper title="American Cultural Dominance" max-width="5xl" @theme-change="rebuildChart">
    <template #subtitle>
      How much of the world has America captured? <strong>{{ metrics.length }}</strong> metrics
      across {{ Object.keys(categoryMeta).length }} categories, each normalized to a 0&ndash;100%
      penetration score and tracked from as early as 1800. The composite index averages all
      active metrics at each point &mdash; growing more robust as more dimensions become measurable.
    </template>

    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-alt)] p-6 max-w-3xl">
      <h2 class="text-lg font-semibold">What the data shows</h2>
      <p class="mt-2 text-[var(--text-secondary)] leading-relaxed">
        The composite peaks at <strong>{{ peakComposite.y.toFixed(1) }}%</strong>
        around <strong>{{ peakComposite.x }}</strong>
        ({{ peakComposite.count }} metrics contributing).
        The most recent value ({{ latestComposite.x }}) is
        <strong>{{ latestComposite.y.toFixed(1) }}%</strong>
        across {{ latestComposite.count }} metrics.
        Individual categories tell different stories: film peaked early and is declining,
        defensive legislation keeps climbing, and digital platform dominance arrived late but hard.
      </p>
    </div>

    <section class="mt-10">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Composite + Categories</h2>
        <button @click="onToggleCategories"
          class="text-sm cursor-pointer px-3 py-1 rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]">
          {{ showCategories ? 'Hide' : 'Show' }} categories
        </button>
      </div>
      <p class="mt-1 text-sm text-[var(--text-muted)]">
        Bold line = composite average. Colored lines = category averages. Hover for details.
      </p>
      <div class="mt-4 border border-[var(--border-light)] rounded-lg p-4 bg-[var(--bg-surface)]">
        <div class="h-[500px]"><canvas ref="chartCanvas"></canvas></div>
      </div>
      <div v-if="showCategories" class="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        <div v-for="(meta, key) in categoryMeta" :key="key" class="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
          <span class="w-3 h-0.5 inline-block" :style="{ backgroundColor: meta.color }"></span>
          {{ meta.label }}
        </div>
        <div class="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)]">
          <span class="w-6 h-0.5 inline-block bg-[var(--text-primary)]"></span>
          Composite
        </div>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="text-xl font-semibold">By category</h2>
      <div class="mt-4 overflow-x-auto">
        <table class="w-full text-sm text-[var(--text-secondary)] border-collapse">
          <thead>
            <tr class="border-b border-[var(--border)]">
              <th class="pr-4 py-2 text-left font-semibold">Category</th>
              <th class="px-4 py-2 text-right font-semibold">Metrics</th>
              <th class="px-4 py-2 text-right font-semibold">Latest</th>
              <th class="px-4 py-2 text-right font-semibold">Peak</th>
              <th class="px-4 py-2 text-right font-semibold">Peak year</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cat in metricsByCategory" :key="cat.key" class="border-b border-[var(--border-light)]">
              <td class="pr-4 py-2">
                <span class="inline-flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: cat.color }"></span>
                  {{ cat.label }}
                </span>
              </td>
              <td class="px-4 py-2 text-right tabular-nums">{{ cat.metrics.length }}</td>
              <td class="px-4 py-2 text-right tabular-nums">
                {{ categoryLines[cat.key].length ? categoryLines[cat.key][categoryLines[cat.key].length - 1].y.toFixed(1) + '%' : '---' }}
              </td>
              <td class="px-4 py-2 text-right tabular-nums">
                {{ categoryLines[cat.key].length ? categoryLines[cat.key].reduce((a, b) => a.y > b.y ? a : b).y.toFixed(1) + '%' : '---' }}
              </td>
              <td class="px-4 py-2 text-right tabular-nums">
                {{ categoryLines[cat.key].length ? categoryLines[cat.key].reduce((a, b) => a.y > b.y ? a : b).x : '---' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="text-xl font-semibold">All {{ metrics.length }} metrics</h2>
      <div class="mt-6 space-y-6">
        <div v-for="cat in metricsByCategory" :key="cat.key">
          <h3 class="text-sm font-semibold text-[var(--text-muted)] flex items-center gap-2 mb-2">
            <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: cat.color }"></span>
            {{ cat.label }}
          </h3>
          <div class="space-y-1">
            <div v-for="m in cat.metrics" :key="m.id"
              class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-3 cursor-pointer hover:border-[var(--border)] transition-colors"
              @click="toggleMetric(m.id)">
              <div class="flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <span class="font-medium text-sm">{{ m.name }}</span>
                  <span class="text-xs text-[var(--text-muted)] ml-2">{{ m.dataPoints[0].year }}&ndash;{{ m.latest.year }}</span>
                </div>
                <div class="flex items-center gap-3 text-sm tabular-nums shrink-0">
                  <span class="text-[var(--text-muted)] hidden sm:inline">Peak {{ m.peak.penetration }}% ({{ m.peak.year }})</span>
                  <span class="font-semibold">{{ m.latest.penetration }}%</span>
                </div>
              </div>
              <div v-if="expandedMetric === m.id" class="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-light)] pt-2">
                <p>{{ m.description }}</p>
                <p class="mt-1 text-[var(--text-muted)]">Denominator: {{ m.denominator }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </GraphWrapper>
</template>
