# Graph conventions

Quick reference so you don't have to peek at existing files. Three graph types: **research**, **one-off**, and **sketch**.

## File checklist (all types)

Given a slug like `my-cool-graph`:

| File | What it does |
|------|-------------|
| `graphable/<slug>/index.html` | HTML entry point (see template below) |
| `src/<slug>.js` | Mount script — creates Vue app, imports `./style.css` |
| `src/<PascalSlug>.vue` | Graph component (Chart.js, theme toggle, footer link) |
| `vite.config.js` | Add entry under `build.rollupOptions.input` |
| `src/GraphableLanding.vue` | Add link under the correct section (Research, One-offs, or Sketches) |

Research graphs also get `src/data/<slug>.ts` and a full `projects/<slug>/` directory. One-offs may use `src/data/<slug>.ts` if data volume justifies separation, otherwise inline. Sketches always inline.

## HTML entry template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Graph Title — graphable</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/<slug>.js"></script>
  </body>
</html>
```

## Mount script template

```js
import { createApp } from 'vue'
import MyGraph from './MyGraph.vue'
import './style.css'

createApp(MyGraph).mount('#app')
```

## Vue component essentials

Every graph component must:

1. Import and call `initTheme()` from `./theme.js` on mount
2. Include a dark/light toggle button that calls `toggleTheme()` and rebuilds charts
3. Read colors from `chartColors()` when building Chart.js configs
4. Rebuild charts on theme switch (colors are CSS variables, Chart.js doesn't auto-update)
5. Include a footer link back to `/graphable/`

## Research vs. one-off vs. sketch

### Research graphs

- Full project lifecycle: explore → plan → research → graph → review → deploy
- TypeScript data file in `src/data/<slug>.ts` with typed exports
- Data is real, gathered by AI agents across dozens of tickets
- Component imports data from the `.ts` file, does aggregation/charting
- Listed under **Research** on the landing page with a parenthetical stat

### One-off graphs

- No project directory, no research pipeline. Built in a single conversation.
- Data is real but lightweight — a few searches, then triangulated estimates
- **Be transparent about methodology in the graph itself.** Show error bands or labeled estimate ranges. Cite sources visibly. The honesty is the point.
- Data may be inline in the Vue component or in a thin `src/data/<slug>.ts` if there's enough of it
- Listed under **One-offs** on the landing page with a parenthetical hook

### Sketch graphs

- No project directory, no research pipeline, no data file
- Built in a single conversation — Jason describes a concept, you workshop it, build it, done
- Data is a `const` array inline in the Vue component — illustrative, not real
- The shape of the graph IS the point (think XKCD)
- Keep the component lean: chart + title + subtitle + theme toggle + footer
- Listed under **Sketches** on the landing page

## Vite config entry

```js
mySlug: resolve(root, 'graphable/my-slug/index.html'),
```

Add it alphabetically or at the end of the `input` object in `vite.config.js`.

## Landing page entry

Research graphs:
```html
<li>
  <a href="/graphable/<slug>/" class="underline ...">Title</a>
  <span class="text-[var(--text-muted)] text-sm ml-2">(brief stat)</span>
</li>
```

One-off graphs: same format, parenthetical is a brief hook ("estimated, with error bars" or similar — signal that uncertainty is acknowledged).

Sketch graphs: same format, but the parenthetical is a concept description rather than a data stat.
