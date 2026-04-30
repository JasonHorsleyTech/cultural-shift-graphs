# Angle 02 — Stress-Testing the Metric

## Mission

Try to break the proposed metric ("minutes of median work to buy X, cheap version vs. quality-equivalent version"). Find edge cases where it fails. Determine what's a fatal flaw vs. a scope boundary. Propose a refined metric that survives.

---

## Attack 1: "Quality-equivalent" is a Choose-Your-Own-Adventure

This is the existential threat to the whole project.

The first pass defined quality-equivalent for eggs as "pasture-raised, heritage breed, no antibiotics." That's defensible — there are measurable physical differences (yolk color, omega-3 content, stocking density). But the college example exposes the problem: the first pass claimed a $58,000/year private university is the "quality-equivalent" of a 1960 state college. That's doing enormous argumentative work with zero rigor.

A 1960 state college had:
- Smaller classes, more tenured faculty (genuine advantage)
- No internet, no digital resources, no online journals (genuine disadvantage)
- Dramatically less course diversity and fewer majors
- Very limited research opportunities for undergrads
- Worse lab equipment by orders of magnitude
- Far less racial and gender diversity in the student body
- No career services infrastructure, no internship pipelines
- Lower completion rates

The first pass cherry-picked the ONE dimension where 1960 wins (faculty attention) and priced the modern equivalent of that one dimension at $58K. That's not a quality-equivalent comparison — it's nostalgia with a price tag. You could just as easily argue that a 2025 community college with small classes and online resources is the quality-equivalent, at ~$4,000/year.

**Verdict:** Not a fatal flaw, but requires a hard constraint. Each commodity needs a **multi-attribute quality rubric** where EVERY attribute is scored, not just the ones that support the thesis. For commodities where some attributes improved and others degraded, the graph must show both stories — not just the degradation.

**Proposed fix:** For each commodity, define 4-6 measurable quality attributes. Score 1955 and 2025 on each attribute. If the modern cheap version is BETTER on 3 of 6 attributes, the "quality-equivalent" framing doesn't cleanly apply — and the graph should say that honestly. Reserve the quality-gap narrative for commodities where degradation is clear on a majority of attributes.

---

## Attack 2: The 1955 Baseline Is Romanticized

The first pass treats 1955 products as the gold standard. But:

- **1955 eggs** had higher salmonella rates. Refrigeration was less reliable. Eggs sat longer between farm and table. Shell quality was inconsistent. The romantic "grandpa's egg" killed more people.
- **1955 milk** was less consistently pasteurized. Bacterial counts were higher. Shelf life was days, not weeks. Raw milk advocates would call this a feature; public health data calls it a bug.
- **A 1955 men's suit** looked good but used techniques and fabrics that were standard then and bespoke now. However — it was often also heavier, less breathable, less colorfast, and required professional cleaning after every few wears.
- **A 1955 bicycle** was heavy steel, no gears (or 3-speed at best), poor brakes, no quick-release wheels, terrible tires by modern standards. A $300 2025 bike from a department store is genuinely better on almost every measurable dimension.

The quality-equivalent framing implicitly assumes the old version was better. For many commodities, it wasn't — it was just the only option. The absence of tiers doesn't mean the product was premium; it means the market hadn't segmented yet.

**Verdict:** Scope boundary. The fix is already hinted at in the question.md ("Don't assume the thesis is right") and angle-01 ("flag genuine improvement"). But the research phase MUST operationalize this — every commodity needs an honest assessment that includes dimensions where the modern cheap version is SUPERIOR, not just where it's worse.

---

## Attack 3: CPI Does Not Track "The Cheapest Available Version"

Angle-01 describes Line A as "approximately what CPI tracks" and equates it with the cheapest available product. This is wrong.

CPI tracks a **representative basket** based on actual consumer expenditure patterns. The CPI egg is not the cheapest egg — it's approximately what the median consumer buys. In 2025, that's somewhere between the cheapest battery-cage egg and the most expensive pasture-raised egg (the CPI "eggs" series includes all egg types weighted by purchase volume).

This matters because Line A is supposed to represent the race-to-the-bottom product. If it's actually the CPI basket (which includes some quality variation), the gap between Line A and Line B will be smaller than the first pass implies. Conversely, if Line A truly is the cheapest option, it's NOT what CPI tracks, and the claim that "CPI says eggs got 68% cheaper" is misattributed.

**Verdict:** Scope boundary, easy fix. Define Line A precisely as either:
- (a) The cheapest commercially available version at mainstream retail (not CPI), or
- (b) The CPI-tracked price (representative basket, not cheapest)

