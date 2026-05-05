# Efficiency Paradox — Research Plan

## Core Question

Across 11 real domains, how much of the efficiency gains from 1990–2020 actually materialized as reduced resource consumption? The metric is **Efficiency Dividend Captured (EDC)** — the percentage of theoretical savings that showed up as real per-capita (or per-GDP) resource reduction.

## Final Metric: Efficiency Dividend Captured (EDC)

```
EDC = actual_savings / expected_savings × 100%

Where:
  expected_savings = baseline_consumption × (1 - 1/efficiency_gain_factor)
  actual_savings   = baseline_consumption - current_consumption (after normalization)
```

- EDC = 100% → all efficiency gains translated to real resource reduction
- EDC = 0% → consumption flat despite efficiency gains (fully consumed by growth/rebound/quality)
- EDC < 0% → consumption grew despite efficiency gains (backfire)

## Domains (11 total)

| # | Domain | Efficiency Metric | Consumption Metric | Normalization | Regulatory Intensity |
|---|--------|-------------------|-------------------|---------------|---------------------|
| 1 | Automotive fuel | Fleet avg real-world MPG | Motor gasoline consumed | per capita | Moderate (CAFE) |
| 2 | Lighting | Lumens/watt (installed stock avg) | Electricity for lighting | per capita | Strong (EISA 2007) |
| 3 | Computing | Computations per kWh | Data center electricity | per GDP | None |
| 4 | Agriculture (land) | Crop calories per acre | Cropland acres in use | per capita | Moderate (CRP) |
| 5 | Air travel | Gallons per revenue passenger-mile | Total jet fuel consumed | per capita | None (demand-side) |
| 6 | Home HVAC | Weighted SEER/AFUE of installed base | Residential HVAC energy | per sq ft | Moderate (standards) |
| 7 | Residential water | Gallons per fixture-cycle (weighted) | Public supply withdrawals | per capita | Strong (EPAct 1992) |
| 8 | Communication | Energy per GB transmitted | Total network energy | per capita | None |
| 9 | Steel | Energy per ton produced | Apparent steel consumption | per capita | None |
| 10 | Freight | Fuel per ton-mile | Total freight ton-miles | per GDP | Moderate (EPA/NHTSA) |
| 11 | Refrigeration | kWh per adjusted cu ft (new units) | Household refrigeration kWh | per household | Strong (DOE standards) |

## Time Windows

- **Primary comparison window: 1990–2020** (uniform across all domains for the cross-domain bar chart)
- **Extended windows** for domains with interesting longer histories:
  - Automotive: 1975–2022 (captures full CAFE era)
  - Agriculture: 1950–2022 (captures Green Revolution)
  - Lighting: 1950–2022 (captures full electrification-to-LED arc)

## Data Format Specification

Each research ticket produces a result file in `results/` with identical filename to the ticket. Results use this exact structure:

```markdown
# [Ticket Title]

## Data Series

### [Series Name]

| Year | Value | Notes |
|------|-------|-------|
| 1990 | ...   |       |
| 1991 | ...   |       |
| ...  | ...   |       |
| 2020 | ...   |       |

**Unit:** [exact unit, e.g., "miles per gallon", "billion gallons"]
**Source:** [specific publication/table, e.g., "FHWA Highway Statistics Table VM-1"]
**Coverage:** [what's included/excluded, e.g., "all light-duty vehicles, excludes heavy trucks"]
**Confidence:** [high/medium/low — how reliable is this series?]

## Data Gaps

[List any years with missing/interpolated data and why]

## Methodology Notes

[How the source calculates this number. Any known biases or measurement changes mid-series.]

## Regulatory Context

[Key regulations affecting this metric during the time window]

## Quality Substitution Notes

[Where applicable: how much of efficiency gains went to quality improvement rather than resource savings]
```

### Field requirements:

- **Year coverage:** Every year from 1990–2020 minimum. Extended windows where specified.
- **Values:** Numeric. Use the natural unit of the source (don't pre-normalize). Normalization happens at graph-build time.
- **Gaps:** Mark missing years explicitly with "N/A" and explain in Data Gaps section. Do not interpolate — leave that to graph phase.
- **Sources:** Cite the specific table/dataset, not just the agency. Future verification requires being able to find the exact number.
- **Multiple series in one ticket:** Some tickets ask for 2+ related series (e.g., efficiency + supplemental context). Each gets its own ### section with its own table.

### Data proxy hierarchy (per domain):

Tickets specify preferred sources. If the primary source is unavailable or paywalled, fall back in this order:
1. US government statistical agencies (EIA, FHWA, BTS, USDA, USGS, Census, BLS)
2. International agencies with US data (IEA, World Bank, OECD)
3. Industry associations (API, ATA, AISI, etc.)
4. Academic papers with published datasets
5. Reputable secondary compilations (Our World in Data, Statista with source citations)

Never use unsourced blog posts, Wikipedia numbers without tracing to the primary source, or projections/forecasts (we want historical actuals only).

## Known Data Challenges

| Domain | Challenge | Mitigation |
|--------|-----------|------------|
| Lighting | "Installed stock average" efficiency is estimated, not directly measured | Use EIA modeling estimates; note uncertainty |
| Computing | Data center electricity pre-2000 is poorly documented | Rely on Koomey (2011) and IEA estimates; accept wider error bars |
| HVAC | SEER of installed base ≠ SEER of new units (stock turns over slowly) | Use EIA RECS data on actual consumption, not rated efficiency of new sales |
| Communication | Network energy accounting boundaries vary by study | Pick one consistent methodology (Andrae & Edler or IEA) and stick with it |
| Water | USGS survey only every 5 years | Interpolate linearly between survey years; mark interpolated values |
| Steel | US production ≠ US consumption (imports matter) | Use apparent consumption (production + imports - exports) |

## Ticket Summary

30 tickets total, organized as:

- **Tickets 001:** Shared baseline normalizers (population, GDP, households, housing sqft)
- **Tickets 002–025:** Domain-specific data (2–3 per domain covering efficiency metrics, consumption metrics, and supplemental context)
- **Tickets 026–028:** Regulatory timelines across multiple domains
- **Tickets 029–030:** Extended historical data for key domains

All tickets are independent — no ticket requires results from another ticket to execute.

## Graph Design (for graph phase)

**Primary visualization:** Horizontal bar chart showing EDC (%) for all 11 domains, sorted from lowest (worst backfire) to highest (most savings captured). Color-coded by regulatory intensity. Zero line clearly marked.

**Secondary visualization:** For 3–4 most interesting domains, a dual-axis time series showing:
- Line 1 (blue): Efficiency metric, normalized to 1990=100
- Line 2 (red): Consumption metric, normalized to 1990=100
- Shaded area between them = the "efficiency gap"

**Annotations:** Each domain bar gets a one-line annotation: "Efficiency +X%, Consumption Y%, EDC Z%"
