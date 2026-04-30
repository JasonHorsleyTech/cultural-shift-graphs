# Ticket 036: Historical Famine Mortality Curves

## What to research

How does famine actually kill, and how quickly? Historical famines provide the calibration data for the starvation component of every scenario.

## Specific famines to cover

For each: population, food deficit magnitude, mortality, timeline, causes of death.

1. **Irish Great Famine (1845-1852):**
   - Population: 8.2M pre-famine → 6.6M by 1851
   - 1M died, ~1M emigrated
   - Food deficit: potato blight destroyed primary caloric source
   - But Ireland was EXPORTING food during the famine (political failure)
   - Year-by-year mortality data available
   - Cause of death: starvation directly (~20%), disease (typhus, cholera, dysentery ~80%)

2. **Chinese Great Leap Forward (1959-1961):**
   - Deaths: 15-55M (range is enormous — Mao government suppressed data)
   - Largest famine in human history by absolute numbers
   - Cause: forced collectivization destroyed agricultural productivity
   - Key lesson: government policy can be worse than the natural disaster

3. **Bengal famine (1943):**
   - Deaths: 2-3M out of 60M population
   - Cause: combined wartime disruption + policy failure (Amartya Sen's analysis)
   - Key lesson: famines are rarely just about food quantity — distribution matters

4. **Soviet famine / Holodomor (1932-33):**
   - Deaths: 5-8M (Ukraine: 3-5M)
   - State-created famine through grain requisition
   - Year-by-year mortality data available for some regions

5. **North Korean famine (1994-1998):**
   - Deaths: 240K-3.5M (range reflects data quality)
   - Cause: agricultural system collapse + loss of Soviet aid
   - Modern, somewhat comparable to post-collapse scenarios

6. **Siege of Leningrad (1941-44):** (Cross-reference with ticket 006)
   - ~1.5M died out of ~3M
   - Month-by-month mortality data exists
   - Pure starvation in a modern urban population — closest analogue to post-collapse urban die-off

7. **Key patterns across famines:**
   - Famine mortality curve shape: slow start → acceleration → peak → decline
   - Disease kills more than starvation directly (typically 3-5x more)
   - Young children and elderly die first
   - Men die faster than women (higher caloric needs)
   - Urban vs. rural differential

## Where to look

1. **Sen, Amartya — "Poverty and Famines"** — famine economics framework
2. **Ó Gráda, Cormac — "Famine: A Short History"** — comparative famine analysis
3. **Dikötter, Frank — "Mao's Great Famine"** — Chinese famine data
4. **Simmons, Cynthia & Perlina, Nina — "Writing the Siege of Leningrad"** — Leningrad mortality data
5. **Hionidou, Violetta** — Greek famine of WWII occupation
6. **WHO / FAO** — famine mortality estimation frameworks

## Result format

Key Data Points for each famine:
- `population` — pre-famine
- `deaths` — total with range
- `mortality_pct`
- `food_deficit_pct` — how much food production dropped (if known)
- `duration_months`
- `disease_to_starvation_ratio` — fraction of deaths from disease vs. direct starvation

**Mortality Timeline** for Leningrad (best month-by-month data) as calibration curve.

## What good data looks like

- Leningrad is the key calibration: month-by-month mortality in a modern urban population under siege/starvation
- The critical insight is that DISEASE kills more than starvation — every scenario must account for this
- Notes the pattern: children and elderly die first, urban before rural, men before women
- Provides the mortality-per-month rate at different levels of food deficit (50% reduction, 75% reduction, 90% reduction)
