<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  Chart, ScatterController, BarController, BarElement,
  PointElement, LineElement, LinearScale, CategoryScale, Tooltip,
} from 'chart.js'
import GraphWrapper from './GraphWrapper.vue'
import { chartColors } from './theme.js'

Chart.register(
  ScatterController, BarController, BarElement,
  PointElement, LineElement, LinearScale, CategoryScale, Tooltip,
)

// ─────────────────────────────────────────────────────────────────────────────
// The data. These are JUDGMENT CALLS, not measurements — see the methodology
// note. Two axes, each 0–10:
//   competence = can he actually DO hard things? (skill the world can't fake)
//   status     = rank / wealth / title / adoration the world grants him
// The whole graph is about the GEOMETRY: who sits above the line they earned.
// ─────────────────────────────────────────────────────────────────────────────
const PEOPLE = [
  // ── On or below the earned line: status (if any) is downstream of skill ──
  { name: 'Aragorn', source: 'The Lord of the Rings', competence: 9.5, status: 8.5,
    statusSource: 'Rightful heir to the throne of Gondor.',
    competenceNote: 'Master swordsman, ranger, battlefield healer, speaks Elvish and the tongues of men. Led the West to victory.',
    hook: 'King — but the crown is downstream of the competence. He was the best man in the field before anyone put it on his head.' },
  { name: 'Geralt of Rivia', source: 'The Witcher', competence: 9, status: 2.5,
    statusSource: 'A mutant outcast. Feared, spat on, barred from inns.',
    competenceNote: 'The single most lethal and knowledgeable monster-hunter alive. Swordmaster, alchemist, tracker.',
    hook: 'Hated by everyone and unambiguously the most competent man in any room. Status zero, skill maxed.' },
  { name: 'Wolverine', source: 'X-Men', competence: 8.5, status: 2.5,
    statusSource: 'A loner drifter with no rank, no money, no name people respect.',
    competenceNote: 'Century of combat experience, master of every blade and tactic, unkillable.',
    hook: 'No title, no fortune, no fixed address — and you do not want to fight him.' },
  { name: 'Westley', source: 'The Princess Bride', competence: 8.5, status: 3,
    statusSource: 'A penniless farm boy. (The "Dread Pirate" rank is borrowed.)',
    competenceNote: 'Out-fences the greatest swordsman, out-muscles the giant, out-thinks the genius, survives the Fire Swamp.',
    hook: 'Farm boy with nothing who beats everyone at the thing they are best at. Status optional.' },
  { name: 'Han Solo', source: 'Star Wars', competence: 8, status: 3.5,
    statusSource: 'A broke smuggler, wanted by gangsters, owes Jabba.',
    competenceNote: 'Best pilot in the galaxy, ace mechanic, talks and shoots his way out of anything.',
    hook: 'Indebted outlaw — and the best stick-and-rudder man alive. He earns every bit of the swagger.' },
  { name: 'Capt. Wentworth', source: 'Austen · Persuasion', author: 'austen', competence: 8, status: 6.5,
    statusSource: 'A fortune and a naval captaincy — both EARNED at sea, not inherited.',
    competenceNote: 'Rose through the Royal Navy on merit and prize money. Self-made in the most literal Regency sense.',
    hook: 'The Austen man who proves the point in reverse: he made his name and money by being good at a hard job. Respect.' },
  { name: 'Jamie Fraser', source: 'Outlander', competence: 8.5, status: 6,
    statusSource: 'A Highland laird, later titled.',
    competenceNote: 'Elite warrior, printer, farmer, fluent in several languages, field-surgeon-adjacent.',
    hook: 'Yes a laird — but also the best fighter, a tradesman, and a polyglot. The title sits on a real foundation.' },
  { name: 'Legolas', source: 'The Lord of the Rings', competence: 8.5, status: 7,
    statusSource: 'Prince of the Woodland Realm.',
    competenceNote: 'Peerless archer, superhuman agility and senses, centuries of fighting.',
    hook: 'A prince, sure — but nobody is questioning whether he earned the bow.' },
  { name: 'James Bond', source: '007', competence: 8.5, status: 7.5,
    statusSource: 'Glamour, tailoring, the prestige of the Double-O.',
    competenceNote: 'Elite operative: marksman, pilot, driver, polyglot, hand-to-hand.',
    hook: 'The tuxedo is the status; the kill count, the languages, and the driving are the competence underneath it.' },
  { name: 'Tony Stark', source: 'Iron Man', competence: 9.5, status: 9,
    statusSource: 'Billionaire celebrity playboy, household name.',
    competenceNote: 'Genuine genius engineer — built the suit himself, in a cave, with a box of scraps.',
    hook: 'High status AND high competence. He inherited a company but built the thing that makes him Iron Man with his own hands.' },
  { name: 'Batman', source: 'DC', competence: 9, status: 9,
    statusSource: 'Inherited the Wayne billions.',
    competenceNote: 'Peak human, world\'s greatest detective, master engineer and martial artist — all self-trained.',
    hook: 'The money bought the gear, not the skill. The Bat is self-made on top of the fortune.' },
  { name: 'Gilbert Blythe', source: 'Anne of Green Gables', competence: 7, status: 4,
    statusSource: 'An ordinary farm-town boy. No fortune, no name.',
    competenceNote: 'Tops the class, works relentlessly, becomes a doctor by sheer effort.',
    hook: 'No shortcut, no title — just outworks everyone and earns the white coat.' },
  { name: 'Noah Calhoun', source: 'The Notebook', competence: 6.5, status: 3,
    statusSource: 'Poor, working-class, lumber yard.',
    competenceNote: 'Builds and restores an entire house with his own two hands.',
    hook: 'Dirt poor — builds her dream house plank by plank. The competence is the romance.' },
  { name: 'Aladdin', source: 'Aladdin', competence: 6.5, status: 2.5,
    statusSource: 'A street rat. (The "Prince Ali" status is a literal fraud.)',
    competenceNote: 'Quick, resourceful, agile, reads people, survives the streets.',
    hook: 'The entire film is this graph\'s thesis: faked status (Prince Ali) is hollow; the street rat\'s real competence is what wins.' },
  { name: 'Rhett Butler', source: 'Gone with the Wind', competence: 7, status: 7,
    statusSource: 'Wealthy, but a social outsider.',
    competenceNote: 'Shrewd blockade runner and operator who built his own fortune and reads everyone.',
    hook: 'Rich, but he ran the blockade himself. The money is a scoreboard, not a gift.' },

  // ── Near the line: defensible, but the status runs a little ahead ──
  { name: 'Mr. Knightley', source: 'Austen · Emma', author: 'austen', competence: 6, status: 7,
    statusSource: 'Landed gentleman of Donwell Abbey.',
    competenceNote: 'Genuinely wise, a careful steward, the soundest judgment in the book.',
    hook: 'Austen\'s least hollow gentleman. The status comes with actual good judgment — he is allowed near the line.' },
  { name: 'Col. Brandon', source: 'Austen · Sense & Sensibility', author: 'austen', competence: 6, status: 6.5,
    statusSource: 'Owns Delaford; a respectable estate.',
    competenceNote: 'Former soldier, steady, dutiful, quietly capable and honourable.',
    hook: 'Military past and real steadiness under the money. One of the more earned Austen men.' },
  { name: 'Thor', source: 'Marvel', competence: 7, status: 9,
    statusSource: 'A literal god and prince of Asgard — most of it handed to him.',
    competenceNote: 'A formidable warrior, to be fair — but the godhood does a lot of the lifting.',
    hook: 'Born a god-prince. Swings the hammer himself, but a chunk of that status was never in question.' },
  { name: 'Heathcliff', source: 'Wuthering Heights', competence: 4, status: 5.5,
    statusSource: 'Claws his way to wealth from nothing.',
    competenceNote: 'Competent only at acquisition and revenge — skill aimed entirely at spite.',
    hook: 'Gets rich for the sole purpose of making everyone miserable. Effort, yes; competence worth admiring, no.' },

  // ── Above the line: status floating free of any hard skill ──
  { name: 'Edward Ferrars', source: 'Austen · Sense & Sensibility', author: 'austen', competence: 4, status: 5.5,
    statusSource: 'Heir to a fortune (until disinherited), then a modest clergyman.',
    competenceNote: 'Decent and sincere — but "competent at" almost nothing in particular.',
    hook: 'Pleasant, well-born, and notably good at no hard thing. The status is family, not skill.' },
  { name: 'Mr. Wickham', source: 'Austen · Pride & Prejudice', author: 'austen', competence: 3, status: 5,
    statusSource: 'A militia uniform and a charming manner — borrowed shine.',
    competenceNote: 'Skilled only at flattery, debt, and seduction. A scoundrel in a red coat.',
    hook: 'All surface status, zero substance — and Austen at least knows he\'s the villain.' },
  { name: 'Mr. Bingley', source: 'Austen · Pride & Prejudice', author: 'austen', competence: 3, status: 7.5,
    statusSource: 'Newly rich, amiable, sought after at every ball.',
    competenceNote: 'Pleasant and easily led. Name one difficult thing he can do.',
    hook: 'Rich, agreeable, and utterly steerable. The status is the bank balance and the smile.' },
  { name: 'Mr. Rochester', source: 'Jane Eyre', competence: 4, status: 7,
    statusSource: 'Wealthy master of Thornfield Hall.',
    competenceNote: 'Manages an inherited estate. Headline skill: hiding a wife in the attic.',
    hook: 'Wealth and brooding. The big secret turns out to be a secret, not a skill.' },
  { name: 'Romeo', source: 'Romeo & Juliet', competence: 2.5, status: 6.5,
    statusSource: 'Noble blood, House of Montague.',
    competenceNote: 'An impulsive teenager who mistakes intensity for ability.',
    hook: 'Noble name, catastrophic judgment. Dead in three days over a crush.' },
  { name: 'Mr. Big', source: 'Sex and the City', competence: 2.5, status: 8,
    statusSource: 'Rich finance guy, Manhattan power, permanent mystique.',
    competenceNote: 'Does... finance? The mystique is mostly that nobody can tell what he does.',
    hook: 'Money and mystery. The mystery is the job description.' },
  { name: 'Edward Cullen', source: 'Twilight', competence: 4, status: 7.5,
    statusSource: 'Beautiful, rich, mysterious — everyone wants him.',
    competenceNote: 'A century alive; plays a little piano. Signature move: watching you sleep.',
    hook: 'A hundred years to learn anything, and the standout skill is lurking in bedrooms.' },
  { name: 'Mr. Darcy', source: 'Austen · Pride & Prejudice', author: 'austen', competence: 4, status: 9,
    statusSource: '£10,000 a year and Pemberley. The whole package is the package.',
    competenceNote: 'Manages an inherited estate competently and fixes problems with his checkbook. Name a hard thing he can actually DO.',
    hook: 'The patron saint of status without substance. A 25-year-old running an amorphous fortune — the "competence" is just being rich and eventually polite.' },
  { name: 'Christian Grey', source: 'Fifty Shades', competence: 3, status: 9,
    statusSource: 'A 27-year-old billionaire CEO.',
    competenceNote: 'Billionaire by 27 doing... what, exactly? The conglomerate is a vibe.',
    hook: 'The modern Darcy. Vast status, undefinable competence.' },
  { name: 'Prince Charming', source: 'fairy tales', competence: 1, status: 9,
    statusSource: 'Literally born royal.',
    competenceNote: 'Peaked at owning a shoe.',
    hook: 'Patient zero of unearned status. The archetype every hollow heartthrob is a remake of.' },
]

