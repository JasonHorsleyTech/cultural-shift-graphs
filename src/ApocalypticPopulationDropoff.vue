<script setup>
import { ref, onMounted, nextTick } from 'vue'
import {
  Chart, LineController, LineElement, PointElement,
  LinearScale, LogarithmicScale, Tooltip, Legend, Filler
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { scenarios, US_POPULATION } from './data/apocalyptic-population-dropoff.ts'
import { initTheme, toggleTheme, chartColors } from './theme.js'

Chart.register(
  LineController, LineElement, PointElement,
  LinearScale, LogarithmicScale, Tooltip, Legend, Filler, annotationPlugin
)

const isDark = ref(false)
const showBands = ref(true)
const activeIds = ref(new Set(scenarios.map(s => s.id)))
const chartCanvas = ref(null)
let chart = null

const timeLabels = {
  1: '1h', 6: '6h', 24: '1d', 168: '1w', 720: '1mo',
  2160: '3mo', 4320: '6mo', 8760: '1y', 17520: '2y',
  26280: '3y', 43800: '5y', 87600: '10y',
}

function formatHours(h) {
  if (h >= 8760) return `${(h / 8760).toFixed(1).replace(/\.0$/, '')}y`
  if (h >= 720) return `${(h / 720).toFixed(0)}mo`
  if (h >= 24) return `${(h / 24).toFixed(0)}d`
  return `${h}h`
}

function formatPop(pct) {
  const p = Math.round(US_POPULATION * pct / 100)
  return p >= 1e6 ? `${(p / 1e6).toFixed(0)}M` : p >= 1e3 ? `${(p / 1e3).toFixed(0)}K` : `${p}`
}

function toggleScenario(id) {
  const s = new Set(activeIds.value)
  s.has(id) ? s.delete(id) : s.add(id)
  activeIds.value = s
  rebuildChart()
}

function rebuildChart() {
  chart?.destroy()
  const c = chartColors()
  const active = scenarios.filter(s => activeIds.value.has(s.id))
  const datasets = []

  if (showBands.value) {
    for (const sc of active) {
      const lo = sc.timePoints.map(tp => ({ x: tp.hours, y: 100 - tp.deathsHigh }))
      const hi = sc.timePoints.map(tp => ({ x: tp.hours, y: 100 - tp.deathsLow }))
      datasets.push({
        data: lo, borderWidth: 0, pointRadius: 0, pointHitRadius: 0,
        fill: false, tension: 0.35,
      })
      datasets.push({
        data: hi, borderWidth: 0, pointRadius: 0, pointHitRadius: 0,
        fill: { target: datasets.length - 1, above: sc.color + '18' },
        backgroundColor: sc.color + '18', tension: 0.35,
      })
    }
  }

  const bandCount = datasets.length

  for (const sc of active) {
    datasets.push({
      label: sc.shortName,
      data: sc.timePoints.map(tp => ({ x: tp.hours, y: 100 - tp.deathsPct })),
      borderColor: sc.color,
      borderWidth: 2.5,
      borderDash: sc.dashed ? [8, 4] : [],
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: sc.color,
      pointHoverBorderColor: c.surface,
      pointHitRadius: 15,
      fill: false,
      tension: 0.35,
    })
  }

  chart = new Chart(chartCanvas.value, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'nearest', intersect: false, axis: 'x' },
      plugins: {
        legend: { display: false },
        tooltip: {
          filter: (item) => item.datasetIndex >= bandCount,
          backgroundColor: c.surface,
          titleColor: c.text,
          bodyColor: c.text,
          borderColor: c.grid,
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: (items) => formatHours(items[0].parsed.x),
            label: (item) => {
              const idx = item.datasetIndex - bandCount
              const sc = active[idx]
              if (!sc) return ''
              const tp = sc.timePoints.reduce((a, b) =>
                Math.abs(b.hours - item.parsed.x) < Math.abs(a.hours - item.parsed.x) ? b : a
              )
              const surv = (100 - tp.deathsPct).toFixed(1)
              const lo = (100 - tp.deathsHigh).toFixed(1)
              const hi = (100 - tp.deathsLow).toFixed(1)
              return `${sc.shortName}: ${surv}% (${lo}–${hi}%) — ${formatPop(100 - tp.deathsPct)} alive`
            },
            afterLabel: (item) => {
              const idx = item.datasetIndex - bandCount
              const sc = active[idx]
              if (!sc) return ''
              const tp = sc.timePoints.reduce((a, b) =>
                Math.abs(b.hours - item.parsed.x) < Math.abs(a.hours - item.parsed.x) ? b : a
              )
              return `  ${tp.cause}`
            },
          },
        },
        annotation: {
          annotations: {
            carryingCapacity: {
              type: 'line',
              yMin: 30,
              yMax: 30,
              borderColor: c.text + '40',
              borderWidth: 1,
              borderDash: [4, 4],
              label: {
                display: true,
                content: 'Pre-industrial carrying capacity (~100M)',
                position: 'start',
                color: c.text + '80',
                font: { size: 10, weight: 'normal' },
                backgroundColor: 'transparent',
                padding: 2,
              },
            },
          },
        },
      },
      scales: {
        x: {
          type: 'logarithmic',
          min: 1,
          max: 100000,
          grid: { color: c.grid },
          border: { color: c.grid },
          afterBuildTicks: (scale) => {
            scale.ticks = Object.keys(timeLabels).map(v => ({ value: Number(v) }))
          },
          ticks: {
            color: c.text,
            autoSkip: false,
            maxRotation: 0,
            callback: (value) => timeLabels[value] || '',
          },
          title: { display: true, text: 'Time after event', color: c.text },
        },
        y: {
          type: 'linear',
          min: 0,
          max: 100,
          grid: { color: c.grid },
          border: { color: c.grid },
          ticks: {
            color: c.text,
            stepSize: 10,
            callback: (v) => `${v}%`,
          },
          title: { display: true, text: 'Population surviving (% of 335M)', color: c.text },
        },
      },
    },
  })
}

