# Foundation: Median Hourly Earnings 1950-2025

## What to research

Construct a continuous time series of **median hourly earnings** for US workers from 1950 to 2025. This is the denominator for every labor-minutes calculation in the project.

## Target data points

Every year from 1950 to 2025. If annual isn't available for certain periods, every 5 years is acceptable — mark interpolated years.

## Data source hierarchy

1. **BLS Current Population Survey (CPS), Usual Weekly Earnings** — median usual weekly earnings of full-time wage and salary workers. Quarterly from 1979. Divide by 40 to get hourly. Series ID: LEU0252881500.
2. **BLS Current Employment Statistics (CES)** — average hourly earnings, production and nonsupervisory workers, private sector. Monthly from 1964. Series ID: CES0500000008. Note: this is AVERAGE, not median, but it's the longest clean hourly series. Use it as a proxy for 1964-1978 with a note about the average/median discrepancy.
3. **Pre-1964:** Reconstruct from Census Bureau Historical Income Tables (Table P-8, median income for full-time year-round workers) divided by annual hours worked (~2,000). The Census data is available back to 1947 but only for select years before 1960.

## Splicing guidance

The three series don't perfectly align. When splicing:
- Use CPS median weekly earnings / 40 as the primary series (1979-2025)
- For 1964-1978, use BLS CES average hourly earnings. Note the splice point and the average-vs-median caveat. Historical research suggests the average/median ratio was relatively stable in this period (~1.0-1.1 for production workers).
- For 1950-1963, use Census median income / 2,000 hours. Note that these are estimates and mark confidence as "medium" or "low."

## Output format

Follow the **Type 1: Foundation data** format from plan.md.

| Year | Value | Unit | Source |
|------|-------|------|--------|

Value = median hourly earnings in nominal dollars. Unit = "$/hour".

## What "good data" looks like

- Continuous series from 1950 to 2025 with no missing decades
- Splice points are clearly documented
- Values pass sanity checks: ~$1.50/hr in 1950, ~$2.50/hr in 1965, ~$6/hr in 1980, ~$15/hr in 2000, ~$30/hr in 2025
- Interpolated years are marked
