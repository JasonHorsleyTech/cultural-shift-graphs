# Movie Hero Crime Rap Sheet

## The mushy idea

Pick the most popular movies per decade, going back seven decades (1950s through 2020s). Sample across genres so we're not just looking at action:

- popular action movies
- popular romance movies
- popular dramas
- popular animated movies
- ...and probably a few more genre buckets

For each movie, tally up the crimes the **main character / lead** commits, casually or otherwise. For each crime, capture:

- what the crime is
- is it a felony or a misdemeanor?
- if a felony, how many years in prison would the character get if convicted?
- (also track HR violations — not crimes per se, but culturally interesting; e.g. falling in love with a co-worker)

## Why this is interesting

- John Wick 1: the lead probably commits first-degree murder somewhere between 100 and 300 times. If convicted that's probably thousands of years in federal prison. Insane number.
- Action movies obviously rack up huge violent-crime totals, but the sneaky suspicion is that **romance / drama / "casual" movies** also have constant casual crime: speeding, embezzling, breaking and entering, harassment, fraud. People committing crimes without the movie even framing them as crimes.
- Every romance movie probably has at least one HR violation baked in — co-worker romance, boss/employee dynamic, etc.

## Questions the graph(s) should answer

1. **How many crimes does the average movie hero commit?** Total count, by movie, by genre, by decade.
2. **How does it change over time?** Are we trending toward more violence in heroes, or away from it? Does the answer differ by genre?
3. **Crimes by genre** — what does the crime mix look like for action vs romance vs drama vs animated?
4. **Which crimes have we become numb to?** Hypothesis: murder is #1. We watch heroes kill people constantly and don't blink. What else?
5. **Which crimes are still taboo for the hero to commit, even though they carry similar legal weight?** Hypothesis: rape. Can't think of a single movie where the hero casually rapes someone and the movie frames it as fine. But there are thousands of movies where the hero casually murders someone and it's framed as fine — "well, they were a bad guy."
6. **Which crimes are surprisingly casual?** Suspect candidates:
    - police misconduct / felony misconduct (think 80s cop movies — the "loose cannon turns in his badge" trope, Die Hard era)
    - breaking and entering
    - assault
    - destruction of property (every car chase)
    - intellectual property theft? (unsure how common this actually is)
    - vehicular crimes (speeding, reckless driving, vehicular homicide)
    - illegal weapons possession

## Open questions / things to figure out

- **How do we pick "popular" movies?** Box office? IMDb top by decade? Cultural-impact lists? Probably box office adjusted for inflation, top N per decade per genre.
- **How many movies per decade?** Maybe top 10 per genre per decade × 4–5 genres × 7 decades = 280–350 movies. Tractable but not tiny.
- **Who counts as "the lead"?** Single protagonist movies are easy. Ensemble pieces (Avengers, Ocean's Eleven) are harder — do we tally crimes for the whole crew, or pick a designated lead?
- **Sentencing math:** US federal sentencing guidelines? State? Average across jurisdictions? Probably need a consistent rubric so John Wick's 100 murders get the same per-murder sentence as some 1970s cowboy's 100 murders.
- **Granularity:** do we count every individual count of a crime (300 murders = 300 entries) or roll up by category (murder × 300)? Probably roll up for storage, but expand for sentencing math.
- **HR violations** are a separate axis from criminal — should they be a parallel dataset, or a "bonus" tag alongside crimes?
- **What about implied crimes?** If the hero "must have" stolen the car off-screen but we don't see it, do we count it? Probably yes if it's necessary for the plot.

## Possible graph framings

- A "rap sheet" per movie — total years in prison the hero would serve. Stack-rank the worst offenders.
- Time series: average hero prison-years per decade, faceted by genre.
- Heatmap: crime type × decade, intensity = frequency. Shows which crimes have crept in or out of "acceptable" hero behavior.
- Taboo vs normalized scatter: x-axis = legal severity (sentence), y-axis = frequency in hero behavior. Top-left = "should be taboo but we're numb to it" (hello, murder). Bottom-right = "carries the same penalty but never happens" (hello, rape).

## Data source hunches

- IMDb / The Numbers / BoxOfficeMojo for "popular movies per decade per genre."
- The actual crime tally is the hard part — needs LLM watching/reading plot summaries and rating crimes. Rotten Tomatoes synopses, Wikipedia plot sections, fan wikis are probably enough for the major beats; we won't catch every speeding ticket but we'll catch the felonies.
- Sentencing rubric: US Federal Sentencing Guidelines as a baseline reference, plus a fixed per-crime "typical sentence" lookup table that we standardize across the project.
