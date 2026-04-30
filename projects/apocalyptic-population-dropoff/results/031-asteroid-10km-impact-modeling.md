# Result: Asteroid Impact — 10 km Impactor Effects Modeling

## Summary

A 10 km (Chicxulub-class) asteroid impact releases ~10²³–10²⁴ joules — roughly 10,000x the world's entire nuclear arsenal. For a North American land impact, the US population is effectively annihilated within hours from blast, ejecta, and firestorms. For a far-side-of-Earth impact, US casualties are delayed but still catastrophic: global ejecta re-entry heats the atmosphere everywhere within hours, and the ensuing impact winter (15–26°C cooling, 2+ years of near-total photosynthesis shutdown) collapses agriculture worldwide. This is the only scenario in the project where >99% US mortality is plausible regardless of impact location — it is fundamentally a mass extinction event, not merely a civilization disruptor.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| impact_energy_joules | 3e23 | 1e23 | 4.2e23 | joules | instant | Schulte et al. 2010 | high |
| impact_energy_megatons | 72000000 | 24000000 | 100000000 | megatons_tnt | instant | Schulte et al. 2010 | high |
| nuclear_arsenal_comparison_factor | 10000 | 5000 | 20000 | multiplier | instant | derived | high |
| crater_diameter_km | 180 | 150 | 200 | km | instant | Schulte et al. 2010 | high |
| seismic_magnitude | 10.5 | 9.0 | 12.4 | mw | instant | Collins et al. 2005 | medium |
| lethal_radius_blast_km | 250 | 200 | 300 | km | hours | Collins et al. 2005 | high |
| lethal_radius_airblast_km | 1350 | 900 | 1800 | km | hours | Kring 2002 / LPI | medium |
| ejecta_heating_lethal_radius_km | 20000 | 15000 | 20000 | km | hours | Robertson et al. 2013 | medium |
| ejecta_thermal_flux_peak | 10 | 5 | 15 | kw_per_m2 | hours | Robertson et al. 2013 | low |
| ejecta_thermal_pulse_duration_hours | 2.5 | 0.5 | 3.0 | hours | hours | Robertson 2013 / Goldin & Melosh 2009 | low |
| tsunami_height_1000km | 540 | 300 | 800 | meters | hours | Range et al. 2022 | medium |
| tsunami_height_10000km | 100 | 50 | 150 | meters | day_1 | Range et al. 2022 | medium |
| soot_injection_tg | 17500 | 15000 | 20000 | tg | days | Wolbach et al. | medium |
| sunlight_blocked_pct | 99 | 95 | 99.9 | pct | months_1-24 | Tabor et al. 2020 | high |
| global_temp_drop_deg_c | 20 | 15 | 26 | degrees_c | year_1-3 | Brugger et al. 2017 / Senel et al. 2023 | medium |
| subfreezing_duration_years | 8 | 3 | 16 | years | year_1-16 | Brugger et al. 2017 | medium |
| photosynthesis_shutdown_years | 2 | 1.5 | 3 | years | year_1-3 | Tabor et al. 2020 / Senel et al. 2023 | medium |
| recovery_time_years | 30 | 15 | 50 | years | decade_scale | Brugger et al. 2017 | low |
| land_surface_burned_pct | 50 | 18 | 70 | pct | days_to_weeks | Robertson et al. 2013 | low |
| ocean_ph_drop | 2 | 0.25 | 2 | ph_units | months | Earth Magazine / Henehan et al. 2019 | medium |
| species_extinction_pct | 75 | 70 | 80 | pct | years | Schulte et al. 2010 | high |

## Mortality Timeline — Variant A: Impact in North America (Land Impact)

If centered on the US heartland, the lethal air blast radius (900–1,800 km) encompasses most of the continental US. Combined with ejecta re-entry heating affecting the entire hemisphere within an hour, survival is near-zero.

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 1 | 75.0 | 60.0 | 90.0 | blast / fireball / ejecta | Collins et al. 2005, Kring 2002 |
| 6 | 95.0 | 85.0 | 99.0 | firestorms / ejecta thermal pulse | Robertson et al. 2013 |
| 24 | 98.0 | 92.0 | 99.5 | firestorms / burns / trauma | Robertson et al. 2013 |
| 168 | 99.0 | 95.0 | 99.8 | burns / trauma / exposure | extrapolation |
| 720 | 99.5 | 97.0 | 99.9 | starvation / exposure / radiation | extrapolation |
| 2160 | 99.7 | 98.0 | 99.95 | starvation / impact winter | Brugger et al. 2017 |
| 8760 | 99.8 | 98.5 | 99.99 | starvation / disease | Brugger et al. 2017, Tabor et al. 2020 |
| 17520 | 99.9 | 99.0 | 99.99 | prolonged impact winter | Brugger et al. 2017 |

