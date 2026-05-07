# Princess Leia Organa

## Character Summary
- **Source work:** Star Wars: A New Hope (1977), The Empire Strikes Back (1980), Return of the Jedi (1983). Original Trilogy canon as portrayed by Carrie Fisher.
- **Audience:** male-targeted
- **Decade slot:** 1980s
- **Cultural reach proxy:** Original Trilogy lifetime worldwide gross ≈ $1.85B in then-year dollars (ANH ~$775M, ESB ~$549M, ROTJ ~$475M); the "Slave Leia" / metal-bikini outfit from ROTJ is one of the most iconic and replicated costumes in cinema history (recurring at conventions for 40+ years; FHM and Maxim placed Carrie Fisher / Slave Leia repeatedly on "all-time hottest" lists through the 90s and 2000s).
- **Canonical version used:** Slave Leia / metal-bikini moment in Return of the Jedi (1983) per ticket instruction — i.e. the canonical male-fantasy framing of the character. Leia is canonically 23 in ROTJ (19 in ANH, 21 in ESB).

## Universal-Desirable Traits

| Trait | Threshold/Filter | Base rate | Source |
|---|---|---|---|
| Top-quintile attractiveness (face + body) | 80th+ percentile (iconic male-fantasy figure; metal-bikini imagery is genre-defining) | 0.20 | base-rates.md → Top-quintile attractiveness (US adult women) |
| Body composition (BMI 18.5–22) | Slim build; visible toned figure in metal-bikini scene. NOT DD+ (Carrie Fisher canonically slim-bust, not buxom) | 0.22 | base-rates.md → BMI 18.5–22 (US women aged 20–28) |
| No kids | Childless throughout OT (Ben Solo conceived after ROTJ in canon) | 0.70 | base-rates.md → Childless / no kids (US women aged 20–28) |
| Low neuroticism (bottom-quartile Big 5) | Emotionally stable through Alderaan destruction, Imperial torture, Jabba captivity, and Rebel command pressure — top-end emotional stability | 0.25 | base-rates.md → Big 5 low neuroticism, bottom quartile |

Traits considered and excluded (does not exhibit, or does not apply):
- **Age window (20–28):** Leia is 19 in ANH and 23 in ROTJ — bracketed by the base population's 20–28 window. Treated as implicit in base population (not multiplied separately).
- **DD+ breast-size proxy:** Not implied. Carrie Fisher / canonical Leia is slim-bust; metal-bikini iconicity comes from overall figure, not bust size. NOT counted.
- **Currently single:** Edge case — by ROTJ canonical moment Leia is romantically involved with Han Solo (the rescue from Jabba is motivated by their relationship). Strictly, she fails this filter at the canonical moment. Excluded from calc; noted below.
- **Plays protagonist's hobbies / aligned interest profile:** N/A in-universe — Star Wars setting does not map onto contemporary male-audience hobby profiles (no gaming, anime, niche-music coding for the character).
- **Top-decile Agreeableness ("Cool Girl" / low-maintenance):** NO — Leia is sharp-tongued, commanding, openly critical of Han ("scoundrel," "I'd just as soon kiss a Wookiee"), gives orders. She is the *opposite* of the low-maintenance Cool Girl trope. Excluded.
- **High Sociosexual Orientation:** Not indicated in canon — single on-screen romance arc, slow-build with Han across 3 films. Excluded.
- **Doesn't follow mainstream "girl culture":** Trivially true in-universe (no Kardashians in-universe), but the trait is meant to capture characters specifically *coded* against girl culture. For Leia this is not a load-bearing characterization beat. Excluded.

## Personality / Characterization (Excluded from Calc)

- **Princess / royalty:** Per ticket instruction, "princess" in male-target media reads as fantasy ornament, not status-seeking signal. Not a universal slider.
- **Rebel general / leadership competence:** Characterization that varies by audience preference (some find competence-coded female leads attractive, some prefer more traditionally feminine framing). Not universal.
- **Diplomat / spy / undercover agent:** Plot-functional skills, not slider-maxed achievement traits in the way male-side stacks count income or pilot certs.
- **Force-sensitive / Skywalker bloodline:** Exotic / "chosen one" lineage — characterization, not a universal-desirable trait.
- **Slave Leia / metal-bikini moment with chain (vulnerability + visual ornament):** This is the load-bearing fantasy beat for the character — combines damsel/captivity coding with iconic visual styling. Per plan, vulnerability is flagged as personality, not quantified. The visual-iconicity itself is the "personality" of the character in male-fantasy terms.
- **Sharp wit / commanding personality:** Characterization (and notably *anti*-correlated with the "Cool Girl" universal trait the male-target stack typically counts).

## Joint Probability

- **Method:** filter (male-target stack)
- **Naive product of marginals:**
  0.20 × 0.22 × 0.70 × 0.25
  ≈ 7.7e-3
  (≈ 1 in 130, applied within the base population of US women aged 20–28)
