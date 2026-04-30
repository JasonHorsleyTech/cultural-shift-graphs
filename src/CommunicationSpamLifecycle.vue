<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { Chart, LineController, BarController, LineElement, BarElement, PointElement,
  LinearScale, CategoryScale, Tooltip, Legend, Filler } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { marked } from 'marked'
import { systems } from './data/communication-spam-lifecycle.ts'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'

// ── Load research reports at build time ──
const reportModules = import.meta.glob('../projects/communication-spam-lifecycle/results/*.md', { query: '?raw', eager: true })
const reportsBySystemId = {}
for (const [path, mod] of Object.entries(reportModules)) {
  const filename = path.split('/').pop().replace('.md', '')
  const slug = filename.replace(/^\d+-/, '')
  reportsBySystemId[slug] = mod.default
}

Chart.register(LineController, BarController, LineElement, BarElement, PointElement,
  LinearScale, CategoryScale, Tooltip, Legend, Filler, annotationPlugin)

// ── Palette ──
// 16 distinct colors for the systems
const palette = [
  '#a3a3a3', // face-to-face (gray — the baseline)
  '#78716c', // postal mail (warm gray)
  '#b45309', // telegraph (amber)
  '#92400e', // newspaper classifieds (brown)
  '#0891b2', // telephone (cyan)
  '#7c3aed', // radio (violet)
  '#2563eb', // television (blue)
  '#059669', // fax (emerald)
  '#65a30d', // pagers (lime)
  '#dc2626', // usenet (red)
  '#ea580c', // email (orange)
  '#d946ef', // instant messaging (fuchsia)
  '#16a34a', // sms (green)
  '#1d4ed8', // facebook (facebook blue)
  '#0ea5e9', // twitter (sky)
  '#0284c7', // linkedin (linkedin blue)
]

function getColor(index) {
  return palette[index % palette.length]
}

// ── Filter state ──
const activeIds = ref(new Set(systems.map(s => s.id)))
const view = ref('timeline') // 'timeline' | 'saturation'

function toggleSystem(id) {
  const s = new Set(activeIds.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  activeIds.value = s
}

function showAll() { activeIds.value = new Set(systems.map(s => s.id)) }
function showNone() { activeIds.value = new Set() }

// ── Expanded report state ──
const expandedSystem = ref(null)

function toggleReport(id) {
  expandedSystem.value = expandedSystem.value === id ? null : id
}

function renderReport(id) {
  const raw = reportsBySystemId[id]
  if (!raw) return '<p>No report available.</p>'
  return marked(raw)
}

// ── Systems that have a saturation number ──
const saturationSystems = computed(() =>
  systems.filter(s => s.yearsToSpamSaturation != null)
    .sort((a, b) => a.yearLaunched - b.yearLaunched)
)

// ── Charts ──
const timelineCanvas = ref(null)
const saturationCanvas = ref(null)
let timelineChart = null
let saturationChart = null

function buildTimelineChart() {
  if (timelineChart) timelineChart.destroy()
  const canvas = timelineCanvas.value
  if (!canvas) return
  const cc = chartColors()

  // Dynamic x-axis range from active systems
  const minYear = 1700 // floor to exclude face-to-face prehistory (1400)
  const activePts = systems
    .filter(s => activeIds.value.has(s.id))
    .flatMap(s => s.dataPoints.filter(d => d.year >= minYear && d.spamPercentage != null))
  let xMin = minYear
  let xMax = 2025
  if (activePts.length > 0) {
    xMin = Math.min(...activePts.map(d => d.year))
    xMax = Math.max(...activePts.map(d => d.year))
  }
  const xRange = xMax - xMin
  const xPad = Math.max(2, Math.round(xRange * 0.03))
  xMin = xMin - xPad
  xMax = xMax + xPad

  const datasets = systems.map((sys, i) => {
    const color = getColor(i)
    const visible = activeIds.value.has(sys.id)
    const pts = sys.dataPoints
      .filter(d => d.year >= minYear && d.spamPercentage != null)
      .map(d => ({ x: d.year, y: d.spamPercentage }))

    return {
      label: sys.name,
      data: pts,
      borderColor: visible ? color : 'transparent',
      backgroundColor: visible ? color + '18' : 'transparent',
      pointBackgroundColor: visible ? color : 'transparent',
      pointBorderColor: visible ? color : 'transparent',
      pointRadius: visible ? 2.5 : 0,
      pointHoverRadius: visible ? 5 : 0,
      borderWidth: sys.id === 'face-to-face' ? 3 : 2,
      borderDash: sys.id === 'face-to-face' ? [6, 3] : [],
      tension: 0.3,
      spanGaps: true,
      hidden: !visible,
    }
  })

  timelineChart = new Chart(canvas, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'nearest', intersect: false },
      scales: {
        x: {
          type: 'linear',
          title: { display: true, text: 'Year', color: cc.text },
          min: xMin,
          max: xMax,
          ticks: { color: cc.text, callback: (v) => String(v) },
          grid: { color: cc.grid },
        },
        y: {
          title: { display: true, text: 'Spam / Junk / Ad %', color: cc.text },
          min: 0,
          max: 100,
          ticks: { color: cc.text, callback: (v) => v + '%' },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => items[0]?.raw ? `${items[0].raw.x}` : '',
            label: (item) => `${item.dataset.label}: ${item.raw.y}%`,
          },
        },
        annotation: {
          annotations: {
            commoditizedLine: {
              type: 'line',
              yMin: 30,
              yMax: 30,
              borderColor: cc.text + '30',
              borderWidth: 1,
              borderDash: [4, 4],
              label: {
                display: true,
                content: '30% — commoditized',
                position: 'start',
                backgroundColor: 'transparent',
                color: cc.text + '60',
                font: { size: 11 },
              },
            },
            crossoverLine: {
              type: 'line',
              yMin: 50,
              yMax: 50,
              borderColor: cc.text + '40',
              borderWidth: 1,
              borderDash: [4, 4],
              label: {
                display: true,
                content: '50% — effectively unusable',
                position: 'start',
                backgroundColor: 'transparent',
                color: cc.text + '80',
                font: { size: 11 },
              },
            },
          },
        },
      },
    },
  })
}

