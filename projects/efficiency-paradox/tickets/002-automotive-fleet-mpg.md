# Automotive: Fleet Average Fuel Economy 1975–2022

## What to Research

The real-world average fuel economy of the US light-duty vehicle fleet (cars + light trucks combined), annually from 1975–2022.

This is the **efficiency metric** for the automotive domain. We want what vehicles actually achieved on the road, not EPA sticker ratings or CAFE compliance values.

## Where to Look

1. **Primary:** FHWA Highway Statistics, Table VM-1 ("Annual Vehicle Distance Traveled in Miles and Related Data"). This reports total fuel consumed and total VMT, from which you can derive real-world fleet MPG = total VMT / total fuel consumed.
2. **Secondary:** EPA's "Automotive Trends Report" (annual) has adjusted real-world fuel economy estimates by model year and fleet average.
3. **Fallback:** EIA Annual Energy Outlook historical tables include fleet efficiency estimates.

**Prefer FHWA-derived numbers** (total VMT ÷ total fuel) because they reflect actual on-road performance including driving patterns, not lab-test conditions.

## Scope

- **Include:** All light-duty vehicles (passenger cars + light trucks/SUVs/vans up to 8,500 lbs GVWR).
- **Exclude:** Heavy-duty trucks (Class 3+), motorcycles, buses.
- If the source doesn't separate light-duty cleanly, note what's included.

## Output Format

### Fleet Average Real-World MPG

| Year | Value | Notes |
|------|-------|-------|

**Unit:** miles per gallon (real-world, all light-duty vehicles)
**Source:** [exact table and publication]
**Coverage:** Light-duty vehicles, US domestic travel
**Confidence:** high

## Data Gaps

- Pre-1975 data is sparse (no CAFE era). If available easily, include back to 1970.
- Note any methodology changes (e.g., if FHWA changed how it estimates fuel consumption mid-series).

## Methodology Notes

Explain whether the values are:
- Derived (VMT ÷ fuel consumed) — preferred
- EPA-adjusted lab values applied to sales mix
- Some other estimation method

## Regulatory Context

Briefly note key CAFE standard milestones (1975 initial, 1985 27.5 MPG car standard, 2012 Obama-era ramp, 2020 Trump rollback, 2022 Biden reinstatement). 1–2 sentences each.

## What "Good Data" Looks Like

- Annual values from 1975–2022 with no gaps.
- Values should show a clear upward trend from ~13-14 MPG (1975) to ~25-26 MPG (2022).
- Source is traceable to a specific government table.
