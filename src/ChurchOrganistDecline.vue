<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { chartColors } from './theme.js'
import GraphWrapper from './GraphWrapper.vue'
import {
  estimates,
  agoMembership,
  organUse,
  methodology,
  jazzEstimates,
  afmMembership,
  jazzMethodology,
  allPianistsEstimates,
} from './data/church-organist-decline.ts'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend, annotationPlugin)

const ORGANIST_COLOR = '#7c4a3e' // muted maroon — pipe organ wood
const ORGANIST_SOFT = 'rgba(124, 74, 62, 0.18)'
const JAZZ_COLOR = '#3d5a6c' // smoky lounge blue
const JAZZ_SOFT = 'rgba(61, 90, 108, 0.18)'
const PIANO_COLOR = '#8a6d3b' // muted gold — ivory keys
const PIANO_SOFT = 'rgba(138, 109, 59, 0.16)'

const mainCanvas = ref(null)
const agoCanvas = ref(null)
const jazzCanvas = ref(null)
const afmCanvas = ref(null)
const combinedCanvas = ref(null)
const view = ref('perCapita') // 'perCapita' | 'raw'
const jazzView = ref('perCapita') // 'perCapita' | 'raw'
let mainChart = null
let agoChart = null
let jazzChart = null
let afmChart = null
let combinedChart = null

const perCapita = computed(() =>
  estimates.map((e) => ({
    year: e.year,
    low: (e.organistsLow * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
    mid: (e.organistsMid * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
    high: (e.organistsHigh * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
  }))
)

const peakPerCapita = computed(() => {
  const peak = perCapita.value.reduce((a, b) => (a.mid > b.mid ? a : b))
  const now = perCapita.value[perCapita.value.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.mid,
    nowMid: now.mid,
    declinePct: Math.round((1 - now.mid / peak.mid) * 100),
  }
})

const peakRaw = computed(() => {
  const peak = estimates.reduce((a, b) => (a.organistsMid > b.organistsMid ? a : b))
  const now = estimates[estimates.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.organistsMid,
    nowMid: now.organistsMid,
    declinePct: Math.round((1 - now.organistsMid / peak.organistsMid) * 100),
  }
})

const jazzPerCapita = computed(() =>
  jazzEstimates.map((e) => ({
    year: e.year,
    low: (e.pianistsLow * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
    mid: (e.pianistsMid * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
    high: (e.pianistsHigh * 1000) / (e.usPopulationMillions * 1_000_000) * 1_000_000,
  }))
)

const jazzPeakPerCapita = computed(() => {
  const peak = jazzPerCapita.value.reduce((a, b) => (a.mid > b.mid ? a : b))
  const now = jazzPerCapita.value[jazzPerCapita.value.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.mid,
    nowMid: now.mid,
    declinePct: Math.round((1 - now.mid / peak.mid) * 100),
  }
})

const jazzPeakRaw = computed(() => {
  const peak = jazzEstimates.reduce((a, b) => (a.pianistsMid > b.pianistsMid ? a : b))
  const now = jazzEstimates[jazzEstimates.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.pianistsMid,
    nowMid: now.pianistsMid,
    declinePct: Math.round((1 - now.pianistsMid / peak.pianistsMid) * 100),
  }
})

/** Each profession's mid estimate as a % of its own peak — for the combined chart. */
function pctOfPeak(points, valueKey) {
  const peakVal = points.reduce((m, p) => Math.max(m, p[valueKey]), 0)
  return points.map((p) => ({ x: p.year, y: peakVal === 0 ? 0 : (p[valueKey] / peakVal) * 100 }))
}

const allPianistsPeakRaw = computed(() => {
  const peak = allPianistsEstimates.reduce((a, b) => (a.pianistsMid > b.pianistsMid ? a : b))
  const now = allPianistsEstimates[allPianistsEstimates.length - 1]
  return {
    peakYear: peak.year,
    peakMid: peak.pianistsMid,
    nowMid: now.pianistsMid,
    declinePct: Math.round((1 - now.pianistsMid / peak.pianistsMid) * 100),
  }
})

function buildMainChart() {
  if (mainChart) mainChart.destroy()
  if (!mainCanvas.value) return
  const cc = chartColors()

  const labels = estimates.map((e) => e.year)
  const isPerCapita = view.value === 'perCapita'
  const series = isPerCapita
    ? perCapita.value.map((p) => ({ low: p.low, mid: p.mid, high: p.high }))
    : estimates.map((e) => ({ low: e.organistsLow, mid: e.organistsMid, high: e.organistsHigh }))

  const accent = ORGANIST_COLOR
  const accentSoft = ORGANIST_SOFT

  mainChart = new Chart(mainCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Low estimate',
          data: series.map((s) => s.low),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: false,
        },
        {
          label: 'High estimate',
          data: series.map((s) => s.high),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: '-1',
          backgroundColor: accentSoft,
        },
        {
          label: isPerCapita ? 'Organists per million Americans' : 'Total organists (thousands)',
          data: series.map((s) => s.mid),
          borderColor: accent,
          backgroundColor: accent,
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      scales: {
        x: {
          title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: isPerCapita ? 'Organists per million Americans' : 'Organists (thousands)',
            color: cc.text,
            font: { size: 12 },
          },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: cc.text,
            filter: (item) => item.text.startsWith('Organists') || item.text === 'High estimate',
            generateLabels: (chart) => {
              const items = Chart.defaults.plugins.legend.labels.generateLabels(chart)
              return items
                .filter((i) => i.text === 'High estimate' || i.text.startsWith('Organists'))
                .map((i) => {
                  if (i.text === 'High estimate') {
                    return { ...i, text: 'Estimate range (low → high)', fillStyle: accentSoft, strokeStyle: accentSoft }
                  }
                  return i
                })
            },
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const e = estimates[ctx.dataIndex]
              const p = perCapita.value[ctx.dataIndex]
              if (isPerCapita) {
                return [
                  `Estimate: ${Math.round(p.mid)} per million`,
                  `Range: ${Math.round(p.low)} – ${Math.round(p.high)} per million`,
                  `Implied total: ~${e.organistsMid}K organists`,
                  `US pop: ${e.usPopulationMillions}M`,
                ]
              }
              return [
                `Estimate: ${e.organistsMid}K organists`,
                `Range: ${e.organistsLow}K – ${e.organistsHigh}K`,
                `US pop: ${e.usPopulationMillions}M`,
              ]
            },
            afterBody: (ctx) => {
              const e = estimates[ctx[0].dataIndex]
              return e.note ? '\n' + e.note : ''
            },
          },
        },
        annotation: {
          annotations: {
            peakLine: {
              type: 'line',
              xMin: isPerCapita
                ? labels.indexOf(peakPerCapita.value.peakYear)
                : labels.indexOf(peakRaw.value.peakYear),
              xMax: isPerCapita
                ? labels.indexOf(peakPerCapita.value.peakYear)
                : labels.indexOf(peakRaw.value.peakYear),
              borderColor: cc.text + '40',
              borderWidth: 1,
              borderDash: [4, 4],
              label: {
                display: true,
                content: 'estimated peak',
                position: 'start',
                color: cc.text,
                backgroundColor: 'transparent',
                font: { size: 10, style: 'italic' },
              },
            },
          },
        },
      },
    },
  })
}

