# Automotive: Motor Gasoline Consumption 1975–2022

## What to Research

Total US motor gasoline consumption (for highway use), annually from 1975–2022. This is the **consumption metric** for the automotive domain — the raw resource being used.

We also need total vehicle miles traveled (VMT) for the same period, as it contextualizes the consumption story (did people drive more?).

## Where to Look

1. **Primary (gasoline):** EIA Monthly Energy Review, Table 3.7c ("Petroleum Consumption: Transportation Sector") or Annual Energy Review equivalent. Motor gasoline supplied to market (a proxy for consumption).
2. **Primary (VMT):** FHWA Highway Statistics, Table VM-1 or VM-2. Total vehicle miles traveled, all highways.
3. **Secondary:** EIA State Energy Data System (SEDS) has state-level gasoline consumption summing to national.

## Scope

- **Gasoline:** Motor gasoline for highway use only. Exclude aviation gasoline, marine, off-highway.
- **VMT:** All highway vehicle miles (light-duty + heavy-duty). Note if light-duty can be separated.

## Output Format

### Total Motor Gasoline Consumption

| Year | Value | Notes |
|------|-------|-------|

**Unit:** million barrels per year (or thousand barrels per day — state which)
**Source:** [exact EIA table]
**Coverage:** Motor gasoline, highway use, US total
**Confidence:** high

### Total Vehicle Miles Traveled

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billions of miles
**Source:** [exact FHWA table]
**Coverage:** All vehicle types, all US highways
**Confidence:** high

## Data Gaps

- 2020 will show a COVID dip — note it but include the actual value.
- If any years are estimated rather than measured, flag them.

## Methodology Notes

- EIA "product supplied" = production + imports − exports ± stock changes. This is the standard proxy for consumption (actual consumption isn't directly measured).
- FHWA VMT is estimated from traffic counts on sample road segments, extrapolated. Methodology is consistent over time but has sampling uncertainty.

## What "Good Data" Looks Like

- Annual values from 1975–2022, no gaps.
- Gasoline consumption should show: rise through mid-2000s, slight decline post-2008, partial recovery, COVID dip 2020.
- VMT should show steady rise from ~1.3 trillion (1975) to ~3.2 trillion (2019), with COVID dip.
