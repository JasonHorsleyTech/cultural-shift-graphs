---
slug: orgasm
name: Orgasming
emoji: ⚡
order: 8
duration_seconds: 15
frequency_per_day: 0.5
lifetime_count: null
active_hours_per_day: 6
clustering_notes: Strongly evening/night — ~72% of solo orgasms occur between 9pm and 3am; partnered sex also peaks in evening
t_50_seconds: 4976600
t_1_seconds: 248830000
confidence: medium
---

## Setup

Orgasming — covering both masturbation and partnered sex — is among the more frequent intimate experiences adults have, happening several times per week on average. But it's brief (under 30 seconds physiologically), and heavily clustered in evening/nighttime hours. That clustering is the central tension: it compresses the window dramatically, making simultaneous overlap more likely than a naive calculation would suggest, but also cuts both ways because everyone is in that same narrow window together.

## Inputs

**Frequency:** The modern scientific literature converges on a "total sexual outlet" (TSO) of approximately 2.5–4.4 orgasms per week across genders. A 2022 meta-analysis across non-clinical samples found mean TSO of 2.52/week for women and 4.38/week for men (Archives of Sexual Behavior). Splitting the difference across a mixed adult population gives roughly 3.45/week ≈ 0.5/day. This combines solo masturbation (the dominant source for men; significant for women) and partnered orgasm.

- Men: ~3–4× per week solo + partnered combined (Kinsey Institute / NSSHB)
- Women: ~1.5–2.5× per week solo + partnered combined (NSSHB, Journal of Sexual Medicine)
- Blended estimate: **0.5 per day**

**Duration:** Laboratory physiological measurement establishes female orgasm at ~20–26 seconds (Masters & Johnson, Alzubaidi et al. 1985, PubMed 4062540). Male orgasm measured at 8–22 seconds via anal-probe pelvic contraction studies (Archives of Sexual Behavior, PubMed 7458658). Blended gender average: **~15 seconds**.

**Clustering:** The TENGA 2019 Self-Pleasure Report (13,000 respondents) found ~50.4% prefer nighttime and 21.2% prefer evening for solo activity — roughly 72% in a ~6-hour window (8pm–2am). Partnered sex similarly peaks in evening hours. Effective active window: **h = 6 hours**.

**Caveats:** TSO varies enormously by age (peaks in 20s–30s), relationship status, and gender. This estimate is a population-wide adult average; younger adults are higher, older adults lower. The 0.5/day is deliberately moderate.

## Math

Using the repeatable-activity formula:

```
r = f_day / (h × 3600) = 0.5 / (6 × 3600) = 2.315 × 10⁻⁵ per second

t_overlap = (24 / h) × 1 / (2 × r² × d × N)
```

**For N = 50 friends:**
```
t_50 = (24/6) × 1 / (2 × (2.315e-5)² × 15 × 50)
     = 4 × 1 / (2 × 5.359e-10 × 750)
     = 4 × 1 / (8.039e-7)
     = 4 × 1,244,150
     = 4,976,600 seconds
     ≈ 57.6 days
```

**For N = 1 best friend:**
```
t_1 = (24/6) × 1 / (2 × (2.315e-5)² × 15 × 1)
    = 4 × 1 / (1.608e-8)
    = 248,830,000 seconds
    ≈ 7.9 years
```

## Result

- **With any of your 50 close friends:** simultaneous overlap expected roughly every **58 days** (~8 weeks).
- **With your single best friend:** expected every **~7.9 years**.

The evening clustering (h = 6 rather than 16) is decisive — if orgasms were spread uniformly across waking hours, t_50 would be over a year. Compression into a 6-hour window makes the overlap happen in weeks instead.

## Surprise check

Intuition says this should be rare — orgasming feels private and feels like it "never" lines up. And indeed, 7.9 years with your single best friend feels about right: plausible but rare. The 58-day figure for 50 friends is more surprising — almost monthly. But that's the friend-group multiplier doing its work. If you have 50 close friends, one of them is almost certainly having an orgasm during yours with surprising regularity.

## Sources

- [Orgasm Frequency (Total Sexual Outlet) in a National American Sample — Archives of Sexual Behavior, 2022](https://pubmed.ncbi.nlm.nih.gov/35165803/)
- [Orgasm in Women in the Laboratory — Archives of Sexual Behavior, 1985 (PubMed 4062540)](https://pubmed.ncbi.nlm.nih.gov/4062540/)
- [The Male Orgasm: Pelvic Contractions Measured by Anal Probe — Archives of Sexual Behavior (PubMed 7458658)](https://pubmed.ncbi.nlm.nih.gov/7458658/)
- [Masturbation Prevalence, Frequency, Reasons, and Associations — PMC / Archives of Sexual Behavior, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9794105/)
- [TENGA 2019 Self-Pleasure Report — full PDF](https://www.multivu.com/players/English/8528451-tenga-unveils-2019-self-pleasure-report/docs/Full2019Report_1557144644685-1929663640.pdf)
- [National Survey of Sexual Health and Behavior (NSSHB) — Key Findings, Indiana University](https://nationalsexstudy.indiana.edu/keyfindings/index.html)
