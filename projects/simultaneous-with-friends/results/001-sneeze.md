---
slug: sneeze
name: Sneezing
emoji: 🤧
order: 1
duration_seconds: 0.43
frequency_per_day: 4
lifetime_count: null
active_hours_per_day: 16
clustering_notes: Mild morning peak (~8 AM) due to circadian histamine rhythm; otherwise roughly uniform across waking hours
t_50_seconds: 7233000
t_1_seconds: 361650000
confidence: medium
---

## Setup

Sneezing is involuntary, brief, and spread across the waking day. You can't hold one in, but you also can't schedule one. Given that a sneeze lasts less than half a second, the question is: how often are you and a friend both mid-sneeze at the same moment?

## Inputs

**Frequency:** The best clinical study (Hansen & Mygind, 2002; n=80 healthy adults) found that >95% of nasally healthy adults sneeze fewer than 4 times per day. A commonly cited population average is ~2–4 sneezes/day. This analysis uses **4/day** as a conservative upper-normal for a healthy adult population — people with allergies or colds sneeze substantially more (10–20+/day), but those are episodic states rather than the steady-state baseline. Using 4 slightly overestimates overlap frequency.

**Duration:** A 2021 fluid-dynamics study (PMC8663001) measured sneeze duration time (SDT) using high-speed particle image velocimetry. Males: 473 ms; females: 396 ms; ensemble average: ~430 ms. Using **d = 0.43 seconds**.

**Active window:** Sneezing is a waking-hours event. Using **h = 16 hours/day**. Circadian rhythm data shows a mild peak around 6–8 AM (histamine peaks, cortisol troughs), but the clustering isn't tight enough to compress `h` — the effect is real but distributed across a broad morning window rather than a 30-minute spike. Treating distribution as roughly uniform across waking hours is a reasonable approximation.

**Caveats:**
- Allergy sufferers can sneeze 10–30× per day during pollen season; this analysis uses healthy baseline
- Cold/flu episodes add bursts of high-frequency sneezing lasting ~1–2 weeks/year
- Children sneeze more frequently than adults on average
- The morning clustering effect means overlap probability is slightly higher in the 6–10 AM window than the uniform model implies

## Math

Using the repeatable-activity formula:

```
r = f_day / (h × 3600) = 4 / (16 × 3600) = 6.944 × 10⁻⁵ per second

t_overlap = (24 / h) × 1 / (2 × r² × d × N)
```

**With 50 friends (t_50):**
```
r² = (6.944e-5)² = 4.822 × 10⁻⁹
2 × r² × d = 2 × 4.822e-9 × 0.43 = 4.147 × 10⁻⁹
4.147e-9 × 50 = 2.074 × 10⁻⁷
(24/16) / 2.074e-7 = 1.5 × 4.822 × 10⁶ = 7.23 × 10⁶ seconds
```

**With 1 best friend (t_1):**
```
t_1 = t_50 × N = 7.23 × 10⁶ × 50 = 3.62 × 10⁸ seconds
```

## Result

**With any of your 50 closest friends:** you and at least one of them are simultaneously mid-sneeze about once every **~84 days** (~2.75 months).

**With your single best friend:** about once every **~11.5 years**.

Both of these are wall-clock expectations — you're completely unaware when it happens, but the math says it does.

## Surprise check

The 84-day figure for 50 friends feels intuitively plausible once you account for the N² scaling — 50 friends gives 50× more chances. The single-friend result of 11.5 years is surprisingly long given that both you and your best friend sneeze multiple times a day, but the culprit is the brutal brevity of the sneeze itself: 0.43 seconds out of 57,600 active seconds per day means only 1-in-134,000 of your waking seconds involves a sneeze. The joint probability of two people's 0.43-second windows colliding is tiny. The result passes the sanity check: brief + rare (per second) = long waits for overlap.

## Sources

- Hansen, J. G., & Mygind, N. (2002). How often do normal persons sneeze and blow the nose? *Rhinology*, 40(1), 10–12. https://pubmed.ncbi.nlm.nih.gov/12012947/
- Peng, Z., et al. (2021). Experimental measurements of airflow features and velocity distribution exhaled from sneeze and speech using particle image velocimetry. *PMC*. https://pmc.ncbi.nlm.nih.gov/articles/PMC8663001/
- Smolensky, M. H., et al. (1995). Circadian and circannual rhythms of allergic rhinitis: an epidemiologic study involving chronobiologic methods. https://pubmed.ncbi.nlm.nih.gov/3339191/
- Nakao, A., et al. (2015). The circadian clock functions as a potent regulator of allergic reaction. *Allergy*. https://onlinelibrary.wiley.com/doi/10.1111/all.12596
- Why Do I Sneeze at the Same Time Every Day? *Vice*. https://www.vice.com/en/article/why-do-i-sneeze-at-the-same-time-every-day/
