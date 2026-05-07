# Graph already built (preemptively, 2026-05-07)

The graph for this project already exists — built by Jason + Claude on 2026-05-07
while research was still at 21/47 tickets. The orchestrator's `graph` phase will
overwrite it if allowed to run.

## Files this project owns

- `src/data/sexual-language-index.json` — generated dataset (DO NOT hand-edit)
- `src/data/sexual-language-index.ts` — typed wrapper around the JSON
- `src/SexualLanguageIndex.vue` — multi-tab dashboard
- `src/sexual-language-index.js` — mount script
- `graphable/sexual-language-index/index.html` — entry
- vite.config.js entry: `sexualLanguageIndex`
- Listed in `src/GraphableLanding.vue` under Research

## When research finishes

1. Re-run `node scripts/build-sli-data.mjs` to regenerate the JSON from the
   latest `data/enriched/*.jsonl` files.
2. `npm run typecheck && npm run build` to verify.
3. Set this project's `status` directly to `review` (or `deploy` if reviewed).
   **Skip the `graph` phase entirely** — it will rebuild from scratch and lose
   the existing dashboard.

## After every research tick (optional but cheap)

If you want the live graph to reflect new languages as they land, just re-run
`node scripts/build-sli-data.mjs && npm run build`. Nothing else needs to change.
