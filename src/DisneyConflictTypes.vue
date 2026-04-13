<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { conflictData } from './data/disney-conflict-types.ts'

Chart.register(...registerables, annotationPlugin)

// --- Data prep ---
const filmCount = conflictData.length
const sorted = [...conflictData].sort((a, b) => a.releaseYear - b.releaseYear)

// LOESS (locally weighted scatterplot smoothing)
function loess(xs, ys, bandwidth = 0.15) {
  const n = xs.length
  const result = []
  // Generate smooth points across the full range
  const xMin = Math.min(...xs)
  const xMax = Math.max(...xs)
  const steps = 200
  for (let s = 0; s <= steps; s++) {
    const x0 = xMin + (xMax - xMin) * (s / steps)
    const dists = xs.map((x) => Math.abs(x - x0))
    const sortedDists = [...dists].sort((a, b) => a - b)
    const h = sortedDists[Math.min(Math.floor(n * bandwidth), n - 1)] || 1

    let sumW = 0, sumWX = 0, sumWY = 0, sumWX2 = 0, sumWXY = 0
    for (let i = 0; i < n; i++) {
      const u = dists[i] / (h * 1.0001)
      if (u >= 1) continue
      const w = (1 - u * u * u) ** 3 // tricube kernel
      sumW += w
      sumWX += w * xs[i]
      sumWY += w * ys[i]
      sumWX2 += w * xs[i] * xs[i]
      sumWXY += w * xs[i] * ys[i]
    }
    if (sumW === 0) continue
    const denom = sumW * sumWX2 - sumWX * sumWX
    let yHat
    if (Math.abs(denom) < 1e-10) {
      yHat = sumWY / sumW
    } else {
      const beta1 = (sumW * sumWXY - sumWX * sumWY) / denom
      const beta0 = (sumWY - beta1 * sumWX) / sumW
      yHat = beta0 + beta1 * x0
    }
    result.push({ x: x0, y: Math.max(0, Math.min(1, yHat)) })
  }
  return result
}

const scatterXs = sorted.map((d) => d.releaseYear)
const scatterYs = sorted.map((d) => d.conflictScore)
const loessCurve = loess(scatterXs, scatterYs, 0.2)

// Decade aggregation (for bar chart)
function aggregateByDecade(entries) {
  const buckets = new Map()
  for (const entry of entries) {
    const bucket = buckets.get(entry.decade) ?? { sum: 0, count: 0 }
    bucket.sum += entry.conflictScore
    bucket.count += 1
    buckets.set(entry.decade, bucket)
  }
  const decades = [...buckets.keys()].sort()
  return decades.map((d) => {
    const b = buckets.get(d)
    return { decade: d, avg: +(b.sum / b.count).toFixed(4), count: b.count }
  })
}

const decadeData = aggregateByDecade(conflictData)

// --- Score color helper ---
function scoreColor(score) {
  // 1.0 = red (villain), 0.0 = teal (empathy)
  if (score >= 0.75) return 'bg-red-100 text-red-800 border-red-200'
  if (score >= 0.5) return 'bg-amber-100 text-amber-800 border-amber-200'
  if (score >= 0.25) return 'bg-sky-100 text-sky-800 border-sky-200'
  return 'bg-teal-100 text-teal-800 border-teal-200'
}

function scoreBadgeColor(score) {
  if (score >= 0.75) return 'bg-red-500'
  if (score >= 0.5) return 'bg-amber-500'
  if (score >= 0.25) return 'bg-sky-500'
  return 'bg-teal-500'
}

function scoreLabel(score) {
  if (score >= 0.75) return 'Classic villain'
  if (score >= 0.5) return 'Mixed'
  if (score >= 0.25) return 'Mostly empathy'
  return 'Pure empathy'
}

// --- Summary stats ---
const earlyDecades = conflictData.filter((d) => d.releaseYear < 2000)
const lateDecades = conflictData.filter((d) => d.releaseYear >= 2000)
const earlyAvg = +(earlyDecades.reduce((s, d) => s + d.conflictScore, 0) / earlyDecades.length).toFixed(2)
const lateAvg = +(lateDecades.reduce((s, d) => s + d.conflictScore, 0) / lateDecades.length).toFixed(2)
const meaningfulDecades = decadeData.filter((d) => d.count >= 3)
const peakDecade = meaningfulDecades.reduce((a, b) => (a.avg > b.avg ? a : b))
const lowestDecade = meaningfulDecades.reduce((a, b) => (a.avg < b.avg ? a : b))

// --- Filters for summary cards ---
const selectedDecade = ref('all')
const decades = computed(() => {
  const ds = [...new Set(conflictData.map((d) => d.decade))].sort()
  return ['all', ...ds]
})
const filteredFilms = computed(() => {
  const base = selectedDecade.value === 'all' ? sorted : sorted.filter((d) => d.decade === selectedDecade.value)
  return base
})

// --- Charts ---
const scatterCanvas = ref(null)
const barCanvas = ref(null)

