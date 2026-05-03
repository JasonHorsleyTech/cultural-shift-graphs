# Sexual Language Index: How Open/Closed Are Cultures Really?

## The Hypothesis
Language patterns around sexuality predict cultural sexual openness. Specifically:
- High ratio of technical/descriptive sex terms to shame-based insults = sex-positive culture
- Low ratio = sex-repressive culture
- This can be measured today, validated against actual sexual behavior, then projected backward to ancient cultures

## Phase 1: Modern Language Validation (GRAPHABLE PROJECT)

### Step 1: Catalog all sexually charged words in modern languages
- Pick 20 representative modern languages (English, Spanish, French, German, Mandarin, Arabic, Hindi, Japanese, etc.)
- For each language: compile every word that relates to sexuality, sexual acts, sexual organs, sexual urges, sexual identities
- Categorize by type:
  - **Organs**: penis, vagina, breast, testicle, clitoris, anus, rectum (and all euphemisms)
  - **Acts**: intercourse, fellatio, cunnilingus, masturbation, anal, oral, manual, etc.
  - **Urges/Identities**: horny, lusty, frigid, nymphomaniac, etc.
  - **Shame-based insults**: slut, whore, prude, impotent, cocksucker, motherfucker, etc.

### Step 2: Multidimensional scoring (via LLM consensus)
For each word, score on multiple axes:
- **0-100 Negativity**: How pejorative is this word in its culture?
- **Can it insult a person?** (0-100: directly calling someone the word)
- **Can it insult desire?** (0-100: "you're bad because you want this")
- **Is it a descriptor of stupidity/weakness/aggression?** (0-100 for each)
- **Technical vs. Euphemism**: Is it the clinical term or slang?

Use 10 LLMs (Claude, GPT-4, Gemini, Grok, Llama, etc.) for consensus scoring.
- Cost: ~$20–30 total
- This shows both agreement and divergence between models

### Step 3: Build the Sexual Openness Ratio
For each language:
- Count words by category
- Calculate: (Technical + Positive words) / (Shame/Insult words)
- High ratio = sex-positive culture | Low ratio = sex-repressive culture

### Step 4: Validate against real data
Correlate linguistic ratio against:
- Durex Global Sex Survey (acts by country)
- Abortion/contraception access
- Age at sexual debut
- Sexual satisfaction surveys
- Infidelity rates

**Target accuracy**: >80% correlation. If achieved, the linguistic proxy works.

### Research tickets (sketch):
- 001-english-word-catalog
- 002-spanish-word-catalog
- 003-french-word-catalog
- ... (20 languages total)
- 021-llm-scoring-protocol (define the scoring framework)
- 022-llm-scoring-english-batch
- ... (one per language)
- 043-ratio-calculation-and-validation
- 044-graph-sexual-openness-ratio

## Phase 2: Ancient Language Analysis

Once Phase 1 is validated, repeat for ancient languages:
- Classical Greek
- Latin
- Sanskrit
- Classical Arabic
- Hebrew/Aramaic
- Old English
- Old Norse
- Classical Chinese
- Persian

**Difference**: Ancient texts are scarce. Use LLM deep dives: "Find every instance of [word] in [ancient corpus]. Provide context and usage pattern."

## The Output

A graph showing:
- **Modern languages**: Sexual openness ratio vs. actual sexual behavior (scatter plot, validation check)
- **Ancient languages**: Inferred sexual openness ratio, ranked by culture/era
- Side-by-side comparison: Ancient vs. Modern, to show cultural shifts

Title idea: "Sexual Attitudes Through Language: From Ancient Greece to Today"

## Notes
- This requires LLM scoring infrastructure built separately (see related messy idea)
- Word lists are the bottleneck; need native speakers or very good dictionaries
- Ancient language work requires access to digitized classical texts
- Model disagreement is interesting signal; show it
