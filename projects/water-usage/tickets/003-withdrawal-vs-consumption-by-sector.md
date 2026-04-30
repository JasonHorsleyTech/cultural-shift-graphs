# Withdrawal vs Consumption Ratios by Sector

## What to research

For each major water-use sector, determine what fraction of withdrawn water is **consumed** (evaporated, transpired, incorporated into products) vs **returned** to the water source after use.

This is the core insight of the project: withdrawal numbers are misleading because different sectors return vastly different amounts. Thermoelectric power "uses" 41% of US water but consumes only ~3%. Agriculture "uses" 37% but actually consumes most of what it takes.

## Target data

For each USGS sector, find:
- **Withdrawal** (Bgal/day) — from ticket 001/002
- **Consumptive use** (Bgal/day) — the portion not returned
- **Return flow** (Bgal/day) — the portion returned to surface/groundwater
- **Consumption ratio** (%) — consumptive use / withdrawal

Use the most recent year with complete data (likely 2015 or 2010).

## Data source hierarchy

1. **USGS reports on consumptive use** — The USGS has published consumptive-use estimates in some circulars, though not consistently for all years. Check Circular 1441 (2015) and Circular 1344 (2005).
2. **USGS Scientific Investigations Reports** — SIR 2019-5103 specifically covers thermoelectric water consumption.
3. **Kenny et al. (2009)** — USGS methodology papers on estimating consumptive use.
4. **EPA and state-level consumptive use reports** — Some states track consumption separately from withdrawal.

## Key ratios to verify (from initial research)

These came from broad web searches — verify against primary USGS sources:

| Sector | Consumption Rate (approx) |
|--------|--------------------------|
| Thermoelectric (once-through) | ~1% |
| Thermoelectric (recirculating) | ~50-60% |
| Thermoelectric (blended average) | ~3% |
| Irrigation | ~60-75% |
| Public supply | ~20-30% |
| Industrial | ~10-15% |
| Mining | ~25-30% |
| Livestock | ~60-80% |
| Aquaculture | ~1-3% |
| Domestic (self-supplied) | ~20-30% |

## Output format

```
| Sector | Withdrawal (Bgal/day) | Consumptive Use (Bgal/day) | Return Flow (Bgal/day) | Consumption Rate (%) | Data Year | Source |
```

Include a note on the blended thermoelectric number — the shift from once-through to recirculating cooling over time changes the aggregate consumption rate even as total withdrawal drops.

## Why this matters for the graph

Graph 2 ("Where does your water go?") should show paired bars — withdrawal vs consumption — for each sector. The visual gap between the two bars IS the recycling story. Thermoelectric's bars will be dramatically different; irrigation's will be close together.
