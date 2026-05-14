---
slug: throw-up
name: Throwing Up
emoji: 🤮
order: 18
duration_seconds: 450
frequency_per_day: 0.003288
lifetime_count: null
active_hours_per_day: 12
clustering_notes: Mild evening cluster — food poisoning and alcohol vomiting peak at night
t_50_seconds: 7670000000
t_1_seconds: 383500000000
confidence: medium
---

## Setup

Acute vomiting — the actual retching phase, not the nausea before or the miserable recovery after. Any cause counts: norovirus, food poisoning, a bad night drinking, motion sickness, stomach virus. The question is how often you and one of your 50 closest friends are simultaneously hunched over a toilet (or worse).

## Inputs

**Frequency:** The CDC reports ~19–21 million norovirus illnesses per year in the US (~330M population), and ~48 million foodborne illness cases annually. These overlap substantially — norovirus accounts for ~58% of US foodborne illness. Accounting for overlap and adding alcohol-related vomiting, motion sickness, and other viruses, the total picture is roughly 1–1.5 distinct acute vomiting episodes per adult per year. Survey data supports this: one informal survey found a median of 1 vomiting episode per year and a mean of ~1.28. Using **1.2 episodes/year** = **0.003288/day**.

**Duration:** Active retching in a single episode lasts roughly 5–15 minutes. Extreme bouts (cyclic vomiting, severe norovirus) run longer, but the median acute episode is probably 5–10 minutes of actual heaving. Using **7.5 minutes = 450 seconds**.

**Clustering:** Not tightly clustered like teeth-brushing, but not uniform either. Food poisoning typically manifests 4–8 hours after eating (dinner → late evening), and alcohol-induced vomiting is a night-out phenomenon. Using **h = 12 hours** (evening-weighted half-day active window).

**Caveats:** The 1.2/year figure mixes people who never vomit with heavy drinkers and the chronically ill. Frequency is skewed right — the median person might be closer to 0.5/year, the mean pulled up by outliers. The model uses the mean, which is the right input for expected overlap calculations.

## Math

Using the repeatable-activity formula:

```
r = f_day / (h × 3600)
  = 0.003288 / (12 × 3600)
  = 0.003288 / 43200
  = 7.61 × 10⁻⁸ per second

t_50 = (24/h) × 1 / (2 × r² × d × N)
     = (24/12) × 1 / (2 × (7.61e-8)² × 450 × 50)
     = 2 × 1 / (2 × 5.79e-15 × 22500)
     = 2 / (2.606e-10)
     ≈ 7.67 × 10⁹ seconds  (~243 years)

t_1  = (24/12) × 1 / (2 × r² × d × 1)
     = 2 / (2 × 5.79e-15 × 450)
     = 2 / (5.21e-12)
     ≈ 3.84 × 10¹¹ seconds  (~12,170 years)
```

## Result

**With your 50 closest friends:** Expected gap between simultaneous puking events is **~243 years**. Over a 70-year lifetime, that's roughly a 25% chance it happens even once.

**With your single best friend:** Expected gap is **~12,170 years** — essentially never in a human lifetime. You'd need to live about 174 lifetimes for even odds.

The intuition-violator here is the "50 friends compresses it" effect — even a rare, brief, unclustered event gets meaningfully likely across a large enough friend group over a lifetime. But vomiting is so brief (7.5 min) and infrequent (~1/year) that even 50 friends barely move the needle.

## Surprise check

Intuition: "This almost certainly never happens with any friend." 

Reality: With 50 friends, there's actually a ~25% lifetime chance — better than a coin flip that it *never* happens. That's surprising. With just your best friend, intuition is correct: essentially zero.

The gap between the 50-friend and 1-friend cases is stark: a factor of 50× in expected frequency. This is the compression effect at work — but here it's not enough to make it feel common.

## Sources

- https://www.cdc.gov/norovirus/data-research/index.html
- https://www.cdc.gov/food-safety/signs-symptoms/index.html
- https://www.quora.com/How-many-times-do-you-vomit-in-an-average-year
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7119329/
- https://www.mayoclinic.org/diseases-conditions/viral-gastroenteritis/symptoms-causes/syc-20378847
- https://www.afcurgentcare.com/aurora-havana/blog/how-long-does-vomiting-from-norovirus-last/
