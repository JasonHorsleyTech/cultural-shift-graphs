---
slug: ride-ambulance
name: Riding in an ambulance
emoji: 🚑
order: 13
duration_seconds: 1500
frequency_per_day: lifetime
lifetime_count: 3
active_hours_per_day: 24
clustering_notes: No meaningful time-of-day cluster; medical emergencies happen 24/7 with only mild peaks
t_50_seconds: 3608000000000
t_1_seconds: 180400000000000
confidence: medium
---

## Setup

You, as a patient, strapped into the back of an ambulance in transit to an emergency department. Not a ride-along, not the paramedic driving — you, hooked up to monitors, watching the ceiling lights flick past. How often does that window coincide with any of your close friends doing the same thing at the same moment?

## Inputs

**Lifetime count (C = 3):** Derived from NEMSIS and EMS utilization data:

| Metric | Value | Source |
|---|---|---|
| US annual 911 EMS dispatches | ~28.5 million | NASEMSO / EMS.gov 2020 National EMS Assessment |
| US annual EMS service requests (all types) | ~42 million | Wikipedia / 2018 EMS data |
| Conservative annual patient transports | ~14 million | ~70% of dispatches result in transport; adjusted for non-transport resolutions |
| US population | ~335 million | |
| Per-capita transport rate | ~0.042/year | 14M / 335M |
| Lifetime count (70 years) | ~2.9 → **3** | 0.042 × 70 |

This aligns well with lived experience: most adults ride as a patient 0–4 times in their life. Some people never do; people with serious chronic illness, heart disease, or trauma history may ride 5–10+ times. The median is roughly 2–3.

**Duration (d = 1500 seconds, ~25 minutes):** The ride itself — from when the doors close at the scene to arrival at the hospital. A 2020 trauma study (PMC7081873) found a mean transport time of 17.5 minutes (scene to ED) for trauma patients. Non-trauma emergencies, longer distances, and rural settings push this higher. The full experience as a patient (doors close → stretcher wheeled in) runs 20–30 minutes in most urban/suburban cases; 25 minutes is a reasonable midpoint.

**Clustering:** Medical emergencies don't cluster. Chest pain, strokes, falls, and accidents happen around the clock. There is a mild statistical peak in late morning and early afternoon (when people are most active and most likely to collapse), but it's nowhere near sharp enough to compress the effective window meaningfully. Active hours = 24.

**Caveats:** The ~14 million transport figure is deliberately conservative. NEMSIS 2023 recorded 54 million EMS activations across 14,369 agencies — but this includes duplicates from multi-agency reporting, non-transport events, and cancelled calls. The 28.5 million dispatch figure and 70% transport rate gives a more defensible transport count. Using 14M instead of 20M changes C from 4.2 to 2.9 — the result is ~2× better (smaller denominator) in the expected direction but not qualitatively different.

## Math

Using the lifetime-rare model:

```
E[overlap] = 2 × N × C² × d / L

N = 50 friends
C = 3 lifetime ambulance rides (as patient)
d = 1500 seconds (~25 min)
L = 2.208 × 10⁹ seconds (70-year lifetime)

E[overlap] = 2 × 50 × (3)² × 1500 / 2.208×10⁹
           = 2 × 50 × 9 × 1500 / 2.208×10⁹
           = 1,350,000 / 2,208,000,000
           ≈ 0.000612
```

E[overlap] ≈ 0.061% — well below 1, so report as a fraction of lifetime.

```
t_50_seconds = L / E[overlap]
             = 2.208×10⁹ / 0.000612
             ≈ 3.608×10¹² seconds
             ≈ 114,300 years
             ≈ 1,633 lifetimes
```

For your single best friend (N = 1):

```
E[overlap]_1 = 2 × 1 × 9 × 1500 / 2.208×10⁹
             ≈ 1.224×10⁻⁵

t_1_seconds = 2.208×10⁹ / 1.224×10⁻⁵
            ≈ 1.804×10¹⁴ seconds
            ≈ 5.72 million years
            ≈ 81,700 lifetimes
```

## Result

You have roughly a **0.06% chance** of ever simultaneously riding in an ambulance with any of your 50 close friends during your entire lifetime. You'd need to live approximately **1,633 lifetimes** before expecting one such overlap.

With your single best friend: a **1-in-81,700 lifetime** shot. The universe will have cooled to near-absolute darkness before the math turns friendly.

## Surprise check

Intuition says this is rare — it genuinely is — but the numbers are more extreme than gut instinct predicts. The culprit isn't the duration (25 minutes is actually generous compared to signing a contract or stubbing a toe). The killer is the rarity: 3 lifetime rides spread over 2.2 billion seconds means your "active" window is only about 4,500 seconds of your entire life. The same is true for your friend. Finding two 4,500-second windows out of 2.2 billion seconds that overlap by chance is essentially astronomical. Even quadrupling the lifetime count to 12 (a person with serious recurrent cardiac events) only moves E[overlap] to ~1%, still effectively zero.

The no-time-clustering finding is slightly surprising in the other direction — one might expect medical emergencies to cluster around activity peaks and thereby compress the effective window. They don't, not in any way that matters.

## Sources

- [NEMSIS 2023 Annual Public Data Report (PDF)](https://nemsis.org/wp-content/uploads/2025/09/NEMSIS-Annual-Public-Data-Report-2023___.pdf)
- [EMS.gov: Nationwide EMS Incident Data](https://www.ems.gov/issues/using-ems-data/nationwide-ems-incident-data/)
- [EMS.gov: Twenty Years of National EMS Data (May 2021)](https://www.ems.gov/resources/newsletters/may-2021/twenty-years-of-national-ems-data/)
- [EMS1: NASEMSO releases stats on local agencies, 911 calls](https://www.ems1.com/ambulance-service/articles/national-association-of-state-ems-officials-releases-stats-on-local-agencies-911-calls-LPQTHJrK2oIpxuR1/)
- [Wikipedia: Emergency Medical Services in the United States](https://en.wikipedia.org/wiki/Emergency_medical_services_in_the_United_States)
- [PMC: Prehospital Trauma Scene and Transport Times (PMC7081873)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7081873/)
- [CDC MMWR: Patient Arrivals by Ambulance at Emergency Departments by Age Group, 2003](https://www.cdc.gov/mmwr/preview/mmwrhtml/mm5421a5.htm)
