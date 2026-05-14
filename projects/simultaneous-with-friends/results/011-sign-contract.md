---
slug: sign-contract
name: Signing a contract
emoji: ✒️
order: 11
duration_seconds: 60
frequency_per_day: lifetime
lifetime_count: 34
active_hours_per_day: 5.7
clustering_notes: Almost exclusively business hours on weekdays; strong 9am–5pm Mon–Fri clustering
t_50_seconds: 703000000000
t_1_seconds: 35200000000000
confidence: medium
---

## Setup

A real legal contract — employment offer, lease, mortgage, NDA, vehicle purchase agreement, divorce decree — not a clickwrap ToS. We're counting the physical or digital moment of signature: pen to paper (or "Sign Here" button clicked) for a document with actual legal consequence. How often does that moment coincide for two people in your friend group?

## Inputs

**Lifetime count (C = 34):** Triangulated from several common contract categories for a median American adult across a ~50-year contracting career (ages ~22–72):

| Category | Count | Notes |
|---|---|---|
| Employment contracts / offer letters | ~7 | BLS: avg 12.9 jobs ages 18–58; ~55% require formal signed contract |
| NDAs at jobs | ~6 | ~half of all U.S. workers bound by NDA; ~1 per job for white-collar |
| Vehicle purchases | ~9 | Industry average ~9–10 cars in a lifetime; each sale has a purchase agreement |
| Mortgage / home purchase / refi | ~3 | ~2 home purchases typical; add 1 refi |
| Apartment leases | ~5 | Average renter tenure ~27.5 months; ~13 renting years → ~5–6 leases |
| Marriage / divorce / prenup | ~1 | ~50% divorce rate; some remarry; sparse but real |
| Other (freelance, loans, partnerships) | ~3 | Personal loans, consulting agreements, etc. |
| **Total** | **~34** | Range: 20–50 depending on life path |

**Duration (d = 60 seconds):** The physical act of signing — including flipping to signature pages, initialing, dating — runs roughly 30–90 seconds per contract event. Mortgage closings involve dozens of pages but are one "event." 60 seconds is a reasonable midpoint.

**Clustering:** Contracts are almost entirely a business-hours phenomenon. Vehicle purchases happen at dealerships (weekday/Saturday daytime). Mortgage closings are scheduled appointments. Employment offers are signed at desks. Effective active window: ~8 hours/day × 5/7 days ≈ 5.7 hours/day equivalent, but this is moot for the lifetime-rare model.

**Sources:** BLS NLSY data (12.9 jobs ages 18–58); industry averages (~9–10 car purchases lifetime); NAR data (~2–3 home purchases); renter tenure data (~27.5 months average).

## Math

Using the lifetime-rare model:

```
E[overlap] = 2 × N × C² × d / L

N = 50 friends
C = 34 lifetime contracts
d = 60 seconds
L = 2.208 × 10⁹ seconds (70-year lifetime)

E[overlap] = 2 × 50 × (34)² × 60 / 2.208×10⁹
           = 2 × 50 × 1156 × 60 / 2.208×10⁹
           = 6,936,000 / 2,208,000,000
           ≈ 0.00314
```

E[overlap] ≈ 0.31% — well below 1.

```
t_50_seconds = L / E[overlap]
             = 2.208×10⁹ / 0.00314
             ≈ 7.03×10¹¹ seconds
             ≈ 319 lifetimes
```

For your single best friend (N = 1):

```
E[overlap]_1 = 2 × 1 × 1156 × 60 / 2.208×10⁹
             ≈ 6.28×10⁻⁵

t_1_seconds = 2.208×10⁹ / 6.28×10⁻⁵
            ≈ 3.52×10¹³ seconds
            ≈ 15,900 lifetimes
```

## Result

You have roughly a **0.3% chance** of ever simultaneously signing a contract with any of your 50 close friends during your entire lifetime. Stated another way: you'd need to live approximately **319 lifetimes** before you'd expect one such overlap with anyone in your friend group.

With your single best friend: roughly a **1-in-15,900 lifetime** event. Essentially impossible.

The numbers are so extreme because contracts are both rare (34 lifetime events spread over ~50 years means one every 18 months on average) and extremely brief (60 seconds). Both conspire against simultaneity.

## Surprise check

Intuition says "maybe once or twice in a life" — the kind of coincidence you'd notice and mention. The math says no, not even that. The rarity of the event (a few dozen lifetime occurrences) and the brevity (a minute) make this one of the least likely simultaneities on the list. It's not that your friends don't sign contracts — they do, roughly as often as you — it's that both of you landing on the same 60-second window out of 2 billion seconds is vanishingly improbable. Even doubling the lifetime count to 70 (a heavy-contract life: lots of business deals, multiple marriages, investment properties) only bumps E[overlap] to ~1.3%, still functionally zero.

## Sources

- [BLS: Number of Jobs, Labor Market Experience — NLSY 2024](https://www.bls.gov/news.release/nlsoy.nr0.htm)
- [Fleet Management Weekly: Average American Drives 10 Cars in a Lifetime](https://www.fleetmanagementweekly.com/the-average-american-will-drive-10-cars-in-their-lifetime-and-spend-nearly-500k-on-them/)
- [CNBC: What to Know About Signing an NDA at Work](https://www.cnbc.com/2022/02/11/what-to-know-about-signing-an-nda-at-work.html)
- [Redfin: The Typical U.S. Home Changes Hands Every 12 Years](https://www.redfin.com/news/homeowner-tenure-2022/)
- [Self Financial: Lifetime Cost of Renting](https://www.self.inc/info/lifetime-cost-renting-america/)
- [BLS Spotlight: Housing Leases in the U.S. Rental Market](https://www.bls.gov/spotlight/2022/housing-leases-in-the-u-s-rental-market/)
