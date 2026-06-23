# Current Evolutionary Pressure on Humans

What pressures are *actually* selecting humans right now, and how do they compare to 10, 100, 1000 generations ago? Split by sex, because the asymmetry is the whole story.

## The intuition

Evolution doesn't care if you die or are a terrible person. It only cares whether you reproduce. So "evolutionary pressure" reduces to: per trait, what fraction of carriers reproduce vs. non-carriers? A zero-pressure scenario: take 1000 dogs, magic tech keeps them all alive, force them to randomly breed, save every puppy. Total chaos within a few generations. A 100% scenario: kill every white puppy, save every black one. Pure trait fixation.

Between zero and 100 is where real life lives, and the question is: where are we now, on which traits, and how does that compare to ancestors?

## The unit (this already exists)

- **Selection coefficient (s)** — classical pop-gen. `s=0` no pressure, `s=1` lethal/sterile. Exactly the 0–100% slider I was reaching for.
- **Crow's Index of Opportunity for Selection (I)** — variance in reproductive success / mean². Tells you the ceiling on how strong selection can be in a given population right now. Crow 1958, applied to humans across many populations.
- **Opportunity for sexual selection (Is)** — same thing, split by sex. Almost always much higher in males than females (max kids per man is unbounded; max kids per woman ≈ 20).
- **Byars, Ewbank, Govindaraju, Stearns (PNAS 2010)** — measured actual selection coefficients on contemporary American women using the Framingham Heart Study. Found selection *for* shorter, heavier, earlier first birth, later menopause. Real numbers exist for current pressure.

## What we already know is happening now

- Selection FOR shorter, slightly heavier women (Framingham data)
- Selection FOR earlier age at first birth, later age at menopause
- Selection FOR lactase persistence (still ongoing in some populations)
- Selection AGAINST schizophrenia is weakening (carriers reproduce more than they used to)
- Selection AGAINST myopia has essentially stopped (glasses)
- Y-chromosome bottleneck ~7000 years ago: roughly 17 reproductive women per 1 reproductive man at the trough. Cultural shift (agricultural patrilineal clans), not biological. Sexual selection on men was *brutal*.

## Sex split — the interesting part

- Female max kids ≈ 20. Male max kids unbounded. So opportunity for selection on men is always ≥ opportunity for selection on women, often by a lot.
- Historically, the ratio of male-RS-variance to female-RS-variance was probably enormous (Y-bottleneck).
- Universal monogamy norms *flatten* male variance. So the modern era may actually have *less* opportunity for sexual selection on men than agricultural-era humans, even though it feels like the opposite.
- Modern dating apps may re-concentrate male variance. Thin recent evidence. Don't assume.

## Traits to consider, with honesty rating

**Measurable now (Framingham-class data exists):**
- Height (women: selected shorter; men: complicated)
- Weight / BMI
- Age at first birth
- Age at menopause
- Blood pressure, cholesterol (selection direction is surprising)

**Plausibly measurable (twin studies + reproductive outcomes):**
- Educational attainment / IQ proxy — selection is currently weakly *negative* in most modern populations (more education → fewer kids). This is well-documented and politically loaded.
- Schizophrenia / bipolar (relaxed selection)
- Autism (contested — relaxed in some forms, possibly not in others)

**Speculative / hypothesized (don't lead with these):**
- Psychopathy / dark triad — plausibly selected for in some contexts, against in others. Hard to measure directly. Flag as estimate.
- "Ugly men reproducing less" — the just-so story says yes, the data says monogamy *flattens* male variance compared to history. Don't assume. Could go either way depending on era.
- Aggression / violence — Pinker-style decline in violence rates would imply weaker selection for it now, but the direction of causation is messy.

**Bad examples (don't use):**
- Blindness — most onset is post-reproductive. Weak signal.
- Cancer — almost entirely post-reproductive. Selection is negligible.

**Better examples for "stuff that used to kill you before reproducing":**
- Cleft palate
- Achondroplasia (dwarfism)
- Congenital deafness
- Severe asthma
- Type 1 diabetes
- Hemophilia

## The graph

Matrix is the natural shape:
- Rows = traits (~15–25)
- Columns = eras (100k / 10k / 1k years ago / now)
- Cells = selection coefficient, colored by direction (red = selected against, blue = selected for) and intensity
- Split into two panels: male / female
- Every cell labeled `measured | estimated | hypothesized` so the honesty is in the graph itself

Alternative shape: time-series for a handful of carefully chosen traits, with male/female lines. Less data-dense but more readable.

## Honest framing

The point isn't to justify historical horrors. It's to show that the pressures *changed*, and to make legible what the current pressures actually are. Some of the answers are uncomfortable (educational attainment is currently dysgenic in the technical sense). Some are reassuring (relaxed selection against many heritable conditions). The graph should not flinch from either.

## Methodology risks (must address before graph)

- **Time-traveling selection coefficients are inherently estimates.** We can measure now (Framingham-class studies). We can infer 7000 years ago (ancient DNA + Y-chromosome diversity collapse). Anything in between is interpolation. Be honest about uncertainty bands.
- **"Era" is fuzzy.** 10,000 years ago covers many populations under wildly different conditions. Pick representative populations per era, name them, don't average humanity.
- **Selection is on alleles, not traits.** Traits are polygenic. The coefficient per trait is the effective summed pressure across many loci. Footnote this; don't get tangled in it.

## Open questions

- Whether to do a matrix or a time-series — depends on how much we trust the historical estimates
- How many traits to include — 8 careful ones probably better than 25 sloppy ones
- Whether to graph sexual selection (Is) separately from natural selection (s)
- How to handle the politically loaded ones (IQ/education, race-correlated traits). Default: include the well-measured ones honestly, skip the ones where the science is too contested to be credible.

## Spinoffs to keep in mind

- "Y-chromosome diversity over time" alone is a great standalone graph — the 7000-year bottleneck is visually shocking. Could be a one-off.
- "Selection on educational attainment, by country, by century" is its own project.
- "Relaxed selection on heritable conditions since modern medicine" — could be a one-off with a handful of well-measured conditions.
