# Exploration Pass 2: Stress-Testing the Metric

## Mission

Try to break the Rebound Fraction metric across multiple domains. Identify which failures are fatal flaws vs. scope boundaries. Propose refinements.

---

## Attack 1: The Denominator Is Fiction

The core metric is:

```
Rebound = 1 - (actual savings / expected savings)
```

"Expected savings" means "what would have happened if behavior held constant." But behavior never holds constant. In a growing economy with rising incomes, urbanization, suburbanization, cultural shifts, and demographic changes, consumption of *everything* tends to grow over time. The metric attributes ALL consumption growth above the "constant behavior" line to rebound — conflating genuine efficiency rebound with:

- **Income growth:** Richer people drive more, fly more, eat more, run more appliances regardless of efficiency.
- **Structural economic shifts:** E-commerce drove freight ton-miles. Suburbanization drove VMT. Sun Belt migration drove HVAC demand. None of these are rebound from efficiency.
- **Cultural changes:** "Always-on" culture drives lighting and computing upward. Fast fashion is a cultural/business-model phenomenon, not an efficiency rebound.

**How bad is this?** It's the single biggest threat to the metric's credibility. Economics literature on Jevons spends enormous effort trying to isolate the "direct rebound effect" from these confounds (using price elasticity estimates, natural experiments, etc.). Our graph doesn't do any of that — it just divides two trends.

**Is it fatal?** No, but it requires honest framing. The metric doesn't measure "how much did Jevons eat" — it measures "how much of the theoretical efficiency dividend actually showed up as reduced consumption, *for any reason*." That's still a powerful and graphable claim. The visual punchline — "efficiency doubled but consumption barely budged" — lands regardless of *why* consumption grew.

**Refined framing:** Call it the "Efficiency Dividend Captured" rather than "Rebound Fraction." Don't claim to measure Jevons rebound specifically. Measure how much of the efficiency promise materialized as actual resource reduction. Jevons is one explanation for why it didn't; income growth, structural change, and cultural shifts are others. The graph shows the gap. The viewer's own curiosity fills in the why.

**Verdict: Not fatal. Scope boundary. Reframe the claim from "Jevons rebound" to "efficiency dividend captured."**

---

## Attack 2: Mechanical Bias Against High-Efficiency-Gain Domains

If efficiency improves 10x, the "expected savings" is 90% of baseline consumption. Even modest consumption growth (say 20% increase) against that enormous denominator yields a massive rebound number. Meanwhile, if efficiency only doubles, expected savings is 50% of baseline, and the same 20% consumption increase yields a much lower rebound.

Concrete example:
- **Lighting** (10x efficiency gain, 1900-2020): Expected savings = 90% of baseline. Actual consumption went up 10x. Rebound = well over 100%.
- **Cars** (2x efficiency gain, 1975-2022): Expected savings = 50% of baseline. Actual consumption fell 36%. Rebound = ~24%.

The metric mechanically punishes domains with larger efficiency gains, making cross-domain comparison misleading. Lighting "looks worse" than cars partly because LEDs were a bigger leap than CAFE improvements.

**How bad is this?** Moderate. It doesn't make any individual domain's number wrong — lighting rebound over the century really is enormous. But it makes the cross-domain bar chart deceptive. Domains aren't being compared on equal footing.

**Is it fatal?** Not if we're honest about it. The variation is still interesting — it's just that some of the variation is mechanical (from efficiency gain magnitude) rather than behavioral.

**Proposed fix:** Alongside the rebound percentage, show the raw numbers: "Efficiency improved Nx. Consumption changed Yx. Net resource change: Z%." The bar chart can use net resource change (%) as the primary comparison, with rebound fraction as the secondary drill-down. Net resource change is immune to this mechanical bias because it doesn't divide by expected savings.

**Verdict: Real problem. Fixable with visualization choice. Use net resource change for cross-domain comparison, rebound fraction for within-domain storytelling.**

---

## Attack 3: "What Is the Resource?" Collapses in 4+ Domains

Pass 1 flagged this for computing. Let me push harder. The problem is worse than acknowledged.

