<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import {
  Chart, BubbleController, PointElement, LinearScale, Tooltip, Legend
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'
import { interventions } from './data/bang-for-buck.ts'

Chart.register(BubbleController, PointElement, LinearScale, Tooltip, Legend, annotationPlugin)

const chartRef = ref(null)
let chart = null
const zoomed = ref(true)

const tierRadius = { 1: 14, 2: 10, 3: 6 }

const timeColors = {
  low:    { bg: 'rgba(34,197,94,0.55)',  border: 'rgb(34,197,94)' },
  medium: { bg: 'rgba(59,130,246,0.55)',  border: 'rgb(59,130,246)' },
  high:   { bg: 'rgba(249,115,22,0.55)', border: 'rgb(249,115,22)' },
}

const timeLabels = { low: '< 1 hr/week', medium: '1\u20133 hr/week', high: '3+ hr/week' }

const shortNames = {
  'walking': 'Walking',
  'strength-training': 'Strength',
  'yoga': 'Yoga',
  'cycling': 'Cycling',
  'generic-ssris': 'SSRIs',
  'cbt-depression': 'CBT',
  'bariatric-surgery': 'Bariatric',
  'statin-therapy': 'Statins',
  'diet-overhaul': 'Diet',
  'sleep-hygiene': 'Sleep',
  'smoking-cessation': 'Quit Smoking',
  'alcohol-reduction': 'Alcohol',
  'meditation': 'Meditation',
  'community-groups': 'Community',
}

const labelPos = {
  'meditation': 'below',
  'statin-therapy': 'below',
  'alcohol-reduction': 'left',
  'yoga': 'right',
}

const applicability = {
  'walking': 'All',
  'strength-training': 'All',
  'yoga': 'All',
  'cycling': 'All',
  'generic-ssris': 'Depression (~19%)',
  'cbt-depression': 'Depression (~19%)',
  'bariatric-surgery': 'BMI \u226535 (~35%)',
  'statin-therapy': 'CVD risk (~55%)',
  'diet-overhaul': 'All',
  'sleep-hygiene': 'Poor sleep (~35%)',
  'smoking-cessation': 'Smokers (~30%)',
  'alcohol-reduction': 'Heavy drinkers (~18%)',
  'meditation': 'All',
  'community-groups': 'All',
}

function makeDatasets(excludeBariatric) {
  const groups = { low: [], medium: [], high: [] }
  for (const d of interventions) {
    if (excludeBariatric && d.id === 'bariatric-surgery') continue
    groups[d.timeCategory].push({
      x: d.annualCostMid,
      y: d.qalyMid,
      r: tierRadius[d.evidenceTier],
      id: d.id,
      intervention: d,
    })
  }
  return Object.entries(groups)
    .filter(([, pts]) => pts.length > 0)
    .map(([cat, pts]) => ({
      label: timeLabels[cat],
      data: pts,
      backgroundColor: timeColors[cat].bg,
      borderColor: timeColors[cat].border,
      borderWidth: 1.5,
      hoverBorderWidth: 2.5,
    }))
}

const labelPlugin = {
  id: 'bubbleLabels',
  afterDatasetsDraw(chartInstance) {
    if (!zoomed.value) return
    const { ctx } = chartInstance
    ctx.save()
    ctx.fillStyle = chartColors().text
    ctx.font = '10px system-ui, -apple-system, sans-serif'

    for (const meta of chartInstance.getSortedVisibleDatasetMetas()) {
      meta.data.forEach((el, i) => {
        const raw = meta._dataset.data[i]
        if (!raw?.id) return
        const label = shortNames[raw.id] || raw.id
        const r = el.options.radius
        const pos = labelPos[raw.id] || 'above'

        switch (pos) {
          case 'below':
            ctx.textBaseline = 'top'
            ctx.textAlign = 'center'
            ctx.fillText(label, el.x, el.y + r + 3)
            break
          case 'left':
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'right'
            ctx.fillText(label, el.x - r - 4, el.y)
            break
          case 'right':
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'left'
            ctx.fillText(label, el.x + r + 4, el.y)
            break
          default:
            ctx.textBaseline = 'bottom'
            ctx.textAlign = 'center'
            ctx.fillText(label, el.x, el.y - r - 3)
        }
      })
    }
    ctx.restore()
  },
}

function buildChart() {
  if (chart) chart.destroy()
  if (!chartRef.value) return
  const c = chartColors()
  const focused = zoomed.value

  const annotations = {}
  if (focused) {
    annotations.bariatricNote = {
      type: 'label',
      xValue: 480,
      yValue: 0.085,
      content: 'Bariatric Surgery \u2192  $8,700/yr',
      color: c.text,
      font: { size: 10, style: 'italic' },
      backgroundColor: c.surface,
      padding: 4,
    }
  }

  chart = new Chart(chartRef.value, {
    type: 'bubble',
    data: { datasets: makeDatasets(focused) },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'nearest', intersect: true },
      scales: {
        x: {
          min: focused ? -20 : -200,
          max: focused ? 560 : 9500,
          grid: { color: c.grid },
          ticks: {
            color: c.text,
            callback: v => v < 0 ? '' : `$${v.toLocaleString()}`,
          },
          title: { display: true, text: 'Annual Cost (2024 $, without insurance)', color: c.text },
        },
        y: {
          min: 0,
          max: 0.24,
          grid: { color: c.grid },
          ticks: { color: c.text },
          title: { display: true, text: 'Net QALY Gain per Year', color: c.text },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { color: c.text, usePointStyle: true, pointStyle: 'circle', padding: 20 },
        },
        tooltip: {
          callbacks: {
            title: items => items[0]?.raw?.intervention?.name || '',
            label: item => {
              const d = item.raw?.intervention
              if (!d) return ''
              return [
                `QALY: ${d.qalyMid} (${d.qalyLow}\u2013${d.qalyHigh})`,
                `Cost: $${d.annualCostMid.toLocaleString()} ($${d.annualCostLow.toLocaleString()}\u2013$${d.annualCostHigh.toLocaleString()})`,
                `Time: ${d.weeklyHours} hr/wk`,
                `Evidence: Tier ${d.evidenceTier}`,
                `Adherence: ${Math.round(d.adherenceRate * 100)}%`,
              ]
            },
            afterLabel: item => item.raw?.intervention?.description || '',
          },
        },
        annotation: { annotations },
      },
    },
    plugins: [labelPlugin],
  })
}

