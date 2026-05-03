<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend)

import bibleData from './data/bible-content-breakdown.json'

// --- Constants ---
const FUNCTION_LABELS = {
  narrative: 'Narrative',
  theological: 'Theological teaching',
  prophecy: 'Prophecy',
  moral_instruction: 'Moral instruction',
  poetry_praise: 'Poetry & praise',
  catalog: 'Catalog (genealogies, lists)',
  ritual_instruction: 'Ritual instruction',
  wisdom: 'Wisdom sayings',
  specifications: 'Specifications',
  civil_law: 'Civil/criminal law',
  sexual_marital: 'Sexual & marital rules',
  purity_dietary: 'Purity & dietary',
}
const FUNCTION_KEYS = Object.keys(FUNCTION_LABELS)

const THEME_LABELS = {
  gods_power: "God's power",
  obey_god: 'Obey God',
  consequences: 'Consequences of sin',
  faith_trust: 'Faith / trust',
  redemption: 'Redemption',
  justice: 'Justice',
  mercy: 'Mercy / compassion',
  loyalty: 'Loyalty',
  humility: 'Humility',
  courage: 'Courage',
  care_vulnerable: 'Care for vulnerable',
  sacrifice: 'Sacrifice',
  hypocrisy: 'Hypocrisy',
  generosity: 'Generosity',
  sexual_purity: 'Sexual purity',
}
const THEME_KEYS = Object.keys(THEME_LABELS)

const PALETTE = [
  '#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6',
  '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#a16207',
  '#14b8a6', '#e11d48', '#fb7185', '#eab308', '#64748b',
]

// --- Precompute ---
const books = bibleData.books
const bookOptions = books.map(b => ({ slug: b.slug, name: b.name, testament: b.testament }))

// --- UI state ---
const activeTab = ref('functions')
const functionFilter = ref('all')
const themeFilter = ref('all')

// --- Data computation ---
function getFilteredBooks(filter) {
  if (filter === 'all') return books
  if (filter === 'old') return books.filter(b => b.testament === 'old')
  if (filter === 'new') return books.filter(b => b.testament === 'new')
  return books.filter(b => b.slug === filter)
}

function computeFunctionCounts(filter) {
  const filtered = getFilteredBooks(filter)
  const counts = {}
  FUNCTION_KEYS.forEach(k => counts[k] = 0)
  for (const book of filtered) {
    for (const ch of book.chapters) {
      for (const v of ch.verses) {
        if (counts[v.function] !== undefined) counts[v.function]++
      }
    }
  }
  return counts
}

function computeThemeCounts(filter) {
  const filtered = getFilteredBooks(filter)
  const counts = {}
  THEME_KEYS.forEach(k => counts[k] = 0)
  for (const book of filtered) {
    for (const ch of book.chapters) {
      for (const story of (ch.stories || [])) {
        for (const moral of (story.morals || [])) {
          const t = moral.theme
          if (counts[t] !== undefined) counts[t] += (moral.weight || 1)
          else if (t === 'consequences_of_sin' || t === 'consequences_sin') counts['consequences'] += (moral.weight || 1)
        }
      }
    }
  }
  return counts
}

function toPctList(counts, keys, labels) {
  const total = keys.reduce((s, k) => s + counts[k], 0)
  return keys.map((k, i) => ({
    key: k, label: labels[k], color: PALETTE[i],
    value: counts[k],
    pct: total > 0 ? (counts[k] / total) * 100 : 0,
  })).sort((a, b) => b.pct - a.pct)
}

// --- Reactive pie/legend data ---
const functionBreakdown = computed(() =>
  toPctList(computeFunctionCounts(functionFilter.value), FUNCTION_KEYS, FUNCTION_LABELS)
)
const themeBreakdown = computed(() =>
  toPctList(computeThemeCounts(themeFilter.value), THEME_KEYS, THEME_LABELS)
)

// --- OT vs NT comparison table ---
function buildComparison(keys, labels, type) {
  const otCounts = type === 'function' ? computeFunctionCounts('old') : computeThemeCounts('old')
  const ntCounts = type === 'function' ? computeFunctionCounts('new') : computeThemeCounts('new')
  const otTotal = keys.reduce((s, k) => s + otCounts[k], 0)
  const ntTotal = keys.reduce((s, k) => s + ntCounts[k], 0)

  return keys.map((k, i) => {
    const otPct = otTotal > 0 ? (otCounts[k] / otTotal) * 100 : 0
    const ntPct = ntTotal > 0 ? (ntCounts[k] / ntTotal) * 100 : 0
    const change = otPct > 0.1 ? ((ntPct - otPct) / otPct) * 100 : (ntPct > 0.1 ? 999 : 0)
    return { key: k, label: labels[k], color: PALETTE[i], otPct, ntPct, change }
  }).sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
}

