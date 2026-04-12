<script setup>
import { onMounted } from 'vue'
import { Bar as RoughBar } from 'rough-viz'
import { disneyVillains } from './data/disney-villains.ts'

// Aggregate the per-movie entries into per-decade averages for the chart.
// Keeping the aggregation here (rather than in the data file) so the data
// file stays a flat, append-only list that PRD tickets can easily extend.
function averageByDecade(entries) {
  const buckets = new Map()
  for (const entry of entries) {
    const bucket = buckets.get(entry.decade) ?? { sum: 0, count: 0 }
    bucket.sum += entry.realVillainScore
    bucket.count += 1
    buckets.set(entry.decade, bucket)
  }

  const decades = [...buckets.keys()].sort()
  return {
    labels: decades,
    values: decades.map((d) => {
      const b = buckets.get(d)
      return +(b.sum / b.count).toFixed(1)
    }),
  }
}

const movieCount = disneyVillains.length
const data = averageByDecade(disneyVillains)

onMounted(() => {
  new RoughBar({
    element: '#chart',
    data,
    title: 'Disney villain "realness" score by decade (fake data)',
    xLabel: 'Decade',
    yLabel: 'Real-villain score (0-100)',
    roughness: 2.2,
    fillStyle: 'hachure',
    color: 'black',
    stroke: 'black',
    margin: { top: 50, right: 20, bottom: 70, left: 60 },
  })
})
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12 font-sans text-neutral-900">
    <a href="/" class="text-sm text-neutral-500 hover:text-neutral-900">&larr; back</a>
    <h1 class="mt-4 text-3xl font-bold">Disney villains over time</h1>
    <p class="mt-3 text-neutral-700 leading-relaxed max-w-2xl">
      Hypothesis: over the last ~100 years, children's movies have shifted from
      <em>real villains in real conflicts</em> to
      <em>imagined villains resolved via misunderstanding</em>.
      Below is placeholder / gag data aggregated from
      <strong>{{ movieCount }}</strong> movies just to prove the chart pipeline
      works.
    </p>

    <div class="mt-8 border border-neutral-200 rounded p-4 bg-white">
      <div id="chart" class="w-[720px] h-[420px]"></div>
    </div>
  </main>
</template>