**Note:** For a direct North American impact, the distinction between "immediate" and "long-term" casualties is almost academic. The blast/fireball lethal radius alone covers most of the continental US if centered on Kansas. Outlying populations (Alaska, Hawaii, territories) face the global effects described in Variant B.

## Mortality Timeline — Variant B: Impact on Far Side of Earth (e.g., Central Indian Ocean)

The US is shielded from direct blast by Earth's curvature but receives the full force of global secondary effects: ejecta thermal pulse (arrives within 1–2 hours), tsunamis (within 24–48 hours), and impact winter (months to years).

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 1 | 0.5 | 0.1 | 1.0 | ejecta re-entry thermal pulse (exposed populations) | Robertson et al. 2013, Goldin & Melosh 2009 |
| 6 | 3.0 | 1.0 | 8.0 | thermal pulse / wildfires ignited by ejecta | Robertson et al. 2013 |
| 24 | 8.0 | 3.0 | 15.0 | tsunamis hitting US coasts / ongoing fires | Range et al. 2022 |
| 168 | 12.0 | 5.0 | 20.0 | fire / exposure / infrastructure collapse | extrapolation |
| 720 | 25.0 | 15.0 | 40.0 | starvation onset / darkness / cold | Tabor et al. 2020 |
| 2160 | 50.0 | 30.0 | 65.0 | famine / impact winter / disease | Brugger et al. 2017 |
| 4320 | 65.0 | 45.0 | 80.0 | prolonged famine / societal collapse | Brugger et al. 2017, Tabor et al. 2020 |
| 8760 | 80.0 | 55.0 | 90.0 | starvation / cold / violence / disease | Brugger et al. 2017 |
| 17520 | 85.0 | 60.0 | 93.0 | prolonged impact winter / no agriculture | Brugger et al. 2017 |
| 43800 | 88.0 | 65.0 | 95.0 | slow recovery limited by ecosystem destruction | Senel et al. 2023 |
| 87600 | 85.0 | 60.0 | 93.0 | partial recovery as climate stabilizes | Brugger et al. 2017 |

**Note on year 10:** The 10-year figure shows slight improvement over year 5 as sunlight returns to levels supporting limited agriculture (Senel et al. 2023 model shows silicate dust clearing after ~15 years). Survivors who made it through the worst 3–5 years would have begun subsistence farming. The population stabilizes at a drastically reduced level rather than continuing to fall.

## Comparison to Nuclear Winter

The impact winter from a 10 km asteroid is roughly 100x the soot injection and 3–5x the temperature drop of the worst-case nuclear winter (Xia et al. 2022). Nuclear winter models predict 90% crop loss for a few years; impact winter models predict ~100% crop loss for 2+ years with subfreezing temperatures persisting 3–16 years. The mechanisms are similar (stratospheric aerosol blocking sunlight) but the magnitude and duration are categorically different. A nuclear winter is survivable for a significant fraction of humanity with rationing and alternative food sources; a Chicxulub-class impact winter pushes past the threshold where stored food and alternative agriculture can bridge the gap.

## The Ejecta "Broiler Effect" Debate

This is the most uncertain immediate kill mechanism. Robertson et al. (2013) modeled ejecta re-entry producing 5–15 kW/m² of thermal radiation at ground level for 2–3 hours — enough to ignite vegetation globally and kill exposed organisms. Goldin & Melosh (2009) challenged this with a self-shielding model: early-arriving ejecta creates an opaque layer that blocks radiation from later-arriving material, limiting the pulse to ~6 kW/m² for only minutes. The difference matters enormously for Variant B: Robertson's model implies mass casualties globally within hours; Goldin & Melosh's implies most far-side populations survive the thermal pulse itself. This research uses the midpoint but flags the wide uncertainty bands in Variant B's early hours.

## Data Gaps

