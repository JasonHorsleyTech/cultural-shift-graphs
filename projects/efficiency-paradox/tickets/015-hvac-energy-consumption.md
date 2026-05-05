# Home HVAC: Residential Heating and Cooling Energy Consumption 1990–2022

## What to Research

Total residential energy consumed for space heating and cooling in the US, annually from 1990–2022. Also: energy per square foot of living space (to control for homes getting bigger).

This is the **consumption metric** for the home HVAC domain.

## Where to Look

1. **Primary:** EIA Residential Energy Consumption Survey (RECS) — conducted 1993, 1997, 2001, 2005, 2009, 2015, 2020. Reports energy consumption by end use (space heating, air conditioning, water heating, appliances, lighting).
2. **Secondary:** EIA Annual Energy Outlook (AEO) — models annual residential energy by end use. Provides interpolated annual estimates between RECS survey years.
3. **Tertiary:** EIA Monthly Energy Review — total residential energy consumption (all end uses combined). Less useful because we need the HVAC-specific breakout.

## Scope

- **Space heating + air conditioning only.** Exclude water heating, lighting, appliances, electronics.
- All fuel types: electricity for AC + heat pumps, natural gas for furnaces, propane/oil for heating.
- Convert to common unit (BTU or kWh equivalent) for total HVAC energy.
- Report both total AND per-square-foot for the per-sqft comparison.

## Output Format

### Total Residential Space Heating Energy

| Year | Value | Notes |
|------|-------|-------|

**Unit:** quads (quadrillion BTU) per year
**Source:** EIA RECS / AEO [specify which]
**Coverage:** All US occupied housing units
**Confidence:** high for RECS years; medium for AEO-interpolated years

### Total Residential Air Conditioning Energy

| Year | Value | Notes |
|------|-------|-------|

**Unit:** quads per year
**Source:** EIA RECS / AEO [specify which]
**Coverage:** All US occupied housing units
**Confidence:** high for RECS years; medium for interpolated

### Total Residential Floor Space

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billion square feet (total heated/cooled floor area, all US homes)
**Source:** EIA RECS / Census Characteristics of New Housing
**Confidence:** medium (total stock sqft is estimated, not measured)

### HVAC Energy per Square Foot (derived)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** thousand BTU per square foot per year
**Source:** Derived from above series
**Confidence:** medium

## Data Gaps

- RECS is only every 4-5 years. AEO models interpolate but introduce model assumptions.
- Weather variation causes year-to-year swings (cold winters → more heating). Consider using weather-normalized values if available, or note heating/cooling degree-day context.
- Total floor space of the existing housing stock is estimated, not precisely measured.

## Methodology Notes

- Heating energy is weather-sensitive. Heating Degree Days (HDD) vary 10-15% year-to-year. A "cold year" will show higher consumption even if efficiency improved. Weather-normalization adjusts for this but adds complexity.
- AC penetration rose from ~55% of homes (1980) to ~90% (2020). More homes with AC = more cooling energy, independent of efficiency. This is technology adoption, not rebound — but it shows up in our numbers.
- Home size growth: median new home sqft rose from ~1,500 (1970) to ~2,300 (2015), then dipped slightly. The existing stock average is lower (older, smaller homes still occupied).

## What "Good Data" Looks Like

- Space heating energy: roughly flat or slightly declining (~5.0-5.5 quads in 1990, ~4.5-5.0 quads in 2020) despite more homes and more floor space.
- AC energy: rising through 2000s (AC penetration + hotter summers), then leveling or slightly declining (more efficient units).
- Energy per sqft: clearly declining (this is where efficiency improvements show up most cleanly) — probably ~25-30% reduction from 1990 to 2020.