Option (a) makes the gap larger and the graph more dramatic. Option (b) is more defensible but less provocative. I'd recommend (a) with an honest label ("cheapest retail option") and stop claiming it's what CPI measures. Then the gap between CPI and Line B is a THIRD story — smaller but still real.

---

## Attack 4: The Median Worker Changed

The denominator is "median hourly earnings." But the median worker in 1955 and the median worker in 2025 are wildly different populations.

- **1955 median worker:** Overwhelmingly white, male, sole breadwinner, in manufacturing or blue-collar services. Women's labor force participation was ~34%.
- **2025 median worker:** 47% female, far more racially diverse, dual-income households are the norm, heavily service-sector.

When you say "a dozen eggs cost 22 minutes of median work in 1955," that 22 minutes was from a higher-earning, more homogeneous pool. The 2025 median is depressed (relative to the 1955 median) partly because the labor force expanded to include groups that had been excluded or underrepresented.

This doesn't invalidate the metric — it's actually noted in question.md. But it does mean the comparison isn't as clean as "same person, different era." It's more like "a representative person from each era's labor force." The graph should be transparent about this.

**Verdict:** Not a flaw — the metric is still meaningful. But add a footnote: "The median worker's demographic composition shifted significantly over this period. Using median-for-median compares representative workers, not identical ones."

---

## Attack 5: Housing Breaks Everything

The question.md lists "median rent or mortgage payment" as a commodity. This is the single most important commodity for the thesis AND the one most likely to produce garbage data.

Problems:
1. **Size changed.** Median new home: ~1,000 sq ft in 1955, ~2,400 sq ft in 2025. These aren't the same product.
2. **Quality changed.** 1955 homes: no AC, one bathroom, knob-and-tube wiring, asbestos insulation, lead paint. 2025 homes: central HVAC, 2-3 bathrooms, modern electrical, insulation, double-pane windows.
3. **You can't buy grandpa's house.** Zoning, building codes, and minimum lot sizes make it illegal to build a 1955-style 1,000 sq ft home in most jurisdictions. The quality-equivalent doesn't exist as a purchasable product — it's either a vintage home (whose price reflects land value, not construction) or an illegal building plan.
4. **Location matters more than the structure.** A 1955 home in what is now downtown Austin was cheap because Austin was a sleepy college town. The same land is now worth millions. This isn't "housing inflation" — it's land value appreciation driven by population growth and economic agglomeration.
5. **Mortgage terms changed.** 1955 mortgages were shorter (15-20 years), required larger down payments (20-30%), and had higher interest rates (~5-6%). The 30-year, 3-5% down mortgage made homes nominally more "affordable" while inflating prices.

**Verdict:** Near-fatal for housing as a commodity in this framework. The metric (minutes of work to buy X) requires that X be a comparable product across time periods. Housing isn't — it's an entangled bundle of structure, land, location, regulation, and financing.

**Proposed fix:** Either:
- (a) **Exclude housing** from the commodity grid and address it as a standalone callout/sidebar with a more nuanced treatment, or
- (b) **Normalize to price-per-square-foot** of median rent (not purchase), which at least controls for size. Rent dodges the mortgage-terms problem. But it still has the location problem.

I'd recommend (a). Housing deserves its own graph, not a line in a small-multiple grid. Keep the commodity grid clean.

---

## Attack 6: Medical Care Is Ungraphable at the Commodity Level

The question.md suggests "medical stitches" as a commodity. This fails the comparability test even harder than housing.

- A 1955 stitch: doctor visit, local anesthetic (maybe), silk sutures, no imaging, minimal documentation, total bill ~$5-15.
- A 2025 stitch: ER visit with triage, liability-driven imaging to rule out complications, synthetic sutures, electronic medical records, sterile disposable equipment, possible tetanus booster. Total bill: $500-2,000.

The price went up 50-100x. But the quality ALSO went up dramatically — infection rates plummeted, outcomes improved, the process is safer. And most of the price increase is structural (liability, administration, regulatory compliance, facility overhead), not quality-related.

Trying to find a "quality-equivalent of 1955 stitches" in 2025 is nonsensical. You can't get 1955-style stitches — no doctor would provide them because of malpractice liability. The product literally doesn't exist as a purchasable option.