const functionComparison = buildComparison(FUNCTION_KEYS, FUNCTION_LABELS, 'function')
const themeComparison = buildComparison(THEME_KEYS, THEME_LABELS, 'theme')

// --- SVG Pie Chart ---
function computePieSlices(items) {
  const filtered = items.filter(d => d.pct > 0)
  let cumulative = 0
  return filtered.map(d => {
    const start = cumulative
    cumulative += d.pct
    return { ...d, startAngle: (start / 100) * 360, endAngle: (cumulative / 100) * 360 }
  })
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

// --- Per-book stacked bar chart (Chart.js, vertical) ---
const functionBarsRef = ref(null)
const themeBarsRef = ref(null)
let functionBarsChart = null
let themeBarsChart = null

function computePerBookPcts(keys, type) {
  return books.map(book => {
    const counts = {}
    keys.forEach(k => counts[k] = 0)
    let total = 0
    if (type === 'function') {
      for (const ch of book.chapters) {
        for (const v of ch.verses) { total++; if (counts[v.function] !== undefined) counts[v.function]++ }
      }
    } else {
      for (const ch of book.chapters) {
        for (const story of (ch.stories || [])) {
          for (const moral of (story.morals || [])) {
            const w = moral.weight || 1
            const t = moral.theme
            if (counts[t] !== undefined) { counts[t] += w; total += w }
            else if (t === 'consequences_of_sin' || t === 'consequences_sin') { counts['consequences'] += w; total += w }
          }
        }
      }
    }
    const pcts = {}
    keys.forEach(k => pcts[k] = total > 0 ? (counts[k] / total) * 100 : 0)
    return { name: book.name, ...pcts }
  })
}

const functionPerBook = computePerBookPcts(FUNCTION_KEYS, 'function')
const themePerBook = computePerBookPcts(THEME_KEYS, 'theme')

function buildBookBars(canvasEl, existing, perBookData, keys, labels) {
  if (existing) existing.destroy()
  if (!canvasEl) return null
  const c = chartColors()

  const datasets = keys.map((key, i) => ({
    label: labels[key],
    data: perBookData.map(b => b[key]),
    backgroundColor: PALETTE[i],
    borderWidth: 0,
    barPercentage: 1.0,
    categoryPercentage: 0.95,
  }))

  return new Chart(canvasEl, {
    type: 'bar',
    data: { labels: perBookData.map(b => b.name), datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          stacked: true,
          ticks: { color: c.text, font: { size: 11 }, maxRotation: 90, minRotation: 45 },
          grid: { display: false },
        },
        y: {
          stacked: true, min: 0, max: 100,
          ticks: { color: c.text, callback: v => v + '%' },
          grid: { color: c.grid },
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.raw.toFixed(1)}%` } }
      }
    }
  })
}

function buildAll() {
  if (activeTab.value === 'functions') {
    functionBarsChart = buildBookBars(functionBarsRef.value, functionBarsChart, functionPerBook, FUNCTION_KEYS, FUNCTION_LABELS)
  } else {
    themeBarsChart = buildBookBars(themeBarsRef.value, themeBarsChart, themePerBook, THEME_KEYS, THEME_LABELS)
  }
}

function onThemeChange() { buildAll() }
watch(activeTab, async () => { await nextTick(); buildAll() })
onMounted(() => { requestAnimationFrame(() => buildAll()) })
onUnmounted(() => { functionBarsChart?.destroy(); themeBarsChart?.destroy() })

const totalVerses = books.reduce((sum, b) => sum + b.chapters.reduce((s, ch) => s + ch.verses.length, 0), 0)
const filterLabel = computed(() => {
  const f = activeTab.value === 'functions' ? functionFilter.value : themeFilter.value
  if (f === 'all') return 'Entire Bible'
  if (f === 'old') return 'Old Testament'
  if (f === 'new') return 'New Testament'
  return bookOptions.find(b => b.slug === f)?.name || f
})

function fmtChange(val) {
  if (Math.abs(val) > 500) return 'new'
  return (val > 0 ? '+' : '') + Math.round(val) + '%'
}
</script>

<template>
  <GraphWrapper title="What Is the Bible Actually About?" maxWidth="6xl" @theme-change="onThemeChange">
    <template #subtitle>
      Every verse in the Bible (NET translation, {{ totalVerses.toLocaleString() }} verses across {{ books.length }} books) categorized by what it's doing, plus story-level moral themes.
    </template>

    <!-- Tab switcher -->
    <div class="flex gap-1 mb-8 border-b border-[var(--border)]">
      <button @click="activeTab = 'functions'" :class="['px-4 py-2 text-sm font-medium cursor-pointer transition-colors', activeTab === 'functions' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]']">Verse Functions</button>
      <button @click="activeTab = 'themes'" :class="['px-4 py-2 text-sm font-medium cursor-pointer transition-colors', activeTab === 'themes' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]']">Story Themes</button>
    </div>

    <!-- ==================== FUNCTIONS TAB ==================== -->
    <div v-show="activeTab === 'functions'">

      <!-- Pie chart + legend -->
      <div class="mb-10">
        <div class="flex items-center gap-4 mb-4">
          <h2 class="text-xl font-semibold">What is each verse doing?</h2>
          <select v-model="functionFilter" class="text-sm px-2 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)]">
            <option value="all">Entire Bible</option>
            <option value="old">Old Testament</option>
            <option value="new">New Testament</option>
            <optgroup label="Books">
              <option v-for="b in bookOptions" :key="b.slug" :value="b.slug">{{ b.name }}</option>
            </optgroup>
          </select>
        </div>
        <p class="text-sm text-[var(--text-secondary)] mb-4">Currently showing: <strong>{{ filterLabel }}</strong></p>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <svg viewBox="0 0 200 200" class="w-64 h-64 shrink-0">
            <path
              v-for="slice in computePieSlices(functionBreakdown)"
              :key="slice.key"
              :d="describeArc(100, 100, 95, slice.startAngle, slice.endAngle)"
              :fill="slice.color"
              stroke="var(--bg-surface)" stroke-width="1"
            >
              <title>{{ slice.label }}: {{ slice.pct.toFixed(1) }}%</title>
            </path>
          </svg>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            <div v-for="item in functionBreakdown" :key="item.key" class="flex items-center gap-2 py-0.5">
              <span class="inline-block w-3 h-3 rounded-sm shrink-0" :style="{ backgroundColor: item.color }"></span>
              <span class="text-sm">{{ item.label }}</span>
              <span class="text-sm text-[var(--text-muted)] ml-auto tabular-nums pl-3">{{ item.pct.toFixed(1) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- OT vs NT table -->
      <div class="mb-10">
        <h2 class="text-xl font-semibold mb-2">Old Testament vs New Testament</h2>
        <p class="text-sm text-[var(--text-secondary)] mb-4">How the verse function mix shifted between testaments.</p>
        <div class="overflow-x-auto">
          <table class="w-full max-w-2xl text-sm">
            <thead>
              <tr class="border-b border-[var(--border)]">
                <th class="text-left py-2 pr-4"></th>
                <th class="text-right py-2 px-3">OT</th>
                <th class="text-right py-2 px-3">NT</th>
                <th class="text-right py-2 pl-3">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in functionComparison" :key="row.key" class="border-b border-[var(--border-light)]">
                <td class="py-1.5 pr-4 flex items-center gap-2">
                  <span class="inline-block w-2.5 h-2.5 rounded-sm" :style="{ backgroundColor: row.color }"></span>
                  {{ row.label }}
                </td>
                <td class="text-right py-1.5 px-3 tabular-nums">{{ row.otPct.toFixed(1) }}%</td>
                <td class="text-right py-1.5 px-3 tabular-nums">{{ row.ntPct.toFixed(1) }}%</td>
                <td class="text-right py-1.5 pl-3 tabular-nums font-medium" :class="row.change > 0 ? 'text-green-500' : row.change < 0 ? 'text-red-500' : 'text-[var(--text-muted)]'">
                  {{ fmtChange(row.change) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Per-book stacked bars -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Every book, cover to cover</h2>
        <p class="text-sm text-[var(--text-secondary)] mb-3">Each bar is one book. Every bar totals 100%.</p>
        <div class="book-scroll">
          <div class="relative" style="height: 550px; min-width: 1800px;">
            <canvas ref="functionBarsRef"></canvas>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1">
          <div v-for="(key, i) in FUNCTION_KEYS" :key="key" class="flex items-center gap-1.5">
            <span class="inline-block w-2.5 h-2.5 rounded-sm shrink-0" :style="{ backgroundColor: PALETTE[i] }"></span>
            <span class="text-xs text-[var(--text-secondary)]">{{ FUNCTION_LABELS[key] }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== THEMES TAB ==================== -->
    <div v-show="activeTab === 'themes'">

      <!-- Pie chart + legend -->
      <div class="mb-10">
        <div class="flex items-center gap-4 mb-4">
          <h2 class="text-xl font-semibold">What are the stories teaching?</h2>
          <select v-model="themeFilter" class="text-sm px-2 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)]">
            <option value="all">Entire Bible</option>
            <option value="old">Old Testament</option>
            <option value="new">New Testament</option>
            <optgroup label="Books">
              <option v-for="b in bookOptions" :key="b.slug" :value="b.slug">{{ b.name }}</option>
            </optgroup>
          </select>
        </div>
        <p class="text-sm text-[var(--text-secondary)] mb-4">Currently showing: <strong>{{ filterLabel }}</strong></p>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <svg viewBox="0 0 200 200" class="w-64 h-64 shrink-0">
            <path
              v-for="slice in computePieSlices(themeBreakdown)"
              :key="slice.key"
              :d="describeArc(100, 100, 95, slice.startAngle, slice.endAngle)"
              :fill="slice.color"
              stroke="var(--bg-surface)" stroke-width="1"
            >
              <title>{{ slice.label }}: {{ slice.pct.toFixed(1) }}%</title>
            </path>
          </svg>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            <div v-for="item in themeBreakdown" :key="item.key" class="flex items-center gap-2 py-0.5">
              <span class="inline-block w-3 h-3 rounded-sm shrink-0" :style="{ backgroundColor: item.color }"></span>
              <span class="text-sm">{{ item.label }}</span>
              <span class="text-sm text-[var(--text-muted)] ml-auto tabular-nums pl-3">{{ item.pct.toFixed(1) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- OT vs NT table -->
      <div class="mb-10">
        <h2 class="text-xl font-semibold mb-2">Old Testament vs New Testament</h2>
        <p class="text-sm text-[var(--text-secondary)] mb-4">How the moral emphasis shifted between testaments.</p>
        <div class="overflow-x-auto">
          <table class="w-full max-w-2xl text-sm">
            <thead>
              <tr class="border-b border-[var(--border)]">
                <th class="text-left py-2 pr-4"></th>
                <th class="text-right py-2 px-3">OT</th>
                <th class="text-right py-2 px-3">NT</th>
                <th class="text-right py-2 pl-3">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in themeComparison" :key="row.key" class="border-b border-[var(--border-light)]">
                <td class="py-1.5 pr-4 flex items-center gap-2">
                  <span class="inline-block w-2.5 h-2.5 rounded-sm" :style="{ backgroundColor: row.color }"></span>
                  {{ row.label }}
                </td>
                <td class="text-right py-1.5 px-3 tabular-nums">{{ row.otPct.toFixed(1) }}%</td>
                <td class="text-right py-1.5 px-3 tabular-nums">{{ row.ntPct.toFixed(1) }}%</td>
                <td class="text-right py-1.5 pl-3 tabular-nums font-medium" :class="row.change > 0 ? 'text-green-500' : row.change < 0 ? 'text-red-500' : 'text-[var(--text-muted)]'">
                  {{ fmtChange(row.change) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Per-book stacked bars -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Every book, cover to cover</h2>
        <p class="text-sm text-[var(--text-secondary)] mb-3">Each bar is one book's theme distribution. Every bar totals 100%.</p>
        <div class="book-scroll">
          <div class="relative" style="height: 550px; min-width: 1800px;">
            <canvas ref="themeBarsRef"></canvas>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1">
          <div v-for="(key, i) in THEME_KEYS" :key="key" class="flex items-center gap-1.5">
            <span class="inline-block w-2.5 h-2.5 rounded-sm shrink-0" :style="{ backgroundColor: PALETTE[i] }"></span>
            <span class="text-xs text-[var(--text-secondary)]">{{ THEME_LABELS[key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </GraphWrapper>
</template>

<style scoped>
.book-scroll {
  overflow-x: scroll;
  scrollbar-color: var(--text-muted) transparent;
}
.book-scroll::-webkit-scrollbar {
  height: 10px;
}
.book-scroll::-webkit-scrollbar-track {
  background: var(--bg-surface-alt, #1a1a2e);
  border-radius: 5px;
}
.book-scroll::-webkit-scrollbar-thumb {
  background: var(--text-muted);
  border-radius: 5px;
}
</style>
