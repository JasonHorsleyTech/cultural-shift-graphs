<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Chart, LineController, LineElement, PointElement,
  LinearScale, CategoryScale, Filler, Tooltip, Legend
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'
import { data } from './data/share-of-the-pie.ts'

Chart.register(
  LineController, LineElement, PointElement,
  LinearScale, CategoryScale, Filler, Tooltip, Legend,
  annotationPlugin
)

const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)

let charts = []

function destroyCharts() {
  charts.forEach(ch => ch.destroy())
  charts = []
}

function recessionBands(rows) {
  const annotations = {}
  let idx = 0, inRec = false, start = null
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].isRecession && !inRec) {
      inRec = true
      start = String(rows[i].year)
    } else if (!rows[i].isRecession && inRec) {
      inRec = false
      annotations[`rec${idx++}`] = {
        type: 'box', xMin: start, xMax: String(rows[i - 1].year),
        backgroundColor: 'rgba(148,163,184,0.12)', borderWidth: 0,
      }
    }
  }
  if (inRec) {
    annotations[`rec${idx}`] = {
      type: 'box', xMin: start, xMax: String(rows[rows.length - 1].year),
      backgroundColor: 'rgba(148,163,184,0.12)', borderWidth: 0,
    }
  }
  return annotations
}

function buildCharts() {
  destroyCharts()
  if (!chart1Ref.value) return
  const c = chartColors()
  const years = data.map(d => String(d.year))
  const bands = recessionBands(data)

  // --- Chart 1: The headline — share of GDP per capita ---
  const medianShare = data.map(d =>
    +((d.medianHouseholdIncome / d.averageHouseholdSize / d.gdpPerCapita) * 100).toFixed(1)
  )
  const meanShare = data.map(d =>
    d.meanPersonalIncomePerCapita != null
      ? +(d.meanPersonalIncomePerCapita / d.gdpPerCapita * 100).toFixed(1)
      : null
  )
  const laborShare = data.map(d => d.blsLaborSharePercent)

  charts.push(new Chart(chart1Ref.value, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Your share (median per person)',
          data: medianShare,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59,130,246,0.06)',
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          borderWidth: 2.5,
        },
        {
          label: 'The average (mean per capita)',
          data: meanShare,
          borderColor: '#22c55e',
          borderWidth: 2,
          borderDash: [6, 3],
          tension: 0.3,
          pointRadius: 0,
          spanGaps: true,
        },
        {
          label: "Labor's total share",
          data: laborShare,
          borderColor: '#f59e0b',
          borderWidth: 2,
          borderDash: [2, 2],
          tension: 0.3,
          pointRadius: 0,
          spanGaps: true,
        },
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { grid: { color: c.grid }, ticks: { color: c.text, maxTicksLimit: 16 } },
        y: {
          min: 30, max: 90,
          grid: { color: c.grid },
          ticks: { color: c.text, callback: v => `${v}%` },
          title: { display: true, text: '% of GDP per capita', color: c.text },
        }
      },
      plugins: {
        legend: { labels: { color: c.text, usePointStyle: true } },
        tooltip: {
          callbacks: {
            label: ctx => ctx.parsed.y != null ? `${ctx.dataset.label}: ${ctx.parsed.y}%` : null,
          }
        },
        annotation: {
          annotations: {
            ...bands,
            breakLine: {
              type: 'line', scaleID: 'x', value: '1967',
              borderColor: c.text, borderDash: [4, 4], borderWidth: 1,
              label: {
                content: '← family income | household income →',
                display: true, position: 'start',
                color: c.text, backgroundColor: 'transparent', font: { size: 10 },
              }
            },
          }
        },
      }
    }
  }))

  // --- Chart 2: The distribution fan (P20, median, P80 as % of GDP per capita) ---
  const distRows = data.filter(d => d.p20HouseholdIncome != null)
  const distYears = distRows.map(d => String(d.year))
  const distBands = recessionBands(distRows)

  const p20Share = distRows.map(d =>
    +((d.p20HouseholdIncome / d.averageHouseholdSize / d.gdpPerCapita) * 100).toFixed(1)
  )
  const medianShareDist = distRows.map(d =>
    +((d.medianHouseholdIncome / d.averageHouseholdSize / d.gdpPerCapita) * 100).toFixed(1)
  )
  const p80Share = distRows.map(d =>
    +((d.p80HouseholdIncome / d.averageHouseholdSize / d.gdpPerCapita) * 100).toFixed(1)
  )

  charts.push(new Chart(chart2Ref.value, {
    type: 'line',
    data: {
      labels: distYears,
      datasets: [
        {
          label: '80th percentile',
          data: p80Share,
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245,158,11,0.06)',
          fill: '+1',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
        },
        {
          label: 'Median',
          data: medianShareDist,
          borderColor: '#3b82f6',
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 0,
        },
        {
          label: '20th percentile',
          data: p20Share,
          borderColor: '#94a3b8',
          backgroundColor: 'rgba(148,163,184,0.06)',
          fill: '-1',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { grid: { color: c.grid }, ticks: { color: c.text, maxTicksLimit: 12 } },
        y: {
          grid: { color: c.grid },
          ticks: { color: c.text, callback: v => `${v}%` },
          title: { display: true, text: '% of GDP per capita', color: c.text },
        }
      },
      plugins: {
        legend: { labels: { color: c.text, usePointStyle: true } },
        tooltip: {
          callbacks: {
            label: ctx => ctx.parsed.y != null ? `${ctx.dataset.label}: ${ctx.parsed.y}%` : null,
          }
        },
        annotation: { annotations: distBands },
      }
    }
  }))

  // --- Chart 3: Where did it go? ---
  charts.push(new Chart(chart3Ref.value, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: "Women's labor force participation",
          data: data.map(d => d.laborForceParticipationWomen),
          borderColor: '#a855f7',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
          spanGaps: true,
        },
        {
          label: 'Benefits share of compensation',
          data: data.map(d => d.benefitsShareOfCompensation),
          borderColor: '#ef4444',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
          spanGaps: true,
        },
        {
          label: 'Effective federal tax rate (middle)',
          data: data.map(d => d.effectiveFederalTaxRateMiddle),
          borderColor: '#64748b',
          borderWidth: 2,
          borderDash: [4, 3],
          tension: 0.3,
          pointRadius: 0,
          spanGaps: true,
        },
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { grid: { color: c.grid }, ticks: { color: c.text, maxTicksLimit: 16 } },
        y: {
          grid: { color: c.grid },
          ticks: { color: c.text, callback: v => `${v}%` },
          title: { display: true, text: '%', color: c.text },
        }
      },
      plugins: {
        legend: { labels: { color: c.text, usePointStyle: true } },
        tooltip: {
          callbacks: {
            label: ctx => ctx.parsed.y != null ? `${ctx.dataset.label}: ${ctx.parsed.y}%` : null,
          }
        },
        annotation: { annotations: bands },
      }
    }
  }))
}

