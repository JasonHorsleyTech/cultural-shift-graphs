# Plan: The Man Stack

## Summary

52 research tickets. 2 list-validation tickets at the front (one per gender, sanity-checks the locked heartthrob list against multi-source aggregation), then 50 character-profile tickets (25 female-targeted heartthrobs, 25 male-targeted heartthrobs, interleaved by gender and decade so the dataset is balanced at any stopping point).

Each character ticket produces a result file with:
- Trait list (universal desirables only — personality traits noted but excluded from the calculation)
- Per-trait threshold (female-target stack) or filter predicate (male-target stack)
- Per-trait base rate (looked up in `base-rates.md`, derived and appended if missing)
- Joint probability with correlation adjustments
- Sources and confidence assessment

The graph: two distributions side by side, log-probability X-axis, density Y-axis. Median/P10/P90 per distribution. Outliers labeled.

## Methodology

### Two probability methods, comparable units

**Female stack (achievement axis): Threshold method.**

For each trait, set a numerical bar, look up the marginal probability of clearing it, multiply with correlation adjustments. Trait list:

| Trait | Threshold (default) | Source for base rate |
|---|---|---|
| Height | ≥ 6'2" | CDC NHANES anthropometric data |
| Income | ≥ $10M/yr (or as the character implies — billionaires get $1B+) | IRS Statistics of Income, Forbes |
| Intelligence | ≥ 130 IQ (top 2%) | IQ distribution norms |
| Physical fitness | Top quintile (visible muscle, athletic) | NHANES body composition data |
| Musical/artistic skill | Professional / virtuoso level | Estimated via career path data |
| Additional skills | Each "expert in X" trait counted (chef, pilot, surgeon, etc.) | Occupational licensing data |
| Languages | Each language beyond English counted | American Community Survey language data |
| Age in prime window | 28–38 (the "powerful but still hot" window common in romance) | Census demographics |
| Family unencumbered | Orphan / estranged / no obligations | Combined demographic + survey data |
| Mysterious dark past | Not quantified — flag as personality, exclude from calc | — |

**Male stack (perfection-and-frictionlessness axis): Filter method.**

Start with a base population (women aged 20–28 in the US, ≈14M). Apply conditional filters. Each filter has a base rate from a real public source. Trait list:

| Filter | Approx default predicate | Source for base rate |
|---|---|---|
| Age window | 20–28 (or as the character implies) | Census demographics |
| Top-quintile attractiveness (face + body) | 80th+ percentile on dating-app match rate distributions | Rudder / OkCupid data, photo-rating studies |
| Body composition | BMI 18.5–22 AND breast size proxy (DD+ if implied) | NHANES + bra-fit studies (NOTE: positive correlation, naive multiplication overstates rarity — use joint distribution) |
| Currently single | No partner | Pew/Census marital + relationship status by age |
| No kids | Childless | American Community Survey |
| Plays the protagonist's hobbies (e.g. video games 4+ hrs/wk for gamer protagonist) | As implied by the character | ESA, Pew media surveys |
| Aligned interest profile (anime, niche music, specific media) | As implied | Nielsen, time-use surveys |
| Top-decile Agreeableness on Big 5 | "Cool Girl" / low-maintenance proxy | Big 5 norms |
| Low neuroticism | Bottom-quartile Big 5 neuroticism | Big 5 norms |
| High Sociosexual Orientation | Open to early sexual interest | SOI-R survey norms |
| Doesn't follow mainstream "girl culture" (Kardashians, fashion celebrity, etc.) | As implied — many male-target love interests are coded as "not like other girls" | Survey data on celebrity engagement |
| Vulnerability / needs-the-protagonist | Damsel-coded element | Not quantified — flag as personality, exclude from calc |

Both methods land on a comparable joint probability number: P(real human matches every stacked trait simultaneously). Different yardsticks, same units.

### Correlation handling — critical methodology note

Naive multiplication of marginals assumes trait independence. Most stacks violate this. The base-rates file (`base-rates.md`) is where joint distributions are encoded once, properly, with citations.

**Direction of bias matters and is asymmetric:**

- **Female-side traits are negatively correlated** in the real world (time-to-billionaire trades against time-to-virtuoso-pianist; CEO-by-29 trades against time-to-master-three-languages and pilot certification). When traits trade against each other, naive multiplication *underestimates* improbability — the true joint is rarer than the product. This means the female-stack numbers reported here are *conservative*; reality is even more absurd than the math suggests.

