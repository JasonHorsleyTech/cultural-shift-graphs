<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, Tooltip, Filler } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'

Chart.register(LineController, LineElement, PointElement, LinearScale, Tooltip, Filler, annotationPlugin)

const canvas = ref(null)
let chart = null

const points = [
  { x: 0, y: 68 },
  { x: 5, y: 78 },
  { x: 10, y: 88 },
  { x: 15, y: 95 },
  { x: 20, y: 98 },
  { x: 25, y: 94 },
  { x: 30, y: 84 },
  { x: 35, y: 68 },
  { x: 40, y: 48 },
  { x: 45, y: 28 },
  { x: 50, y: 10 },
  { x: 55, y: 0 },
  { x: 60, y: -22 },
  { x: 65, y: -42 },
  { x: 70, y: -60 },
  { x: 75, y: -74 },
  { x: 80, y: -84 },
  { x: 85, y: -90 },
  { x: 90, y: -94 },
  { x: 95, y: -97 },
  { x: 100, y: -98 },
]

function isDarkMode() {
  return document.documentElement.classList.contains('dark')
}

function buildChart() {
  if (chart) chart.destroy()
  if (!canvas.value) return
  const cc = chartColors()
  const dark = isDarkMode()
  const labelBg = dark ? 'rgba(38, 38, 38, 0.92)' : 'rgba(243, 244, 246, 0.92)'
  const labelText = dark ? '#e5e7eb' : '#1f2937'

  chart = new Chart(canvas.value, {
    type: 'line',
    data: {
      datasets: [{
        data: points,
        borderWidth: 2.5,
        pointRadius: 0,
        tension: 0.4,
        segment: {
          borderColor: (ctx) => {
            if (ctx.p0.parsed.y >= 0 && ctx.p1.parsed.y >= 0) return 'rgba(22, 163, 74, 0.9)'
            if (ctx.p0.parsed.y <= 0 && ctx.p1.parsed.y <= 0) return 'rgba(220, 38, 38, 0.9)'
            return cc.text + '60'
          },
        },
        fill: {
          target: 'origin',
          above: 'rgba(34, 197, 94, 0.12)',
          below: 'rgba(239, 68, 68, 0.12)',
        },
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'linear',
          min: 0,
          max: 100,
          title: { display: true, text: 'how much they call you out →', color: cc.text, font: { size: 13 } },
          ticks: { display: false },
          grid: { color: cc.text + '08', drawTicks: false },
        },
        y: {
          type: 'linear',
          min: -112,
          max: 125,
          title: { display: true, text: 'how sorry you feel', color: cc.text, font: { size: 13 } },
          ticks: { display: false },
          grid: { color: cc.text + '08', drawTicks: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        annotation: {
          annotations: {
            zeroLine: {
              type: 'line',
              yMin: 0,
              yMax: 0,
              borderColor: cc.text + '25',
              borderWidth: 1,
              borderDash: [6, 4],
            },
            labelDidntMention: {
              type: 'label',
              xValue: 10,
              yValue: 87,
              content: ["they didn't even bring it up"],
              color: labelText,
              backgroundColor: labelBg,
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 11, style: 'italic' },
            },
            labelPeak: {
              type: 'label',
              xValue: 22,
              yValue: 115,
              content: ["they're being so nice about it.", "i'm a monster."],
              color: labelText,
              backgroundColor: labelBg,
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
            labelFair: {
              type: 'label',
              xValue: 42,
              yValue: 68,
              content: ['yeah, fair'],
              color: labelText,
              backgroundColor: labelBg,
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
            labelOvershoot: {
              type: 'label',
              xValue: 72,
              yValue: -38,
              content: ["...it wasn't that bad"],
              color: labelText,
              backgroundColor: labelBg,
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
            labelIndignant: {
              type: 'label',
              xValue: 88,
              yValue: -72,
              content: ['actually YOU owe', 'ME an apology'],
              color: labelText,
              backgroundColor: labelBg,
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
          },
        },
      },
    },
  })
}

onMounted(() => {
  nextTick(buildChart)
})
</script>

<template>
  <GraphWrapper title="How Sorry You Feel" max-width="3xl" @theme-change="nextTick(buildChart)">
    <template #subtitle>as a function of how hard you get called out for it</template>

    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div style="height: 450px;">
        <canvas ref="canvas"></canvas>
      </div>
    </div>

    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)]">Based on</h3>
      <ul class="mt-2 space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
        <li>
          Brehm, J.W. (1966). <em>A Theory of Psychological Reactance</em>. Academic Press.
          — Disproportionate pressure triggers motivational pushback.
        </li>
        <li>
          Zitek, E.M., Jordan, A.H., Monin, B. &amp; Leach, F.R. (2010).
          <a href="https://pubmed.ncbi.nlm.nih.gov/20085398/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">"Victim entitlement to behave selfishly"</a>,
          <em>Journal of Personality and Social Psychology</em>.
          — Perceived unfairness produces felt entitlement.
        </li>
        <li>
          Gollwitzer, M. &amp; Okimoto, T.G. (2021).
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8597191/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">"Motive-attribution framework"</a>,
          <em>Personality and Social Psychology Review</em>.
          — Disproportionate punishment reads as competitive, blocking reconciliation.
        </li>
        <li>
          Coulter, R.H. &amp; Pinto, M.B. (1995). "Guilt appeals in advertising."
          — Curvilinear guilt threshold: moderate guilt maximizes compliance; excess triggers reactance.
        </li>
      </ul>
    </div>
  </GraphWrapper>
</template>
