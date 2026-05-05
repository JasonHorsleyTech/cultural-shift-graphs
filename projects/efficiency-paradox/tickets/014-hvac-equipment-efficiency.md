# Home HVAC: Equipment Efficiency Trends 1990–2022

## What to Research

The energy efficiency of residential heating and cooling equipment over time — both new equipment ratings and estimates of the installed stock efficiency. Annual or periodic data, 1990–2022.

This is the **efficiency metric** for the home HVAC domain.

## Where to Look

1. **Primary (cooling):** DOE/ENERGY STAR data on minimum SEER standards and typical SEER of new equipment shipped:
   - Pre-2006 minimum: SEER 10
   - 2006 minimum: SEER 13
   - 2015 minimum: SEER 14 (in South/Southwest regions)
   - 2023 minimum: SEER2 15 (new metric)
   - Typical new units shipped: track from AHRI (Air-Conditioning, Heating, and Refrigeration Institute) shipment data.
2. **Primary (heating):** AFUE (Annual Fuel Utilization Efficiency) for furnaces:
   - Pre-1992 minimum: 78% AFUE
   - 1992 minimum: 78% AFUE (codified)
   - 2015 minimum: 80% AFUE
   - Typical new units: 80-98% AFUE depending on type (condensing vs. non-condensing)
3. **Installed stock average:** EIA RECS survey data (1993, 1997, 2001, 2005, 2009, 2015, 2020) reports age and type of equipment in use, from which stock-average efficiency can be inferred.
4. **Building envelope:** EIA RECS also reports insulation levels, window types, air infiltration. Average R-value of walls/attics has improved.

## Scope

- Focus on central systems (central AC + forced-air furnace or heat pump), which cover ~75% of US homes.
- Include both cooling (SEER) and heating (AFUE or HSPF for heat pumps) since both contribute to total HVAC energy.
- The "installed stock" efficiency lags new equipment sales by 15-20 years (equipment lifetime).

## Output Format

### Minimum Federal SEER Standard (Cooling)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** SEER (Seasonal Energy Efficiency Ratio, BTU/Wh)
**Source:** DOE appliance standards rulemakings
**Confidence:** high (regulatory values are exact)

### Average SEER of New Central AC Units Shipped

| Year | Value | Notes |
|------|-------|-------|

**Unit:** SEER
**Source:** AHRI shipment-weighted data or DOE rulemaking TSD (Technical Support Document)
**Confidence:** medium (derived from shipment mix)

### Estimated Stock-Average Cooling Efficiency

| Year | Value | Notes |
|------|-------|-------|

**Unit:** SEER (or EER — specify)
**Source:** EIA RECS (for survey years) or DOE stock models
**Confidence:** medium (modeled from equipment age distribution)

### Average Furnace AFUE (New Units)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** AFUE percentage
**Source:** AHRI / DOE rulemaking data
**Confidence:** medium

## Data Gaps

- Stock-average SEER is only available for RECS survey years (every 4-5 years). Interpolation needed.
- Pre-1990 stock efficiency data is very rough.
- Heat pump efficiency (HSPF/COP) growing in importance but complicates aggregation.

## Methodology Notes

- SEER is measured under lab conditions and may not reflect real-world performance (especially in extreme climates or with poor ductwork). Real-world cooling energy is 10-30% higher than SEER would predict.
- The relevant metric for our purposes is whatever correlates consistently with actual energy use over time. If SEER is the consistent metric available, use it — even if absolute values are optimistic.

## What "Good Data" Looks Like

- Minimum SEER: 10 (pre-2006) → 13 (2006) → 14 (2015 in South). Clear step functions.
- Average new SEER: ~10-11 (early 1990s) → ~14-15 (2020). Smooth upward trend, pulled by both standards and voluntary upgrades.
- Stock average SEER: ~9-10 (1990) → ~12-13 (2020). Slower improvement due to 15-year turnover.
- AFUE: relatively flat (most homes have 80% AFUE non-condensing furnaces). Condensing furnaces (95%+) gaining market share but still minority.