### Agriculture

What's the resource?
- **Land**: Yield per acre tripled. Cropland acreage *fell* ~15% since 1950 in the US. Rebound is low or negative. Story: "Efficiency worked! We returned land to nature."
- **Water**: Irrigation efficiency improved ~40%. Total irrigation water use stayed roughly flat (offsetting acreage changes). Moderate rebound.
- **Fertilizer**: Nutrient use efficiency improved ~30%. Total fertilizer application more than tripled since 1960 (then leveled off post-2000). High rebound.
- **Energy (total inputs)**: Per-calorie energy inputs have barely budged despite all yield improvements. Full rebound.

Four resources, four completely different Jevons stories. Which one do we graph? If we pick one, we're cherry-picking. If we show all four, agriculture becomes four data points, not one — bloating the chart.

### Home heating/cooling

What's the resource?
- **Energy per square foot**: Improved ~35% since 1980 (better insulation, higher SEER ratings).
- **Total HVAC energy per household**: Roughly flat (homes got ~40% bigger, offsetting efficiency).
- **Total HVAC energy per capita**: Down ~15% (smaller households partially offset by bigger homes).

But wait — average thermostat set points changed too. Americans keep homes warmer in winter and cooler in summer than in 1980. Is that rebound (cheaper heating → turn up the thermostat) or just a cultural shift enabled by air conditioning penetration? In 1980, only ~55% of US homes had central AC. By 2020, it was ~90%. That's not rebound from *efficiency* — it's adoption of a *technology*.

### Refrigeration

What's the resource?
- **Electricity per cubic foot**: Improved dramatically (~75% since 1972 for new units, per DOE standards data).
- **Total refrigeration electricity per household**: Dropped ~50% despite larger fridges, because the efficiency gains were enormous and mandated.
- **Total refrigerated volume per capita**: Massively up (bigger fridges, separate freezers, mini-fridges, wine coolers, commercial refrigerated display cases).

If we measure electricity, this is a success story (maybe the best one). If we measure "cold cubic feet," it's a Jevons blowout. The "resource" choice determines the entire narrative.

### Textiles

What's the "efficiency" improvement?
- **Cost per garment**: Dropped ~60% since 1990 (inflation-adjusted) due to globalization.
- **Labor hours per garment**: Dropped ~80% since 1950 due to mechanization.
- **Energy per garment**: Ambiguous. Depends heavily on material and geography.

But "cost dropped due to globalization" is not the same as "production became more efficient." Moving production to countries with lower wages isn't a Jevons-type efficiency gain — it's labor arbitrage. The garment itself isn't produced with fewer resources per unit; the resources are just cheaper. Including textiles risks conflating "Jevons Paradox" with "globalization increased consumption of cheap goods," which is a completely different phenomenon.

**How bad is this?** Severe. At least 4 of the 12 proposed domains (agriculture, HVAC, refrigeration, textiles) have ambiguous resource definitions that change the story entirely.

**Is it fatal?** Not across the board, but it kills a one-metric-fits-all approach.

**Proposed fix:** For each domain, commit to a single, specific resource-efficiency pair *before* running the numbers. State it explicitly in the data:

| Domain | Efficiency metric | Resource measured | Why this pair |
|--------|------------------|-------------------|---------------|
| Cars | Fleet avg MPG | Gallons of gasoline per capita | Direct, unambiguous |
| Lighting | Lumens per watt | kWh for lighting per capita | Clean since ~2000 |
| Computing | FLOPS per watt | Total computing electricity | Shows the paradox |
| Agriculture | Crop calories per acre | Total cropland acres | Land is the cleanest resource |
| Air travel | Fuel per passenger-mile | Total jet fuel per capita | Direct, unambiguous |
| HVAC | BTU delivered per kWh | HVAC energy per sq ft | Controls for house size |
| Water | Gallons used per fixture-cycle | Public supply withdrawals per capita | USGS data is good |
| Communication | Cost per GB transmitted | Total data per capita | Shows the paradox |
| Steel | Energy per ton | Total steel consumption per capita | Clean |
| Textiles | (drop from list) | — | Not a true efficiency story |
| Freight | Fuel per ton-mile | Total ton-miles per capita | Clean |
| Refrigeration | kWh per cubic foot | Total refrigeration kWh per household | Success story |

