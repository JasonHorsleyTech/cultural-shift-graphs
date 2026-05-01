<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Chart, LineController, BarController, LineElement, BarElement, PointElement,
  LinearScale, CategoryScale, LogarithmicScale, Filler, Tooltip, Legend
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'
import { historicalWithdrawals, subCategories, supplyRatio, sectorComparisons } from './data/water-usage.ts'

Chart.register(
  LineController, BarController, LineElement, BarElement, PointElement,
  LinearScale, CategoryScale, LogarithmicScale, Filler, Tooltip, Legend,
  annotationPlugin
)

const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)
const chart4Ref = ref(null)
const chart2Log = ref(false)
const chart4Log = ref(false)

let charts = []
let chart2Instance = null

const perCapita = (bgalDay, popM) => Math.round(bgalDay * 1000 / popM)

function destroyCharts() {
  charts.forEach(ch => ch.destroy())
  charts = []
}

function buildCharts() {
  destroyCharts()
  if (!chart1Ref.value) return
  const c = chartColors()
  const years = historicalWithdrawals.map(d => String(d.year))

  // --- Chart 1: Stacked area — per-capita withdrawal by sector ---
  charts.push(new Chart(chart1Ref.value, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Industrial & other',
          data: historicalWithdrawals.map(d => perCapita(d.other, d.population)),
          fill: true, backgroundColor: 'rgba(148,163,184,0.45)', borderColor: 'rgb(148,163,184)',
          borderWidth: 1, tension: 0.35, pointRadius: 0,
        },
        {
          label: 'Public supply',
          data: historicalWithdrawals.map(d => perCapita(d.publicSupply, d.population)),
          fill: true, backgroundColor: 'rgba(59,130,246,0.45)', borderColor: 'rgb(59,130,246)',
          borderWidth: 1, tension: 0.35, pointRadius: 0,
        },
        {
          label: 'Irrigation',
          data: historicalWithdrawals.map(d => perCapita(d.irrigation, d.population)),
          fill: true, backgroundColor: 'rgba(34,197,94,0.45)', borderColor: 'rgb(34,197,94)',
          borderWidth: 1, tension: 0.35, pointRadius: 0,
        },
        {
          label: 'Thermoelectric',
          data: historicalWithdrawals.map(d => perCapita(d.thermoelectric, d.population)),
          fill: true, backgroundColor: 'rgba(249,115,22,0.45)', borderColor: 'rgb(249,115,22)',
          borderWidth: 1, tension: 0.35, pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { grid: { color: c.grid }, ticks: { color: c.text } },
        y: {
          stacked: true, beginAtZero: true,
          grid: { color: c.grid }, ticks: { color: c.text },
          title: { display: true, text: 'Gallons per person per day', color: c.text },
        }
      },
      plugins: {
        legend: { labels: { color: c.text, usePointStyle: true, pointStyle: 'rectRounded' } },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} gal/day`,
            footer: items => {
              const total = items.reduce((s, i) => s + i.parsed.y, 0)
              return `Total: ${total.toLocaleString()} gal/day`
            }
          }
        },
        annotation: {
          annotations: {
            peak: {
              type: 'line', scaleID: 'x', value: '1980',
              borderColor: c.text, borderDash: [6, 3], borderWidth: 1,
              label: {
                content: 'Peak: 1,916 gal/day', display: true, position: 'start',
                color: c.text, backgroundColor: 'transparent', font: { size: 11 },
              }
            }
          }
        }
      }
    }
  }))

  // --- Chart 2: Horizontal bar — sub-categories per capita ---
  const sortedSubs = [...subCategories].sort((a, b) => b.perCapita - a.perCapita)
  const groupColor = {
    agriculture: 'rgba(34,197,94,0.7)',
    residential: 'rgba(59,130,246,0.7)',
    industrial: 'rgba(245,158,11,0.7)',
  }

  const valueLabels = {
    id: 'valueLabels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart
      const right = chart.chartArea.right
      ctx.save()
      ctx.fillStyle = c.text
      ctx.font = '10px system-ui, -apple-system, sans-serif'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'left'
      chart.getDatasetMeta(0).data.forEach((bar, i) => {
        const val = chart.data.datasets[0].data[i]
        const text = val >= 1000 ? val.toLocaleString() : String(val)
        const w = ctx.measureText(text).width
        if (bar.x + 6 + w <= right) {
          ctx.fillText(text, bar.x + 4, bar.y)
        }
      })
      ctx.restore()
    }
  }

  chart2Instance = new Chart(chart2Ref.value, {
    type: 'bar',
    data: {
      labels: sortedSubs.map(d => d.name),
      datasets: [{
        data: sortedSubs.map(d => d.perCapita),
        backgroundColor: sortedSubs.map(d =>
          d.name === 'Data centers' ? 'rgba(239,68,68,0.8)' : groupColor[d.group]
        ),
        borderWidth: 0, borderRadius: 2,
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      scales: {
        x: {
          type: chart2Log.value ? 'logarithmic' : 'linear',
          grid: { color: c.grid },
          ticks: {
            color: c.text,
            callback: chart2Log.value
              ? (v => [0.01, 0.1, 1, 10, 100].includes(v) ? v : '')
              : undefined,
          },
          title: {
            display: true,
            text: chart2Log.value ? 'Gallons per person per day (log scale)' : 'Gallons per person per day',
            color: c.text,
          },
        },
        y: { grid: { display: false }, ticks: { color: c.text, font: { size: 11 } } }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `${ctx.parsed.x} gal/person/day` } },
      }
    },
    plugins: [valueLabels],
  })
  charts.push(chart2Instance)

  // --- Chart 3: Line — withdrawal as % of renewable supply ---
  charts.push(new Chart(chart3Ref.value, {
    type: 'line',
    data: {
      labels: supplyRatio.map(d => String(d.year)),
      datasets: [{
        label: 'Withdrawal as % of supply',
        data: supplyRatio.map(d => d.pctOfRenewable),
        borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)',
        fill: true, tension: 0.35, pointRadius: 3,
        pointBackgroundColor: '#3b82f6',
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { grid: { color: c.grid }, ticks: { color: c.text } },
        y: {
          min: 0, max: 45,
          grid: { color: c.grid },
          ticks: { color: c.text, callback: v => `${v}%` },
          title: { display: true, text: '% of renewable freshwater supply', color: c.text },
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `${ctx.parsed.y}% of renewable supply` } },
        annotation: {
          annotations: {
            stress: {
              type: 'line', scaleID: 'y', value: 40,
              borderColor: 'rgba(239,68,68,0.5)', borderDash: [8, 4], borderWidth: 2,
              label: {
                content: 'High stress (40%)', display: true, position: 'end',
                color: 'rgba(239,68,68,0.7)', backgroundColor: 'transparent',
                font: { size: 11 },
              }
            }
          }
        }
      }
    }
  }))

  // --- Chart 4: Horizontal bar — sectors vs data centers ---
  charts.push(new Chart(chart4Ref.value, {
    type: 'bar',
    data: {
      labels: sectorComparisons.map(d => d.name),
      datasets: [{
        data: sectorComparisons.map(d => d.mgalDay),
        backgroundColor: sectorComparisons.map(d =>
          d.highlight ? 'rgba(239,68,68,0.8)' : 'rgba(59,130,246,0.6)'
        ),
        borderWidth: 0, borderRadius: 2,
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      scales: {
        x: {
          type: chart4Log.value ? 'logarithmic' : 'linear',
          grid: { color: c.grid },
          ticks: {
            color: c.text,
            callback: chart4Log.value
              ? (v => [10, 100, 1000, 10000, 100000].includes(v) ? v.toLocaleString() : '')
              : undefined,
          },
          title: {
            display: true,
            text: chart4Log.value ? 'Million gallons per day (log scale)' : 'Million gallons per day',
            color: c.text,
          },
        },
        y: { grid: { display: false }, ticks: { color: c.text, font: { size: 11 } } }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `${ctx.parsed.x.toLocaleString()} Mgal/day` } },
      }
    },
    plugins: [valueLabels],
  }))
}

function toggleChart2Scale() {
  chart2Log.value = !chart2Log.value
  buildCharts()
}

function toggleChart4Scale() {
  chart4Log.value = !chart4Log.value
  buildCharts()
}

function onThemeChange() {
  buildCharts()
}

onMounted(() => buildCharts())
onUnmounted(() => destroyCharts())
</script>

<template>
  <GraphWrapper title="Water Usage of Everything" @themeChange="onThemeChange">
    <template #subtitle>
      How much water does America actually use, where does it go, and is AI water usage the crisis people claim — or a rounding error?
    </template>

    <section class="mt-8">
      <h2 class="text-xl font-semibold mb-1">How much water does an American use?</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Per-capita daily water withdrawal by sector, 1950–2015. Peaked at 1,916 gallons per person per day
        in 1980 — now below 1950 levels despite population doubling.
      </p>
      <canvas ref="chart1Ref"></canvas>
    </section>

    <div class="mt-8 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
      <strong class="text-[var(--text-primary)]">Withdrawal ≠ consumption.</strong>
      Thermoelectric power plants withdraw 41% of all US water but consume only 3% — most goes right back
      in the river, warmer. Agriculture withdraws 37% but accounts for 84% of what's actually consumed.
      The gap is why per-capita withdrawal peaked and fell even as the economy grew.
    </div>

    <section class="mt-16">
      <h2 class="text-xl font-semibold mb-1">Where does your water actually go?</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Your daily share of America's water use. Lawn irrigation alone uses 190× more than your share of all US data centers.
        <span class="inline-block mt-1">
          <span class="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style="background: rgba(34,197,94,0.7)"></span><span class="align-middle mr-3">Agriculture</span>
          <span class="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style="background: rgba(59,130,246,0.7)"></span><span class="align-middle mr-3">Residential</span>
          <span class="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style="background: rgba(245,158,11,0.7)"></span><span class="align-middle mr-3">Industrial</span>
          <span class="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style="background: rgba(239,68,68,0.8)"></span><span class="align-middle">Data centers</span>
        </span>
      </p>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs text-[var(--text-secondary)]">Scale:</span>
        <button
          @click="toggleChart2Scale"
          class="px-2.5 py-1 text-xs rounded-md border transition-colors"
          :class="chart2Log
            ? 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
            : 'bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-surface)]'"
        >Linear</button>
        <button
          @click="toggleChart2Scale"
          class="px-2.5 py-1 text-xs rounded-md border transition-colors"
          :class="chart2Log
            ? 'bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-surface)]'
            : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'"
        >Log</button>
      </div>
      <div style="height: 420px">
        <canvas ref="chart2Ref"></canvas>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-xl font-semibold mb-1">Are we running out?</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Total US withdrawal as a percentage of renewable freshwater supply. Peaked at 19.8% in 1980,
        now back to 14.5% — well below the 40% stress threshold.
        Nationally, no. Regionally, ask the Colorado River.
      </p>
      <canvas ref="chart3Ref"></canvas>
    </section>

    <section class="mt-16">
      <h2 class="text-xl font-semibold mb-1">The new kid on the block</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        All US data center direct cooling: 48 Mgal/day — 0.015% of total water withdrawal.
        Golf courses use 31× more. Residential lawns use 188×.
      </p>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs text-[var(--text-secondary)]">Scale:</span>
        <button
          @click="toggleChart4Scale"
          class="px-2.5 py-1 text-xs rounded-md border transition-colors"
          :class="chart4Log
            ? 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
            : 'bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-surface)]'"
        >Linear</button>
        <button
          @click="toggleChart4Scale"
          class="px-2.5 py-1 text-xs rounded-md border transition-colors"
          :class="chart4Log
            ? 'bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-surface)]'
            : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'"
        >Log</button>
      </div>
      <div style="height: 360px">
        <canvas ref="chart4Ref"></canvas>
      </div>
    </section>

    <section class="mt-16 text-sm text-[var(--text-secondary)] space-y-3">
      <h2 class="text-lg font-semibold text-[var(--text-primary)]">What you're looking at</h2>
      <p>
        All data measures <strong>blue water</strong> — actual freshwater withdrawn from rivers, lakes, and aquifers.
        Not "water footprint" (which counts rain) and not "grey water" (a pollution metric). Blue water is the honest
        metric for competition over scarce freshwater.
      </p>
      <p>
        Primary source: USGS 5-year water-use compilations (Circulars 115–1441), 1950–2015.
        Sub-category data from EPA WaterSense, USDA, EIA, GCSAA, Water Research Foundation, and
        Lawrence Berkeley National Laboratory. Data center estimates from LBNL 2024 report.
        All figures are for the United States.
      </p>
    </section>
  </GraphWrapper>
</template>
