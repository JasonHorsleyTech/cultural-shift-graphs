# Plan: Water Usage of Everything

## The metric

**Blue water withdrawal and consumption in billions of gallons per day (Bgal/day)**, broken down by sector, with per-capita derivation using US population.

Two measurements per sector where possible:
- **Withdrawal:** Total water pulled from a source (river, lake, aquifer). Includes water that gets returned.
- **Consumption:** The subset that doesn't come back — evaporated, transpired through crops, or incorporated into products.

The gap between withdrawal and consumption is the recycling story — thermoelectric power withdraws 41% of all US water but consumes only 3%. Agriculture withdraws 37% but consumes 72% of what it takes. These ratios ARE the insight.

## Why not "water footprint"?

The popular "1,800 gallons per pound of beef" stat uses total water footprint, which includes:
- **Green water** (rain on pasture) — 95% of beef's footprint. Rain that falls whether cattle are there or not.
- **Grey water** (dilution volume for pollutants) — a pollution metric, not actual water used.

These inflate numbers by 5-10x and misrepresent competition for scarce freshwater. We use blue water withdrawal/consumption only. This is the honest metric.

## Data format for results

Each result file is markdown with structured tables. Three ticket types:

### Type 1: Time series data (tickets 001-002)

Historical data with consistent intervals.

```markdown
# [Title]

## Summary
[2-3 sentences: source, coverage, key trend]

## Data

| Year | [Columns vary by ticket] |
|------|--------------------------|
| ... | ... |

## Methodology
[What series was used, any splicing, how gaps were handled]

## Sources
- [Full citations with URLs]
```

### Type 2: Snapshot breakdown (tickets 003-005)

Current-state data broken into categories.

```markdown
# [Title]

## Summary
[2-3 sentences: what this covers, key insight]

## Data

| Category | [Columns vary by ticket] |
|----------|--------------------------|
| ... | ... |

## Methodology
[How values were derived, what year the data represents, caveats]

## Sources
- [Full citations with URLs]
```

### Type 3: Focused deep-dive (tickets 006-008)

Targeted research on a specific subtopic.

```markdown
# [Title]

## Summary
[2-3 sentences]

## Data

[Tables and/or narrative as appropriate]

## Key findings
[3-5 bullet points with the most graphable insights]

## Sources
- [Full citations with URLs]
```

## Methodology guidance

**Consistency over precision.** A 70-year series from one source beats spliced data from three sources. Movement over time matters more than any single data point.

**USGS is the gold standard.** The USGS has published 5-year water use compilations since 1950 (Circulars 115 through 1441). Use these as the backbone. The 2020 data (PP 1894D) only covers three sectors but adds annual resolution for 2010-2020.

**Bgal/day is the unit.** USGS reports in billion gallons per day (Bgal/day), formerly million gallons per day (Mgal/day). Stick with Bgal/day for consistency. Convert other sources to match.

**Per-capita math happens in the graph phase.** Research tickets report totals. The Vue component divides by population (from ticket 001) to get per-capita values.

**Sub-category data is inherently messier.** USGS tracks 8 major categories. Stuff like "golf courses" and "swimming pools" comes from industry associations, EPA estimates, and academic papers. Document the source and year for each figure — they won't all be from the same year.

## Ticket structure

8 tickets:

- **001:** USGS historical withdrawal by sector (1950-2020) + US population
- **002:** USGS annual estimates (2010-2020) for top 3 sectors
- **003:** Withdrawal vs consumption ratios by sector
- **004:** Sub-category water uses (the fun ones: golf, pools, lawns, etc.)
- **005:** Food & agriculture water intensity (blue water per pound)
- **006:** AI & data center water usage (historical + projections)
- **007:** US freshwater inventory & renewable supply
- **008:** Pre-1950 water use (anecdotal data points for graph context)

## What the graph phase will build

**One page, four charts** in a vertical scroll layout.

**Chart 1: "How much water does an American use?" (1950-2020)**
- Stacked area chart, X = year, Y = gallons/person/day
- Layers: thermoelectric, irrigation, public supply, industrial, other
- Annotation: "Peak: 1980" marker
- Uses data from tickets 001 + 002

**Chart 2: "Where does your water actually go?" (current snapshot)**
- Horizontal bar chart, one bar per category
- Major sectors from USGS + fun sub-categories (golf, pools, lawns, AI)
- Dual bars: withdrawal vs consumption for major sectors
- Per capita gallons/day
- Uses data from tickets 003, 004, 006

**Chart 3: "Are we running out?" (usage vs supply)**
- Line chart: total withdrawal over time as % of renewable supply
- Reference lines: % of total freshwater, % of all Earth water
- Regional callout box for Colorado River / Ogallala
- Uses data from tickets 001, 007

**Chart 4: "The new kid on the block" (AI in context)**
- Bar or area chart: water use by sector for recent years
- AI/data centers as one bar — visually tiny
- Possible zoomed inset to make AI even visible
- Uses data from tickets 003, 006
