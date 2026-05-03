#!/usr/bin/env node

/**
 * Orchestrator — scans projects/, picks the highest-priority one with pending
 * work, builds a phase-appropriate prompt, and spawns Claude Code to do one
 * unit of work. Designed to be called by cron every ~45 minutes.
 *
 * Usage:
 *   node scripts/orchestrate.mjs            # run normally
 *   node scripts/orchestrate.mjs --dry-run  # show what would happen, don't spawn Claude
 */

import { readdirSync, readFileSync, existsSync, writeFileSync, unlinkSync, mkdirSync, openSync, closeSync, appendFileSync, writeSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PROJECTS_DIR = join(ROOT, 'projects')
const LOGS_DIR = join(ROOT, 'logs')
const LOCK_FILE = join(ROOT, '.orchestrator.lock')
const HALT_FILE = join(ROOT, 'HALT')
const SUMMARY_LOG = join(ROOT, '.orchestrator.log')
const MAX_TURNS = 50
const TIMEOUT_MS = 20 * 60 * 1000 // 20 minutes

const CRON_TOKEN_FILE = join(process.env.HOME || '/Users/jasonhorsley', '.claude', '.cron-token')
const DRY_RUN = process.argv.includes('--dry-run')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readFile(path) {
  try { return readFileSync(path, 'utf8').trim() } catch { return null }
}

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`
  console.log(line)
  try {
    appendFileSync(SUMMARY_LOG, line + '\n')
  } catch {}
}

function countMdFiles(dir) {
  try { return readdirSync(dir).filter(f => f.endsWith('.md')).length } catch { return 0 }
}

function toPascalCase(slug) {
  return slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('')
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-')
}

// ---------------------------------------------------------------------------
// HALT — emergency stop
// ---------------------------------------------------------------------------

function checkHalt() {
  if (existsSync(HALT_FILE)) {
    const reason = readFile(HALT_FILE) || '(no reason given)'
    log(`HALT file found. Reason: ${reason}`)
    log('Remove the HALT file from the project root to resume.')
    process.exit(0)
  }
}

// ---------------------------------------------------------------------------
// Lock — prevents overlapping runs
// ---------------------------------------------------------------------------

function acquireLock() {
  if (existsSync(LOCK_FILE)) {
    const lockTime = parseInt(readFile(LOCK_FILE) || '0')
    if (Date.now() - lockTime < 30 * 60 * 1000) {
      log('Another run in progress. Skipping.')
      process.exit(0)
    }
    log('Stale lock found. Overriding.')
  }
  writeFileSync(LOCK_FILE, String(Date.now()))
}

function releaseLock() {
  try { unlinkSync(LOCK_FILE) } catch {}
}

// ---------------------------------------------------------------------------
// Project scanning
// ---------------------------------------------------------------------------

function getProjects() {
  if (!existsSync(PROJECTS_DIR)) {
    mkdirSync(PROJECTS_DIR, { recursive: true })
    return []
  }
  return readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => {
      const dir = join(PROJECTS_DIR, d.name)
      const status = readFile(join(dir, 'status'))
      const priority = parseInt(readFile(join(dir, 'priority')) || '50')
      const mode = readFile(join(dir, 'mode')) || 'cron'
      const question = readFile(join(dir, 'question.md'))
      return { slug: d.name, dir, status, priority, mode, question }
    })
    .filter(p => p.status && p.status !== 'done' && p.status !== 'deploy')
    .filter(p => p.mode === 'cron')
    .sort((a, b) => a.priority - b.priority)
}

const COMPLETE_MARKER = '<!-- COMPLETE -->'

function isResultComplete(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8').trimEnd()
    return content.endsWith(COMPLETE_MARKER)
  } catch { return false }
}

function getTicketProgress(projectDir) {
  const ticketsDir = join(projectDir, 'tickets')
  const resultsDir = join(projectDir, 'results')
  const tickets = []
  try {
    for (const f of readdirSync(ticketsDir).sort()) {
      if (!f.endsWith('.md')) continue
      const resultPath = join(resultsDir, f)
      const hasResult = existsSync(resultPath) && isResultComplete(resultPath)
      tickets.push({ name: f, done: hasResult })
    }
  } catch {}
  return tickets
}

// ---------------------------------------------------------------------------
// Emergency stop instruction — appended to every prompt
// ---------------------------------------------------------------------------

const HALT_INSTRUCTION = `

---
EMERGENCY STOP: You are being run by an automated cron pipeline every 45 minutes. If at any point you discover something seriously wrong — corrupted data, a fundamentally broken approach, repeated failures from previous runs, filesystem chaos, or anything that should stop automated processing until a human reviews it — create a file called HALT in the repository root directory. Write a clear explanation of what you found and why you're stopping. This will prevent the cron from spawning more Claude instances until Jason (the human operator) reviews it and deletes the HALT file. Use this only for genuine problems, not for routine issues you can fix yourself.`

// ---------------------------------------------------------------------------
// Prompt builders — one per phase
// ---------------------------------------------------------------------------

function explorePrompt(project) {
  const angleCount = countMdFiles(join(project.dir, 'research'))

  if (angleCount === 0) {
    return `You are exploring a question for a graphing project. This is the FIRST pass — your job is to ground the question in reality.

Read projects/${project.slug}/question.md.

Your goals for this first exploration:
1. Pick one or two concrete, vivid examples that make the question tangible. Do back-of-napkin math. "A college professor makes X, teaches Y students, so the cost should be Z — but it's actually W." That kind of grounding.
2. Propose an initial metric — what exactly would you measure and graph? Be specific. What's the X axis, what's the Y axis, what's the unit?
3. Identify 2-3 data sources that might have longitudinal data for this.
4. Note what you're unsure about — where does the framing feel wobbly?

Write a thorough report. Create the directory projects/${project.slug}/research/ if it doesn't exist, then save your report to projects/${project.slug}/research/angle-01.md.

Be objective. The graph is only interesting if the data is real.${HALT_INSTRUCTION}`
  }

  if (angleCount === 1) {
    return `You are exploring a question for a graphing project. This is the SECOND pass — your job is to STRESS-TEST the framing from the first pass.

Read projects/${project.slug}/question.md and the existing research in projects/${project.slug}/research/.

Your goals:
1. Try to BREAK the proposed metric. Find edge cases where it doesn't work. Industries, time periods, or scenarios where the measurement falls apart. If the first pass proposed "sole proprietor cost" — does that work for fire departments? Hospitals? Restaurants? If it proposed "price per unit" — what counts as a unit for a service you pay for monthly?
2. For each failure, ask: is this a fatal flaw or just a scope boundary? Maybe the metric works but these edge cases should be excluded. Or maybe the metric needs to be redefined entirely.
3. Propose a REFINED metric that survives the stress test. Or propose clear scope rules that exclude the problematic cases. Both are valid.
4. Identify anything that should be a spin-off idea (a related but different question that emerged). Note it but don't pursue it — stay focused on this project.

Write a thorough report from this adversarial perspective.

Save your report to projects/${project.slug}/research/angle-02.md.${HALT_INSTRUCTION}`
  }

  return `You are exploring a question for a graphing project. There are ${angleCount} exploratory reports so far.

Read projects/${project.slug}/question.md and ALL research in projects/${project.slug}/research/.

Decide: is this question SHARP enough to plan structured data collection?

Sharp means:
- The core metric has been proposed, stress-tested, and refined. It survived edge cases.
- We have clear scope boundaries — what's IN and what's OUT, and why.
- We know what "one data point" looks like — what gets researched per ticket.
- The metric works across the full scope (or we've explicitly excluded what it doesn't cover).
- We have a sense of where longitudinal data lives (BLS, Census, industry associations, etc.).

"Sharp" does NOT mean we've done the research. It means we know exactly WHAT to research and HOW to measure it.

If YES — it's sharp: update projects/${project.slug}/status to "plan" (overwrite the file with just the word "plan"). Do NOT write another research report.

If NO — something is still wobbly: write one more exploration pass that specifically addresses the weakness. Save to projects/${project.slug}/research/angle-${String(angleCount + 1).padStart(2, '0')}.md. In this report, clearly state what was weak and how you've addressed it.

If you notice a spin-off idea during exploration, save it to ideas/<slug>.md (one file, brief notes on the idea and why it's interesting). Don't let it distract from the current project.${HALT_INSTRUCTION}`
}

function planPrompt(project) {
  return `You are planning structured data collection for a graphing project.

Read everything in projects/${project.slug}/ — the question and all exploratory research.

Your job:
1. Design the exact data format for individual research results — what fields, what types, how to normalize. This format is what every research ticket will produce.
2. Decide how many individual research items we need and what they are. Aim for 20–100 tickets. Each should be completable in a single agent session (one web search + writing results, roughly).
3. Write the plan to projects/${project.slug}/plan.md — include the data format spec, the rationale, and a summary of what each ticket covers.
4. Create projects/${project.slug}/tickets/ and write one .md file per ticket, named like 001-descriptive-name.md, 002-another-item.md, etc. Each ticket must be self-contained: what to research, what format to return results in, what "good data" looks like.
5. Create projects/${project.slug}/results/ (empty directory — create a .gitkeep file in it).
6. As your LAST action, update projects/${project.slug}/status to "research".

Important planning principles:
- **Consistency over accuracy.** The data doesn't need to be correct in absolute terms for any single data point. It needs to use a consistent enough measurement methodology that movement over time is truthful. If a proxy is available for 50 years but a "better" number only exists for 10 years, prefer the 50-year proxy.
- **Different items may need different data proxies.** Don't force a single methodology across sub-categories that have fundamentally different data landscapes. State in the plan what proxy each category uses and why. The key constraint is that each category's proxy must be internally consistent over its own time range.
- **Specify the data source hierarchy in each ticket.** Tell the research agent where to look first (BLS, Census, industry associations, academic studies) and what to fall back to. This prevents agents from wasting time re-discovering what the explore phase already found.
- **Note known data gaps.** If certain time periods or sub-categories will have patchy data, say so upfront. Let the research agent mark gaps rather than guessing.${HALT_INSTRUCTION}`
}

function researchPrompt(project) {
  const tickets = getTicketProgress(project.dir)
  const remaining = tickets.filter(t => !t.done)

  if (remaining.length === 0) {
    return `All research tickets are complete for projects/${project.slug}/. Update projects/${project.slug}/status to "graph".${HALT_INSTRUCTION}`
  }

  const next = remaining[0]
  const total = tickets.length
  const done = tickets.filter(t => t.done).length
  const isLast = remaining.length === 1

  return `You are executing a research ticket. Progress: ${done}/${total} complete.

1. Read projects/${project.slug}/plan.md for the data format spec.
2. Read the ticket: projects/${project.slug}/tickets/${next.name}
3. Research this specific item thoroughly. Use web search and any available sources. Be as objective as you can, even when the topic is inherently subjective.
4. Write your results in the format specified by plan.md to: projects/${project.slug}/results/${next.name}
5. Note your sources and confidence level in the results file.
6. As the ABSOLUTE LAST LINE of the results file, write exactly: <!-- COMPLETE -->
   This marker proves the file was fully written. A results file without this marker is treated as incomplete and will be retried. Do NOT write this marker until all content is finalized.
${isLast ? `\n7. This is the LAST ticket. After writing results, update projects/${project.slug}/status to "graph".` : ''}${HALT_INSTRUCTION}`
}

function graphPrompt(project) {
  const slug = project.slug
  const pascal = toPascalCase(slug)

  return `All research is complete for project "${slug}". Time to build the graph.

1. Read projects/${slug}/plan.md for context on the data format.
2. Read ALL results in projects/${slug}/results/.
3. Aggregate the research into a dataset and create the graph page:
   - src/data/${slug}.ts — TypeScript data file with type definition and exported const array
   - src/${slug}.js — Mount script (creates Vue app, mounts to #app)
   - src/${pascal}.vue — Graph component (imports data, does aggregation, renders chart)
   - ${slug}/index.html — HTML entry file (same pattern as existing pages)
   - Add entry to vite.config.js under build.rollupOptions.input
4. Run: npm run typecheck
5. Run: npm run build
6. If both pass, update projects/${slug}/status to "review".
   If either fails, fix the issue and retry before updating status.

Pick the chart type and aggregation that best tells the story. RoughViz for sketchy style, Chart.js or ECharts if a cleaner look fits better. Data file stays chart-library agnostic.${HALT_INSTRUCTION}`
}

function reviewPrompt(project) {
  const slug = project.slug

  return `Review the graph for project "${slug}".

1. Run npm run typecheck — must pass.
2. Run npm run build — must succeed.
3. Check that src/data/${slug}.ts has actual data entries (not empty).
4. Read the Vue component and verify the chart configuration looks reasonable.
5. If anything is wrong, fix it.
6. When everything checks out, update projects/${slug}/status to "deploy".${HALT_INSTRUCTION}`
}

function ideationPrompt(allProjectSlugs) {
  const existing = allProjectSlugs.length > 0
    ? `\nExisting projects (avoid duplicating these):\n${allProjectSlugs.map(s => `- ${s}`).join('\n')}\n`
    : '\nNo existing projects yet.\n'

  // Check for messy ideas that could inspire or be adjacent
  let ideasContext = ''
  const ideasDir = join(ROOT, 'ideas')
  try {
    const ideaFiles = readdirSync(ideasDir).filter(f => f.endsWith('.md'))
    if (ideaFiles.length > 0) {
      ideasContext = `\nThere are messy ideas in ideas/ that Jason has been workshopping. Read them for inspiration — your new question should complement, not duplicate, these in-progress ideas:\n${ideaFiles.map(f => `- ideas/${f}`).join('\n')}\n`
    }
  } catch {}

  return `You are generating the next interesting question for a graphing project.
${existing}${ideasContext}
Think like this: start with a gut feeling. "I wonder if..." or "Everyone says X but is that actually true?" or "What would it look like if you graphed Y?" Then ground it immediately — pick a concrete example and do rough napkin math. Does the question hold up when you get specific? If the napkin math is boring, the graph will be boring. If the napkin math surprises you, you've got something.

The sweet spot: questions people argue about casually but nobody has actually bothered to graph. The kind of thing you'd show a friend to prove you're right and they're wrong.

Good questions:
- Start from a concrete observation or gut feeling, not an abstract category
- Are answerable with researchable, longitudinal data (not pure opinion)
- Have a clear, measurable metric (not just "how has X changed" but "specifically what number are we tracking")
- Would produce a graph where the shape of the line tells a story — a collapse, a divergence, a surprising stability, a clear inflection point
- Have enough depth for 20–100 research tickets

Bad questions:
- Too vague to measure ("has culture changed?")
- Too narrow to be interesting ("price of a specific brand of cereal")
- Already well-graphed and widely known (inflation, GDP, stock market)
- Pure opinion dressed up as data ("are movies getting worse?")

In your question.md, include:
- The core question (one sentence)
- A concrete example with napkin math that shows why it's interesting
- What you'd expect the graph to look like (and what would be surprising)
- Initial thoughts on what the metric would be and where the data lives
- What would make this question NOT interesting (so the explore phase knows what to watch for)

Pick ONE question. Create a new project:
1. Choose a short, descriptive slug (lowercase, hyphenated)
2. Create projects/<slug>/question.md with all of the above
3. Create projects/<slug>/priority with the number 50
4. Create projects/<slug>/status with the word "explore"

That's it. One question, one new project folder.${HALT_INSTRUCTION}`
}

// ---------------------------------------------------------------------------
// Session logging
// ---------------------------------------------------------------------------

function createSessionLog(label, prompt) {
  mkdirSync(LOGS_DIR, { recursive: true })
  const filename = `${timestamp()}_${label.replace(/[/:]/g, '_')}.log`
  const logPath = join(LOGS_DIR, filename)
  const fd = openSync(logPath, 'w')

  // Write header + prompt to the fd BEFORE Claude gets it, so output is ordered correctly
  const header = [
    `=== Orchestrator Session Log ===`,
    `Timestamp: ${new Date().toISOString()}`,
    `Task: ${label}`,
    `Max turns: ${MAX_TURNS}`,
    `Timeout: ${TIMEOUT_MS / 1000}s`,
    `===`,
    ``,
    `--- Prompt ---`,
    prompt,
    `--- End Prompt ---`,
    ``,
    `--- Claude Output ---`,
    ``,
  ].join('\n')
  writeSync(fd, header)

  return { fd, path: logPath, filename }
}

function finalizeSessionLog(logPath, { prompt, exitCode, durationMs }) {
  const footer = [
    ``,
    `=== Session Summary ===`,
    `Exit code: ${exitCode}`,
    `Duration: ${(durationMs / 1000).toFixed(1)}s (${(durationMs / 60000).toFixed(1)} min)`,
    `===`,
  ].join('\n')
  appendFileSync(logPath, footer + '\n')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  log('Orchestrator starting.')

  // Check emergency stop BEFORE acquiring lock
  checkHalt()

  acquireLock()

  try {
    // Get all project slugs (including done) for ideation context
    let allSlugs = []
    if (existsSync(PROJECTS_DIR)) {
      allSlugs = readdirSync(PROJECTS_DIR, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name)
    }

    const projects = getProjects()
    let prompt
    let label

    if (projects.length === 0) {
      label = 'ideation'
      log('No pending projects. Generating new question.')
      prompt = ideationPrompt(allSlugs)
    } else {
      const project = projects[0]
      label = `${project.slug}:${project.status}`
      log(`Working on: ${project.slug} (status: ${project.status}, priority: ${project.priority})`)

      switch (project.status) {
        case 'explore':  prompt = explorePrompt(project); break
        case 'plan':     prompt = planPrompt(project); break
        case 'research': prompt = researchPrompt(project); break
        case 'graph':    prompt = graphPrompt(project); break
        case 'review':   prompt = reviewPrompt(project); break
        default:
          log(`Unknown status "${project.status}". Skipping.`)
          releaseLock()
          process.exit(0)
      }
    }

    if (DRY_RUN) {
      log(`DRY RUN — would spawn Claude for: ${label}`)
      console.log('\n--- Prompt ---')
      console.log(prompt)
      console.log('--- End ---\n')
      releaseLock()
      process.exit(0)
    }

    // Create session log (writes header + prompt to fd before Claude gets it)
    const session = createSessionLog(label, prompt)

    log(`Spawning Claude... (log: logs/${session.filename})`)
    const startTime = Date.now()

    // Build env for Claude — pass OAuth token if available (needed for cron/headless)
    const spawnEnv = { ...process.env }
    const cronToken = readFile(CRON_TOKEN_FILE)
    if (cronToken) {
      spawnEnv.CLAUDE_CODE_OAUTH_TOKEN = cronToken
    } else {
      log('WARNING: No cron token found at ~/.claude/.cron-token — Claude may fail to authenticate.')
    }

    const result = spawnSync('/opt/homebrew/bin/claude', [
      '-p', prompt,
      '--model', 'opus',
      '--dangerously-skip-permissions',
      '--max-turns', String(MAX_TURNS),
    ], {
      cwd: ROOT,
      stdio: ['ignore', session.fd, session.fd],
      timeout: TIMEOUT_MS,
      env: spawnEnv,
    })

    closeSync(session.fd)
    const durationMs = Date.now() - startTime

    // Finalize session log
    finalizeSessionLog(session.path, {
      prompt,
      exitCode: result.status,
      durationMs,
    })

    log(`Claude exited with code: ${result.status} | ${(durationMs / 60000).toFixed(1)} min (${label})`)

  } finally {
    releaseLock()
  }
}

main()
