# Ticket 013: CBO Effective Federal Tax Rates by Quintile, 1979–Latest

## What to research

Collect **CBO effective federal tax rates by household income quintile**, 1979 through the latest available year.

This includes all federal taxes: individual income tax, payroll taxes (Social Security + Medicare), corporate income tax (allocated to capital owners), and excise taxes. The effective rate = total federal taxes paid / before-tax income.

## Data source hierarchy

1. **CBO "The Distribution of Household Income" report** — Supplemental data includes effective tax rates by quintile.
2. **CBO supplemental Excel tables** — Look for "Effective federal tax rates, by income group."
3. **Tax Policy Center** — Publishes compilations of CBO effective rate data, sometimes easier to find than CBO's own files.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Bottom Quintile (%) | percentage | Effective federal tax rate, bottom 20% |
| Second Quintile (%) | percentage | Second 20% |
| Middle Quintile (%) | percentage | Middle 20% |
| Fourth Quintile (%) | percentage | Fourth 20% |
| Top Quintile (%) | percentage | Top 20% |
| Top 1% (%) | percentage | Top 1% (if available) |

## What "good data" looks like

- ~42 rows (1979–2021)
- Bottom quintile: ~5–10% (low income tax, payroll tax dominates)
- Middle quintile: ~15–20%
- Top quintile: ~25–30%
- Top 1%: ~30–37%
- Should show the effect of major tax legislation: Reagan cuts (1981, 1986), Clinton increase (1993), Bush cuts (2001, 2003), Trump cuts (2017)

## Result format

Follow the standard result format from plan.md.

## Known issues

- CBO allocates corporate income tax to capital owners, which is a modeling choice that increases the top quintile's effective rate. Note this.
- These are federal only. State + local taxes are regressive and would change the picture, especially for lower quintiles. That's ticket 022's domain.
