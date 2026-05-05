# Air Travel: Fuel Efficiency per Passenger-Mile 1990–2022

## What to Research

The fuel efficiency of US commercial aviation — how much jet fuel is consumed per revenue passenger-mile (RPM). Annual data, 1990–2022.

This is the **efficiency metric** for the air travel domain.

## Where to Look

1. **Primary:** Bureau of Transportation Statistics (BTS), Air Carrier Financial Reports (Form 41 data). Has fuel consumed and revenue passenger-miles by carrier, aggregated nationally.
2. **Secondary:** Airlines for America (A4A, formerly ATA) annual reports — publish industry-wide fuel efficiency metrics (gallons per ASM and per RPM).
3. **Tertiary:** ICAO Environmental Report data (global, but includes US breakdown).
4. **Fallback:** Derive from EIA jet fuel consumption (kerosene-type) ÷ BTS total revenue passenger-miles.

## Scope

- **Include:** All US certificated air carriers (mainline + regional), domestic + international operations of US carriers.
- **Exclude:** General aviation (private jets, small planes), military aviation, cargo-only operations.
- We want fuel per **revenue passenger-mile**, not per available seat-mile. RPM captures load factor improvements as part of the efficiency story (half-empty planes are inefficient).

## Output Format

### Fuel Consumed per Revenue Passenger-Mile

| Year | Value | Notes |
|------|-------|-------|

**Unit:** gallons per 100 revenue passenger-miles (or gallons per RPM — specify which)
**Source:** [BTS Form 41 data / A4A industry statistics]
**Coverage:** US certificated carriers, all operations (domestic + international)
**Confidence:** high

### Load Factor (supplemental)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** percentage (RPM ÷ ASM × 100)
**Source:** BTS T-100 data
**Confidence:** high

## Data Gaps

- Regional carrier data pre-2000 may be incomplete (some regionals weren't required to file Form 41).
- Load factor data is complete from 1990.
- 2020 is anomalous (COVID). Include the value but note it.

## Methodology Notes

- Fuel efficiency improves through three channels: (1) more efficient aircraft (better engines, lighter materials), (2) higher load factors (fewer empty seats), (3) operational improvements (better routing, continuous descent approaches).
- Our metric captures all three combined, which is correct for the Jevons calculation.
- New aircraft (737 MAX, A320neo, 787) are ~15-20% more efficient per seat than models they replace. But fleet turnover takes 20+ years.

## What "Good Data" Looks Like

- 1990: approximately 5.0-5.5 gallons per 100 RPM
- 2000: approximately 4.5 gallons per 100 RPM
- 2010: approximately 3.8 gallons per 100 RPM
- 2019: approximately 3.2-3.5 gallons per 100 RPM
- Total improvement 1990→2019: roughly 35-40% better fuel efficiency per passenger-mile.
- Load factors: rose from ~62% (1990) to ~87% (2019).
