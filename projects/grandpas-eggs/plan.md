# Plan: Grandpa's Eggs — The Hidden Quality Tax

## The metric

**Minutes of median work to buy X** — for each commodity, two lines:

- **Line A (cheapest):** The cheapest mainstream retail version of the product in a given year. This is NOT what CPI tracks (CPI tracks a weighted basket). This is the race-to-the-bottom product.
- **Line B (quality-equivalent):** The modern product that most closely matches what the default/only product was in ~1955. For eggs, that's pasture-raised. For a suit, that's US-made full-canvas wool.

The gap between Line A and Line B is the quality tax — the hidden inflation no price index captures.

A third dotted **productivity benchmark line** shows where the cost *would be* if productivity gains had been shared proportionally. Calculated as: (1955 labor-minutes) / (cumulative productivity growth since 1955). This is an annotation, not the primary metric.

## Commodity list (10 items)

Refined from the explore phase. Dropped housing (too entangled — structure/land/zoning/financing) and medical stitches (1955-equivalent product is legally unavailable). Kept two "progress wins" cases (TV, bicycle) for honesty.

| # | Commodity | Category | Expected story |
|---|-----------|----------|----------------|
| 1 | Eggs (dozen) | Food | Modest quality gap, clear degradation |
| 2 | Milk (gallon) | Food | Similar to eggs |
| 3 | Bread (loaf) | Food | Industrialization story |
| 4 | Ground beef (pound) | Food | Clear quality tiers |
| 5 | Men's suit | Durables | Large gap — durability collapsed |
| 6 | Haircut (men's basic) | Services | Baumol's poster child — no quality gap, pure labor cost |
| 7 | Movie ticket | Services | Modest gap, good contrast case |
| 8 | Year of state college | Services | Massive gap, widening |
| 9 | Television | Durables | Progress wins — product genuinely improved |
| 10 | Bicycle | Durables | Progress wins — modern cheap bike is better |

## Data format for results

Each result file is markdown. There are three ticket types, each with its own format.

### Type 1: Foundation data (tickets 001-002)

Time series of a single economic indicator.

```markdown
# [Indicator Name]

## Summary

[1-2 sentences: source, coverage, any caveats]

## Data

| Year | Value | Unit | Source |
|------|-------|------|--------|
| 1950 | ... | ... | ... |
| 1955 | ... | ... | ... |
...

Target: every 5 years from 1950-2025 at minimum. Annual data preferred if available.
Interpolation is acceptable for years between hard data points — mark interpolated values.

## Methodology

[What series was used, any splicing of older/newer series, how gaps were handled]

## Sources

- [Full citations with URLs]
```

### Type 2: Quality rubric (one per commodity, tickets 003-028 odd pattern)

Defines what "quality-equivalent" means for this commodity. This is the most important ticket type — it constrains all downstream price research.

```markdown
# [Commodity] — Quality Rubric

## The 1955 baseline product

[What was the default/standard product? What did a typical consumer actually buy? Be specific — brand examples, production methods, materials, specifications.]

## Quality attributes

| Attribute | 1955 Baseline | 2025 Cheapest | 2025 Quality-Equiv | Direction |
|-----------|---------------|---------------|--------------------|-----------| 
| [attr 1] | [description] | [description] | [description] | improved / degraded / same |
| [attr 2] | ... | ... | ... | ... |
...

Score 4-6 measurable attributes per commodity. Include dimensions where the modern cheap version is SUPERIOR, not just where it's worse.

## Quality-equivalent product definition

[What specific modern product matches the 1955 baseline? Brand/tier examples. Why this product and not a cheaper or more expensive one?]

## Divergence timeline

[When did the single-tier market split into quality tiers? What caused the split? Before this date, Line A and Line B are the same.]

## Overall assessment

One of:
- **Quality degraded:** The cheap version is worse on a majority of attributes. The quality gap is real.
- **Progress wins:** The cheap version is better on a majority of attributes. The modern product genuinely improved.
- **Mixed:** Some attributes improved, others degraded. The gap is real but the story is nuanced.
- **No change:** The product is essentially the same (e.g., haircut). Baumol's cost disease case.

## Sources

- [Full citations]
```

### Type 3: Price data (cheapest or quality-equivalent)

```markdown
# [Commodity] — [Cheapest / Quality-Equivalent] Prices

## Summary

[2-3 sentences: what's the price trajectory? Any spikes, regime changes, structural breaks?]

## Data

| Year | Price (nominal $) | Unit | Product Description | Source | Confidence | Notes |
|------|-------------------|------|---------------------|--------|------------|-------|
| 1950 | ... | ... | ... | ... | high/med/low | ... |
| 1955 | ... | ... | ... | ... | ... | ... |
...

Target intervals: every 5 years from 1950-2025. Annual data preferred for BLS/USDA series.
For quality-equivalent prices, data may only exist from the divergence year onward — that's expected.

## Methodology

[What price series or proxy was used? How was "cheapest mainstream retail" or "quality-equivalent" operationalized for this commodity? Any splicing of data sources across eras?]

## Known gaps

[Which years or periods have no reliable data? What was interpolated vs. measured?]

## Sources

- [Full citations with URLs]
```

## Methodology guidance

**Consistency over accuracy.** A rough but 70-year-consistent proxy beats a precise 15-year series. Movement over time is what matters — any single data point can be off by 20% and the graph still tells the truth.

**Different commodities use different proxies.** Don't force BLS series onto suits or colleges. Each commodity gets whatever data source gives the longest, most internally consistent time series. State what you chose and why.

**Nominal dollars throughout.** The labor-minutes calculation divides two nominal amounts from the same year, so inflation cancels out. Don't CPI-adjust the prices.

**Use 3-5 year rolling averages for volatile items.** Egg prices spike during avian flu outbreaks; beef prices swing with cattle cycles. Note the raw values but also compute a smoothed value for graphing. The research agent should collect raw annual data; the graph phase will handle smoothing.

**Before the tiers diverged, Line A = Line B.** For food items, quality tiers largely didn't exist before the 1980s-1990s. Pre-divergence, report a single price and note that it applies to both lines. The quality-equivalent price ticket should focus on the post-divergence era.

**Mark structural breaks.** College tuition had regime changes (GI Bill, state funding cuts, federal loan expansion). Egg prices spike during avian flu crises. Note these as annotations — don't smooth them away.

## Data source hierarchy (per commodity type)

### Food items (eggs, milk, bread, beef)
1. **BLS Average Prices (APU series)** — monthly retail prices, many items back to 1980, some to 1950s
2. **USDA Economic Research Service** — historical food prices, sometimes further back than BLS
3. **Historical Statistical Abstracts** — USDA yearbook data going back to 1900s
4. **Quality-equivalent tier:** USDA Agricultural Marketing Service organic/specialty price premiums, Whole Foods/natural grocery pricing, industry reports

### Durable goods (suit, TV, bicycle)
1. **Sears/Montgomery Ward/JCPenney catalogs** (digitized) — best source for historical durable goods with product descriptions
2. **BLS CPI component indices** — for price trends (not absolute prices)
3. **Industry associations and trade publications**
4. **Quality-equivalent tier:** Current retailer pricing for specified equivalent products

### Services (haircut, movie, college)
1. **BLS CPI component indices and average prices** where available
2. **College Board Trends in College Pricing** (tuition, back to 1963)
3. **NCES Digest of Education Statistics** (deeper college data)
4. **NATO/MPAA/industry reports** for movie ticket prices
5. **Historical newspaper ads and trade publications** for haircut prices

### Foundation data (wages, productivity)
1. **BLS Current Employment Statistics** — median hourly earnings, production/nonsupervisory workers
2. **BLS Current Population Survey** — median usual weekly earnings (from 1979)
3. **Census Bureau Historical Income Tables** — median income (back to 1947, requires hours-worked conversion)
4. **BLS Major Sector Productivity and Costs** — output per hour, nonfarm business sector (from 1947)

## Known data gaps

- **Pre-1964 median hourly earnings:** BLS publishes clean median from 1964+. Before that, must reconstruct from Census median income + average hours worked. This is an estimate, not a measurement. The foundation ticket should be transparent about the splice.
- **Quality-equivalent food prices before ~1995:** Organic/pasture-raised/grass-fed products didn't exist as retail categories before the 1990s. Before divergence, report a single price.
- **Suit prices 1970-2000:** The Sears catalog era ended ~1993. Post-catalog, suit pricing relies on BLS CPI apparel indices and retail surveys. There may be a gap in specific product-level data.
- **Bicycle prices before 1970:** Very limited retail price data. May need to rely on catalog snapshots at ~10-year intervals.
- **Movie ticket prices before 1960:** Spotty. NATO (National Association of Theatre Owners) has data back to ~1948 but it's average admission, not always broken out.

## Ticket structure

30 tickets total:
- **001-002:** Foundation data (wages, productivity)
- **003-005:** Eggs (rubric, cheapest, quality-equivalent)
- **006-008:** Milk
- **009-011:** Bread
- **012-014:** Beef
- **015-017:** Men's suit
- **018-019:** Haircut (2 tickets — rubric and prices combined for quality-equiv since there's minimal gap)
- **020-021:** Movie ticket (same — rubric and standard + premium combined)
- **022-025:** College (4 tickets — rubric, tuition history, quality metrics over time, quality-equivalent pricing)
- **026-028:** Television (rubric, cheapest, quality-equivalent + content cost annotation)
- **029-030:** Bicycle (rubric, prices for both tiers combined)

Tickets are ordered so each commodity's rubric is completed before its price tickets. Foundation data comes first.

## What the graph phase will build

**Layout:** Small multiples grid — 10 mini-charts (2 rows of 5, or similar), one per commodity. Grouped by category with visual separation.

**Each mini-chart shows:**
- X-axis: Year (1950-2025, clipped to data availability)
- Y-axis: Minutes of median work
- Line A (cool color): Cheapest available version
- Line B (warm color): Quality-equivalent version
- Dotted line: Productivity benchmark (where cost "should be" if productivity gains were shared)
- Badge: "Progress wins" / "Quality tax" / "Baumol's" classification from the rubric

**Interactive:** Hover/click a commodity to expand it with full data table and methodology notes.

**One featured commodity (eggs)** gets an expanded treatment showing ALL modern tiers (conventional → cage-free → free-range → pasture-raised → organic → pasture-raised organic) to visualize the tier proliferation that IS the quality-tax story.

**Annotations:** Structural breaks (avian flu spikes, GI Bill, state funding cuts) as labeled markers on the X-axis of relevant charts.
