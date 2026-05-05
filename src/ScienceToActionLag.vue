<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import {
  Chart, BarController, BarElement,
  LinearScale, CategoryScale, Tooltip, Legend
} from 'chart.js'
import { marked } from 'marked'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'
import { scienceToActionData } from './data/science-to-action-lag.ts'

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend)

const reportModules = import.meta.glob('../projects/science-to-action-lag/results/*.md', { query: '?raw', eager: true })
const reportsBySlug = {}
for (const [path, mod] of Object.entries(reportModules)) {
  const filename = path.split('/').pop().replace('.md', '')
  const slug = filename.replace(/^\d+-/, '')
  reportsBySlug[slug] = mod.default
}

const expandedSlug = ref(null)
function toggleReport(slug) {
  expandedSlug.value = expandedSlug.value === slug ? null : slug
}
function renderReport(slug) {
  const raw = reportsBySlug[slug]
  if (!raw) return '<p>No research file found for this hazard.</p>'
  return marked(raw)
}

const CURRENT_YEAR = 2026

const categoryMeta = {
  'substance-ban':       { color: 'rgba(59,130,246,0.75)',  border: '#3b82f6', label: 'Substance ban' },
  'exposure-limit':      { color: 'rgba(245,158,11,0.75)',  border: '#f59e0b', label: 'Exposure limit' },
  'behavioral-mandate':  { color: 'rgba(16,185,129,0.75)',  border: '#10b981', label: 'Behavioral mandate' },
  'international-treaty': { color: 'rgba(139,92,246,0.75)', border: '#8b5cf6', label: 'International treaty' },
  'product-withdrawal':  { color: 'rgba(244,63,94,0.75)',   border: '#f43f5e', label: 'Product withdrawal' },
  'dietary-policy':      { color: 'rgba(249,115,22,0.75)',  border: '#f97316', label: 'Dietary policy' },
}

// Sort by lag from evidence (longest first), in-progress at top
const sorted = computed(() => {
  return [...scienceToActionData].sort((a, b) => {
    const lagA = a.lagFromEvidence ?? (CURRENT_YEAR - a.earlyEvidenceYear)
    const lagB = b.lagFromEvidence ?? (CURRENT_YEAR - b.earlyEvidenceYear)
    return lagB - lagA
  })
})

const completedWithLag = computed(() =>
  scienceToActionData.filter(d => d.lagFromEvidence !== null && d.lagFromEvidence >= 0 && d.regulationStatus === 'completed')
)

const avgLag = computed(() => {
  const items = completedWithLag.value
  return Math.round(items.reduce((s, d) => s + d.lagFromEvidence, 0) / items.length)
})

const medianLag = computed(() => {
  const lags = completedWithLag.value.map(d => d.lagFromEvidence).sort((a, b) => a - b)
  const mid = Math.floor(lags.length / 2)
  return lags.length % 2 ? lags[mid] : Math.round((lags[mid - 1] + lags[mid]) / 2)
})

const ganttRef = ref(null)
const decadeRef = ref(null)
let charts = []

function destroyCharts() {
  charts.forEach(ch => ch.destroy())
  charts = []
}

