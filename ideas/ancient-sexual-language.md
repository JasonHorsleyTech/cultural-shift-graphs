# Ancient Sexual Language: What Did They Actually Talk About?

## The Question
Once we've validated that linguistic sexual openness correlates with actual sexual behavior in modern cultures, can we infer ancient sexual practices from the surviving language patterns?

**Specific sub-questions:**
- How sexually open was ancient Greece vs. ancient Rome vs. classical China?
- Did sexual attitudes shift after major cultural events (Christianization, conquest, etc.)?
- Can we infer specific sexual practices (cunnilingus, anal sex, masturbation) from word frequency and context in ancient texts?
- How did sexuality rhetoric change between eras? (Roman erotic poetry vs. Victorian suppression vs. modern openness)

## Phase 1: Ancient Language Word Cataloging

Identify all sexually charged words in:
1. **Classical Greek** — Aristophanes, Sappho, graffiti (Pompeii-adjacent), pottery inscriptions
2. **Latin** — Ovid, Catullus, Martial, erotic poetry, Pompeian graffiti
3. **Sanskrit** — Kama Sutra, courtly literature, Vedic texts
4. **Classical Arabic** — Pre-Islamic poetry, erotic poetry tradition (al-Rawi), hadith
5. **Hebrew/Aramaic** — Torah, Talmud, Song of Songs, Dead Sea Scrolls
6. **Old English** — Canterbury Tales, bawdy folk literature
7. **Old Norse** — Sagas, Eddas, skaldic poetry
8. **Classical Chinese** — Poetry (Tang/Song dynasties), erotic texts, medical literature
9. **Persian** — Classical poetry (Hafiz, Rumi), highly erotic tradition
10. **Koine Greek** (New Testament era) — for comparison with Classical Greek

### The Challenge
Word lists for ancient languages are **sparse**. We're working with:
- Digitized scholarly editions (often heavily normalized)
- Translations (which lose nuance)
- Fragmentary texts (missing context)
- Survivorship bias (what survived is what was valued/preserved)

### The Work
For each ancient language:
- **Research ticket 001-greek-sexual-words**: List every sexual term in Classical Greek texts (with citations)
- **Research ticket 002-latin-sexual-words**: Same for Latin
- ... (one per language)

Output: CSV with columns:
- Word (original language)
- Translation
- Definition (what it literally means)
- Source text (Ovid, Book III, line 45)
- Source type (poetry, graffiti, instructional, etc.)
- Frequency (how many times does it appear in digitized corpus?)

## Phase 2: LLM-Powered Historical Contextualization

Once we have the word list, use LLMs to:
1. **Find all instances** in digitized ancient texts
2. **Extract context** (surrounding sentences/paragraphs)
3. **Classify usage** (is it celebratory? condemning? clinical? crude?)
4. **Infer connotation** (positive/negative/neutral across instances)

Example prompt:
```
You have access to Classical Latin texts. Find every instance of the word "fellator" in surviving texts.
For each instance, provide:
- Work and line number
- Full sentence with context
- Usage classification: (celebratory/condemning/clinical/crude)
- Whether it refers to consensual activity or insult

Be exhaustive. List every occurrence.
```

This is basically **deep historical research tickets** that Claude can do by synthesizing all available digitized classical texts.

## Phase 3: Comparative Analysis

Build a dataset:
```
Language | Word | Meaning | Positive_Count | Negative_Count | Neutral_Count | Ratio
Greek    | rhyptos | anal sex | 3 | 12 | 2 | 0.21
Latin    | futuere | to fuck | 45 | 89 | 34 | 0.89
Sanskrit | yamakaranita | reverse position | 12 | 0 | 5 | inf (all positive)
...
```

Graph it:
- **Ancient Sexual Openness by Culture**: Shows which ancient culture had the most sex-positive language
- **Sexual Attitude Shifts Over Time**: Same culture, different eras (Imperial Rome vs. early Christian Rome)
- **Linguistic Divergence**: Which ancient culture's sexual language is most different from modern equivalents?

## Phase 4: Interpretation & Caveats

This is where honesty is critical. Caveats:
1. **Survivorship bias**: Erotic texts survived (Romans, Persians) or didn't (Christians destroyed stuff)
2. **Literacy bias**: Scribes ≠ peasants. We're measuring elite language, not population
3. **Translation bias**: Modern translators sometimes sanitize ancient texts
4. **Corpus completeness**: We don't have "all" ancient texts, just what was digitized/survived
5. **Context collapse**: A word meaning "to fuck" in poetry might mean something cruder in graffiti

The graph should be transparent about these limitations.

## The Output

**Graph: "Sexual Language Across Ancient Cultures: What Survived and What It Tells Us"**
- Visualization 1: Sexual openness ratio (calculated same way as modern languages)
- Visualization 2: Ratio confidence intervals (showing uncertainty due to sparse data)
- Visualization 3: Temporal shift within single cultures (e.g., Greek language pre/post Christianization)
- Text overlay: Explicit caveats about what we can and cannot infer

## Dependencies

- Requires **Sexual Language Index validation** (Phase 1) to be complete
- Requires **Multi-LLM scoring framework** to be built
- Research tickets are heavy — this will take days of orchestrator ticks

## Example Research Tickets (sketch)

- 001-classical-greek-word-list
- 002-latin-word-list
- 003-sanskrit-word-list
- ... (10 languages)
- 011-find-greek-instances (LLM dives deep into corpus)
- 012-find-latin-instances
- ... (10 languages)
- 021-comparative-analysis
- 022-build-ancient-openness-graph

## The Real Question This Answers

"Did ancient Greek wives really suck more dick than medieval wives?"

We probably can't answer that definitively. But we can say:

"Ancient Greek **language** was ~2.5x more sex-positive than Medieval English **language**. If linguistic patterns correlate with actual behavior (which Phase 1 will show), then yes, probably."

That's honest. That's usable. That's the graph.
