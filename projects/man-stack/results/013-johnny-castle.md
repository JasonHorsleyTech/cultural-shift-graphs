# Johnny Castle

## Character Summary
- **Source work:** Dirty Dancing (1987, film), as portrayed by Patrick Swayze. Set in summer 1963 at Kellerman's, a Catskills resort.
- **Audience:** female-targeted
- **Decade slot:** 1980s
- **Cultural reach proxy:** $214M+ worldwide box office on a $5M budget (the most successful independent film of the 1980s); 1987 home-video sales record-setter — first film to sell 1M+ VHS copies in its first year. "Best movie boyfriend"-list staple for nearly four decades; cited in Cosmopolitan, Glamour, Marie Claire, BBC, Empire, and Vulture rom-com retrospectives.
- **Canonical version used:** 1987 theatrical film. Later TV-series, stage-musical, and 2017 ABC remake versions not used.

## Universal-Desirable Traits

| Trait | Threshold/Filter | Base rate | Source |
|---|---|---|---|
| Physical fitness | Top quintile (professional dancer; visible elite athletic conditioning throughout the film) | 0.20 | base-rates.md → Physical fitness top quintile (adult men) |
| Musical/artistic skill | Career-tier professional dancer & instructor (teaches advanced ballroom/Latin, choreographs the climactic Mambo) | 2e-4 | base-rates.md → Professional / career-tier dancer or choreographer (US adult) |