Note textiles dropped. It's a globalization story, not an efficiency story. Replace with something cleaner — perhaps **paper** (less paper per unit of information stored/communicated → but total paper only recently peaked) or **semiconductor fabrication** (transistors per mm^2 vs. total fab energy).

**Verdict: Real problem. Fixable by committing to specific resource-efficiency pairs per domain. Drop textiles.**

---

## Attack 4: Regulation Kills the "Natural" Jevons Narrative

Several of the cleanest results aren't about Jevons vs. market forces — they're about regulation overriding behavior:

- **Water**: The 1992 Energy Policy Act mandated low-flow toilets (1.6 GPF vs. 3.5+ GPF) and showerheads (2.5 GPM max). Per-capita public water supply withdrawals fell ~20% from 1985-2015. Is that "Jevons was defeated"? No — the government literally made it illegal to use the old fixtures. Nobody takes shorter showers because the shower is more efficient; the showerhead just uses less water per minute.
- **Refrigeration**: DOE appliance efficiency standards (first enacted 1987, tightened in 1993, 2001, 2014) forced manufacturers to produce dramatically more efficient fridges. Consumers didn't choose efficient fridges in a free market — the inefficient ones were banned.
- **Cars**: CAFE standards set the efficiency floor. Without them, the industry would have poured all efficiency gains into horsepower and size (which they partially did anyway via the SUV loophole).
- **Lighting**: EISA 2007 effectively banned incandescent bulbs (phased in 2012-2014). The LED transition wasn't purely market-driven.

**How bad is this?** It's a nuance problem, not a data problem. The numbers are still correct. But the narrative shifts: domains with low rebound aren't "domains where Jevons failed" — they're "domains where regulation prevented Jevons." That's a different and arguably *more* interesting story.

**Is it fatal?** No — it enriches the graph rather than undermining it. The bar argument becomes: "Jevons always wins unless the government steps in. Look — the only domains where efficiency gains stuck are the ones with hard regulatory caps."

**Proposed fix:** Add a binary annotation per domain: "regulated" vs. "unregulated" (or a spectrum). The graph becomes more powerful: it's not just "how much rebound per domain" but "does regulation change the outcome?" This is a genuinely useful policy insight.

**Verdict: Not a flaw. It's a feature. Annotate domains by regulatory intervention level.**

---

## Attack 5: The Time Window Problem Is Worse Than Pass 1 Acknowledged

Pass 1 proposed: "Start each domain's clock at the beginning of the modern efficiency improvement era." This is better than arbitrary, but it's still subjective and creates a new problem: **domains with different window lengths aren't comparable.**

Consider:
- Cars: 1975-2022 (47 years). Income roughly doubled in that period. Suburbanization continued. Interstate system matured.
- Lighting (LED era): 2008-2022 (14 years). Income growth was modest. Lighting infrastructure was already mature.
- Agriculture: 1950-2022 (72 years). Entire economic structure of the country changed. Population tripled.

Comparing the rebound fraction across these wildly different time horizons is comparing apples to asteroids. The 72-year agricultural window absorbs Green Revolution, globalization, dietary shifts, biofuel mandates, and food waste culture. The 14-year LED window captures one technology transition during an economic period of low growth.

**Deeper problem:** In many domains, efficiency improvements are continuous, not discrete. There's no clean "start of the modern efficiency era." HVAC efficiency has been improving steadily since the 1970s. Crop yields have been rising since the 1940s. Where do you draw the line?

**How bad is this?** Moderate-to-serious for cross-domain comparison. Any single domain's time series is fine — the problem is comparing the summary number across domains with different windows.

