# USGS Annual Estimates 2010-2020

## What to research

Extract the **annual** water withdrawal estimates for the three largest sectors from USGS Professional Paper 1894D, which covers 2010-2020 with yearly resolution (breaking the 5-year-only constraint of earlier reports).

This data fills in the gaps in the 5-year series and shows recent trends at higher resolution — particularly the dramatic drop in thermoelectric withdrawals as coal plants retired.

## Target data points

Annual data for every year from 2010 to 2020 (11 data points).

## Data source

**USGS Professional Paper 1894D** — "Public-Supply, Self-Supplied Domestic, Irrigation, and Thermoelectric Water-Use Data, 5-Year Periods, 2010-2020"
URL: https://pubs.usgs.gov/publication/pp1894D/full

This is a newer publication that provides annual national-level estimates for:
- Thermoelectric power
- Irrigation
- Public supply

It does NOT cover industrial, mining, livestock, aquaculture, or domestic. Those are only available at 5-year intervals from ticket 001.

## Output format

```
| Year | Thermoelectric (Bgal/day) | Irrigation (Bgal/day) | Public Supply (Bgal/day) | Total of 3 sectors | US Population (millions) | Source |
```

## What "good data" looks like

- 11 rows, one per year, no gaps
- Thermoelectric should show a clear declining trend (coal → gas transition). Expect ~160 Bgal/day in 2010 dropping toward ~100 or less by 2020.
- Irrigation should be relatively stable (~115-120 Bgal/day) with some year-to-year variation from drought cycles
- Public supply should show a modest decline (~39 → ~35 Bgal/day) from conservation and low-flow fixtures
- These three sectors combined account for ~90% of total US withdrawal

## Context from initial research

The 2015 USGS complete report showed total withdrawal of 322 Bgal/day. The 2020 partial data suggested thermoelectric dropped to ~83 Bgal/day — a massive decline driven by coal plant retirements. If confirmed, this means total US withdrawal likely dropped below 300 Bgal/day by 2020, continuing the post-1980 downtrend. Verify this.
