# Ticket 033: Asteroid Impact — Location Variation and Probability

## What to research

The impact location dramatically changes the survival curve. Map out how different impact locations (ocean vs. land, hemisphere, distance from US) affect US mortality. Also: how likely is this?

## Specific data needed

1. **Ocean impact (71% probability — most of Earth is ocean):**
   - Tsunami modeling: mega-tsunami height and coastal penetration
   - US coastal population at risk
   - Does ocean impact produce less dust/soot than land impact? (Different vaporized material)
   - Impact winter: still severe but potentially less extreme than land impact

2. **Land impact scenarios:**
   - North America direct hit: US population essentially wiped out by blast/ejecta/firestorms
   - South America / Europe: intermediate distance — ejecta heating reaches US?
   - Asia / far side: US affected only by impact winter and global effects
   - How does distance affect the timeline of effects reaching the US?

3. **Detection and warning:**
   - NASA Planetary Defense / CNEOS current capability
   - How much warning would we have? (Days to years depending on trajectory)
   - Could evacuation or preparation meaningfully change the curve? (For far-side impact, maybe; for near-side, no)

4. **Probability:**
   - Chicxulub-class (10 km) impact frequency: ~100 million years
   - 1 km impactor (still catastrophic): ~500,000 years
   - Current known near-Earth objects of concern
   - Toby Ord's probability estimate for next century

5. **Smaller impactor comparison (1 km):**
   - Would a 1 km asteroid end civilization? (Maybe not — "merely" devastating)
   - Energy: ~1000x less than 10 km impactor
   - Impact winter: moderate (years of cooling, not darkness)
   - US mortality: maybe 20-50% instead of 70-95%
   - Should we model this as a separate, more likely scenario?

## Where to look

1. **NASA CNEOS / PDCO (Planetary Defense Coordination Office)**
2. **Collins et al. — Earth Impact Effects Program** — online calculator for different impact parameters
3. **Ward & Asphaug (2000)** — asteroid tsunami modeling
4. **Stokes et al. (2003)** — near-Earth object survey
5. **Ord, Toby — "The Precipice"** — impact probability estimates
6. **National Research Council (2010) — "Defending Planet Earth"**

## Result format

Key Data Points table comparing location scenarios:

| scenario | immediate_us_deaths_pct | impact_winter_severity | total_5yr_mortality_pct | probability_relative |
|---|---|---|---|---|

Also:
- `chicxulub_class_frequency_years`
- `1km_impactor_frequency_years`
- `detection_warning_time_range`

## What good data looks like

- Clearly presents the range: from "US is gone" (direct hit) to "impact winter kills 70-95%" (far side)
- Probability context: this is the rarest scenario by far
- Notes that a 1 km impactor is the more "interesting" case — more likely and not automatically an extinction event
- Graph recommendation: model the far-side 10 km impact as the primary curve (most interesting shape; direct hit is just a vertical line to zero)
