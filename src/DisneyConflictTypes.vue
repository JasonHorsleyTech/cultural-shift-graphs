<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { conflictData } from './data/disney-conflict-types.ts'
import { initTheme, toggleTheme, chartColors } from './theme.js'

Chart.register(...registerables, annotationPlugin)

// Theme
const isDark = ref(false)
let scatterChart = null
let barChart = null

function onToggleTheme() {
  isDark.value = toggleTheme()
  rebuildCharts()
}

// --- Data prep ---
const filmCount = conflictData.length
const sorted = [...conflictData].sort((a, b) => a.releaseYear - b.releaseYear)

function loess(xs, ys, bandwidth = 0.15, weights = null) {
  const n = xs.length
  const result = []
  const xMin = Math.min(...xs)
  const xMax = Math.max(...xs)
  const steps = 200
  for (let s = 0; s <= steps; s++) {
    const x0 = xMin + (xMax - xMin) * (s / steps)
    const dists = xs.map((x) => Math.abs(x - x0))
    const sortedDists = [...dists].sort((a, b) => a - b)
    const h = sortedDists[Math.min(Math.floor(n * bandwidth), n - 1)] || 1
    let sumW = 0, sumWX = 0, sumWY = 0, sumWX2 = 0, sumWXY = 0
    for (let i = 0; i < n; i++) {
      const u = dists[i] / (h * 1.0001)
      if (u >= 1) continue
      let w = (1 - u * u * u) ** 3
      if (weights) w *= weights[i]
      sumW += w; sumWX += w * xs[i]; sumWY += w * ys[i]
      sumWX2 += w * xs[i] * xs[i]; sumWXY += w * xs[i] * ys[i]
    }
    if (sumW === 0) continue
    const denom = sumW * sumWX2 - sumWX * sumWX
    let yHat
    if (Math.abs(denom) < 1e-10) { yHat = sumWY / sumW }
    else { const b1 = (sumW * sumWXY - sumWX * sumWY) / denom; const b0 = (sumWY - b1 * sumWX) / sumW; yHat = b0 + b1 * x0 }
    result.push({ x: x0, y: Math.max(0, Math.min(1, yHat)) })
  }
  return result
}

const scatterXs = sorted.map((d) => d.releaseYear)
const scatterYs = sorted.map((d) => d.conflictScore)
const reachWeights = sorted.map((d) => (d.culturalReachPct ?? 50) / 100)
const loessCurve = loess(scatterXs, scatterYs, 0.2)
const loessWeighted = loess(scatterXs, scatterYs, 0.2, reachWeights)

function aggregateByDecade(entries) {
  const buckets = new Map()
  for (const entry of entries) {
    const reach = entry.culturalReachPct ?? 50
    const bucket = buckets.get(entry.decade) ?? { sum: 0, count: 0, wSum: 0, wTotal: 0 }
    bucket.sum += entry.conflictScore; bucket.count += 1
    bucket.wSum += entry.conflictScore * reach; bucket.wTotal += reach
    buckets.set(entry.decade, bucket)
  }
  return [...buckets.keys()].sort().map((d) => {
    const b = buckets.get(d)
    return { decade: d, avg: +(b.sum / b.count).toFixed(4), weightedAvg: +(b.wSum / b.wTotal).toFixed(4), count: b.count }
  })
}
const decadeData = aggregateByDecade(conflictData)

function scoreColor(score) {
  if (score >= 0.75) return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
  if (score >= 0.5) return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800'
  if (score >= 0.25) return 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800'
  return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800'
}
function scoreBadgeColor(score) {
  if (score >= 0.75) return 'bg-red-500'
  if (score >= 0.5) return 'bg-amber-500'
  if (score >= 0.25) return 'bg-sky-500'
  return 'bg-teal-500'
}
function scoreLabel(score) {
  if (score >= 0.75) return 'Classic villain'
  if (score >= 0.5) return 'Mixed'
  if (score >= 0.25) return 'Mostly empathy'
  return 'Pure empathy'
}
function reachLabel(pct) {
  if (pct >= 90) return 'Generational'
  if (pct >= 70) return 'Major hit'
  if (pct >= 50) return 'Wide release'
  if (pct >= 30) return 'Moderate'
  if (pct >= 10) return 'Limited'
  return 'Niche'
}

