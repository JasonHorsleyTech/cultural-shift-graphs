# Result: Volcanic Winter — Climate and Crop Impact from VEI-8

## Summary

A Yellowstone VEI-8 supereruption would inject hundreds of millions of tonnes of sulfur aerosols into the stratosphere, causing global cooling of 1.5–5°C (depending on aerosol particle size — an active scientific debate) lasting 5–10+ years. Combined with physical ash burial of US farmland, this produces a severe agricultural crisis: near-total crop failure in year 1, 50–80% reduction in years 2–3, and gradual recovery over 5–10 years. The famine-driven mortality is the dominant kill mechanism of this scenario, far exceeding immediate casualties from ash — estimated at 30–60% of the US population over 5 years.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| peak_global_cooling_conservative | 1.5 | 1.0 | 2.0 | degrees_c | year 1-2 | McGraw et al. 2024 (NASA/GISS) | medium |
| peak_global_cooling_traditional | 4.0 | 2.3 | 5.0 | degrees_c | year 1-2 | Toba climate models (multiple) | medium |
| peak_regional_cooling_northern_hemisphere | 6.0 | 4.0 | 10.0 | degrees_c | year 1-2 | NCAR Toba simulations | low |
| cooling_duration_aerosol_direct | 3 | 1 | 5 | years | year 1-5 | Stratospheric aerosol lifetime literature | medium |
| cooling_duration_with_feedbacks | 10 | 5 | 15 | years | year 1-15 | Ice-ocean feedback models | low |
| toba_sulfate_loading | 375 | 219 | 535 | megatonnes | event | McGraw et al. 2024, multiple models | medium |
| tambora_1815_cooling | 0.55 | 0.4 | 0.7 | degrees_c | 1816 | Instrumental record | high |
| tambora_new_england_crop_loss | 90 | 70 | 95 | pct | 1816 | Historical records (Stommel & Stommel) | high |
| us_crop_production_year1 | 10 | 5 | 30 | pct_of_baseline | year 1 | Composite: ash burial + cooling estimate | low |
| us_crop_production_year2 | 25 | 10 | 45 | pct_of_baseline | year 2 | Composite estimate | low |
| us_crop_production_year3 | 40 | 20 | 60 | pct_of_baseline | year 3 | Composite estimate | low |
| us_crop_production_year5 | 65 | 40 | 80 | pct_of_baseline | year 5 | Composite estimate | low |
| us_crop_production_year10 | 90 | 75 | 100 | pct_of_baseline | year 10 | Composite estimate | low |
| midwest_ash_depth_iowa | 10 | 5 | 30 | mm | week 1 | Mastin et al. 2014 | medium |
| midwest_ash_depth_illinois | 5 | 2 | 15 | mm | week 1 | Mastin et al. 2014 (extrapolated) | low |
| midwest_heavy_ash_recovery_years | 5 | 3 | 10 | years | post-event | USGS volcanic ash agriculture studies | low |
| midwest_light_ash_recovery_years | 1.5 | 1 | 3 | years | post-event | USGS volcanic ash agriculture studies | low |
| growing_season_reduction_3c | 60 | 40 | 80 | days | year 1-3 | Nuclear winter crop models (Robock et al.) | low |
| growing_season_reduction_1_5c | 25 | 15 | 40 | days | year 1-3 | Scaled from Robock models | low |
| wheat_yield_loss_per_degree_c | 6.0 | 4.0 | 8.0 | pct_per_degree | per growing season | Zhao et al. 2017 (PNAS) | high |
| maize_yield_loss_per_degree_c | 7.4 | 5.0 | 10.0 | pct_per_degree | per growing season | Zhao et al. 2017 (PNAS) | high |
| us_commercial_grain_reserves | 60 | 30 | 90 | days | current | USDA grain stocks data | medium |
| nuclear_winter_150tg_crop_loss | 90 | 85 | 95 | pct | year 3-4 | Xia et al. 2022 (Nature Food) | high |

