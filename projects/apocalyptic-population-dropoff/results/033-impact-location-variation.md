# Result: Asteroid Impact — Location Variation and Probability

## Summary

Impact location is arguably the single most important variable in asteroid mortality modeling. A 10 km asteroid striking North America directly would kill essentially the entire US population within hours via blast, firestorm, and ejecta. The same asteroid hitting the far side of the planet (e.g., central Asia) kills 70-95% of Americans over 1-5 years via impact winter and famine. An ocean impact (71% probability) splits the difference — producing devastating mega-tsunamis killing tens of millions in coastal areas plus a less severe but still catastrophic impact winter. Critically, only ~13% of Earth's surface (hydrocarbon-rich sedimentary rock) would produce Chicxulub-level mass extinction soot if hit; ocean and most land impacts produce milder climate effects. For the graph, the far-side land impact is the most interesting curve shape; a direct hit is just a vertical line to near-zero.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| chicxulub_class_frequency | 100000000 | 80000000 | 120000000 | years | per event | Chapman & Morrison 1994, Ord 2020 | high |
| chicxulub_century_probability | 0.00000067 | 0.0000005 | 0.000001 | probability | per century | Ord 2020 (The Precipice) | high |
| 1km_impactor_frequency | 500000 | 440000 | 700000 | years | per event | Chapman 2004, Wikipedia impact event tables | high |
| 1_to_10km_century_probability | 0.00083 | 0.0005 | 0.001 | probability | per century | Ord 2020 | medium |
| earth_surface_pct_ocean | 71 | 70 | 72 | pct_surface | current | standard | high |
| earth_surface_pct_mass_extinction_capable | 13 | 10 | 15 | pct_surface | current | Kaiho & Oshima 2017 (Scientific Reports) | medium |
| us_coastal_county_population_pct | 39 | 38 | 40 | pct | current | NOAA | high |
| direct_hit_blast_radius_lethal | 1500 | 900 | 1800 | km | hours | Chicxulub modeling, NSF | medium |
| direct_hit_firestorm_radius | 1600 | 1000 | 2000 | km | hours | Chicxulub ejecta re-entry modeling | medium |
| direct_hit_ejecta_coverage | 10000000 | 8000000 | 12000000 | sq_km | hours | Chicxulub studies (~4M sq miles) | medium |
| ocean_impact_tsunami_height_at_coast | 120 | 50 | 400 | meters | hours | Ward & Asphaug 2003 | medium |
| ocean_impact_cooling | 3 | 2 | 4 | degrees_c | year 1-3 | Kaiho & Oshima 2017 | medium |
| hydrocarbon_land_impact_cooling | 9 | 8 | 11 | degrees_c | year 1-3 | Kaiho & Oshima 2017 | medium |
| generic_land_impact_cooling | 6 | 4 | 8 | degrees_c | year 1-3 | Impact winter modeling composite | low |
| impact_winter_dust_atmospheric_lifetime | 6 | 4 | 8 | years | post-impact | Impact winter literature | medium |
| impact_winter_soot_atmospheric_lifetime | 10 | 8 | 12 | years | post-impact | Impact winter literature | medium |
| neo_surveyor_launch | 2027 | 2027 | 2028 | year | planned | NASA/JPL | high |
| current_140m_neo_detection_completeness | 42 | 40 | 45 | pct | 2025-2026 | NASA CNEOS | high |
| current_1km_neo_detection_completeness | 95 | 90 | 97 | pct | 2025-2026 | NASA PDCO | high |
| typical_warning_time_large_neo | 10 | 1 | 30 | years | detection to impact | NASA PDC exercises | medium |
| 1km_impact_crop_reduction | 50 | 20 | 60 | pct | year 1-3 | Robertson 2023 (NASA), composite | medium |
| 1km_impact_cooling | 5 | 3 | 8 | degrees_c | year 1-2 | Impact winter modeling | medium |

## Location Scenario Comparison

