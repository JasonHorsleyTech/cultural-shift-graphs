# Ticket 024: Historical Pandemic Mortality Curves

## What to research

The shape of mortality curves from historical pandemics — how quickly did people die, when did it peak, when did it stabilize? These are the best calibration data for the pandemic scenario curve.

## Specific pandemics to cover

1. **1918 influenza ("Spanish flu"):**
   - Global deaths: 50-100M (range). US deaths: ~675K
   - Three waves over ~18 months. Week-by-week US mortality data exists
   - Case fatality rate: ~2-3%
   - Key feature: healthy young adults died disproportionately (cytokine storm)
   - Infrastructure impact: minimal — society strained but didn't collapse

2. **Black Death (1347-1353):**
   - European mortality: 30-60% of population
   - Spread over years as it moved geographically
   - CFR: ~60-90% for bubonic, ~100% for pneumonic
   - Social/economic collapse was real: labor shortages, feudal system disruption
   - Key feature: this IS a civilizational disruption pandemic

3. **Smallpox in the Americas (16th-19th century):**
   - Indigenous population decline: 80-95% over ~150 years
   - Not a single event — repeated epidemics in immunologically naive populations
   - Key feature: the closest to "what happens to a population with zero immunity"

4. **Plague of Justinian (541-549):**
   - Eastern Roman Empire: estimated 25-50% mortality
   - Contributed to imperial decline
   - Less well-documented but important as a civilizational-impact pandemic

5. **COVID-19 (2020-2023) for comparison:**
   - US deaths: ~1.1M (CDC)
   - CFR: ~1% overall, much higher for elderly
   - Infrastructure strained but did not collapse
   - Key lesson: even with modern medicine, a pandemic with >5% CFR would overwhelm everything

## Where to look

1. **Taubenberger & Morens** — 1918 flu studies
2. **Benedictow, Ole — "The Black Death 1346-1353"**
3. **Crosby, Alfred — "America's Forgotten Pandemic" (1918 flu)**
4. **CDC historical mortality data** — weekly/monthly US mortality 1918-1920
5. **Livi-Bacci, Massimo** — historical demography
6. **Cook, Noble David** — "Born to Die" (disease in Americas)

## Result format

**Mortality Timeline** for the 1918 flu (best data) — week-by-week US mortality as template for what a pandemic curve looks like.

Key Data Points for each pandemic:
- `total_mortality_pct`
- `cfr` (case fatality rate)
- `duration_months` (onset to end of major mortality)
- `infrastructure_impact` (none/strained/collapsed)
- `time_to_peak_mortality_months`
- `recovery_time_years`

## What good data looks like

- 1918 flu has week-by-week US data — this is the gold standard shape for a pandemic curve
- Black Death is the calibration for "what happens at 50%+ CFR in a pre-modern society"
- Explicitly identifies the threshold where a pandemic goes from "medical crisis" to "civilizational collapse" (probably CFR >10% sustained over months)
- Notes that NO modern pandemic has caused civilizational collapse — our scenario is extrapolation
