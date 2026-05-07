# Plan: Sexual Language Index

## Architecture: three passes, flat formats, deterministic merge

The principle: **never make the LLM build nested JSON from scratch.** Every LLM-facing pass produces append-only flat output. The nesting happens in a final deterministic Node script that no LLM touches.

```
Pass 1 — Dump        plain text, one word per line, grouped by markdown headings
Pass 2 — Enrich      JSONL, one record per line, fully flat, no nesting
Pass 3 — Transform   Node script reads all JSONL, emits final nested JSON
```

## Pass 1 — Word dump (per language)

Optimized for stream-of-consciousness Sonnet output. Plain text, no metadata.

**Output:** `data/dump/<lang>-words.txt`

**Format:**

```
# <Language> — sexually-charged vocabulary dump
# Romanization in parentheses where useful. No definitions. No scoring.
# Categories below; one word per line under each.

## Organs — penis (clinical/medical)
...

## Organs — penis (slang/crude)
...

## Acts — intercourse (slang/crude)
...

## Insults built from sexual vocabulary
...

## (any culture-specific category Sonnet wants to add)
...
```

**Categories to cover:**
1. Organs (clinical / slang) — penis, vagina, breasts, testicles, anus, buttocks, scrotum, foreskin, etc.
2. Acts (clinical / slang) — intercourse generic, intercourse specific (coitus), oral, anal, manual, kink-specific, etc.
3. Fluids and physical states
4. Desire / arousal / descriptors / identities
5. Insults built from sexual vocabulary
6. Sex work and pornography
7. Reproductive / contraceptive
8. Kink / paraphilia / fetish
9. Euphemisms and idioms
10. Archaic / literary / dated
11. Internet / subculture
12. Religious / moral status (halal/haram-style — language-specific to Arabic, Hebrew, Sanskrit, etc.)
13. Honor / shame economy (ird, namus — language-specific to MENA/Med)
14. Third-gender roles (hijra, fa'afafine, kathoey — language-specific)
15. Ritual / spiritual sexual practice (maithuna, Taoist alchemy — language-specific)

**Stopping rule:** "Aim for 800-1500 words. Push past the obvious. Don't stop because a section feels done — scan once more before quitting."

## Pass 2 — Word enrichment (per language, batched)

JSONL because (a) one record per line, (b) append-only, (c) each line is independently valid, (d) batching is trivial.

**Batching:** 50 words per batch. 1000 words = 20 batches. Each batch is a fresh Sonnet call with a clean context. Batches run in parallel.

**Output:** `data/enriched/<lang>.jsonl`

**One record per line (flat, no nesting):**

```jsonl
{"term":"...","lang":"...","script":"...","romanization":"...","category":"...","subcategory":"...","concept":"...","is_novel_concept":false,"register":"...","crude":N,"technical":N,"recognition_pct_current":N,"recognition_pct_peak":N,"peak_year":null,"regional":null,"definition":"...","english_term":"...","english_translation_quality":"direct|approximate|none","notes":""}
```

**Field reference:**

| Field | Type | Notes |
|---|---|---|
| `term` | string | The word/phrase in its native script |
| `lang` | string | ISO 639-1 code (`en`, `es`, `zh`, `ja`, etc.) |
| `script` | string | `latin`, `hans`, `hant`, `cyrl`, `arab`, `deva`, `hebr`, `kana`, `hang`, etc. |
| `romanization` | string\|null | Pinyin, romaji, hangul romanization, transliteration; null for Latin-script |
| `category` | string | One of the 15 top-level categories |
| `subcategory` | string\|null | E.g. `penis`, `intercourse_generic`, `cuckoldry` |
| `concept` | string | Canonical concept slug. For non-English, must match an entry in `data/registry/concepts.json` OR `is_novel_concept: true` |
| `is_novel_concept` | bool | True only for language-specific concepts with no clean English equivalent |
| `register` | enum | `clinical` \| `slang_crude` \| `slang_neutral` \| `euphemism` \| `dated_slang` \| `archaic` \| `literary` \| `subculture` \| `moral_religious` \| `loanword` \| `classical_specialized` |
| `crude` | int 0-100 | How vulgar/transgressive the word feels in its culture |
| `technical` | int 0-100 | How clinical/anatomical it sounds. Independent of crude. |
| `recognition_pct_current` | int 0-100 | % of adult speakers who'd recognize the word today (2026) |
| `recognition_pct_peak` | int 0-100 | % at peak. Equal to current for non-dated terms. |
| `peak_year` | int\|null | Only set for dated terms (e.g. 1998 for "getting jiggy with it") |
| `regional` | string\|null | Regional variant code: `MX`, `ES`, `BR`, `PT`, `UK`, `US`, `EG` (Egyptian Arabic), `CN`, `TW`, etc. |
| `definition` | string | One-sentence gloss in English |
| `english_term` | string\|null | Closest English word/phrase |
| `english_translation_quality` | enum | `direct` (1:1 same act, same connotations) \| `approximate` (movie-subtitle gloss) \| `none` (novel concept) |
| `notes` | string | Anything weird or worth flagging |

## Pass 3 — Deterministic merge (no LLM)

`scripts/build-vocab-json.mjs`:

1. Read every `data/enriched/*.jsonl` file.
2. For each record:
   - Find or create the concept entry in the output by `concept` slug.
   - Set the concept's category/subcategory/is_universal/key_language from the first record. Log warnings on subsequent mismatches.
   - For novel concepts (`is_novel_concept: true`), populate `english_equivalent: null`, `english_approximation` from `english_term`, `key_language` from the introducing language.
   - Append the per-word translation entry under `concept.translations[lang]`.
3. Validate: every concept has at least one translation, every translation has crude+technical scores in [0,100], novel concepts have `english_translation_quality: "none"`.
4. Write `src/data/sexual-vocabulary.json`.

## Sequencing

**Critical:** English Pass 2 must complete before any other language's Pass 2 can run, because it seeds the canonical concept registry. Other languages' Pass 1 (dumps) are unblocked and can run in parallel from the start.

```
Phase A (parallel):
  ├─ English Pass 2 (BLOCKING for Phase C)
  └─ Tier 1 Pass 1 dumps (independent)

Phase B (after English Pass 2):
  └─ Build canonical concept registry from en.jsonl

Phase C (after Phase B):
  └─ Tier 1 Pass 2 enrichments (parallel, against the registry)

Phase D (rolling):
  ├─ Tier 2 + Tier 3 Pass 1 dumps
  └─ Tier 2 + Tier 3 Pass 2 enrichments

Phase E (final):
  ├─ Pass 3 deterministic merge
  ├─ Country-language mapping (research)
  ├─ External cultural-openness data (research)
  └─ Graph build (3 graphs + drilldown)
```

## Language list

Tier 1 (high confidence — well-dictionaried, big speaker bases):
- English (en) — DONE Pass 1
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese — Brazilian (pt-BR)
- Russian (ru)
- Polish (pl)
- Dutch (nl)
- Turkish (tr)
- Arabic — Modern Standard (ar)
- Mandarin Chinese (zh)
- Japanese (ja)
- Korean (ko)

Tier 2 (decent documentation):
- Hindi (hi)
- Indonesian (id)
- Vietnamese (vi)
- Thai (th)
- Persian / Farsi (fa)
- Greek (el)
- Hebrew (he)
- Swedish (sv)
- Norwegian (no)
- Finnish (fi)
- Danish (da)
- Czech (cs)
- Hungarian (hu)
- Romanian (ro)
- Ukrainian (uk)
- Bulgarian (bg)

Tier 3 (broader coverage, larger uncertainty bands):
- Bengali (bn)
- Tamil (ta)
- Urdu (ur)
- Tagalog / Filipino (tl)
- Malay (ms)
- Swahili (sw)
- Yoruba (yo)
- Hausa (ha)
- Amharic (am)
- Zulu (zu)
- Burmese (my)
- Khmer (km)

Regional dialects (run as separate languages where meaningful):
- Egyptian Arabic (ar-EG)
- Levantine Arabic (ar-LB)
- Gulf Arabic (ar-SA)
- Mexican Spanish (es-MX)
- European Portuguese (pt-PT)

## Tickets

Per-language tickets in `tickets/`. Each ticket file describes exactly one unit of work:
- Pass 1 dump tickets: `0XX-pass1-<lang>.md` — one Sonnet call to dump words
- Pass 2 enrichment tickets: `1XX-pass2-<lang>.md` — runs `scripts/enrich-batch.sh <lang>` which fires N parallel claude --print calls

The English Pass 1 is already done (`data/dump/en-words.txt` exists from the workshop conversation).

## Mode: cron

This project runs on the standard cron orchestrator (no `mode` file = cron default). Each tick (~45 min) executes one ticket = one language's combined Pass-1 dump + Pass-2 enrichment.

The agent invocation per ticket runs two shell scripts (`dump-language.sh <lang>` then `enrich-batch.sh <lang>`). Each enrich script internally fires up to ~25 parallel `claude --print` Sonnet calls. The agent waits for both scripts to complete (typical wall-clock: 2 min dump + 10-15 min enrich = ~12-17 min total, well within the 20-minute orchestrator agent timeout).

**Why not manual mode with parallel batches?** Initially attempted (see `sexual_language_project_framework` memory entry). It hit hourly rate limits hard because firing 47 languages × ~22 batches in parallel = ~1000 simultaneous Claude calls saturated the per-window quota. Cron's natural pacing (one ticket per 45 min) keeps spend predictable and respects budget windows. If a tick hits rate-limit, the script's idempotency leaves partial state on disk, no result file is written, and the next tick retries the missing batches.

### Sequencing under cron

The English seed ticket (001-en.md) was pre-completed during workshop. Its result file already exists. Tickets 002-047 each produce dump + enrichment for one language, in order: Tier 1 → Tier 2 → Tier 3 → regional dialects.

The canonical concept registry (`data/registry/concepts.json`, 582 concepts) is also pre-built. All non-English enrichment passes match against it.

When all 47 tickets are complete, the orchestrator advances to the `graph` phase automatically.

## Files this project produces

```
projects/sexual-language-index/
  question.md
  priority           # 1
  status             # research → graph → review → deploy → done
  mode               # manual
  plan.md            # this file
  data/
    dump/
      en-words.txt
      es-words.txt
      ...
    enriched/
      en.jsonl
      es.jsonl
      ...
    registry/
      concepts.json  # canonical concept slugs (built after English Pass 2)
    country-language.json   # country → language(s) mapping (Phase E research)
    cultural-openness.json  # behavioral/policy openness scores (Phase E research)
  scripts/
    extract-words.mjs              # parses dump.txt → JSON list of words
    enrich-batch.sh <lang>         # fires parallel claude --print enrichment calls
    dump-language.sh <lang>        # fires single claude --print dump call
    build-concept-registry.mjs     # extracts concepts from en.jsonl
    build-vocab-json.mjs           # final deterministic merge
  tickets/                         # one file per Pass-1 dump and Pass-2 enrich
  results/                         # mirrors tickets, marks completion
src/data/
  sexual-vocabulary.json           # final merged data, what the graph reads
```

## Graph build (final phase)

When all data collection is done:

- `src/data/sexual-vocabulary.json` — the merged data
- `src/data/country-openness.json` — external behavioral data per country
- `src/data/country-language.json` — country → traditional language mapping
- `src/SexualLanguageIndex.vue` — three graphs + per-language drilldown
- `src/sexual-language-index.js` — mount script
- `graphable/sexual-language-index/index.html` — entry
- `vite.config.js` — entry list update
- `src/GraphableLanding.vue` — link added

Chart libraries:
- Heat maps: ECharts world map (best built-in geo support of the libraries we use)
- Correlation: Chart.js scatter or RoughViz
- Drilldown: native Vue, no chart library
