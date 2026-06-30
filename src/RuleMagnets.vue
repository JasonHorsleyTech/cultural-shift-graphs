<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GraphWrapper from './GraphWrapper.vue'

// ---------------------------------------------------------------------------
// "Every Rule Is a Magnet" — a sketch.
//
// A cannon (the LLM) fires balls (task attempts) at a target band (the mark).
// Each ball self-corrects a little, so most land on target. A few drift and
// miss. The knee-jerk fix is to bolt on an absolute rule — a magnet — that
// yanks everything one way. It rescues the few and ruins the many. So you add
// a second, opposing magnet. Now the two fight and tear the whole spread
// apart. The fix isn't another magnet: it's aiming the cannon — telling it
// where it's going.
//
// The accuracy number is measured from the real simulation, not scripted.
// More magnets genuinely produce a worse number. That honesty is the point.
// ---------------------------------------------------------------------------

const W = 900
const H = 480
const TARGET_X = 858
const TARGET_Y = 240
const BAND_HALF = 70 // a ball "hits" if it crosses the target within ±this
const CANNON = { x: 64, y: 240 }

const LOOP = 16 // seconds per full cycle

// Phase boundaries (cumulative seconds within the loop).
// kp = how much each ball still trusts its own guidance toward the mark; kd =
// damping. Bolt on a rule and the ball "obeys the rule" instead — kp collapses
// and the magnet takes over.
//
// Two force models, because the two situations behave differently:
//   shift — one magnet: a constant pull toward it. The whole stream slides off
//           center by fconst/kp and parks there. Stable; rescues the low
//           misses but overshoots the bulk the other way.
//   split — two opposing magnets: a force that pushes AWAY from center and
//           grows with distance (krep), capped. Center becomes an unstable
//           equilibrium — any wobble is amplified and the spread tears apart.
const PHASES = [
  { until: 3.5, id: 'baseline', rules: 0, magnets: [], kp: 5.5, kd: 3.4, model: 'none' },
  { until: 7.0, id: 'one', rules: 1, magnets: ['top'], kp: 1.5, kd: 2.6, model: 'shift', fconst: 95 },
  { until: 10.5, id: 'two', rules: 2, magnets: ['top', 'bottom'], kp: 0.5, kd: 2.2, model: 'split', krep: 1.15, cap: 360 },
  { until: 12.5, id: 'climax', rules: 2, magnets: ['top', 'bottom'], kp: 0.4, kd: 1.8, model: 'split', krep: 1.7, cap: 520 },
  { until: 16.0, id: 'fix', rules: 0, magnets: [], kp: 6.5, kd: 3.4, model: 'none' },
]

const CAPTIONS = {
  baseline: 'An LLM running 100 slightly different tasks. Most hit the mark; a few drift and miss.',
  one: 'A few missed low — so you bolt on a rule: “ALWAYS steer up.” It yanks everything.',
  two: 'Now they miss high. Add the opposite rule: “NEVER drift down.” Two backseat drivers, screaming at once.',
  climax: 'You’re not aiming anymore. Every rule is a magnet — and the magnets are tearing the spread apart.',
  fix: 'Ditch the magnets. Just tell it where it’s going. The drift was never the problem — the rules were.',
}

const MAGNETS = {
  top: { x: 648, y: 44, label: 'ALWAYS steer up' },
  bottom: { x: 648, y: 436, label: 'NEVER drift down' },
}

// Reactive bits shown in the HTML overlay (throttled, not per-frame).
const accuracy = ref(95)
const caption = ref(CAPTIONS.baseline)
const ruleCount = ref(0)
const phaseId = ref('baseline')

const canvasRef = ref(null)
let ctx = null
let raf = 0
let cssW = W
let dpr = 1

// Theme colors, re-read on mount + theme toggle.
let theme = { bg: '#ffffff', text: '#111827', muted: '#6b7280', border: '#e5e7eb' }
function readTheme() {
  const s = getComputedStyle(document.documentElement)
  const v = (name, fallback) => {
    const got = s.getPropertyValue(name).trim()
    return got || fallback
  }
  theme = {
    bg: v('--bg-surface', '#ffffff'),
    text: v('--text-primary', '#111827'),
    muted: v('--text-muted', '#6b7280'),
    border: v('--border', '#e5e7eb'),
  }
}

