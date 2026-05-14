---
slug: hiccup
name: Hiccupping
emoji: 🫨
order: 16
duration_seconds: 420
frequency_per_day: 0.0333
lifetime_count: null
active_hours_per_day: 16
clustering_notes: Slight post-meal and post-alcohol cluster, but can occur anytime during waking hours
t_50_seconds: 1.066e+08
t_1_seconds: 5.332e+09
confidence: low
---

## Setup

Hiccups feel like something that happens to *you* specifically, at awkward moments, all alone. You hiccup in a meeting, someone stares, it's over in three minutes. Nobody is sharing this with you. And yet: hiccup episodes last a surprisingly long time (up to 30 minutes in normal cases), and with 50 friends in your circle, the math starts working against your intuition fast.

## Inputs

**Frequency:** Medical literature acknowledges that population-level frequency of routine hiccup episodes is "unknown" and "underreported" — the studies focus on chronic/persistent cases requiring hospital admission (~4,000/year in the US), not the garden-variety kind. Informal consensus from health sources and self-report patterns puts routine hiccup episodes at roughly **once per month** for a healthy adult, with young men somewhat more prone. This is a low-confidence estimate; the true number could plausibly range from once a week to once every few months depending on diet, alcohol consumption, and individual variation.

- `f_day = 1/30 ≈ 0.0333 episodes/day`

**Duration:** Consistently described as "a few seconds to several minutes," with episodes "usually lasting under 30 minutes." Medical classification calls anything under 48 hours "acute/transient." A central estimate of **7 minutes (420 seconds)** sits comfortably in the middle of the typical range.

- `d = 420 seconds`

**Active window:** Hiccups can occur anytime during waking hours, with a mild cluster after meals or alcohol. No strong enough clustering to narrow `h` significantly.

- `h = 16 hours/day`

**Caveats:** More common in younger adults and men. Triggers include eating too fast, carbonated drinks, alcohol, and spicy food — all of which are social activities, suggesting hiccups may cluster when friends are together. This would *increase* the overlap probability beyond what this model captures (the model assumes independent random timing).

## Math

Using the repeatable-activity formula:

```
r = f_day / (h × 3600)
r = 0.0333 / (16 × 3600)
r = 5.79 × 10⁻⁷ per second
```

Expected wall-clock time between overlaps with N friends:

```
t_overlap = (24 / h) × 1 / (2 × r² × d × N)

t_50 = (24/16) × 1 / (2 × (5.79×10⁻⁷)² × 420 × 50)
t_50 = 1.5 × 1 / (2 × 3.35×10⁻¹³ × 21000)
t_50 = 1.5 × 1 / (1.41×10⁻⁸)
t_50 ≈ 1.066 × 10⁸ seconds ≈ 1,234 days ≈ 3.4 years

t_1 = t_50 × 50 = 5.332 × 10⁹ seconds ≈ 169 years
```

Sanity check: probability that any given one of your episodes overlaps with a single friend = `2 × r × d = 2 × 5.79×10⁻⁷ × 420 ≈ 0.05%`. Low per-episode probability — but with monthly episodes and 50 friends, it compounds.

## Result

**With 50 close friends:** You and at least one friend are simultaneously in a hiccup episode roughly **every 3.4 years** (~1,234 days).

**With your best friend specifically:** Simultaneous hiccup overlap roughly **every 169 years** — essentially never in one lifetime.

## Surprise check

Hiccups feel like a rare, solo, over-in-seconds experience. But the episode duration is the key counter-intuition: a typical bout runs 5–10 minutes, and you're sitting in that state while it plays out. With 50 friends each independently hiccupping once a month for several minutes at a time, the probability of a simultaneous overlap somewhere in the group isn't tiny — it's happening to *someone* in your circle every few years.

The intuition says: "hiccups are rare and brief — overlap must be almost impossible." The math says: "7-minute episodes × monthly frequency × 50 people = overlap every 3 years." The duration is doing almost all the work here. If hiccups lasted 30 seconds instead of 7 minutes, t_50 would jump to ~40 years. Episode length is the variable that dominates, and we systematically underestimate how long hiccup episodes actually last while we're in them.

The one genuine caveat: if hiccups cluster around social eating and drinking, and your friends share meals with you, the independence assumption breaks down in a way that makes simultaneous overlap *more* likely — not less.

## Sources

- [Singultus - StatPearls, NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK538225/) — "incidence and prevalence in the general population are unknown"; acute episodes are self-limited and underreported
- [Hiccups - Cleveland Clinic](https://my.clevelandclinic.org/health/diseases/17672-hiccups) — episode duration classifications; trigger overview
- [Hiccup - Wikipedia](https://en.wikipedia.org/wiki/Hiccup) — "episodes usually last under 30 minutes"; more frequent in younger adults; less frequent with age
- [Hiccups: a common problem with some unusual causes and cures - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5072913/) — duration framing; "most hiccup episodes are self-limiting and disappear after a few minutes"
- [Hiccups: Causes, treatments, and complications - Medical News Today](https://www.medicalnewstoday.com/articles/181573) — "most people have hiccups from time to time; usually resolve within a few minutes"
- [Prone to hiccups? Here's what you need to know - UCLA Health](https://www.uclahealth.org/news/article/prone-hiccups-heres-what-you-need-know) — episode rate 4–60 hiccups/minute; duration "a few minutes to several months" (latter = chronic)