// Colour by where a character sits relative to the earned line (status − competence).
const ZONES = {
  earned: '#3b82f6', // blue — competence carries the status
  mixed: '#f59e0b',  // amber — status running a little ahead
  hollow: '#ef4444', // red — status with nothing under it
}
function zoneOf(p) {
  const gap = p.status - p.competence
  if (gap > 2.5) return 'hollow'
  if (gap < 0.5) return 'earned'
  return 'mixed'
}

const spotlightAusten = ref(false)
const austenCount = PEOPLE.filter(p => p.author === 'austen').length

// ─── helpers ───
function overlap(a, b) {
  return !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y)
}

// ─── Scatter: the matrix ───
const gridRef = ref(null)
let gridChart = null

// Background plugin: fill the two triangles, draw the earned line + zone labels.
function zonesPlugin() {
  return {
    id: 'zones',
    beforeDatasetsDraw(ch) {
      const { ctx, scales: { x: xs, y: ys } } = ch
      const c = chartColors()
      const x0 = xs.getPixelForValue(0), x10 = xs.getPixelForValue(10)
      const y0 = ys.getPixelForValue(0), y10 = ys.getPixelForValue(10)

      ctx.save()
      // upper-left triangle = above the line = unearned status
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x10, y10); ctx.lineTo(x0, y10); ctx.closePath()
      ctx.fillStyle = 'rgba(239,68,68,0.06)'; ctx.fill()
      // lower-right triangle = below the line = competence, uncrowned
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x10, y10); ctx.lineTo(x10, y0); ctx.closePath()
      ctx.fillStyle = 'rgba(59,130,246,0.06)'; ctx.fill()

      // corner labels
      ctx.font = 'bold 12px ui-sans-serif, system-ui, sans-serif'
      ctx.fillStyle = ZONES.hollow + 'cc'
      ctx.textAlign = 'left'; ctx.textBaseline = 'top'
      ctx.fillText('STATUS WITHOUT SUBSTANCE', x0 + 12, y10 + 10)
      ctx.fillText('↑ the Darcy zone', x0 + 12, y10 + 28)
      ctx.fillStyle = ZONES.earned + 'cc'
      ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'
      ctx.fillText('COMPETENCE, UNCROWNED', x10 - 12, y0 - 26)
      ctx.fillText('skill the world hasn\'t rewarded ↓', x10 - 12, y0 - 10)

      // the earned line + rotated label
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x10, y10)
      ctx.strokeStyle = c.text + '55'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]); ctx.stroke()
      ctx.setLineDash([])
      const mx = (x0 + x10) / 2, my = (y0 + y10) / 2
      ctx.translate(mx, my); ctx.rotate(Math.atan2(y10 - y0, x10 - x0))
      ctx.fillStyle = c.text + 'aa'; ctx.font = 'italic 12px ui-sans-serif, system-ui, sans-serif'
      ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
      ctx.fillText('the earned line — status = competence', 0, -6)
      ctx.restore()
    },
  }
}

