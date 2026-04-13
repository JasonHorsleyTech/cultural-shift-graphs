<script setup>
import { onMounted } from 'vue'
import { Bar as RoughBar } from 'rough-viz'
import { conflictData } from './data/disney-conflict-types.ts'

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
    return {
      decade: d,
      avg: +(b.sum / b.count).toFixed(2),
      count: b.count,
    }
  })
}

const filmCount = conflictData.length
const decadeData = aggregateByDecade(conflictData)

const chartData = {
  labels: decadeData.map((d) => d.decade),
  values: decadeData.map((d) => d.avg),
}

onMounted(() => {
  new RoughBar({
    element: '#chart',
    data: chartData,
    title: 'Average conflict score by decade',
    xLabel: 'Decade',
    yLabel: 'Conflict score (0 = empathy, 1 = villain)',
    roughness: 2.2,
    fillStyle: 'hachure',
    color: '#1e293b',
    stroke: '#1e293b',
    fillWeight: 1.5,
    margin: { top: 50, right: 20, bottom: 70, left: 60 },
  })
})
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12 font-sans text-neutral-900">
    <a href="/" class="text-sm text-neutral-500 hover:text-neutral-900">&larr; back</a>
    <h1 class="mt-4 text-3xl font-bold">Animated conflict types over time</h1>
    <p class="mt-3 text-neutral-700 leading-relaxed max-w-2xl">
      Hypothesis: over the last ~100 years, animated children's films have
      shifted from <em>real villains in real conflicts</em> to
      <em>misunderstandings resolved through empathy and self-understanding</em>.
      Data from <strong>{{ filmCount }}</strong> films scored on a 0–1 conflict
      spectrum (1 = classic villain defeated through confrontation, 0 = no
      villain, resolved through empathy or growth).
    </p>

    <div class="mt-8 border border-neutral-200 rounded p-4 bg-white">
      <div id="chart" class="w-[720px] h-[420px]"></div>
    </div>

    <div class="mt-6 overflow-x-auto">
      <table class="text-sm text-neutral-700 border-collapse">
        <thead>
          <tr class="border-b border-neutral-300">
            <th class="pr-4 py-1 text-left font-semibold">Decade</th>
            <th class="px-4 py-1 text-right font-semibold">Films</th>
            <th class="px-4 py-1 text-right font-semibold">Avg score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in decadeData" :key="d.decade" class="border-b border-neutral-100">
            <td class="pr-4 py-1">{{ d.decade }}</td>
            <td class="px-4 py-1 text-right tabular-nums">{{ d.count }}</td>
            <td class="px-4 py-1 text-right tabular-nums">{{ d.avg.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