// Fixed accents that read in both light and dark.
const BLUE = '#3b82f6'
const GREEN = '#22c55e'
const RED = '#ef4444'
const AMBER = '#f59e0b'

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const w = canvas.clientWidth || W
  dpr = window.devicePixelRatio || 1
  const hPx = (w * H) / W
  cssW = w
  canvas.style.height = hPx + 'px'
  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(hPx * dpr)
}

function phaseFor(t) {
  for (const p of PHASES) if (t < p.until) return p
  return PHASES[PHASES.length - 1]
}

// --- simulation state ---
let balls = []
let recent = [] // rolling window of hit/miss booleans
let elapsed = 0
let spawnAcc = 0
let lastTs = 0
let uiAcc = 0

let seed = 1
function rand() {
  // Cheap deterministic-ish PRNG so the look is stable without Math.random.
  seed = (seed * 1103515245 + 12345) & 0x7fffffff
  return seed / 0x7fffffff
}
function gauss(std) {
  // Box–Muller.
  const u = Math.max(1e-6, rand())
  const v = rand()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * std
}

function spawn(phase) {
  const aimed = phase.id === 'fix'
  // ~6% of tasks are genuinely hard: a persistent downward drift the ball's
  // own guidance can't fully overcome, so they miss low. That's the failure
  // the "ALWAYS steer up" rule is meant to rescue. Aiming the cannon (the fix)
  // conveys the goal and dissolves the drift — so aimed shots carry none.
  const hard = !aimed && rand() < 0.06
  balls.push({
    x: CANNON.x + 6,
    y: CANNON.y + gauss(aimed ? 6 : 28),
    vx: 360 + gauss(12),
    vy: gauss(aimed ? 14 : 95),
    bias: hard ? 220 + rand() * 200 : 0, // positive = downward = miss low
    born: elapsed,
  })
}

function step(dt, phase) {
  const kp = phase.kp // how much the ball still trusts its own guidance
  const kd = phase.kd // damping

  for (const b of balls) {
    // Ball's own guidance: a proportional-derivative nudge back to the mark,
    // fighting any persistent drift baked into a hard task.
    let ay = kp * (TARGET_Y - b.y) - kd * b.vy + b.bias
    // The rule(s) only bite in the late stretch of flight.
    if (b.x > 250) {
      if (phase.model === 'shift') {
        ay -= phase.fconst // constant pull toward the single (top) magnet
      } else if (phase.model === 'split') {
        const off = b.y - TARGET_Y // push away from center, capped → diverges
        ay += Math.max(-phase.cap, Math.min(phase.cap, phase.krep * off))
      }
    }
    b.vy += ay * dt
    b.x += b.vx * dt
    b.y += b.vy * dt
  }

  // Retire balls that finished or flew off-screen.
  const keep = []
  for (const b of balls) {
    if (b.x >= TARGET_X) {
      recent.push(Math.abs(b.y - TARGET_Y) <= BAND_HALF)
    } else if (b.y < -60 || b.y > H + 60) {
      recent.push(false)
    } else {
      keep.push(b)
      continue
    }
  }
  balls = keep
  if (recent.length > 40) recent = recent.slice(recent.length - 40)
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath()
  c.moveTo(x + r, y)
  c.arcTo(x + w, y, x + w, y + h, r)
  c.arcTo(x + w, y + h, x, y + h, r)
  c.arcTo(x, y + h, x, y, r)
  c.arcTo(x, y, x + w, y, r)
  c.closePath()
}

