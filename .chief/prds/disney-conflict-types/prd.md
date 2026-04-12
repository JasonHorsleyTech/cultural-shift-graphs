# PRD: Animated Children's Film Conflict Types

## Introduction

This PRD drives a comprehensive research effort to test the following hypothesis:

> Over the last ~100 years, animated children's films have shifted from stories
> with **real villains and real conflict resolved through confrontation** toward
> stories where the **conflict is a misunderstanding resolved through empathy,
> communication, or self-understanding** — and the villain was never truly evil,
> was imagined, or becomes an ally.

The research covers **every major animated children's film** from the earliest
Disney shorts (1928) through present day (2025), spanning Walt Disney Animation,
Pixar, DreamWorks, Illumination, Blue Sky, Sony, Laika, Studio Ghibli, Aardman,
Warner Bros., Don Bluth, Cartoon Saloon, Rankin/Bass, and other notable studios.

**Total films to research: 240**

Each film is scored on a single floating-point scale (0.0–1.0) representing where
it falls on the conflict spectrum. The resulting dataset will be graphed to show
whether the hypothesized shift is real.

## Goals

- Research and objectively score every major animated children's film on the conflict spectrum
- Build a type-safe TypeScript dataset suitable for any chart library
- Produce a reactive graph page that visualizes the trend (or absence of one)
- Ship the page to the live site at `/disney-conflict-types/`

---

## Research Guidelines

**Every research ticket (US-002 through US-241) follows the same process.** Read this section carefully — it is the shared rubric for all research tickets.

### The Conflict Score

Each film receives a single `conflictScore` value between `0.0` and `1.0`:

| Score | Meaning |
|-------|---------|
| **1.0** | Pure real villain. The antagonist is unambiguously evil. The conflict is existential and resolved by confronting/defeating evil. (e.g., Sleeping Beauty, The Lion King) |
| **0.75** | Clear villain with real stakes, but some nuance — maybe the villain has sympathetic motivations, or the resolution involves more than just combat. (e.g., The Hunchback of Notre Dame, Kung Fu Panda) |
| **0.5** | Mixed. There may be a villain, but the core conflict is something else — survival, self-discovery, a journey. Or there are real stakes but the 'villain' is more of an obstacle than an evil force. (e.g., Finding Nemo, Up) |
| **0.25** | Conflict is primarily internal or interpersonal. If there's an antagonist, they're misguided rather than evil, and the resolution comes through understanding, empathy, or personal growth. (e.g., Frozen, Brave) |
| **0.0** | No villain at all. The conflict is entirely about misunderstanding, self-acceptance, family dynamics, or emotional growth. Resolution is through communication and empathy. (e.g., Inside Out, Encanto, Turning Red) |

**Use the full range.** These examples are anchors, not the only valid scores. A film can be 0.63 or 0.18 — use your judgment. Think through the film's plot: who is the antagonist (if any), what are the real stakes, and how is the conflict actually resolved?

**Be objective.** The hypothesis predicts a shift over time. If a modern film has a real villain (e.g., Puss in Boots: The Last Wish), score it high. If a classic film has no real villain (e.g., Bambi, Dumbo), score it low. The graph is only interesting if the data is honest.

### How to research a film

1. Recall or look up the film's plot, characters, and conflict structure.
2. Identify: Is there a villain? Is the villain real/evil or misguided/imagined? What are the stakes? How is the conflict resolved — through confrontation/defeat or through understanding/empathy/growth?
3. Consider multiple conflict threads if they exist. Weight the primary conflict most heavily, but factor in subplots.
4. Assign a `conflictScore` between 0.0 and 1.0.
5. Write a brief `reasoning` string (1-3 sentences) explaining your score.

### How to record your research

Append **one entry** to the array in `src/data/disney-conflict-types.ts`:

```typescript
{
  title: "Film Title",
  releaseYear: 1994,
  decade: "1990s",
  studio: "Walt Disney Animation",
  conflictScore: 0.85,
  reasoning: "Brief explanation of the score.",
},
```

Then run `npm run typecheck` and confirm it passes. If it fails, fix the issue before marking the ticket done.

### Important notes