**Verdict:** Fatal for stitches as a commodity. More broadly, most medical procedures fail the comparability test because:
1. The quality DID improve substantially (you can't call it degradation)
2. The cost increase is largely structural, not quality-related
3. The 1955-equivalent product is legally unavailable

**Proposed fix:** Drop "medical stitches." If medical care must be represented, use something with a cleaner comparison: a single-night hospital stay (room-and-board charges only, excluding procedures), or an annual insurance premium (which measures access cost rather than procedure cost). But honestly, medical care may belong in the "sidebar" category along with housing — too complex for the commodity grid.

---

## Attack 7: Durable Goods Have a Total-Cost-of-Ownership Problem

A 1955 television cost ~$200 (about $2,200 in 2025 dollars). A basic 55" 4K TV costs ~$250 in 2025. The modern TV is incomparably better by every technical measure.

But the first pass missed a critical dimension: **total cost of watching TV.**

- **1955:** Buy TV ($200). Plug it in. Receive free broadcast content over antenna. Total year-one cost: ~$200 + electricity.
- **2025:** Buy TV ($250). To watch anything, subscribe to: streaming services ($15-60/mo), internet ($50-80/mo), possibly cable ($50-100/mo). Total year-one cost: $250 + $1,000-3,000 in subscriptions.

The product IMPROVED but the total cost of the USE CASE (watching television in your living room) potentially INCREASED once you account for the subscription layer that now sits between you and the content.

This pattern repeats:
- **Bicycle:** Cheap bike is better, but if you want to ride safely you need a helmet ($30-60, not legally required in 1955), lights ($20-40, legally required in many jurisdictions), and a good lock ($50-100, because bike theft wasn't an industry in 1955).
- **Men's suit:** Cheaper to buy, but modern fast-fashion suits need replacing 3x as often. Cost-per-year-of-wear may be higher.

**Verdict:** Scope boundary. The fix is to define whether the metric measures **purchase price** or **total cost of the use case.** Purchase price is cleaner and more defensible (less subjective). But a few commodities deserve a footnote about the subscription/accessory layer.

**Proposed fix:** Use purchase price as the primary metric. For commodities where the total-cost-of-use-case diverges significantly from purchase price (TV, potentially software), add an annotation. Don't try to calculate total cost of ownership for every commodity — that's a different (and much harder) project.

---

## Attack 8: The Productivity Adjustment Is a Political Argument

The first pass already flagged this, but let me drive the point harder.

The productivity benchmark line (where prices "would be" if productivity gains were shared) encodes a specific political assumption: that workers deserve proportional gains from productivity increases. Reasonable people disagree about this. Some arguments:

- Productivity gains went to capital, not labor. (Leftist framing: this is exploitation.)
- Productivity gains went to NEW goods (smartphones, internet, streaming) that didn't exist before. Workers captured the gains as new consumption categories, not cheaper old categories.
- Productivity gains went to QUALITY improvements that hedonic adjustments account for.
- Productivity growth was concentrated in specific sectors (tech, manufacturing) and didn't propagate evenly.

The first pass's calculation for college — "48 weeks x 2.5 = impossible number" — is also mathematically garbled. If you're adjusting for productivity, you DIVIDE the current labor-hours by the productivity multiple, you don't multiply. The first pass appears to have multiplied 48 weeks by 2.5 to get "120 weeks" and called it impossible. But the correct calculation would be: if a 1960 worker needed 85 hours and produced 1x output, a 2025 worker producing 2.5x should need 85/2.5 = 34 hours to afford the same thing. The actual cost is 387 hours (cheap) or 1,933 hours (quality-equivalent). So the gap vs. the productivity promise is 387/34 = 11x for cheap and 1,933/34 = 57x for quality-equivalent. These are real numbers, not "impossible" — they're just staggering.

**Verdict:** The productivity benchmark is powerful as an annotation but dangerous as a primary metric. The first pass correctly recommended raw labor-hours as the primary Y-axis. I agree strongly. The productivity line should be dotted, optional, and clearly labeled as "one interpretation of what productivity growth could have meant for prices."

---

## Attack 9: Temporal Granularity and Volatility

Egg prices are wildly volatile. They spiked to $7+/dozen during the 2022-2023 avian flu crisis, then fell, then spiked again in 2025. Using any single year's price for eggs is misleading.

College tuition had discrete regime changes: the GI Bill (1944) → steady state funding growth (1960s-1970s) → state funding cuts and tuition explosion (1980s-present) → federal loan expansion supercharging price increases (2000s-present). A smooth line would miss these structural breaks.

**Verdict:** Scope boundary. Use 3-5 year rolling averages for volatile commodities (food especially). For commodities with structural breaks (college, housing), note the break points as annotations on the graph. The research phase should collect annual data and let the graphing phase decide on smoothing.

---

## Attack 10: The Tiering Itself Is the Story

In 1955, there was approximately one tier of eggs. Now there are six: conventional, cage-free, free-range, pasture-raised, organic, pasture-raised organic. In 1955, there was one tier of college: you went or you didn't. Now there's community college, online degrees, state university, flagship state, private, elite private.

The existence of the tier system IS the quality-tax story. The graph shouldn't just show two lines — it should show the proliferation of tiers. The gap between cheapest and quality-equivalent is actually the gap between the bottom and top of a spectrum that didn't used to exist.

**Verdict:** This is an insight, not a flaw. The graph could benefit from showing ALL available tiers (not just cheapest and quality-equivalent) for 1-2 showcase commodities (eggs are perfect for this). Small multiples show the two-line version; an expanded view for a featured commodity shows the full tier spectrum. This could be the most visually striking element of the whole project.

---

## Spin-Off Ideas (Note and Move On)

1. **Total cost of use cases over time** — "What does it cost to watch TV at home?" / "What does it cost to get from A to B?" Measures the ACTIVITY, not the PRODUCT. Different project, complementary.
2. **The Great Tiering** — When did product categories fragment into quality tiers? Is the proliferation of "good/better/best" a recent phenomenon or has it always existed? Could be a fascinating standalone graph.
3. **Baumol's cost disease visualized** — Services vs. goods cost trajectories, isolated from the quality question. Simpler, cleaner, well-established economics, but never graphed in an accessible way.

---

## Refined Metric That Survives

### Keep: "Minutes of median work to buy X"

The core metric is sound. Raw labor-minutes is intuitive, honest, and doesn't require philosophical buy-in.

### Tighten: Quality-equivalent definition

For each commodity, require a **multi-attribute rubric** before defining quality-equivalent:

| Attribute | 1955 | 2025 Cheap | 2025 Quality-Equiv | Direction |
|-----------|------|------------|--------------------|-----------| 
| Attribute 1 | score | score | score | improved/degraded/same |
| Attribute 2 | ... | ... | ... | ... |

The "quality-equivalent" is the modern product that most closely matches the 1955 attribute profile. If no such product exists (medical care), the commodity is excluded from the grid. If the modern cheap version is BETTER on a majority of attributes (bicycle, TV), it gets flagged as a "progress wins" case and both lines may converge or invert.

### Narrow: Commodity list

**Keep (clean comparisons):**
- Eggs (clear quality degradation, measurable attributes)
- Milk (similar to eggs, good data)
- Bread (industrialization story is clear)
- A cut of beef (good USDA data, clear quality tiers)
- Men's suit (Sears catalog data, clear durability story)
- Haircut (Baumol's poster child — no quality change, pure labor cost)
- Movie ticket (modest gap, good contrast case)
- Year of state college (massive gap, but needs HONEST quality rubric — not the $58K comparison)

**Rework:**
- Television (purchase price only, with subscription-layer footnote)
- Bicycle (likely a "progress wins" case — show that honestly)

**Drop from the commodity grid:**
- Medical stitches (fails comparability test — product literally unavailable)
- Housing/rent (too entangled — deserves standalone treatment or a sidebar)

### Clarify: Line A is NOT CPI

Line A = cheapest mainstream retail option. Period. Don't claim it's what CPI tracks. CPI is a weighted basket that's somewhere between Line A and Line B. If anything, noting where CPI falls between the two lines is itself an interesting story — it would show that CPI partially captures the quality shift but misses the extremes.

### Preserve: Productivity benchmark as annotation only

Dotted line, clearly labeled, optional. Not the primary metric. The graph works without it. It adds punch for people who want the political economy angle, but the core story (the gap between cheap and quality-equivalent in raw labor-minutes) stands on its own.

---

## Conclusion: Does the Metric Survive?

**Yes, with scope restrictions.** The metric is sound for commodities where:
1. A comparable product existed in both eras
2. Quality attributes can be measured (not vibed)
3. The quality-equivalent is purchasable today
4. The comparison isn't dominated by structural/regulatory changes (housing, medical)

That leaves ~8-10 commodities. The graph will be strongest if it includes 2-3 "progress wins" cases (TV, bicycle) alongside the degradation cases (eggs, suit, college). The honest version is more interesting than the polemical version.

The biggest risk isn't a broken metric — it's researcher bias in defining "quality-equivalent." The multi-attribute rubric is the guardrail. If the research phase skips it and goes with vibes, the whole graph is just an expensive confirmation bias machine.