**Proposed fix (stronger than Pass 1):** Use a uniform window for the cross-domain comparison: **1990-2020**. Yes, this misses the CAFE revolution (1975-1990) and the Green Revolution (1950-1970). But:
- 30 years is long enough to show meaningful trends.
- Nearly all domains have good data for this window.
- Economic conditions are roughly comparable across the period.
- It sidesteps the "when did efficiency start?" question.

For domains where the interesting story is longer (agriculture, lighting over the full century), include that as a supplemental time series with its own axis. But the primary cross-domain metric should use a uniform window.

**Verdict: Real problem. Propose uniform 1990-2020 window for primary comparison, domain-specific windows for supplemental deep-dives.**

---

## Attack 6: Quality Substitution Masquerading as Rebound

A 2022 car gets 25 MPG. A 1975 car got 13 MPG. But the 2022 car weighs 4,000 lbs (vs. 3,100), has 250 HP (vs. 100), has AC running constantly, has a crash structure that adds hundreds of pounds, and carries entertainment, navigation, and safety electronics that draw power. If the 2022 car were the same size and weight as the 1975 car, it would get ~40+ MPG.

So the real efficiency gain was ~3x, not ~2x. But half of it was "spent" on making the vehicle bigger, safer, more comfortable. Is this Jevons rebound? The driver isn't driving more miles — they're driving a better vehicle. The efficiency gain was captured, just not as fuel savings — it was converted into quality.

This applies broadly:
- **Homes**: Bigger, better-insulated homes with more windows and higher ceilings. Efficiency gains went into square footage, not energy savings.
- **Computing**: More efficient chips went into thinner laptops with longer battery life, not into lower total electricity. The quality improvement (portability, battery life) is the "rebound."
- **Agriculture**: Higher yield per acre went into feeding livestock (converting plant calories to meat calories at ~10:1 loss) — a quality improvement in diet, not a land savings.

**How bad is this?** It's conceptually awkward. If someone buys a car that's twice as efficient but also twice as heavy, and their fuel consumption stays flat, the rebound fraction is 100%. But the consumer got *something* for it — safety, comfort, capability. Calling that "Jevons ate the gains" feels misleading. The gains weren't eaten — they were spent on something the consumer valued.

**Is it fatal?** No. This is actually an important part of the story. Efficiency gains get consumed through three channels: (1) more usage, (2) quality substitution, (3) genuine savings. Our metric lumps (1) and (2) together. Separating them perfectly would require a hedonic adjustment model, which is PhD-level econometrics, not a bar graph.

**Proposed fix:** Acknowledge it in the graph's annotation or writeup. For the 2-3 domains where quality substitution is most important (cars, homes, computing), note it explicitly. "Half of the fuel efficiency gain went into making vehicles larger and more powerful rather than reducing fuel consumption."

**Verdict: Real nuance. Not fixable in the metric itself. Handle with annotation.**

---

## Attack 7: Per-Capita Denominator Breaks for Shared Infrastructure

Some resources are consumed at a population level, not a per-capita level. Per-capita is the right denominator for individual consumption (gallons of gas per person, kWh per person). But it's misleading for infrastructure:

- **Street lighting**: Per-capita lumens for public lighting are driven by road network size and policy, not individual behavior. More roads → more lights, regardless of efficiency.
- **Data centers**: Per-capita computing energy includes cloud infrastructure that serves global users, not just US residents. As US data centers serve more international traffic, "per-capita" computing energy rises even if US residents' behavior is flat.
- **Freight**: Per-capita ton-miles include goods shipped for export. US freight increased partly because the US became a larger exporter, not because each American consumed more shipped goods.

**How bad is this?** Moderate. It adds noise to specific domains but doesn't break the overall approach.

**Proposed fix:** For infrastructure-heavy domains (computing, freight), use total US figures rather than per-capita, and note the population growth contribution separately. Or, better: use per-capita for direct consumption domains (cars, water, home energy) and per-GDP for infrastructure/economic domains (freight, computing, steel). Per-GDP measures resource intensity of economic activity, which is the more natural framing for those domains.

**Verdict: Moderate issue. Propose per-capita for consumer domains, per-GDP for industrial/infrastructure domains.**

