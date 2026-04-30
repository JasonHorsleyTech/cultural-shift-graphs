# Exploration Pass 1: Grounding the Question

## The question in plain language

After a civilization-disrupting event, what does the US population survival curve look like over time? The question.md already identifies ~10 scenarios. This pass grounds the concept with concrete numbers, proposes a metric, and identifies where the framing is solid vs. wobbly.

---

## Concrete example 1: The medication cliff

The most underappreciated wave of die-off is the one that hits within the first 30 days of any total infrastructure collapse — the people who die not from the event itself but because modern medicine stops.

**The numbers (all US, current):**

| Dependency | Population | Time to death without care |
|---|---|---|
| Insulin-dependent diabetes (Type 1 + insulin-requiring Type 2) | ~8.4 million | Type 1: 1–2 weeks. Insulin-requiring Type 2: weeks to months |
| Dialysis (ESRD) | ~517,000 | 1–2 weeks |
| Home oxygen / ventilator-dependent | ~1.5 million | Hours to days |
| Organ transplant recipients (immunosuppressants) | ~300,000 | Weeks to months (organ rejection) |
| Currently hospitalized (any given day) | ~500,000–1M | Hours to days for ICU patients |
| Nursing homes / assisted living | ~1.3 million | Days to weeks (many can't self-care) |

**Conservative 30-day medical die-off: ~12 million people (~3.6% of population).**

And this is *only* the immediately life-threatening dependencies. CDC NHANES data shows 61% of US adults (~160 million) take at least one prescription drug daily. 85% of adults over 60 are on daily medication. Most of those medications aren't immediately life-sustaining — missing your statin or SSRI won't kill you in a month — but the degradation of health across the entire population would compound every other survival challenge (decision-making, physical labor capacity, immune function, chronic pain management).

**Napkin math:** In any scenario that permanently knocks out the pharmaceutical supply chain, roughly 4% of the population is dead within 30 days from medical dependency alone — before starvation, violence, or exposure enters the picture. This is a near-constant across all grid-down scenarios (EMP, solar storm, nuclear war, cyberattack). It's the floor of the die-off curve's first month.

---

## Concrete example 2: The caloric math

**How long does the food last?**

US grocery stores operate on just-in-time logistics. Average store holds ~72 hours of inventory at normal consumption rates. The broader food pipeline — warehouses, distribution centers, cold storage, restaurant supply — adds perhaps 30–60 days of total food if perfectly rationed and distributed, which it wouldn't be. The US strategic grain reserve is functionally gone — the reserve was drawn down and largely eliminated decades ago. USDA 2026 outlook notes global grain reserves are being consumed faster than replenished even now.

335 million people × 2,000 cal/day = **670 billion calories per day**.

After stored food runs out (call it 30–90 days depending on how much hoarding, waste, and unequal distribution occurs), survival depends entirely on what the land can produce.

**What can the land produce without modern inputs?**

| Era | US population | Agricultural tech |
|---|---|---|
| 1800 | 5.3 million | Draft animals, hand tools, 17 states |
| 1860 | 31 million | Full continental farming, horse-drawn equipment |
| 1900 | 76 million | Draft animals, established crop rotation, NO synthetic fertilizer |
| 1940 | 132 million | Early mechanization, still 21M draft animals |
| 2026 | 335 million | Full mechanization, synthetic fertilizer, hybrid seeds, GPS-guided tractors |

The 1900 figure (76 million) is probably the best proxy for "what the US could sustain with pre-mechanized but knowledgeable agriculture." That's ~23% of the current population.

**But here's the critical catch: 1900 farming infrastructure doesn't exist anymore.**

In 1900, the US had:
- ~21 million horses and mules as draft animals
- Generations of accumulated subsistence farming knowledge
- Seed varieties selected for local conditions
- Established irrigation and crop rotation systems
- A functioning rural social fabric with neighbors helping neighbors

Today:
- Draft horse/mule population: ~300,000 (down 98.6% from 1900)
- Fewer than 2% of Americans farm; most couldn't identify a corn plant at seedling stage
- Seeds are primarily proprietary hybrids optimized for fertilizer+pesticide regimes
- Irrigation depends on electric pumps
- Rural communities are hollowed out and aging

**Post-collapse carrying capacity could be *lower* than 1900 levels for years** until knowledge and infrastructure rebuild. A reasonable napkin estimate for year-1 post-collapse food production (no nuclear winter, just grid-down): maybe 5–15% of current output, feeding 17–50 million people. The rest are competing for stored food, hunting/fishing (game populations would collapse rapidly under pressure from 300M+ hunters), and foraging.

**Stabilization estimate for grid-down without climate disruption: 30–75 million (9–22% of current population) within 2–5 years**, recovering slowly as agricultural knowledge rebuilds.

**Nuclear winter makes it worse by an order of magnitude.** Xia et al. 2022 (Nature Food) — the best single source — models a 150 Tg soot scenario (full US-Russia exchange) producing ~90% caloric production loss globally for 3–4 years. US crop production drops to near zero. You can't farm your way out of nuclear winter. Survival depends on stored food, fishing (marine fisheries also decline significantly), and extreme caloric rationing. Carrying capacity during nuclear winter: maybe 10–30 million, and that's optimistic.

---

## Proposed metric

### What to graph

**X-axis: Time post-event**
- Segmented or log-scale to handle the compression problem (lots happens in the first 30 days, then a long slow tail over years)
- Suggested segments: Hours (0–24), Days (1–30), Months (1–12), Years (1–10)
- Alternative: continuous log-scale from 1 hour to 10 years

**Y-axis: US surviving population as percentage of current (~335 million = 100%)**
- Could also show absolute numbers as secondary axis
- Important to show the stabilization point clearly

**Each scenario as a separate curve** with labeled inflection points. The curve has a characteristic shape for most scenarios — a series of step-downs:

1. **Immediate (0–24 hrs):** Direct casualties from the event itself (blast, impact, pyroclastic flow, etc.). Nuclear war: 30–90 million. Solar storm: ~0. Asteroid: varies wildly by impact location.
2. **Medical collapse (days 1–30):** ~12 million regardless of trigger (the medication cliff).
3. **Starvation/disease wave (months 1–12):** The big die-off. Where the curve goes from "bad" to "apocalyptic."
4. **Violence and social collapse (overlaps months 1–12):** Amplifier, not independent cause. Hard to model separately.
5. **Long-term carrying capacity adjustment (years 1–5):** Population finds equilibrium with what the land can produce.
6. **Stabilization:** The curve flattens. The "you made it" point.

### The key number for Jason

"How many months do I need to survive to make the cut?" The answer is wherever the curve flattens — when the die-off rate drops to replacement-level mortality. For most scenarios, this is probably **12–24 months**. If you're alive at the 2-year mark, you're likely in a community that has figured out food production, water, basic medicine, and defense. The curve after that point is slow improvement, not continued die-off.

---

## Data sources with longitudinal potential

### Tier 1: Peer-reviewed with actual modeling

1. **Xia, Robock et al. (2022) — Nature Food.** "Global food insecurity and famine from reduced crop, marine fishery and livestock production due to climate disruption from nuclear war soot injection." Six soot-injection scenarios with year-by-year caloric production by country. This is the gold standard — actual numbers, peer-reviewed, reproducible. Directly usable for the nuclear war curve's famine phase.

2. **Kemp et al. (2022) — PNAS.** "Climate Endgame: Exploring catastrophic climate change scenarios." Provides a framework for climate cascade mortality (10% to extinction range at 4°C+). Less precise than Xia et al. but the only serious peer-reviewed treatment of catastrophic climate mortality.

3. **Princeton SGS Plan A (2019).** Nuclear war simulation with hour-by-hour casualty estimates. 91.5 million US casualties in the first hours of a US-Russia exchange. Directly usable for the immediate phase of the nuclear war curve.

### Tier 2: Government/institutional with credible methodology

4. **Congressional EMP Commission reports (2004, 2008, 2017).** The source of "9 in 10 within a year." Congressional testimony, not peer-reviewed. But the underlying analysis of grid-dependent infrastructure is detailed and largely uncontested. Useful for the grid-down scenarios even if the topline number is debatable.

5. **NAS (2008) — Severe Space Weather Events; Lloyd's/AER (2013) — Solar Storm Risk.** Transformer recovery timelines (4–10 years for Carrington-class events). Useful for shaping the grid-down curve's duration.

6. **CDC NHANES, USRDS, ADA diabetes statistics.** For building the medication-dependent population die-off wave. Hard numbers, well-documented.

### Tier 3: Useful for cross-reference

7. **USDA agricultural census data.** Historical crop yields, farmland acreage, livestock counts. Essential for estimating carrying capacity.

8. **Toby Ord, *The Precipice* (2020).** Risk probability estimates per century. Useful for contextualizing which scenarios are more/less likely, if we want to annotate the graph with probability.

9. **ALLFED (Alliance to Feed the Earth in Disasters).** Organization specifically focused on post-catastrophe food production. Has modeling for alternative food sources (mushrooms grown on dead trees, seaweed, etc.) that could shift the carrying capacity numbers upward.

---

## Where the framing is wobbly

### 1. The "90% die" EMP figure is political, not scientific

The Congressional EMP Commission's "9 in 10 within a year" was testimony designed to secure funding, not a peer-reviewed finding. The underlying grid-dependency analysis is solid, but the topline mortality estimate jumps from "infrastructure would be overwhelmed" to "90% dead" without showing its math. Commissioner Lowell Wood first testified to this figure in 2005, and it's been repeated uncritically ever since. The research phase should evaluate this critically — what assumptions about human cooperation, regional variation, and improvised food production go into that number? It could be 50% or 95%, and the difference matters for the graph.

### 2. Human adaptability is the biggest modeling gap

Every model treats people as passive recipients of fate. In reality:
- Communities self-organize rapidly (Katrina, Puerto Rico blackout, etc.)
- People with any agricultural background would teach neighbors
- Fishing communities along coasts and rivers could sustain significant populations
- The Amish (380,000+) and small-scale farmers are already adapted
- Military installations have backup systems and stored supplies

On the other hand:
- History also shows rapid descent into violence and hoarding
- The Donner Party problem: cooperation breaks down under extreme scarcity
- Modern Americans are less physically resilient and more urban than any prior generation facing similar challenges

The cooperation-vs-collapse spectrum is genuinely unpredictable and would massively affect the curves. A sensitivity analysis (optimistic cooperation vs. pessimistic fragmentation) might be more honest than a single line per scenario.

### 3. Geographic variation is enormous and a national average may be misleading

Manhattan (70,000 people/sq mi, zero food production capacity, complete infrastructure dependency) and rural Iowa (15 people/sq mi, surrounded by cropland, well water) are essentially different planets in a grid-down scenario. A national average of "X% survive" masks the reality that survival probability varies by orders of magnitude based on location.

The graph could address this with:
- A shaded band around each curve showing urban vs. rural range
- Separate curves for "urban" and "rural" within each scenario
- Or just acknowledge it in annotations

### 4. Pre-industrial ≠ post-apocalyptic

This is the most important conceptual wobble. When people imagine "going back to 1900 farming," they imagine communities that had accumulated centuries of agricultural knowledge, had 21 million draft animals, had seed banks, had tools, had social structures designed around manual labor. A sudden collapse doesn't produce 1900 conditions — it produces something *worse* than 1900 for several years until knowledge and infrastructure rebuild. The carrying capacity is a moving target:

- Year 0–1: Much worse than pre-industrial (chaos, no knowledge, no tools)
- Year 2–5: Approaching pre-industrial levels as survivors organize
- Year 5–20: Potentially recovering toward early-industrial levels
- Year 20+: Depends entirely on what knowledge survives

### 5. Scenarios overlap and compound

A nuclear war doesn't just produce blast casualties — it also causes:
- EMP (grid collapse over affected areas)
- Nuclear winter (crop failure for years)
- Radiation (cancer, immune suppression)
- Infrastructure destruction (hospitals, water treatment)
- Potential pandemic conditions (crowding, unsanitary conditions)

The question.md correctly notes that grid-down scenarios share a curve, but should also note that the "separate scenario" framing is somewhat artificial. The nuclear war curve is really the *combination* of all these effects.

### 6. Climate cascades don't belong on the same x-axis

The climate scenario (4°C+) plays out over decades, not months. Putting it on the same graph as "nuclear war kills 90 million in 6 hours" creates a visual comparison that's misleading. Options:
- Include it but on a different x-axis scale (a separate panel)
- Include it as a very flat, slow-declining line with annotation
- Exclude it from the main graph and mention it in accompanying text
- Use it as a "baseline decline" that other scenarios compound on top of

I'd recommend including it but with clear visual differentiation — maybe a dashed line or a separate panel.

---

## Summary: Is this graphable?

**Yes, with caveats.** The data for the nuclear war scenario is strongest (Xia et al. 2022, Princeton Plan A give year-by-year numbers). Grid-down scenarios have reasonable institutional analysis even if the topline numbers are debatable. Climate cascades and pandemic scenarios have less precise modeling.

The biggest risk is **false precision** — drawing a clean line that says "at month 6, 47% of the population is dead" when the real uncertainty band is 30–65%. The graph should probably show uncertainty ranges, not just single lines.

**Recommended next steps for pass 2:**
1. Stress-test the caloric carrying capacity math against edge cases (coastal fishing communities, military bases, Mormon food storage culture, etc.)
2. Dig into the Xia et al. 2022 supplementary data for US-specific year-by-year figures
3. Evaluate whether the "cooperation vs. collapse" spectrum should be shown as scenario variants or as uncertainty bands
4. Decide on x-axis treatment: log scale vs. segmented vs. multiple panels