// Label plugin: name beside every dot, greedy de-clutter.
function labelsPlugin() {
  return {
    id: 'labels',
    afterDatasetsDraw(ch) {
      const { ctx, chartArea, scales: { x: xs, y: ys } } = ch
      const c = chartColors()
      ctx.save()
      ctx.font = '11px ui-sans-serif, system-ui, sans-serif'
      ctx.textBaseline = 'middle'
      const placed = []
      const LH = 14
      const pts = ch.data.datasets[0].data
      // place top-right (busiest) first
      const order = [...pts].sort((a, b) => (b.x + b.y) - (a.x + a.y))
      for (const pt of order) {
        const dimmed = spotlightAusten.value && pt.d.author !== 'austen'
        const px = xs.getPixelForValue(pt.x)
        const py = ys.getPixelForValue(pt.y)
        const w = ctx.measureText(pt.d.name).width
        let chosen = null
        outer:
        for (const side of [1, -1]) {
          for (let step = 0; step <= 6; step++) {
            for (const s of (step === 0 ? [0] : [-1, 1])) {
              const lx = side === 1 ? px + 9 : px - 9 - w
              const ly = py + s * step * LH
              const rect = { x: lx - 2, y: ly - LH / 2, w: w + 4, h: LH }
              if (rect.x < chartArea.left || rect.x + rect.w > chartArea.right) continue
              if (rect.y < chartArea.top || rect.y + rect.h > chartArea.bottom) continue
              if (!placed.some(r => overlap(r, rect))) { chosen = { lx, ly, side, rect }; break outer }
            }
          }
        }
        if (!chosen) {
          const lx = px + 9, ly = py
          chosen = { lx, ly, side: 1, rect: { x: lx - 2, y: ly - LH / 2, w: w + 4, h: LH } }
        }
        placed.push(chosen.rect)
        const col = ZONES[zoneOf(pt.d)]
        // connector
        ctx.strokeStyle = (dimmed ? c.grid : col) + (dimmed ? '40' : '66')
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(chosen.side === 1 ? chosen.lx - 3 : chosen.lx + w + 3, chosen.ly)
        ctx.stroke()
        // name
        ctx.textAlign = 'left'
        ctx.fillStyle = dimmed ? c.text + '40' : col
        ctx.font = (spotlightAusten.value && pt.d.author === 'austen' ? 'bold ' : '') + '11px ui-sans-serif, system-ui, sans-serif'
        ctx.fillText(pt.d.name, chosen.lx, chosen.ly)
      }
      ctx.restore()
    },
  }
}