## Mortality Timeline (scenario ticket — continuing from ticket 028)

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 168 | 0.06 | 0.03 | 0.15 | ash fall / respiratory / infrastructure | Ticket 028 endpoint |
| 720 | 0.5 | 0.2 | 1.5 | medical dependency / respiratory / infrastructure cascade | Foundation tickets 001-002, USGS ash health data |
| 2160 | 4.0 | 2.0 | 8.0 | early starvation / violence / disease | Historical famine onset patterns (ticket 006) |
| 4320 | 12.0 | 6.0 | 20.0 | mass famine onset / disease / social collapse | ALLFED food reserve depletion models |
| 8760 | 25.0 | 15.0 | 40.0 | famine / volcanic winter peak / no harvest | Xia 2022 crop models scaled, historical famine mortality |
| 17520 | 38.0 | 22.0 | 55.0 | continued famine / slow recovery | Composite: crop recovery timeline + carrying capacity |
| 26280 | 45.0 | 28.0 | 62.0 | famine tapering / disease / residual starvation | Composite estimate |
| 43800 | 50.0 | 30.0 | 65.0 | stabilization / residual mortality | Pre-industrial carrying capacity models |
| 87600 | 53.0 | 32.0 | 68.0 | long-term reduced carrying capacity | Composite estimate |

### Mortality timeline notes

**Month 1 (720 hours):** Food supply chains collapsing across the US. Grocery stores in non-ash zones still have some stock, but distribution is crippled — trucking routes through ash zones are impassable, fuel supply disrupted, and volcanic haze reduces air operations nationwide. Medically dependent populations without functioning hospitals are dying (insulin-dependent diabetics, dialysis patients, ventilator-dependent). Respiratory deaths from ash inhalation continue in the cm+ ash zones. Government attempting emergency food distribution but logistics are catastrophic.

**Month 3 (2160 hours):** Commercial food reserves largely depleted (US typically holds ~30-90 days of grain stocks). First growing season entirely lost — even in areas with minimal ash, volcanic cooling has shortened the growing season and reduced sunlight below viable crop thresholds. Temperature cooling of 1.5-5°C has set in. Mass migration from ash-heavy zones (northern Rockies, northern Midwest) strains resources elsewhere. Violence over food supplies escalating. Disease spreading due to water contamination, malnutrition, and breakdown of sanitation.

**Month 6 (4320 hours):** Full famine conditions. The US food system produced virtually nothing in the first growing season. International food aid is minimal — this is a global event; volcanic winter affects the entire Northern Hemisphere and sulfur aerosols circle the globe. Analogous to the worst historical famines but at modern-population scale. With ~335M people and food production at 5-30% of normal, the caloric deficit is enormous. People are dying at accelerating rates from starvation, dehydration, exposure (no fuel for heating in winter), violence, and disease.