- If the film has not been released yet (you cannot find reliable plot information), skip the ticket and mark it done with a comment explaining why.
- Package films (e.g., Make Mine Music, Melody Time) that are collections of shorts: score based on the overall tone and conflict style of the segments taken together.
- Sequels should be scored independently — they often have different conflict structures than their predecessors.
- For anthology/compilation films like Fantasia, score based on the dominant conflict patterns across segments (or note if there isn't really a conflict structure at all).

---

## User Stories

### US-001: Scaffold the disney-conflict-types page
**Status:** in-progress
**Priority:** 1
**Description:** As a developer, I need the data file, page entry, and component scaffolded so that research agents can start appending data.

**Tasks:**

1. Create `src/data/disney-conflict-types.ts` with the following type definition and an empty exported array:

```typescript
export type Decade =
  | '1920s' | '1930s' | '1940s' | '1950s' | '1960s'
  | '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | '2020s';

export type ConflictEntry = {
  /** Film title as commonly known. */
  title: string;
  /** Theatrical release year. */
  releaseYear: number;
  /** Decade bucket, e.g. '1990s'. */
  decade: Decade;
  /** Production studio. */
  studio: string;
  /**
   * 0.0–1.0 conflict spectrum score.
   * 1.0 = real villain, real stakes, resolved by confrontation/defeating evil.
   * 0.0 = no villain, conflict is misunderstanding/internal, resolved by empathy/growth.
   */
  conflictScore: number;
  /** Brief reasoning for the assigned score (1-3 sentences). */
  reasoning: string;
};

export const conflictData: ConflictEntry[] = [];
```

2. Create `disney-conflict-types/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animated conflict types over time — cultural-shift-graphs</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/disney-conflict-types.js"></script>
  </body>
</html>
```

3. Create `src/disney-conflict-types.js`:

```javascript
import { createApp } from 'vue'
import DisneyConflictTypes from './DisneyConflictTypes.vue'
import './style.css'

createApp(DisneyConflictTypes).mount('#app')
```

4. Create `src/DisneyConflictTypes.vue` — a placeholder component that imports the data and renders "No data yet — research in progress. {n} of 240 films scored."

5. Add the new entry to `vite.config.js` under `build.rollupOptions.input`:
```javascript
disneyConflictTypes: resolve(root, 'disney-conflict-types/index.html'),
```

6. Run `npm run typecheck` and `npm run dev` — confirm both work.

**Acceptance Criteria:**
- [ ] `src/data/disney-conflict-types.ts` exists with type definition and empty array
- [ ] `disney-conflict-types/index.html` exists and is wired up
- [ ] `src/disney-conflict-types.js` mount script exists
- [ ] `src/DisneyConflictTypes.vue` placeholder component exists
- [ ] New entry added to `vite.config.js`
- [ ] `npm run typecheck` passes
- [ ] Dev server boots and `/disney-conflict-types/` renders the placeholder

---

## Research Tickets

> **All research tickets follow the process described in the Research Guidelines section above.**
> Each ticket researches one film, assigns a conflict score, appends an entry to
> `src/data/disney-conflict-types.ts`, and runs `npm run typecheck`.

### US-002: Research "Steamboat Willie" (1928)
**Priority:** 2
**Film:** Steamboat Willie (1928) — Disney (Short)
**Decade:** 1920s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Steamboat Willie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-003: Research "Three Little Pigs" (1933)
**Priority:** 2
**Film:** Three Little Pigs (1933) — Disney (Short)
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Three Little Pigs" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-004: Research "The Tortoise and the Hare" (1935)
**Priority:** 2
**Film:** The Tortoise and the Hare (1935) — Disney (Short)
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Tortoise and the Hare" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-005: Research "Snow White and the Seven Dwarfs" (1937)
**Priority:** 2
**Film:** Snow White and the Seven Dwarfs (1937) — Walt Disney Animation
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Snow White and the Seven Dwarfs" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-006: Research "Brave Little Tailor" (1938)
**Priority:** 2
**Film:** Brave Little Tailor (1938) — Disney (Short)
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Brave Little Tailor" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-007: Research "Ferdinand the Bull" (1938)
**Priority:** 2
**Film:** Ferdinand the Bull (1938) — Disney (Short)
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ferdinand the Bull" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-008: Research "Gulliver's Travels" (1939)
**Priority:** 2
**Film:** Gulliver's Travels (1939) — Fleischer Studios
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Gulliver's Travels" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-009: Research "The Ugly Duckling" (1939)
**Priority:** 2
**Film:** The Ugly Duckling (1939) — Disney (Short)
**Decade:** 1930s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Ugly Duckling" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-010: Research "Fantasia" (1940)
**Priority:** 2
**Film:** Fantasia (1940) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Fantasia" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-011: Research "Pinocchio" (1940)
**Priority:** 2
**Film:** Pinocchio (1940) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Pinocchio" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-012: Research "Dumbo" (1941)
**Priority:** 2
**Film:** Dumbo (1941) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Dumbo" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-013: Research "Bambi" (1942)
**Priority:** 2
**Film:** Bambi (1942) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Bambi" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-014: Research "Saludos Amigos" (1943)
**Priority:** 2
**Film:** Saludos Amigos (1943) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Saludos Amigos" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-015: Research "The Three Caballeros" (1945)
**Priority:** 2
**Film:** The Three Caballeros (1945) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Three Caballeros" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-016: Research "Make Mine Music" (1946)
**Priority:** 2
**Film:** Make Mine Music (1946) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Make Mine Music" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-017: Research "Fun and Fancy Free" (1947)
**Priority:** 2
**Film:** Fun and Fancy Free (1947) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Fun and Fancy Free" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-018: Research "Melody Time" (1948)
**Priority:** 2
**Film:** Melody Time (1948) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Melody Time" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-019: Research "The Adventures of Ichabod and Mr. Toad" (1949)
**Priority:** 2
**Film:** The Adventures of Ichabod and Mr. Toad (1949) — Walt Disney Animation
**Decade:** 1940s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Adventures of Ichabod and Mr. Toad" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-020: Research "Cinderella" (1950)
**Priority:** 2
**Film:** Cinderella (1950) — Walt Disney Animation
**Decade:** 1950s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Cinderella" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-021: Research "Alice in Wonderland" (1951)
**Priority:** 2
**Film:** Alice in Wonderland (1951) — Walt Disney Animation
**Decade:** 1950s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Alice in Wonderland" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-022: Research "Peter Pan" (1953)
**Priority:** 2
**Film:** Peter Pan (1953) — Walt Disney Animation
**Decade:** 1950s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Peter Pan" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-023: Research "Lady and the Tramp" (1955)
**Priority:** 2
**Film:** Lady and the Tramp (1955) — Walt Disney Animation
**Decade:** 1950s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Lady and the Tramp" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-024: Research "Sleeping Beauty" (1959)
**Priority:** 2
**Film:** Sleeping Beauty (1959) — Walt Disney Animation
**Decade:** 1950s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Sleeping Beauty" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-025: Research "One Hundred and One Dalmatians" (1961)
**Priority:** 2
**Film:** One Hundred and One Dalmatians (1961) — Walt Disney Animation
**Decade:** 1960s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "One Hundred and One Dalmatians" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-026: Research "The Sword in the Stone" (1963)
**Priority:** 2
**Film:** The Sword in the Stone (1963) — Walt Disney Animation
**Decade:** 1960s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Sword in the Stone" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-027: Research "The Jungle Book" (1967)
**Priority:** 2
**Film:** The Jungle Book (1967) — Walt Disney Animation
**Decade:** 1960s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Jungle Book" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-028: Research "The Aristocats" (1970)
**Priority:** 2
**Film:** The Aristocats (1970) — Walt Disney Animation
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Aristocats" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-029: Research "Charlotte's Web" (1973)
**Priority:** 2
**Film:** Charlotte's Web (1973) — Hanna-Barbera
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Charlotte's Web" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-030: Research "Robin Hood" (1973)
**Priority:** 2
**Film:** Robin Hood (1973) — Walt Disney Animation
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Robin Hood" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-031: Research "The Hobbit" (1977)
**Priority:** 2
**Film:** The Hobbit (1977) — Rankin/Bass
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Hobbit" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-032: Research "The Many Adventures of Winnie the Pooh" (1977)
**Priority:** 2
**Film:** The Many Adventures of Winnie the Pooh (1977) — Walt Disney Animation
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Many Adventures of Winnie the Pooh" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-033: Research "The Rescuers" (1977)
**Priority:** 2
**Film:** The Rescuers (1977) — Walt Disney Animation
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Rescuers" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-034: Research "Watership Down" (1978)
**Priority:** 2
**Film:** Watership Down (1978) — Nepenthe Productions
**Decade:** 1970s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Watership Down" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-035: Research "The Fox and the Hound" (1981)
**Priority:** 2
**Film:** The Fox and the Hound (1981) — Walt Disney Animation
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Fox and the Hound" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-036: Research "The Last Unicorn" (1982)
**Priority:** 2
**Film:** The Last Unicorn (1982) — Rankin/Bass
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Last Unicorn" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-037: Research "The Secret of NIMH" (1982)
**Priority:** 2
**Film:** The Secret of NIMH (1982) — Don Bluth
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Secret of NIMH" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-038: Research "Nausicaä of the Valley of the Wind" (1984)
**Priority:** 2
**Film:** Nausicaä of the Valley of the Wind (1984) — Studio Ghibli
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Nausicaä of the Valley of the Wind" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-039: Research "The Black Cauldron" (1985)
**Priority:** 2
**Film:** The Black Cauldron (1985) — Walt Disney Animation
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Black Cauldron" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-040: Research "An American Tail" (1986)
**Priority:** 2
**Film:** An American Tail (1986) — Don Bluth
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "An American Tail" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-041: Research "Castle in the Sky" (1986)
**Priority:** 2
**Film:** Castle in the Sky (1986) — Studio Ghibli
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Castle in the Sky" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-042: Research "The Great Mouse Detective" (1986)
**Priority:** 2
**Film:** The Great Mouse Detective (1986) — Walt Disney Animation
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Great Mouse Detective" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-043: Research "My Neighbor Totoro" (1988)
**Priority:** 2
**Film:** My Neighbor Totoro (1988) — Studio Ghibli
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "My Neighbor Totoro" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-044: Research "Oliver & Company" (1988)
**Priority:** 2
**Film:** Oliver & Company (1988) — Walt Disney Animation
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Oliver & Company" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-045: Research "The Land Before Time" (1988)
**Priority:** 2
**Film:** The Land Before Time (1988) — Don Bluth
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Land Before Time" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-046: Research "All Dogs Go to Heaven" (1989)
**Priority:** 2
**Film:** All Dogs Go to Heaven (1989) — Don Bluth
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "All Dogs Go to Heaven" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-047: Research "Kiki's Delivery Service" (1989)
**Priority:** 2
**Film:** Kiki's Delivery Service (1989) — Studio Ghibli
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Kiki's Delivery Service" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-048: Research "The Little Mermaid" (1989)
**Priority:** 2
**Film:** The Little Mermaid (1989) — Walt Disney Animation
**Decade:** 1980s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Little Mermaid" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-049: Research "The Rescuers Down Under" (1990)
**Priority:** 2
**Film:** The Rescuers Down Under (1990) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Rescuers Down Under" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-050: Research "Beauty and the Beast" (1991)
**Priority:** 2
**Film:** Beauty and the Beast (1991) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Beauty and the Beast" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-051: Research "Rock-A-Doodle" (1991)
**Priority:** 2
**Film:** Rock-A-Doodle (1991) — Don Bluth
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Rock-A-Doodle" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-052: Research "Aladdin" (1992)
**Priority:** 2
**Film:** Aladdin (1992) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Aladdin" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-053: Research "FernGully: The Last Rainforest" (1992)
**Priority:** 2
**Film:** FernGully: The Last Rainforest (1992) — Kroyer Films
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "FernGully: The Last Rainforest" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-054: Research "Batman: Mask of the Phantasm" (1993)
**Priority:** 2
**Film:** Batman: Mask of the Phantasm (1993) — Warner Bros. Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Batman: Mask of the Phantasm" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-055: Research "The Lion King" (1994)
**Priority:** 2
**Film:** The Lion King (1994) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Lion King" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-056: Research "The Swan Princess" (1994)
**Priority:** 2
**Film:** The Swan Princess (1994) — Nest Entertainment
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Swan Princess" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-057: Research "Thumbelina" (1994)
**Priority:** 2
**Film:** Thumbelina (1994) — Don Bluth
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Thumbelina" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-058: Research "Balto" (1995)
**Priority:** 2
**Film:** Balto (1995) — Amblin Entertainment
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Balto" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-059: Research "Pocahontas" (1995)
**Priority:** 2
**Film:** Pocahontas (1995) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Pocahontas" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-060: Research "Toy Story" (1995)
**Priority:** 2
**Film:** Toy Story (1995) — Pixar
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Toy Story" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-061: Research "The Hunchback of Notre Dame" (1996)
**Priority:** 2
**Film:** The Hunchback of Notre Dame (1996) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Hunchback of Notre Dame" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-062: Research "Anastasia" (1997)
**Priority:** 2
**Film:** Anastasia (1997) — Fox Animation / Don Bluth
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Anastasia" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-063: Research "Hercules" (1997)
**Priority:** 2
**Film:** Hercules (1997) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Hercules" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-064: Research "Antz" (1998)
**Priority:** 2
**Film:** Antz (1998) — DreamWorks Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Antz" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-065: Research "Mulan" (1998)
**Priority:** 2
**Film:** Mulan (1998) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Mulan" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-066: Research "Quest for Camelot" (1998)
**Priority:** 2
**Film:** Quest for Camelot (1998) — Warner Bros. Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Quest for Camelot" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-067: Research "The Prince of Egypt" (1998)
**Priority:** 2
**Film:** The Prince of Egypt (1998) — DreamWorks Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Prince of Egypt" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-068: Research "The Rugrats Movie" (1998)
**Priority:** 2
**Film:** The Rugrats Movie (1998) — Nickelodeon Movies
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Rugrats Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-069: Research "Fantasia 2000" (1999)
**Priority:** 2
**Film:** Fantasia 2000 (1999) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Fantasia 2000" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-070: Research "Tarzan" (1999)
**Priority:** 2
**Film:** Tarzan (1999) — Walt Disney Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Tarzan" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-071: Research "The Iron Giant" (1999)
**Priority:** 2
**Film:** The Iron Giant (1999) — Warner Bros. Animation
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Iron Giant" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-072: Research "Toy Story 2" (1999)
**Priority:** 2
**Film:** Toy Story 2 (1999) — Pixar
**Decade:** 1990s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Toy Story 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-073: Research "Chicken Run" (2000)
**Priority:** 2
**Film:** Chicken Run (2000) — Aardman / DreamWorks
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Chicken Run" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-074: Research "Dinosaur" (2000)
**Priority:** 2
**Film:** Dinosaur (2000) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Dinosaur" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-075: Research "The Road to El Dorado" (2000)
**Priority:** 2
**Film:** The Road to El Dorado (2000) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Road to El Dorado" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-076: Research "Titan A.E." (2000)
**Priority:** 2
**Film:** Titan A.E. (2000) — Fox Animation / Don Bluth
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Titan A.E." appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-077: Research "Atlantis: The Lost Empire" (2001)
**Priority:** 2
**Film:** Atlantis: The Lost Empire (2001) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Atlantis: The Lost Empire" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-078: Research "Jimmy Neutron: Boy Genius" (2001)
**Priority:** 2
**Film:** Jimmy Neutron: Boy Genius (2001) — Nickelodeon Movies
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Jimmy Neutron: Boy Genius" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-079: Research "Monsters, Inc." (2001)
**Priority:** 2
**Film:** Monsters, Inc. (2001) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Monsters, Inc." appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-080: Research "Shrek" (2001)
**Priority:** 2
**Film:** Shrek (2001) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Shrek" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-081: Research "Spirited Away" (2001)
**Priority:** 2
**Film:** Spirited Away (2001) — Studio Ghibli
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Spirited Away" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-082: Research "Ice Age" (2002)
**Priority:** 2
**Film:** Ice Age (2002) — Blue Sky Studios
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ice Age" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-083: Research "Lilo & Stitch" (2002)
**Priority:** 2
**Film:** Lilo & Stitch (2002) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Lilo & Stitch" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-084: Research "Spirit: Stallion of the Cimarron" (2002)
**Priority:** 2
**Film:** Spirit: Stallion of the Cimarron (2002) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Spirit: Stallion of the Cimarron" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-085: Research "Treasure Planet" (2002)
**Priority:** 2
**Film:** Treasure Planet (2002) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Treasure Planet" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-086: Research "Brother Bear" (2003)
**Priority:** 2
**Film:** Brother Bear (2003) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Brother Bear" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-087: Research "Finding Nemo" (2003)
**Priority:** 2
**Film:** Finding Nemo (2003) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Finding Nemo" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-088: Research "Sinbad: Legend of the Seven Seas" (2003)
**Priority:** 2
**Film:** Sinbad: Legend of the Seven Seas (2003) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Sinbad: Legend of the Seven Seas" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-089: Research "Home on the Range" (2004)
**Priority:** 2
**Film:** Home on the Range (2004) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Home on the Range" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-090: Research "Howl's Moving Castle" (2004)
**Priority:** 2
**Film:** Howl's Moving Castle (2004) — Studio Ghibli
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Howl's Moving Castle" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-091: Research "Shark Tale" (2004)
**Priority:** 2
**Film:** Shark Tale (2004) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Shark Tale" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-092: Research "Shrek 2" (2004)
**Priority:** 2
**Film:** Shrek 2 (2004) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Shrek 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-093: Research "The Incredibles" (2004)
**Priority:** 2
**Film:** The Incredibles (2004) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Incredibles" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-094: Research "The SpongeBob SquarePants Movie" (2004)
**Priority:** 2
**Film:** The SpongeBob SquarePants Movie (2004) — Nickelodeon Movies
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The SpongeBob SquarePants Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-095: Research "Chicken Little" (2005)
**Priority:** 2
**Film:** Chicken Little (2005) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Chicken Little" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-096: Research "Hoodwinked!" (2005)
**Priority:** 2
**Film:** Hoodwinked! (2005) — Kanbar Entertainment
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Hoodwinked!" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-097: Research "Madagascar" (2005)
**Priority:** 2
**Film:** Madagascar (2005) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Madagascar" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-098: Research "Robots" (2005)
**Priority:** 2
**Film:** Robots (2005) — Blue Sky Studios
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Robots" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-099: Research "Wallace & Gromit: The Curse of the Were-Rabbit" (2005)
**Priority:** 2
**Film:** Wallace & Gromit: The Curse of the Were-Rabbit (2005) — Aardman / DreamWorks
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Wallace & Gromit: The Curse of the Were-Rabbit" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-100: Research "Cars" (2006)
**Priority:** 2
**Film:** Cars (2006) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Cars" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-101: Research "Flushed Away" (2006)
**Priority:** 2
**Film:** Flushed Away (2006) — Aardman / DreamWorks
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Flushed Away" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-102: Research "Ice Age: The Meltdown" (2006)
**Priority:** 2
**Film:** Ice Age: The Meltdown (2006) — Blue Sky Studios
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ice Age: The Meltdown" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-103: Research "Open Season" (2006)
**Priority:** 2
**Film:** Open Season (2006) — Sony Pictures Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Open Season" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-104: Research "Over the Hedge" (2006)
**Priority:** 2
**Film:** Over the Hedge (2006) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Over the Hedge" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-105: Research "Bee Movie" (2007)
**Priority:** 2
**Film:** Bee Movie (2007) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Bee Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-106: Research "Meet the Robinsons" (2007)
**Priority:** 2
**Film:** Meet the Robinsons (2007) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Meet the Robinsons" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-107: Research "Ratatouille" (2007)
**Priority:** 2
**Film:** Ratatouille (2007) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ratatouille" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-108: Research "Shrek the Third" (2007)
**Priority:** 2
**Film:** Shrek the Third (2007) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Shrek the Third" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-109: Research "Surf's Up" (2007)
**Priority:** 2
**Film:** Surf's Up (2007) — Sony Pictures Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Surf's Up" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-110: Research "Bolt" (2008)
**Priority:** 2
**Film:** Bolt (2008) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Bolt" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-111: Research "Horton Hears a Who!" (2008)
**Priority:** 2
**Film:** Horton Hears a Who! (2008) — Blue Sky Studios
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Horton Hears a Who!" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-112: Research "Kung Fu Panda" (2008)
**Priority:** 2
**Film:** Kung Fu Panda (2008) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Kung Fu Panda" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-113: Research "Madagascar: Escape 2 Africa" (2008)
**Priority:** 2
**Film:** Madagascar: Escape 2 Africa (2008) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Madagascar: Escape 2 Africa" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-114: Research "Ponyo" (2008)
**Priority:** 2
**Film:** Ponyo (2008) — Studio Ghibli
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ponyo" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-115: Research "WALL-E" (2008)
**Priority:** 2
**Film:** WALL-E (2008) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "WALL-E" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-116: Research "Cloudy with a Chance of Meatballs" (2009)
**Priority:** 2
**Film:** Cloudy with a Chance of Meatballs (2009) — Sony Pictures Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Cloudy with a Chance of Meatballs" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-117: Research "Coraline" (2009)
**Priority:** 2
**Film:** Coraline (2009) — Laika
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Coraline" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-118: Research "Ice Age: Dawn of the Dinosaurs" (2009)
**Priority:** 2
**Film:** Ice Age: Dawn of the Dinosaurs (2009) — Blue Sky Studios
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ice Age: Dawn of the Dinosaurs" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-119: Research "Monsters vs. Aliens" (2009)
**Priority:** 2
**Film:** Monsters vs. Aliens (2009) — DreamWorks Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Monsters vs. Aliens" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-120: Research "The Princess and the Frog" (2009)
**Priority:** 2
**Film:** The Princess and the Frog (2009) — Walt Disney Animation
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Princess and the Frog" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-121: Research "The Secret of Kells" (2009)
**Priority:** 2
**Film:** The Secret of Kells (2009) — Cartoon Saloon
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Secret of Kells" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-122: Research "Up" (2009)
**Priority:** 2
**Film:** Up (2009) — Pixar
**Decade:** 2000s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Up" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-123: Research "Despicable Me" (2010)
**Priority:** 2
**Film:** Despicable Me (2010) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Despicable Me" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-124: Research "How to Train Your Dragon" (2010)
**Priority:** 2
**Film:** How to Train Your Dragon (2010) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "How to Train Your Dragon" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-125: Research "Megamind" (2010)
**Priority:** 2
**Film:** Megamind (2010) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Megamind" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-126: Research "Shrek Forever After" (2010)
**Priority:** 2
**Film:** Shrek Forever After (2010) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Shrek Forever After" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-127: Research "Tangled" (2010)
**Priority:** 2
**Film:** Tangled (2010) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Tangled" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-128: Research "Toy Story 3" (2010)
**Priority:** 2
**Film:** Toy Story 3 (2010) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Toy Story 3" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-129: Research "Arthur Christmas" (2011)
**Priority:** 2
**Film:** Arthur Christmas (2011) — Aardman / Sony
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Arthur Christmas" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-130: Research "Cars 2" (2011)
**Priority:** 2
**Film:** Cars 2 (2011) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Cars 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-131: Research "Kung Fu Panda 2" (2011)
**Priority:** 2
**Film:** Kung Fu Panda 2 (2011) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Kung Fu Panda 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-132: Research "Puss in Boots" (2011)
**Priority:** 2
**Film:** Puss in Boots (2011) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Puss in Boots" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-133: Research "Rango" (2011)
**Priority:** 2
**Film:** Rango (2011) — Paramount / ILM
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Rango" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-134: Research "Rio" (2011)
**Priority:** 2
**Film:** Rio (2011) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Rio" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-135: Research "Winnie the Pooh" (2011)
**Priority:** 2
**Film:** Winnie the Pooh (2011) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Winnie the Pooh" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-136: Research "Brave" (2012)
**Priority:** 2
**Film:** Brave (2012) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Brave" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-137: Research "Hotel Transylvania" (2012)
**Priority:** 2
**Film:** Hotel Transylvania (2012) — Sony Pictures Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Hotel Transylvania" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-138: Research "Ice Age: Continental Drift" (2012)
**Priority:** 2
**Film:** Ice Age: Continental Drift (2012) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ice Age: Continental Drift" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-139: Research "Madagascar 3: Europe's Most Wanted" (2012)
**Priority:** 2
**Film:** Madagascar 3: Europe's Most Wanted (2012) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Madagascar 3: Europe's Most Wanted" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-140: Research "ParaNorman" (2012)
**Priority:** 2
**Film:** ParaNorman (2012) — Laika
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "ParaNorman" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-141: Research "Rise of the Guardians" (2012)
**Priority:** 2
**Film:** Rise of the Guardians (2012) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Rise of the Guardians" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-142: Research "The Lorax" (2012)
**Priority:** 2
**Film:** The Lorax (2012) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Lorax" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-143: Research "The Pirates! Band of Misfits" (2012)
**Priority:** 2
**Film:** The Pirates! Band of Misfits (2012) — Aardman
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Pirates! Band of Misfits" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-144: Research "Wreck-It Ralph" (2012)
**Priority:** 2
**Film:** Wreck-It Ralph (2012) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Wreck-It Ralph" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-145: Research "Cloudy with a Chance of Meatballs 2" (2013)
**Priority:** 2
**Film:** Cloudy with a Chance of Meatballs 2 (2013) — Sony Pictures Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Cloudy with a Chance of Meatballs 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-146: Research "Despicable Me 2" (2013)
**Priority:** 2
**Film:** Despicable Me 2 (2013) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Despicable Me 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-147: Research "Epic" (2013)
**Priority:** 2
**Film:** Epic (2013) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Epic" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-148: Research "Frozen" (2013)
**Priority:** 2
**Film:** Frozen (2013) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Frozen" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-149: Research "Monsters University" (2013)
**Priority:** 2
**Film:** Monsters University (2013) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Monsters University" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-150: Research "The Croods" (2013)
**Priority:** 2
**Film:** The Croods (2013) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Croods" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-151: Research "Turbo" (2013)
**Priority:** 2
**Film:** Turbo (2013) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Turbo" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-152: Research "Big Hero 6" (2014)
**Priority:** 2
**Film:** Big Hero 6 (2014) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Big Hero 6" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-153: Research "How to Train Your Dragon 2" (2014)
**Priority:** 2
**Film:** How to Train Your Dragon 2 (2014) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "How to Train Your Dragon 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-154: Research "Mr. Peabody & Sherman" (2014)
**Priority:** 2
**Film:** Mr. Peabody & Sherman (2014) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Mr. Peabody & Sherman" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-155: Research "Penguins of Madagascar" (2014)
**Priority:** 2
**Film:** Penguins of Madagascar (2014) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Penguins of Madagascar" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-156: Research "Rio 2" (2014)
**Priority:** 2
**Film:** Rio 2 (2014) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Rio 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-157: Research "Song of the Sea" (2014)
**Priority:** 2
**Film:** Song of the Sea (2014) — Cartoon Saloon
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Song of the Sea" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-158: Research "The Book of Life" (2014)
**Priority:** 2
**Film:** The Book of Life (2014) — Reel FX
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Book of Life" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-159: Research "The Boxtrolls" (2014)
**Priority:** 2
**Film:** The Boxtrolls (2014) — Laika
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Boxtrolls" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-160: Research "The Lego Movie" (2014)
**Priority:** 2
**Film:** The Lego Movie (2014) — Warner Animation Group
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Lego Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-161: Research "When Marnie Was There" (2014)
**Priority:** 2
**Film:** When Marnie Was There (2014) — Studio Ghibli
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "When Marnie Was There" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-162: Research "Home" (2015)
**Priority:** 2
**Film:** Home (2015) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Home" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-163: Research "Hotel Transylvania 2" (2015)
**Priority:** 2
**Film:** Hotel Transylvania 2 (2015) — Sony Pictures Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Hotel Transylvania 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-164: Research "Inside Out" (2015)
**Priority:** 2
**Film:** Inside Out (2015) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Inside Out" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-165: Research "Minions" (2015)
**Priority:** 2
**Film:** Minions (2015) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Minions" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-166: Research "Shaun the Sheep Movie" (2015)
**Priority:** 2
**Film:** Shaun the Sheep Movie (2015) — Aardman
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Shaun the Sheep Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-167: Research "The Good Dinosaur" (2015)
**Priority:** 2
**Film:** The Good Dinosaur (2015) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Good Dinosaur" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-168: Research "The Peanuts Movie" (2015)
**Priority:** 2
**Film:** The Peanuts Movie (2015) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Peanuts Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-169: Research "Finding Dory" (2016)
**Priority:** 2
**Film:** Finding Dory (2016) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Finding Dory" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-170: Research "Ice Age: Collision Course" (2016)
**Priority:** 2
**Film:** Ice Age: Collision Course (2016) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ice Age: Collision Course" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-171: Research "Kubo and the Two Strings" (2016)
**Priority:** 2
**Film:** Kubo and the Two Strings (2016) — Laika
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Kubo and the Two Strings" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-172: Research "Kung Fu Panda 3" (2016)
**Priority:** 2
**Film:** Kung Fu Panda 3 (2016) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Kung Fu Panda 3" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-173: Research "Moana" (2016)
**Priority:** 2
**Film:** Moana (2016) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Moana" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-174: Research "Sing" (2016)
**Priority:** 2
**Film:** Sing (2016) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Sing" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-175: Research "Storks" (2016)
**Priority:** 2
**Film:** Storks (2016) — Warner Animation Group
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Storks" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-176: Research "The Angry Birds Movie" (2016)
**Priority:** 2
**Film:** The Angry Birds Movie (2016) — Rovio / Sony
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Angry Birds Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-177: Research "The Secret Life of Pets" (2016)
**Priority:** 2
**Film:** The Secret Life of Pets (2016) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Secret Life of Pets" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-178: Research "Trolls" (2016)
**Priority:** 2
**Film:** Trolls (2016) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Trolls" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-179: Research "Zootopia" (2016)
**Priority:** 2
**Film:** Zootopia (2016) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Zootopia" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-180: Research "Captain Underpants: The First Epic Movie" (2017)
**Priority:** 2
**Film:** Captain Underpants: The First Epic Movie (2017) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Captain Underpants: The First Epic Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-181: Research "Cars 3" (2017)
**Priority:** 2
**Film:** Cars 3 (2017) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Cars 3" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-182: Research "Coco" (2017)
**Priority:** 2
**Film:** Coco (2017) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Coco" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-183: Research "Despicable Me 3" (2017)
**Priority:** 2
**Film:** Despicable Me 3 (2017) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Despicable Me 3" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-184: Research "Ferdinand" (2017)
**Priority:** 2
**Film:** Ferdinand (2017) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ferdinand" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-185: Research "The Boss Baby" (2017)
**Priority:** 2
**Film:** The Boss Baby (2017) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Boss Baby" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-186: Research "The Lego Batman Movie" (2017)
**Priority:** 2
**Film:** The Lego Batman Movie (2017) — Warner Animation Group
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Lego Batman Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-187: Research "Dr. Seuss' The Grinch" (2018)
**Priority:** 2
**Film:** Dr. Seuss' The Grinch (2018) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Dr. Seuss' The Grinch" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-188: Research "Early Man" (2018)
**Priority:** 2
**Film:** Early Man (2018) — Aardman
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Early Man" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-189: Research "Hotel Transylvania 3: Summer Vacation" (2018)
**Priority:** 2
**Film:** Hotel Transylvania 3: Summer Vacation (2018) — Sony Pictures Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Hotel Transylvania 3: Summer Vacation" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-190: Research "Incredibles 2" (2018)
**Priority:** 2
**Film:** Incredibles 2 (2018) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Incredibles 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-191: Research "Ralph Breaks the Internet" (2018)
**Priority:** 2
**Film:** Ralph Breaks the Internet (2018) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ralph Breaks the Internet" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-192: Research "Smallfoot" (2018)
**Priority:** 2
**Film:** Smallfoot (2018) — Warner Animation Group
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Smallfoot" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-193: Research "Spider-Man: Into the Spider-Verse" (2018)
**Priority:** 2
**Film:** Spider-Man: Into the Spider-Verse (2018) — Sony Pictures Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Spider-Man: Into the Spider-Verse" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-194: Research "Abominable" (2019)
**Priority:** 2
**Film:** Abominable (2019) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Abominable" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-195: Research "Frozen II" (2019)
**Priority:** 2
**Film:** Frozen II (2019) — Walt Disney Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Frozen II" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-196: Research "How to Train Your Dragon: The Hidden World" (2019)
**Priority:** 2
**Film:** How to Train Your Dragon: The Hidden World (2019) — DreamWorks Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "How to Train Your Dragon: The Hidden World" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-197: Research "Missing Link" (2019)
**Priority:** 2
**Film:** Missing Link (2019) — Laika
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Missing Link" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-198: Research "Spies in Disguise" (2019)
**Priority:** 2
**Film:** Spies in Disguise (2019) — Blue Sky Studios
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Spies in Disguise" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-199: Research "The Angry Birds Movie 2" (2019)
**Priority:** 2
**Film:** The Angry Birds Movie 2 (2019) — Sony Pictures Animation
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Angry Birds Movie 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-200: Research "The Lego Movie 2: The Second Part" (2019)
**Priority:** 2
**Film:** The Lego Movie 2: The Second Part (2019) — Warner Animation Group
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Lego Movie 2: The Second Part" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-201: Research "The Secret Life of Pets 2" (2019)
**Priority:** 2
**Film:** The Secret Life of Pets 2 (2019) — Illumination
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Secret Life of Pets 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-202: Research "Toy Story 4" (2019)
**Priority:** 2
**Film:** Toy Story 4 (2019) — Pixar
**Decade:** 2010s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Toy Story 4" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-203: Research "Onward" (2020)
**Priority:** 2
**Film:** Onward (2020) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Onward" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-204: Research "Scoob!" (2020)
**Priority:** 2
**Film:** Scoob! (2020) — Warner Animation Group
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Scoob!" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-205: Research "Soul" (2020)
**Priority:** 2
**Film:** Soul (2020) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Soul" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-206: Research "The Croods: A New Age" (2020)
**Priority:** 2
**Film:** The Croods: A New Age (2020) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Croods: A New Age" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-207: Research "Trolls World Tour" (2020)
**Priority:** 2
**Film:** Trolls World Tour (2020) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Trolls World Tour" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-208: Research "Wolfwalkers" (2020)
**Priority:** 2
**Film:** Wolfwalkers (2020) — Cartoon Saloon
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Wolfwalkers" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-209: Research "Encanto" (2021)
**Priority:** 2
**Film:** Encanto (2021) — Walt Disney Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Encanto" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-210: Research "Luca" (2021)
**Priority:** 2
**Film:** Luca (2021) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Luca" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-211: Research "PAW Patrol: The Movie" (2021)
**Priority:** 2
**Film:** PAW Patrol: The Movie (2021) — Paramount / Nickelodeon
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "PAW Patrol: The Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-212: Research "Raya and the Last Dragon" (2021)
**Priority:** 2
**Film:** Raya and the Last Dragon (2021) — Walt Disney Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Raya and the Last Dragon" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-213: Research "Ron's Gone Wrong" (2021)
**Priority:** 2
**Film:** Ron's Gone Wrong (2021) — Locksmith Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ron's Gone Wrong" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-214: Research "Sing 2" (2021)
**Priority:** 2
**Film:** Sing 2 (2021) — Illumination
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Sing 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-215: Research "Spirit Untamed" (2021)
**Priority:** 2
**Film:** Spirit Untamed (2021) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Spirit Untamed" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-216: Research "The Boss Baby: Family Business" (2021)
**Priority:** 2
**Film:** The Boss Baby: Family Business (2021) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Boss Baby: Family Business" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-217: Research "DC League of Super-Pets" (2022)
**Priority:** 2
**Film:** DC League of Super-Pets (2022) — Warner Animation Group
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "DC League of Super-Pets" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-218: Research "Hotel Transylvania: Transformania" (2022)
**Priority:** 2
**Film:** Hotel Transylvania: Transformania (2022) — Sony Pictures Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Hotel Transylvania: Transformania" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-219: Research "Lightyear" (2022)
**Priority:** 2
**Film:** Lightyear (2022) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Lightyear" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-220: Research "Minions: The Rise of Gru" (2022)
**Priority:** 2
**Film:** Minions: The Rise of Gru (2022) — Illumination
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Minions: The Rise of Gru" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-221: Research "Puss in Boots: The Last Wish" (2022)
**Priority:** 2
**Film:** Puss in Boots: The Last Wish (2022) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Puss in Boots: The Last Wish" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-222: Research "Strange World" (2022)
**Priority:** 2
**Film:** Strange World (2022) — Walt Disney Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Strange World" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-223: Research "The Bad Guys" (2022)
**Priority:** 2
**Film:** The Bad Guys (2022) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Bad Guys" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-224: Research "Turning Red" (2022)
**Priority:** 2
**Film:** Turning Red (2022) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Turning Red" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-225: Research "Elemental" (2023)
**Priority:** 2
**Film:** Elemental (2023) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Elemental" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-226: Research "Migration" (2023)
**Priority:** 2
**Film:** Migration (2023) — Illumination
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Migration" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-227: Research "Ruby Gillman, Teenage Kraken" (2023)
**Priority:** 2
**Film:** Ruby Gillman, Teenage Kraken (2023) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Ruby Gillman, Teenage Kraken" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-228: Research "Spider-Man: Across the Spider-Verse" (2023)
**Priority:** 2
**Film:** Spider-Man: Across the Spider-Verse (2023) — Sony Pictures Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Spider-Man: Across the Spider-Verse" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-229: Research "The Boy and the Heron" (2023)
**Priority:** 2
**Film:** The Boy and the Heron (2023) — Studio Ghibli
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Boy and the Heron" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-230: Research "The Super Mario Bros. Movie" (2023)
**Priority:** 2
**Film:** The Super Mario Bros. Movie (2023) — Illumination
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Super Mario Bros. Movie" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-231: Research "Trolls Band Together" (2023)
**Priority:** 2
**Film:** Trolls Band Together (2023) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Trolls Band Together" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-232: Research "Wish" (2023)
**Priority:** 2
**Film:** Wish (2023) — Walt Disney Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Wish" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-233: Research "Despicable Me 4" (2024)
**Priority:** 2
**Film:** Despicable Me 4 (2024) — Illumination
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Despicable Me 4" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-234: Research "Inside Out 2" (2024)
**Priority:** 2
**Film:** Inside Out 2 (2024) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Inside Out 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-235: Research "Kung Fu Panda 4" (2024)
**Priority:** 2
**Film:** Kung Fu Panda 4 (2024) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Kung Fu Panda 4" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-236: Research "Moana 2" (2024)
**Priority:** 2
**Film:** Moana 2 (2024) — Walt Disney Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Moana 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-237: Research "The Wild Robot" (2024)
**Priority:** 2
**Film:** The Wild Robot (2024) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Wild Robot" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-238: Research "Dog Man" (2025)
**Priority:** 2
**Film:** Dog Man (2025) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Dog Man" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-239: Research "Elio" (2025)
**Priority:** 2
**Film:** Elio (2025) — Pixar
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Elio" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-240: Research "The Bad Guys 2" (2025)
**Priority:** 2
**Film:** The Bad Guys 2 (2025) — DreamWorks Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "The Bad Guys 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

### US-241: Research "Zootopia 2" (2025)
**Priority:** 2
**Film:** Zootopia 2 (2025) — Walt Disney Animation
**Decade:** 2020s
Research and score this film per the **Research Guidelines** section. Append one `ConflictEntry` to the array in `src/data/disney-conflict-types.ts`. Run `npm run typecheck`.

**Acceptance Criteria:**
- [ ] Entry for "Zootopia 2" appended to `src/data/disney-conflict-types.ts`
- [ ] `conflictScore` is between 0.0 and 1.0
- [ ] `reasoning` field explains the score
- [ ] `npm run typecheck` passes

---

### US-242: Design and build the graph visualization
**Priority:** 3
**Description:** With all 240 films scored, design and build the best possible visualization of the data.

**Context:** The hypothesis predicts that `conflictScore` trends downward over time — earlier decades averaging closer to 1.0 (real villains, confrontation) and later decades averaging closer to 0.0 (misunderstanding, empathy). The graph should make it immediately obvious whether this trend exists, and how strong it is.

**This ticket is deliberately open-ended.** Look at the actual data before choosing a chart type. Here are some ideas to consider (pick one or combine, or invent something better):

- **Dual trend lines** (suggested by the project owner): Two lines that add up to ~100% per decade. Red line = average conflictScore (% of films with real conflict). Blue line = 1 - average conflictScore (% with misunderstanding-style conflict). X-axis is decade. Would show the lines crossing over time if the hypothesis is correct.
- **Scatter plot**: Every film as a dot, x = year, y = conflictScore. Add a trend line. Shows individual variation plus the overall direction.
- **Stacked bar chart by decade**: Each decade bar split into segments (e.g., high/medium/low conflict score buckets). Shows composition shift.
- **Box-and-whisker by decade**: Shows the distribution of scores per decade, not just the average.
- **Small multiples by studio**: Same graph repeated for each major studio to see if the shift is universal or studio-specific.

**Design considerations:**
- The site uses RoughViz (sketchy/xkcd-style charts) as the default. You can use it or swap to chart.xkcd, ECharts, Chart.js, ApexCharts, or any other library if it serves the data better.
- Aggregation logic belongs in the Vue component, not the data file.
- Interactive tooltips/clicks showing which films are in each data point would be great (e.g., hover on a decade to see the films and their scores).
- Note the sample size per decade somewhere visible — a decade with 3 films is less meaningful than one with 30.
- The graph should work well on both desktop and mobile.

**Acceptance Criteria:**
- [ ] Graph renders in `src/DisneyConflictTypes.vue` using real data from `src/data/disney-conflict-types.ts`
- [ ] Chart type chosen based on what best represents the actual data
- [ ] Trend or pattern (or lack thereof) is visually clear
- [ ] Decade sample sizes are visible
- [ ] Data file is NOT modified (all aggregation in the component)
- [ ] `npm run typecheck` passes
- [ ] Page looks good in the dev server at `/disney-conflict-types/`

---

### US-243: Build and deploy to S3
**Priority:** 4
**Description:** Build the site and deploy the new `/disney-conflict-types/` page to S3. Update the root index to link to it.

**Tasks:**
1. Run `npm run build` and verify `dist/disney-conflict-types/index.html` exists.
2. Update `index.html` (the root landing page) to include a link to `/disney-conflict-types/` with a short description.
3. Rebuild after updating the root page.
4. Deploy the full `dist/` directory to the S3 bucket. (If AWS credentials are not available in the environment, stop here and note that deployment is pending credentials.)
5. Verify the page loads at the live URL.

**Acceptance Criteria:**
- [ ] `npm run build` succeeds
- [ ] `dist/disney-conflict-types/index.html` exists in the build output
- [ ] Root `index.html` links to the new page
- [ ] Deployed to S3 (or deployment pending credentials)
- [ ] Live URL renders correctly

---

## Functional Requirements

- FR-1: A TypeScript data file at `src/data/disney-conflict-types.ts` stores one `ConflictEntry` per film with title, year, decade, studio, conflictScore (0.0–1.0), and reasoning.
- FR-2: The dataset covers 240 animated children's films from 1928 to 2025.
- FR-3: Each entry's `conflictScore` represents a single floating-point value on the spectrum from real-villain/confrontation (1.0) to misunderstanding/empathy (0.0).
- FR-4: The data file must always pass `npm run typecheck`.
- FR-5: A Vue component at `src/DisneyConflictTypes.vue` renders an interactive graph of the data.
- FR-6: All aggregation logic lives in the Vue component, not the data file.
- FR-7: The page is accessible at `/disney-conflict-types/` in dev and builds to `dist/disney-conflict-types/index.html`.
- FR-8: The root `index.html` links to the new page.

## Non-Goals (Out of Scope)

- No backend or API — this is a static site.
- No live-action films, even if animated characters appear (e.g., Space Jam, Smurfs).
- No direct-to-video sequels (e.g., Lion King II, Aladdin: Return of Jafar).
- No TV series, only theatrical features and notable pre-feature shorts.
- No automated data collection — each film is manually researched by an agent.
- No CI/CD pipeline — deploy is manual.
- No user authentication, comments, or social features.

## Technical Considerations

- The existing project uses Vite 6, Vue 3 (script-setup), Tailwind v4 via `@tailwindcss/vite`, and RoughViz for charts.
- An existing `disney-villains` page exists with a similar (but narrower) hypothesis and fake data. This new page is separate and independent.
- The data file will grow to ~240 entries. Ensure the Vue component handles this efficiently (pre-aggregate by decade rather than computing on every render).
- TypeScript strict mode is enforced via `npm run typecheck`.
- Each research ticket appends to the same file sequentially (Ralph Wiggum Loop guarantees no parallel edits).

## Success Metrics

- All 240 films researched and scored
- Data file passes typecheck at every step
- Graph clearly shows the trend direction (or honest absence of one)
- Page loads in under 2 seconds on desktop
- A non-technical viewer can understand the graph's message within 10 seconds
- Jason can show it to his friends and say "see, I told you so" (or gracefully accept the data says otherwise)

## Open Questions

- Should the graph page link back to the root index, or is a standalone page fine?
- Should film reasoning/notes be visible on the graph (e.g., in tooltips), or just in the data file?
- Some package films (Fantasia, Make Mine Music, etc.) don't have traditional conflict structures. Agents should use their best judgment, but scores for these may be less meaningful.
- Some films near the present day (2025-2026) may not have been released yet at research time. Agents should skip unreleased films.
