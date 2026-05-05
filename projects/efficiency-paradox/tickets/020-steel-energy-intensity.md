# Steel: Production Energy Intensity 1990–2022

## What to Research

The energy consumed per ton of steel produced in the US, annually from 1990–2022. This is the **efficiency metric** for the steel domain.

## Where to Look

1. **Primary:** American Iron and Steel Institute (AISI) annual statistical reports — publish energy intensity data (BTU per ton or GJ per tonne).
2. **Secondary:** EIA Manufacturing Energy Consumption Survey (MECS) — conducted every 4 years (1991, 1994, 1998, 2002, 2006, 2010, 2014, 2018). Reports total energy for iron & steel sector.
3. **Tertiary:** World Steel Association "Sustainability Indicators" — reports energy intensity for US and global.
4. **Academic:** Worrell et al. (various) on US steel sector energy intensity trends.
5. **Fallback:** Derive from EIA MECS total steel sector energy ÷ USGS steel production data.

## Scope

- **US steel production only** (both BOF/integrated mills and EAF/minimill).
- Include all energy inputs: coal/coke for blast furnaces, electricity for EAF, natural gas for reheating, etc. Report as total primary energy per ton of crude steel.
- The EAF share of US production rose from ~38% (1990) to ~70% (2020). EAF is ~60-70% less energy-intensive per ton than BOF. So much of the "efficiency improvement" is actually a structural shift (closing old blast furnaces, building minimills), not making the same process more efficient.

## Output Format

### US Steel Production Energy Intensity

| Year | Value | Notes |
|------|-------|-------|

**Unit:** million BTU per short ton of crude steel (or GJ per metric tonne — specify which)
**Source:** [AISI / EIA MECS / derived]
**Coverage:** All US steel production (BOF + EAF combined)
**Confidence:** medium (MECS years are high confidence; interpolated years are medium)

### EAF Share of US Steel Production (supplemental)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** percentage of total US crude steel production from electric arc furnaces
**Source:** AISI / World Steel Association / USGS
**Confidence:** high

## Data Gaps

- EIA MECS is only every 4 years. Between MECS years, energy intensity must be interpolated or sourced from AISI (which may be members-only data).
- Pre-1990 data available but less critical (primary window is 1990-2020).
- The BOF→EAF structural shift complicates interpretation: the "efficiency improvement" is partly compositional, not technological. Note this clearly.

## Methodology Notes

- Energy intensity in steel has two components:
  1. **Within-process efficiency** (making the same type of furnace use less energy): modest gains, ~10-15% per process since 1990.
  2. **Structural shift** (replacing BOF with EAF): the dominant factor. EAF uses scrap metal (already reduced iron) so avoids the most energy-intensive step.
- Our metric combines both. That's correct for measuring "does the country use less energy to make steel?" but overstates "did the technology get more efficient?"
- BOF: ~20-25 million BTU per ton. EAF: ~8-12 million BTU per ton. As EAF share rose from 38% to 70%, the weighted average fell substantially.

## What "Good Data" Looks Like

- 1990: ~18-20 million BTU per short ton (weighted average, reflecting ~38% EAF)
- 2000: ~15-17 million BTU per short ton (~47% EAF)
- 2010: ~13-15 million BTU per short ton (~61% EAF)
- 2020: ~11-13 million BTU per short ton (~70% EAF)
- Total improvement: roughly 35-40% reduction in energy per ton over 30 years.