onMounted(async () => {
  await nextTick()

  // Scatter + LOESS
  new Chart(scatterCanvas.value, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Individual films',
          data: sorted.map((d) => ({ x: d.releaseYear, y: d.conflictScore, title: d.title })),
          backgroundColor: 'rgba(30, 41, 59, 0.35)',
          borderColor: 'rgba(30, 41, 59, 0.6)',
          borderWidth: 1,
          pointRadius: 4,
          pointHoverRadius: 7,
        },
        {
          label: 'LOESS trend',
          data: loessCurve,
          type: 'line',
          borderColor: '#dc2626',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label(ctx) {
              if (ctx.datasetIndex === 0) {
                const d = ctx.raw
                return `${d.title}: ${(d.y * 100).toFixed(0)}%`
              }
              return `Trend: ${(ctx.raw.y * 100).toFixed(0)}%`
            },
          },
        },
        legend: { position: 'top' },
        annotation: {
          annotations: {
            midline: {
              type: 'line',
              yMin: 0.5,
              yMax: 0.5,
              borderColor: 'rgba(0,0,0,0.15)',
              borderWidth: 1,
              borderDash: [6, 4],
              label: {
                display: true,
                content: '50% — mixed',
                position: 'start',
                backgroundColor: 'rgba(0,0,0,0.05)',
                color: '#666',
                font: { size: 11 },
              },
            },
          },
        },
      },
      scales: {
        x: {
          title: { display: true, text: 'Release year' },
          min: 1925,
          max: 2027,
          ticks: {
            stepSize: 10,
            callback: (v) => String(v),
          },
        },
        y: {
          title: { display: true, text: 'Conflict score' },
          min: 0,
          max: 1,
          ticks: {
            callback: (v) => `${(v * 100).toFixed(0)}%`,
            stepSize: 0.25,
          },
        },
      },
    },
  })

  // Bar chart with percentages
  new Chart(barCanvas.value, {
    type: 'bar',
    data: {
      labels: decadeData.map((d) => d.decade),
      datasets: [
        {
          label: 'Avg conflict score',
          data: decadeData.map((d) => d.avg),
          backgroundColor: decadeData.map((d) =>
            d.avg >= 0.75
              ? 'rgba(220, 38, 38, 0.6)'
              : d.avg >= 0.5
                ? 'rgba(245, 158, 11, 0.6)'
                : d.avg >= 0.25
                  ? 'rgba(14, 165, 233, 0.6)'
                  : 'rgba(20, 184, 166, 0.6)'
          ),
          borderColor: decadeData.map((d) =>
            d.avg >= 0.75
              ? '#dc2626'
              : d.avg >= 0.5
                ? '#f59e0b'
                : d.avg >= 0.25
                  ? '#0ea5e9'
                  : '#14b8a6'
          ),
          borderWidth: 2,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label(ctx) {
              const d = decadeData[ctx.dataIndex]
              return `Avg: ${(d.avg * 100).toFixed(0)}% (n=${d.count} films)`
            },
          },
        },
        legend: { display: false },
      },
      scales: {
        x: { title: { display: true, text: 'Decade' } },
        y: {
          title: { display: true, text: 'Avg conflict score' },
          min: 0,
          max: 1,
          ticks: {
            callback: (v) => `${(v * 100).toFixed(0)}%`,
            stepSize: 0.25,
          },
        },
      },
      // Show percentage labels on bars
      animation: {
        onComplete({ chart }) {
          const ctx2 = chart.ctx
          ctx2.save()
          ctx2.font = 'bold 12px sans-serif'
          ctx2.textAlign = 'center'
          ctx2.textBaseline = 'bottom'
          chart.data.datasets[0].data.forEach((val, i) => {
            const meta = chart.getDatasetMeta(0).data[i]
            const d = decadeData[i]
            ctx2.fillStyle = '#1e293b'
            ctx2.fillText(`${(val * 100).toFixed(0)}%`, meta.x, meta.y - 4)
            ctx2.font = '10px sans-serif'
            ctx2.fillStyle = '#64748b'
            ctx2.fillText(`n=${d.count}`, meta.x, meta.y - 18)
            ctx2.font = 'bold 12px sans-serif'
          })
          ctx2.restore()
        },
      },
    },
  })
})
</script>

