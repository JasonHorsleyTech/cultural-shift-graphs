# Result: Yellowstone VEI-8 — Ash Distribution and Immediate Casualties

## Summary

A Yellowstone VEI-8 supereruption would eject >1,000 km³ of material, generating pyroclastic flows lethal within ~100 km and an umbrella cloud that distributes ash radially across the entire continent. Immediate deaths from pyroclastic flows are estimated at ~90,000 (the zone is sparsely populated), with first-week casualties climbing to 100,000–500,000 as heavy ash causes roof collapses, respiratory failure, and infrastructure loss across the northern Rockies. The immediate death toll is modest relative to other scenarios in this project — the real population impact comes from volcanic winter and agricultural collapse in subsequent months/years (ticket 029).

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| eruption_volume_vei8 | 1000 | 1000 | 2500 | cubic_km | event | USGS VEI definition | high |
| mastin_model_volume_dre | 330 | 330 | 330 | cubic_km | event | Mastin et al. 2014 | high |
| plume_height | 40 | 30 | 50 | km | event | USGS | high |
| pyroclastic_flow_radius | 100 | 80 | 120 | km | hours 0-6 | USGS / NHM | medium |
| pyroclastic_flow_speed | 300 | 200 | 500 | km_per_hour | hours 0-6 | NHM / BBC Science Focus | medium |
| pyroclastic_flow_temperature | 450 | 400 | 500 | degrees_c | hours 0-6 | NHM | medium |
| umbrella_cloud_radius | 1500 | 1000 | 1500 | km | days 1-30 | Mastin et al. 2014 | high |
| pyroclastic_zone_population | 90000 | 60000 | 120000 | people | current | Population estimates + HowStuffWorks | medium |
| heavy_ash_zone_population_500km | 2000000 | 1500000 | 3000000 | people | current | Census-derived estimate | medium |
| moderate_ash_zone_population_1000km | 15000000 | 10000000 | 25000000 | people | current | Census-derived estimate | low |
| ash_thickness_100km | 1500 | 1000 | 3000 | mm | week 1 | Mastin et al. 2014 | medium |
| ash_thickness_billings_260km | 300 | 100 | 1000 | mm | week 1 | Mastin et al. 2014 | medium |
| ash_thickness_casper_400km | 200 | 100 | 1000 | mm | week 1 | Mastin et al. 2014 | medium |
| ash_thickness_slc_510km | 100 | 30 | 300 | mm | week 1 | Mastin et al. 2014 / AGU 2014 | medium |
| ash_thickness_denver_900km | 30 | 10 | 100 | mm | week 1 | Mastin et al. 2014 / AGU 2014 | medium |
| ash_thickness_minneapolis_1600km | 10 | 5 | 30 | mm | week 1 | Mastin et al. 2014 | medium |
| ash_thickness_east_coast | 2 | 1 | 5 | mm | week 1 | Mastin et al. 2014 | medium |
| roof_collapse_threshold_weak | 100 | 75 | 150 | mm | immediate | USGS Volcanic Ash Program | high |
| roof_collapse_threshold_engineered | 300 | 200 | 500 | mm | immediate | USGS Volcanic Ash Program | high |
| dry_ash_density | 550 | 400 | 700 | kg_per_m3 | immediate | USGS Volcanic Ash Program | high |
| wet_ash_density | 1200 | 700 | 2000 | kg_per_m3 | immediate | USGS Volcanic Ash Program | high |
| immediate_deaths_day7 | 200000 | 100000 | 500000 | people | day 0-7 | Composite estimate | low |
| fema_damage_estimate | 3000000000000 | 2000000000000 | 5000000000000 | dollars | total | FEMA | low |
| eruption_probability_per_year | 0.00000137 | 0.000001 | 0.000002 | probability | annual | USGS (~1 in 730,000) | medium |

## Mortality Timeline

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 1 | 0.025 | 0.015 | 0.035 | pyroclastic flows | USGS pyroclastic hazard models, ~90K estimate |
| 6 | 0.027 | 0.018 | 0.040 | pyroclastic flows / initial ash fall | USGS, population estimates |
| 24 | 0.035 | 0.022 | 0.060 | ash fall / roof collapse / respiratory failure | Mastin et al. 2014, USGS roof loading data |
| 168 | 0.060 | 0.030 | 0.150 | roof collapse / respiratory / infrastructure loss | Composite: USGS ash models + medical dependency data |

### Mortality timeline notes