function buildGrid() {
  gridChart?.destroy()
  if (!gridRef.value) return
  const c = chartColors()
  const data = PEOPLE.map(p => ({ x: p.competence, y: p.status, d: p }))

  gridChart = new Chart(gridRef.value, {
    type: 'scatter',
    data: {
      datasets: [{
        data,
        pointRadius: (ctx) => {
          const p = ctx.raw.d
          return spotlightAusten.value && p.author === 'austen' ? 8 : 6
        },
        pointHoverRadius: 10,
        backgroundColor: (ctx) => {
          const p = ctx.raw.d
          const dimmed = spotlightAusten.value && p.author !== 'austen'
          return ZONES[zoneOf(p)] + (dimmed ? '22' : 'dd')
        },
        borderColor: (ctx) => {
          const p = ctx.raw.d
          const dimmed = spotlightAusten.value && p.author !== 'austen'
          if (spotlightAusten.value && p.author === 'austen') return c.text
          return ZONES[zoneOf(p)] + (dimmed ? '33' : '')
        },
        borderWidth: (ctx) => (spotlightAusten.value && ctx.raw.d.author === 'austen' ? 2 : 1),
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 8, bottom: 8, left: 8, right: 8 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: c.surface,
          titleColor: c.text,
          bodyColor: c.text,
          borderColor: c.grid,
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (items) => `${items[0].raw.d.name} — ${items[0].raw.d.source}`,
            label: (item) => {
              const p = item.raw.d
              return [
                `Competence ${p.competence}/10   ·   Status ${p.status}/10`,
                '',
                `Status from: ${p.statusSource}`,
                `Can actually do: ${p.competenceNote}`,
                '',
                p.hook,
              ]
            },
          },
        },
      },
      scales: {
        x: {
          type: 'linear', min: 0, max: 10,
          title: { display: true, text: 'COMPETENCE  →  things he can actually do', color: c.text, font: { size: 12, weight: 'bold' } },
          grid: { color: c.grid }, border: { color: c.grid },
          ticks: { color: c.text, stepSize: 2, font: { size: 11 } },
        },
        y: {
          type: 'linear', min: 0, max: 10,
          title: { display: true, text: 'STATUS  →  rank the world grants him', color: c.text, font: { size: 12, weight: 'bold' } },
          grid: { color: c.grid }, border: { color: c.grid },
          ticks: { color: c.text, stepSize: 2, font: { size: 11 } },
        },
      },
    },
    plugins: [zonesPlugin(), labelsPlugin()],
  })
}

