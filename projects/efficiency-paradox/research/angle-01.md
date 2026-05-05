# Exploration Pass 1: Grounding the Efficiency Paradox

## Two Concrete Examples, Done Properly

### Example 1: Automotive Fuel Efficiency (the cleanest case)

The question.md napkin math is directionally right. Let me sharpen it with real numbers.

**Efficiency gains:**
- 1975 CAFE standard: 13.1 MPG for cars (the first CAFE year). Real-world fleet average was roughly 13-14 MPG.
- 2022 real-world fleet average (all light-duty vehicles): approximately 25.4 MPG per FHWA/EPA data.
- That's roughly a 1.9x improvement — not quite doubled, but close.

**Consumption changes:**
- 1975 VMT per capita (total highway VMT / US pop): ~8,100 miles/year (FHWA data: ~1.33 trillion VMT, pop ~215M).
- 2022 VMT per capita: ~9,800 miles/year (FHWA: ~3.26 trillion VMT, pop ~333M). 
- That's a 21% increase per capita, not 75% as the question.md suggests.

**Wait — where does the discrepancy come from?** The question.md says VMT per capita went from ~8,000 to ~14,000. That figure likely includes ALL vehicle miles (commercial trucks, etc.) or uses a per-licensed-driver figure rather than per-capita. Per licensed driver, VMT went from about 10,300 (1975) to about 14,300 (2019) — that tracks the question.md number. But per-capita is the honest denominator for a resource-consumption story (babies consume fuel via the family SUV).

**The actual Jevons math (per capita):**
- If behavior held constant at 1975 VMT per capita (8,100 mi/yr):
  - Fuel consumed per capita in 1975: 8,100 / 13.5 = ~600 gallons/year
  - Expected fuel at 2022 efficiency: 8,100 / 25.4 = ~319 gallons/year
  - Expected savings: 281 gallons (47% reduction)
- Actual fuel consumed per capita 2022: 9,800 / 25.4 = ~386 gallons/year
- Actual savings vs. 1975 baseline: 600 - 386 = 214 gallons (36% reduction)
- **Jevons Ratio: 214 / 281 = 76%.** We captured about three-quarters of the efficiency gains.

That's... actually better than the question.md's framing of "roughly zilch." Driving did increase, but the efficiency gains weren't fully eaten. This is important — the automotive case is less dramatic than the question suggests. Per-capita gasoline consumption genuinely fell, just not as much as the efficiency improvement alone would predict.

**Why this matters for the graph:** The automotive case is commonly cited as a slam-dunk Jevons example, but the real data shows partial rebound, not full rebound. This is actually *more* interesting — it means the Jevons Ratio varies, which is exactly what makes the graph worth building.