| scenario | immediate_us_deaths_pct | impact_winter_severity | total_5yr_mortality_pct | probability_relative |
|---|---|---|---|---|
| North America direct hit | 95-100 | extreme (moot — blast kills first) | 98-100 | ~7% of surface area |
| Central/South America hit | 30-60 (blast/ejecta/firestorm reach) | severe (8-11C if hydrocarbon rock) | 80-95 | ~4% of surface |
| Europe/Africa hit | 1-5 (minimal direct effects) | severe to extreme | 70-90 | ~12% of surface |
| Asia/far-side land hit | <1 (no direct effects) | severe (6-11C depending on geology) | 70-90 | ~6% of surface |
| Deep ocean impact | 5-15 (mega-tsunami on coasts) | moderate (2-4C cooling) | 40-70 | ~71% of surface |
| Ocean near US coast | 15-30 (mega-tsunami) | moderate (2-4C cooling) | 50-75 | subset of ocean |

**Notes on the table above:**
- "Probability_relative" is the approximate fraction of Earth's surface each scenario represents (not annual probability).
- Total 5-year mortality includes famine, infrastructure collapse, disease, and social breakdown — not just direct effects and impact winter crop loss.
- The hydrocarbon-rich land scenario (producing Chicxulub-level soot) applies to only ~13% of Earth's land surface, mostly coastal margins with thick organic sediments.

## Ocean Impact Details