function buildAgoChart() {
  if (agoChart) agoChart.destroy()
  if (!agoCanvas.value) return
  const cc = chartColors()
  const accent = ORGANIST_COLOR

  agoChart = new Chart(agoCanvas.value, {
    type: 'line',
    data: {
      labels: agoMembership.map((p) => p.year),
      datasets: [{
        label: 'AGO members',
        data: agoMembership.map((p) => p.members),
        borderColor: accent,
        backgroundColor: accent,
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { ticks: { color: cc.text }, grid: { color: cc.grid } },
        y: { beginAtZero: true, ticks: { color: cc.text }, grid: { color: cc.grid } },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const p = agoMembership[ctx.dataIndex]
              return [`${p.members.toLocaleString()} members`, p.source]
            },
          },
        },
      },
    },
  })
}

function buildJazzChart() {
  if (jazzChart) jazzChart.destroy()
  if (!jazzCanvas.value) return
  const cc = chartColors()

  const labels = jazzEstimates.map((e) => e.year)
  const isPerCapita = jazzView.value === 'perCapita'
  const series = isPerCapita
    ? jazzPerCapita.value.map((p) => ({ low: p.low, mid: p.mid, high: p.high }))
    : jazzEstimates.map((e) => ({ low: e.pianistsLow, mid: e.pianistsMid, high: e.pianistsHigh }))

  const accent = JAZZ_COLOR
  const accentSoft = JAZZ_SOFT

  jazzChart = new Chart(jazzCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Low estimate',
          data: series.map((s) => s.low),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: false,
        },
        {
          label: 'High estimate',
          data: series.map((s) => s.high),
          borderColor: 'transparent',
          pointRadius: 0,
          fill: '-1',
          backgroundColor: accentSoft,
        },
        {
          label: isPerCapita ? 'Jazz pianists per million Americans' : 'Total jazz pianists (thousands)',
          data: series.map((s) => s.mid),
          borderColor: accent,
          backgroundColor: accent,
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      scales: {
        x: {
          title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: isPerCapita ? 'Jazz pianists per million Americans' : 'Jazz pianists (thousands)',
            color: cc.text,
            font: { size: 12 },
          },
          ticks: { color: cc.text },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: cc.text,
            generateLabels: (chart) => {
              const items = Chart.defaults.plugins.legend.labels.generateLabels(chart)
              return items
                .filter((i) => i.text === 'High estimate' || i.text.startsWith('Jazz'))
                .map((i) => {
                  if (i.text === 'High estimate') {
                    return { ...i, text: 'Estimate range (low → high)', fillStyle: accentSoft, strokeStyle: accentSoft }
                  }
                  return i
                })
            },
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const e = jazzEstimates[ctx.dataIndex]
              const p = jazzPerCapita.value[ctx.dataIndex]
              if (isPerCapita) {
                return [
                  `Estimate: ${p.mid.toFixed(1)} per million`,
                  `Range: ${p.low.toFixed(1)} – ${p.high.toFixed(1)} per million`,
                  `Implied total: ~${e.pianistsMid}K pianists`,
                  `US pop: ${e.usPopulationMillions}M`,
                ]
              }
              return [
                `Estimate: ${e.pianistsMid}K pianists`,
                `Range: ${e.pianistsLow}K – ${e.pianistsHigh}K`,
                `US pop: ${e.usPopulationMillions}M`,
              ]
            },
            afterBody: (ctx) => {
              const e = jazzEstimates[ctx[0].dataIndex]
              return e.note ? '\n' + e.note : ''
            },
          },
        },
        annotation: {
          annotations: {
            peakLine: {
              type: 'line',
              xMin: isPerCapita
                ? labels.indexOf(jazzPeakPerCapita.value.peakYear)
                : labels.indexOf(jazzPeakRaw.value.peakYear),
              xMax: isPerCapita
                ? labels.indexOf(jazzPeakPerCapita.value.peakYear)
                : labels.indexOf(jazzPeakRaw.value.peakYear),
              borderColor: cc.text + '40',
              borderWidth: 1,
              borderDash: [4, 4],
              label: {
                display: true,
                content: 'estimated peak',
                position: 'start',
                color: cc.text,
                backgroundColor: 'transparent',
                font: { size: 10, style: 'italic' },
              },
            },
          },
        },
      },
    },
  })
}

