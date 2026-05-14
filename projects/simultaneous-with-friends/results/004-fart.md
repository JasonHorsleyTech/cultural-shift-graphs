---
slug: fart
name: Farting
emoji: 💨
order: 4
duration_seconds: 2
frequency_per_day: 14
lifetime_count: null
active_hours_per_day: 16
clustering_notes: Mildly elevated post-meal but broadly scattered across waking hours
t_50_seconds: 126903
t_1_seconds: 6345177
confidence: medium
---

## Setup

Farting is one of the most universal human acts — involuntary, frequent, and distributed across the entire waking day. Because it happens so often and at essentially random moments, the question becomes: with 50 friends also farting at roughly the same rate, how often does your fart overlap with one of theirs in real time?

## Inputs

**Frequency:** Traditional gastroenterology research (Tomlin et al. 1991, *Gut*) measured 10 ± 1 flatus events/day on usual diet, with an upper limit of normal at ~20/day. The midpoint of the normal clinical range is used here: **14/day**. A 2024 University of Maryland study using sensor-equipped "smart underwear" found a higher mean of 32/day, but that device may capture micro-releases below conscious perception; the 14/day figure represents sensible, detectable events. Gender, age, and methane-producer status have no significant influence on frequency (Tomlin et al. 1991).

**Duration:** No study directly reports a per-event duration in seconds — measurement devices track cumulative gas volume rather than discrete event length. The physiologically reasonable estimate is ~2 seconds per event, consistent with the brief, pulsed nature of anal sphincter relaxation. This is the canonical figure used in clinical commentary and matches the ticket brief.

**Active window:** Broadly scattered across 16 waking hours/day. Flatus does occur during sleep (Fairclough et al. 1991 found sleep-rate ≈ half of daytime rate), but the active window is taken as 16 h for the waking-overlap framing.

**Clustering:** Mild post-meal elevation in volume (Fairclough 1991), but events are not tightly time-clustered in the way tooth-brushing is. No adjustment to `h` is made — 16 h is appropriate.

**Caveats:** High-FODMAP or lactose-heavy diets can push frequency to the upper end (20+/day). Age and gender are not significant predictors. Individual microbiome composition is the dominant driver of variation.

## Math

Using the repeatable-activity model:

```
r = f_day / (h × 3600)
  = 14 / (16 × 3600)
  = 14 / 57600
  ≈ 2.431 × 10⁻⁴ per second

t_50 = (24 / h) × 1 / (2 × r² × d × N_friends)
     = (24 / 16) × 1 / (2 × (2.431e-4)² × 2 × 50)
     = 1.5 × 1 / (2 × 5.910e-8 × 2 × 50)
     = 1.5 × 1 / 1.182e-5
     = 1.5 × 84,602
     ≈ 126,903 seconds  (~35.2 hours)

t_1 = (24 / h) × 1 / (2 × r² × d × N_best)
    = 1.5 × 1 / (2 × 5.910e-8 × 2 × 1)
    = 1.5 × 1 / 2.364e-7
    = 1.5 × 4,230,118
    ≈ 6,345,177 seconds  (~73.4 days)
```

## Result

- **With any of your 50 friends:** simultaneous fart overlap happens roughly every **~35 hours** — about once every day and a half.
- **With your best friend alone:** roughly every **~73 days** — about five times a year.

This is the floor of the chart. Farting is frequent but brief (2 s) and evenly scattered, so despite the high rate, the per-second overlap probability is low enough that you don't trip over each other constantly.

## Surprise check

The intuition "this is the most common one" is half-right. With the full group of 50 friends, ~35 hours between overlaps is genuinely frequent — comparable to sneezing. But the best-friend number (~73 days) is surprisingly long. The act is common, but two people need to be in the same 2-second window out of 57,600 seconds in a waking day — those windows are thin, and you only have one best friend.

## Sources

- [Factors influencing frequency of flatus emission by healthy subjects — Tomlin et al. 1991, *Digestive Diseases and Sciences*](https://pubmed.ncbi.nlm.nih.gov/8769291/)
- [Investigation of normal flatus production in healthy volunteers — Fairclough et al. 1991, *Gut* (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC1378885/)
- [How often does the average person fart? Scientists built a device to find out — *Scientific American* (UMD smart underwear study, 2024)](https://www.scientificamerican.com/article/how-often-does-the-average-person-fart-scientists-built-a-device-to-find-out/)
- [Flatulence — Wikipedia](https://en.wikipedia.org/wiki/Flatulence)
