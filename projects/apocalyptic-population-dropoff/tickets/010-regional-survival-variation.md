# Ticket 010: Regional Survival Variation — Urban vs. Rural vs. Coastal

## What to research

Survival probability varies by orders of magnitude depending on location. Quantify the difference between population tiers to calibrate the national average curve.

## Specific data needed

1. **Urban core (NYC, LA, Chicago, etc.):**
   - Population density, food production capacity (zero), water source vulnerability
   - Evacuation feasibility (can 8M people walk out of NYC? How long does it take?)
   - Expected mortality rate in a grid-down scenario: timeframe and percentage
   - Historical: what happened to besieged cities (Leningrad, Sarajevo) — death rates

2. **Suburban:**
   - Population in suburbs (~175M Americans)
   - Some yard space but limited farming potential
   - Car-dependent infrastructure — fuel exhaustion timeline
   - Expected: intermediate mortality, dependent on proximity to rural areas

3. **Small town / rural:**
   - Population in areas <10K people
   - Access to farmland, well water, game
   - Self-sufficiency indicators (gardens, livestock, hunting culture)
   - Expected: highest survival rates, 50-80%?

4. **Coastal communities:**
   - Fishing as caloric supplement — how many calories can coastal fishing provide?
   - US coastline population
   - Historical: fishing communities as famine refuges

5. **Military installations:**
   - Number of active military bases, population (active + dependents)
   - Supply reserves (30-90 days typically)
   - Organized defense and structure
   - Expected: very high short-term survival, then integration with surrounding communities

6. **Special communities:**
   - Mormon food storage culture (~7M LDS members in US, cultural tradition of 1-year supply)
   - Amish/Mennonite (~380K, already pre-industrial agriculture)
   - Prepper population estimates

## Where to look

1. **Census Bureau** — population density by county, urban/rural classification
2. **USDA ERS** — rural-urban continuum codes
3. **DoD** — military installation data
4. **NOAA / NMFS** — commercial and recreational fishing data
5. **Pew Research** — LDS population estimates
6. **Academic disaster studies** — urban evacuation modeling

## Result format

Key Data Points table. Key parameter: `estimated_survival_pct_1year` for each population tier.

Also include a **population distribution** showing how many Americans fall into each tier:
- Urban core (>50K/sq mi): X million
- Urban (5-50K/sq mi): X million
- Suburban (1-5K/sq mi): X million
- Small town (100-1K/sq mi): X million
- Rural (<100/sq mi): X million

## What good data looks like

- Population tier sizes are sourced from Census, not estimated
- Survival percentages acknowledge massive uncertainty but provide bounded ranges
- Explains what drives the difference (water access, food production potential, population density)
- The weighted average across tiers should be roughly consistent with the national survival estimates from other tickets