- **Male-side traits are weakly positively correlated** via halo effects (top-attractiveness women may score slightly higher on Agreeableness in survey data due to social conditioning, may have weak positive correlation with low neuroticism, etc.). Naive multiplication *overestimates* improbability — the true joint is slightly less rare than the product. This means the male-stack numbers reported here are *liberal*; reality is slightly less absurd than the math suggests.

Net effect of the asymmetry: the comparison favors "women's heartthrobs are more unrealistic" by some margin beyond what naive math shows. Flag this in the final graph annotations. Don't bury it — it's the most important methodological point.

### What counts as a "trait"

Universal desirables (count toward the calc): things the median consumer of the target gender would say "more of this is better, all else equal" when asked. Height, income, intelligence, fitness, etc. — traits that almost everyone would push the slider up on if given the choice.

Personality / characterization (does NOT count): things that vary by preference. Quirky, brooding, funny, mysterious, has a specific hobby, weird backstory. These are what make the character a *character*. Jack from Titanic's "poor artist with a heart of gold" is characterization; Christian Grey's "billionaire-pianist-pilot-chef" is slider-maxing.

The line is fuzzy in places. When in doubt: would the *median* person of the target audience prefer more of this trait? If yes, it's universal. If preferences split (some find it attractive, some don't), it's personality.

## Selection methodology

The 25+25 character list is locked in `heartthrobs.md`, generationally stratified (5 per decade × 5 decades, 1980s–2020s). Lock was done at graduation based on aggregate cultural recognition. Tickets 001 and 002 validate the locked list against multi-source aggregation across published "top X" rankings.

Source lists for validation:

**Female-targeted heartthrobs (male leads):**
- Goodreads "Best Book Boyfriends" lists
- NYT romance bestseller archive (recurring authors → recurring leads)
- Cosmopolitan, Glamour, Marie Claire "ultimate movie boyfriends" archives
- BBC, Vulture, Empire "best rom-com leads"
- Romance Writers of America RITA Award winners

**Male-targeted heartthrobs (female love interests):**
- IGN, GameSpot, Polygon "best video game love interests"
- Empire, Rolling Stone "sexiest movie heroines"
- FHM/Maxim "100 sexiest" archives (yes, awkward — but these are what the male audience was actually fantasizing about; pair with "best love interests of all time" sources to balance the editorial lean)
- IMDb user-curated "hottest love interests"
- Anime News Network / MyAnimeList top-waifu rankings

Methodology: aggregate frequency-of-mention across multiple sources, cross-validate with consumption data (box office, sales, units shipped), stratify by decade. If validation tickets find a character on the locked list that doesn't appear in the aggregated rankings, flag for swap consideration — but don't modify the locked list automatically. The validation report goes to Jason for review.

## Base-rates protocol

Single shared file: `base-rates.md`. Format:

```markdown
## [Trait predicate]

Base rate: [percentage / fraction] of [population]
Source: [citation]
URL: [link]
Joint distribution note: [if this is a joint trait, document correlations and cite the joint estimate, NOT the product of marginals]
Last updated: [date] (ticket NNN)
```

Agent flow when processing a ticket:
1. Identify each trait the character has and its threshold/filter
2. For each, search `base-rates.md` for an existing entry
3. If found, use it. If not, look it up from authoritative sources (Census, BLS, Pew, NHANES, etc.), append to `base-rates.md` with full citation, then use it
4. For known-correlated trait pairs (height+income, BMI+breast-size, attractiveness+Agreeableness halo), use the joint entry rather than multiplying marginals

This pattern means each base rate is looked up *once* across the project, with the lookup costs amortized over all 50 characters. It also creates an auditable methodology trail — anyone can re-run the math with the same base rates and verify.

## Ticket structure

Tickets are interleaved by gender and decade:
- Round 1 (best-known per decade): 5 decades × 2 genders = 10 tickets
- Rounds 2–5: same pattern, working through the rest of the list

Stopping at any ticket leaves a balanced sample across genders and decades.

## Result File Template

Each character ticket produces `results/NNN-character-slug.md`:

