# Angle 01 — Grounding the Question

## Two concrete examples that make this tangible

### Example 1: A dozen eggs

In 1955, a dozen eggs cost about **$0.61** (USDA retail average). There was no meaningful quality tier — essentially all commercial eggs came from small-to-medium farms where hens had outdoor access, ate bugs and scraps, and weren't debeaked or dosed with prophylactic antibiotics. This is roughly what Whole Foods now labels "pasture-raised" and charges a premium for.

Median hourly earnings in 1955 were approximately **$1.65** (BLS production/nonsupervisory workers, private sector).

**Labor cost of a dozen 1955 eggs: $0.61 / $1.65 = 0.37 hours = 22 minutes of work.**

Now 2025. The cheapest dozen eggs (conventional battery-cage, beak-trimmed hens, antibiotic-managed) runs about **$3.50** in a stable market (it spiked above $7 during the 2022-2023 avian flu crisis, but let's use a calmer baseline). Median hourly earnings are approximately **$30.00**.

**Labor cost of a dozen cheap 2025 eggs: $3.50 / $30 = 0.12 hours = 7 minutes of work.**

That's the number CPI captures. Eggs got way cheaper — 22 minutes down to 7. Progress!

But grandpa's egg — the free-range, no-antibiotics, small-farm egg — is now the premium product. Pasture-raised organic eggs from a comparable production system cost **$7.50-9.00/dozen** at retail.

**Labor cost of grandpa's egg in 2025: ~$8.00 / $30 = 0.27 hours = 16 minutes of work.**

Still cheaper than 1955, but the gap shrinks dramatically. The CPI says eggs got **68% cheaper** in labor-hours. The quality-equivalent comparison says they got **27% cheaper**. That's a 41-percentage-point gap that no inflation metric captures.

And the productivity angle makes it worse. A 2025 worker produces roughly **3x more output per hour** than a 1955 worker (BLS nonfarm business sector labor productivity: index ~38 in 1955 vs ~115 in 2025, base 2012=100). If productivity gains had been shared proportionally, a 2025 worker should be able to buy 3x as much with an hour of work. Instead, quality-equivalent eggs cost 0.73x what they used to. Relative to what productivity growth promised, grandpa's eggs cost **2.2x more** than they should (0.27 hours / (0.37 hours / 3.0) = 2.2).

### Example 2: A semester of state college

In 1960 (earliest reliable data), average annual tuition and fees at a 4-year public university were about **$175** (some state flagship universities charged $50-100; a few were essentially free). Median hourly earnings were approximately **$2.05**.

**Labor cost of one year of state college, 1960: $175 / $2.05 = 85 hours = just over 2 weeks of full-time work.**

In 2025, average annual in-state tuition and required fees at a public 4-year institution are approximately **$11,600** (College Board, Trends in College Pricing 2024).

**Labor cost of one year of state college, 2025: $11,600 / $30 = 387 hours = nearly 10 weeks of full-time work.**

That's a **4.5x increase** in labor-hours. College is unambiguously, dramatically more expensive.

But wait — the quality-equivalent question hits even harder here. In 1960, the default experience was: small classes taught by tenured or tenure-track professors, minimal administrative overhead, no $200 "course material access codes," no mandatory meal plans at $6,000/year. The closest modern equivalent to that experience is a selective private university or an honors program at a flagship — running **$55,000-65,000/year**.

**Labor cost of the 1960-quality college experience in 2025: ~$58,000 / $30 = 1,933 hours = 48 weeks of full-time work.**

From 2 weeks to 48 weeks. That's not inflation. That's a different universe.

And again with productivity: if a 2025 worker produces 2.5x more per hour than a 1960 worker (rough factor for 1960-2025), the productivity-adjusted cost of grandpa's college experience is *roughly* 48 weeks x 2.5 = an impossible number. The "quality-equivalent, productivity-adjusted" cost of state college has increased by roughly **60x** since 1960.

---

## Proposed metric

### Primary graph: "Minutes of median work to buy X"

**X-axis:** Year (1950-2025, or whatever the data supports per commodity)
**Y-axis:** Minutes of median hourly earnings needed to purchase one unit of the commodity

Two lines per commodity:
- **Line A (blue/cool):** Cheapest available version (approximately what CPI tracks)
- **Line B (amber/warm):** Quality-equivalent version (the product that matches grandpa's default)

The **gap between the lines** is the visual payoff — it's the quality tax, the hidden inflation. For some commodities (eggs) the gap will be modest. For others (college, housing, medical care) it will be enormous. For a few (TVs, maybe clothing basics) Line B may actually be *below* Line A from 1955, showing genuine improvement. Those counter-examples are what make the graph credible.

### Secondary annotation: Productivity benchmark line

A third, dotted line per commodity showing where the cost *would be* if productivity gains had been evenly distributed to consumers for that good. Calculated as: (1955 labor-hours) / (cumulative productivity growth since 1955). This line always slopes downward and represents the "promise of progress" — the things-should-be-getting-cheaper trajectory.

### Unit choice: raw labor-hours vs. productivity-adjusted

I recommend **raw labor-hours (minutes of work) as the primary metric** because:
1. It's immediately intuitive — everyone understands "minutes of work to buy X"
2. It doesn't require explaining the productivity adjustment (which is confusing to most people)
3. The productivity benchmark can be a dotted annotation line rather than transforming the whole Y-axis

The productivity-adjusted version could be a toggle or secondary view, but leading with raw labor-hours is more at-the-drop-of-a-hat friendly.

### Graph layout

Given ~12 commodities with 2-3 lines each, a single cluttered chart won't work. I'd recommend:
- **Small multiples** — a grid of 12 mini-charts, one per commodity, all sharing the same Y-axis scale (minutes) and X-axis range. Each shows Line A, Line B, and the productivity benchmark.
- Maybe group by category (food, durables, services, shelter) with visual separation.
- Interactive: hover a commodity to expand it and see the data points.

---

## Data sources

### Tier 1: Direct and longitudinal

1. **BLS Consumer Price Index — Average Prices** (series IDs: APU0000xxxxx)
   - Individual item prices (eggs, milk, bread, ground beef, electricity, gasoline) monthly from 1980, some series back to 1950s.
   - This is the best source for Line A (cheapest version) for food items.
   - Available via BLS Data API or bulk download.

2. **BLS Current Employment Statistics / Usual Weekly Earnings**
   - Median hourly earnings, production/nonsupervisory workers, goes back to 1964 in clean form.
   - Pre-1964: can reconstruct from Census median income data and average hours worked.
   - The denominator for every calculation.

3. **BLS Labor Productivity (Major Sector Productivity and Costs)**
   - Output per hour, nonfarm business sector, quarterly from 1947.
   - Series ID: PRS85006092 (or similar).
   - Needed for the productivity benchmark line.

4. **USDA Economic Research Service — Food Prices and Expenditures**
   - Historical retail food prices going back further than BLS average prices for some items.
   - Good for historical egg/milk/bread/beef data.

5. **College Board — Trends in College Pricing and Student Aid**
   - Annual publication with tuition/fee data back to 1963.
   - Breaks out by public 2-year, public 4-year, private nonprofit 4-year.

### Tier 2: For quality-equivalent (Line B) pricing

6. **Historical catalogs and advertisements**
   - Sears catalogs (digitized through ~2000), Montgomery Ward, JCPenney — the best source for historical prices of durable goods (bicycles, suits, TVs, appliances) with *descriptions* that let you assess quality.
   - Key for establishing "what was the default product in 1955?"

7. **USDA Organic/specialty price premiums**
   - USDA Agricultural Marketing Service publishes organic price premiums for major food categories.
   - Useful for calculating Line B prices for food items (pasture-raised eggs, grass-fed beef, etc.)

8. **Bureau of Economic Analysis — Personal Consumption Expenditures**
   - PCE price indices include quality adjustments (hedonic adjustments) — but importantly, these adjustments work *against* our thesis. BEA considers a faster computer to be "cheaper" even at the same price. Understanding their methodology helps identify where CPI/PCE diverge from lived experience.

### Tier 3: Supplementary

9. **Census Bureau — Historical Income Tables (Table P-8)**
   - Median income by sex and race, back to 1947. Allows percentile analysis if desired.

10. **National Center for Education Statistics — Digest of Education Statistics**
    - Deeper college data including instructional spending per student, student-faculty ratios, percentage of courses taught by adjuncts — useful for arguing quality degradation.

---

## What I'm unsure about — where the framing feels wobbly

### 1. The productivity adjustment is philosophically loaded

The question.md proposes "productivity-adjusted labor-hours" as the primary unit. But this builds in an assumption: that productivity gains *should* translate into cheaper goods. There are legitimate reasons they don't — workers captured gains as higher wages and spent them on other things (healthcare, education, bigger houses), or gains went to entirely new product categories (smartphones, streaming). The productivity benchmark is a compelling annotation, but making it the primary Y-axis would make the graph feel like it's arguing a political point rather than presenting data.

**Recommendation:** Use raw labor-hours as the primary metric. Add the productivity benchmark as a visual annotation. This keeps the graph descriptive ("here's what things cost in work-hours") rather than prescriptive ("here's what things *should* cost").

### 2. Defining "quality-equivalent" is the crux — and it's subjective

For eggs, it's reasonably objective: free-range, no antibiotics, heritage breed. For college, it's much harder — was a 1955 state college education really comparable to a 2025 private university, or was it worse in ways we don't romanticize (less diversity of courses, no research opportunities, limited lab equipment)?

For durable goods, it's even trickier. A 1955 television was a piece of furniture with a 15-inch screen and 3 channels. What's the "quality-equivalent" in 2025? A high-end smart TV is objectively better in every measurable way. A 1955 bicycle (steel frame, no gears) is in some ways *inferior* to a modern $300 bike.

Each commodity needs an explicit, defensible definition of what "quality-equivalent" means for that item, and some items may need a third framing: "the default product genuinely improved, so there is no quality gap — just a better product at a different price."

**Recommendation:** For each commodity, the research phase should produce a quality rubric with specific, measurable attributes (not vibes). Example for eggs: shell thickness, yolk color (carotenoid content), omega-3 content, stocking density of hens, antibiotic use. For items where the modern version is genuinely superior (TVs, cars), flag that explicitly and show it as a "progress wins" data point.

### 3. Median wage data before 1964 is patchy

BLS publishes clean median hourly earnings from 1964 onward (Current Population Survey). Before that, we have:
- Census median income (decennial, with some intercensal estimates)
- BLS average hourly earnings for production workers (monthly, back to 1939) — but average =/= median
- Can estimate median from average using income distribution data, but it adds uncertainty

For the 1950-1963 period, the denominator (median hourly wage) will be an estimate rather than a direct measurement. This needs to be transparent in the methodology.

### 4. The "things that became unavailable" sidebar is powerful but ungraphable

The question.md mentions "things that used to be normal and are now effectively unavailable" — doctor house calls, single-income homeownership, backyard chickens in a suburb. These went from near-zero marginal cost to illegal or effectively infinite. You can't put infinity on a Y-axis. These need a different visual treatment — maybe annotations, callout boxes, or a separate "extinct affordabilities" section. But they're too good to leave out.

### 5. Does the gap ACTUALLY widen, or is it constant?

My napkin math suggests the gap varies hugely by category. For eggs, the quality gap is modest and the trajectory still trends cheaper. For college, the gap is enormous and widening. For a men's suit, the quality-equivalent cost barely changed while the cheap version plummeted. The graph might show that the "quality tax" story is really a "services vs. goods" story in disguise — Baumol's cost disease rather than a conspiracy of cheapening. That's a less provocative but more honest finding, and it would actually make the graph more interesting.

### 6. Regional variation could swamp the signal

Egg prices, housing costs, and college tuition vary enormously by region. The 2025 averages I used above are national, but the lived experience differs by 2-3x between, say, rural Alabama and San Francisco. The research phase should use national averages for consistency but could flag items where regional variance exceeds the quality gap.

---

## Napkin math summary table

| Commodity | ~1955 cost | ~1955 labor-min | 2025 cheap | 2025 cheap labor-min | 2025 equivalent | 2025 equiv labor-min | Gap |
|-----------|-----------|-----------------|-----------|---------------------|----------------|---------------------|-----|
| Dozen eggs | $0.61 | 22 min | $3.50 | 7 min | $8.00 | 16 min | 9 min |
| Gallon milk | $0.92 | 33 min | $3.80 | 8 min | $8.50 (raw/grass-fed) | 17 min | 9 min |
| Men's suit | $60 | 36 hrs | $125 | 4 hrs | $1,000 (US wool) | 33 hrs | 29 hrs |
| Year state college | $175 | 106 hrs | $11,600 | 387 hrs | $58,000 (1960-quality) | 1,933 hrs | 1,546 hrs |
| Haircut | $1.00 | 36 min | $20 | 40 min | $20 | 40 min | ~0 min |
| Movie ticket | $0.50 | 18 min | $11 | 22 min | $15 (premium) | 30 min | 8 min |

Notes:
- Haircut is interesting because it *didn't* get cheaper — classic Baumol's cost disease. And there's no quality gap because a haircut is a haircut.
- Movie ticket barely moved in labor-hours, and the "quality-equivalent" (reserved seating, decent screen) costs modestly more.
- The massive action is in services (college) and complex goods (suit, bike). Food items show a real but modest gap.
- This suggests the graph's most powerful story is the **divergence between categories**, not a universal cheapening narrative.

---

## Bottom line for next pass

The question is graphable and the data exists. The most honest framing is:

> "For basic goods (eggs, milk, bread), the cheap version got dramatically cheaper but the quality-equivalent version only got somewhat cheaper. For services (education, healthcare, haircuts), costs rose in labor-hours regardless of quality. For durable goods, the picture is mixed — some genuinely improved (TVs, cars), others degraded (clothing, furniture). The gap between 'cheapest available' and 'what grandpa actually bought' varies from negligible (haircuts) to astronomical (college)."

The next pass should stress-test the metric: try to break it with edge cases. Specifically:
- What about goods that didn't exist in 1955 (smartphones, internet)?
- What about goods where quality improved so much the comparison is absurd (medical imaging, air travel)?
- Is the productivity adjustment adding insight or just making a political argument?
- Can we cleanly separate Baumol's cost disease from genuine quality degradation?