- **Correlation adjustment:** Several of the traits in Leia's stack are POSITIVELY correlated via halo and life-stage clustering:
  - Top-quintile attractiveness ↔ BMI 18.5–22: positive (slim figures rate higher in male-rated attractiveness studies; r ≈ 0.20–0.30).
  - Top-quintile attractiveness ↔ low neuroticism: weak positive halo ("what is beautiful is good"; r ≈ 0.10–0.15).
  - No-kids ↔ BMI 18.5–22: weak positive (childless women on average maintain lower BMI; life-stage effect).
  - Net direction: naive product OVERSTATES rarity. Reality is roughly 1.5–2x less rare than the multiplied marginals.
- **Adjusted estimate:** ~1.3e-2 (≈ 1 in 75 women aged 20–28). Bracket: [7e-3, 2e-2].
- **Population implication:** Out of ~14M US women aged 20–28, roughly 175,000 match Leia's universal-desirable stack. This is one of the *less* rare male-target heartthrob profiles — Leia is carried by iconic visual framing (Slave Leia outfit) and characterization (princess + general + Force-sensitive) rather than by stacking many universal-desirable traits.

## Confidence Assessment
- **Overall:** medium
- **Trait identification:** high — Leia is one of the most-analyzed characters in pop culture; canon is unambiguous on age, family situation, personality, and the canonical fantasy moment (Slave Leia / ROTJ).
- **Base rates:** medium — attractiveness top-quintile and low-neuroticism bottom-quartile are definitional; BMI 18.5–22 derived from NHANES 2017–2020 obesity prevalence (estimated, not directly tabulated for the 20–28 sub-cohort); childless rate from Census 2024 is a direct citation.
- **Correlation adjustments:** medium — direction of bias (positive halo, naive product overstates) is well-supported in Big 5 + attractiveness literature; magnitude (1.5–2x adjustment) is judgment, not a measured joint distribution.

## Sources

Character and trait identification:
- [Princess Leia — Wikipedia](https://en.wikipedia.org/wiki/Princess_Leia)
- [Leia Skywalker Organa Solo — Wookieepedia](https://starwars.fandom.com/wiki/Leia_Skywalker_Organa_Solo)
- [How Old Was Princess Leia In Each Star Wars Movie — ScreenRant](https://screenrant.com/star-wars-princess-leia-age-movies-shows/) (canonical ages 19/21/23 across OT)
- A New Hope (1977), The Empire Strikes Back (1980), Return of the Jedi (1983) — primary source works.

Base-rate sources (full citations in `base-rates.md`):
- NHANES 2017–March 2020 prevalence data — BMI distribution
- US Census Bureau 2024 fertility / childlessness data — childless rate ages 20–28
- Big Five Inventory norms (Soto et al. 2011) — neuroticism quartile cutoffs
- OkCupid / photo-rating studies and Langlois et al. 2000 meta-analysis — attractiveness percentile reliability

## Notes / Edge Cases

- **Canonical-moment relationship status:** The ticket explicitly directs use of the Slave Leia (ROTJ) framing as canonical. At that exact moment, Leia is romantically attached to Han Solo. Strictly applying "currently single" would exclude her from the filter; in male-fantasy projection this is typically decoupled from canon. I excluded the "single" filter from the calc and note it here. A reviewer who reads "single" as "not yet married, no kids, in the dating market" would re-include it (~50% of women 20–28 have no current partner per Pew), pulling the joint to ~3.9e-3 (~1 in 260) before correlation adjustment.
- **Slave Leia decoupling:** The metal-bikini moment is the load-bearing male-fantasy beat for the character, but it is a *visual-iconicity* trait combined with damsel-coded vulnerability — both flagged by the plan as personality, not universal-desirable. This means the trait that *most* drives Leia's male-fantasy status is *not* counted in the universal-desirable stack. This is the right call methodologically, but it means the joint probability genuinely understates the cultural-fantasy "weight" of the character.
- **Stack-thinness compared to other male-target heartthrobs:** Leia exhibits 4 universal-desirable traits with relatively forgiving thresholds (no DD+, no top-decile Agreeableness, no SOI signal, no aligned-hobby filter). Compare to characters like Jessica Rabbit or Tifa Lockhart, who bundle DD+ AND BMI 18.5–22 (genuinely rare joint), or the "Cool Girl" stack (Mikaela Banes, Rebecca Cyberpunk) that adds top-decile Agreeableness. Leia's improbability is real but modest. **This is a genuine signal for the project**: not all canonical male-target heartthrobs slider-max — some lean heavily on iconic visual moments + characterization.
- **Force-sensitivity not counted:** Force-sensitivity is the universe's analog to a rare cognitive/spiritual trait. If the project counted it as analogous to "top 1% IQ" or similar, it would push Leia's stack much rarer. I excluded it as exotic/characterization rather than universal — but a reviewer could argue it belongs as a "rare trait" multiplier. Leaving it out keeps Leia comparable to other characters in the dataset (and avoids privileging sci-fi/fantasy characters over realistic-setting ones).
- **Age slightly below window:** Leia is 19 in ANH (one year below the 20–28 base population floor) and 23 in ROTJ (mid-window). Treating the canonical ROTJ moment as the basis, she is comfortably in the base population. Not adjusted.

<!-- COMPLETE -->
