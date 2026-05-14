---
slug: poop
name: Pooping
emoji: 💩
order: 3
duration_seconds: 300
frequency_per_day: 1.2
lifetime_count: null
active_hours_per_day: 4
clustering_notes: ~77% of BMs in morning (peak 7-9am); secondary spikes post-lunch and post-dinner via gastrocolic reflex
t_50_seconds: 28800
t_1_seconds: 1440000
confidence: medium
---

## Setup

Pooping is almost universal, nearly daily, and remarkably clustered — most people go in the same 2-hour window every morning, with smaller post-meal spikes. That clustering is the key variable: compress the effective window and the odds of overlap with friends shoot up dramatically.

## Inputs

**Frequency:** ~1 BM/day is the median; about 28% of people go twice daily. A representative average is ~1.2/day. The "normal" clinical range is 3×/week to 3×/day, but the median cluster around once-daily.

**Duration:** The actual act of defecation takes ~12 seconds (2017 "Hydrodynamics of Defecation" study). However, total time on the toilet is the relevant overlap window — gastroenterologists say 5 minutes is the healthy target/maximum, and that's what we use (300 seconds). People who bring their phones stretch this, but 5 min is the honest central estimate.

**Clustering:** A Chinese population study found ~77% of BMs occur in the morning. The mechanistic explanation: colonic mass movements are minimal during sleep, then surge at waking (circadian rhythm + cortisol spike), further amplified by the gastrocolic reflex triggered by breakfast. Secondary post-lunch and post-dinner reflexes add smaller spikes. Effective active window: ~4 hours (morning 2h + two post-meal 1h windows), despite 16 waking hours total.

**Caveats:**
- High-fiber diets → more regular, often once morning
- Low-fiber/Western diet → more variable, often delayed
- Women average ~1h later than men in morning peak
- Age: older adults trend toward earlier morning BMs
- Coffee accelerates gastrocolic reflex substantially

## Math

Using the repeating-activity formula:

```
r = f_day / (h × 3600)
  = 1.2 / (4 × 3600)
  = 1.2 / 14400
  = 8.333e-5 per second

t_overlap = (24 / h) × 1 / (2 × r² × d × N)

For N = 50 friends:
  = (24/4) × 1 / (2 × (8.333e-5)² × 300 × 50)
  = 6 × 1 / (2 × 6.944e-9 × 15000)
  = 6 × 1 / (2.0833e-4)
  = 6 × 4800
  = 28,800 seconds

For N = 1 (best friend):
  = (24/4) × 1 / (2 × (8.333e-5)² × 300 × 1)
  = 6 × 1 / (4.167e-6)
  = 6 × 240,000
  = 1,440,000 seconds
```

## Result

**With any of your 50 closest friends:** You and at least one of them are simultaneously on the toilet roughly every **8 hours** — about three times a day. Every morning as you settle in, statistically, so is someone in your friend group.

**With your single best friend:** You and they overlap on the toilet roughly every **16.7 days** (~2.4 times/month).

The morning clustering is doing heavy lifting here. If BMs were spread uniformly across 16 waking hours, t_50 would balloon to ~6.7 days. Concentration into a 4-hour effective window multiplies overlap probability by 4×.

## Surprise check

Intuitively this feels wrong — pooping feels private and asynchronous. But the math just reflects that everyone is a biological machine running the same morning program. The 8-hour cadence for the group of 50 is almost certainly an underestimate of perceived "right now someone I know is pooping" — which is basically always true at any moment during morning hours. The 16-day figure for a single best friend feels more surprising; you'd expect less than monthly but "twice a month" is plausible once you internalize that you're both creatures of the same morning routine.

Uncertainty is medium: the 4-hour effective window is a reasonable synthesis of the 77% morning concentration data, but it's doing a lot of work. If the true effective window is 6h (weaker clustering), t_50 rises to ~65,000s (~18 hours); if it's 2h (very tight), t_50 drops to ~7,200s (~2 hours).

## Sources

- [Defecation frequency and timing, and stool form in the general population: a prospective study — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC1379343/)
- [Characterizing Normal Bowel Frequency — NHANES study, PubMed](https://pubmed.ncbi.nlm.nih.gov/28762379/)
- [Why do I poo in the morning? A gut expert explains — The Conversation](https://theconversation.com/why-do-i-poo-in-the-morning-a-gut-expert-explains-229624)
- [How Long Should a Healthy Poop Take? — Cleveland Clinic via Today](https://www.today.com/health/diet-fitness/how-long-normal-poop-takes-gi-doctor-rcna233219)
- [How Often and How Long Should It Take You to Poop? — Cleveland Clinic](https://health.clevelandclinic.org/how-long-should-it-take-you-to-have-a-bowel-movement)
- [Physiology, Gastrocolic Reflex — StatPearls / NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK549888/)
- [Role of clock genes in gastrointestinal motility — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2950682/)
- [Timing is Everything: ISB Study Finds Link Between Bowel Movement Frequency and Overall Health](https://isbscience.org/news/health/timing-is-everything-isb-study-finds-link-between-bowel-movement-frequency-and-overall-health/)
