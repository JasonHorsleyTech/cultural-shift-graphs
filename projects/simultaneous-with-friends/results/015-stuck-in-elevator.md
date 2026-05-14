---
slug: stuck-in-elevator
name: Stuck in an elevator
emoji: 🛗
order: 15
duration_seconds: 1200
frequency_per_day: "lifetime"
lifetime_count: 1
active_hours_per_day: 10
clustering_notes: Slight business-day cluster; most elevator use weekday daytime
t_50_seconds: 4.07e13
t_1_seconds: 2.03e15
confidence: medium
---

## Setup

Getting stuck in an elevator — doors that won't open, car stopped between floors, waiting for a technician or firefighter to pry you out — is a genuinely rare lifetime event. Unlike a sneeze or a fart, most adults accumulate at most one or two of these across an entire life, and urban elevator-dependent workers rack them up faster than rural adults who rarely enter a lift. The question is: what are the chances that at some point in your 70-year life, you and a close friend happen to be simultaneously trapped in an elevator (in different buildings, at the same moment)?

## Inputs

**Lifetime count (C):** Industry estimates put the annual per-capita entrapment rate at roughly 1–3 per 100,000 people. At 2 per 100,000 per year across a 70-year life, that's ~0.0014 entrapments per year, or C ≈ 0.14 lifetime entrapments for the average American adult (who includes many rural people who rarely use elevators). For an urban elevator-dependent adult — office worker or high-rise resident — the number climbs: one source calculates a ~6–12% chance over a 40-year working/living period, implying C ≈ 0.15–0.30 entrapments for active office users and potentially up to 1–2 for heavy high-rise residents over a full life.

For this model, the **reference person is a mixed urban/suburban adult** who uses elevators regularly but isn't a 40th-floor daily commuter: C = 1 lifetime entrapment. This is deliberately toward the high end of the realistic range; rural adults with C ≈ 0 would get an effective zero for any overlap probability.

**Urban vs. rural split:** Nearly 70% of elevator fatalities and incidents occur in urban areas, reflecting where elevators are concentrated. A rural adult's C is near zero — they may never ride in a commercial elevator enough to be at meaningful risk. This model applies only to urban/suburban elevator users.

**Duration (d):** Response times and rescue durations vary. The industry standard emergency response is ≤30 minutes; typical actual wait in urban areas is 5–15 minutes for a technician, plus time to open doors. Overall entrapment duration — from stuck to free — clusters around 15–30 minutes. Using **d = 20 minutes = 1,200 seconds** as a median realistic figure (not the worst-case multi-hour outliers).

**Clustering:** Elevator use peaks on weekday business hours. An active building elevator makes ~400,000 trips/year in roughly 10 operating hours/day. Entrapments track elevator use, so there's a modest weekday 9-to-5 cluster. This doesn't compress the window dramatically for a lifetime-rare event — the clustering effect is minor relative to the rarity.

**Sources:**
- Elevatemonitoring.com: 1 in 100,000 trips entrapment rate; 0.5–2 breakdowns/year per elevator; 6–12% lifetime risk for heavy users. https://elevatemonitoring.com/blog/what-are-the-chances-of-getting-stuck-in-an-elevator/
- Industry synthesis (multiple): 1–3 per 100,000 people per year entrapment rate. https://elevatingstudio.com/how-reliable-are-elevators-and-escalators/
- Duration: Industry standard 30-min response; typical 5–15 min in urban areas. https://www.kingsiii.com/help-phone-blog/elevator-entrapment-tips/
- Urban concentration: ~70% of elevator incidents in urban areas. https://wifitalents.com/elevator-death-statistics/
- NEII: US elevators make 18 billion passenger trips per year. https://nationalelevatorindustry.org/

## Math

Using the **Lifetime-rare model** from plan.md:

```
E[overlap] = 2 × N × C² × d / L
```

With N = 50 friends, C = 1, d = 1,200 s, L = 2.208 × 10⁹ s:

```
E[overlap with any of 50] = 2 × 50 × 1² × 1200 / 2.208×10⁹
                           = 120,000 / 2,208,000,000
                           = 5.43 × 10⁻⁵
```

That's about 0.0054% — a fraction of a percent chance across a lifetime.

Since E[overlap] << 1, we express this as a lifetime percentage rather than a "time between events."

```
t_50_seconds = L / E[overlap] = 2.208×10⁹ / 5.43×10⁻⁵ ≈ 4.07 × 10¹³ s ≈ 1.29 million years
```

For the single best friend (N = 1):

```
E[overlap with best friend] = 2 × 1 × 1² × 1200 / 2.208×10⁹
                             = 2,400 / 2,208,000,000
                             = 1.09 × 10⁻⁶
```

```
t_1_seconds = L / E[overlap] = 2.208×10⁹ / 1.09×10⁻⁶ ≈ 2.03 × 10¹⁵ s ≈ 64 million years
```

## Result

**With any of your 50 closest friends:** You'd need roughly **1.3 million years** of lifetime to expect even one moment of simultaneous elevator entrapment. In a single 70-year life, the odds are about **0.005%** — vanishingly small.

**With your single best friend:** Even less likely — expected wait time around **64 million years**. The probability in one lifetime is approximately **0.0001%**.

These numbers assume C = 1 per person, which already skews toward urban elevator-dependent adults. For most people — especially anyone outside a major city — C is closer to 0.2 or less, dropping the probability by another 25× (since it scales with C²).

## Surprise check

Intuition says "rare but possible — everyone knows someone who's been stuck." That intuition is partly right about individual occurrence but wildly wrong about *simultaneous* occurrence. The squaring of C in the formula is brutal: even if each person gets stuck once in 70 years, the chance that both are stuck *at the same time* (within a 20-minute window) is the square of an already tiny probability. Urban high-rise dwellers who might accumulate C = 3–5 lifetime entrapments do better — their E[overlap] scales as C², so C = 3 gives 9× more expected overlaps — but still nowhere near a coin flip even in 70 years.

The business-day clustering matters a little: if both you and a friend happen to be stuck during peak office hours, the effective coincidence window is compressed to ~10 active hours a day rather than 24, slightly improving raw odds. But since the event is so rare per lifetime, the clustering effect is a rounding error on a rounding error.

## Sources

- [What Are the Chances of Getting Stuck in an Elevator? — Elevate Monitoring](https://elevatemonitoring.com/blog/what-are-the-chances-of-getting-stuck-in-an-elevator/)
- [How Reliable Are Elevators and Escalators — Elevating Studio](https://elevatingstudio.com/how-reliable-are-elevators-and-escalators/)
- [Elevator Entrapment Tips — Kings III](https://www.kingsiii.com/help-phone-blog/elevator-entrapment-tips/)
- [Elevator Death Statistics — WiFi Talents](https://wifitalents.com/elevator-death-statistics/)
- [National Elevator Industry, Inc. (NEII) — Feeling Trapped](https://nationalelevatorindustry.org/feeling-trapped/)
- [The Psychology of Elevator Entrapment — The Elevator Consultant](https://theelevatorconsultant.com/trapped-in-a-box-the-psychology-of-elevator-entrapment-and-why-we-keep-riding/)
