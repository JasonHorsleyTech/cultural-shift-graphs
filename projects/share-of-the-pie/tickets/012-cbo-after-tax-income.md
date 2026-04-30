# Ticket 012: CBO After-Tax After-Transfer Income by Quintile, 1979–Latest

## What to research

Collect **CBO after-tax, after-transfer income by household income quintile**, 1979 through the latest available year.

This is the most comprehensive measure of "what people actually have to spend." It starts with market income, adds government transfers (Social Security, Medicare/Medicaid, SNAP, unemployment insurance, etc.), and subtracts federal taxes. This is the numerator for the "what you actually get" graph line.

## Data source hierarchy

1. **CBO "The Distribution of Household Income" report** — Same report as ticket 011, different income definition.
2. **CBO supplemental data tables** — Look for "Average household income after means-tested transfers and federal taxes, by income group" or "income after transfers and taxes."
3. CBO calls this metric "income after transfers and taxes" in recent reports.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Bottom Quintile ($) | CBO-base-year dollars | Mean after-tax-after-transfer income, bottom 20% |
| Second Quintile ($) | same | Second 20% |
| Middle Quintile ($) | same | Middle 20% |
| Fourth Quintile ($) | same | Fourth 20% |
| Top Quintile ($) | same | Top 20% |
| Top 1% ($) | same | Top 1% (if available) |

**Note the base year for constant dollars.**

## What "good data" looks like

- Same time range as ticket 011 (~1979–2021)
- After-tax income should be lower than market income for upper quintiles (they pay net taxes) and higher for lower quintiles (they receive net transfers)
- Middle quintile after-tax income should be ~80–85% of market income (reflecting federal tax burden)
- Bottom quintile after-tax income should be significantly higher than bottom quintile market income (transfers exceed taxes for this group)
- The bottom quintile gap between market and after-tax income should grow over time (expanding safety net)

## Result format

Follow the standard result format from plan.md. Note the exact CBO income definition used (some reports distinguish "income before transfers and taxes," "income after means-tested transfers," and "income after transfers and taxes" — we want the last one).

## Known issues

- CBO includes employer-sponsored health insurance premiums as part of "income" in some definitions. Note whether this is included.
- CBO only counts federal taxes, not state and local. The after-tax figures overstate disposable income for this reason.
- Same base-year and lag caveats as ticket 011.