// ─── Diverging bar: the hollowness leaderboard ───
const gapRef = ref(null)
let gapChart = null

function buildGap() {
  gapChart?.destroy()
  if (!gapRef.value) return
  const c = chartColors()
  const sorted = [...PEOPLE].sort((a, b) => (b.status - b.competence) - (a.status - a.competence))
  const gaps = sorted.map(p => +(p.status - p.competence).toFixed(1))

  gapChart = new Chart(gapRef.value, {
    type: 'bar',
    data: {
      labels: sorted.map(p => p.name),
      datasets: [{
        data: gaps,
        backgroundColor: sorted.map(p => {
          const dimmed = spotlightAusten.value && p.author !== 'austen'
          return ZONES[zoneOf(p)] + (dimmed ? '33' : 'dd')
        }),
        borderColor: sorted.map(p => (spotlightAusten.value && p.author === 'austen' ? c.text : 'transparent')),
        borderWidth: sorted.map(p => (spotlightAusten.value && p.author === 'austen' ? 1.5 : 0)),
        borderRadius: 3,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: c.surface, titleColor: c.text, bodyColor: c.text,
          borderColor: c.grid, borderWidth: 1, padding: 10, displayColors: false,
          callbacks: {
            title: (items) => sorted[items[0].dataIndex].name,
            label: (item) => {
              const p = sorted[item.dataIndex]
              const gap = p.status - p.competence
              const verb = gap > 0 ? 'status exceeds competence by' : gap < 0 ? 'competence exceeds status by' : 'perfectly balanced'
              return gap === 0 ? `Status ${p.status} = Competence ${p.competence}` : `Status ${p.status} − Competence ${p.competence}:  ${verb} ${Math.abs(gap).toFixed(1)}`
            },
          },
        },
      },
      scales: {
        x: {
          min: -7, max: 9,
          title: { display: true, text: '← competence outruns status        status outruns competence →', color: c.text, font: { size: 11 } },
          grid: { color: c.grid }, border: { color: c.grid },
          ticks: { color: c.text, font: { size: 11 } },
        },
        y: {
          grid: { display: false }, border: { color: c.grid },
          ticks: { color: c.text, font: { size: 10 }, autoSkip: false },
        },
      },
    },
  })
}