Traits considered and excluded:
- **Height (≥ 6'2")**: Patrick Swayze stood ~5'10"–5'11" by his own account in *The Time of My Life*; the film never gives a canonical character height. Does NOT clear ≥6'2". Excluded.
- **Income (≥ $10M/yr)**: Working-class summer dance instructor at a Catskills resort. Lives season-to-season; explicitly working class as a major plot point. Does NOT clear. Excluded.
- **Intelligence (≥ 130 IQ)**: Sharp street-smart and emotionally perceptive but never depicted as exceptional cognitive intellect. Below threshold. Excluded.
- **Additional skills (chef/pilot/surgeon/etc.)**: None depicted. Dance is captured under musical/artistic. Excluded.
- **Languages beyond English**: None canonical. Excluded.
- **Age in prime window (28–38)**: Canonical character age is 25 (born 1938, set summer 1963). Outside the 28–38 window, despite Patrick Swayze actually being 34 during filming. Excluded.
- **Family unencumbered**: Mentions his family briefly (mother/blue-collar background); not depicted as orphan or estranged. Working class on the road but with extant family ties. Excluded.

## Personality / Characterization (Excluded from Calc)

- **Working-class outsider / "wrong side of the tracks"**: Class-coded archetype; preferences split (some find proletarian-romance attractive, some don't).
- **Brooding bad-boy with a soft core**: Tonal trait, not a slider.
- **Emotionally guarded → opens up**: Character arc, not a desirable.
- **Iconic dance-floor confidence ("Nobody puts Baby in a corner")**: Charisma/swagger; not quantifiable.
- **Older-man-mentor dynamic with Baby**: Story device, not a universal desirable.
- **Defends Baby's family / moral integrity**: Plot virtue, not a universal slider.
- **Sexual confidence / teaches the protagonist to dance (and more)**: Personality-coded element of the romance fantasy.

## Joint Probability

- **Method:** threshold (female-target stack)
- **Naive product of marginals:**
  0.20 × 2e-4
  = 4e-5
  (≈ 1 in 25,000)
- **Correlation adjustment:** Physical-fitness top quintile and professional-dancer status are *strongly positively correlated* — essentially every working dancer is in elite physical condition (P(top-quintile fitness | professional dancer) ≈ 0.95). Naive multiplication therefore meaningfully OVERSTATES the rarity. The honest joint is closer to the dancer marginal alone, lightly trimmed for the few non-fit dancers (older choreographers, recovering-injury cases): ~1.9e-4.
- **Adjusted estimate:** ~2e-4 (≈ 1 in 5,000). Bracket: [1e-4, 4e-4].
- **Population implication:** Out of ~127M US adult men, roughly 25,000 expected matches. Out of the ~3.5B global adult-male population, on the order of 700,000 matches. Johnny Castle's universal-desirable stack is the *most realistic* heartthrob profiled so far in this dataset by orders of magnitude — a functional dance instructor with an athlete's body is a category that demonstrably exists in real life. The fantasy element is entirely in the personality/archetype layer (the working-class rebel who dances like a god and falls for the rich girl), not in slider-maxing.

## Confidence Assessment
- **Overall:** medium-high
- **Trait identification:** high — Johnny Castle's traits (working-class dance instructor, athletic, professionally trained dancer, mid-20s) are unambiguous on screen and well-documented in 38 years of writing about the film. Minimal stack — easy to enumerate completely.
- **Base rates:** medium — fitness top-quintile is definitional. The professional-dancer rate (2e-4) is a derived BLS+gig-adjusted estimate; defensible but not measured precisely. A reviewer who reads Johnny as merely "a regional/seasonal-circuit instructor" rather than full career professional could push the rate higher (2.5–4e-4); one who reads him as touring-company tier could push it lower (~1e-4).
- **Correlation adjustments:** medium-high — fitness↔dancer correlation is very strong and well-established; the 4–5x naive-overstatement adjustment is justified by the conditional probability framing. With only two stacked traits, correlation handling is much simpler than for billionaire-pianist-pilot stacks.

## Sources

Character and trait identification:
- [Johnny Castle — Dirty Dancing Wiki](https://dirtydancing.fandom.com/wiki/Johnny_Castle)
- [Dirty Dancing — Wikipedia](https://en.wikipedia.org/wiki/Dirty_Dancing)
- [How Old Baby & Johnny Are In Dirty Dancing — ScreenRant](https://screenrant.com/dirty-dancing-baby-johnny-ages-how-old-difference/) — establishes Johnny as canonically 25 (born 1938, set summer 1963)
- [Patrick Swayze — Wikipedia](https://en.wikipedia.org/wiki/Patrick_Swayze) — height ~5'10"–5'11"; 34 during filming
- *The Time of My Life* (Patrick Swayze, Lisa Niemi Swayze; 2009 memoir) — Swayze's own self-reported height "five-eleven and 180 pounds"
- Dirty Dancing (1987) as primary source work

Base-rate sources (full citations in `base-rates.md`):
- [BLS OES May 2023, Dancers (27-2031)](https://www.bls.gov/oes/2023/may/oes272031.htm)
- [BLS OES May 2023, Choreographers (27-2032)](https://www.bls.gov/oes/2023/may/oes272032.htm)
- [BLS Occupational Outlook Handbook — Dancers and Choreographers](https://www.bls.gov/ooh/entertainment-and-sports/dancers-and-choreographers.htm)
- CDC NHANES body-composition / fitness percentile data — fitness top quintile

## Notes / Edge Cases

- **The "Jack Dawson tier" prediction was correct:** Per ticket notes, Johnny was expected to land at higher realism than billionaire-types. Two-trait stack landing at ~1 in 5,000 confirms it. He's the most realistic universal-desirable profile in the dataset to date — orders of magnitude more achievable than Christian Grey (~1 in 10^11) or Edward Cullen.
- **Personality-driven heartthrob:** Like Han Solo, Johnny's enduring "best movie boyfriend" status is overwhelmingly driven by *personality / archetype* (working-class outsider, dance-floor confidence, "Nobody puts Baby in a corner") rather than universal-desirable slider stacking. The stack-rarity number alone genuinely undersells his cultural footprint. This is a real finding the project should track: heartthrobs partition into "stack-rarity" types (Christian Grey, Edward, Mr. Darcy) and "personality/archetype" types (Han, Johnny, Jack Dawson).
- **Age threshold ambiguity:** Canonical 25 fails the 28–38 prime-window test. If Jason later wants to use the *actor's* age rather than the *character's* (Patrick Swayze was 34 during filming), Johnny would clear and add a 0.094 multiplier — pushing the joint to ~1.9e-5 (~1 in 50,000). Defaulted to canonical age per the methodology of "as the character implies."
- **Dancer-rate edge case:** Used 2e-4 (career-tier professional dancer). The plan's "musical/artistic skill virtuoso" benchmark was set against the musician rate of 1e-4. If the methodology demands strict virtuoso-tier (principal/concert-master equivalent), Johnny would NOT clear — a Catskills resort instructor isn't Bolshoi-tier. Defaulted to career-tier professional because (a) Johnny demonstrably teaches advanced students and choreographs original sequences and (b) the plan's threshold says "Professional / virtuoso level" with the lower bar being professional. A reviewer arguing strict virtuoso tier could exclude this trait entirely; the joint would collapse to 0.20 (~1 in 5), making Johnny effectively just-an-attractive-fit-guy.
- **Fitness ↔ dancer correlation matters here:** Two-trait stacks normally don't need much correlation analysis, but in this case the correlation is so strong (P(fit|dancer) ≈ 0.95) that the naive product is ~5x off. Without the adjustment, the result would falsely suggest Johnny is rarer than he is. Good case study for why correlation handling matters even at small stack counts.

<!-- COMPLETE -->
