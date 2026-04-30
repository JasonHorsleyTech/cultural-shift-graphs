# Ticket 018: Employer Health Insurance Premium Per Covered Worker, 1960–2024

## What to research

Collect annual **average employer contribution to health insurance premiums per covered worker**, 1960 through 2024.

The exploration phase identified health insurance as the single biggest explanatory factor: ~10 of the 23 percentage points of apparent decline in "share of the pie" is employer health costs that are compensation but never reach the worker's paycheck. This is half the story the graph tells.

## Data source hierarchy

1. **Kaiser Family Foundation / HRET Employer Health Benefits Survey** — The definitive source for employer health costs, but only goes back to 1999. Has employer contribution for single and family coverage.
2. **Medical Expenditure Panel Survey (MEPS) - Insurance Component** — AHRQ, available from 1996.
3. **BLS Employee Benefits Survey / National Compensation Survey** — Employer cost for health insurance per hour worked (can annualize). Historical data from 1980s.
4. **BLS Employer Costs for Employee Compensation (ECEC)** — Health insurance cost as $/hour. Quarterly from 1986.
5. **For pre-1986:** Academic studies, Health Insurance Association of America historical data, or Bureau of Labor Statistics bulletins from the era. The exact annual figure matters less than the trend (very small → very large).
6. **Milliman Medical Index** — Total cost of healthcare for a family, but not employer-specific.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Employer Premium per Worker ($) | current US dollars | Average annual employer contribution to health insurance per covered employee |
| Source | text | Which source this year's figure comes from |

**Note:** We want the **employer** contribution, not total premium and not the employee's share. If only total premium is available, note it and the graph phase will estimate the employer share (~72–75% historically).

## What "good data" looks like

- 1960: ~$100–$200 (health insurance was a minor perk)
- 1970: ~$200–$400
- 1980: ~$1,000–$1,500
- 1990: ~$2,500–$3,500
- 2000: ~$4,500–$5,500
- 2010: ~$9,000–$10,500
- 2024: ~$16,000–$17,500
- Should show exponential-looking growth, especially 1990–2024

## Result format

Follow the standard result format from plan.md. Because this series stitches together multiple sources, clearly document which source covers which years and note any methodology differences at the seams.

## Known issues

- Pre-1999 data is the hardest part. Kaiser/HRET doesn't go back that far. BLS ECEC starts 1986. Before that, you're relying on historical surveys and academic literature.
- "Per covered worker" denominator matters: is it per employee enrolled in employer coverage, or per employee total? We want per enrolled employee.
- Family vs. single coverage: average employer cost per covered worker should blend single and family enrollees. If only single or only family is available, note it.