```markdown
# [Character Name]

## Character Summary
- **Source work:** [Title, year, format (novel/film/game/TV)]
- **Audience:** [female-targeted | male-targeted]
- **Decade slot:** [1980s | 1990s | 2000s | 2010s | 2020s]
- **Cultural reach proxy:** [box office / book sales / game units / TV viewership — best available number]
- **Canonical version used:** [If multiple adaptations exist, which one this profile is based on]

## Universal-Desirable Traits

For each universal-desirable trait the character exhibits, fill the row. Skip traits the character does NOT exhibit.

| Trait | Threshold/Filter | Base rate | Source |
|---|---|---|---|
| [Trait name] | [Numerical threshold or filter predicate] | [Probability or fraction] | [Pointer to base-rates.md entry] |

## Personality / Characterization (Excluded from Calc)

List the traits that are personality-coded and not counted in the joint probability. One sentence per trait.

- [Trait]: [why it's personality, not universal]

## Joint Probability

- **Method:** [threshold | filter]
- **Naive product of marginals:** [number, e.g. 1.2e-7]
- **Correlation adjustment:** [direction and rough magnitude — e.g. "Negative correlation between income and time-for-piano-mastery; reality ≈10x rarer than naive product"]
- **Adjusted estimate:** [number, with bracketing if uncertain]
- **Population implication:** [Out of N people in the relevant base population, ~K match. e.g. "Out of ~80M US adult men, fewer than 1 matches Christian Grey's full stack."]

## Confidence Assessment
- **Overall:** [high | medium | low]
- **Trait identification:** [high | medium | low] — [one-line justification]
- **Base rates:** [high | medium | low] — [one-line justification]
- **Correlation adjustments:** [high | medium | low] — [one-line justification]

## Sources

[All sources used to identify character traits. Wikipedia, fan wikis, original work, character analysis articles. Distinct from base-rates.md citations.]

## Notes / Edge Cases

[Anything weird about this character — multiple adaptations, ambiguous traits, traits that don't fit cleanly into either bucket, etc.]
```

## Output Graph Spec

- **Type:** Two overlaid density distributions (or side-by-side violin plots)
- **X-axis:** log10(joint probability of trait stack matching one real human)
- **Y-axis:** density
- **Series:** female-targeted (one color), male-targeted (another color)
- **Markers:** Median, P10, P90 per distribution
- **Outliers:** Top 3 most improbable per side, labeled by character name
- **Annotations:** Methodology note flagging the correlation-direction asymmetry; reach validation summary; source list for reach data

Optional secondary visualization: a "trait stack" bar chart per character, ranked by improbability, showing which threshold/filter contributes most to the rarity. Useful for the dinner-party "look how many sliders Christian Grey maxes" effect.

## Rationale Notes

### Why skip the explore phase?

Exploration was done in conversation pre-graduation. The trait taxonomy, the threshold-vs-filter quantification asymmetry, the correlation-direction note, the selection methodology, and the locked 25+25 list were all worked out in chat. The status starts at `research` rather than `explore`.

### Why generational stratification (5 per decade)?

Recency bias in published rankings would otherwise dominate. Forcing 5 per decade × 5 decades makes generational stability *itself* a finding: if the Man Stack hypothesis holds across 50 years of romance leads, that's much more compelling than "yeah, 2010s heartthrobs are absurd."

### Why interleave tickets by gender and decade?

The orchestrator works tickets in filename order. If the pipeline stops mid-research, interleaving guarantees the partial dataset is balanced across genders and decades. No "we got all the female-target characters but only half the male-target ones" failure mode.

### Why pre-lock the character list at graduation?

Selection bias is the single most consequential step in this project. If the list is wrong, the whole conclusion is poisoned and you can't tell from inside the research. Locking at graduation with Jason's eyes on it protects against post-hoc list-tweaking that would invalidate the comparison. Validation tickets are belt-and-suspenders, not the actual selection mechanism.

### Why are some traits in the female stack but not the male stack (and vice versa)?

Because the *axes* differ. Men's media doesn't stack income or languages onto female love interests — that's not the male fantasy. Female-target media doesn't stack DD-cup-with-low-BMI onto male leads. Symmetric *rigor* is the goal, not symmetric *trait lists*. Both lists are calibrated to the actual stacking pattern in their genre, then both run through the same probability machinery to produce comparable joint probabilities.

### Honest finding: it might be a tie

If the two distributions overlap substantially, the headline becomes "both genders fantasize about ~1-in-a-million people, just stacked on different axes." That's a real and interesting finding — and arguably the most likely outcome. Don't pre-commit to "women are more unrealistic" as the conclusion. The math decides.

### Risk: framing as gendered axe-grind

The Man Stack name and the personal motivation (50 Shades of Grey rage) lean toward "women have unrealistic expectations." Mitigation in the final graph: lead with the symmetric finding (both sides stack), then break out the by-gender numbers, then let the reader draw the conclusion. Don't editorialize in the title or hero text.