function drawMagnet(c, m, pulse) {
  const s = 1 + pulse * 0.12
  c.save()
  c.translate(m.x, m.y)
  c.scale(s, s)
  // Horseshoe-ish magnet body.
  c.fillStyle = RED
  roundRect(c, -26, -20, 52, 40, 9)
  c.fill()
  c.fillStyle = theme.bg
  c.fillRect(-12, -20, 24, 22)
  c.fillStyle = RED
  c.fillRect(-26, -2, 14, 22)
  c.fillRect(12, -2, 14, 22)
  // Pole tips.
  c.fillStyle = '#9ca3af'
  c.fillRect(-26, 18, 14, 6)
  c.fillStyle = AMBER
  c.fillRect(12, 18, 14, 6)
  c.restore()

  // Field glow.
  c.save()
  c.globalAlpha = 0.10 + pulse * 0.10
  c.fillStyle = RED
  c.beginPath()
  c.arc(m.x, m.y, 150, 0, Math.PI * 2)
  c.fill()
  c.restore()

  // Sticky-note rule label.
  c.save()
  c.font = '600 13px ui-sans-serif, system-ui, sans-serif'
  const tw = c.measureText(m.label).width
  const above = m.y < H / 2
  const ly = above ? m.y + 30 : m.y - 30 - 22
  roundRect(c, m.x - tw / 2 - 9, ly, tw + 18, 22, 5)
  c.fillStyle = RED
  c.fill()
  c.fillStyle = '#ffffff'
  c.textAlign = 'center'
  c.textBaseline = 'middle'
  c.fillText(m.label, m.x, ly + 11)
  c.restore()
}

function draw(phase) {
  const c = ctx
  c.setTransform(dpr * cssW * (1 / W), 0, 0, dpr * cssW * (1 / W), 0, 0)
  c.clearRect(0, 0, W, H)

  // Backdrop.
  c.fillStyle = theme.bg
  c.fillRect(0, 0, W, H)

  const aimed = phase.id === 'fix'

  // Target band.
  c.save()
  c.globalAlpha = aimed ? 0.22 : 0.14
  c.fillStyle = GREEN
  c.fillRect(TARGET_X - 8, TARGET_Y - BAND_HALF, W - (TARGET_X - 8), BAND_HALF * 2)
  c.restore()
  c.strokeStyle = GREEN
  c.setLineDash([6, 6])
  c.lineWidth = 1.5
  c.beginPath()
  c.moveTo(TARGET_X - 8, TARGET_Y)
  c.lineTo(W, TARGET_Y)
  c.stroke()
  c.setLineDash([])
  c.fillStyle = theme.muted
  c.font = '600 12px ui-sans-serif, system-ui, sans-serif'
  c.textAlign = 'right'
  c.textBaseline = 'bottom'
  c.fillText('the mark', W - 6, TARGET_Y - BAND_HALF - 5)

  // "Aim the cannon" goal line during the fix.
  if (aimed) {
    c.save()
    c.globalAlpha = 0.5
    c.strokeStyle = AMBER
    c.setLineDash([4, 7])
    c.lineWidth = 2
    c.beginPath()
    c.moveTo(CANNON.x + 18, CANNON.y)
    c.lineTo(TARGET_X, TARGET_Y)
    c.stroke()
    c.restore()
    c.setLineDash([])
  }

  // Magnets.
  const pulse = phase.id === 'climax' ? 0.5 + 0.5 * Math.sin(elapsed * 14) : 0
  for (const k of phase.magnets) drawMagnet(c, MAGNETS[k], k === 'top' || k === 'bottom' ? pulse : 0)

  // Balls (with a short motion trail).
  for (const b of balls) {
    const miss = Math.abs(b.y - TARGET_Y) > BAND_HALF && b.x > 360
    c.fillStyle = miss ? RED : BLUE
    c.save()
    c.globalAlpha = 0.18
    c.beginPath()
    c.arc(b.x - b.vx * 0.012, b.y - b.vy * 0.012, 5, 0, Math.PI * 2)
    c.fill()
    c.restore()
    c.beginPath()
    c.arc(b.x, b.y, 5.5, 0, Math.PI * 2)
    c.fill()
  }

  // Cannon.
  c.save()
  c.translate(CANNON.x, CANNON.y)
  if (aimed) {
    c.globalAlpha = 0.6
    c.fillStyle = AMBER
    c.beginPath()
    c.arc(0, 0, 34, 0, Math.PI * 2)
    c.fill()
    c.globalAlpha = 1
  }
  c.fillStyle = aimed ? AMBER : theme.text
  roundRect(c, -22, -16, 40, 32, 6)
  c.fill()
  c.fillRect(8, -9, 22, 18)
  c.restore()
}

