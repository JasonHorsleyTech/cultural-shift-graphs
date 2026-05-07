# Sexual Language Index — World Heat Map

## The core question

Does the ratio of clinical/technical sexual vocabulary to insulting/shame-based sexual vocabulary in a language predict how culturally open or closed that language's speakers are about sexuality?

## What we're building

A single page with three graphs:

1. **World heat map (linguistic).** Every country in the world, colored by its dominant traditional language's ratio of technical → insulting sexual vocabulary. Hot = technical-leaning (hypothesis: more open). Cold = insult-leaning (hypothesis: more repressed).
2. **World heat map (cultural openness, external data).** Same map, same scale, but driven by behavioral/survey/policy data per country (Durex, age at sexual debut, contraception access, legal frameworks, religious-legal classifications, etc.).
3. **Correlation graph.** Scatter or bivariate, showing how well graph 1 predicts graph 2. The hypothesis lives or dies here.

Plus expandable per-language drill-down: every word in the dictionary, with a one-line LLM-written rationale for its crude/technical scores. Reader can audit any data point.

## Why it's interesting

- It's never been done. Linguistic openness as a proxy for cultural sexual attitudes is a real research question, and we have a tool (LLMs as broad-corpus oracles) that nobody had until 2-3 years ago.
- It works as a graph regardless of outcome. If the correlation holds, the linguistic proxy is a real cultural fingerprint. If it doesn't, the *places where it fails* are the interesting data — and the project shows that honestly.
- The drill-down audit-any-word feature is the antidote to "trust me, the AI said so."

## Methodology — at a glance

The data is generated entirely by LLMs working off-the-dome (no web search, no tool calling). LLMs are the most-read entities in human history; for "approximately how widely was 'getting jiggy with it' recognized at peak," they are the best available oracle. The graph is honest about this.

Three-pass architecture (see `plan.md`):
- **Pass 1 (per language):** Sonnet stream-of-consciousness dumps every sexually-charged word. Plain text, no metadata.
- **Pass 2 (per language):** Sonnet enriches each word — crude/technical scores, recognition %, English equivalence, definition, peak year for dated terms. Output: JSONL, one record per line. English runs first and seeds the canonical concept registry.
- **Pass 3 (deterministic):** Node script merges all JSONL into one nested concept-keyed JSON.

## Methodology decisions

- **Country → language mapping.** Use the *traditional* language of the culture. Both language and sexual mores change slowly; the older language is the better cultural fingerprint. Exceptions for settler-colonial countries (USA, Canada, Australia, Brazil, Argentina) and Anglophone-by-conquest (Ireland, Wales, Singapore, Nigeria, Philippines) — use the language of daily emotional life, not the indigenous one.
- **No frequency weighting.** Every sexually-charged word counts equally. Frequency-weighting requires a cross-language frequency tool that doesn't exist past ~30 languages, and even where it exists the register-mismatch problem (Wikipedia is the wrong corpus for slang) is severe. Going unweighted relocates the bias into "documentation depth varies by language" — but that bias has a known direction and can be flagged visually.
- **LLM as oracle for everything.** Crude scores, technical scores, recognition %, peak year — all free-handed by Sonnet. No web research. The framing: "if I'd built an AI on the entire internet to estimate these, this is what it would output. We have that AI now."
- **Concept registry seeded from English.** English Pass 2 produces the canonical concept slugs (`penis`, `intercourse_generic`, `cunnilingus`, `cuckoldry`, etc.). All subsequent languages map their words to these slugs OR flag novel non-universal concepts (`netorare`, `dayyooth`, `cǎi yīn bǔ yáng`, etc.).
- **Cross-cultural categories.** Beyond the standard organs/acts/insults set, the schema supports four English-under-encoded categories: religious/moral status (halal/haram-style), honor/shame economy (ird/namus), third-gender roles (hijra/fa'afafine/two-spirit), ritual/spiritual practice (maithuna/Taoist alchemy).
- **Unweighted is honest about its limits.** Tier-1 well-dictionaried languages (English, Spanish, French, German, Mandarin, Japanese, etc.) get richer counts than Tier-3 thinly-documented languages. The graph shows uncertainty bands accordingly.

## Out of scope (for this project)

- Phase 2 (ancient languages — Latin, Classical Greek, Sanskrit, Old Norse, etc.) is a separate downstream project.
- Multi-LLM consensus scoring (Claude + GPT + Gemini + Grok) is a separate downstream project. Phase 1 here uses Claude Sonnet only, which is honest given the volume.

## Workshop history

Workshopped in `ideas/sexual-language-index.md` from 2026-04-something through 2026-05-05. Final design conversation 2026-05-05 covered: country-level heat-map framing, frequency-weighting tradeoffs, English-first canonical concept registry, three-pass architecture, cross-cultural category coverage. Existing English word dump from prior conversation (~740 words, see `data/dump/en-words.txt`) is the seed for Pass 2.
