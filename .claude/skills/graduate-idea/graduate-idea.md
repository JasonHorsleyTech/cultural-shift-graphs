---
name: graduate-idea
description: Promote a workshopped messy idea from ideas/ into the projects/ pipeline so the cron orchestrator picks it up. Use when Jason says an idea is "ready", "good enough", "ship it to the pipeline", or similar.
---

# graduate-idea

Take a messy idea that's been workshopped in `ideas/` and graduate it into a proper project in `projects/`.

## When to use

Jason says something like:
- "This one's ready"
- "Move it over"
- "Graduate [idea name]"
- "Send it to the pipeline"
- "This is baked enough"

## What to do

1. **Read the idea file** in `ideas/<slug>.md`. It will contain raw notes, conversation fragments, refined angles, data source ideas, etc.

2. **Distill into a question.md.** Condense everything into a clear, specific question or hypothesis. Include:
   - The core question (one sentence)
   - Why it's interesting or what Jason wants to prove/disprove
   - Any specific angles, data sources, or methodological notes that came up during workshopping
   - Keep it concise but don't lose the nuance — the explore phase agents will use this as their starting brief

3. **Pick a slug.** Use the idea's existing filename slug unless a better one is obvious from the refined question.

4. **Create the project folder:**
   ```
   projects/<slug>/
     question.md    # The distilled question (from step 2)
     priority       # Ask Jason, or default to 10
     status         # Write: explore
   ```

5. **Delete the idea file** from `ideas/<slug>.md`. The idea has graduated — all useful context is now in `question.md`. Don't leave duplicates.

6. **Confirm to Jason** what you created and where. Mention the slug and priority so he can adjust if needed.

## Priority guidance

- 1-5: Jason is actively excited about this, wants it soon
- 6-10: Jason cares, normal queue position
- 11-49: Low priority, will get done eventually
- 50: Auto-generated ideas (don't use this for manual graduates)

Ask Jason what priority he wants. If he doesn't care, use 10.

## What NOT to do

- Don't start the explore phase yourself. The cron orchestrator handles that.
- Don't create tickets, plans, or research folders. That's the pipeline's job.
- Don't leave the idea file around after graduating. Clean cut.
