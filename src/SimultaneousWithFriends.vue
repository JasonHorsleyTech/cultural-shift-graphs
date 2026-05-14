<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { Chart, BarController, BarElement, LinearScale, LogarithmicScale, CategoryScale, Tooltip } from 'chart.js'
import { marked } from 'marked'
import { acts } from './data/simultaneous-with-friends.ts'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'

Chart.register(BarController, BarElement, LinearScale, LogarithmicScale, CategoryScale, Tooltip)

const markdownFiles = import.meta.glob('../projects/simultaneous-with-friends/results/*.md', { query: '?raw', import: 'default', eager: true })

function getMarkdownHtml(slug, order) {
  const padded = String(order).padStart(3, '0')
  const key = `../projects/simultaneous-with-friends/results/${padded}-${slug}.md`
  const raw = markdownFiles[key]
  if (!raw) return '<p>No research found.</p>'
  const stripped = raw.replace(/^---[\s\S]*?---\s*/, '').trim()
  return marked(stripped)
}

// State
const metric = ref('t_50_seconds')   // 't_50_seconds' | 't_1_seconds'
const expandedSlug = ref(null)       // exclusive — only one card open at a time

function toggleCard(slug) {
  expandedSlug.value = expandedSlug.value === slug ? null : slug
}

// Sorting: always by active metric, ascending (most probable → least probable)
const sortedActs = computed(() => {
  const key = metric.value
  return [...acts].sort((a, b) => a[key] - b[key])
})

// Time formatting
const YEAR = 31_557_600                 // 365.25 days
const LIFETIME = 70 * YEAR

function humanTime(s) {
  if (s < 60) return s < 1 ? `${(s * 1000).toFixed(0)} ms` : `${s.toFixed(0)} sec`
  if (s < 3600) return `${(s / 60).toFixed(0)} min`
  if (s < 86400) return `${(s / 3600).toFixed(1)} hours`
  if (s < 7 * 86400) return `${(s / 86400).toFixed(1)} days`
  if (s < 30.44 * 86400) return `${(s / (7 * 86400)).toFixed(1)} weeks`
  if (s < YEAR) return `${(s / (30.44 * 86400)).toFixed(1)} months`
  if (s < LIFETIME) return `${(s / YEAR).toFixed(1)} years`
  const lifetimes = s / LIFETIME
  if (lifetimes < 100) return `${lifetimes.toFixed(1)} lifetimes`
  if (lifetimes < 1000) return `${Math.round(lifetimes)} lifetimes`
  if (lifetimes < 1e6) return `${Math.round(lifetimes).toLocaleString()} lifetimes`
  return `${(lifetimes / 1e6).toFixed(1)}M lifetimes`
}

function confidenceLabel(c) {
  return c === 'high' ? 'high confidence' : c === 'medium' ? 'medium confidence' : 'low confidence — thin data'
}

// Tick definitions for the log scale
const LOG_TICKS = [
  { v: 60,                label: '1 min' },
  { v: 3600,              label: '1 hour' },
  { v: 86400,             label: '1 day' },
  { v: 7 * 86400,         label: '1 week' },
  { v: 30.44 * 86400,     label: '1 month' },
  { v: YEAR,              label: '1 year' },
  { v: 10 * YEAR,         label: '10 years' },
  { v: 100 * YEAR,        label: '100 years' },
  { v: 100 * LIFETIME,    label: '100 lifetimes' },
  { v: 10_000 * LIFETIME, label: '10,000 lifetimes' },
]

// Color: amber/ochre — neutral, editorial, non-gendered
const BAR_COLOR = 'rgba(180, 83, 9, 0.92)'        // tailwind amber-700
const BAR_COLOR_DARK = 'rgba(245, 158, 11, 0.92)' // tailwind amber-500

// Chart
const canvas = ref(null)
let chart = null