An ocean impact (the most likely scenario at 71% of Earth's surface) produces fundamentally different effects than land:

1. **Mega-tsunami**: Ward & Asphaug (2003) modeled a 1.1 km asteroid in the mid-Atlantic producing 100-120m waves on the US East Coast within 2 hours. A 10 km impactor would produce waves potentially 200-400m high, penetrating miles inland. The impact cavity would be ~18 km across, reaching the seafloor at ~5 km depth.
2. **Reduced climate forcing**: Ocean impacts eject primarily water vapor rather than silicate dust and soot. Water vapor produces a greenhouse effect (warming), partially offsetting cooling from any rock dust. Kaiho & Oshima (2017) found ocean impacts produce only 2-4C cooling vs. 8-11C for hydrocarbon-rich land impacts.
3. **US coastal exposure**: 39% of the US population (~131M people) lives in coastal counties. A 10 km ocean impact anywhere in the Atlantic or Pacific would generate devastating tsunamis for both coasts, though wave height attenuates with distance.
4. **Net result**: Ocean impacts are significantly less catastrophic than land impacts for long-term survival, but the tsunami risk to coastal populations is enormous and immediate.

## Detection and Warning

- **Current capability**: NASA's Planetary Defense Coordination Office (PDCO) has catalogued ~95% of NEOs >1 km diameter and ~42% of those >140 m. A 10 km object would almost certainly already be catalogued.
- **Warning time**: For known objects, warning could be years to decades. The 2025 Planetary Defense Conference exercise modeled a scenario with 16.5 years of warning. For a Chicxulub-class object, its large size means detection probability is very high.
- **NEO Surveyor**: Space-based infrared telescope launching 2027-2028, designed to reach 90% completeness for >140 m NEOs within 10 years of operation.
- **DART mission success (2022)**: Demonstrated kinetic deflection works — changed Dimorphos's orbit by 33 minutes. With years of warning, deflection of even a large asteroid is theoretically possible.
- **Practical implications for the graph**: For a 10 km impactor, we'd likely have years of warning. This could allow evacuation of blast zones (if location is predicted) but cannot prevent impact winter. For the graph, warning time doesn't meaningfully change the long-term survival curve — it might save some lives in the direct-hit scenario but has no effect on famine mortality.

## 1 km Impactor Comparison

A 1 km asteroid is ~1,000x less energetic than a 10 km impactor but still civilization-threatening:

- **Impact energy**: ~100,000 megatons TNT (vs. ~100,000,000 megatons for 10 km)
- **Impact winter**: 3-8C cooling for 2-5 years, with dust in atmosphere for ~6 years and soot for ~10 years
- **Crop failure**: ~50% reduction in plant productivity for 1-3 years; 20-30% reduction in photosynthesis in terrestrial and marine ecosystems
- **Frequency**: ~1 per 500,000-700,000 years (vs. 1 per 100M years for 10 km)
- **Mortality estimate**: Probably 10-40% US mortality over 5 years (vs. 70-98% for 10 km), heavily dependent on location and food stockpile management
- **Key difference**: A 1 km impact is a severe multi-year crisis but civilization could plausibly survive with organized response. A 10 km impact is an existential threat regardless of response.
- **Graph recommendation**: The ticket correctly notes this is the more "interesting" case — more likely and with a genuine survival question rather than near-certain catastrophe. However, modeling it as a separate curve would require its own set of tickets. The current graph should note the 1 km comparison in annotations.

## Data Gaps

- **Tsunami attenuation modeling for 10 km impactor**: Ward & Asphaug's detailed modeling used a 1.1 km asteroid. Scaling to 10 km is extrapolation — the physics may not scale linearly due to seafloor interaction and cavity dynamics at that scale.
- **Compound effects of ocean impact**: The combination of mega-tsunami + moderate impact winter + infrastructure destruction from coastal flooding is not well-modeled as a combined scenario. Each effect is studied separately.
- **Social response to warning**: If humanity has 10+ years of warning, the adaptive response (food stockpiling, bunker construction, population redistribution) could dramatically change the curve. No model incorporates this.
- **Location-specific soot production**: The 13% figure for hydrocarbon-rich surface area is from one 2017 study. The exact mapping of which locations produce mass-extinction-level soot is approximate and depends on assumptions about sediment depth and composition.
- **1 km impactor mortality**: No comprehensive model exists for global mortality from a 1 km impact. The 10-40% range for the US is extrapolation from crop failure models and historical famine mortality, not direct modeling.

## Sources

- Kaiho, K. & Oshima, N. (2017). "Site of asteroid impact changed the history of life on Earth: the low probability of mass extinction." *Scientific Reports*, 7, 14855. https://www.nature.com/articles/s41598-017-14199-x
- Ward, S.N. & Asphaug, E. (2003). "Asteroid impact tsunami of 2880 March 16." *Geophysical Journal International*, 153(3), F6-F10. https://academic.oup.com/gji/article/153/3/F6/2122672
- Range, M.M. et al. (2022). "The Chicxulub Impact Produced a Powerful Global Tsunami." *AGU Advances*, 3(5). https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021AV000627
- Chapman, C.R. (2004). "The hazard of near-Earth asteroid impacts on earth." *Earth and Planetary Science Letters*, 222(1), 1-15. https://www2.boulder.swri.edu/~cchapman/crcepsl.pdf
- Collins, G.S., Melosh, H.J. & Marcus, R.A. (2005). "Earth Impact Effects Program." *Meteoritics & Planetary Science*, 40(6), 817-840. https://impact.ese.ic.ac.uk/ImpactEarth/ImpactEffects/effects.pdf
- Rumpf, C.M. et al. (2017). "Asteroid impact effects and their immediate hazards for human populations." *Geophysical Research Letters*, 44(8), 3433-3440. https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL073191
- Ord, T. (2020). *The Precipice: Existential Risk and the Future of Humanity*. Hachette Books.
- Chapman, C.R. & Morrison, D. (1994). "Impacts on the Earth by asteroids and comets: assessing the hazard." *Nature*, 367, 33-40. https://www.nature.com/articles/367033a0
- NOAA. "Coastal Population." https://www.datacenterresearch.org/reports_analysis/the-coastal-index/
- NASA Planetary Defense Coordination Office. https://science.nasa.gov/planetary-defense/
- NASA CNEOS. https://cneos.jpl.nasa.gov/
- Robertson, D. (2023). "Simulating Kilometer-Size Asteroid Impacts on Earth." NASA Technical Reports. https://ntrs.nasa.gov/api/citations/20230015987/downloads/SC23%20Robertson.pdf
- NSF. "A moment that changed Earth." https://www.nsf.gov/science-matters/moment-changed-earth

<!-- COMPLETE -->
