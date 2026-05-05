# Lighting: Electricity Consumed for Lighting 1990–2022

## What to Research

Total US electricity consumed for lighting purposes (residential + commercial + street/outdoor), annually from 1990–2022.

This is the **consumption metric** for the lighting domain.

## Where to Look

1. **Primary:** EIA Annual Energy Outlook (AEO) — the reference case reports lighting electricity by sector (residential, commercial). These are model-based but calibrated to RECS/CBECS surveys.
2. **Secondary:** EIA Residential Energy Consumption Survey (RECS) — conducted every 4-5 years (1993, 1997, 2001, 2005, 2009, 2015, 2020). Reports lighting as a share of household electricity.
3. **Secondary:** EIA Commercial Buildings Energy Consumption Survey (CBECS) — conducted periodically. Reports lighting electricity for commercial sector.
4. **Tertiary:** DOE Solid-State Lighting reports often cite total lighting electricity (they use it to project LED savings).
5. **Fallback:** If annual series isn't available, use the RECS/CBECS survey years and note that intermediate years are interpolated.

## Scope

- **Include:** Residential lighting electricity + commercial lighting electricity + street/outdoor lighting.
- **Exclude:** Industrial process lighting (minor).
- If only residential + commercial is available (no street lighting breakdown), that's fine — it's the vast majority.

## Output Format

### Total US Electricity for Lighting

| Year | Value | Notes |
|------|-------|-------|

**Unit:** terawatt-hours (TWh) per year
**Source:** [exact source — specify if AEO model vs. survey data]
**Coverage:** Residential + commercial [+ outdoor if available]
**Confidence:** medium (lighting share estimates have uncertainty ±10-15%)

### Residential Lighting Electricity (supplemental, if easily available)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** TWh per year
**Source:** [exact source]

## Data Gaps

- EIA surveys are every 4-5 years. Annual estimates between surveys are modeled. Note which years are survey-based vs. modeled.
- Pre-1993 residential data is sparse (first modern RECS that breaks out lighting).
- Street/outdoor lighting data may not be separately tracked annually.

## Methodology Notes

EIA derives lighting electricity from survey data on:
- Number of light sockets per home/building
- Hours of use per day
- Wattage distribution of installed lamps

This is estimated, not metered. The estimation methodology is consistent over time, which is what we need for trend comparison.

## What "Good Data" Looks Like

- Should show total lighting electricity relatively flat or slowly rising through 1990-2010.
- Clear decline starting ~2012-2015 as LED penetration hits critical mass.
- 2020 value should be roughly 20-40% below the peak (circa 2007-2010).
- Total in 2001 was reportedly ~700-800 TWh (about 22% of total US electricity). By 2020, should be down to ~500-550 TWh (about 14% of total).