**Hour 0-1 (pyroclastic flows):** Near-total fatality within ~100 km of the caldera. The area is sparsely populated — Wyoming is the least populous US state, and Yellowstone sits in its most remote corner. Resident population in the kill zone is ~60,000-120,000 (towns: West Yellowstone ~1,300; Gardiner ~900; Cody ~10,000 at ~80 km; Jackson ~11,000 at ~100 km south; plus scattered communities and park visitors). Central estimate ~90,000 deaths = 0.027% of 335M. This is the most commonly cited immediate death figure, though its original sourcing is informal (frequently cited in media; no peer-reviewed paper models this specific number).

**Hours 1-24 (heavy ash begins falling):** Ash fall begins within minutes but takes hours to accumulate to dangerous depths. Within 500 km (Bozeman at 130 km, Idaho Falls at 175 km, Billings at 260 km, Casper at 400 km), accumulation reaches 10 cm to 1+ meters within 24 hours depending on distance and eruption duration. Roof collapses begin (threshold: ~10 cm for weak structures, ~30 cm for engineered). All air travel across North America ceases. Roads become impassable in heavy ash zone. Respiratory distress in vulnerable populations (elderly, children, COPD/asthma patients). Electrical transformers short out from ash contamination. Water supplies contaminated with ash carrying toxic metals (arsenic, cadmium, lead, mercury).

**Days 1-7 (infrastructure cascade in heavy ash zone):** The ~1.5-3M people in the 500 km heavy ash zone face compounding threats: no power, no clean water, no transportation, no evacuation routes, roof collapse risk, and respiratory hazard. Medical facilities overwhelmed or non-functional. Medically dependent populations (insulin, dialysis, cardiac) begin dying. Salt Lake City metro (~1.2M) at ~510 km receives borderline heavy ash (3-30 cm) — enough to cripple infrastructure but not necessarily collapse roofs. Denver metro (~3M) at ~900 km receives cm-scale ash — severe disruption but lower direct mortality.

## Ash Distribution Detail

### Mastin et al. (2014) model parameters
- Used USGS Ash3d volcanic ash transport model
- Modeled eruptions of 3 days, 1 week, and 1 month duration
- Volume: 330 km³ DRE (dense rock equivalent)
- Key finding: supereruption umbrella clouds expand radially, pushing ash >1,500 km upwind — fundamentally different from smaller eruptions where ash drifts downwind

### Ash thickness by distance band (month-long eruption scenario)

| Distance band | Ash thickness | Example locations | Population affected |
|---|---|---|---|
| 0-100 km | Meters (buried under pyroclastic deposits) | Yellowstone NP, West Yellowstone, Gardiner | ~90K |
| 100-500 km | Decimeters to 1+ meter | Bozeman, Idaho Falls, Billings, Casper | ~1.5-3M |
| 500-1,000 km | Centimeters to decimeters | Salt Lake City, Denver, Cheyenne | ~10-25M |
| 1,000-1,500 km | Centimeters | Minneapolis, Des Moines, Seattle, Portland | ~30-50M |
| 1,500-3,000 km | Millimeters to centimeters | New York, Washington DC, LA, Miami | ~200M+ |
| >3,000 km | Trace to millimeters | Extreme periphery | remainder |

### Infrastructure damage thresholds (from USGS Volcanic Ash Program)

- **Millimeters:** Reduced road traction, respiratory irritation, air travel cancellation, electronics/transformer damage from conductive wet ash
- **Centimeters:** Crop destruction, water supply contamination, sewer/water line blockage, power line damage, major transportation disruption
- **10+ cm (decimeters):** Roof collapse of weak structures, complete infrastructure shutdown, livestock death, uninhabitable without sustained cleanup
- **30+ cm:** Engineered building roof collapse, complete burial of roads, total infrastructure loss

## Population in Key Cities Near Yellowstone

| City | Distance from caldera | 2024 population (city) | Metro population | Estimated ash depth |
|---|---|---|---|---|
| West Yellowstone, MT | ~15 km | ~1,300 | N/A | Buried (pyroclastic) |
| Gardiner, MT | ~40 km | ~900 | N/A | Buried (pyroclastic) |
| Cody, WY | ~80 km | ~10,000 | ~15,000 | Buried (pyroclastic) |
| Jackson, WY | ~100 km | ~11,000 | ~35,000 | Buried to meters |
| Bozeman, MT | ~130 km | ~56,000 | ~120,000 | Meters |
| Idaho Falls, ID | ~175 km | ~70,000 | ~175,000 | Decimeters to meters |
| Billings, MT | ~260 km | ~119,000 | ~185,000 | Tens of cm to 1 m |
| Casper, WY | ~400 km | ~59,000 | ~80,000 | Tens of cm |
| Salt Lake City, UT | ~510 km | ~200,000 | ~1,200,000 | Cm to decimeters |
| Denver, CO | ~900 km | ~715,000 | ~2,960,000 | Centimeters |
| Minneapolis, MN | ~1,600 km | ~430,000 | ~3,700,000 | ~1 cm |

