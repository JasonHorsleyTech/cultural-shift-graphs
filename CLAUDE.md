# graphable

See `terminology.md` for project-specific terms (Ralph Wiggum Loop, orchestrator).

## What this project is

A personal site for publishing reactive graphs about questions Jason finds interesting — cultural, economic, social, historical, whatever. Think obsessive deep-dives nobody asked for but everyone finds fascinating once they see the graph. "I wonder what that looks like on a graph" → now you know.

Examples of the kinds of questions this project tackles:

- "Have children's movies shifted from real villains to imagined ones?"
- "What does inflation look like if you build your own index from hundreds of goods, normalized for quality?"
- "Is it actually harder for me than it was for my father, measured in labor-hours per basic necessity?"
- "How much sex are people actually having, by culture and era?"
- "What does the historical slave population look like when normalized to modern poverty levels?"

The site publishes one graph per question. Research is done by AI agents as objectively as possible — the graphs are only fun if the data is honest. If the data contradicts the hypothesis, the graph should show that.

Jason shows the graphs to his friends to prove he's right and they're wrong. That is the entire point. Optimize for "at the drop of a hat."

## Messy ideas

Jason dumps half-formed graph ideas into `ideas/` as markdown files. These are raw, unstructured, voice-to-text-friendly — no format required. The workflow:

1. **Jason has a fuzzy idea.** He opens a conversation and says something like "I've got a messy idea" or "add this to the ideas pile." Claude creates or appends to a file in `ideas/<slug>.md`.
2. **Workshopping.** Over one or more conversations, Jason and Claude refine the idea — poke holes, find angles, identify data sources, sharpen the question. All notes get appended to the same idea file.
3. **Graduation.** When Jason says the idea is ready ("move it over", "this one's baked"), use the `graduate-idea` skill. It distills the messy notes into a clean `question.md`, creates a project in `projects/`, and deletes the idea file.

To list current messy ideas: read the filenames in `ideas/`. To review one: read the file. These are Jason's scratch pad — don't clean them up unless he asks.

## Automated pipeline

A cron job fires every ~45 minutes, running the orchestrator (`scripts/orchestrate.mjs`). The goal is to burn through Jason's Claude Max subscription tokens — no tokens left on the table. The orchestrator:

1. Scans `projects/` for the highest-priority project with pending work (lowest `priority` number wins).
2. Spawns a Claude Code agent to do exactly **one unit of work** (one research pass, one ticket, one graph build).
3. The agent writes results to disk, updates project state, and exits.
4. Next cron tick picks up where it left off.
5. When all projects are complete (or awaiting manual deploy), the orchestrator spawns an agent to generate the next interesting question automatically.

Research phases typically have 20–60 tickets, so a single project takes days to churn through at one ticket per 45-minute tick. This is normal — it's a slow burn.

**To check current state:** Look at the project's `status` file for the phase. During `research`, compare `tickets/` to `results/` — each completed ticket gets a matching result file. The orchestrator works tickets in filename order (001, 002, ...), so the first ticket without a result is up next.

**To halt the pipeline:** Create a `HALT` file in the repo root. The orchestrator checks for it before every run and stops if it exists. Write a reason in the file so the next person (or Claude) knows why. Delete the file to resume.

Jason can inject high-priority projects by creating a project folder manually. If he forgets about the laptop for days, it keeps researching and building graphs on its own.

### Batch research mode

When the weekly token limit is about to reset and there are tokens left on the table, use `scripts/research-batch.sh` to fire all pending research tickets in parallel instead of one-per-tick. This burns remaining tokens before the reset window closes.

**How to use:**
1. Create a `HALT` file in the repo root (prevents the cron orchestrator from conflicting).
2. Run `bash scripts/research-batch.sh`. It spawns one `claude --print` process per pending ticket, all in parallel.
3. Monitor progress: `ls projects/<slug>/results/ | wc -l`.
4. When all results are in, delete the `HALT` file so the orchestrator resumes normally.

The script is project-agnostic in structure but currently hardcoded to `displaced-professions`. Adapt the `PROJECT_DIR` variable for other projects. Only use this for projects whose tickets are independent (no compound research where ticket N informs ticket N+1). Logs go to `scripts/research-logs/`.

### Creating a project manually

1. Create `projects/<slug>/question.md` with the hypothesis/question.
2. Create `projects/<slug>/priority` — a number, lower = first. Use 1–10 for things you care about. Auto-generated projects get 50.
3. Create `projects/<slug>/status` — write the word `explore`.
4. Optionally create `projects/<slug>/mode` — write `cron` or `manual`. Default is `cron` if the file doesn't exist.

