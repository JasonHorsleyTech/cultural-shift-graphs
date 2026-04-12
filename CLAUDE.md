# cultural-shift-graphs

See `terminology.md` for project-specific terms (Ralph Wiggum Loop, chief).

## What this project is

A personal site for publishing reactive graphs about cultural-shift hypotheses Jason has but has never had time to research by hand. The workflow is:

1. Jason writes down a hypothesis (e.g. "children's movies over the last 100 years have shifted from 'real villains, real conflict' to 'imagined villains, conflict-as-misunderstanding'").
2. That hypothesis becomes the basis of a PRD.
3. `chief` runs a Ralph Wiggum Loop that has Claude agents go research the hypothesis **as objectively as they can** — gathering data, classifying it, pushing results into the repo.
4. The resulting dataset gets rendered as a reactive graph on a page of the site.
5. Jason shows it to his friends to prove he's right and they're wrong. That is the entire point. Optimize for "at the drop of a hat."

### Example hypothesis (for calibration)

> Over the last ~100 years, children's media (movies and TV a child might plausibly see) has shifted from stories with real villains and real conflict-to-defeat, toward stories where the "villain" is imagined and the conflict resolves through correcting a misunderstanding.

A good research run for this hypothesis would walk the full Disney catalog (and other major children's media) decade by decade, classify each title along that axis as objectively as possible, and produce a dataset that the frontend can graph to show the trend (or absence of one).

## Tech stack (decided)

- **Build tool:** Vite 6, with `npm run dev` for local development and hot module reloading. Multi-page mode — one HTML entry per graph, listed in `vite.config.js` under `build.rollupOptions.input`.
- **Framework:** Vue 3 (script-setup style, no router — each page is its own mount).
- **Styling:** Tailwind v4 via `@tailwindcss/vite`. Single `@import "tailwindcss";` in `src/style.css`. No `tailwind.config.js`, no postcss config.
- **Charts:** RoughViz (sketchy / xkcd-style). Consider this the default, not a commandment — you can swap to chart.xkcd, ECharts, Chart.js, ApexCharts, etc. if a specific hypothesis calls for a real chart. The data file should be chart-library agnostic.
- **Data files:** TypeScript, type-checked via `npm run typecheck`. See "Research workflow" below.
- **Backend:** None. There is no backend. Don't add one.
- **Output:** Static HTML files. `npm run build` produces a `dist/` folder of plain static HTML/CSS/JS that drops onto S3 with zero server-side anything.

## Routing

- Locally, pages are addressable at `domain/something`, `domain/something-else`, etc. — one route per hypothesis/graph.
- Those routes must build down to plain static HTML files (e.g. `something/index.html`) so they can be served directly from S3 with no routing layer.
- Keep the routing strategy boring enough that an S3 + domain setup Just Works without Lambda@Edge, CloudFront functions, or any other trickery.

## Deploy

Deploy is deliberately crude and manual:

1. Jason pastes AWS credentials into the terminal.
2. Claude (whatever agent is driving at the time) runs the build and pushes the static files to the S3 bucket by hand.
3. Claude links the domain path (`domain/something`) to the corresponding static HTML file.
4. Done.

No CI, no pipelines, no IaC unless Jason explicitly asks. S3 is, per Jason, "the best motherfucking infrastructure there."

## Research workflow (default plan for a new hypothesis)

This is the default shape for a hypothesis PRD. It's a starting point — deviate when it makes sense for a particular hypothesis, but if you're not sure, follow this.

**Per-hypothesis assets**, given a slug like `disney-villains`:

- `src/data/<slug>.ts` — TypeScript file with a `type` definition and an exported const array of entries. One entry per research unit (one movie, one album, one show, etc.). Include enough metadata (year, decade bucket, title, etc.) that the chart layer can slice/aggregate later without going back to the agents.
- `<slug>/index.html` — top-level directory with an HTML entry file that mounts the graph page. This becomes `/slug/` during `npm run dev` and `dist/<slug>/index.html` after `npm run build`.
- `src/<slug>.js` — per-page mount script (creates the Vue app and mounts it).
- `src/<Slug>.vue` — the graph component. Imports data from `./data/<slug>.ts`, does any aggregation, renders the chart.
- New entry in `vite.config.js` → `build.rollupOptions.input` so the build emits the page.

**Default PRD ticket shape** — tickets run sequentially in a Ralph Wiggum Loop, so each one can assume prior tickets completed. Rough sequence:

1. **Scaffold ticket.** Create `src/data/<slug>.ts` with the `type` definition and an empty exported array. Add the page's Vite entry, HTML file, mount script, and a placeholder Vue component that renders "no data yet". Run `npm run typecheck` and confirm the dev server still boots.
2. **One ticket per research unit** (one per movie, one per album, …). The ticket spec should include:
   - What to research (specific title / subject)
   - What angles to consider
   - A reminder to be as objective as possible (the joke only lands if the data is real)
   - The scoring rubric for whatever metric the hypothesis uses
   - Instructions to append a single new entry to the array in `src/data/<slug>.ts` with all required metadata
   - Instructions to run `npm run typecheck` after editing and confirm it passes
   Because tickets run sequentially, parallel edit conflicts aren't a concern — each agent sees the file as the previous agent left it.
3. **Graph ticket (penultimate).** With the data file now full, build / refine the graph. Pick chart type, compute any aggregations (in the Vue component, not the data file), choose axis labels, roughness, margins, whatever. Check it renders correctly in the dev server. The data file should not be modified at this stage.
4. **Deploy ticket (final).** Run `npm run build`, deploy the resulting `dist/` to S3, update the root `index.html`'s list of graphs to link to the new page, re-deploy the root. Confirm the new `/slug/` URL renders.

**Things this workflow deliberately doesn't lock down:**

- Chart type and library choice — the graph ticket can pick whatever fits the data.
- Aggregation strategy — per-decade average, per-year count, stacked bar, whatever.
- Where to get the research data — agents are free to use web search, Wikipedia, IMDB, their own training knowledge, etc. Whatever produces the most honest numbers.
- Whether a hypothesis needs exactly four ticket types. A complex hypothesis may want a pre-research scoping ticket, a mid-way sanity check, etc. Add tickets as needed.

**The only hard rules** of the workflow:

- One TS data file per hypothesis. Sequential append-only edits during research. Must always typecheck.
- One new Vite entry + HTML + Vue component per hypothesis.
- Root `index.html` lists all graphs; it gets updated every time a new one ships.
- Data file stays chart-library-agnostic — no RoughViz / chart.xkcd specific shapes in there.

## Working norms

- This is a personal project. Favor simple, direct solutions over "proper" ones. Don't over-engineer.
- Research agents should aim for objectivity even when the hypothesis is pointed — the graphs are only fun if the data is honest. If the data contradicts the hypothesis, the graph should show that.
- Each hypothesis/page should be independently shippable. Don't couple them.
- Keep the data file dumb and append-only. Aggregation logic lives in the Vue component, not the data file.

---

## Footnotes

- **PRDs are executed in a Ralph Wiggum Loop.** If I ask you to write a PRD, assume each item in the PRD will be picked up and executed by other agents running in a Ralph Wiggum Loop. You do not need to worry about how those items will be triggered or sequenced — that is outside the scope of the PRD itself and is handled by `chief` (the terminal utility that runs the loop). Write PRD items so they are individually actionable by a fresh agent with no prior context.