// Summary stats
const earlyDecades = conflictData.filter((d) => d.releaseYear < 2000)
const lateDecades = conflictData.filter((d) => d.releaseYear >= 2000)
const earlyAvg = +(earlyDecades.reduce((s, d) => s + d.conflictScore, 0) / earlyDecades.length).toFixed(2)
const lateAvg = +(lateDecades.reduce((s, d) => s + d.conflictScore, 0) / lateDecades.length).toFixed(2)
function weightedAvg(entries) {
  let wSum = 0, wTotal = 0
  for (const d of entries) { const r = d.culturalReachPct ?? 50; wSum += d.conflictScore * r; wTotal += r }
  return +(wSum / wTotal).toFixed(2)
}
const earlyWeighted = weightedAvg(earlyDecades)
const lateWeighted = weightedAvg(lateDecades)
const meaningfulDecades = decadeData.filter((d) => d.count >= 3)
const peakDecade = meaningfulDecades.reduce((a, b) => (a.avg > b.avg ? a : b))
const lowestDecade = meaningfulDecades.reduce((a, b) => (a.avg < b.avg ? a : b))
const peakWeighted = meaningfulDecades.reduce((a, b) => (a.weightedAvg > b.weightedAvg ? a : b))
const lowestWeighted = meaningfulDecades.reduce((a, b) => (a.weightedAvg < b.weightedAvg ? a : b))

// Filters
const selectedDecade = ref('all')
const decades = computed(() => ['all', ...[...new Set(conflictData.map((d) => d.decade))].sort()])
const filteredFilms = computed(() => {
  return selectedDecade.value === 'all' ? sorted : sorted.filter((d) => d.decade === selectedDecade.value)
})

// Charts
const scatterCanvas = ref(null)
const barCanvas = ref(null)

function buildScatterChart() {
  const c = chartColors()
  return new Chart(scatterCanvas.value, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Individual films',
          data: sorted.map((d) => ({ x: d.releaseYear, y: d.conflictScore, title: d.title, reach: d.culturalReachPct ?? 50 })),
          backgroundColor: c.point,
          borderColor: c.pointBorder,
          borderWidth: 1,
          pointRadius: sorted.map((d) => 2 + ((d.culturalReachPct ?? 50) / 100) * 10),
          pointHoverRadius: sorted.map((d) => 5 + ((d.culturalReachPct ?? 50) / 100) * 10),
        },
        {
          label: 'Trend (unweighted)',
          data: loessCurve, type: 'line',
          borderColor: c.text, borderWidth: 2, borderDash: [6, 4],
          pointRadius: 0, tension: 0.4, fill: false,
        },
        {
          label: 'Trend (reach-weighted)',
          data: loessWeighted, type: 'line',
          borderColor: '#dc2626', borderWidth: 3,
          pointRadius: 0, tension: 0.4, fill: false,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label(ctx) {
              if (ctx.datasetIndex === 0) { const d = ctx.raw; return `${d.title}: ${(d.y * 100).toFixed(0)}% conflict · ${d.reach}% reach` }
              return `${ctx.datasetIndex === 1 ? 'Unweighted' : 'Weighted'}: ${(ctx.raw.y * 100).toFixed(0)}%`
            },
          },
        },
        legend: { position: 'top', labels: { color: c.text } },
        annotation: {
          annotations: {
            midline: {
              type: 'line', yMin: 0.5, yMax: 0.5,
              borderColor: c.grid, borderWidth: 1, borderDash: [6, 4],
              label: { display: true, content: '50% — mixed', position: 'start', backgroundColor: 'transparent', color: c.text, font: { size: 11 } },
            },
          },
        },
      },
      scales: {
        x: { title: { display: true, text: 'Release year', color: c.text }, min: 1925, max: 2027, ticks: { stepSize: 10, callback: (v) => String(v), color: c.text }, grid: { color: c.grid } },
        y: { title: { display: true, text: 'Conflict score', color: c.text }, min: 0, max: 1, ticks: { callback: (v) => `${(v * 100).toFixed(0)}%`, stepSize: 0.25, color: c.text }, grid: { color: c.grid } },
      },
    },
  })
}

