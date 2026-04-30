# Ticket 029: Volcanic Winter — Climate and Crop Impact from VEI-8

## What to research

A Yellowstone VEI-8 eruption injects massive amounts of sulfur aerosols and ash into the stratosphere, causing global cooling. How severe is the volcanic winter, and what does it do to food production?

## Specific data needed

1. **Volcanic winter climate modeling:**
   - Temperature drop from VEI-8 eruption: global and US-specific
   - Duration: how many years until temperatures normalize?
   - Comparison to nuclear winter: similar mechanism (stratospheric aerosols blocking sunlight)
   - Sulfur aerosol vs. soot: different optical properties, different cooling patterns

2. **Toba catastrophe analogue:**
   - Toba eruption (~74,000 years ago) — VEI-8
   - Estimated cooling: 3-5°C for years? (contested)
   - "Toba catastrophe theory" — did it nearly drive humans to extinction? (Genetic bottleneck evidence)
   - Current scientific consensus on Toba's population impact (increasingly skeptical of near-extinction)

3. **1816 "Year Without a Summer" (Tambora, VEI-7):**
   - Tambora (1815) was VEI-7 — one step below VEI-8
   - 0.4-0.7°C global cooling
   - Crop failures in Europe and North America
   - Famine, disease, social disruption
   - Scale up: VEI-8 would be ~10x worse

4. **US agricultural impact:**
   - Midwest breadbasket is within the heavy ash zone — buried under cm to meters of ash
   - Even areas outside ash zone face cooling, reduced growing season
   - How many years until ash-covered land can be farmed again?
   - Crop yield reduction by temperature decrease (degrees → yield loss curve)

5. **Combined effects on food supply:**
   - Ash burial of Midwest: immediate loss of US agricultural heartland
   - Volcanic winter: reduced yields everywhere else
   - Timeline: year 1 (near-total crop failure?), year 3 (partial recovery?), year 5+?
   - How does this compare to nuclear winter? (Probably similar severity, different geographic pattern)

## Where to look

1. **Self, Stephen & Rampino, Michael** — VEI-8 climate effects research
2. **Robock, Alan** — volcanic winter modeling (same researcher who models nuclear winter)
3. **Ambrose, Stanley** — Toba catastrophe theory
4. **Oppenheimer, Clive — "Eruptions that Shook the World"**
5. **1816 "Year Without a Summer" literature** — Stommel & Stommel, others
6. **USGS / Global Volcanism Program** — eruption databases

## Result format

**Mortality Timeline** from day 7 (continuing from ticket 028) through year 10:

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

Key Data Points:
- `temperature_change_c` for years 1-10
- `us_crop_production_pct` for years 1-10 (as % of baseline)
- `midwest_farmland_recovery_years`

## What good data looks like

- Uses Tambora/1816 as the empirical anchor, scaled up for VEI-8
- Notes the Toba debate honestly (no consensus on whether it caused near-extinction)
- Agricultural impact should be severe but potentially less extreme than nuclear winter (ash blocks sunlight less effectively than soot, and recovery may be faster)
- Final mortality probably 40-80% over 5 years — driven primarily by famine
