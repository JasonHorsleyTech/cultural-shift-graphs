# The Man Stack

## The question

Who has more unrealistic fantasy expectations of the opposite sex — men or women? Settle it with math.

## The hypothesis

Female-targeted romantic fantasy stacks objectively-desirable male traits at statistically absurd rates. The Christian Grey case is canonical: 29, orphan, self-made billionaire, virtuoso pianist, trained chef, licensed pilot, polyglot, 6'3", blue eyes — every "objective desirability slider" cranked to 99 simultaneously, then he falls in love with his secretary.

Male-targeted romantic fantasy probably stacks too, but on different axes — physical perfection, frictionless availability, low-maintenance personality, hobby-alignment with the protagonist — rather than achievement. (Men don't fantasize about CEOs.)

The graphable question is the comparison. Whoever's fantasy heartthrob distribution sits further left on the log-probability axis has the more unrealistic expectations. If they're within an order of magnitude, the honest headline is "both genders fantasize about ~1-in-a-million people, just stacked on different axes."

## Why this is interesting

Personal axe: Jason saw 50 Shades of Grey in theaters and got upset at the trait-stacking. Wants to know if the gripe is justified or if men's fantasies are equally absurd. Either answer is a real finding — the goal is rigor, not vindication.

The trope is named here as "the Man Stack" — the tendency to max every objectively-desirable slider on a single fictional male character. The investigation extends symmetrically to female love interests in male-targeted media. Both sides get the same methodological scrutiny.

## Methodological spine

**Two probability methods, one for each side, both producing comparable joint probabilities:**

- **Female stack (achievement axis): Threshold method.** Set a numerical bar for each trait (height ≥ 6'2", income ≥ $X, languages ≥ 3, etc.), look up marginal probability from public data, multiply with correlation adjustments. Christian Grey's traits are negatively correlated in reality (time-to-billionaire trades against time-to-virtuoso-pianist), so naive multiplication *understates* improbability — flag this in the methodology note.

- **Male stack (perfection-and-frictionlessness axis): Filter method.** Start with a base population (women aged 20–28 in the US). Apply conditional filters one at a time: top-quintile attractiveness, currently single, no kids, plays the protagonist's video games, low neuroticism, high agreeableness, etc. Each filter has a base rate from a real public source (Census, Pew, ESA, Big 5 norms, SOI-R). What's left at the end is P(love interest exists) × population.

Both methods produce a directly-comparable joint probability number. Different yardsticks, same units.

## Trait taxonomy

Two trait buckets — only the first counts toward the improbability calculation:

- **Universal desirables** (everyone wants more of this): height, income, intelligence, fitness, musical/artistic ability, additional skills, additional languages, age in prime window, attachment availability (orphan = no in-laws), etc. These go into the calculator.
- **Personality / characterization** (preference, not universal): quirky, brooding, funny, weird backstory, specific hobbies as personality. These don't count against the realism budget — they're what makes the character a *character*. Jack from Titanic gets a pass here: his trait stack is basically "poor + heart of gold + hot," not Christian Grey's eight-slider max.

Per-gender trait lists differ because the stacking axes differ. Symmetric *rigor*, not symmetric *traits*.

## Selection methodology

Top 25 characters per gender, generationally stratified (5 per decade × 5 decades, 1980s–2020s). Pre-locked at graduation to avoid post-hoc bias. Source aggregation across published "top X heartthrobs" lists (Cosmo, Empire, Goodreads romance, IGN, FHM/Maxim archives, anime ranking sites) — see plan.md for the source list. Validation tickets at the front of the research phase confirm the locked list against multi-source aggregation.

See `plan.md` for full methodology, `heartthrobs.md` for the locked character list, `base-rates.md` for the shared base-rate lookup table that agents append to as they go.

## Output

A two-distribution graph, log-probability X-axis, density Y-axis. Median, P10, P90 markers per distribution. Headline number: median P(real human matches every stacked trait simultaneously) for each side. Outliers labeled with character name.

## Source

Idea workshopped in conversation 2026-05-04. Multiple methodology passes produced the threshold-vs-filter framing, the per-gender trait taxonomies, the correlation-direction note, the source-aggregation selection method, and the locked 25+25 list before graduation. Skipping `explore` phase — it was done in chat.