function buildBarChart() {
  const c = chartColors()
  const barColor = (v) => v >= 0.75 ? 'rgba(220, 38, 38, 0.6)' : v >= 0.5 ? 'rgba(245, 158, 11, 0.6)' : v >= 0.25 ? 'rgba(14, 165, 233, 0.6)' : 'rgba(20, 184, 166, 0.6)'
  const barBorder = (v) => v >= 0.75 ? '#dc2626' : v >= 0.5 ? '#f59e0b' : v >= 0.25 ? '#0ea5e9' : '#14b8a6'

  return new Chart(barCanvas.value, {
    type: 'bar',
    data: {
      labels: decadeData.map((d) => d.decade),
      datasets: [
        {
          label: 'Unweighted avg',
          data: decadeData.map((d) => d.avg),
          backgroundColor: decadeData.map((d) => barColor(d.avg)),
          borderColor: decadeData.map((d) => barBorder(d.avg)),
          borderWidth: 2, borderRadius: 4,
        },
        {
          label: 'Reach-weighted avg',
          data: decadeData.map((d) => d.weightedAvg),
          backgroundColor: 'rgba(127, 29, 29, 0.25)', borderColor: '#991b1b',
          borderWidth: 2, borderRadius: 4, borderDash: [4, 2],
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label(ctx) {
              const d = decadeData[ctx.dataIndex]
              return ctx.datasetIndex === 0 ? `Unweighted: ${(d.avg * 100).toFixed(0)}% (n=${d.count})` : `Reach-weighted: ${(d.weightedAvg * 100).toFixed(0)}%`
            },
          },
        },
        legend: { position: 'top', labels: { color: c.text } },
      },
      scales: {
        x: { title: { display: true, text: 'Decade', color: c.text }, ticks: { color: c.text }, grid: { color: c.grid } },
        y: { title: { display: true, text: 'Avg conflict score', color: c.text }, min: 0, max: 1, ticks: { callback: (v) => `${(v * 100).toFixed(0)}%`, stepSize: 0.25, color: c.text }, grid: { color: c.grid } },
      },
    },
  })
}

function rebuildCharts() {
  scatterChart?.destroy()
  barChart?.destroy()
  scatterChart = buildScatterChart()
  barChart = buildBarChart()
}

onMounted(async () => {
  isDark.value = initTheme()
  await nextTick()
  scatterChart = buildScatterChart()
  barChart = buildBarChart()
})
</script>

