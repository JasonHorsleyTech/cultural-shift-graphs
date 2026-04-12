<script setup>
import { conflictData } from './data/disney-conflict-types.ts'

const scored = conflictData.length
const total = 240
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12 font-sans text-neutral-900">
    <a href="/" class="text-sm text-neutral-500 hover:text-neutral-900">&larr; back</a>
    <h1 class="mt-4 text-3xl font-bold">Animated conflict types over time</h1>
    <p class="mt-3 text-neutral-700 leading-relaxed max-w-2xl">
      Hypothesis: over the last ~100 years, animated children's films have
      shifted from <em>real villains in real conflicts</em> to
      <em>misunderstandings resolved through empathy and self-understanding</em>.
    </p>

    <div class="mt-8 border border-neutral-200 rounded p-6 bg-white text-center text-neutral-500">
      No data yet — research in progress. {{ scored }} of {{ total }} films scored.
    </div>
  </main>
</template>
