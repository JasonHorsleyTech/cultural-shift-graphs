# Air Travel: Total Jet Fuel Consumption and Passenger-Miles 1990–2022

## What to Research

Total US jet fuel consumption and total revenue passenger-miles, annually from 1990–2022. These are the **consumption metrics** for the air travel domain — did we actually use less fuel despite better efficiency?

## Where to Look

1. **Jet fuel consumption:** EIA Monthly Energy Review / Petroleum Supply Annual, Table 3.7c (Transportation petroleum consumption). Kerosene-type jet fuel.
2. **Revenue passenger-miles:** BTS Air Carrier Traffic Statistics (T-100 domestic and international). Annual totals for all US carriers.
3. **Secondary (RPM):** Airlines for America (A4A) annual statistics.

## Scope

- **Jet fuel:** Total kerosene-type jet fuel consumed in the US (includes domestic + international departures from US airports). Note: some of this fuels cargo flights, not just passengers.
- **RPM:** All US certificated carriers (domestic + international operations). This matches the scope of ticket 012.
- If possible, separate passenger aviation fuel from cargo aviation fuel. If not separable, note that cargo is included (~15-20% of aviation fuel).

## Output Format

### Total US Jet Fuel Consumption

| Year | Value | Notes |
|------|-------|-------|

**Unit:** million barrels per year (or billion gallons — specify which)
**Source:** EIA [exact table]
**Coverage:** All kerosene-type jet fuel consumed in US (passenger + cargo)
**Confidence:** high

### Total Revenue Passenger-Miles (US Carriers)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billions of revenue passenger-miles
**Source:** BTS [exact table/database]
**Coverage:** All US certificated carriers, domestic + international operations
**Confidence:** high

## Data Gaps

- 2020-2021 COVID collapse is real data, not a gap. Include actual values.
- Cargo fuel separation may not be available annually. If total jet fuel includes cargo, note it in methodology.

## Methodology Notes

- EIA jet fuel data is "product supplied" (the standard consumption proxy).
- RPM includes both domestic and international operations of US carriers. International traffic grew faster than domestic.
- The divergence between fuel growth rate and RPM growth rate = the efficiency improvement effect.

## What "Good Data" Looks Like

- **Jet fuel:** ~1.5 million barrels/day (1990) → peak ~1.8 M b/d (2007) → ~1.6 M b/d (2019) → COVID crash to ~0.9 M b/d (2020) → recovery.
- **RPM:** ~458 billion (1990) → ~815 billion (2007) → ~927 billion (2019) → COVID crash → partial recovery by 2022.
- Key insight: RPM roughly doubled from 1990-2019, while fuel consumption only rose ~10-15%. The efficiency gains were substantial — but they enabled enormous growth in flying rather than reducing fuel use. Per-capita, each American flew roughly twice as many miles in 2019 as in 1990.