function buildAfmChart() {
  if (afmChart) afmChart.destroy()
  if (!afmCanvas.value) return
  const cc = chartColors()
  const accent = JAZZ_COLOR

  afmChart = new Chart(afmCanvas.value, {
    type: 'line',
    data: {
      labels: afmMembership.map((p) => p.year),
      datasets: [{
        label: 'AFM members',
        data: afmMembership.map((p) => p.members),
        borderColor: accent,
        backgroundColor: accent,
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { ticks: { color: cc.text }, grid: { color: cc.grid } },
        y: {
          beginAtZero: true,
          ticks: {
            color: cc.text,
            callback: (v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v),
          },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const p = afmMembership[ctx.dataIndex]
              return [`${p.members.toLocaleString()} members`, p.source]
            },
          },
        },
      },
    },
  })
}

function buildCombinedChart() {
  if (combinedChart) combinedChart.destroy()
  if (!combinedCanvas.value) return
  const cc = chartColors()

  const organistSeries = pctOfPeak(estimates, 'organistsMid')
  const jazzSeries = pctOfPeak(jazzEstimates, 'pianistsMid')
  const allPianistsSeries = pctOfPeak(allPianistsEstimates, 'pianistsMid')

  combinedChart = new Chart(combinedCanvas.value, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'All US pianists (every idiom)',
          data: allPianistsSeries,
          borderColor: PIANO_COLOR,
          backgroundColor: PIANO_COLOR,
          borderWidth: 2,
          borderDash: [6, 4],
          pointRadius: 3,
          pointHoverRadius: 5,
          tension: 0.3,
          fill: false,
        },
        {
          label: 'Church organists',
          data: organistSeries,
          borderColor: ORGANIST_COLOR,
          backgroundColor: ORGANIST_COLOR,
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
          fill: false,
        },
        {
          label: 'Jazz pianists',
          data: jazzSeries,
          borderColor: JAZZ_COLOR,
          backgroundColor: JAZZ_COLOR,
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'nearest' },
      scales: {
        x: {
          type: 'linear',
          min: 1900,
          max: 2030,
          title: { display: true, text: 'Year', color: cc.text, font: { size: 12 } },
          ticks: {
            color: cc.text,
            callback: (v) => Number.isInteger(v) ? String(v) : '',
            stepSize: 20,
          },
          grid: { color: cc.grid },
        },
        y: {
          beginAtZero: true,
          max: 110,
          title: { display: true, text: '% of own peak', color: cc.text, font: { size: 12 } },
          ticks: { color: cc.text, callback: (v) => `${v}%` },
          grid: { color: cc.grid },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { color: cc.text },
        },
        tooltip: {
          callbacks: {
            title: (items) => `Year ${Math.round(items[0].parsed.x)}`,
            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(0)}% of peak`,
          },
        },
      },
    },
  })
}

function setView(v) {
  view.value = v
  nextTick(buildMainChart)
}

function setJazzView(v) {
  jazzView.value = v
  nextTick(buildJazzChart)
}

function rebuildAll() {
  buildMainChart()
  buildAgoChart()
  buildJazzChart()
  buildAfmChart()
  buildCombinedChart()
}

onMounted(() => {
  nextTick(rebuildAll)
})
</script>

<template>
  <GraphWrapper title="Did the church organist die? (And the jazz pianist?)" max-width="4xl" @theme-change="nextTick(rebuildAll)">
    <template #subtitle>
      A one-off, for my dad. He played organ for forty years; his father did the same. Most of the
      professions on <a href="/graphable/displaced-professions/" class="underline hover:text-[var(--text-primary)]">the displaced-professions graph</a>
      collapsed in dramatic fashion. The church organist did something quieter — and arguably stranger.
      After he read the first version, he asked about jazz pianists too. Different room, same century,
      similar fate. So the second half of this page is the parallel story — and at the bottom, both
      together, normalized so the shapes can be compared.
    </template>

    <!-- Short answer callout -->
    <div class="mt-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">The short answer</h3>
      <p class="mt-2 text-[var(--text-primary)]">
        Yes — but slowly, and the slowness is what hides it. By raw count, US church-organist
        positions have fallen roughly <strong>{{ peakRaw.declinePct }}%</strong> from their estimated peak around
        <strong>{{ peakRaw.peakYear }}</strong>. Per capita, the decline is closer to <strong>{{ peakPerCapita.declinePct }}%</strong> —
        because the US population more than doubled in the meantime, the same number of organists
        means a much smaller cultural footprint. There's no Census occupation code for "church
        organist," so the totals below are honest estimates, not counted figures.
      </p>
    </div>

    <!-- Main chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 class="text-lg font-semibold">The decline, 1900&ndash;2026</h3>
        <div class="flex gap-1 text-xs">
          <button
            @click="setView('perCapita')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              view === 'perCapita'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Per million Americans</button>
          <button
            @click="setView('raw')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              view === 'raw'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Raw count</button>
        </div>
      </div>
      <div style="height: 380px;">
        <canvas ref="mainCanvas"></canvas>
      </div>
      <p class="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
        The shaded band is the joint uncertainty range across our inputs (number of congregations,
        share using organ music, organists per congregation). The line is the midpoint estimate.
        Hover for the per-data-point note. The per-capita view shows the cultural footprint;
        the raw-count view shows the absolute trajectory.
      </p>
    </div>

    <!-- Findings -->
    <div class="mt-8 grid gap-3 md:grid-cols-2">
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Why it doesn't feel dramatic</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          47% of US churches still have organ music. Lutherans 88%; Northeast 58%. Unlike whalers
          or switchboard operators, organists never went to zero — they just got rarer per capita
          while the population doubled around them.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Why the next 20 years will look steeper</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          58% of current AGO members have served 31+ years and most are mid-50s to mid-70s.
          Master's-degree enrollment in organ performance fell ~14% in a single year (2012→2013)
          and kept falling. The aging cohort is a back-loaded death scheduled to arrive ~2040.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The mechanism</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Cultural shift, not technological displacement. Vatican II opened Catholic worship to
          contemporary forms. The 1970s Jesus Movement brought guitars into evangelical churches.
          Megachurches consolidate worship into bands. The customer base shrank too — US religious
          unaffiliation went from ~7% (1972) to ~30% (2024).
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Why it's not on the main graph</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          The displaced-professions project picked events with clean longitudinal data — Census
          occupation codes, BLS series, union rolls. Church organist has none of those. The honest
          version of this story is "estimated, with wide error bars" rather than "27 data points
          from BLS." It's a real decline, just one that doesn't sit naturally next to the others.
        </p>
      </div>
    </div>

    <!-- AGO hard data -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <h3 class="text-lg font-semibold">The hard data we do have: AGO membership</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        The American Guild of Organists has tracked membership since its 1896 founding. It's not
        a count of all church organists — it's a voluntary professional guild — but it's the only
        longitudinal series we have. AGO membership peaked around <strong>2007</strong>, decades
        after the profession itself peaked. The lag is partly because the guild grew through the
        late 20th century even as the underlying population of organists was already shrinking
        — better recruiting from a smaller pool.
      </p>
      <div class="mt-4" style="height: 240px;">
        <canvas ref="agoCanvas"></canvas>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)]">
        AGO membership has fallen ~<strong>46%</strong> since its 2007 peak. That's the steepest
        hard-data trajectory in the picture, and it's likely an undercount of the underlying
        decline because guild penetration tends to be higher among older members.
      </p>
    </div>

    <!-- Methodology -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-6">
      <h3 class="text-lg font-semibold">How honest is this?</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        This is the part most graphs skip. Here's what's measured directly versus triangulated.
      </p>
      <div class="mt-4 space-y-3">
        <div
          v-for="m in methodology"
          :key="m.signal"
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-3 border-b border-[var(--border-light)] last:border-0 last:pb-0"
        >
          <div class="flex-shrink-0 sm:w-44">
            <span
              :class="[
                'inline-block px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wide',
                m.status === 'hard'
                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : m.status === 'estimated'
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200'
                    : 'bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-200'
              ]"
            >{{ m.status }}</span>
            <div class="mt-1 text-sm font-semibold text-[var(--text-primary)]">{{ m.signal }}</div>
          </div>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ m.detail }}</p>
        </div>
      </div>
      <div class="mt-5 pt-4 border-t border-[var(--border-light)] text-sm text-[var(--text-muted)] leading-relaxed">
        <strong class="text-[var(--text-secondary)]">Where it could be wrong:</strong>
        Mostly in the volunteer/honorarium boundary. If you count any church member who
        regularly plays organ at services for free as an "organist," the peak number is much
        higher — maybe 250K+ in 1955. If you only count people whose primary income comes from
        organ work, the peak is much lower — maybe 30&ndash;50K. The midpoint above counts paid
        and honorarium positions but excludes pure volunteers, which tracks how the BLS-tracked
        professions on the main graph were defined.
      </div>
    </div>

    <!-- Sources -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Sources</h3>
      <ul class="mt-3 space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
        <li>
          <a href="https://en.wikipedia.org/wiki/American_Guild_of_Organists" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            American Guild of Organists (Wikipedia)
          </a> — founding, current membership, structure.
        </li>
        <li>
          <a href="https://news.gallup.com/poll/358364/religious-americans.aspx" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Gallup: Religious service attendance trend
          </a> — 49% peak in 1955 and 1958; ~32% recent.
        </li>
        <li>
          <a href="https://research.lifeway.com/2021/08/25/9-ways-the-modern-worship-service-is-changing/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Lifeway Research: How worship is changing
          </a> — 53% (1998) → 47% of US churches use organ music; denominational and regional breakdowns.
        </li>
        <li>
          <a href="https://westfield.org/programs/curious-facts/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Westfield Center: Curious facts about the organ
          </a> — Carnegie's 1873&ndash;1919 program donated 8,812 organs to churches, schools, and civic institutions.
        </li>
        <li>
          <a href="https://religionnews.com/2017/04/13/organists-declining-but-still-in-demand-for-easter/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Religion News Service: Organist decline
          </a> — AGO 18,367 (2007) → 14,880 (2017); 58% serving 31+ years; aging demographics.
        </li>
        <li>
          <a href="https://hirr.hartfordinternational.edu/fast-facts-on-american-religion/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Hartford Institute: Fast facts on American religion
          </a> — congregation counts, denominational data.
        </li>
        <li>
          <a href="https://www.census.gov/content/dam/Census/library/publications/1968/demo/tech-18.pdf" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            US Census 1950 occupation classifications
          </a> — 166,000 musicians + music teachers (no church-organist sub-code).
        </li>
        <li>
          <a href="https://www.bls.gov/oes/current/oes272042.htm" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            BLS OES: Musicians and singers
          </a> — current US workforce, organ subset not separable.
        </li>
      </ul>
    </div>

    <!-- ====================================================================
         PART 2: THE JAZZ PIANIST
         ==================================================================== -->
    <div class="mt-16 pt-10 border-t-2 border-[var(--border)]">
      <p class="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Part Two</p>
      <h2 class="mt-2 text-2xl font-bold text-[var(--text-primary)]">The rise and fall of the jazz pianist</h2>
      <p class="mt-3 text-[var(--text-secondary)] leading-relaxed">
        Different room, same century. The church organist drifted down a long slope; the jazz pianist
        rode a sharper arc — built up fast through the swing era, knocked flat by a single
        federal tax in the late 1940s, and never fully recovered. Same caveat as above: there's
        no Census occupation code for "jazz pianist" either, so these numbers are honest estimates,
        not counted figures.
      </p>
    </div>

    <!-- Jazz short answer -->
    <div class="mt-6 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">The short answer</h3>
      <p class="mt-2 text-[var(--text-primary)]">
        By raw count, US jazz-pianist positions have fallen roughly <strong>{{ jazzPeakRaw.declinePct }}%</strong>
        from their estimated peak around <strong>{{ jazzPeakRaw.peakYear }}</strong> — the swing-era
        plateau. Per capita, the decline is closer to <strong>{{ jazzPeakPerCapita.declinePct }}%</strong>.
        Unlike the organist, who eroded across decades of cultural shift, the jazz pianist had a single
        identifiable industry-killing event: the 1944 federal cabaret tax, which made dance venues
        uneconomical and never fully recovered.
      </p>
    </div>

    <!-- Jazz main chart -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 class="text-lg font-semibold">The trajectory, 1900&ndash;2026</h3>
        <div class="flex gap-1 text-xs">
          <button
            @click="setJazzView('perCapita')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              jazzView === 'perCapita'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Per million Americans</button>
          <button
            @click="setJazzView('raw')"
            :class="['px-3 py-1.5 rounded border cursor-pointer',
              jazzView === 'raw'
                ? 'border-[var(--text-primary)] bg-[var(--bg-surface-alt)] text-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]']"
          >Raw count</button>
        </div>
      </div>
      <div style="height: 380px;">
        <canvas ref="jazzCanvas"></canvas>
      </div>
      <p class="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
        The shaded band combines uncertainty across our inputs (working big bands, territory bands,
        hotel/lounge gigs, recording sessions, modern academic positions). The line is the midpoint.
        The 1945 peak is the swing-era high; the 1955 collapse follows the cabaret tax of 1944.
      </p>
    </div>

    <!-- Jazz findings -->
    <div class="mt-8 grid gap-3 md:grid-cols-2">
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">The cabaret tax killed the dance floor</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          A 1944 federal excise — initially 30%, later 20% — applied to any venue that served food
          or drink and allowed dancing. Within a decade most ballrooms either closed, dropped the
          dance floor, or shrank to listening-only formats. By 1956 the AFM was reporting that
          two-thirds of its members couldn't make a primary living from music. The tax was
          repealed in 1965, but the venues never came back.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Bebop is partly a tax-shelter genre</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Venues that played strictly instrumental music to which no one danced were exempt. So
          clubs swapped 17-piece big bands for trios and quintets playing complex, undanceable
          music. Bebop's musical revolution and its economic survival are the same story — and
          the trio became the residual form for the working jazz pianist.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Rock took the audience that survived</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Even before the tax was repealed, rock had captured the youth dance market and soul had
          captured the Black popular-music audience. The cocktail-lounge piano was the residual
          paid gig through the 1970s; fusion (Hancock, Corea) brought a brief crossover bump but
          didn't refill the working-musician pipeline.
        </p>
      </div>
      <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h4 class="text-sm font-semibold text-[var(--text-secondary)]">Today: academic, festival, hotel</h4>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          Jazz at Lincoln Center (founded 1991) and 250+ US universities with jazz programs anchor
          the modern profession. The active club scene in most cities is a fraction of what it was
          in 1950. Streaming gutted album revenue. The remaining working jazz pianists are
          professors, festival regulars, hotel/cruise lounge players, and a small touring circuit.
        </p>
      </div>
    </div>

    <!-- AFM hard data -->
    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <h3 class="text-lg font-semibold">The hard data we do have: AFM membership</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        The American Federation of Musicians is the union for all professional musicians in the
        US — not just jazz pianists, and never just jazz. But it's the only longitudinal hard-data
        series for the broader class. AFM membership grew from 135K (1940) to a peak of <strong>331K
        in 1976</strong>, decades after the jazz-pianist profession had already been hollowed out.
        That's the same pattern the AGO showed: guild membership lagged the underlying decline
        because guilds keep growing as long as there are practitioners willing to join, even from
        a shrinking pool. The AFM is now down to roughly <strong>67K</strong> — an
        ~80% drop from peak.
      </p>
      <div class="mt-4" style="height: 240px;">
        <canvas ref="afmCanvas"></canvas>
      </div>
      <p class="mt-3 text-xs text-[var(--text-muted)]">
        AFM membership covers all instrumentalists and singers, not just jazz pianists. It's
        included here as a class-level trajectory: the broader professional-musician collapse
        the jazz pianist rode through.
      </p>
    </div>

    <!-- Jazz methodology -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-6">
      <h3 class="text-lg font-semibold">How honest is the jazz-pianist count?</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        Same shape as the organist methodology: hard signals at the edges, triangulation in the middle.
      </p>
      <div class="mt-4 space-y-3">
        <div
          v-for="m in jazzMethodology"
          :key="m.signal"
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-3 border-b border-[var(--border-light)] last:border-0 last:pb-0"
        >
          <div class="flex-shrink-0 sm:w-44">
            <span
              :class="[
                'inline-block px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wide',
                m.status === 'hard'
                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : m.status === 'estimated'
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200'
                    : 'bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-200'
              ]"
            >{{ m.status }}</span>
            <div class="mt-1 text-sm font-semibold text-[var(--text-primary)]">{{ m.signal }}</div>
          </div>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ m.detail }}</p>
        </div>
      </div>
      <div class="mt-5 pt-4 border-t border-[var(--border-light)] text-sm text-[var(--text-muted)] leading-relaxed">
        <strong class="text-[var(--text-secondary)]">Where it could be wrong:</strong>
        Mostly in the genre boundary. If you count anyone who played jazz-inflected music in dance
        bands, the swing-era peak is much higher — territory bands, hotel orchestras, and radio
        ensembles employed thousands of pianists who could swing but didn't think of themselves
        primarily as jazz musicians. If you only count people whose primary income today comes
        from straight-ahead jazz piano, the modern figure is closer to 1K than 3K. The midpoint
        sits in the middle of those definitions.
      </div>
    </div>

    <!-- Jazz sources -->
    <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Jazz-pianist sources</h3>
      <ul class="mt-3 space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
        <li>
          <a href="https://en.wikipedia.org/wiki/American_Federation_of_Musicians" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            American Federation of Musicians (Wikipedia)
          </a> — membership history, peak, current.
        </li>
        <li>
          <a href="https://jacobin.com/2022/03/1940s-musicians-strike-american-federations-of-musicians-afm-labels-streaming" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Jacobin: When Musicians Went on Strike — and Won
          </a> — AFM 1940 = 135K, 1948 = 231K, 1989 = 177K, 1995 = 150K.
        </li>
        <li>
          <a href="https://www.aei.org/carpe-diem/how-cabaret-taxes-hobbled-swing-music-cleared-the-dancefloor-and-gave-birth-to-the-bebop-revolution/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            AEI: How Cabaret Taxes Hobbled Swing Music
          </a> — 1944 tax, 1956 AFM "two-thirds unemployed," 1965 repeal.
        </li>
        <li>
          <a href="https://www.npr.org/sections/ablogsupreme/2013/04/16/177486309/how-taxes-and-moving-changed-the-sound-of-jazz" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            NPR: How Taxes And Moving Changed The Sound Of Jazz
          </a> — small-instrumental exemption, bebop economics.
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Swing_era" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Swing era (Wikipedia)
          </a> — ~700 name big bands at peak, plus territory and hotel bands.
        </li>
        <li>
          <a href="https://www.local802afm.org/allegro/articles/music-history-musicians-vs-the-talkies/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Local 802 AFM: Musicians vs. the Talkies
          </a> — 1928–1930 displacement of theater musicians.
        </li>
        <li>
          <a href="https://americansymphony.org/concert-notes/between-theater-and-cinema-silent-film-accompaniment-in-the-1920s/" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            American Symphony: Silent Film Accompaniment in the 1920s
          </a> — 15–20K silent-film pianists worldwide at peak.
        </li>
        <li>
          <a href="https://www.arts.gov/sites/default/files/JazzExecSummary.pdf" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            NEA: Changing the Beat — Study of Jazz Artists (2001)
          </a> — survey of working jazz musicians in 4 US cities.
        </li>
        <li>
          <a href="http://www.bluebookofpianos.com/uspiano.htm" target="_blank" rel="noopener" class="underline hover:text-[var(--text-secondary)]">
            Bluebook of Pianos: US piano sales history
          </a> — 1909 peak ~365K; 1932 trough 27K; modern ~21K. Anchor for "all pianists" baseline.
        </li>
      </ul>
    </div>

    <!-- ====================================================================
         PART 3: BOTH TOGETHER, NORMALIZED
         ==================================================================== -->
    <div class="mt-16 pt-10 border-t-2 border-[var(--border)]">
      <p class="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Part Three</p>
      <h2 class="mt-2 text-2xl font-bold text-[var(--text-primary)]">Both, normalized — % of own peak</h2>
      <p class="mt-3 text-[var(--text-secondary)] leading-relaxed">
        Raw counts hide the comparison. The organist peaked around <strong>{{ peakRaw.peakMid }}K</strong>
        in {{ peakRaw.peakYear }}; the jazz pianist peaked around <strong>{{ jazzPeakRaw.peakMid }}K</strong>
        in {{ jazzPeakRaw.peakYear }} — about <strong>{{ Math.round(peakRaw.peakMid / jazzPeakRaw.peakMid) }}x</strong>
        more organists than jazz pianists at peak. Plotting both at raw scale, the jazz line would
        look like a flat line next to the organist mountain. So instead, here's each profession as
        a percentage of its own peak. Now the <em>shapes</em> can be compared.
      </p>
      <p class="mt-3 text-[var(--text-secondary)] leading-relaxed">
        The dashed line is the broader baseline: <em>all working pianists in the US, every idiom</em>
        (classical, jazz, church, lounge, theater, teaching, dance, recording). It's the loosest
        of the three estimates — wider uncertainty — but the comparison is the point: the organist
        and jazz pianist both fell off harder than the parent class.
      </p>
    </div>

    <div class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <div style="height: 420px;">
        <canvas ref="combinedCanvas"></canvas>
      </div>
      <p class="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
        Each line is its own profession's mid-estimate divided by its own peak. The peak is 100%
        and everything else is relative. Hover for the year and percentage. The all-pianists
        baseline is plotted with a dashed line because the underlying estimate is rougher than
        the other two.
      </p>
    </div>

    <!-- Closing observation -->
    <div class="mt-6 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
      <h3 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">What the comparison shows</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
        Three different shapes for three different stories. The
        <span class="inline-block w-3 h-3 rounded-sm align-middle" :style="{ background: '#7c4a3e' }"></span>
        <strong class="text-[var(--text-secondary)]">church organist</strong>
        is a long, slow erosion driven by changes in how Americans worship — Vatican II,
        the Jesus Movement, megachurches, and rising religious unaffiliation, all accumulating
        over fifty years. No single event; no single year you can point to and say "this is when
        it happened."
        The
        <span class="inline-block w-3 h-3 rounded-sm align-middle" :style="{ background: '#3d5a6c' }"></span>
        <strong class="text-[var(--text-secondary)]">jazz pianist</strong>
        is the opposite shape: a fast climb through swing, a sharp cliff in the late 1940s, and a
        long flat tail. You can name the cause and the year. The tax killed the dance floor; the
        dance floor was the business model. And the
        <span class="inline-block w-3 h-3 rounded-sm align-middle" :style="{ background: '#8a6d3b' }"></span>
        <strong class="text-[var(--text-secondary)]">all-pianists baseline</strong> declined too,
        but more gradually — the parent class hung on better than its specialist children. Pianos
        moved out of homes and theater pits, but pianists found other rooms. The two professions
        in this graph didn't.
      </p>
    </div>
  </GraphWrapper>
</template>