function buildChart() {
  if (chart) chart.destroy()
  if (!canvas.value) return
  const cc = chartColors()
  const dark = document.documentElement.classList.contains('dark')
  const color = dark ? BAR_COLOR_DARK : BAR_COLOR

  const labels = sortedActs.value.map(a => a.name)
  const values = sortedActs.value.map(a => a[metric.value])
  const maxVal = Math.max(...values)

  const xConfig = {
    type: 'logarithmic',
    min: 60,
    max: Math.max(maxVal * 1.2, 100 * LIFETIME),
    grid: { color: cc.text + '12' },
    border: { display: false },
    ticks: {
      color: cc.text,
      font: { size: 11 },
      autoSkip: false,
      maxRotation: 0,
      callback: function (val) {
        const hit = LOG_TICKS.find(t => Math.abs(val / t.v - 1) < 0.02)
        return hit ? hit.label : ''
      },
    },
    afterBuildTicks: (axis) => {
      axis.ticks = LOG_TICKS
        .filter(t => t.v >= axis.min && t.v <= axis.max)
        .map(t => ({ value: t.v }))
    },
  }

  chart = new Chart(canvas.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 0,
        barPercentage: 0.78,
        categoryPercentage: 0.86,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: xConfig,
        y: {
          ticks: {
            color: cc.text,
            font: { size: 13 },
            crossAlign: 'far',
          },
          grid: { display: false },
          border: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => humanTime(ctx.parsed.x),
            title: (items) => items.length ? items[0].label : '',
          },
        },
      },
      onClick: (_event, elements) => {
        if (!elements.length) return
        const idx = elements[0].index
        const slug = sortedActs.value[idx].slug
        toggleCard(slug)
        nextTick(() => {
          const el = document.getElementById(`row-${slug}`)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
      },
    },
  })
}

onMounted(() => { nextTick(buildChart) })
onUnmounted(() => { if (chart) chart.destroy() })

watch(metric, () => { nextTick(buildChart) })

const metricLabel = computed(() => metric.value === 't_50_seconds' ? 'any of your 50 closest friends' : 'your single best friend')
</script>

