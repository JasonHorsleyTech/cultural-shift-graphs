# Movie Hero Crime Rap Sheet

## The question

How many crimes does the lead character of a popular movie commit, and how does that change across genres and decades from 1970–2026? Which crimes have we become numb to, which remain taboo, and what does the legal sentence look like if every act were prosecuted with perfect evidence?

## Why this is interesting

Action movies are the obvious case — John Wick 1 has the protagonist commit hundreds of first-degree murders. But the suspicion is that romance, drama, and "casual" movies are also full of casual crime: smuggling, fraud, B&E, embezzlement. Watching Titanic recently was the spark — Rose Bukater's rap sheet (smuggling a multi-billion-dollar diamond on an international flight, lying to investigators, false-pretenses fraud against the salvage operation, dropping the diamond into the ocean as littering, keeping a conditional engagement gift after declining the wedding) is a felony parade, and the movie doesn't frame any of it as crime.

Hypotheses worth testing:

- We're numb to murder when committed by the hero. We're not numb to rape — there's no movie where the hero casually rapes someone and it's framed as fine. Two crimes that carry similar legal weight, two completely different cultural treatments.
- Romance and drama protagonists commit a surprising volume of casual crime that the audience doesn't register.
- 80s cop movies are uniquely rich in police-misconduct felonies (the "loose cannon turns in his badge" trope).
- Hero crimes track cultural shifts. We may be trending toward more or less violence; toward or away from various crime types.

## Sample

**Years:** 1970 through 2026 inclusive (57 years).
**Picks per year:** Top domestic box office ranks **1, 2, 4, 8, 16** — five movies per year. Exponential sampling is deterministic, transparent, and defensible against "you cherry-picked." When validated against 2008 the five picks spanned The Dark Knight (action), Iron Man (action), Hancock (action-comedy), Twilight (romance-fantasy), and Get Smart (spy comedy) — i.e. the spread organically diversifies genre without us having to enforce genre buckets.
**Total:** ~285 movies.

For older decades (1970s) where Box Office Mojo data is noisier, fall back to The Numbers' inflation-adjusted lists or contemporary Variety year-end lists. Exact rank precision matters less than ballpark — we are not making fine-grained claims about #16 vs #18.

## Source of truth (tiered fallback)

For each movie, gather:

1. **Script** (IMSDb, Simply Scripts, Script-O-Rama). Best because it includes stage directions ("ROSE slips the necklace into her pocket") that subtitles don't capture.
2. **Subtitles** (OpenSubtitles). Fallback if no script. Dialogue-only.
3. **Wikipedia plot section.** Always include, regardless of whether script or subtitles were found. Cheap, easy, catches major beats.

Each movie's record notes which tier was used so we can flag findings derived from a thinner source.

## Crime evaluation rubric

The LLM plays **prosecutor**, not jury. Bias risk runs in both directions: the model may be too generous ("movie framed him as the hero, so self-defense") or too aggressive (Cinema Sins-style "well actually" overcharging). The framing must be:

- **Strip the character's name and the movie's hero/villain framing.** Describe the act generically. Don't ask "would John Wick be convicted." Ask: "If this exact sequence of facts was presented to a judge, with perfect video and audio evidence, and a competent defense attorney made the most reasonable defense available, would this stick?"
- **Period-appropriate law.** A 1810s English novel uses 1810s English common law. A 1972 American movie uses 1972 US federal/state law.
- **Fantasy and sci-fi: use in-universe implied law.** If characters react to a murder with horror and call it a crime (Star Wars: the Lars homestead deaths are framed as a crime), murder is illegal. If characters treat murder as routine and unremarkable (Mad Max), there is no law. Read social cues from the universe itself.

For each crime, capture:

- **Category** (e.g. first-degree murder, breaking and entering, smuggling, fraud).
- **Severity** (felony / misdemeanor / civil / no-law-in-universe).
- **Sentence if convicted** (years, or "monetary only" / n/a). Use a fixed standardized rubric set during the plan phase so that the 100th murder in a 1972 movie gets the same per-count sentence as the 100th murder in a 2024 movie.
- **Movie framing** — did the movie present it as a crime, as morally questionable, or as totally normal? The gap between "would be prosecuted" and "movie called it fine" is its own data axis.

Crimes to **drop entirely**:

- HR violations (interesting concept but a different axis from criminal).
- OSHA-level nuance (workplace safety regulatory minutiae).

## Ensembles

Top 3–5 lead characters by screen time. Each tallies separately. Ocean's Eleven → Danny / Rusty / Linus. Pulp Fiction → Jules / Vincent / Butch. Avengers → ~5 leads. When displaying the data, sum across leads per movie OR show per-character so we can see who in the ensemble is the worst offender.

## Mode

**Manual.** Reasons:

- ~285 movies parallelize cleanly — batch research mode is the natural fit.
- Each year is one ticket (the 5 movies for that year), so ~57 tickets total.
- Each ticket has two phases: (1) data collection — identify the 5 movies, fetch script / subtitles / Wikipedia plot, store locally; (2) LLM crime extraction — probably defer to Sonnet or Haiku, fired in batch when extra tokens are available.
- Jason wants hands-on control of the firing cadence and model selection.

## What one data point looks like

```
{
  movie: "Titanic",
  year: 1997,
  rank_in_year: 1,
  source_tier: "script",
  character: "Rose Bukater",
  crime: "Smuggling undeclared currency/items across international borders",
  severity: "felony",
  sentence_years: 5,
  movie_framing: "not framed as crime",
  notes: "Boards a helicopter from international waters with an undeclared multi-billion-dollar diamond."
}
```

## Open questions for the explore phase to resolve

- **Sentencing rubric.** Pick one consistent reference (US Federal Sentencing Guidelines as the baseline?) and document per-crime default years so we're internally consistent across 285 movies.
- **Pre-1977 box office data.** Box Office Mojo gets reliable around 1977. Pick a single source of truth for 1970–1976 rank data.
- **Foreign-set or foreign-language movies in the sample.** Apply local law when the setting is clearly non-US (Pan's Labyrinth, Crouching Tiger Hidden Dragon, Pride and Prejudice).
- **Display options.** Multiple framings possible from the same dataset — rap sheet per movie, time series by decade, heatmap of crime type × decade, scatter of legal severity vs hero frequency. Decide during the graph phase, but it's worth noting up front that the dataset will support several different views.
