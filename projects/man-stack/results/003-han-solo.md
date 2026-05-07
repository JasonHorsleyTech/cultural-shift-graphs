# Han Solo

## Character Summary
- **Source work:** Star Wars: The Empire Strikes Back (1980, film) and Return of the Jedi (1983, film). Original Trilogy canon, as portrayed by Harrison Ford.
- **Audience:** female-targeted
- **Decade slot:** 1980s
- **Cultural reach proxy:** Empire Strikes Back box office ~$549M worldwide (1980, on ~$33M budget); Return of the Jedi ~$475M worldwide (1983). Combined OT cultural footprint exceeds 100M theater attendees lifetime; Han Solo persistently named in "best movie boyfriends of all time" lists for four decades.
- **Canonical version used:** Original Trilogy, theatrical/canonical Han Solo as portrayed in 1980–1983. Later sequel-trilogy aging or Solo (2018) backstory not used.

## Universal-Desirable Traits

| Trait | Threshold/Filter | Base rate | Source |
|---|---|---|---|
| Physical fitness | Top quintile (athletic, visible fitness; engages in physical combat/running) | 0.20 | base-rates.md → Physical fitness top quintile (adult men) |
| Pilot skill (additional skill #1) | Professional / virtuoso (canonically the best pilot in the galaxy) | 1e-3 | base-rates.md → Expert/professional pilot (US adult) |
| Mechanic skill (additional skill #2) | Expert (jury-rigs Falcon hyperdrive on the fly) | 1e-3 | base-rates.md → Expert/professional mechanic (US adult) |
| Languages beyond native | 2 (understands Shyriiwook/Wookiee and Huttese in addition to Galactic Basic) | 0.03 | base-rates.md → 2+ non-native languages (US adult) |
| Age in prime window | 35 in Empire; canonical age fits 28–38 prime window | 0.094 | base-rates.md → Age 28–38 (US adult men) |
| Family unencumbered | Orphan, no known siblings/spouse/kids during OT | 0.05 | base-rates.md → Family unencumbered (US adult men) |

Traits considered and excluded:
- **Height**: Canonical 6'1" (1.85 m); Harrison Ford's portrayal-era height ~6'0"–6'1". Does NOT clear the ≥6'2" threshold. Excluded.
- **Income / wealth**: Owns the Millennium Falcon but is in significant debt to Jabba the Hutt during Empire and ROTJ; net worth is negative. Does NOT clear the ≥$10M income threshold. Excluded.
- **Intelligence (≥130 IQ)**: Cunning and resourceful (Kessel Run boast, tactical instincts) but never depicted as a genius-tier intellectual. Below threshold. Excluded.
- **Musical/artistic skill**: None depicted. Excluded.

## Personality / Characterization (Excluded from Calc)

- **Roguish charm / cocky swagger**: Tonal trait; preferences split — many find it attractive, some find it grating.
- **Sarcastic humor**: Personality, varies by audience preference.
- **Smuggler / outlaw profession**: Per ticket notes, profession not a universal desirable.
- **Mysterious dark past (Imperial Academy washout, Jabba debt, etc.)**: Plan explicitly flags as personality; not quantified.
- **Loyalty arc / "I love you" — "I know"**: Characterization; not a universal slider.
- **Bad boy with a heart of gold**: Archetype, not a slider trait.

## Joint Probability

- **Method:** threshold (female-target stack)
- **Naive product of marginals:**
  0.20 × 1e-3 × 1e-3 × 0.03 × 0.094 × 0.05
  ≈ 2.82e-11
  (≈ 1 in 35 billion)
- **Correlation adjustment:** Pilot ↔ mechanic skills are weakly POSITIVELY correlated (mechanical/engineering aptitude transfers between piloting and repair). Languages ↔ pilot/mechanic weakly negative (time spent on technical mastery competes with time on language acquisition). Age 28–38 ↔ family unencumbered is weakly NEGATIVE (younger adults more likely to still have living parents, but at 28–38 most do). Overall, the positive pilot↔mechanic correlation slightly dominates — naive product modestly OVERESTIMATES rarity. Adjusted estimate roughly 3–5x more common than naive (i.e. less rare than the multiplied marginals suggest).
- **Adjusted estimate:** ~1e-10 (≈ 1 in 10 billion). Bracket: [3e-11, 3e-10].
- **Population implication:** Out of ~127M US adult men, ~0.013 expected matches — effectively zero in the US, and only a fraction of one expected in the entire ~3.5B global adult-male population. Han Solo's universal-desirable stack is genuinely rare, but driven mostly by virtuoso-pilot + virtuoso-mechanic + multilingual rather than by extreme top-end of any one trait.

## Confidence Assessment
- **Overall:** medium
- **Trait identification:** high — Han Solo's traits are well-documented across 45 years of canon, fan analysis, and the films themselves. Pilot/mechanic/multilingual all canonically established.
- **Base rates:** medium — pilot and mechanic rates from BLS/FAA are solid; "expert tier" within those (1 in 1000) is an order-of-magnitude estimate. Family-unencumbered rate is the softest (5% is a reasoned composite, not a single citation).
- **Correlation adjustments:** medium — directional reasoning is defensible (pilot↔mechanic positive, age↔orphan slightly negative) but the magnitude (3–5x) is judgment, not a measured joint distribution.

## Sources

Character and trait identification:
- [Han Solo — Wikipedia](https://en.wikipedia.org/wiki/Han_Solo)
- [Han Solo — Wookieepedia](https://starwars.fandom.com/wiki/Han_Solo) (canonical height 1.85 m, fluent in Shyriiwook comprehension and Huttese)
- [Han Solo's Age During the Original Star Wars Trilogy — ScreenRant](https://screenrant.com/star-wars-movies-han-solo-age-how-old/) (~32–35 across OT)
- [Harrison Ford — Wikipedia](https://en.wikipedia.org/wiki/Harrison_Ford) (38 in Empire 1980, 41 in ROTJ 1983)
- The Empire Strikes Back (1980) and Return of the Jedi (1983) as primary source works.

Base-rate sources (full citations in `base-rates.md`):
- [FAA U.S. Civil Airmen Statistics](https://www.faa.gov/data_research/aviation_data_statistics/civil_airmen_statistics) — pilot population
- [Census ACS Language Use](https://www.census.gov/library/stories/2022/12/languages-we-speak-in-united-states.html) — multilingualism
- US Census Bureau population by age/sex tables — adult-men age distribution
- BLS Occupational Employment and Wage Statistics — mechanic occupation totals
- CDC NHANES body composition / fitness test percentile data — fitness top quintile

## Notes / Edge Cases

- **Height edge case:** Canonical Han is exactly at the threshold gray zone (6'1" vs. ≥6'2"). Excluded per strict reading of the threshold; if the threshold were ≥6'0" he would clear easily.
- **Wealth ambiguity:** Owning a unique starship is an asset, but Han is functionally broke and indebted during the OT window. Wealth excluded.
- **Pilot threshold:** "Best in the galaxy" framing in canon is hyperbolic. Used 1e-3 (top tier of US-adult pilot population) rather than the more extreme 1e-5 (test-pilot/ace tier) because the on-screen depiction is "remarkable but not literally fictional-level beyond all human pilots." A reviewer who reads Han as test-pilot-tier would push the joint to ~1e-12.
- **Multilingual note:** Han demonstrably understands Shyriiwook (responds to Chewbacca) and Huttese (negotiates with Greedo, Jabba) but rarely *speaks* them. In real-world linguistic terms, comprehension counts as bilingual proficiency. Counted as 2 languages beyond Basic.
- **Compared to other 1980s female-targeted leads:** Han's stack is meaningfully *less* extreme than Christian Grey types — he leans on competence/skill stacking (pilot + mechanic + languages) rather than wealth/intelligence/height maxing. This is a genuine generational signal worth tracking when the full dataset is in.
- **Personality dominance:** Han is one of the strongest examples of a heartthrob whose appeal is mostly *personality* (the rogue-with-a-heart archetype) rather than slider-maxing. The universal-desirable stack alone undersells why he's been on every "best movie boyfriend" list for 45 years. This is a real finding for the project: some heartthrobs land on charisma + archetype, others on stack rarity.

<!-- COMPLETE -->