**Caveat:** Vehicle size crept up massively (average curb weight rose ~25% from 1975 to 2022, SUV share went from almost nothing to >50% of sales). Some of the "efficiency gain" was eaten by making bigger vehicles rather than saving fuel — but the MPG numbers already reflect this (they're fleet-average real-world, not holding vehicle size constant). So the Jevons calculation above is already "honest" about the size shift.

### Example 2: Lighting (the dramatic case)

This one is wilder and the data is harder.

**Efficiency gains:**
- Incandescent bulb: ~15 lumens/watt (a good one).
- Modern LED: ~100-150 lumens/watt.
- Improvement factor: roughly 7-10x since the incandescent era.
- But the transition wasn't instant. In 2010, most US lighting was still incandescent/CFL. By 2020, LEDs dominated new sales. The fleet turnover is still happening.

**Consumption changes:**
- In 1900, the average American home had maybe 2-5 light sockets, on for a few hours per evening. Total residential lighting electricity was tiny.
- By 2015, the average US home had 50-80 light sockets (EIA RECS survey), many left on for long hours. Commercial and outdoor lighting exploded (parking lots, 24/7 signage, architectural lighting, sports venues).
- Per-capita lumens consumed: estimates range from a 100x increase over the 20th century (Nordhaus, Fouquet & Pearson).

**The Jevons math:**
- Total US electricity for lighting in 2001: about 765 TWh (roughly 22% of total electricity).
- Total US electricity for lighting in 2020: about 537 TWh (roughly 14% of total electricity).
- That's a 30% reduction in absolute terms over ~20 years of LED adoption. Population grew ~16% in that period.
- Per-capita lighting electricity dropped from about 2,680 kWh/year (2001) to about 1,620 kWh/year (2020). That's a 40% per-capita reduction.
- But over the same period, lighting efficiency roughly doubled (CFL + early LED penetration into the stock).
- If behavior held constant with a 2x efficiency gain, we'd expect a 50% reduction.
- **Jevons Ratio (2001-2020): ~80%.** Most of the efficiency gain stuck — because we were already saturated on light. You can only light a parking lot so bright.

**The longer view is different.** Over the full 1900-2020 arc, lighting efficiency improved ~10x but lumen consumption increased ~100x. On that timescale, the Jevons Ratio is deeply negative — we consumed 10x more energy for lighting despite 10x better efficiency. But most of that expansion happened during the electrification era (1900-1970), not during the LED era. The question is whether we're measuring the technology transition (LED vs. incandescent) or the full century.

**This matters for graph design:** The time window dramatically changes the story. Recent LED transition → efficiency mostly captured. Full 20th century → pure Jevons blowout. We need to be explicit about time windows.

## Proposed Metric: Refinement of the "Jevons Ratio"

The question.md proposes:

> Jevons Ratio = (actual consumption change) / (expected consumption change if behavior held constant)

This is the right idea but needs tightening. Here's a more precise formulation:

**Rebound Fraction** (this is the standard economics term, which will help with sourcing):

```
Rebound = 1 - (actual savings / expected savings)
```

Where:
- **Expected savings** = consumption_baseline × (1 - 1/efficiency_gain_factor)
  - e.g., if efficiency doubled, expected savings = 50% of baseline consumption
- **Actual savings** = consumption_baseline - consumption_actual

So:
- Rebound = 0% → all efficiency gains captured (no Jevons effect)
- Rebound = 100% → gains fully eaten ("backfire" in economics jargon when >100%)
- Rebound > 100% → consuming more than before despite efficiency improvement

**Note: This is the complement of the question.md's "Jevons Ratio."** The question.md has 0% = full Jevons, 100% = no Jevons. Economics literature uses the opposite convention (rebound of 0% = no rebound, 100% = full rebound). Either works for graphing; we should just pick one and be consistent.

**What I'd graph:**

- **X axis:** Domains (12 categories, grouped as bars or a dot plot)
- **Y axis:** Rebound percentage (0-100%+), with a line at 100% marking "full backfire"
- **Secondary visualization:** For the 3-4 most interesting domains, a time series showing efficiency (normalized) and actual consumption (normalized) on the same axes, with the gap between them being the visual Jevons story.

The time-series version is more powerful than a single summary number because the rebound often changes over time (high rebound during adoption, then saturation kicks in and rebound shrinks).

**What's one data point?** For each domain: pick a base year, measure efficiency at base year and recent year, measure per-capita consumption at both years, compute the rebound fraction. Ideally also compute it per decade to show the trajectory.

## Potential Data Sources (Longitudinal)

### Tier 1: High confidence, freely available, 40+ year time series

1. **FHWA Highway Statistics Series** (1945–present)
   - Vehicle miles traveled (total and per capita)
   - Registered vehicles, fuel consumed
   - Published annually, downloadable tables
   - URL: fhwa.dot.gov/policyinformation/statistics.cfm

2. **EIA Annual Energy Review / Monthly Energy Review** (1949–present)
   - Total energy consumption by sector
   - Electricity generation by source and end use
   - Residential energy consumption by end use (lighting, HVAC, appliances)
   - EIA RECS (Residential Energy Consumption Survey): every 4-5 years since 1978, granular household-level data
   - URL: eia.gov/totalenergy/data/annual/

3. **USDA National Agricultural Statistics Service (NASS)** (1866–present for some crops)
   - Crop yields per acre (corn, wheat, soybeans, etc.)
   - Total acreage planted
   - Fertilizer and pesticide usage (via USDA ERS)
   - Water use for irrigation (linked to USGS data)

4. **BTS Air Carrier Statistics** (1954–present)
   - Revenue passenger-miles
   - Available seat-miles
   - Fuel consumption by carrier
   - Domestic + international breakdowns

### Tier 2: Good data but shorter series or requires synthesis

5. **USGS Water Use in the United States** (every 5 years, 1950–2015)
   - Per-capita water withdrawal by sector (public supply, irrigation, industrial)
   - This is the gold standard but only every 5 years, and the 2020 report was delayed

6. **EPA ENERGY STAR / DOE Appliance Standards Program**
   - Efficiency standards and actual efficiency of shipped appliances (refrigerators, HVAC, washing machines)
   - Good from ~1990 onward; spotty before

7. **IEA World Energy Outlook / Energy Efficiency Reports**
   - Cross-country comparisons of energy efficiency vs. consumption
   - Good for international context but paywalled in parts

### Tier 3: Harder to get, may require academic sources

8. **Nordhaus "The Progress of Lighting" dataset** — the seminal dataset on lumens per dollar over centuries. May need to pull from the 1996 paper directly.

9. **Koomey's Law data (computing efficiency)** — Jonathan Koomey's research on computations per kWh. Published in academic papers, data might need to be reconstructed.

10. **Textile/garment data** — OTEXA (Office of Textiles and Apparel) has import data. USDA has domestic cotton production. But "garments purchased per capita" requires consumer expenditure data (BLS CEX survey) which is messy.

## Where the Framing Feels Wobbly

### 1. The time window problem (biggest concern)

The Jevons Ratio is not a fixed number — it changes dramatically depending on where you set the baseline year. Cars from 1975-2022 show ~24% rebound. Cars from 1920-2022 would show something completely different (we went from horse-drawn to 14,000 VMT per driver — that's a full Jevons blowout driven by the technology shift itself, not efficiency improvements within the technology).

**Risk:** If we cherry-pick time windows, we can make any domain tell any story. The graph needs a principled rule for choosing windows.

**Proposed rule:** Start each domain's clock at the beginning of the *modern efficiency improvement era* for that specific resource — when the technology was already mature and the efficiency gains were incremental, not revolutionary. For cars, that's ~1975 (CAFE). For lighting, that's ~2008 (LED commercialization). For agriculture, ~1950 (Green Revolution). This won't give us a uniform start year, but it gives us honest comparisons within each domain.

### 2. What counts as "the resource"?

For cars, the resource is clearly gasoline. But for computing, what's the resource? Electricity? Silicon? "Compute" itself? If the resource is electricity, then computing shows massive Jevons (more efficient chips → vastly more total computing energy). If the resource is "compute," then we just got enormously more of it for the same-ish energy — which is the *point* of computing efficiency, not a paradox at all.

**Risk:** The "efficiency paradox" framing assumes the goal of efficiency was to reduce total consumption of the resource. But in computing, nobody was trying to reduce total compute — they were trying to get more compute per dollar. Jevons applies cleanly to resource extraction (coal, oil, water) where less is genuinely better. It's philosophically weird for computing where "more compute" is the entire goal.

**This could undermine 2-3 of the 12 proposed domains.** Computing, communication bandwidth, and possibly textiles all have this problem. The efficiency improvement was primarily about getting more for less, not about using less total.

**Proposed fix:** Split domains into two categories:
- **Resource-conservation domains** (fuel, water, electricity for heating/cooling, agricultural inputs): where the social goal is genuinely "use less of this."
- **Abundance domains** (computing, communication, textiles): where the social goal is "get more of this," and efficiency is a means to abundance, not conservation.

Then the graph can show: "Jevons hits hardest in abundance domains (obviously — the whole point was more, not less) and partially in conservation domains (where it's genuinely surprising and policy-relevant)."

### 3. Population vs. per-capita vs. per-household

The question.md correctly says everything must be per-capita. But some domains are naturally per-household (refrigeration, home heating), and household size has been shrinking (3.1 people in 1970 → 2.5 in 2020). A shift to smaller households means more refrigerators, more HVAC systems per capita, even if per-household consumption is flat. This isn't really Jevons — it's demographics.

**Risk:** Conflating demographic trends with behavioral rebound inflates the Jevons number for household-level domains.

**Proposed fix:** For household domains (HVAC, refrigeration, water), report both per-capita and per-household, and note the divergence. The per-capita number is honest for total resource consumption; the per-household number isolates the behavioral rebound from the demographic shift.

### 4. Income effects vs. pure rebound

Classic Jevons rebound is: "I can drive more cheaply, so I drive more." But some of the consumption increase isn't rebound at all — it's income growth. People in 2022 are richer than in 1975 and would drive more even if efficiency hadn't changed, simply because they can afford to. Separating the efficiency-driven rebound from the income-driven increase requires econometric modeling, not just dividing two trends.

The economics literature distinguishes:
- **Direct rebound:** Using more of the now-cheaper resource (driving more because MPG went up)
- **Indirect rebound:** Spending the fuel savings on other stuff that also uses energy
- **Economy-wide rebound:** Macroeconomic growth effects from cheaper energy

Our graph is implicitly measuring *all* of these combined plus income effects. That's fine for the "bar argument" version, but it means our Jevons Ratio overstates the pure rebound effect. We should acknowledge this but not try to decompose it — decomposition is an academic paper, not a graph.

### 5. Normalization headaches

The question.md says "1975 or earliest-available = 100" for the time series lines. But if each domain starts at a different year, the normalized lines aren't directly comparable. One domain might show "efficiency went from 100 to 300 over 50 years" while another shows "efficiency went from 100 to 200 over 20 years." The visual comparison is misleading because the time axes are different lengths.

**Proposed fix:** Use the summary metric (rebound %) as the primary comparison across domains (bar chart). Use the time series as drill-down visuals for individual domains where the time axis is honestly labeled.

## Summary Assessment

**Is this graphable?** Yes, strongly. The data exists for at least 8 of the 12 proposed domains with 30+ year time series from US government sources. The metric is well-defined (with the refinements above). The visual format (bars + drill-down time series) works.

**Is it interesting?** Depends on whether the rebound rates actually vary across domains. The two examples I dug into (cars: ~24% rebound, lighting: ~20-80% depending on window) suggest real variation. If we find that some domains (water? heating?) show near-zero rebound while others (computing, communication) show >100% backfire, the graph has a genuine punchline.

**Biggest risk:** The time-window problem. Without a principled rule for choosing baselines, the numbers are arbitrary. Second biggest risk: the "what counts as the resource" problem for abundance domains.

**Recommended next step:** Stress-test the metric against 2-3 more domains (water, heating, computing) to see if the rebound rates actually vary enough to be interesting. If they're all clustered at 20-30%, the graph is boring. If they span 0-150%, it's great.