<template>
  <main class="max-w-5xl mx-auto px-6 py-12 font-sans text-neutral-900">
    <a href="/" class="text-sm text-neutral-500 hover:text-neutral-900">&larr; back</a>
    <h1 class="mt-4 text-3xl font-bold">Animated conflict types over time</h1>
    <p class="mt-3 text-neutral-700 leading-relaxed max-w-3xl">
      Hypothesis: over the last ~100 years, animated children's films have
      shifted from <em>real villains in real conflicts</em> to
      <em>misunderstandings resolved through empathy and self-understanding</em>.
      Data from <strong>{{ filmCount }}</strong> films scored on a 0–1 conflict
      spectrum (1 = classic villain defeated through confrontation, 0 = no
      villain, resolved through empathy or growth).
    </p>

    <!-- Findings summary -->
    <div class="mt-8 rounded-lg border border-neutral-300 bg-neutral-50 p-6 max-w-3xl">
      <h2 class="text-lg font-semibold">What the data shows</h2>
      <p class="mt-2 text-neutral-700 leading-relaxed">
        <strong>The hypothesis holds.</strong> Across {{ filmCount }} animated films from 1928 to 2025,
        there is a clear downward shift in villain-driven conflict. Films released before 2000
        average <strong>{{ (earlyAvg * 100).toFixed(0) }}%</strong> on the conflict scale
        (n={{ earlyDecades.length }}), while films from 2000 onward average
        <strong>{{ (lateAvg * 100).toFixed(0) }}%</strong> (n={{ lateDecades.length }}).
      </p>
      <p class="mt-2 text-neutral-700 leading-relaxed">
        The peak villain era was the <strong>{{ peakDecade.decade }}</strong>
        ({{ (peakDecade.avg * 100).toFixed(0) }}% avg, {{ peakDecade.count }} films),
        while the lowest decade is the <strong>{{ lowestDecade.decade }}</strong>
        ({{ (lowestDecade.avg * 100).toFixed(0) }}% avg, {{ lowestDecade.count }} films).
        The LOESS trend line shows the inflection point around 1995–2005, after which
        the industry shifted decisively toward empathy-driven, internal-conflict storytelling.
      </p>
    </div>

    <!-- Scatter + LOESS -->
    <section class="mt-10">
      <h2 class="text-xl font-semibold">Every film, with trend line</h2>
      <p class="mt-1 text-sm text-neutral-500">
        Each dot is a film. The red line is a LOESS smoothed trend. Hover for details.
      </p>
      <div class="mt-4 border border-neutral-200 rounded-lg p-4 bg-white">
        <div class="h-[460px]">
          <canvas ref="scatterCanvas"></canvas>
        </div>
      </div>
    </section>

    <!-- Bar chart by decade -->
    <section class="mt-12">
      <h2 class="text-xl font-semibold">Average by decade</h2>
      <p class="mt-1 text-sm text-neutral-500">
        Decade averages with film counts. Colors shift from
        <span class="text-red-600 font-medium">red</span> (villain-heavy) to
        <span class="text-teal-600 font-medium">teal</span> (empathy-focused).
      </p>
      <div class="mt-4 border border-neutral-200 rounded-lg p-4 bg-white">
        <div class="h-[400px]">
          <canvas ref="barCanvas"></canvas>
        </div>
      </div>
    </section>

    <!-- Decade summary table -->
    <section class="mt-12">
      <h2 class="text-xl font-semibold">Decade breakdown</h2>
      <div class="mt-4 overflow-x-auto">
        <table class="w-full text-sm text-neutral-700 border-collapse">
          <thead>
            <tr class="border-b border-neutral-300">
              <th class="pr-4 py-2 text-left font-semibold">Decade</th>
              <th class="px-4 py-2 text-right font-semibold">Films</th>
              <th class="px-4 py-2 text-right font-semibold">Avg score</th>
              <th class="px-4 py-2 text-right font-semibold">Avg %</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in decadeData" :key="d.decade" class="border-b border-neutral-100">
              <td class="pr-4 py-2">{{ d.decade }}</td>
              <td class="px-4 py-2 text-right tabular-nums">{{ d.count }}</td>
              <td class="px-4 py-2 text-right tabular-nums">{{ d.avg.toFixed(2) }}</td>
              <td class="px-4 py-2 text-right tabular-nums">{{ (d.avg * 100).toFixed(0) }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Film summary cards -->
    <section class="mt-12">
      <h2 class="text-xl font-semibold">All {{ filmCount }} films</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        <button
          v-for="dec in decades"
          :key="dec"
          @click="selectedDecade = dec"
          :class="[
            'px-3 py-1 rounded-full text-sm border transition-colors',
            selectedDecade === dec
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500',
          ]"
        >
          {{ dec === 'all' ? `All (${filmCount})` : dec }}
        </button>
      </div>

      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="film in filteredFilms"
          :key="film.title"
          :class="[
            'rounded-lg border p-4',
            scoreColor(film.conflictScore),
          ]"
        >
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="font-semibold leading-tight">{{ film.title }}</h3>
              <p class="text-xs mt-0.5 opacity-75">{{ film.releaseYear }} · {{ film.studio }}</p>
            </div>
            <div class="flex flex-col items-end shrink-0">
              <span
                :class="['inline-block text-white text-xs font-bold px-2 py-0.5 rounded', scoreBadgeColor(film.conflictScore)]"
              >
                {{ (film.conflictScore * 100).toFixed(0) }}%
              </span>
              <span class="text-[10px] mt-0.5 opacity-60">{{ scoreLabel(film.conflictScore) }}</span>
            </div>
          </div>
          <p class="mt-2 text-xs leading-relaxed opacity-80">{{ film.reasoning }}</p>
        </div>
      </div>
    </section>

    <!-- Extra space so small filtered sets can be scrolled to the top -->
    <div class="h-[80vh]"></div>
  </main>
</template>
