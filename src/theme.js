/** Shared dark/light theme utility. Used by all graph pages. */

export function initTheme() {
  const stored = localStorage.getItem('graphable-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const dark = stored ? stored === 'dark' : prefersDark
  apply(dark)
  return dark
}

function apply(dark) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('graphable-theme', dark ? 'dark' : 'light')
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark')
  apply(!isDark)
  return !isDark
}

/** Read current CSS variable values for Chart.js configs */
export function chartColors() {
  const s = getComputedStyle(document.documentElement)
  return {
    grid: s.getPropertyValue('--chart-grid').trim(),
    text: s.getPropertyValue('--chart-text').trim(),
    surface: s.getPropertyValue('--bg-surface').trim(),
    point: s.getPropertyValue('--chart-point').trim(),
    pointBorder: s.getPropertyValue('--chart-point-border').trim(),
  }
}
