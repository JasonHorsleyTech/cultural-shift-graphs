# Ticket 002: NDP Per Capita and Depreciation Share, 1947–2024

## What to research

Collect annual **Net Domestic Product (NDP) per capita** and **consumption of fixed capital (depreciation) as a percentage of GDP** for the United States, 1947–2024.

NDP = GDP minus depreciation. The exploration phase found that depreciation grew from ~10% of GDP in 1950 to ~16% today, inflating the GDP denominator and making the "share of pie" decline look ~5 percentage points worse than it actually is. This series lets us show the depreciation-adjusted alternative.

## Data source hierarchy

1. **BEA NIPA Table 1.7.5** — Relation of GDP, GNP, NDP, and NNI. Has GDP, depreciation (consumption of fixed capital), and NDP.
2. **FRED series A262RC1A027NBEA** — Consumption of fixed capital.
3. **FRED series A791RC1A027NBEA** — Net Domestic Product.
4. Compute per capita by dividing by midyear population from **FRED series B230RC0A052NBEA** or Census.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| NDP Per Capita ($) | current US dollars | Net Domestic Product / population |
| Depreciation Share (%) | percentage | Consumption of fixed capital / GDP × 100 |

## What "good data" looks like

- Depreciation share should trend upward: ~10% in 1950s → ~13% in 1980s → ~15–16% in 2020s
- NDP per capita should be ~84–90% of GDP per capita throughout
- No negative values; no impossible values (depreciation share should never exceed ~20%)

## Result format

Follow the standard result format from plan.md.

## Known issues

- If NDP per capita isn't directly published, compute it from NDP aggregate / population. Note which population series you used.
- Depreciation includes software and IP amortization, which grew rapidly after the 1990s SNA revision. This is a feature, not a bug — it's part of why the denominator grew.
