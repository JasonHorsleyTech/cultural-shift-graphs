<script setup>
import { onMounted } from 'vue'
import { Line as RoughLine } from 'rough-viz'
import { usPopulation } from './data/us-population.ts'

// Sort by year just in case the data file isn't strictly chronological.
const sorted = [...usPopulation].sort((a, b) => a.year - b.year)
const years = sorted.map((e) => e.year)
const populationMillions = sorted.map((e) => +(e.population / 1_000_000).toFixed(1))

const latestYear = years[years.length - 1]
const latestMillions = populationMillions[populationMillions.length - 1]
const firstYear = years[0]
const firstMillions = populationMillions[0]
const multiplier = +(latestMillions / firstMillions).toFixed(2)

onMounted(() => {
  new RoughLine({
    element: '#chart',
    data: {
      'US population (millions)': populationMillions,
    },
    x: years,
    title: 'US population, 1900–2020',
    xLabel: 'Census year',
    yLabel: 'Population (millions)',
    roughness: 2.2,
    colors: ['black'],
    stroke: 'black',
    strokeWidth: 2,
    circle: true,
    circleRadius: 10,
    legend: false,
    margin: { top: 60, right: 30, bottom: 70, left: 80 },
  })
})
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12 font-sans text-neutral-900">
    <a href="/" class="text-sm text-neutral-500 hover:text-neutral-900">&larr; back</a>
    <h1 class="mt-4 text-3xl font-bold">US population, 1900–2020</h1>
    <p class="mt-3 text-neutral-700 leading-relaxed max-w-2xl">
      Hypothesis: the US population went up. (Yes, really.) This is a smoke-test
      graph where the answer is already known — the point is to exercise the
      research-data → chart → deploy pipeline on a non-trivial dataset. One
      data point per decennial US Census, 1900 through 2020.
    </p>
    <p class="mt-3 text-neutral-700">
      Between <strong>{{ firstYear }}</strong> ({{ firstMillions }}M) and
      <strong>{{ latestYear }}</strong> ({{ latestMillions }}M) the US population
      grew by a factor of <strong>{{ multiplier }}x</strong>.
    </p>

    <div class="mt-8 border border-neutral-200 rounded p-4 bg-white">
      <div id="chart" class="w-[720px] h-[420px]"></div>
    </div>
  </main>
</template>
