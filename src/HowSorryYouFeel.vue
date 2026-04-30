<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, Tooltip, Filler } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { initTheme, toggleTheme, chartColors } from './theme.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, Tooltip, Filler, annotationPlugin)

const isDark = ref(false)
const canvas = ref(null)
let chart = null

// Inverted-U shape based on reactance research:
// - No callout: significant guilt (~70) but not peak
// - Gentle acknowledgment: guilt PEAKS — grace amplifies shame
// - Proportional callout: guilt fading
// - Overcorrection: crosses zero into indignation, plateaus
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

function buildChart() {
  if (chart) chart.destroy()
  if (!canvas.value) return
  const cc = chartColors()

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
            if (ctx.p0.parsed.y >= 0 && ctx.p1.parsed.y >= 0) return 'rgba(34, 197, 94, 0.75)'
            if (ctx.p0.parsed.y <= 0 && ctx.p1.parsed.y <= 0) return 'rgba(239, 68, 68, 0.75)'
            return cc.text + '40'
          },
        },
        fill: {
          target: 'origin',
          above: 'rgba(34, 197, 94, 0.15)',
          below: 'rgba(239, 68, 68, 0.15)',
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
              color: cc.text + '80',
              backgroundColor: cc.surface + 'E0',
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 11, style: 'italic' },
            },
            labelPeak: {
              type: 'label',
              xValue: 22,
              yValue: 115,
              content: ["they're being so nice about it.", "i'm a monster."],
              color: cc.text + '90',
              backgroundColor: cc.surface + 'E0',
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
            labelFair: {
              type: 'label',
              xValue: 42,
              yValue: 68,
              content: ['yeah, fair'],
              color: cc.text + '80',
              backgroundColor: cc.surface + 'E0',
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
            labelOvershoot: {
              type: 'label',
              xValue: 72,
              yValue: -38,
              content: ["...it wasn't that bad"],
              color: cc.text + '80',
              backgroundColor: cc.surface + 'E0',
              padding: { x: 6, y: 3 },
              borderRadius: 4,
              font: { size: 12, style: 'italic' },
            },
            labelIndignant: {
              type: 'label',
              xValue: 88,
              yValue: -72,
              content: ['actually YOU owe', 'ME an apology'],
              color: cc.text + '90',
              backgroundColor: cc.surface + 'E0',
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
  isDark.value = initTheme()
  nextTick(buildChart)
})

function onToggleTheme() {
  isDark.value = toggleTheme()
  nextTick(buildChart)
}
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-150">
    <div class="mx-auto max-w-3xl px-4 py-12 sm:px-6">

      <header class="mb-8 flex items-start justify-between">
        <div>
          <h1 class="text-2xl font-bold sm:text-3xl">How Sorry You Feel</h1>
          <p class="mt-1 text-sm text-[var(--text-secondary)]">as a function of how hard you get called out for it</p>
        </div>
        <button
          @click="onToggleTheme"
          class="ml-4 mt-1 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)]"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </header>

      <div class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
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

      <footer class="mt-8 text-center text-xs text-[var(--text-muted)]">
        <a href="/graphable/" class="underline hover:text-[var(--text-secondary)]">graphable</a>
      </footer>
    </div>
  </div>
</template>
