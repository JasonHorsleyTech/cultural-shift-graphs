# Refrigeration: Household Refrigeration Electricity Consumption 1978–2022

## What to Research

Total electricity consumed by refrigerators and freezers per US household, from 1978–2022. This is the **consumption metric** for the refrigeration domain — did households actually use less electricity for refrigeration as units got more efficient?

## Where to Look

1. **Primary:** EIA Residential Energy Consumption Survey (RECS) — survey years: 1978(?), 1980, 1984, 1987, 1990, 1993, 1997, 2001, 2005, 2009, 2015, 2020. Reports electricity for refrigeration as an end use.
2. **Secondary:** LBNL Residential Electricity End-Use studies — model total refrigeration electricity from stock models (number of units × age distribution × UEC by vintage).
3. **Tertiary:** EIA Annual Energy Outlook — has modeled annual refrigeration electricity.
4. **For number of units per household:** RECS reports how many refrigerators/freezers each household has (many have 2+ including garage/basement units).

## Scope

- **Electricity for ALL refrigeration units per household:** primary fridge + second fridge + standalone freezer.
- Per-household basis (the natural unit for an appliance tied to homes, not individuals).
- The story: even though each new fridge uses ~75% less energy than a 1972 model, households have:
  - More units (second fridges, wine coolers, mini-fridges)
  - Larger units
  - Older units still running (pre-standard models lasted 20-30 years)
  
  Despite all this, total refrigeration electricity per household still dropped significantly — because the efficiency gains were so enormous that they overwhelmed the growth in number/size of units.

## Output Format

### Average Household Refrigeration Electricity

| Year | Value | Notes |
|------|-------|-------|

**Unit:** kWh per household per year (all refrigerators + freezers in the home)
**Source:** EIA RECS [year] / LBNL stock model / EIA AEO
**Coverage:** All US occupied housing units
**Confidence:** high for RECS survey years; medium for modeled/interpolated years

### Average Number of Refrigeration Units per Household

| Year | Value | Notes |
|------|-------|-------|

**Unit:** units per household (including standalone freezers)
**Source:** EIA RECS
**Confidence:** high (for survey years)

### Total US Residential Refrigeration Electricity

| Year | Value | Notes |
|------|-------|-------|

**Unit:** TWh per year (or billion kWh)
**Source:** EIA AEO / RECS-derived
**Confidence:** medium

## Data Gaps

- RECS survey years only — no annual data. Mark interpolated values.
- Early RECS (1978-1984) may not break out refrigeration separately. Check.
- The number of households with multiple refrigerators rose over time — RECS tracks this.
- Standalone freezer ownership declined somewhat (from ~35% to ~30% of homes). RECS tracks this too.

## Methodology Notes

- Stock modeling: Average household refrigeration electricity depends on (1) number of units, (2) age distribution of units (old pre-standard units use far more than new ones), (3) size distribution.
- Key insight: even though new fridges use 400 kWh/year (2020), many homes still had pre-2001 units running at 800-1200 kWh/year. The stock average lags the new-unit efficiency by 10-15 years.
- By 2020, most pre-1993 units (the really bad ones at 1200+ kWh/yr) have finally died. The stock is "catching up" to the standards.

## What "Good Data" Looks Like

- 1978-1980: ~1,600-1,800 kWh/household/year for all refrigeration
- 1990: ~1,400-1,500 kWh/household
- 2001: ~1,200-1,300 kWh/household
- 2009: ~1,000-1,100 kWh/household
- 2015: ~800-900 kWh/household
- 2020: ~700-800 kWh/household
- Net reduction: ~50-55% from peak to 2020. This is one of the clearest "efficiency worked" stories — per-household consumption genuinely and substantially declined.
- EDC should be high (perhaps 60-80%) — the efficiency gains mostly showed up as real savings.