function buildCharts() {
  destroyCharts()
  if (!ganttRef.value) return
  const c = chartColors()
  const data = sorted.value

  // --- Main Gantt chart ---
  const labels = data.map(d => {
    const lag = d.lagFromEvidence
    const suffix = d.regulationStatus === 'in-progress' ? ' (ongoing)' : ''
    const lagStr = lag !== null ? ` [${lag < 0 ? lag : '+' + lag}y]` : ` [${CURRENT_YEAR - d.earlyEvidenceYear}y+]`
    return d.hazard + lagStr + suffix
  })

  const barData = data.map(d => {
    const regYear = d.firstRegulationYear ?? CURRENT_YEAR
    return [Math.min(d.earlyEvidenceYear, regYear), Math.max(d.earlyEvidenceYear, regYear)]
  })

  const bgColors = data.map(d => {
    const base = categoryMeta[d.category]
    if (d.regulationStatus === 'in-progress') {
      return base.color.replace('0.75', '0.4')
    }
    if (d.slug === 'saccharin-cancer-false-positive') {
      return 'rgba(120,120,120,0.5)'
    }
    return base.color
  })

  const borderColors = data.map(d => {
    if (d.slug === 'saccharin-cancer-false-positive') return '#888'
    return categoryMeta[d.category].border
  })

  // Plugin: draw consensus year diamonds and US regulation markers
  const markerPlugin = {
    id: 'timelineMarkers',
    afterDatasetsDraw(chart) {
      const { ctx } = chart
      const meta = chart.getDatasetMeta(0)
      const xScale = chart.scales.x

      data.forEach((d, i) => {
        const bar = meta.data[i]
        if (!bar) return
        const barTop = bar.y - bar.height / 2
        const barBot = bar.y + bar.height / 2

        // Consensus year — small diamond
        if (d.consensusYear) {
          const x = xScale.getPixelForValue(d.consensusYear)
          if (x >= chart.chartArea.left && x <= chart.chartArea.right) {
            ctx.save()
            ctx.fillStyle = c.surface
            ctx.strokeStyle = c.text
            ctx.lineWidth = 1.2
            const sz = 4
            ctx.beginPath()
            ctx.moveTo(x, bar.y - sz)
            ctx.lineTo(x + sz, bar.y)
            ctx.lineTo(x, bar.y + sz)
            ctx.lineTo(x - sz, bar.y)
            ctx.closePath()
            ctx.fill()
            ctx.stroke()
            ctx.restore()
          }
        }

        // US regulation year — small vertical tick
        if (d.usRegulationYear) {
          const x = xScale.getPixelForValue(d.usRegulationYear)
          if (x >= chart.chartArea.left && x <= chart.chartArea.right) {
            ctx.save()
            ctx.strokeStyle = 'rgba(239,68,68,0.8)'
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(x, barTop + 2)
            ctx.lineTo(x, barBot - 2)
            ctx.stroke()
            ctx.restore()
          }
        }

        // In-progress arrow
        if (d.regulationStatus === 'in-progress') {
          const x = xScale.getPixelForValue(CURRENT_YEAR)
          ctx.save()
          ctx.fillStyle = categoryMeta[d.category].border
          ctx.beginPath()
          ctx.moveTo(x, bar.y - 6)
          ctx.lineTo(x + 8, bar.y)
          ctx.lineTo(x, bar.y + 6)
          ctx.closePath()
          ctx.fill()
          ctx.restore()
        }
      })
    }
  }

  charts.push(new Chart(ganttRef.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data: barData,
        backgroundColor: bgColors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: 2,
        borderSkipped: false,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { right: 12 } },
      scales: {
        x: {
          type: 'linear',
          min: 1895,
          max: 2030,
          grid: { color: c.grid },
          ticks: {
            color: c.text,
            stepSize: 10,
            callback: v => v % 20 === 0 ? String(v) : '',
          },
          title: { display: true, text: 'Year', color: c.text },
        },
        y: {
          grid: { display: false },
          ticks: { color: c.text, font: { size: 11 } },
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => {
              const d = data[items[0].dataIndex]
              return d.hazard
            },
            label: (ctx) => {
              const d = data[ctx.dataIndex]
              const lines = []
              lines.push(`Harm: ${d.harm}`)
              lines.push(`Evidence: ${d.earlyEvidenceYear} — ${d.earlyEvidenceDesc}`)
              if (d.consensusYear) lines.push(`Consensus: ${d.consensusYear}`)
              const regYear = d.firstRegulationYear ?? 'none yet'
              lines.push(`First regulation: ${regYear} (${d.firstRegulationCountry})`)
              if (d.usRegulationYear) {
                lines.push(`US regulation: ${d.usRegulationYear}`)
              } else {
                lines.push(`US regulation: none`)
              }
              lines.push(`Lag: ${d.lagFromEvidence !== null ? d.lagFromEvidence + ' years' : 'ongoing'}`)
              lines.push(`Industry opposition: ${d.industryOpposition}`)
              return lines
            }
          }
        }
      }
    },
    plugins: [markerPlugin],
  }))

  // --- Chart 2: Lag by decade of evidence ---
  if (decadeRef.value) {
    const byDecade = {}
    completedWithLag.value.forEach(d => {
      const decade = Math.floor(d.earlyEvidenceYear / 10) * 10
      if (!byDecade[decade]) byDecade[decade] = []
      byDecade[decade].push(d.lagFromEvidence)
    })
    const decades = Object.keys(byDecade).map(Number).sort((a, b) => a - b)
    const decadeAvgs = decades.map(dec => {
      const arr = byDecade[dec]
      return Math.round(arr.reduce((s, x) => s + x, 0) / arr.length)
    })

    charts.push(new Chart(decadeRef.value, {
      type: 'bar',
      data: {
        labels: decades.map(d => `${d}s`),
        datasets: [{
          data: decadeAvgs,
          backgroundColor: 'rgba(59,130,246,0.6)',
          borderWidth: 0,
          borderRadius: 4,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { grid: { display: false }, ticks: { color: c.text } },
          y: {
            beginAtZero: true,
            grid: { color: c.grid },
            ticks: { color: c.text },
            title: { display: true, text: 'Average years to first regulation', color: c.text },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => {
                const dec = decades[ctx.dataIndex]
                return `${ctx.parsed.y} years avg (n=${byDecade[dec].length})`
              }
            }
          },
        }
      }
    }))
  }
}

