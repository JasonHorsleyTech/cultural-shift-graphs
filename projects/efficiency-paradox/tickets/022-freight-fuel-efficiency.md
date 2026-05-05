# Freight: Fuel Efficiency per Ton-Mile 1990–2022

## What to Research

The fuel consumed per ton-mile of freight moved in the US (primarily trucking, but also rail for comparison), annually from 1990–2022. This is the **efficiency metric** for the freight domain.

## Where to Look

1. **Primary (trucking):** BTS / FHWA data. The challenge: there's no single "fuel per ton-mile" series for all trucking. Sources:
   - FHWA Highway Statistics — total fuel consumed by combination trucks (Table VM-1)
   - BTS Freight Facts and Figures — ton-miles by mode
   - American Trucking Associations (ATA) reports on fleet efficiency
2. **Primary (rail):** Association of American Railroads (AAR) annual reports. Class I railroads report revenue ton-miles and fuel consumed — this gives a clean fuel/ton-mile series.
3. **Secondary:** EPA SmartWay program data (post-2004) — trucking efficiency benchmarks.
4. **Tertiary:** Oak Ridge National Laboratory (ORNL) Transportation Energy Data Book — synthesizes multiple sources into energy intensity by mode (BTU per ton-mile).
5. **Recommended starting point:** ORNL Transportation Energy Data Book, Table on "Energy Intensities of Freight Modes" — has BTU per ton-mile for truck, rail, water, and air freight going back to ~1970.

## Scope

- **Primary metric:** BTU per ton-mile for truck freight (the dominant and least efficient mode).
- **Supplemental:** BTU per ton-mile for Class I railroad freight (much more efficient, for comparison).
- Focus on intercity freight, not local delivery (different efficiency profile).
- Trucking includes all heavy-duty trucks (Class 7-8, combination trucks).

## Output Format

### Truck Freight Energy Intensity

| Year | Value | Notes |
|------|-------|-------|

**Unit:** BTU per ton-mile
**Source:** ORNL Transportation Energy Data Book / BTS / [specify]
**Coverage:** US intercity truck freight (Class 7-8 trucks)
**Confidence:** medium (ton-mile estimates for trucks have significant uncertainty ±15-20%)

### Rail Freight Energy Intensity

| Year | Value | Notes |
|------|-------|-------|

**Unit:** BTU per ton-mile
**Source:** AAR / ORNL
**Coverage:** US Class I railroads
**Confidence:** high (railroads track this precisely)

### Average Truck Fleet MPG (supplemental)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** miles per gallon (combination trucks)
**Source:** FHWA Highway Statistics (total fuel ÷ total VMT for combination trucks)
**Confidence:** medium

## Data Gaps

- Truck ton-mile data is notoriously imprecise. Unlike railroads (which weigh every car), truck freight tonnage is estimated from surveys (Commodity Flow Survey every 5 years, plus annual estimates).
- The Commodity Flow Survey (CFS) years: 1993, 1997, 2002, 2007, 2012, 2017. Between CFS years, ton-miles are estimated.
- Rail data is excellent (annual, from AAR).

## Methodology Notes

- Truck fuel efficiency improved ~30% from 1990 to 2020 (new engines, aerodynamics, speed limiters, better tires). But a large truck still gets only ~6-7 MPG.
- Rail fuel efficiency improved ~40% over the same period (longer trains, distributed power, better track maintenance).
- The ORNL Transportation Energy Data Book is the best single source for modal comparisons — it synthesizes FHWA, BTS, AAR, and EIA data.
- Empty-mile percentage matters: if trucks run empty 25% of miles, the effective ton-mile efficiency is worse than the gross number suggests. Our metric should use revenue ton-miles (actual freight moved), not total truck-miles.

## What "Good Data" Looks Like

- Truck: ~3,500-4,000 BTU/ton-mile (1990) → ~2,500-3,000 BTU/ton-mile (2020). About 25-30% improvement.
- Rail: ~400-500 BTU/ton-mile (1990) → ~250-300 BTU/ton-mile (2020). About 40% improvement.
- Rail is ~10x more efficient than truck per ton-mile — this hasn't changed much (both improved at similar rates).
- Truck MPG: ~5.0-5.5 (1990) → ~6.5-7.0 (2020).
