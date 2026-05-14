---
slug: video-game-end-credits
name: Watching end credits of a great video game
emoji: 🎮
order: 12
duration_seconds: 1500
frequency_per_day: "lifetime"
lifetime_count: 40
active_hours_per_day: 6
clustering_notes: Evenings and weekends; heavy clustering toward end-of-play sessions, typically 8–11 PM
t_50_seconds: 2.031e10
t_1_seconds: 1.016e12
confidence: low
---

## Setup

Sitting through the end credits of a video game — not skipping, actually watching — is a specific signal: the game earned it. We're talking about games like Red Dead Redemption 2, The Last of Us, The Witcher 3, Dark Souls — long, immersive AAA titles where finishing already filters hard, and choosing not to hit skip filters harder. The reference person here is a **core gamer**: someone who plays regularly, finishes long games, and occasionally honors a game by staying through the credits. For the average American adult, this is nearly a once-in-a-lifetime experience.

## Inputs

**Who is the reference person?**
About 60% of US adults play video games at least weekly (ESA 2024). Of those, roughly 20–25% are "core" or "dedicated" gamers who regularly play and complete single-player AAA titles — about 12–15% of all US adults. The other ~40–50% are casual or mobile-only players.

A core gamer:
- Plays roughly 30–60 AAA titles over a ~40-year active gaming life (ages ~15–55)
- Finishes maybe 30–40% of those (10–15 games total is pessimistic; for someone who curates carefully, 40–60 is realistic)
- Of great 30+ hour games specifically: maybe 2–4 per year for an active decade, tapering off
- Sits through credits voluntarily ~30–40% of the time (only when the game was genuinely moving)

**Lifetime count estimate (C):**
- 40 active gaming years × 3 great AAA finishes/year × 35% credit-watching probability ≈ **42 ≈ 40 events**
- This is for a dedicated core gamer. An average adult would be C ≈ 2–5 over a lifetime.

**Duration (d):**
- Typical AAA credits: 20–40 minutes. RDR2 is an extreme outlier at ~30 minutes of cinematic wrap-up plus scrolling names. The Last of Us credits are well-regarded and run ~15–20 minutes of meaningful content.
- Representative estimate: **25 minutes = 1,500 seconds**

**Clustering:**
- Heavily evening/weekend. Most "finish a big game" moments happen during long weekend sessions or late evenings after work. Effective active window where this could plausibly happen: **~6 hours/day** (6 PM–midnight on weekdays, extended on weekends).

**Friend group assumption:**
- The model assumes all 50 friends have identical behavior (C = 40). In reality, if your friends are also core gamers, this is roughly right. If your 50 friends include mostly casual players, E[overlap] drops by an order of magnitude or more. See sensitivity check in Math.

**Sources:**
- ESA 2024: 60% of adults play weekly; ~20% considered "core"
- Game completion rates: 30–40% of players who start AAA games finish them (Death is a Whale, 2021 analysis of Steam achievements)
- RDR2 credits: widely reported at ~30 min cinematic wrap-up; full scrolling credits reach 2h45m
- Credit-skip behavior: forum consensus suggests the majority skip; watching voluntarily is a minority behavior (~30–40% of finishers for emotionally resonant games)

## Math

Using the **lifetime-rare** formula:

```
E[overlap] = 2 × N × C² × d / L
```

Where:
- N = 50 (friends)
- C = 40 (lifetime count, core gamer)
- d = 1,500 seconds (25 minutes)
- L = 2.208 × 10⁹ seconds (70-year lifetime)

**With 50 friends:**
```
E[overlap_50] = 2 × 50 × 40² × 1500 / 2.208×10⁹
             = 2 × 50 × 1600 × 1500 / 2.208×10⁹
             = 240,000,000 / 2,208,000,000
             = 0.109
```

E < 1, so we report as probability: **~11% chance of ever overlapping with any one of your 50 friends across a lifetime.**