function onToggleTheme() {
  isDark.value = toggleTheme()
  rebuildChart()
}

function onToggleBands() {
  rebuildChart()
}

onMounted(async () => {
  isDark.value = initTheme()
  await nextTick()
  rebuildChart()
})

function lastSurvival(sc) {
  const last = sc.timePoints[sc.timePoints.length - 1]
  return 100 - last.deathsPct
}
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-4 md:p-8 lg:p-12">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <a href="/graphable/" class="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
          &larr; graphable
        </a>
        <button @click="onToggleTheme"
          class="w-9 h-9 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center text-lg hover:border-[var(--text-secondary)] transition-colors">
          {{ isDark ? '\u2600' : '\u263E' }}
        </button>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
        How many Americans survive the apocalypse?
      </h1>
      <p class="text-[var(--text-secondary)] mb-6 max-w-2xl">
        US population survival curves after 8 civilization-ending events.
        Synthesized from 42 research passes across 130+ academic papers. X-axis is logarithmic time.
        Shaded bands show uncertainty ranges.
      </p>

      <!-- Scenario toggles -->
      <div class="flex flex-wrap gap-2 mb-3">
        <button v-for="s in scenarios" :key="s.id"
          @click="toggleScenario(s.id)"
          class="text-xs px-2.5 py-1 rounded border transition-all"
          :class="activeIds.has(s.id) ? 'font-semibold' : 'opacity-40'"
          :style="{
            borderColor: s.color,
            color: activeIds.has(s.id) ? s.color : 'var(--text-muted)',
            backgroundColor: activeIds.has(s.id) ? s.color + '15' : 'transparent',
          }">
          <span v-if="s.dashed" class="mr-0.5">- -</span>
          {{ s.shortName }}
        </button>
      </div>
      <label class="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-4 select-none cursor-pointer">
        <input type="checkbox" v-model="showBands" @change="onToggleBands" class="accent-[var(--text-secondary)]">
        Show uncertainty bands
      </label>

      <!-- Chart -->
      <div class="relative bg-[var(--bg-surface)] rounded-lg border border-[var(--border)] p-3 md:p-5"
        style="height: 520px">
        <canvas ref="chartCanvas"></canvas>
      </div>

      <!-- Risk comparison table -->
      <div class="mt-10">
        <h2 class="text-xl font-bold mb-4">At a glance</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-[var(--border)]">
                <th class="text-left py-2 pr-4">Scenario</th>
                <th class="text-right py-2 px-3 whitespace-nowrap">Annual probability</th>
                <th class="text-right py-2 px-3 whitespace-nowrap">10-year survival</th>
                <th class="text-right py-2 px-3 whitespace-nowrap">Survivors</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="s in scenarios" :key="s.id"
                class="border-b border-[var(--border-light)] hover:bg-[var(--bg-surface-alt)] transition-colors">
                <td class="py-2 pr-4 flex items-center gap-2">
                  <span class="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                    :style="{ backgroundColor: s.color }"></span>
                  <span class="font-medium">{{ s.name }}</span>
                </td>
                <td class="text-right py-2 px-3 text-[var(--text-secondary)] whitespace-nowrap">
                  {{ s.probabilityLabel }}
                </td>
                <td class="text-right py-2 px-3 font-mono whitespace-nowrap">
                  {{ lastSurvival(s).toFixed(0) }}%
                </td>
                <td class="text-right py-2 px-3 font-mono whitespace-nowrap">
                  {{ formatPop(lastSurvival(s)) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Methodology notes -->
      <div class="mt-10 text-xs text-[var(--text-muted)] space-y-2 max-w-3xl leading-relaxed">
        <h3 class="text-sm font-semibold text-[var(--text-secondary)]">Notes</h3>
        <p>
          <strong>Nuclear Winter vs. Autumn:</strong> Same bombs, different climate science. Xia et al. (2022)
          predicts severe nuclear winter (90% crop loss); Reisner et al. (2018) predicts milder autumn
          (30% crop loss). Both are legitimate scientific positions. Showing both brackets the uncertainty.
        </p>
        <p>
          <strong>Grid Collapse:</strong> The widest uncertainty band on the chart. The EMP Commission (2008)
          testified 90% mortality within a year; EPRI (2019) found regional disruption recoverable in 1–2 years.
          The gap reflects a genuine scientific disagreement about transformer damage.
        </p>
        <p>
          <strong>Climate Cascades:</strong> Unfolds over decades, not years. At this chart's 10-year scale,
          it's a flat line at the top. Over 100 years at 4°C+ warming, it reaches 5–40% cumulative mortality
          (Kemp et al. 2022).
        </p>
        <p>
          <strong>Asteroid:</strong> Variant B (far-side impact). A North American direct hit would kill
          ~99% within hours — too fast to graph meaningfully. The far-side variant shows the impact winter trajectory.
        </p>
        <p>
          <strong>Dashed line at 30%:</strong> Approximate pre-industrial US carrying capacity (~100M people).
          Most collapse scenarios converge toward this floor as modern infrastructure fails.
        </p>
        <p>
          <strong>Methodology:</strong> All scenarios use 335M US baseline. Deaths are cumulative percentage of
          that baseline. Data synthesized from peer-reviewed literature, government reports, and structured
          tabletop exercises. Full source citations available in the 42 research files.
        </p>
      </div>

    </div>
  </div>
</template>