function toggleZoom() {
  zoomed.value = !zoomed.value
  buildChart()
}

function onThemeChange() {
  buildChart()
}

const sorted = computed(() =>
  [...interventions].sort((a, b) => b.qalyMid - a.qalyMid || a.annualCostMid - b.annualCostMid)
)

onMounted(() => nextTick(buildChart))
onUnmounted(() => { if (chart) chart.destroy() })
</script>

<template>
  <GraphWrapper title="Bang for Buck" max-width="6xl" @themeChange="onThemeChange">
    <template #subtitle>
      For an American at the 25th percentile of income (~$30k/yr), which life interventions
      deliver the most quality-of-life per dollar? Each bubble is one intervention. Hover for details.
    </template>

    <section class="mt-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs text-[var(--text-secondary)]">X-axis:</span>
        <button
          @click="toggleZoom"
          class="px-2.5 py-1 text-xs rounded-md border transition-colors cursor-pointer"
          :class="zoomed
            ? 'bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-surface)]'
            : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'"
        >Focused ($0–$550)</button>
        <button
          @click="toggleZoom"
          class="px-2.5 py-1 text-xs rounded-md border transition-colors cursor-pointer"
          :class="!zoomed
            ? 'bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-surface)]'
            : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'"
        >Full range</button>
      </div>
      <div style="height: 500px">
        <canvas ref="chartRef"></canvas>
      </div>
    </section>

    <div class="mt-6 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
      <strong class="text-[var(--text-primary)]">The punchline.</strong>
      Walking delivers 0.08 QALY/year — the same as bariatric surgery — at $0 versus $8,700.
      Smoking cessation has the highest QALY gain (0.20/year) but only applies to the ~30% who smoke.
      For a universal intervention that benefits everyone: nothing beats a daily walk.
    </div>

    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
      <div>
        <strong class="text-[var(--text-primary)]">Bubble size = evidence quality</strong>
        <div class="mt-1">
          Large: Tier 1 (multiple RCTs / meta-analyses)<br>
          Medium: Tier 2 (some RCTs or strong observational)<br>
          Small: Tier 3 (limited or mostly observational)
        </div>
      </div>
      <div>
        <strong class="text-[var(--text-primary)]">Color = weekly time commitment</strong>
        <div class="mt-1">
          <span style="color: rgb(34,197,94)">&#9679;</span> Less than 1 hr/wk<br>
          <span style="color: rgb(59,130,246)">&#9679;</span> 1–3 hr/wk<br>
          <span style="color: rgb(249,115,22)">&#9679;</span> 3+ hr/wk
        </div>
      </div>
    </div>

    <section class="mt-12">
      <h2 class="text-xl font-semibold mb-4">All interventions ranked by QALY gain</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-[var(--border)]">
              <th class="text-left py-2 pr-4">Intervention</th>
              <th class="text-right py-2 px-2">QALY/yr</th>
              <th class="text-right py-2 px-2">Cost/yr</th>
              <th class="text-right py-2 px-2">Time</th>
              <th class="text-center py-2 px-2">Evidence</th>
              <th class="text-left py-2 pl-2">Applies to</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in sorted" :key="d.id" class="border-b border-[var(--border)] border-opacity-30">
              <td class="py-2 pr-4">
                <div class="font-medium">{{ d.name }}</div>
                <div class="text-xs text-[var(--text-muted)] mt-0.5">{{ d.description }}</div>
              </td>
              <td class="text-right py-2 px-2 font-mono text-xs whitespace-nowrap">{{ d.qalyMid.toFixed(2) }}</td>
              <td class="text-right py-2 px-2 font-mono text-xs whitespace-nowrap">${{ d.annualCostMid.toLocaleString() }}</td>
              <td class="text-right py-2 px-2 text-xs whitespace-nowrap">{{ d.weeklyHours }} hr/wk</td>
              <td class="text-center py-2 px-2 text-xs">Tier {{ d.evidenceTier }}</td>
              <td class="py-2 pl-2 text-xs text-[var(--text-muted)]">{{ applicability[d.id] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12 text-sm text-[var(--text-secondary)] space-y-3">
      <h2 class="text-lg font-semibold text-[var(--text-primary)]">What you're looking at</h2>
      <p>
        "Bob" is a statistical composite anchored on the 25th percentile of US household income (~$30k).
        Each intervention is measured in <strong>net QALYs gained per year</strong> (quality-adjusted life years)
        versus <strong>annual out-of-pocket cost without insurance</strong> in 2024 dollars.
      </p>
      <p>
        <strong>Conditional framing:</strong> Each data point shows the QALY gain for a Bob to whom
        the intervention applies. Walking benefits all Bobs; SSRIs benefit the ~19% with depression;
        smoking cessation benefits the ~30% who smoke. The graph answers "if you need this, how much do you get?"
      </p>
      <p>
        <strong>Comparator asymmetry:</strong> Exercise is measured against "doing nothing" while
        SSRIs/CBT are measured against "usual care" (which includes some baseline support).
        This inflates exercise QALYs by roughly 0.01–0.03 relative to medical interventions —
        within stated ranges and doesn't change rank order.
      </p>
      <p>
        Sources: Tufts CEA Registry, Cochrane Systematic Reviews, CDC BRFSS, NICE Technology Appraisals,
        BLS/Census, PubMed meta-analyses. Full source citations available in individual research files.
      </p>
    </section>
  </GraphWrapper>
</template>