Expected time you'd need to live to see one overlap:
```
t_50 = L / E[overlap_50] = 2.208×10⁹ / 0.109 ≈ 2.03×10¹⁰ seconds ≈ 644 years ≈ 9.2 lifetimes
```

**With best friend only (N = 1):**
```
E[overlap_1] = 2 × 1 × 40² × 1500 / 2.208×10⁹ = 0.00217
```
**~0.22% chance of ever overlapping with your best friend across a lifetime.**
```
t_1 = L / 0.00217 ≈ 1.016×10¹² seconds ≈ 32,185 years ≈ 460 lifetimes
```

**Sensitivity check — mixed friend group (8 core gamers, 42 casual):**
```
E[mixed] = (8 × 2 × 40 × 40 × 1500 / 2.208×10⁹) + (42 × 2 × 40 × 2 × 1500 / 2.208×10⁹)
         = 0.087 + 0.0023
         ≈ 0.022
```
Still well below 1 — **~2% lifetime chance** if most friends are casual players. Expected wait: ~3,200 years.

**Average adult reference (C = 3):**
```
E[overlap_50] = 2 × 50 × 3² × 1500 / 2.208×10⁹ = 0.00061
```
Essentially impossible: **0.06% lifetime chance**, or ~114,000 years to see one overlap. This activity is invisible at the population level.

## Result

For a **core gamer** (C = 40, dedicated AAA player who watches credits ~35% of the time):

- **With any of your 50 friends:** ~11% chance it ever happens in your lifetime. Expected wait: **~644 years (about 9 lifetimes).**
- **With your single best friend:** ~0.22% chance across a lifetime. Expected wait: **~32,000 years (about 460 lifetimes).**

The numbers are so far apart from "yes, this happens" that even generous assumptions barely move them into plausible territory. The activity is simply too rare, too short, and too dependent on both people independently finishing and not-skipping at the same moment.

## Surprise check

Intuition says: *surely this happens eventually — gamers finish games all the time.* The surprise is the multiplicative punishment. Yes, a core gamer finishes 40 credit-watching sessions over a lifetime. But for overlap to occur, **both** you and a friend must be in that 1,500-second window at the same time. With C = 40 each and L = 2.2 billion seconds, the probability of any single instance is tiny (d/L ≈ 7×10⁻⁷ per event), and C² = 1,600 combined opportunities doesn't compensate. Even at its most favorable — a 50-friend group of equally dedicated gamers — this is a ~11% lifetime bet, not a certainty.

The friend-group composition matters enormously. If your close friends don't play long AAA games, the probability is so close to zero it's not worth calculating. The "simultaneous with friends" framing collapses on activities that require rare, specific, high-effort engagement from both parties.

## Sources

- [ESA 2024 Essential Facts About the U.S. Video Game Industry](https://www.theesa.com/resources/essential-facts-about-the-us-video-game-industry/2024-data/)
- [How Many Players Actually Finish Games? — Death is a Whale (2021)](https://deathisawhale.com/2021/01/20/how-many-players-actually-finish-games/)
- [What Proportion of Games Actually Get Completed By Players? — World Class Villains](https://worldclassvillains.com/2011/12/31/what-proportion-of-games-actually-get-completed-by-players/)
- [Red Dead Redemption 2 Credits Length — Games Learning Society](https://www.gameslearningsociety.org/how-long-is-red-dead-redemption-2-credits/)
- [Game Credits are really, really long these days — ResetEra](https://www.resetera.com/threads/game-credits-are-really-really-long-these-days.482014/)
- [Do you watch/sit through ending game credits? — NeoGAF](https://www.neogaf.com/threads/do-you-watch-sit-through-ending-game-credits.487164/)
- [Only 10-20% of people finish videogames — NeoGAF](https://www.neogaf.com/threads/only-10-20-of-people-finish-videogames.1671573/)
- [Casual vs. Hardcore: How Men and Women Define Gaming — Quantic Foundry (2018)](https://quanticfoundry.com/2018/08/01/casual-hardcore/)