<template>
  <GraphWrapper title="Simultaneous with Friends" max-width="6xl" @theme-change="nextTick(buildChart)">
    <template #subtitle>
      How long do you have to wait, on average, until you and one of your 50 closest friends
      happen to be doing the exact same thing at the exact same moment? And how long until you
      and just your single best friend? You'd never know it happened — but the math says it almost
      certainly did.
    </template>

    <!-- Methodology callout -->
    <details class="mt-4 mb-6 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-4">
      <summary class="cursor-pointer text-sm font-semibold text-[var(--text-secondary)]">
        How the math works
      </summary>
      <div class="mt-3 text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
        <p>
          For each act we found three numbers from real data: how often the average adult does it,
          how long one instance lasts, and when in the day it tends to happen.
        </p>
        <p>
          For high-frequency activities (sneezing, peeing, etc.) the formula reduces to
          <code class="text-xs">t = (24/h) / (2 × r² × d × N)</code> where <code class="text-xs">r</code>
          is the per-second rate during the active window, <code class="text-xs">d</code> is duration,
          <code class="text-xs">N</code> is the friend count (50 or 1), and <code class="text-xs">h</code>
          is the active window in hours per day. Tight time-of-day clustering (brushing teeth in the morning,
          sex in the evening) shrinks <code class="text-xs">h</code> and compresses the wait time by orders of magnitude.
        </p>
        <p>
          For lifetime-rare events (arrest, ambulance, signing a contract):
          <code class="text-xs">E = 2 N C² d / L</code> expected overlaps in a lifetime. When
          <code class="text-xs">E &lt; 1</code> we report the gap as multiples of a lifetime.
        </p>
        <p>
          50 close friends is Dunbar's "good friends" tier. Click any bar (or any card below) to expand
          the full math.
        </p>
      </div>
    </details>

    <!-- Controls -->
    <div class="flex flex-wrap items-center gap-x-6 gap-y-3 mb-3">
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--text-muted)] uppercase tracking-wide">Compared to:</span>
        <button
          @click="metric = 't_50_seconds'"
          :class="['text-xs px-3 py-1 rounded border cursor-pointer transition-colors',
            metric === 't_50_seconds'
              ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]'
              : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
        >any of 50 friends</button>
        <button
          @click="metric = 't_1_seconds'"
          :class="['text-xs px-3 py-1 rounded border cursor-pointer transition-colors',
            metric === 't_1_seconds'
              ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]'
              : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
        >just your best friend</button>
      </div>

      <span class="text-xs text-[var(--text-muted)] ml-auto">Click any bar to expand its full math.</span>
    </div>

    <p class="text-sm text-[var(--text-secondary)] mb-3">
      Expected wait until a simultaneous moment with <strong class="text-[var(--text-primary)]">{{ metricLabel }}</strong>.
    </p>

    <!-- Chart -->
    <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-4">
      <div :style="{ height: (sortedActs.length * 32 + 80) + 'px' }">
        <canvas ref="canvas"></canvas>
      </div>
    </div>

    <!-- Section heading for cards -->
    <h2 class="mt-10 mb-2 text-lg font-semibold text-[var(--text-secondary)]">The math, one act at a time</h2>
    <p class="text-xs text-[var(--text-muted)] mb-4">
      Sorted by likelihood — most probable simultaneity at the top. Click any card to expand the full research.
    </p>

    <!-- Accordion rows -->
    <div class="space-y-2">
      <div
        v-for="act in sortedActs"
        :key="act.slug"
        :id="`row-${act.slug}`"
        class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] overflow-hidden"
      >
        <button
          @click="toggleCard(act.slug)"
          class="w-full p-4 flex items-center gap-4 text-left cursor-pointer hover:bg-[var(--bg-surface-alt)] transition-colors"
        >
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-[var(--text-primary)]">{{ act.name }}</div>
            <div class="text-xs text-[var(--text-muted)] mt-0.5 truncate">{{ act.clustering_notes }}</div>
          </div>
          <div class="hidden sm:flex flex-col items-end shrink-0 mr-3">
            <div class="text-xs text-[var(--text-muted)]">{{ metric === 't_50_seconds' ? 'any of 50' : 'best friend' }}</div>
            <div class="text-sm font-semibold text-[var(--text-primary)]">every {{ humanTime(act[metric]) }}</div>
          </div>
          <span
            class="text-[var(--text-muted)] shrink-0 inline-block"
            :style="{ transform: expandedSlug === act.slug ? 'rotate(90deg)' : 'none', transition: 'transform 150ms' }"
          >›</span>
        </button>

        <!-- Mobile time line -->
        <div class="sm:hidden px-4 pb-3 text-xs">
          <span class="text-[var(--text-muted)]">{{ metric === 't_50_seconds' ? 'any of 50' : 'best friend' }}: </span>
          <span class="font-semibold text-[var(--text-primary)]">every {{ humanTime(act[metric]) }}</span>
        </div>

        <div v-if="expandedSlug === act.slug" class="border-t border-[var(--border-light)] p-5 bg-[var(--bg-surface-alt)]">
          <div class="mb-3 flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
            <span><strong class="text-[var(--text-secondary)]">Any of 50:</strong> every {{ humanTime(act.t_50_seconds) }}</span>
            <span><strong class="text-[var(--text-secondary)]">Best friend:</strong> every {{ humanTime(act.t_1_seconds) }}</span>
            <span><strong class="text-[var(--text-secondary)]">Duration:</strong> {{ act.duration_seconds }} sec/instance</span>
            <span v-if="act.frequency_per_day !== 'lifetime'"><strong class="text-[var(--text-secondary)]">Frequency:</strong> {{ act.frequency_per_day }}/day</span>
            <span v-else><strong class="text-[var(--text-secondary)]">Lifetime count:</strong> {{ act.lifetime_count }}</span>
            <span><strong class="text-[var(--text-secondary)]">Active hours:</strong> {{ act.active_hours_per_day }}/day</span>
            <span><strong class="text-[var(--text-secondary)]">Confidence:</strong> {{ confidenceLabel(act.confidence) }}</span>
          </div>
          <div
            class="prose dark:prose-invert prose-sm max-w-none
              prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)]
              prose-a:text-[var(--text-primary)] prose-a:underline
              prose-strong:text-[var(--text-primary)]
              prose-code:text-[var(--text-primary)]
              prose-li:text-[var(--text-secondary)]"
            v-html="getMarkdownHtml(act.slug, act.order)"
          ></div>
        </div>
      </div>
    </div>

    <!-- Footer note -->
    <div class="mt-10 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 text-xs text-[var(--text-muted)] leading-relaxed space-y-2">
      <p>
        <strong class="text-[var(--text-secondary)]">What "simultaneous" means here.</strong>
        An overlap event is a moment where your activity window and a friend's activity window touch,
        even by a single second. For sneezing, that means your sneeze (≈0.4 sec) overlapped a friend's
        sneeze somewhere in the world. You'd never know. The math says it almost certainly happened.
      </p>
      <p>
        <strong class="text-[var(--text-secondary)]">Assumptions.</strong>
        Your 50 close friends share roughly your time zone and daily rhythm. They are roughly your age
        with roughly your lifestyle. Activities are modeled as Poisson processes within their active
        windows. Time-of-day clustering is captured by shrinking the active window
        <code>h</code>. Lifetime-rare events use an expected-count framing rather than an interarrival
        time. Each card spells out its specific assumptions.
      </p>
      <p>
        <strong class="text-[var(--text-secondary)]">What this graph isn't.</strong>
        Not a prediction that any specific overlap will happen on a schedule — these are expected
        values across many trials. "Every 13 minutes" doesn't mean every 13 minutes on the dot; it
        means that across a long enough window, overlap events arrive at that average rate.
      </p>
    </div>
  </GraphWrapper>
</template>
