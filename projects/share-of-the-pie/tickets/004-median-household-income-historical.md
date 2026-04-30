# Ticket 004: Median Household/Family Income Estimates, 1947–1966

## What to research

Reconstruct annual **median household or family income estimates in nominal dollars** for the United States, 1947 through 1966.

The Census CPS provides reliable median household income from 1967 onward (ticket 003). This ticket covers the earlier period where data is patchier. The goal is to extend the time series back to 1947 to capture the postwar boom and "Great Compression" era.

## Data source hierarchy

1. **Census Bureau Historical Income Table H-6 or F-7** — Some versions of the historical tables include pre-1967 estimates for family income (not household income). Family income is an acceptable proxy since most households were families in this era.
2. **Census P-60 reports** — The Census published annual "Current Population Reports" (P-60 series) with income data starting in the late 1940s. These are the primary source for pre-1967 figures. Look for P-60 reports from 1948–1967.
3. **Historical Statistics of the United States (Millennial Edition)** — Table Be1, median family income series.
4. **Economic Report of the President (historical tables)** — Sometimes includes long-run income series.
5. **FRED or academic compilations** — Piketty/Saez data, or Census compilations that backfill the series.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Median Family Income ($) | current US dollars | Best available estimate |
| Source | text | Which specific source/table this year's figure comes from |
| Confidence | high/medium/low | How reliable this specific data point is |

## What "good data" looks like

- 20 rows (1947–1966)
- 1947: ~$3,000–$3,500
- 1955: ~$4,400–$4,800
- 1960: ~$5,600–$6,000
- 1966: ~$7,400–$7,700 (should roughly connect to the 1967 value from ticket 003)
- Values should increase steadily — this was the postwar boom
- Most years should have at least medium confidence

## Important notes

- **Family vs. household income:** Pre-1967 data is typically "family" income, which excludes non-family households (single people living alone). In this era, non-family households were ~15% of all households and typically had lower income. The 1967 transition from family to household data may create a small downward discontinuity. Note this clearly.
- **Interpolation:** If only decennial Census years have reliable data (1950, 1960), do NOT interpolate. Mark intermediate years as `--` (missing). The P-60 reports should fill most gaps, but if they don't, leave the gaps.
- This is the lowest-confidence data in the project. Be honest about it.

## Result format

Follow the standard result format from plan.md. Include a detailed methodology section explaining which sources were used for which years and how the series connects to the post-1967 Census data.