**Year 1 (8760 hours):** Volcanic winter at or near peak intensity. Temperature anomaly worst in years 1-2. No meaningful domestic harvest has occurred. Some food from pre-event stockpiles (government strategic reserves, Mormon food storage in Utah, rural survival stores) sustains pockets of population. Fishing communities on coastlines may fare slightly better. Urban populations suffering disproportionately — cities lack local food production and depend entirely on supply chains that no longer function. Estimated 15-40% cumulative mortality, with the range driven by the uncertain severity of cooling (McGraw's 1.5°C vs. traditional 4°C+).

**Year 2 (17,520 hours):** Some agricultural recovery attempted in lightly affected areas (Southeast US, parts of California received only mm-scale ash). But cooling persists — even under the optimistic McGraw scenario, aerosol effects last 1-3 years; under traditional models, cooling is still severe. Crop yields are maybe 10-45% of normal. Population has contracted enough that per-capita food availability improves slightly for survivors, but starvation remains the dominant cause of death. Social reorganization beginning in some areas — communities with agricultural knowledge and stored seed are farming, but without industrial inputs (fertilizer, fuel, irrigation pumps), yields are subsistence-level.

**Year 3 (26,280 hours):** Inflection point. Under conservative cooling (1.5°C), temperatures recovering enough for partial growing seasons. Under traditional cooling (3-5°C), still significantly depressed. Agricultural recovery highly variable by region — the Southeast and Pacific Coast recover faster; the Midwest is still dealing with ash-contaminated soil and reduced growing seasons. Mortality rate declining but cumulative toll still climbing. Population stabilizing in the 28-62% loss range.

**Year 5 (43,800 hours):** Under conservative cooling estimates, temperatures approaching normal. Under traditional estimates, still 1-2°C below baseline. Agricultural production at 40-80% of pre-event levels. US population has contracted dramatically — surviving population of ~115-235M. The population is approaching a new equilibrium: enough food production to sustain survivors, though at much reduced caloric levels compared to pre-event. The system looks more like early-industrial agriculture than modern industrial farming.

**Year 10 (87,600 hours):** Temperature effects largely dissipated even under pessimistic models (aerosol feedbacks mostly played out). However, industrial agricultural infrastructure has not recovered to pre-event levels — manufacturing of equipment, fertilizer production, and seed stocks are rebuilding slowly. Population stabilized at roughly 107-228M (32-68% loss). The wide range reflects the fundamental uncertainty in cooling severity.

## Volcanic Winter Mechanism and Debate

### How volcanic winter works

VEI-8 eruptions inject massive quantities of sulfur dioxide (SO₂) into the stratosphere (20-50 km altitude), where it converts to sulfate aerosol particles. These aerosols scatter incoming solar radiation, reducing sunlight reaching the surface. The mechanism is analogous to nuclear winter (soot blocking sunlight) but involves different particles with different optical properties.

Key difference from nuclear winter: sulfate aerosols are primarily scattering (reflective) rather than absorptive. This means they reflect sunlight without heating the stratosphere as much as soot would. The cooling effect per unit mass may be less severe than soot, but VEI-8 eruptions inject far more material.

### The aerosol size debate (why estimates diverge)

McGraw et al. 2024 (NASA/GISS, published in *Journal of Climate*) identified aerosol particle size as the key variable driving the 2-8°C range in previous estimates:

- **Small, dense particles:** Greater surface area per unit mass → more efficient at blocking sunlight → more cooling (up to 5-8°C)
- **Large, sparse particles:** Less surface area → less efficient → more modest cooling (~1.5°C)
- **Self-limiting effect:** In very large eruptions, the sheer amount of sulfur may cause particles to coagulate into larger droplets, which are less efficient at scattering light AND fall out of the stratosphere faster. This creates a negative feedback that caps cooling.

McGraw et al. concluded: "The relatively modest temperature changes we found most compatible with the evidence could explain why no single super-eruption has produced firm evidence of global-scale catastrophe for humans or ecosystems."

This is an active scientific debate. The traditional 3-5°C estimate and the newer ~1.5°C estimate are both legitimate positions.

### Toba catastrophe analogue

The Toba eruption (~74,000 years ago) is the only VEI-8 with evidence of population effects:

- **Traditional view (Ambrose 1998):** Toba caused a 6-year volcanic winter and 1,000-year cooling episode, reducing human population to ~10,000 breeding pairs (genetic bottleneck).
- **Current consensus (shifting):** Archaeological evidence from South Africa and India shows population continuity through the eruption. The PNAS 2021 study (Yost et al.) found that even with worst-case sulfur emissions, cooling in the southern hemisphere was unlikely to exceed 4°C, and regional climate shelters allowed populations to persist.
- **Bottom line:** Toba was bad but probably not the near-extinction event it was once thought to be. However, modern populations are far more vulnerable to infrastructure disruption than hunter-gatherer bands.

### 1816 "Year Without a Summer" (scaling anchor)

Tambora (1815, VEI-7) provides the best empirical anchor:

- Ejected ~37 km³ of material (VEI-8 is ~10x this or more)
- Caused 0.4-0.7°C global cooling
- New England crop yields fell ~90%
- European grain prices doubled; worst famine of the century
- Triggered typhus epidemics, killing 65,000+ in Ireland

Scaling from VEI-7 to VEI-8 is not linear — the aerosol self-limiting effect (particle coagulation) means 10x more ejecta does NOT produce 10x more cooling. A reasonable scaling suggests 3-8x the cooling of Tambora, yielding 1.5-5°C — which matches the range from climate models.

## US Agricultural Impact Detail

### Ash burial zones and agriculture

From ticket 028, ash distribution across US agricultural regions:

| Region | Ash depth | Agricultural significance | Recovery timeline |
|---|---|---|---|
| Northern Rockies (WY, MT) | Meters | Minimal farmland; ranching destroyed | Decades |
| Northern Great Plains (ND, SD, NE) | Cm to decimeters | Major wheat/corn belt; severely disrupted | 3-10 years |
| Upper Midwest (MN, IA, WI) | Centimeters | Corn/soybean heartland; damaged but recoverable | 1-3 years |
| Central Midwest (IL, IN, OH) | Millimeters to centimeters | Corn belt core; moderate disruption | 1-2 years |
| Southeast (GA, AL, MS) | Millimeters or trace | Moderate farmland; minimal ash damage | Months |
| California Central Valley | Millimeters | Major produce/fruit; minimal ash damage | Months |

### Ash effects on farmland

- **Millimeters:** Crops in the field at time of eruption are damaged or destroyed by acidic ash coating leaves. But soil is not seriously affected — next-season planting feasible after cleanup if temperature permits.
- **Centimeters:** Current-year crops destroyed. Soil chemistry disrupted (pH changes, toxic metals). Requires tilling ash into soil, which actually enriches fertility long-term but disrupts 1-2 growing seasons. Farm equipment damaged by abrasive ash.
- **Decimeters+:** Farmland effectively buried. Requires major mechanical removal before farming can resume. 3-10+ years for full recovery. Drainage patterns altered.

### Temperature-driven crop impact

Even in regions with minimal ash, volcanic cooling destroys crop yields:

- **Per-degree yield loss:** Wheat −6%/°C, maize −7.4%/°C (Zhao et al. 2017, PNAS). These figures are for warming but cooling effects are symmetric or worse (cold truncates growing season).
- **Growing season reduction:** At 3°C cooling, interior US growing season drops by 40-80 days (Robock et al. nuclear winter models). At 1.5°C, reduction of ~15-40 days. US corn needs ~100-120 frost-free days; losing 40-80 days makes corn cultivation impossible across much of the Midwest.
- **Year 1 total US crop production:** Combined ash destruction + cooling = estimated 5-30% of baseline. The low end (5%) corresponds to the traditional high-cooling scenario; the high end (30%) corresponds to McGraw's conservative cooling.
- **Comparison to nuclear winter:** Xia et al. 2022 estimated 90% global crop loss under the 150 Tg nuclear winter scenario (~4-8°C cooling). Volcanic winter from VEI-8 is probably somewhat less severe (70-95% US crop loss in year 1) because sulfate aerosols clear faster than soot AND some regions escape heavy ash.

### Combined food timeline

| Year | US crop production (% baseline) | Primary limiting factors | Caloric situation |
|---|---|---|---|
| 1 | 5-30% | Ash burial + peak cooling + destroyed supply chains | Mass famine; grain reserves depleted by month 3-6 |
| 2 | 10-45% | Continued cooling + ash contamination + loss of seed stock/equipment | Severe famine continues; some subsistence farming in SE/West |
| 3 | 20-60% | Cooling beginning to abate (conservative) or still severe (traditional) | Famine easing in optimistic scenario; continuing in pessimistic |
| 5 | 40-80% | Residual cooling (trad.) or near-normal temps (conservative); soil recovery ongoing | Population contracted enough to reduce per-capita food pressure |
| 10 | 75-100% | Temperature normalized; soil recovered; but industrial agriculture infrastructure not fully rebuilt | Near self-sufficiency for reduced population |

## Data Gaps

- **Aerosol size is the critical unknown.** The entire severity range hinges on this single variable. McGraw et al. 2024 argue convincingly for modest cooling (~1.5°C), but the traditional 3-5°C estimates come from models that are also defensible. Until the next VEI-7+ eruption produces observational data on aerosol microphysics at this scale, the debate cannot be resolved. This project should show both scenarios.
- **Scaling from VEI-7 to VEI-8 is non-linear and uncertain.** We have good empirical data for Tambora (VEI-7) and its 0.4-0.7°C cooling. But the 10-30x jump to VEI-8 involves unknown particle coagulation effects, stratospheric saturation, and self-limiting feedbacks. No VEI-8 eruption has occurred in the instrumental era.
- **US-specific crop models for volcanic winter don't exist.** The crop yield estimates in this ticket are extrapolated from: (a) nuclear winter crop models (different aerosol, different geographic pattern), (b) Tambora/1816 historical records (pre-industrial agriculture), and (c) per-degree yield reduction studies (designed for climate change, not sudden volcanic cooling). No study directly models US food production under a Yellowstone VEI-8 volcanic winter.
- **Midwest ash-agriculture interaction is poorly studied.** USGS has modeled ash distribution and general agricultural impacts of volcanic ash, but no study models the combined effect of centimeter-scale ash deposits across the US breadbasket on modern industrial agriculture with its specific crop types, equipment, and soil management.
- **Food distribution in the crisis is speculative.** Even if the US produces 10-30% of baseline food in year 1, whether that food reaches people depends on transportation infrastructure, government coordination, and social order — all of which are degraded by the eruption.
- **International trade effects unknown.** The US is normally a net food exporter. In a VEI-8 scenario, would food-producing nations (Brazil, Argentina, Australia — Southern Hemisphere, less affected by ash but still experiencing cooling) export to the US? Or would they hoard for their own populations? This could swing US mortality by 5-15%.
- **Alternative food sources not quantified for this scenario.** ALLFED research identifies emergency food sources (leaf protein extraction, natural gas-digesting bacteria, mushroom cultivation) that could theoretically scale up, but no model estimates their practical contribution during a supervolcano scenario.

## Sources

- McGraw, Z., et al. (2024). "Severe Global Cooling After Volcanic Super-Eruptions? The Answer Hinges on Unknown Aerosol Size." *Journal of Climate*, 37(4). https://journals.ametsoc.org/view/journals/clim/37/4/JCLI-D-23-0116.1.xml
- NASA GISS (2024). "Can Volcanic Super Eruptions Lead to Major Cooling? Study Suggests No." https://www.nasa.gov/earth/can-volcanic-super-eruptions-lead-to-major-cooling-study-suggests-no/
- Xia, L., et al. (2022). "Global food insecurity and famine from reduced crop, marine fishery and livestock production due to climate disruption from nuclear war soot injection." *Nature Food*, 3, 586–596. https://www.nature.com/articles/s43016-022-00573-0
- Zhao, C., et al. (2017). "Temperature increase reduces global yields of major crops in four independent estimates." *PNAS*, 114(35), 9326-9331. https://www.pnas.org/doi/10.1073/pnas.1701762114
- Yost, C.L., et al. (2021). "Global climate disruption and regional climate shelters after the Toba supereruption." *PNAS*, 118(29). https://www.pnas.org/doi/10.1073/pnas.2013046118
- Mastin, L.G., Van Eaton, A.R., & Lowenstern, J.B. (2014). "Modeling ash fall distribution from a Yellowstone supereruption." *Geochemistry, Geophysics, Geosystems*, 15(8), 3459-3475. https://pubs.usgs.gov/publication/70193627
- Robock, A., Oman, L., & Stenchikov, G.L. (2007). "Nuclear winter revisited with a modern climate model and current nuclear arsenals." *Journal of Geophysical Research*, 112(D13). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2006JD008235
- USGS Yellowstone Volcano Observatory. "Climate Change Potential as a Result of a Large Eruption of Yellowstone." https://www.usgs.gov/volcanoes/yellowstone/science/climate-change-potential-a-result-a-large-eruption-yellowstone
- USGS Volcano Hazards Program. "Impacts & Mitigation — Effects on Arable Crops." https://volcanoes.usgs.gov/volcanic_ash/effects_arable_crops.html
- USGS Volcano Hazards Program. "Impacts & Mitigation — Agriculture." https://volcanoes.usgs.gov/volcanic_ash/agriculture.html
- Stommel, H. & Stommel, E. (1983). *Volcano Weather: The Story of 1816, the Year Without a Summer*. Seven Seas Press.
- Ambrose, S.H. (1998). "Late Pleistocene human population bottlenecks, volcanic winter, and differentiation of modern humans." *Journal of Human Evolution*, 34(6), 623-651.
- ALLFED. "Resilient foods for preventing global famine." https://allfed.info/images/pdfs/Literature_review_resilient_foods.pdf
- Wikipedia. "Year Without a Summer." https://en.wikipedia.org/wiki/Year_Without_a_Summer
- Wikipedia. "Youngest Toba eruption." https://en.wikipedia.org/wiki/Youngest_Toba_eruption
- Wikipedia. "Volcanic winter." https://en.wikipedia.org/wiki/Volcanic_winter

<!-- COMPLETE -->
