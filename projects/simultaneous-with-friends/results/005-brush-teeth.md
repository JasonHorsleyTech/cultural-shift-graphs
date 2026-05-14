---
slug: brush-teeth
name: Brushing teeth
emoji: 🪥
order: 5
duration_seconds: 60
frequency_per_day: 1.7
lifetime_count: null
active_hours_per_day: 1
clustering_notes: Two tight windows — morning ~7am and night ~10pm, each ~30 min wide
t_50_seconds: 17937
t_1_seconds: 896858
confidence: high
---

## Setup

Tooth brushing is one of the most clockwork-regular acts in adult life — anchored to the morning routine and bedtime. This makes it a canonical example of tight temporal clustering: instead of being spread across 16 waking hours, virtually all brushing happens in two narrow ~30-minute windows. The clustering effect dramatically inflates overlap probability compared to an evenly distributed activity.

## Inputs

**Frequency:** Survey data from Delta Dental's Oral Health and Well-Being Survey and YouGov finds roughly 30% of Americans brush once daily, ~60% twice, and ~10% three or more times. Blended mean: 0.3×1 + 0.6×2 + 0.1×3 = 1.8/day. Adjusting slightly downward for self-report optimism bias (people overreport healthy behaviors), a realistic figure is **1.7 brushing events per person per day**.

Caveats: Younger adults (18–34) skew lower (~1.5/day), elderly skew slightly higher due to dentist compliance. Gender gap: women brush slightly more frequently than men.

**Duration:** The Academy of General Dentistry reports the average person actually brushes for 45–70 seconds, far short of the ADA-recommended 120 seconds. Controlled lab studies (Swiss populations) find means of 73–97 seconds, but participants brush more carefully under observation. Real-world midpoint: **60 seconds** per session.

**Clustering / effective window:** Brushing is heavily anchored to two daily rituals — morning (typically 6:30–7:30am) and night (typically 9:30–10:30pm). Each window is roughly 30 minutes wide, giving a total effective active window of **h = 1 hour/day**. This is the key driver of the result: compressing all brushing into 1/16 of waking time makes simultaneous overlap ~16× more likely than a uniformly distributed activity.

## Math

Using the time-clustered formula from the plan:

```
r = f_day / (h × 3600)
  = 1.7 / (1 × 3600)
  = 4.722 × 10⁻⁴ per second

t_overlap = (24 / h) × 1 / (2 × r² × d × N)
```

**With 50 friends (t_50):**

```
t_50 = (24 / 1) × 1 / (2 × (4.722×10⁻⁴)² × 60 × 50)
     = 24 / (2 × 2.23×10⁻⁷ × 60 × 50)
     = 24 / 1.338×10⁻³
     = 17,937 seconds
     ≈ 5 hours
```

**With 1 best friend (t_1):**

```
t_1 = (24 / 1) × 1 / (2 × (4.722×10⁻⁴)² × 60 × 1)
    = 24 / 2.676×10⁻⁵
    = 896,858 seconds
    ≈ 10.4 days
```

## Result

- **With any of your 50 close friends:** Every ~5 hours, someone in your friend group is brushing at the same moment you are. You probably overlapped with a friend this morning.
- **With your best friend specifically:** About once every 10 days, you and your best friend brush at the exact same moment.

The clustering is doing enormous work here. If brushing were uniformly spread across 16 waking hours (h = 16), t_50 would balloon to ~80 hours and t_1 to ~200 days. The tight morning/night windows compress overlap time by a factor of 16.

## Surprise check

Intuitively, brushing feels private and solitary — you never think about whether a friend is doing it at the same time. But because everyone anchors to the same daily rituals (morning routine, bedtime), the synchrony is almost forced. Every day, your morning brush and your friends' morning brushes are happening in the same 30-minute window. The math confirms what the sociology implies: this is one of the highest-overlap activities in daily life, despite feeling invisible.

## Sources

- [YouGov: How often do Americans brush? A look at oral care habits](https://yougov.com/en-us/articles/51427-how-often-do-americans-brush-a-look-at-oral-care-habits)
- [DentistryIQ: How long does the average person brush?](https://www.dentistryiq.com/practice-management/patient-relationships/article/16359938/how-long-does-the-average-person-brush-check-out-this-infographic)
- [PubMed: Tooth brushing habits in uninstructed adults — frequency, technique, duration and force (2008)](https://pubmed.ncbi.nlm.nih.gov/18853203/)
- [PubMed: Tooth brushing and oral health: how frequently and when](https://pubmed.ncbi.nlm.nih.gov/16355646/)
- [Southwest Portland Dental: Survey Finds Americans Could Improve Oral Care](https://www.southwestportlanddental.com/survey-finds-americans-improve-oral-care/)