function buildAll() {
  buildGrid()
  buildGap()
}
function toggleSpotlight() {
  spotlightAusten.value = !spotlightAusten.value
  buildAll()
}

onMounted(() => buildAll())
onUnmounted(() => { gridChart?.destroy(); gapChart?.destroy() })
</script>

<template>
  <GraphWrapper title="Aragorn vs. Mr. Darcy" max-width="6xl" @theme-change="buildAll">
    <template #subtitle>
      Two axes for any romantic hero: <strong>competence</strong> (the hard things he can actually do) and
      <strong>status</strong> (the rank, wealth, and adoration the world grants him). Plot the heartthrobs and a
      diagonal appears — <em>the earned line</em>, where status equals competence. Sit on it or below it and your
      status is backed by skill (Aragorn, Geralt, Han Solo). Float above it and you've got status with nothing
      underneath. This is why I love Aragorn — a king, but a king because he's the best man in the field — and can't
      stand Mr. Darcy, whose entire appeal is being a rich 25-year-old who is good at... being rich.
    </template>

    <section class="mt-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div class="text-xs text-[var(--text-muted)] flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5">
            <span class="inline-block h-2.5 w-2.5 rounded-full" :style="{ background: ZONES.earned }"></span>
            status earned by competence
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span class="inline-block h-2.5 w-2.5 rounded-full" :style="{ background: ZONES.mixed }"></span>
            running a little ahead
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span class="inline-block h-2.5 w-2.5 rounded-full" :style="{ background: ZONES.hollow }"></span>
            status without substance
          </span>
        </div>
        <button
          @click="toggleSpotlight"
          class="text-sm cursor-pointer px-3 py-1.5 rounded border transition-colors"
          :class="spotlightAusten
            ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]'
            : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'"
        >
          {{ spotlightAusten ? '✓ Jane Austen spotlighted' : `🔍 Spotlight Jane Austen (${austenCount})` }}
        </button>
      </div>

      <div class="bg-[var(--bg-surface)] rounded-lg border border-[var(--border)] p-2 sm:p-4">
        <div style="height: 620px"><canvas ref="gridRef"></canvas></div>
      </div>

      <p v-if="spotlightAusten" class="mt-3 text-sm leading-relaxed p-3 rounded-lg border"
        :style="{ borderColor: ZONES.hollow + '55', background: ZONES.hollow + '11' }">
        <strong>SEE?</strong> Most of Austen's leading men float in the upper-left — high status, low competence.
        Darcy is the worst offender: a 25-year-old worth £10,000 a year who is good at owning Pemberley.
        The honest exception is <strong>Captain Wentworth</strong>, who made his own fortune and rank at sea — he
        sits right on the earned line, and I respect him for it. It was never about hating Austen. It's the
        <em>Darcy archetype</em>: status with nothing under it.
      </p>
    </section>

    <!-- Hollowness leaderboard -->
    <section class="mt-10">
      <h2 class="text-base font-semibold">The hollowness leaderboard</h2>
      <p class="text-xs text-[var(--text-muted)] mt-1">
        Status minus competence, ranked. Red bars to the right = status floating free of skill (the heartthrobs I
        can't stand). Blue bars to the left = competence the world never bothered to crown (the ones I do).
      </p>
      <div class="mt-2 bg-[var(--bg-surface)] rounded-lg border border-[var(--border)] p-3 md:p-5" style="height: 760px">
        <canvas ref="gapRef"></canvas>
      </div>
    </section>

    <!-- Methodology -->
    <details class="mt-10 group rounded-lg border border-[var(--border)] bg-[var(--bg-surface)]">
      <summary class="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
        <span class="text-base font-semibold text-[var(--text-primary)]">How this is scored (and why it's honest about being subjective)</span>
        <span class="text-xs text-[var(--text-muted)] group-open:hidden">click to expand</span>
        <span class="text-xs text-[var(--text-muted)] hidden group-open:inline">click to collapse</span>
      </summary>
      <div class="px-4 pb-4 text-sm text-[var(--text-secondary)] space-y-3 leading-relaxed">
        <p>
          <strong>These are judgment calls, not measurements.</strong> Unlike the research graphs on this site,
          there is no public dataset for "how competent is a fictional swordsman." Each character is scored 0–10 on
          two axes by argument, not by data, and reasonable people will shove a few dots around. That's fine — the
          point of this graph isn't the exact coordinates, it's the <em>geometry</em>: who sits above the line they
          didn't earn.
        </p>
        <ul class="list-disc list-inside ml-2 space-y-1">
          <li><strong>Competence</strong> = hard things he can actually do that others can't fake — skill, mastery,
            earned capability. Swordsmanship, engineering, medicine, flying, building, leading.</li>
          <li><strong>Status</strong> = rank, wealth, title, and adoration the world grants him — much of which can be
            inherited, married into, or simply conferred.</li>
          <li><strong>The earned line</strong> is status = competence. On or below it, the status (if any) is backed
            by skill. Above it, the status floats free.</li>
        </ul>
        <p>
          The honest tell that this isn't just a hit-job on romance: <strong>Captain Wentworth, Mr. Knightley, and
          Colonel Brandon</strong> — all Austen men — score near or on the line, because Austen did write competent
          men when she wanted to. Wentworth literally made his fortune by being good at a dangerous job. The
          complaint was never "Austen." It's the specific archetype — Darcy, Bingley, the brooding rich stranger —
          where the entire romantic appeal <em>is</em> the unearned status.
        </p>
        <p class="text-xs text-[var(--text-muted)]">
          A note on the lens: prizing the competence axis over the status axis is, frankly, a stereotypically male
          way to read a romantic hero — this graph wears that bias on its sleeve. The interesting bit is that once
          you draw the line, the characters almost everyone already loves (Aragorn, Han Solo, Westley) turn out to
          live on or below it, and the ones people roll their eyes at (Christian Grey, Prince Charming) float way
          above. The line isn't that controversial. Who you forgive for crossing it — that's the argument.
        </p>
      </div>
    </details>
  </GraphWrapper>
</template>