The orchestrator picks up cron projects on the next tick. Manual projects are ignored by the orchestrator entirely.

## Project modes

Every project in `projects/` is either **cron** or **manual**, controlled by an optional `mode` file.

### Cron projects (default)

The standard pipeline. The orchestrator picks these up every ~45 minutes, does one unit of work per tick, and chips away at the research over days. Good for projects that break cleanly into 20–60 independent tickets. No `mode` file or `mode` containing `cron` = cron project.

### Manual projects

Projects that are too big, too weird, or structurally different for the one-ticket-per-tick model. The orchestrator skips them entirely. These are run by Jason in interactive conversations or via custom scripts. `mode` file contains `manual`.

Use cases for manual mode:
- Projects requiring agent delegation (e.g., Opus orchestrating Haiku sub-agents)
- Projects where ticket execution needs a custom approach (bulk parallel, different models, etc.)
- Projects where Jason wants hands-on control of the research process

Manual projects use the same directory layout, same lifecycle phases, and same conventions as cron projects. The only difference is who triggers the work — the cron orchestrator vs. Jason.

## Project lifecycle

Each project lives in `projects/<slug>/` and progresses through phases. State is tracked by a `status` file — plain text, one word.

### Phases (automated)

**explore** — 2–3 structured passes that sharpen the question into something graphable. This is NOT just "gather information." It's adversarial refinement:

- **Pass 1 (ground it):** Pick concrete examples, do napkin math, propose a specific metric. "What exactly are we measuring?" If you can't answer that after pass 1, the question is too vague.
- **Pass 2 (break it):** Stress-test the metric against edge cases. Try to find industries, time periods, or scenarios where it falls apart. Each failure either narrows the scope (exclude that case) or forces a better metric. Both outcomes are progress.
- **Pass 3+ (sharpen or advance):** If the metric survived stress-testing and scope is clear, advance to `plan`. If something is still wobbly, do one more pass targeting the specific weakness. Don't explore open-endedly — name the weakness and address it.

An idea is "sharp" when: the metric is defined, it has survived edge cases, scope boundaries are drawn (what's in AND what's out), and you know what one data point looks like. "Sharp" doesn't mean researched — it means you know exactly what to research and how to measure it.

If a spin-off idea emerges during exploration, save it to `ideas/<slug>.md` and stay focused on the current project.

**plan** — Read all exploratory research. Define the exact data format for results. Break the question into N individual research tickets (one file per ticket in `tickets/`). Write `plan.md` with the format spec and rationale.

**research** — Execute one ticket per cron tick. Each ticket produces a result file in `results/`. When all tickets have corresponding results, advance to `graph`.

**graph** — Build the TypeScript data file, Vue component, mount script, HTML entry, and Vite config entry from the collected results. Run typecheck and build to verify.

**review** — Sanity-check the graph. Verify typecheck passes, build succeeds, data has entries. If everything checks out, advance to `deploy`.

### Phases (manual)

**deploy** — Awaiting manual deploy. Claude builds, syncs to S3, invalidates CloudFront, and updates `src/GraphableLanding.vue` with a link to the new graph. Set status to `done` when deployed.

**done** — Project complete. Orchestrator ignores it.

**blocked** — Held back from deploy because Jason has concerns about the research, framing, or methodology that need rework. The orchestrator skips these (same as `done`/`deploy`). Drop a `BLOCKED.md` in the project directory with the date, the concrete concerns, and what needs to happen before it can move back to `deploy`. To unblock: address the concerns, set status back to `graph` (rebuild) or `deploy` (if only minor edits were needed), and delete `BLOCKED.md`.

### Project directory layout

```
projects/<slug>/
  question.md        # The hypothesis or question
  priority           # Number, lower = higher priority (default 50)
  status             # Current phase (one word)
  mode               # Optional: "cron" (default) or "manual"
  research/          # Exploratory research reports
    angle-01.md
    angle-02.md
  plan.md            # Data format spec + ticket list rationale
  tickets/           # Individual research ticket definitions
    001-eggs.md
    002-bacon.md
  results/           # Completed ticket results (filenames match tickets)
    001-eggs.md
    002-bacon.md
```

### State transition rule

Update `status` as the **last action** of each agent invocation. If the agent dies mid-work, status stays at the current phase and the next tick retries. This makes the pipeline crash-safe.

## Tech stack

