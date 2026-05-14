---
slug: dream
name: Dreaming
emoji: 🌙
order: 10
duration_seconds: 1212
frequency_per_day: 5
lifetime_count: null
active_hours_per_day: 7.5
clustering_notes: sleep window only; REM cycles clustered in overnight 7-8hr block
t_50_seconds: 770
t_1_seconds: 86400
confidence: medium
---

## Setup

Dreaming is the graph ceiling. Unlike most activities on this list, it happens every single night for roughly 2 hours, and during the active window (sleep) the probability of two people being in a dream at the same moment is surprisingly high. The question isn't "will it happen tonight?" — it's "how many times tonight?"

## Inputs

**Sleep duration:** ~7.5 hours/night. CDC and NSF data put recommended sleep at 7–9 hours; actual average is closer to 6.8 hours. Using 7.5 as a reasonable middle ground for a healthy adult friend group.

**REM as fraction of sleep:** 20–25% of total sleep time, consistently across sources. Using 22.5% → 101 minutes of REM per night.

**REM episodes per night:** 4–5 cycles, each ~90–120 minutes total. Using 5 episodes averaging ~20 minutes each (first episode ≈10 min, last ≈45–60 min; 101 min / 5 ≈ 20.2 min average).

**Dreaming definition:** Using REM as the proxy for "actively dreaming." NREM dreaming occurs but is fragmentary and conceptual; the vivid, narrative dreams people mean when they say "dreaming" are REM-associated. This likely undercounts by ~10–20% but keeps the model clean.

**Active window (h):** 7.5 hours (sleep only). Friend group assumed to be in the same time zone with similar sleep schedules (±1 hour bedtime variance is small relative to a 7.5-hour window).

Sources: Healthline, NIH NCBI, Sleep Foundation, CDC MMWR.

## Math

### Model adaptation

This is not a repeatable discrete-event activity in the sneeze/fart sense. "Dreaming" is a continuous state you enter and exit. The right model is: **probability that two specific REM episodes (yours and a friend's) overlap in time**, then summed over all episode pairs per night.

Let:
- W = sleep window = 7.5 hr = 450 min
- n = REM episodes per person per night = 5
- d = average REM episode duration = 101 min / 5 = 20.2 min

For two random intervals of length d placed uniformly in a window W, the probability they overlap is approximately:

```
P(overlap of one pair) ≈ (d_you + d_friend) / W
                       = (20.2 + 20.2) / 450
                       = 40.4 / 450
                       ≈ 0.0898
```

Expected overlapping REM episode pairs per night, you vs. ONE friend:

```
E[overlaps/night, 1 friend] = n × n × P(overlap of one pair)
                             = 5 × 5 × 0.0898
                             ≈ 2.24 overlaps per night
```

So you and your best friend are simultaneously in REM sleep about **2.24 times every night**.

Wall-clock time between overlaps with best friend:

```
t_1 = 1 night / 2.24 overlaps ≈ 0.45 nights ≈ 10.7 hours
```

Rounded to 1 day (86,400 s) as a conservative estimate — the overlaps happen nightly but the "gap" spans the waking hours between sleep sessions.

With 50 friends:

```
E[overlaps/night, 50 friends] = 50 × 2.24 = 112 overlaps/night
```

These 112 overlaps are spread across the 7.5-hour sleep window. Rate during sleep:

```
rate_sleep = 112 / (7.5 × 3600) = 0.00415 overlaps/sec
```

Converted to wall-clock rate (sleep occupies 7.5/24 of the day):

```
rate_wall = 0.00415 × (7.5/24) = 0.00130 overlaps/sec
t_50 = 1 / 0.00130 ≈ 770 seconds ≈ 13 minutes (wall clock)
```

During sleep itself, a new dream-overlap event with someone in your 50-friend circle occurs roughly every **6.5 minutes** of sleep time (450 min / 112 ≈ 4 min; rounding slightly for the clustering caveat).

## Result

**With your best friend:** You are both simultaneously in REM sleep roughly **2–3 times per night**. The wall-clock gap between these shared dream moments is about **11 hours** — which is just the waking hours between sleep sessions. Every night counts.

**With 50 friends:** You have a dream-overlap with someone in your friend group approximately every **13 minutes of wall-clock time** — or every ~4 minutes during the sleep window itself. It is essentially continuous while anyone in your circle is sleeping.

Duration stored in frontmatter (1,212 s) is the average REM episode duration of 20.2 minutes — the "event" being modeled.

## Surprise check

This is the graph ceiling, and the math confirms it dramatically. Intuition says "dreams are private and ephemeral" — and subjectively they are. But probabilistically, dreaming is the most reliably simultaneous activity on this list. You and a close friend are in sync every single night, multiple times. It's not "if" but "how many times tonight." The surprise isn't that it happens — it's the sheer density: 112 overlapping dream windows per night across 50 friends is staggering for something nobody thinks of as a shared experience.

## Sources

- [How Much Deep, Light, and REM Sleep Do You Need? — Healthline](https://www.healthline.com/health/how-much-deep-sleep-do-you-need)
- [Physiology, Sleep Stages — StatPearls / NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK526132/)
- [The Possible Functions of REM Sleep and Dreaming — Neuroscience / NCBI](https://www.ncbi.nlm.nih.gov/books/NBK11121/)
- [Prevalence of Healthy Sleep Duration among Adults — CDC MMWR](https://www.cdc.gov/mmwr/volumes/65/wr/mm6506a1.htm)
- [How Much Sleep Do You Need? — Sleep Foundation](https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need)
- [Changes in REM-Sleep Percentage Over the Adult Lifespan — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC1978369/)
- [Rapid eye movement sleep — Wikipedia](https://en.wikipedia.org/wiki/Rapid_eye_movement_sleep)
