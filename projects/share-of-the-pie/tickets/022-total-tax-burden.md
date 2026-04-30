# Ticket 022: Total Tax Burden (All Levels) for Median Household, 1960–2024

## What to research

Collect annual **total effective tax rate for the median household, including federal, state, local, and payroll taxes**, 1960 through 2024.

CBO only covers federal taxes. But state and local taxes (sales, property, state income) are significant and regressive — they hit middle-income households harder as a share of income than they hit high-income households. The total tax picture is needed for a true "disposable income" calculation.

## Data source hierarchy

1. **ITEP (Institute on Taxation and Economic Policy) "Who Pays?"** — Publishes total effective tax rates (federal + state + local) by income group. Updated periodically (2018, 2024 editions). May not have annual time series.
2. **Tax Foundation** — Historical total tax burden estimates.
3. **OECD tax database** — US total tax wedge for average worker. Available from ~1980.
4. **BEA NIPA Table 3.1 / 3.3** — Government current tax receipts by type. Can compute total taxes / personal income as a rough aggregate rate. Not quintile-specific but tracks the overall burden.
5. **CEA / Economic Report of the President** — Sometimes includes total tax burden estimates.
6. **Academic studies** — Piketty, Saez, Zucman (2018) have total effective tax rates by income percentile, 1950–2018.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Total Effective Tax Rate, Median (%) | percentage | All taxes (federal income + payroll + state income + sales + property + excise) / pre-tax income |
| Source | text | Which source for this year |

If median-specific isn't available, middle-quintile or "average worker" is acceptable.

## What "good data" looks like

- Total burden should be higher than federal-only by ~8–12 percentage points
- Middle-income total rate: probably ~28–35% across the time series
- Less variation over time than federal-only (state/local taxes are more stable and partially offset federal swings)
- Should capture the era of rising payroll taxes (1950s–1990s)

## Result format

Follow the standard result format from plan.md. Note this is the hardest tax ticket — annual data for total tax burden by income group is rare. It's acceptable to have sparser data (every few years) with clear year labels.

## Known issues

- True total tax incidence requires modeling (who bears the corporate tax? who bears the property tax — owner or renter?). Different studies make different assumptions.
- The Piketty/Saez/Zucman data is the most comprehensive but controversial among economists. Note if using it.
- This may end up being a "best available" patch rather than a clean annual series. That's fine — the plan accounts for sparse data.