<template>
  <main class="max-w-5xl mx-auto px-6 py-12 font-sans">
    <div class="flex justify-between items-start">
      <a href="/graphable/" class="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]">&larr; graphable</a>
      <button @click="onToggleTheme" class="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm cursor-pointer px-2 py-1 rounded border border-[var(--border)]">
        {{ isDark ? 'Light' : 'Dark' }}
      </button>
    </div>
    <h1 class="mt-4 text-3xl font-bold">Animated conflict types over time</h1>
    <p class="mt-3 text-[var(--text-secondary)] leading-relaxed max-w-3xl">
      Hypothesis: over the last ~100 years, animated children's films have shifted from
      <em>real villains in real conflicts</em> to <em>misunderstandings resolved through
      empathy and self-understanding</em>. Data from <strong>{{ filmCount }}</strong> films
      scored on a 0–1 conflict spectrum, each weighted by estimated <strong>cultural reach</strong>.
    </p>

    <!-- Findings summary -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-alt)] p-6 max-w-3xl">
      <h2 class="text-lg font-semibold">What the data shows</h2>
      <p class="mt-2 text-[var(--text-secondary)] leading-relaxed">
        <strong>The hypothesis holds — and reach-weighting makes it stronger.</strong>
        Across {{ filmCount }} films from 1928 to 2025, films before 2000 average
        <strong>{{ (earlyAvg * 100).toFixed(0) }}%</strong> conflict (n={{ earlyDecades.length }}),
        while films from 2000 onward average
        <strong>{{ (lateAvg * 100).toFixed(0) }}%</strong> (n={{ lateDecades.length }}).
        When weighted by cultural reach, the pre-2000 average rises to
        <strong>{{ (earlyWeighted * 100).toFixed(0) }}%</strong> and the post-2000
        average drops to <strong>{{ (lateWeighted * 100).toFixed(0) }}%</strong>.
      </p>
      <p class="mt-2 text-[var(--text-secondary)] leading-relaxed">
        The reach-weighted peak is the <strong>{{ peakWeighted.decade }}</strong>
        ({{ (peakWeighted.weightedAvg * 100).toFixed(0) }}% weighted avg),
        and the lowest is the <strong>{{ lowestWeighted.decade }}</strong>
        ({{ (lowestWeighted.weightedAvg * 100).toFixed(0) }}% weighted avg).
      </p>
    </div>

    <!-- Scatter + LOESS -->
    <section class="mt-10">
      <h2 class="text-xl font-semibold">Every film, with trend lines</h2>
      <p class="mt-1 text-sm text-[var(--text-muted)]">
        Dot size = cultural reach (bigger = more kids saw it).
        <span class="text-red-600 dark:text-red-400 font-medium">Red line</span> = reach-weighted trend.
        <span class="text-[var(--text-faint)]">Dashed line</span> = unweighted. Hover for details.
      </p>
      <div class="mt-4 border border-[var(--border-light)] rounded-lg p-4 bg-[var(--bg-surface)]">
        <div class="h-[460px]"><canvas ref="scatterCanvas"></canvas></div>
      </div>
    </section>

    <!-- Bar chart by decade -->
    <section class="mt-12">
      <h2 class="text-xl font-semibold">Average by decade</h2>
      <p class="mt-1 text-sm text-[var(--text-muted)]">
        Colored bars = unweighted average. Dark outline bars = reach-weighted average.
      </p>
      <div class="mt-4 border border-[var(--border-light)] rounded-lg p-4 bg-[var(--bg-surface)]">
        <div class="h-[400px]"><canvas ref="barCanvas"></canvas></div>
      </div>
    </section>

    <!-- Decade summary table -->
    <section class="mt-12">
      <h2 class="text-xl font-semibold">Decade breakdown</h2>
      <div class="mt-4 overflow-x-auto">
        <table class="w-full text-sm text-[var(--text-secondary)] border-collapse">
          <thead>
            <tr class="border-b border-[var(--border)]">
              <th class="pr-4 py-2 text-left font-semibold">Decade</th>
              <th class="px-4 py-2 text-right font-semibold">Films</th>
              <th class="px-4 py-2 text-right font-semibold">Avg</th>
              <th class="px-4 py-2 text-right font-semibold">Weighted avg</th>
              <th class="px-4 py-2 text-right font-semibold">Diff</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in decadeData" :key="d.decade" class="border-b border-[var(--border-light)]">
              <td class="pr-4 py-2">{{ d.decade }}</td>
              <td class="px-4 py-2 text-right tabular-nums">{{ d.count }}</td>
              <td class="px-4 py-2 text-right tabular-nums">{{ (d.avg * 100).toFixed(0) }}%</td>
              <td class="px-4 py-2 text-right tabular-nums">{{ (d.weightedAvg * 100).toFixed(0) }}%</td>
              <td class="px-4 py-2 text-right tabular-nums" :class="d.weightedAvg > d.avg ? 'text-red-600 dark:text-red-400' : d.weightedAvg < d.avg ? 'text-teal-600 dark:text-teal-400' : ''">
                {{ d.weightedAvg > d.avg ? '+' : '' }}{{ ((d.weightedAvg - d.avg) * 100).toFixed(0) }}pp
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Film summary cards -->
    <section class="mt-12">
      <h2 class="text-xl font-semibold">All {{ filmCount }} films</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        <button v-for="dec in decades" :key="dec" @click="selectedDecade = dec"
          :class="[
            'px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer',
            selectedDecade === dec
              ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]'
              : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--text-muted)]',
          ]"
        >{{ dec === 'all' ? `All (${filmCount})` : dec }}</button>
      </div>

      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="film in filteredFilms" :key="film.title"
          :class="['rounded-lg border p-4', scoreColor(film.conflictScore)]">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="font-semibold leading-tight">{{ film.title }}</h3>
              <p class="text-xs mt-0.5 opacity-75">{{ film.releaseYear }} · {{ film.studio }}</p>
            </div>
            <div class="flex flex-col items-end shrink-0 gap-0.5">
              <span :class="['inline-block text-white text-xs font-bold px-2 py-0.5 rounded', scoreBadgeColor(film.conflictScore)]">
                {{ (film.conflictScore * 100).toFixed(0) }}% conflict
              </span>
              <span v-if="film.culturalReachPct != null" class="inline-block bg-neutral-700 text-white text-xs font-bold px-2 py-0.5 rounded">
                {{ film.culturalReachPct }}% reach
              </span>
              <span class="text-[10px] mt-0.5 opacity-60">{{ reachLabel(film.culturalReachPct ?? 0) }}</span>
            </div>
          </div>
          <p class="mt-2 text-xs leading-relaxed opacity-80">{{ film.reasoning }}</p>
          <p v-if="film.reachReasoning" class="mt-1 text-xs leading-relaxed opacity-60 italic">Reach: {{ film.reachReasoning }}</p>
        </div>
      </div>
    </section>

    <div class="h-[80vh]"></div>
  </main>
</template>
