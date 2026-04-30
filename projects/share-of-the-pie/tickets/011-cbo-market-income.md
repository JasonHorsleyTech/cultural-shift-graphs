# Ticket 011: CBO Market Income by Quintile, 1979–Latest

## What to research

Collect **CBO market income (before taxes and transfers) by household income quintile**, 1979 through the latest available year.

CBO's Distribution of Household Income report is the gold standard for income distribution analysis. "Market income" = labor income + business income + capital gains + capital income + retirement income (employer-sponsored pensions, not Social Security). This is the "what did the market give you?" baseline before government intervention.

## Data source hierarchy

1. **CBO "The Distribution of Household Income" report** — Published every 2–3 years, covers 1979 to the latest available year (probably 2021). The supplemental data Excel files have the full time series.
2. **CBO supplemental data tables** — Usually an Excel workbook linked from the report page. Look for "Average household market income, by income group."
3. **FRED** — May have some CBO series, but the quintile breakdowns are usually only in CBO's own files.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Bottom Quintile ($) | 2021 or CBO-base-year dollars | Mean market income, bottom 20% |
| Second Quintile ($) | same | Mean market income, second 20% |
| Middle Quintile ($) | same | Mean market income, middle 20% |
| Fourth Quintile ($) | same | Mean market income, fourth 20% |
| Top Quintile ($) | same | Mean market income, top 20% |
| Top 1% ($) | same | Mean market income, top 1% (if available) |

**IMPORTANT:** CBO reports income in constant dollars (usually base year = latest year in the study). Note the base year clearly. These are inflation-adjusted, unlike most other tickets in this project.

## What "good data" looks like

- ~42 rows (1979–2021)
- Middle quintile market income should be roughly $60k–$80k in recent constant dollars
- Top quintile should be 5–8x the bottom quintile
- Top 1% should be dramatically higher than top quintile average
- The middle quintile should show modest real growth; top quintile should show strong growth; bottom should be flat or declining

## Result format

Follow the standard result format from plan.md. **Critically:** state the base year for constant dollars. If CBO provides both nominal and real, prefer real (it's what CBO primarily publishes).

## Known issues

- CBO rebases its constant dollars when it publishes new reports. A 2023 report might use 2021 dollars; a 2019 report might use 2019 dollars. Use the latest report's base year and note it.
- CBO uses "household size-adjusted" income (equivalized). Note this — it's different from simply dividing by household size.
- CBO data typically lags 2–3 years. The latest year is probably 2021.