## Data Gaps

- **90,000 immediate death figure is poorly sourced.** This number is widely repeated in media (HowStuffWorks, various news outlets) but does not trace to a specific USGS or peer-reviewed study. It appears to be a rough estimate of the population within the pyroclastic flow zone, not a modeled casualty figure. The actual number depends on time of year (summer tourist season vs. winter), warning time, and whether partial evacuation occurs.
- **Ash thickness values are ranges, not point estimates.** The Mastin et al. (2014) model shows significant variation depending on eruption duration (3 days vs. 1 month) and prevailing weather patterns. The city-specific values above are interpolated from their isopach maps, not directly reported for each city.
- **First-week mortality beyond pyroclastic flows is highly uncertain.** No study has modeled the combined effect of ash-induced infrastructure collapse, respiratory failure, and medical dependency cascade. The 100K-500K range for day-7 cumulative deaths is an extrapolation from individual hazard thresholds, not a modeled figure.
- **Evacuation modeling doesn't exist for this scenario.** With potentially hours to days of warning from seismic monitoring, some evacuation of the 100-500 km zone might be possible, but the scale (millions of people, limited road network in the rural West) makes this uncertain.
- **Wet vs. dry ash matters enormously.** Wet ash is 2-3x heavier than dry ash, dramatically changing roof collapse thresholds and cleanup difficulty. Whether it rains during the ashfall is a critical variable not modeled.
- **Toba analogue is contested.** The Toba catastrophe theory (that a VEI-8 eruption ~74,000 years ago nearly wiped out humans) is now heavily debated. Archaeological evidence from India suggests populations survived through the eruption. This weakens the "supereruption = near-extinction" narrative, though modern populations have very different vulnerabilities (infrastructure dependency).

## Sources

- Mastin, L.G., Van Eaton, A.R., & Lowenstern, J.B. (2014). "Modeling ash fall distribution from a Yellowstone supereruption." *Geochemistry, Geophysics, Geosystems*, 15(8), 3459-3475. DOI: 10.1002/2014GC005469. https://pubs.usgs.gov/publication/70193627
- USGS Yellowstone Volcano Observatory. "Modeling the Ash Distribution of a Yellowstone Supereruption (2014)." https://www.usgs.gov/volcanoes/yellowstone/modeling-ash-distribution-yellowstone-supereruption-2014
- USGS. "How far would ash travel if Yellowstone had a large explosive eruption?" https://www.usgs.gov/faqs/how-far-would-ash-travel-if-yellowstone-had-a-large-explosive-eruption
- USGS. "What would happen if a 'supervolcano' eruption occurred again at Yellowstone?" https://www.usgs.gov/faqs/what-would-happen-if-a-supervolcano-eruption-occurred-again-yellowstone
- USGS Volcano Hazards Program. "Impacts & Mitigation - Roof Loading." https://volcanoes.usgs.gov/volcanic_ash/roof_loading.html
- USGS Volcano Hazards Program. "Impacts & Mitigation - Density & Thickness of Ash." https://volcanoes.usgs.gov/volcanic_ash/density_thickness.html
- AGU Press Release (2014). "Yellowstone supereruption would send ash across North America." https://news.agu.org/press-release/yellowstone-supereruption-would-send-ash-across-north-america/
- Natural History Museum. "Supervolcanoes and their enormous eruptions." https://www.nhm.ac.uk/discover/what-is-a-supervolcano.html
- USGS. "Questions About Supervolcanoes." https://www.usgs.gov/volcanoes/yellowstone/questions-about-supervolcanoes
- Horwell, C.J. & Baxter, P.J. (2006). "The respiratory health hazards of volcanic ash: a review for volcanic risk mitigation." *Bulletin of Volcanology*, 69, 1-24.
- USGS. "Ash and Tephra Hazards from Yellowstone." https://www.usgs.gov/volcanoes/yellowstone/science/ash-and-tephra-hazards-yellowstone
- U.S. Census Bureau QuickFacts (2024) for Wyoming, Montana, Idaho population data.
- MacroTrends (2024) for Denver and Salt Lake City metro area populations.
- Wikipedia. "Youngest Toba eruption." https://en.wikipedia.org/wiki/Youngest_Toba_eruption

<!-- COMPLETE -->
