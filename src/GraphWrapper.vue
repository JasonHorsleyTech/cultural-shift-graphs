<script setup>
import { ref, computed, provide } from 'vue'
import { initTheme, toggleTheme } from './theme.js'

const props = defineProps({
  title: { type: String, required: true },
  maxWidth: { type: String, default: '5xl' },
})

const emit = defineEmits(['themeChange'])

// Initialize eagerly so children get correct isDark during their onMounted
const isDark = ref(initTheme())

function onToggleTheme() {
  isDark.value = toggleTheme()
  emit('themeChange', isDark.value)
}

const widthClass = computed(() => {
  const map = { '3xl': 'max-w-3xl', '4xl': 'max-w-4xl', '5xl': 'max-w-5xl', '6xl': 'max-w-6xl', '7xl': 'max-w-7xl' }
  return map[props.maxWidth] || 'max-w-5xl'
})

provide('isDark', isDark)
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-150">
    <div :class="['mx-auto px-4 py-8 sm:px-6 lg:px-8', widthClass]">
      <div class="flex justify-between items-start">
        <a href="/graphable/" class="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]">&larr; graphable</a>
        <button
          @click="onToggleTheme"
          class="text-sm cursor-pointer px-2 py-1 rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </div>

      <h1 class="mt-4 text-3xl font-bold">{{ title }}</h1>
      <p v-if="$slots.subtitle" class="mt-3 mb-8 text-[var(--text-secondary)] leading-relaxed">
        <slot name="subtitle" />
      </p>

      <slot />

      <footer class="mt-12 text-center text-xs text-[var(--text-muted)]">
        <a href="/graphable/" class="underline hover:text-[var(--text-secondary)]">graphable</a>
      </footer>
    </div>
  </div>
</template>