let lastUi = 0
function frame(ts) {
  if (!lastTs) lastTs = ts
  let dt = (ts - lastTs) / 1000
  lastTs = ts
  if (dt > 0.05) dt = 0.05 // clamp after tab-switch stalls

  elapsed = (elapsed + dt) % LOOP
  const phase = phaseFor(elapsed)

  // Fire steadily.
  spawnAcc += dt
  const interval = 0.15
  let guard = 0
  while (spawnAcc > interval && guard < 8) {
    spawnAcc -= interval
    spawn(phase)
    guard++
  }

  step(dt, phase)
  draw(phase)

  // Throttle the reactive overlay updates (~8/s).
  uiAcc += dt
  if (ts - lastUi > 120) {
    lastUi = ts
    const hits = recent.filter(Boolean).length
    accuracy.value = recent.length ? Math.round((hits / recent.length) * 100) : 95
    caption.value = CAPTIONS[phase.id]
    ruleCount.value = phase.rules
    phaseId.value = phase.id
  }

  raf = requestAnimationFrame(frame)
}

function onThemeChange() {
  readTheme()
}

let ro = null
onMounted(() => {
  readTheme()
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  resize()
  ro = new ResizeObserver(() => resize())
  ro.observe(canvas)
  raf = requestAnimationFrame(frame)
})
onUnmounted(() => {
  cancelAnimationFrame(raf)
  if (ro) ro.disconnect()
})
</script>

<template>
  <GraphWrapper title="Every Rule Is a Magnet" max-width="4xl" @theme-change="onThemeChange">
    <template #subtitle>
      You need an LLM to do a task 100 ways. Most attempts hit the mark; a handful drift and miss. The
      tempting fix is to bolt an absolute rule onto the prompt — <em>always do X</em>, <em>never do Y</em> — to
      drag the strays back in line. But an absolute rule is a magnet: it rescues the few by yanking the many.
      So you add an opposing rule, and now the two magnets fight and tear the whole pattern apart. It’s the
      backseat driver who screams “LEFT — NO, RIGHT” until the car is in a ditch. The fix was never another
      magnet. It’s aiming the cannon: tell it where it’s going and trust it to steer.
    </template>

    <div class="relative rounded-lg border border-[var(--border)] overflow-hidden bg-[var(--bg-surface)]">
      <canvas ref="canvasRef" class="block w-full"></canvas>

      <!-- Overlay HUD -->
      <div class="absolute top-3 left-0 right-0 px-4 flex items-start justify-between gap-4 pointer-events-none">
        <div>
          <div class="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Accuracy</div>
          <div
            class="text-4xl font-bold tabular-nums leading-none"
            :style="{ color: accuracy >= 90 ? '#22c55e' : accuracy >= 75 ? '#f59e0b' : '#ef4444' }"
          >
            {{ accuracy }}<span class="text-2xl">%</span>
          </div>
        </div>
        <div class="text-right">
          <div class="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Rules added</div>
          <div class="text-4xl font-bold tabular-nums leading-none"
            :style="{ color: ruleCount === 0 ? 'var(--text-muted)' : '#ef4444' }">
            {{ ruleCount }}
          </div>
        </div>
      </div>

      <!-- Caption -->
      <div class="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[var(--bg-surface)] to-transparent">
        <p class="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto text-center min-h-[2.5rem]">
          {{ caption }}
        </p>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
      <div class="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="font-semibold mb-1">The drift is fine</div>
        <p class="text-[var(--text-secondary)] text-xs leading-relaxed">
          A 95% baseline isn’t a bug to be hammered flat. The strays are slightly off, not catastrophic.
        </p>
      </div>
      <div class="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="font-semibold mb-1">Every absolute is a magnet</div>
        <p class="text-[var(--text-secondary)] text-xs leading-relaxed">
          <em>Always</em> / <em>never</em> can’t see context. They fix the visible minority by distorting the
          invisible majority — then you add an exception, and an exception to the exception.
        </p>
      </div>
      <div class="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
        <div class="font-semibold mb-1">Aim, don’t yank</div>
        <p class="text-[var(--text-secondary)] text-xs leading-relaxed">
          Convey the goal instead of dictating the move. Understanding drops the real error rate to zero;
          magnets just widen the spread.
        </p>
      </div>
    </div>
  </GraphWrapper>
</template>
