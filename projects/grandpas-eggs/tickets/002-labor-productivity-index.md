# Foundation: Labor Productivity Index 1947-2025

## What to research

Construct a continuous time series of the **BLS labor productivity index** (output per hour, nonfarm business sector) from 1947 to 2025. This is used to compute the "productivity benchmark" annotation line on each graph.

## Target data points

Every year from 1947 to 2025. Annual averages of the quarterly series.

## Data source hierarchy

1. **BLS Major Sector Productivity and Costs** — Output per hour, nonfarm business sector. Quarterly from 1947. Series ID: PRS85006092 (or search for "output per hour, nonfarm business sector" on BLS).
2. **Federal Reserve FRED database** — Same BLS data, sometimes easier to access. Series: OPHNFB.

This is a single, clean, well-maintained series. No splicing should be needed.

## Key context for the research agent

The index is relative (base year = 2012 = 100, or similar). Record the base year. The graph phase will compute cumulative growth ratios from any base year — what matters is that the index is internally consistent.

Approximate checkpoints:
- 1947: ~35-40
- 1955: ~45-50
- 1970: ~60-65
- 1990: ~75-80
- 2000: ~90-95
- 2012: 100 (base)
- 2025: ~115-120

## Output format

Follow the **Type 1: Foundation data** format from plan.md.

| Year | Value | Unit | Source |
|------|-------|------|--------|

Value = index number. Unit = "index (2012=100)" or whatever base year the series uses.

## What "good data" looks like

- Complete annual series 1947-2025 with no gaps
- Single source, no splicing needed
- Base year clearly noted
- Values show roughly 3x growth from 1947 to 2025
