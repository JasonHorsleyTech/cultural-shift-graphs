# Ticket 021: Effective Federal Tax Rate for Middle Quintile, 1947–2024

## What to research

Collect annual **effective federal tax rate for the middle income quintile**, 1947 through 2024.

For the CBO era (1979+), this overlaps with ticket 013. This ticket's unique value is extending the series back to 1947, covering the high-tax postwar era and the major tax cuts of 1964 and 1981. The pre-CBO data is needed to estimate disposable income before CBO's series begins.

## Data source hierarchy

1. **CBO effective tax rate data (1979+)** — Ticket 013 covers this. For 1979+, just verify consistency.
2. **Tax Foundation** — Publishes historical effective federal tax rate estimates for various income levels. May go back to 1950s.
3. **IRS Statistics of Income** — Historical average tax rates by adjusted gross income bracket. Available from 1916 but requires mapping income brackets to quintiles.
4. **Piketty & Saez (2007)** — "How Progressive is the U.S. Federal Tax System?" Has effective federal tax rates by income group from 1960 onward.
5. **Economic Report of the President** — Historical tables sometimes include effective rate data.
6. **Academic compilations** — Brownlee (2004) "Federal Taxation in America" has long-run estimates.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Effective Federal Tax Rate, Middle Quintile (%) | percentage | All federal taxes (income + payroll + corporate allocated + excise) / pre-tax income |
| Source | text | Which source for this year |

If middle-quintile-specific data isn't available pre-1979, collect effective rate for "median income" or "middle income families" as a proxy.

## What "good data" looks like

- 77–78 rows (1947–2024)
- 1947–1963: higher rates (~18–22%), before the Kennedy/Johnson tax cuts
- 1964–1980: moderate (~16–20%), after the 1964 Revenue Act
- 1981–1986: declining (~15–18%), Reagan tax cuts
- 1987–2000: relatively stable (~17–19%)
- 2001–2012: lower (~14–17%), Bush tax cuts
- 2013–2017: slightly higher (~16–18%), partial expiration of Bush cuts
- 2018–2025: lower (~14–16%), Trump tax cuts

## Result format

Follow the standard result format from plan.md. Because this stitches together CBO and non-CBO sources, note clearly where the source transition happens and whether the definitions are comparable.

## Known issues

- Pre-1979 estimates of effective tax rates are less reliable because they require modeling (allocating corporate and excise taxes) that CBO doesn't do until its series begins.
- "Middle quintile" may be defined differently across sources. CBO uses equivalized household income; IRS uses AGI; Tax Foundation uses various definitions. Note which is used.
- Payroll tax (FICA) rates changed dramatically: 2% (employee share) in 1947 → 7.65% today. This is a major driver of changes in effective rates for middle-income workers.