---

## Refined Metric Proposal

Based on all attacks above, here's the surviving metric:

### Primary metric: Efficiency Dividend Captured (EDC)

```
EDC = (actual resource reduction) / (theoretical resource reduction at constant behavior)
```

- EDC = 100% → all efficiency gains showed up as real savings
- EDC = 0% → consumption flat despite efficiency (gains fully consumed by growth + rebound + quality)
- EDC < 0% → consumption grew despite efficiency gains

### Requirements per domain:

1. **Name a specific efficiency-resource pair** (not ambiguous)
2. **Use a uniform primary window: 1990-2020** (supplemental deep-dives can use domain-specific windows)
3. **Per-capita for consumer domains, per-GDP for infrastructure domains**
4. **Annotate each domain with regulatory intensity** (strong/moderate/none)
5. **Note quality substitution** where it's a major factor (cars, homes, computing)

### Revised domain list (11 domains):

1. **Automotive fuel** — Fleet MPG vs. gasoline per capita (consumer, moderate regulation)
2. **Lighting** — Lumens/watt vs. lighting kWh per capita (consumer, strong regulation)
3. **Computing** — FLOPS/watt vs. data center electricity per GDP (infrastructure, no regulation)
4. **Agriculture (land)** — Crop cal/acre vs. cropland acres per capita (infrastructure, moderate regulation)
5. **Air travel** — Fuel/passenger-mile vs. jet fuel per capita (consumer, no regulation on demand)
6. **Home HVAC** — SEER/R-value vs. HVAC energy per square foot (consumer, moderate regulation)
7. **Residential water** — Fixture efficiency vs. public supply withdrawals per capita (consumer, strong regulation)
8. **Communication** — Cost/GB vs. network energy per capita (infrastructure, no regulation)
9. **Steel** — Energy/ton vs. steel consumption per capita (infrastructure, no regulation)
10. **Freight** — Fuel/ton-mile vs. freight energy per GDP (infrastructure, moderate regulation)
11. **Refrigeration** — kWh/cu ft vs. total refrigeration kWh per household (consumer, strong regulation)

Textiles dropped (globalization, not efficiency). Added no replacement — 11 is enough and avoids forcing a weak domain.

---

## Potential Spin-Off Ideas

(Not pursuing, just flagging.)

1. **"Regulation vs. Market: Where Does Conservation Actually Come From?"** — A graph specifically about which resource reductions were regulation-driven vs. market-driven. This efficiency paradox project touches it, but it's a different question.
2. **"The Quality Substitution Graph"** — For cars specifically: graph where efficiency gains *went*. What fraction became fuel savings, what fraction became vehicle weight, what fraction became horsepower, what fraction became electronics/safety? A Sankey diagram of "where did 50 years of engine efficiency go?"
3. **"Per-capita vs. per-GDP resource intensity"** — Which framing matters more for climate? A country can reduce per-GDP intensity while increasing per-capita consumption (economic growth outpaces efficiency). This is basically the decoupling debate.

---

## Summary Verdict

**The metric survives stress-testing, but with significant refinements:**

- Rename from "Rebound Fraction" to "Efficiency Dividend Captured" — avoids overclaiming a causal Jevons story when we're actually measuring the net outcome of multiple forces.
- Lock in specific efficiency-resource pairs per domain — the "what's the resource?" problem kills ambiguous domains.
- Use a uniform 1990-2020 window for cross-domain comparison — different windows make the bar chart meaningless.
- Split denominator by domain type — per-capita for consumer, per-GDP for infrastructure.
- Annotate regulatory intensity — this turns a potential criticism ("that's regulation, not Jevons") into a feature of the graph.
- Drop textiles — it's not an efficiency story, it's a globalization story.
- Accept quality substitution as a known limitation — note it but don't try to adjust for it.

**The project should advance to planning.** The metric is defined, edge cases have been mapped, scope boundaries are drawn. We know what one data point looks like for each domain and where to get the data. The remaining question — whether the variation across domains is interesting enough — will be answered by the research phase, not more exploration.
