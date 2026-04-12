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

Chief is a terminal utility that runs Ralph Wiggum Loops. It's the thing that actually sits in the terminal, invokes the agent with the prompt, watches for the stop condition, and re-invokes until the work is done. From the perspective of anything inside the loop (including any PRDs or task lists being worked through), chief is the trigger — individual agents don't need to know how or when they'll be re-invoked, only that they will be.