function onThemeChange() {
  buildCharts()
}

onMounted(() => buildCharts())
onUnmounted(() => destroyCharts())
</script>

<template>
  <GraphWrapper title="Science-to-Action Lag" maxWidth="6xl" @themeChange="onThemeChange">
    <template #subtitle>
      How long does it take society to act on what science already knows? 32 hazards, 120+ years of data. Each bar shows the gap between strong evidence and binding regulation.
    </template>

    <div class="mt-6 grid grid-cols-3 gap-4 text-center">
      <div class="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="text-2xl font-bold">{{ avgLag }} years</div>
        <div class="text-xs text-[var(--text-muted)]">mean lag</div>
      </div>
      <div class="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="text-2xl font-bold">{{ medianLag }} years</div>
        <div class="text-xs text-[var(--text-muted)]">median lag</div>
      </div>
      <div class="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="text-2xl font-bold">0 → 54</div>
        <div class="text-xs text-[var(--text-muted)]">range (years)</div>
      </div>
    </div>

    <section class="mt-10">
      <h2 class="text-xl font-semibold mb-1">The timeline</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-2">
        Sorted by lag duration. Each bar spans from first strong evidence to first binding regulation.
        <span class="inline-flex items-center gap-1 ml-1">
          <span class="inline-block w-2 h-2 rotate-45 border border-[var(--text-muted)] bg-[var(--bg-surface)]"></span>
          <span class="text-xs text-[var(--text-muted)]">= consensus year</span>
        </span>
        <span class="inline-flex items-center gap-1 ml-2">
          <span class="inline-block w-0.5 h-3 bg-red-500"></span>
          <span class="text-xs text-[var(--text-muted)]">= US regulation</span>
        </span>
      </p>
      <div class="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs">
        <span v-for="(meta, cat) in categoryMeta" :key="cat" class="inline-flex items-center gap-1">
          <span class="inline-block w-3 h-3 rounded-sm" :style="{ background: meta.color }"></span>
          <span class="text-[var(--text-secondary)]">{{ meta.label }}</span>
        </span>
        <span class="inline-flex items-center gap-1">
          <span class="inline-block w-3 h-3 rounded-sm bg-gray-400/50"></span>
          <span class="text-[var(--text-secondary)]">False positive (reversed)</span>
        </span>
      </div>
      <div style="height: 960px">
        <canvas ref="ganttRef"></canvas>
      </div>
    </section>

    <div class="mt-8 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
      <strong class="text-[var(--text-primary)]">Thalidomide vs. sugar: the extremes.</strong>
      Thalidomide was withdrawn in 11 days — visible birth defects, sympathetic victims, no industry defense.
      Sugar took 54 years — invisible harm, powerful industry, and a funded campaign to blame fat instead.
      The difference isn't the science. It's the politics.
    </div>

    <section class="mt-12">
      <h2 class="text-lg font-semibold mb-1">Is regulation getting faster?</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-3">
        Average lag for hazards by decade of first evidence.
      </p>
      <canvas ref="decadeRef"></canvas>
    </section>

    <section class="mt-12">
      <h2 class="text-lg font-semibold mb-2">Per-hazard research</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Click any hazard to expand the full research write-up: sources, judgment calls, and the case for the dates used.
      </p>
      <ul class="divide-y divide-[var(--border-light)] border border-[var(--border-light)] rounded-lg overflow-hidden">
        <template v-for="d in sorted" :key="d.slug">
          <li class="bg-[var(--bg-surface)]">
            <button
              @click="toggleReport(d.slug)"
              class="w-full px-4 py-3 flex items-center justify-between gap-4 text-left hover:bg-[var(--bg-elevated)] cursor-pointer"
              :class="expandedSlug === d.slug ? 'text-blue-500' : ''"
            >
              <span class="flex items-center gap-3 min-w-0">
                <span
                  class="inline-block w-3 h-3 rounded-sm shrink-0"
                  :style="{ background: categoryMeta[d.category].color }"
                ></span>
                <span class="font-medium truncate">{{ d.hazard }}</span>
                <span class="text-xs text-[var(--text-muted)] truncate">— {{ d.harm }}</span>
              </span>
              <span class="flex items-center gap-3 shrink-0 text-xs text-[var(--text-muted)]">
                <span>
                  {{ d.lagFromEvidence !== null ? (d.lagFromEvidence < 0 ? d.lagFromEvidence : '+' + d.lagFromEvidence) + 'y' : 'ongoing' }}
                </span>
                <span>{{ expandedSlug === d.slug ? '▲' : '▼' }}</span>
              </span>
            </button>
            <div v-if="expandedSlug === d.slug" class="px-6 py-6 border-t border-[var(--border-light)] overflow-x-auto">
              <div
                class="prose prose-sm dark:prose-invert max-w-none break-words [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_code]:break-all [&_code]:whitespace-pre-wrap"
                v-html="renderReport(d.slug)"
              ></div>
            </div>
          </li>
        </template>
      </ul>
    </section>

    <section class="mt-12 text-sm text-[var(--text-secondary)] space-y-3">
      <h2 class="text-lg font-semibold text-[var(--text-primary)]">What you're looking at</h2>
      <p>
        <strong>"Early evidence"</strong> is the first credible scientific study establishing a causal link — not speculation, not anecdote.
        <strong>"First regulation"</strong> is the first binding law (not voluntary guideline) in any OECD country that meaningfully restricts exposure.
        The lag measures how long society knew something was dangerous before anyone made it illegal.
      </p>
      <p>
        The dataset includes 32 hazards across 6 regulatory categories: substance bans, exposure limits, behavioral mandates,
        international treaties, product withdrawals, and dietary policy. Three cases are still in progress (CO₂, PFAS, ultra-processed food).
        One case (saccharin) is a false positive where regulation was later reversed.
      </p>
      <p>
        Sources include IARC, WHO, EPA, OSHA, legislative databases, and academic review articles.
        Full methodology and per-hazard source documentation available in the project research files.
      </p>
    </section>
  </GraphWrapper>
</template>
