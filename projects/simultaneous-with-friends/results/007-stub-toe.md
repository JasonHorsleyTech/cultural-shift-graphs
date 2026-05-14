---
slug: stub-toe
name: Stubbing your toe
emoji: 🦶
order: 7
duration_seconds: 2
frequency_per_day: 0.067
lifetime_count: null
active_hours_per_day: 16
clustering_notes: Scattered across waking hours; elevated during barefoot time at home (mornings and late evenings)
t_50_seconds: 5547000000
t_1_seconds: 277400000000
confidence: low
---

## Setup

Stubbing your toe is one of those universal human experiences — sudden, violent, briefly excruciating — that leaves no official paper trail. There are no national registries for stubbed toes. The moment itself (the sharp jolt, before the slower dull ache sets in) lasts roughly 2 seconds. We're looking for the window where both you and a friend experience that 2-second burst of acute pain at the same instant.

## Inputs

**Frequency:** No clinical literature tracks non-fracture stub events. The best available data comes from a self-reported survey of 2,866 people (via BlenderTimer/YouTube):
- 62% stub a few times a year or less (~4/year)
- 23% stub a few times a month (~3/month)
- 9% stub a few times a week (~10/month)
- 2% once daily
- 4% more than once daily

The distribution is heavily right-skewed; the mean is pulled up by a clumsy minority. For a "typical adult," the median lands around 2–4 stubs per month. This estimate uses **2 per month = 0.067 per day** as a plausible central estimate. Confidence is low — this is triangulation from anecdote, not measurement.

**Duration:** The initial sharp pain phase (fast-fiber transmission) lasts approximately 1–2 seconds before the slower dull ache takes over. Using **d = 2 seconds**.

**Active window:** Toe-stubbing can happen anywhere during waking hours, though barefoot time at home (mornings, evenings) carries elevated risk. Using the full waking window, **h = 16 hours/day**.

## Math

```
r = f_day / (h × 3600)
r = 0.067 / (16 × 3600)
r = 0.067 / 57600
r = 1.163 × 10⁻⁶ per second

t_overlap = (24/h) × 1 / (2 × r² × d × N)

t_50 = (24/16) × 1 / (2 × (1.163×10⁻⁶)² × 2 × 50)
     = 1.5 × 1 / (2 × 1.352×10⁻¹² × 2 × 50)
     = 1.5 / (2.704×10⁻¹⁰)
     = 5.547×10⁹ seconds
     ≈ 176 years

t_1 = t_50 × 50
    = 2.774×10¹¹ seconds
    ≈ 8,790 years
```

## Result

**With any of your 50 closest friends:** A simultaneous stub-toe overlap is expected once every **~176 years** — well beyond a lifetime.

**With your single best friend:** Expected once every **~8,790 years**.

Both results exceed a human lifetime, so this is firmly in "probably never happens to you" territory.

## Surprise check

Intuition says toe-stubbing is common enough that two people stub simultaneously fairly often — but the 2-second duration kills it. Even at 2 stubs per month, the active window is 16 hours × 3600 seconds = 57,600 seconds per day. At rate 1.16 × 10⁻⁶/sec, the chance that a specific friend stubs within 2 seconds of you is about 2 × (1.16×10⁻⁶) × 2 ≈ 4.6 × 10⁻⁶ per event. With 50 friends and ~24 events per year, that's ~0.005 expected overlaps per year — once per ~200 years. The rarity of the event and the razor-thin duration window make simultaneous stubs genuinely uncommon even across a large friend group.

## Sources

- [BlenderTimer: How Many People Stub Their Toe Every Day](https://blendertimer.com/data/how-many-people-stub-their-toe-every-day) — survey of 2,866 people on stub frequency
- [Cleveland Clinic: Stubbed Toe](https://my.clevelandclinic.org/health/diseases/24064-stubbed-toe) — clinical overview
- [Medical News Today: Stubbed toe](https://www.medicalnewstoday.com/articles/325950) — symptoms and pain phases
- [Tower Foot and Ankle: Why Does a Stubbed Toe Hurt So Much?](https://www.drjamfeet.com/blog/why-does-a-stubbed-toe-hurt-so-much/) — two-wave pain explanation (fast vs. slow fibers)
- [NPR: More People Are Breaking Their Toes (Pandemic Toes)](https://www.npr.org/2021/01/17/957779108/an-unexpected-pandemic-medical-issue-more-people-are-breaking-their-toes) — context on barefoot time and toe fracture rates
- [AAFP: Evaluation and Management of Toe Fractures](https://www.aafp.org/pubs/afp/issues/2003/1215/p2413.html) — clinical epidemiology, 5–6% of all ER fractures are toe fractures
- [Epidemiology of Sports and Recreation Toe Fractures (NEISS, 2013–2022)](https://doi.org/10.1177/24730114251342797) — 921,033 toe fractures identified in US EDs
- [PubMed: Demographics and functional outcome of toe fractures](https://pubmed.ncbi.nlm.nih.gov/21440463/) — clinical fracture demographics