function buildSaturationChart() {
  if (saturationChart) saturationChart.destroy()
  const canvas = saturationCanvas.value
  if (!canvas) return
  const cc = chartColors()

  const data = saturationSystems.value
  const labels = data.map(s => `${s.name} (${s.yearLaunched})`)
  const values = data.map(s => s.yearsToSpamSaturation)
  const colors = data.map(s => {
    const idx = systems.findIndex(x => x.id === s.id)
    return getColor(idx)
  })

  saturationChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colors.map(c => c + '99'),
        borderColor: colors,
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          title: { display: true, text: 'Years to >50% spam', color: cc.text },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
        y: {
          ticks: { color: cc.text, font: { size: 12 } },
          grid: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (item) => `${item.raw} years`,
          },
        },
      },
    },
  })
}

function buildCharts() {
  if (view.value === 'timeline') buildTimelineChart()
  else buildSaturationChart()
}

watch(activeIds, () => { if (view.value === 'timeline') buildTimelineChart() })
watch(view, () => nextTick(buildCharts))

onMounted(() => {
  nextTick(buildCharts)
})
</script>

<template>
  <GraphWrapper title="How Fast Does Spam Kill a Communication System?" max-width="6xl" @theme-change="nextTick(buildCharts)">
    <template #subtitle>
      Every communication medium follows the same arc: invention, adoption, advertisers arrive,
      signal-to-noise collapses. The pattern repeats faster each time.
    </template>

      <!-- View toggle -->
      <div class="mb-4 flex items-center gap-4">
        <div class="flex rounded-md border border-[var(--border)] bg-[var(--bg-surface)]">
          <button
            @click="view = 'timeline'"
            :class="view === 'timeline' ? 'bg-[var(--bg-surface-alt)] font-semibold' : ''"
            class="px-3 py-1.5 text-sm first:rounded-l-md last:rounded-r-md"
          >
            Spam Over Time
          </button>
          <button
            @click="view = 'saturation'"
            :class="view === 'saturation' ? 'bg-[var(--bg-surface-alt)] font-semibold' : ''"
            class="px-3 py-1.5 text-sm first:rounded-l-md last:rounded-r-md"
          >
            Years to Saturation
          </button>
        </div>
      </div>

      <!-- Legend / filter (timeline view only) -->
      <div v-if="view === 'timeline'" class="mb-4">
        <div class="mb-2 flex items-center gap-3 text-xs text-[var(--text-muted)]">
          <button @click="showAll" class="underline hover:text-[var(--text-secondary)]">All</button>
          <button @click="showNone" class="underline hover:text-[var(--text-secondary)]">None</button>
        </div>
        <div class="flex flex-wrap gap-x-3 gap-y-1">
          <button
            v-for="(sys, i) in systems"
            :key="sys.id"
            @click="toggleSystem(sys.id)"
            class="flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs transition-opacity"
            :class="activeIds.has(sys.id) ? 'opacity-100' : 'opacity-40'"
            :title="sys.summary"
          >
            <span
              class="inline-block h-2.5 w-2.5 rounded-full"
              :style="{ backgroundColor: getColor(i) }"
            ></span>
            <span>{{ sys.name }}</span>
            <span v-if="sys.yearSpamCrossover" class="text-[var(--text-faint)]">({{ sys.yearSpamCrossover }})</span>
          </button>
        </div>
      </div>

      <!-- Chart area -->
      <div class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-4">
        <div v-show="view === 'timeline'" class="relative" style="height: 500px;">
          <canvas ref="timelineCanvas"></canvas>
        </div>
        <div v-show="view === 'saturation'" class="relative" style="height: 360px;">
          <canvas ref="saturationCanvas"></canvas>
        </div>
      </div>

      <!-- Insight cards -->
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-4">
          <h3 class="text-sm font-semibold text-[var(--text-secondary)]">The Shrinking Window</h3>
          <p class="mt-1 text-2xl font-bold">237 &rarr; 12 years</p>
          <p class="mt-1 text-xs text-[var(--text-muted)]">
            Postal mail took 237 years to hit 50% spam. Email took 12.
            Facebook took 18. The cycle accelerates.
          </p>
        </div>
        <div class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-4">
          <h3 class="text-sm font-semibold text-[var(--text-secondary)]">The Cost Barrier</h3>
          <p class="mt-1 text-2xl font-bold">$120/msg &rarr; $0</p>
          <p class="mt-1 text-xs text-[var(--text-muted)]">
            Telegraph at $120/message (2026 USD) never exceeded 10% spam.
            When cost drops to zero, spam follows.
          </p>
        </div>
        <div class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-4">
          <h3 class="text-sm font-semibold text-[var(--text-secondary)]">The Flat Line</h3>
          <p class="mt-1 text-2xl font-bold">5% &rarr; 22%</p>
          <p class="mt-1 text-xs text-[var(--text-muted)]">
            Face-to-face held at ~5-15% for centuries. The modern uptick
            (political tribalism, MLM, personal branding) is historically novel.
          </p>
        </div>
      </div>

      <!-- System details table -->
      <div class="mt-8 overflow-x-auto rounded-lg border border-[var(--border)]">
        <table class="w-full text-left text-sm table-fixed">
          <thead class="bg-[var(--bg-surface-alt)] text-xs uppercase text-[var(--text-muted)]">
            <tr>
              <th class="px-4 py-2">System</th>
              <th class="px-4 py-2">Launched</th>
              <th class="px-4 py-2">Spam Crossover</th>
              <th class="px-4 py-2">Years to 50%</th>
              <th class="px-4 py-2">Gatekeeping</th>
              <th class="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border-light)]">
            <template v-for="(sys, i) in systems" :key="sys.id">
              <tr class="bg-[var(--bg-surface)]" :class="expandedSystem === sys.id ? 'border-b-0' : ''">
                <td class="px-4 py-2 font-medium">
                  <button
                    @click="toggleReport(sys.id)"
                    class="inline-flex items-center gap-2 hover:underline text-left cursor-pointer"
                    :class="expandedSystem === sys.id ? 'text-blue-500' : ''"
                  >
                    <span
                      class="inline-block h-2 w-2 rounded-full shrink-0"
                      :style="{ backgroundColor: getColor(i) }"
                    ></span>
                    {{ sys.name }}
                    <span class="text-[10px] text-[var(--text-muted)]">{{ expandedSystem === sys.id ? '▲' : '▼' }}</span>
                  </button>
                </td>
                <td class="px-4 py-2 text-[var(--text-secondary)]">
                  {{ sys.yearLaunched < 0 ? 'Prehistory' : sys.yearLaunched }}
                </td>
                <td class="px-4 py-2 text-[var(--text-secondary)]">
                  {{ sys.yearSpamCrossover ?? 'Never' }}
                </td>
                <td class="px-4 py-2 text-[var(--text-secondary)]">
                  {{ sys.yearsToSpamSaturation ?? '—' }}
                </td>
                <td class="px-4 py-2 text-[var(--text-secondary)]">
                  {{ sys.gatekeeping }}
                </td>
                <td class="px-4 py-2">
                  <span :class="{
                    'text-green-600 dark:text-green-400': sys.causeOfDeath === 'alive',
                    'text-red-600 dark:text-red-400': sys.causeOfDeath === 'spam',
                    'text-amber-600 dark:text-amber-400': sys.causeOfDeath === 'displacement',
                    'text-orange-600 dark:text-orange-400': sys.causeOfDeath === 'both',
                  }">
                    {{ { alive: 'Alive', spam: 'Killed by spam', displacement: 'Displaced', both: 'Both' }[sys.causeOfDeath] }}
                  </span>
                </td>
              </tr>
              <tr v-if="expandedSystem === sys.id" class="bg-[var(--bg-surface)]">
                <td colspan="6" class="p-0 border-t border-[var(--border-light)]">
                  <div class="px-6 py-6 overflow-x-auto">
                    <div class="prose prose-sm dark:prose-invert max-w-none break-words [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_code]:break-all [&_code]:whitespace-pre-wrap" v-html="renderReport(sys.id)"></div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

  </GraphWrapper>
</template>
