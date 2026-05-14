---
slug: same-song-in-head
name: Same song stuck in your head
emoji: 🎵
order: 17
duration_seconds: 1620
frequency_per_day: 1.5
lifetime_count: null
active_hours_per_day: 16
clustering_notes: Can occur anytime during waking hours; loosely correlated with music exposure and idle mental states
t_50_seconds: 1365333
t_1_seconds: 68266667
confidence: medium
---

## Setup

Earworms (involuntary musical imagery, or INMI) are the background hum of human cognition — most people have one cycling right now or did earlier today. But the question here isn't just "are you earworming?" It's the harder, stranger coincidence: are you and a specific friend running the *same* song in your heads at the same moment, with no coordination? That requires two independently firing earworm states to have landed on the same song out of a large cultural pool. It's not rare enough to be lightning-strike territory, but the same-song condition collapses the probability dramatically compared to plain simultaneous earworming.

## Inputs

**Frequency:** Large-scale surveys consistently find 89–92% of people experience INMI at least weekly, with ~33% reporting daily occurrence (Liikkanen 2012, N=11,910; Williamson et al. 2012, N≈1,000). Experience sampling method (ESM) studies — where participants are pinged at random intervals and asked "earworm right now?" — find 17–47% presence rates across samples (Floridou & Müllensiefen 2015; reviewed in Williamson & Jilka 2014 and the 2020 PMC review). Using 33% as the active-duty estimate, an average person experiences roughly 1–2 distinct earworm episodes per waking day. Central estimate: **1.5 episodes/day**, average waking hours = 16.

**Duration:** The most contentious parameter in earworm research. Experimental keyboard-press studies yield under 10 seconds per fragment; diary studies yield median episode durations of 8–36 minutes depending on study design (PMC review, 2020). The modal self-report is "a few hours," but that likely reflects a long tail of extreme cases. For this model, use the **diary-study median of 27 minutes (1,620 seconds)**, which avoids both the experimental-task floor and the retrospective-recall ceiling. This is conservative — it anchors on real-time diary logging.

**Effective song pool (N_songs):** The same-song condition requires modeling what's in cultural INMI circulation. Earworms overwhelmingly draw from familiar, recently heard music (Williamson et al. 2012). At any given moment, the shared earworm pool across a social group is shaped by:
- Spotify global top 10 songs capture a disproportionate share of streams; top-40 radio remains a common cultural synchronizer
- The "song of the summer" phenomenon creates episodic moments of near-monoculture (CNN, 2024)
- However, streaming fragmentation has expanded individual song libraries considerably

**Central estimate: N_songs = 100** (shared earworm pool in an average week). This assumes meaningful but not total fragmentation — consistent with an active top-40 radio culture plus recent listening history. Sensitivity range: 50 (peak cultural moment, e.g. "Blinding Lights" 2020 domination) to 200 (highly fragmented personal libraries).

**P(same song | both earworming) = 1/N_songs = 0.01** under a uniform-among-popular-songs model. The actual distribution is heavier-tailed — a few songs dominate — which would push this probability somewhat higher, making the central estimate conservative.

**Clustering:** No strong clustering; earworms are roughly uniformly distributed across waking hours, with mild elevation during low-attention states (commuting, showering, idle work tasks). Active hours = 16 used.

## Math

Using the plan's Poisson overlap model, treating each earworm episode as a Poisson event of rate `r` and duration `d`, and applying the same-song conditional probability:

```
r = f_day / (h × 3600)
  = 1.5 / (16 × 3600)
  = 2.604 × 10⁻⁵ per second

P(same song | both earworming) = 1 / N_songs = 1/100 = 0.01

t_overlap (active seconds) = 1 / (2 × N × r² × d × P_same_song)

For N = 50 friends:
  = 1 / (2 × 50 × (2.604×10⁻⁵)² × 1620 × 0.01)
  = 1 / (2 × 50 × 6.78×10⁻¹⁰ × 1620 × 0.01)
  = 1 / (1.099 × 10⁻⁶)
  = 910,222 active seconds

t_50_wall = t_overlap × (24/h) = 910,222 × 1.5 = 1,365,333 seconds ≈ 15.8 days

For N = 1 best friend:
t_1_wall = 68,266,667 seconds ≈ 790 days ≈ 2.2 years
```

**Sensitivity to N_songs:**
- N_songs = 50 (cultural peak moment): t_50 ≈ 7.9 days, t_1 ≈ 1.1 years
- N_songs = 100 (central): t_50 ≈ 15.8 days, t_1 ≈ 2.2 years
- N_songs = 200 (fragmented): t_50 ≈ 31.6 days, t_1 ≈ 4.3 years

## Result

**With any of your 50 close friends:** once roughly every **16 days**.

**With your best friend specifically:** once roughly every **2.2 years**.

These are expected values across average cultural conditions. During a true song-of-the-summer peak — when "Blinding Lights" (2020), "Espresso" (2024), or "Hey There Delilah" (2007) colonized everyone's heads simultaneously — the effective pool shrinks to N_songs ≈ 50, cutting both times roughly in half. During that summer, you and your best friend probably shared the same earworm once a year instead of once every two years.

The 50-friend result (~16 days) reflects that you're constantly cycling through a large friend group. The best-friend result (2.2 years) is the more emotionally interesting number — that rare moment when the two of you are both involuntarily humming the same chorus, unprompted, from opposite sides of the city.

## Surprise check

Intuition probably says "almost never" — the same-song condition feels almost impossibly specific. The answer comes out to every 16 days with your friend group, which is surprisingly frequent. The driver is that earworms are more common and longer than people consciously realize — if you're earworming 33% of the day and episodes last 27 minutes, you and any given friend have substantial overlapping "windows" that just need to land on the same song. The 100-song pool keeps that probability manageable. The best-friend number (2.2 years) feels more emotionally correct — significant enough to be meaningful when it happens, rare enough to feel like a genuine coincidence.

The real takeaway: shared earworms probably happen *more* often than you'd guess across your whole friend group, but *less* often than you'd hope with your single closest friend.

## Sources

- Liikkanen, L. A. (2012). Musical activities predispose to involuntary musical imagery. *Psychology of Music*, 40(2), 236–256. https://journals.sagepub.com/doi/abs/10.1177/0305735611406578
- Williamson, V. J., Jilka, S. R., Fry, J., Finkel, S., Müllensiefen, D., & Stewart, L. (2012). How do "earworms" start? Classifying the everyday circumstances of Involuntary Musical Imagery. *Psychology of Music*, 40(3), 259–284. https://journals.sagepub.com/doi/abs/10.1177/0305735611418553
- Williamson, V. J., & Jilka, S. R. (2014). Experiencing earworms: An interview study of Involuntary Musical Imagery. *Psychology of Music*, 42(5), 638–653. https://journals.sagepub.com/doi/10.1177/0305735613483848
- Floridou, G. A., & Müllensiefen, D. (2015). Environmental and mental conditions predicting the experience of involuntary musical imagery: An experience sampling method study. *Consciousness and Cognition*, 33, 472–486. https://pubmed.ncbi.nlm.nih.gov/25800098/
- Involuntary musical imagery as a component of ordinary music cognition: A review of empirical evidence (2020). *Psychonomic Bulletin & Review* (PMC). https://pmc.ncbi.nlm.nih.gov/articles/PMC7704448/
- CNN (2024). How the 'song of the summer' became a cultural phenomenon. https://www.cnn.com/2024/06/20/entertainment/song-of-the-summer-year-history-cec
- Wikipedia: Earworm. https://en.wikipedia.org/wiki/Earworm