- **Ejecta thermal pulse intensity is actively debated.** Robertson et al. 2013 vs. Goldin & Melosh 2009 disagree by roughly an order of magnitude on duration. This is the single largest uncertainty for far-side impact mortality in the first 24 hours.
- **No modern population casualty model exists for a 10 km impactor.** All mortality estimates are extrapolated from climate/crop models, historical famine data, and impact physics — no study has published a detailed human casualty timeline for this scenario.
- **Wildfire extent is uncertain.** Estimates of land surface burned range from 18% to 70%+. The soot layer in the K-Pg boundary proves massive fires occurred, but whether they were ignited by the thermal pulse or by other mechanisms (ground-transmitted heat, lightning from disturbed atmosphere) is debated.
- **Tsunami casualty estimates for modern populations are rough.** Range et al. 2022 modeled wave propagation but not onshore inundation or casualties. For a far-side ocean impact, US coastal casualties from 50–100+ meter waves would be enormous but are not precisely modeled.
- **Social dynamics post-impact are unmodeled.** As with all scenarios in this project, the transition from "caloric math says X% die" to "actual mortality" involves violence, cooperation, migration, and governance collapse that no model captures.

## Sources

- Schulte, P. et al. (2010). "The Chicxulub Asteroid Impact and Mass Extinction at the Cretaceous-Paleogene Boundary." *Science*, 327(5970), 1214–1218. https://www.science.org/doi/10.1126/science.1177265
- Brugger, J. et al. (2017). "Baby, it's cold outside: Climate model simulations of the effects of the asteroid impact at the end of the Cretaceous." *Geophysical Research Letters*, 44(1), 419–427. https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GL072241
- Senel, C.B. et al. (2023). "Chicxulub impact winter sustained by fine silicate dust." *Nature Geoscience*, 16, 1033–1040. https://www.nature.com/articles/s41561-023-01290-4
- Tabor, C.R. et al. (2020). "Causes and climatic consequences of the impact winter at the Cretaceous-Paleogene boundary." *Geophysical Research Letters*, 47(3). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019GL085572
- Robertson, D.S. et al. (2013). "K-Pg extinction: Reevaluation of the heat-fire hypothesis." *Journal of Geophysical Research: Biogeosciences*, 118(1), 329–336. https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/jgrg.20018
- Goldin, T.J. & Melosh, H.J. (2009). "Self-shielding of thermal radiation by Chicxulub impact ejecta." *Geology*, 37(12), 1135–1138. https://pubs.geoscienceworld.org/gsa/geology/article-abstract/37/12/1135/104019
- Range, M.M. et al. (2022). "The Chicxulub Impact Produced a Powerful Global Tsunami." *AGU Advances*, 3(5). https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021AV000627
- Collins, G.S. et al. (2005). "Earth Impact Effects Program: A Web-based computer program for calculating the regional environmental consequences of a meteoroid impact on Earth." *Meteoritics & Planetary Science*, 40(6), 817–840.
- Toon, O.B. et al. (1997). "Environmental perturbations caused by the impacts of asteroids and comets." *Reviews of Geophysics*, 35(1), 41–78.
- Rumpf, C.M. et al. (2017). "Asteroid impact effects and their immediate hazards for human populations." *Geophysical Research Letters*, 44(8), 3433–3440. https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL073191
- Kring, D.A. (2002). "Environmental consequences of impact cratering events as a function of ambient conditions on Earth." *Astrobiology*, 3(1), 133–152. Regional effects: https://www.lpi.usra.edu/science/kring/Chicxulub/regional-effects/
- Chapman, C.R. (2004). "The hazard of near-Earth asteroid impacts on Earth." *Earth and Planetary Science Letters*, 222(1), 1–15.
- Wolbach, W.S. et al. (1988). "Global fire at the Cretaceous-Tertiary boundary." *Nature*, 334, 665–669.
- Henehan, M.J. et al. (2019). "Rapid ocean acidification and protracted Earth system recovery followed the end-Cretaceous Chicxulub impact." *PNAS*, 116(45), 22500–22504.
- Alvarez, L.W. et al. (1980). "Extraterrestrial cause for the Cretaceous-Tertiary extinction." *Science*, 208(4448), 1095–1108.
- Ord, T. (2020). *The Precipice: Existential Risk and the Future of Humanity*. Bloomsbury Publishing.
- Boslough, M. & Crawford, D. (2008). "Low-altitude airbursts and the impact threat." *International Journal of Impact Engineering*, 35(12), 1441–1448. Sandia National Laboratories.

<!-- COMPLETE -->