- **Build tool:** Vite 6, multi-page mode. One HTML entry per graph, listed in `vite.config.js` under `build.rollupOptions.input`. `npm run dev` for local dev, `npm run build` for production.
- **Framework:** Vue 3 (script-setup style, no router — each page is its own mount).
- **Styling:** Tailwind v4 via `@tailwindcss/vite`. `src/style.css` has Tailwind import, typography plugin, and CSS custom properties for theming. No `tailwind.config.js`, no postcss config.
- **Theming:** Light/dark mode with a toggle. Auto-detects from `prefers-color-scheme` on first visit, persists choice to `localStorage`. CSS variables in `src/style.css` define all theme tokens (`:root` = light, `.dark` = dark). Shared logic in `src/theme.js`. Every graph page must include the toggle and call `initTheme()` on mount. Chart.js configs read colors from `chartColors()` and must rebuild charts on theme switch.
- **Charts:** RoughViz (sketchy/xkcd-style) by default. Swap to Chart.js, ECharts, ApexCharts, etc. when a specific graph calls for it. Data files stay chart-library agnostic.
- **Data files:** TypeScript, type-checked via `npm run typecheck`.
- **Backend:** None. Don't add one.
- **Output:** Static HTML files. `npm run build` produces `dist/` for S3.

## Graph types

There are two kinds of graphs. See `graph-conventions.md` for file templates and the full checklist.

### Research graphs

The main product. Full project lifecycle (explore → plan → research → graph → review → deploy). Data is real, gathered by AI agents. These go through `projects/` and the automated pipeline.

Per-graph assets for a slug like `egg-quality-timeline`:

- `src/data/<slug>.ts` — TypeScript data file with a `type` definition and exported const array.
- `graphable/<slug>/index.html` — HTML entry file.
- `src/<slug>.js` — Per-page mount script (creates Vue app, mounts it).
- `src/<PascalSlug>.vue` — Graph component. Imports data, does aggregation, renders chart.
- New entry in `vite.config.js` → `build.rollupOptions.input`.

### Sketch graphs

Quick, illustrative, one-off graphs where the data is made up but the shape communicates a concept. Think XKCD — the numbers aren't real, but you go "oh yeah, that's right." Jason says "I want a sketch" and you workshop the concept, build it in the same conversation, and deploy.

Sketches skip the entire project lifecycle. No `projects/` directory, no data file, no tickets. Just:

- `graphable/<slug>/index.html`
- `src/<slug>.js`
- `src/<PascalSlug>.vue` (data is a const array inline in the component)
- Entry in `vite.config.js`

When deploying, add sketches under the **Sketches** section of `src/GraphableLanding.vue`.

## Routing

One route per graph. Pages at `domain/graphable/<slug>`. Builds to `graphable/<slug>/index.html` for S3 static hosting. No Lambda@Edge, no CloudFront functions, no routing trickery.

**This project deploys to `/graphable/` only.** The root of `surgicalsledgehammer.com` is owned by Surgical Sledgehammer Light (a separate project). Do not produce or deploy a root `index.html` — that would overwrite the other site.

## Deploy

Run `bash deploy.sh` from the project root. It handles everything: build, git commit/push, S3 sync (with correct `--delete` safety), and CloudFront cache invalidation.

When deploying a new graph, **always update `src/GraphableLanding.vue`** to include a link to the new graph before running the script. The landing page at `/graphable/` is the index of all published graphs — a graph that isn't linked there is invisible.

**CRITICAL: Never use `--delete` when syncing `dist/assets/` to S3.** The `/assets/` prefix is shared with Surgical Sledgehammer Light. The deploy script already handles this correctly, but if you ever sync manually, remember: `--delete` only on `/graphable/`.

If the deploy script breaks or you need to understand the underlying AWS steps, see `.claude/skills/deploy-static-to-s3/deploy-static-to-s3-legacy.md` for the full manual recipe.

## Working norms

- Personal project. Simple > proper. Don't over-engineer.
- Research agents aim for objectivity — graphs are only fun if the data is honest.
- Each graph is independently shippable. Don't couple them.
- Data file is dumb and append-only. Aggregation logic lives in the Vue component.
- **One unit of work per agent invocation.** Do the thing, write to disk, update status, exit.
- If you find a partial or incomplete file from a previous failed run, replace it — don't append to garbage.

## Legacy

- The `.chief/` directory contains PRDs from the earlier chief-based workflow. These are done — new work uses the orchestrator pipeline in `projects/`.
- See `friction.md` for known gotchas with chart libraries, AWS deploy, etc.
