---
slug: get-arrested
name: Getting Arrested
emoji: 🚓
order: 14
duration_seconds: 2700
frequency_per_day: lifetime
lifetime_count: 0.75
active_hours_per_day: 4
clustering_notes: Peaks Friday–Saturday evenings, roughly 8 pm–3 am
t_50_seconds: 1.07e13
t_1_seconds: 5.36e14
confidence: medium
---

## Setup

Getting arrested is one of the rarest lifetime events most people will ever experience — and "the act" itself (handcuffs on through booking) is short. The question is whether you and any of your 50 close friends will ever find yourselves simultaneously inside that window. The math uses the lifetime-rare model: C = expected lifetime arrest count per person (averaged across all adults, not just those who get arrested), d = duration of the event, and N = 50 friends.

## Inputs

**Lifetime arrest probability:** Brame et al. (Pediatrics 2012, follow-up 2014 in Crime & Delinquency) found ~30% of US adults arrested at least once by age 23; by age 28, the cumulative probability is ~32% overall (40% Black, 33% Hispanic, 30% White). Accounting for arrests in later adulthood, a reasonable lifetime-ever-arrested probability is ~35–40% for the general adult population.

**Mean arrests per arrested person:** Among people with any arrest history, recidivism studies suggest an average of 2–4 lifetime arrests. The FBI's UCR reports ~7–10 million total arrests/year for ~260 million adults — roughly 0.03 arrests/adult/year. Over 70 years of active adult life that implies ~2 arrests per arrested person, consistent with studies. Central estimate: ~3 arrests among those ever arrested.

**Per-capita lifetime mean (C):** 0.38 (probability of ever being arrested) × 3 (arrests per arrested person) ≈ 1.1. However, the ticket guidance notes 0.5–1 as a plausible range; using C = 0.75 as a conservative central estimate that acknowledges many adults are never arrested.

**Duration (d):** "Cuffs on to booked" — the ticket defines this as 30–60 minutes. Legal sources (Nolo, Shouse Law) put routine booking at 1–6 hours total, but the active "being arrested" window (handcuffing, transport, initial intake) is roughly 30–60 min. Use d = 2700 seconds (45 minutes).

**Clustering:** Arrests cluster heavily in the late-night / weekend window (Friday–Saturday ~8 pm–3 am). This ~7-hour window spans ~2 days, so roughly 14 hours/week out of 168 — about 8% of clock time. If both friends' arrests are 3× more likely within this window than uniform-random expectation, joint overlap probability is boosted by a clustering factor of ~3.

**Active hours used in model:** The lifetime-rare formula uses C and d directly (not f_day), so active_hours_per_day of 4 captures the effective clustering window for context.

## Math

Using the lifetime-rare formula:

```
E[overlap] = 2 × N × C² × d / L
```

Base (no clustering):
```
E[overlap] = 2 × 50 × 0.75² × 2700 / 2.208×10⁹
           = 2 × 50 × 0.5625 × 2700 / 2.208×10⁹
           = 151875 / 2.208×10⁹
           = 6.88×10⁻⁵
```

With clustering factor of 3:
```
E[overlap, clustered] = 6.88×10⁻⁵ × 3 = 2.06×10⁻⁴
```

Since E[overlap] << 1, convert to "expected lifetime-equivalents needed":

```
t_50 = L / E[overlap, clustered]
     = 2.208×10⁹ / 2.06×10⁻⁴
     = 1.07×10¹³ seconds
     ≈ 340,000 years
```

With best friend only (N = 1):
```
t_1 = t_50 × 50 = 5.36×10¹⁴ seconds ≈ 17,000,000 years
```

## Result

**With any of 50 close friends:** You would expect one simultaneous arrest overlap roughly once every **340,000 years** — or equivalently, there is a ~0.02% chance (2 in 10,000) this ever happens in your lifetime with any of your 50 friends.

**With your single best friend:** Once every **17 million years**.

This is firmly in "essentially never" territory. Even granting generous uncertainty (C up to 1.5, d up to 3600 seconds), E[overlap] with 50 friends stays below 0.001 — less than a 0.1% lifetime chance.

## Surprise check

Intuition says this is rare, and the math confirms: *much rarer* than intuition suggests. Even though ~1 in 3 Americans gets arrested at some point, the actual act is so short (45 min) and so infrequent (less than once per lifetime for most) that the probability of two friends being simultaneously in cuffs is essentially zero. The evening/weekend clustering helps — if both friends are going to be arrested, they're more likely to be arrested on the same kinds of nights — but it only moves the needle from "never" to "still never." The event is simultaneously too rare and too brief for overlap to be plausible across a single human lifetime.

## Sources

- [Brame et al. (2012), Cumulative Prevalence of Arrest Ages 8–23 — PubMed](https://pubmed.ncbi.nlm.nih.gov/22184650/)
- [Brame et al. (2014), Demographic Patterns of Cumulative Arrest Prevalence by Ages 18 and 23 — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4443707/)
- [Cumulative Probability of Arrest by Age 28, by Disability/Race/Gender — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5678390/)
- [RAND: Younger Americans Much More Likely to Have Been Arrested](https://www.rand.org/news/press/2019/02/25.html)
- [Nolo: What Happens During Booking?](https://www.nolo.com/legal-encyclopedia/what-happens-during-booking.html)
- [Shouse Law: How Long Does Booking Take in Jail?](https://www.shouselaw.com/ca/blog/how-long-does-booking-take-in-jail/)
- [Security Magazine: Murder, Robbery and DWI Happen at Night](https://www.securitymagazine.com/articles/90384-murder-robbery-and-driving-while-impaired-happen-at-night)
- [FBI NIBRS 2014: By Time of Day](https://ucr.fbi.gov/nibrs/2014/tables/by-time-of-day)
