# Terminology

## Ralph Wiggum Loop

A Ralph Wiggum Loop (often shortened to "Ralph Loop") is an AI coding-agent technique where the same prompt is fed to an agent over and over in a simple `while` loop until a defined stop condition is met. The name comes from the Simpsons character — it's meant to evoke a dim but persistent worker that just keeps trying.

Key properties:

- **Progress lives outside the context window.** Each iteration starts fresh; the agent's "memory" is the state of the files, the git history, and whatever scratch notes the prompt tells it to maintain. The LLM context is disposable.
- **The prompt is stable.** The same instructions run every loop. The agent picks up wherever the filesystem left off.
- **"Done" is explicit.** The loop exits based on tests passing, a build succeeding, a completion marker, or some other externally checkable condition — not the agent's own judgment.
- **Good for long-horizon work.** Migrations, refactors, multi-file changes, and other tasks that would blow past a single context window become tractable because each iteration only has to make incremental progress.

Originally described by Geoffrey Huntley in May 2025.

## Chief

Chief is a terminal utility that runs Ralph Wiggum Loops. It's the thing that actually sits in the terminal, invokes the agent with the prompt, watches for the stop condition, and re-invokes until the work is done. Used for the early graphs; now superseded by the orchestrator for new work. The `.chief/` directory contains legacy PRDs from this era.

## Orchestrator

The orchestrator (`scripts/orchestrate.mjs`) is a Node script that runs on cron and implements the project pipeline. It's a Ralph Wiggum Loop variant: instead of repeating the same prompt, it inspects the filesystem state of all projects, picks the highest-priority one with pending work, constructs a phase-appropriate prompt, and spawns Claude Code to do one unit of work.

Key properties:

- **File-based state machine.** Each project's phase is tracked by a `status` file. The orchestrator reads it, the agent updates it. No database, no external services.
- **One unit of work per tick.** Each cron invocation does one thing — one research pass, one ticket, one graph build. Keeps token usage predictable and makes the pipeline crash-safe.
- **Self-sustaining.** When all projects are complete or awaiting manual deploy, the orchestrator generates a new question automatically. If Jason forgets about the laptop for days, it keeps working.
- **Priority-driven.** Projects with lower `priority` numbers get worked first. Jason's manual projects (priority 1–10) always jump the queue ahead of auto-generated ones (priority 50).

## Project phases

The lifecycle of a project, tracked by the `status` file in `projects/<slug>/`:

| Phase | What happens | Automated? |
|-------|-------------|------------|
| `explore` | 2–3 open-ended research passes from different angles | Yes |
| `plan` | Define data format, break question into research tickets | Yes |
| `research` | Execute tickets one per cron tick, collect results | Yes |
| `graph` | Build TypeScript data file + Vue component + chart | Yes |
| `review` | Sanity-check: typecheck, build, data validation | Yes |
| `deploy` | Push to S3, update root index | Manual |
| `done` | Complete, ignored by orchestrator | — |