function onThemeChange() {
  buildCharts()
}

onMounted(() => buildCharts())
onUnmounted(() => destroyCharts())
</script>

<template>
  <GraphWrapper title="What Share of the Pie Do I Get?" @themeChange="onThemeChange">
    <template #subtitle>
      How much of America's economic output does the median person actually capture — and where did the rest go?
    </template>

    <section class="mt-8">
      <h2 class="text-xl font-semibold mb-1">The shrinking share</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Median household income per person as a percentage of GDP per capita, 1947–2024.
        The typical person's share fell from ~49% to ~39%. Gray bands are recessions.
      </p>
      <canvas ref="chart1Ref"></canvas>
    </section>

    <div class="mt-8 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
      <strong class="text-[var(--text-primary)]">Three lines, three stories.</strong>
      The blue line is what the typical person gets. The green dashed line is the average — it barely moved because
      top earners pulled it up. The amber dotted line is labor's total share of output, falling from 65% to 55%.
      The gap between green and blue is inequality. The gap between amber and green is capital's growing claim.
    </div>

    <section class="mt-16">
      <h2 class="text-xl font-semibold mb-1">The fan opens</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Household income at different percentiles, per person, as a share of GDP per capita (1967–2024).
        The 80th percentile held steady while the 20th percentile shrank.
        The middle class didn't just fall behind the rich — it fell behind the economy.
      </p>
      <canvas ref="chart2Ref"></canvas>
    </section>

    <section class="mt-16">
      <h2 class="text-xl font-semibold mb-1">Where did it go?</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-4">
        Three forces reshaping your paycheck. Benefits (mostly health insurance) now eat 18% of total
        compensation — up from 7% in 1947. Women's labor force participation nearly doubled, meaning
        households work more total hours for a similar per-person share. Federal tax rates came down,
        partially offsetting the squeeze.
      </p>
      <canvas ref="chart3Ref"></canvas>
    </section>

    <div class="mt-8 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
      <strong class="text-[var(--text-primary)]">The dual-earner mask.</strong>
      Median <em>household</em> income looks like it kept up with GDP partly because households added a second worker.
      Per-person, the picture is worse. A two-earner household in 2024 bringing in $84k captures about the same
      share as a single-earner household in 1960 — except now both adults work.
    </div>

    <section class="mt-16 text-sm text-[var(--text-secondary)] space-y-3">
      <h2 class="text-lg font-semibold text-[var(--text-primary)]">What you're looking at</h2>
      <p>
        "Your share" divides median household income by household size, then by GDP per capita. It answers:
        if you split the economy evenly among all people, what fraction does the typical person actually get?
        49% in 1947 meant the median person captured about half of the per-capita average. 39% in 2024 means
        less than two-fifths.
      </p>
      <p>
        Pre-1967 uses Census <em>family</em> income (the household survey didn't exist). The switch to
        household income in 1967 caused a ~10% downward break — non-family households (often single people)
        lowered the median. The dashed vertical line marks this break.
      </p>
      <p>
        All dollar values are nominal. Since both numerator and denominator inflate together, the ratios cancel
        out inflation automatically. No CPI adjustment needed or applied.
      </p>
      <p>
        Sources: BEA NIPA (GDP, personal income, compensation), Census CPS (household income, earnings,
        demographics), BLS Productivity & Costs (labor share), CBO (tax rates), NBER (recession dates).
      </p>
    </section>
  </GraphWrapper>
</template>
