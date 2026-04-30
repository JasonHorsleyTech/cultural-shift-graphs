# Result: Impact Winter — Climate and Crop Effects from Large Asteroid

## Summary

A 10 km asteroid impact injects ~15,000 Tg of soot plus massive quantities of fine silicate dust and sulfate aerosols into the stratosphere — roughly 100x the soot from a full-scale nuclear war. This produces near-total darkness for 1–2 years, surface cooling of 15–28°C, subfreezing temperatures at mid-latitudes for 3–16 years, and acid rain persisting 5–10 years. Crop production drops to effectively zero for 2–3 years and remains severely depressed for a decade. The impact winter is categorically more severe than nuclear winter in magnitude and duration, though the underlying mechanism (stratospheric aerosol blocking sunlight) is the same. Recovery to pre-impact climate takes 15–30+ years.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| soot_injection_fine | 15000 | 750 | 35000 | tg | days | Bardeen et al. 2017 | medium |
| soot_injection_total_with_coarse | 56000 | 15000 | 56000 | tg | days | Bardeen et al. 2017 | medium |
| silicate_dust_particle_size | 4.4 | 0.8 | 8.0 | micrometers | days | Senel et al. 2023 | high |
| silicate_dust_atmospheric_lifetime | 15 | 10 | 20 | years | years_1-15 | Senel et al. 2023 | medium |
| nuclear_winter_soot_comparison | 150 | 100 | 165 | tg | reference | Xia et al. 2022 | high |
| soot_magnitude_vs_nuclear | 100 | 50 | 200 | multiplier | reference | derived | medium |
| sunlight_reduction_pct_year1 | 99 | 95 | 99.9 | pct | months_1-18 | Bardeen et al. 2017 | high |
| sunlight_recovery_to_4pct_months | 24 | 18 | 30 | months | year_2 | Bardeen et al. 2017 | medium |
| sunlight_full_recovery_years | 4 | 3 | 5 | years | year_3-5 | Bardeen et al. 2017 | medium |
| global_temp_drop_avg | 16 | 10 | 20 | degrees_c | year_1-3 | Bardeen et al. 2017 | high |
| land_temp_drop_max | 28 | 20 | 28 | degrees_c | year_1-3 | Bardeen et al. 2017 | high |
| ocean_temp_drop_surface | 11 | 7 | 11 | degrees_c | year_1-3 | Bardeen et al. 2017 | high |
| sulfate_aerosol_temp_drop | 26 | 20 | 26 | degrees_c | year_1-16 | Brugger et al. 2017 | medium |
| subfreezing_duration_midlat | 5 | 3 | 16 | years | year_1-16 | Brugger et al. 2017 / Bardeen et al. 2017 | medium |
| photosynthesis_shutdown_land | 2 | 1.5 | 3 | years | year_1-3 | Senel et al. 2023 / Tabor et al. 2020 | high |
| photosynthesis_shutdown_ocean | 1.5 | 1 | 2.5 | years | year_1-2.5 | Bardeen et al. 2017 | high |
| ocean_euphotic_recovery_months | 30 | 24 | 36 | months | year_2-3 | Bardeen et al. 2017 | medium |
| precipitation_reduction_pct | 75 | 70 | 80 | pct | year_1-6 | Bardeen et al. 2017 | high |
| precipitation_recovery_years | 7 | 6 | 8 | years | year_6-8 | Bardeen et al. 2017 | medium |
| ozone_depletion_pct | 80 | 70 | 90 | pct | year_1-7 | Bardeen et al. 2017 | high |
| uv_index_post_clearing | 40 | 30 | 50 | uv_index | year_6-8 | Bardeen et al. 2017 | medium |
| uv_harmful_duration_years | 2 | 1 | 3 | years | year_6-8 | Bardeen et al. 2017 | medium |
| acid_rain_duration_years | 7 | 5 | 10 | years | year_1-10 | LPI / Schulte et al. 2010 | medium |
| ocean_ph_drop | 0.25 | 0.2 | 0.3 | ph_units | months_1-12 | Henehan et al. 2019 | high |
| ocean_mixed_layer_deepening | 400 | 300 | 500 | meters | year_1-3 | Bardeen et al. 2017 | medium |
| crop_production_pct_year1 | 0 | 0 | 2 | pct_of_normal | year_1 | Tabor et al. 2020 / derived | high |
| crop_production_pct_year2 | 0 | 0 | 5 | pct_of_normal | year_2 | Tabor et al. 2020 / derived | high |
| crop_production_pct_year3 | 5 | 0 | 15 | pct_of_normal | year_3 | Bardeen et al. 2017 / derived | medium |
| crop_production_pct_year5 | 25 | 10 | 40 | pct_of_normal | year_5 | derived from climate recovery | low |
| crop_production_pct_year10 | 60 | 40 | 75 | pct_of_normal | year_10 | derived from climate recovery | low |
| climate_full_recovery_years | 25 | 15 | 30 | years | decade_scale | Brugger et al. 2017 | medium |
| ocean_temp_residual_15yr | 3 | 2 | 5 | degrees_c | year_15 | Bardeen et al. 2017 | medium |
| us_food_reserves_days | 90 | 60 | 120 | days | current | USDA | high |
| global_cereal_reserves_pct_annual | 30 | 25 | 35 | pct_of_yearly_production | current | FAO | high |
| seaweed_potential_pct_food | 45 | 30 | 50 | pct_of_global_food | month_9-14 | ALLFED / Jehn et al. 2024 | low |

## Mortality Timeline (far-side impact, continuing from ticket 031)

This timeline focuses on the climate-driven mortality for the "far-side impact" scenario (US not directly hit). It refines the year 1–10 curve from ticket 031 with more granular climate data. The immediate effects (hours 1–168) are covered in ticket 031; this ticket picks up from month 1.

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 720 | 25.0 | 15.0 | 40.0 | famine onset / darkness / infrastructure chaos | Bardeen et al. 2017, Tabor et al. 2020 |
| 2160 | 50.0 | 30.0 | 65.0 | mass starvation / near-total crop failure / disease | Bardeen et al. 2017, Brugger et al. 2017 |
| 4320 | 68.0 | 48.0 | 82.0 | prolonged famine / subfreezing temps / societal collapse | Brugger et al. 2017, Tabor et al. 2020 |
| 8760 | 80.0 | 58.0 | 92.0 | continued starvation / cold / violence / disease | Brugger et al. 2017, Bardeen et al. 2017 |
| 17520 | 86.0 | 63.0 | 94.0 | subfreezing persists / minimal agriculture / UV spike | Brugger et al. 2017, Bardeen et al. 2017 |
| 26280 | 88.0 | 65.0 | 95.0 | slow agricultural recovery / UV still elevated | Bardeen et al. 2017 |
| 43800 | 87.0 | 62.0 | 93.0 | partial recovery / subsistence farming begins | Senel et al. 2023, Brugger et al. 2017 |
| 87600 | 85.0 | 58.0 | 92.0 | climate stabilizing / population slowly rebuilding | Brugger et al. 2017 |

**Notes on the mortality curve shape:**

- **Months 1–6 (720–4320h):** The steepest rise. Near-total darkness shuts down photosynthesis globally. US food reserves last ~90 days. After that, starvation is the primary driver. Subfreezing temperatures compound the crisis — heating fuel runs out, exposure kills the vulnerable.
- **Year 1 (8760h):** 80% mortality reflects that stored food is exhausted, crops cannot grow, and the cold prevents foraging. Alternative foods (mushrooms, stored grains in sealed facilities) sustain small pockets. This is worse than nuclear winter because the soot injection is ~100x larger and the darkness is more complete and longer-lasting.
- **Year 2 (17520h):** Mortality climbs more slowly. Survivors are those with access to sealed food stores, geothermal heating, or coastal/tropical locations where ocean thermal inertia prevents the worst freezing. However, a new threat emerges: as soot clears in years 6–8, the destroyed ozone layer exposes survivors to UV Index values of ~40 (normal tropical max is ~12), causing crop damage and skin cancer risk.
- **Year 3–5 (26280–43800h):** Curve flattens. Sunlight begins returning, but subfreezing temperatures persist at mid-latitudes. Limited agriculture becomes possible in tropical and coastal zones. The surviving population (~12–15% of baseline) stabilizes.
- **Year 10 (87600h):** Slight population recovery. Climate is still 3°C below normal but crop production has returned to ~60% of pre-impact levels. The surviving population — now concentrated in coastal, tropical, and geothermally-active areas — begins rebuilding. Mortality dips slightly below the year-5 peak as births exceed deaths.

## Detailed Climate Timeline

### Phase 1: Darkness (weeks 1 to month 18)
- **Mechanism:** 15,000 Tg of soot + fine silicate dust (0.8–8 μm) absorb and scatter sunlight. Soot heats the stratosphere by hundreds of degrees, lofting material higher and extending residence time.
- **Surface light:** Reduced to <1% of normal. Photosynthesis effectively impossible on land and in ocean surface waters.
- **Temperature:** Global average drops 16°C. Land surfaces cool up to 28°C. Mid-latitude continental interiors (including most of the US) experience sustained temperatures 20–28°C below normal — well below freezing even in summer.
- **Precipitation:** Drops 70–80% globally. Hydrological cycle nearly shuts down because cold oceans evaporate less water.

### Phase 2: Deep Winter (month 18 to year 4)
- **Mechanism:** Soot is largely deposited within ~1 year, but fine silicate dust (atmospheric lifetime ~15 years per Senel et al. 2023) and sulfate aerosols (residence time years per Brugger et al. 2017) sustain cooling. Ocean mixed layer deepens from 50m to 400m, storing cold that persists for decades.
- **Surface light:** Slowly recovers to ~4% of normal by year 2. Enough for some photosynthesis in tropical regions.
- **Temperature:** Subfreezing at mid-latitudes. Tropical oceans remain 10–15°C (absolute), providing the only reliable above-freezing zone.
- **Crops:** Still near-zero at mid-latitudes. Marginal growth possible in tropics by late year 2.

### Phase 3: Toxic Recovery (year 4 to year 8)
- **Mechanism:** As soot clears, the massively depleted ozone layer (80% reduction for 7 years) allows extreme UV radiation to reach the surface. UV Index hits ~40 in the tropics (normal max: ~12). This persists for ~2 years.
- **Surface light:** Returns toward normal levels, but UV component is dangerously elevated.
- **Temperature:** Gradually warming but still below pre-impact baseline. Acid rain (sulfuric and nitric) persists for 5–10 years, damaging soils and freshwater.
- **Crops:** Limited agriculture resumes. Cool-tolerant crops in tropics. Soil damage from acid rain limits productivity. UV damages exposed crops.

### Phase 4: Slow Recovery (year 8 to year 15+)
- **Mechanism:** Ozone recovers rapidly once stratosphere dehydrates (~7–8 years post-impact). Fine dust continues settling. Ocean remains 3°C cooler than pre-impact even at year 15.
- **Temperature:** Approaching but not reaching pre-impact levels. Brugger et al. estimate full recovery takes 30+ years.
- **Crops:** Rebuilding toward 60–75% of normal by year 10. Full agricultural recovery requires soil remediation, seed stock rebuilding, and climate normalization — likely decades.

## Comparison to Nuclear Winter

| parameter | impact_winter_10km | nuclear_winter_full | ratio |
|---|---|---|---|
| soot injection (Tg) | 15,000 | 150 | ~100x |
| global temp drop (°C) | 15–26 | 8–15 | ~2x |
| darkness duration (years) | 1.5–2 | 0.5–1 | ~2–3x |
| subfreezing duration (years) | 3–16 | 1–3 | ~3–5x |
| crop loss peak (%) | ~100 | ~90 | comparable |
| crop loss duration at >80% | 2–3 years | 1–2 years | ~2x |
| full climate recovery (years) | 15–30+ | 5–10 | ~3x |
| ozone depletion | 80% for 7 years | modest | far worse |
| acid rain | 5–10 years | minimal | unique to impact |
| radiation contamination | none | significant | advantage for impact |

**Key difference:** The impact winter is more severe and longer-lasting, but there is no radiation contamination. Infrastructure outside the impact zone is intact. This means survivors have better starting conditions (functional buildings, tools, sealed food stores) but face a longer and deeper agricultural gap. The net effect is similar or worse total mortality but with a different curve shape — slower onset but more prolonged suffering.

## US-Specific Crop and Food Analysis

- **US food reserves:** ~90 days of consumption at full population levels. At 50% survival (month 3), reserves stretch to ~6 months.
- **Growing season:** Effectively zero for years 1–2. Even in year 3, mid-latitude US temperatures remain subfreezing in summer. The first viable growing regions would be southern Florida, Hawaii, and US territories in the tropics.
- **Alternative foods:** ALLFED research suggests mushroom farming (grows in darkness on dead wood), methane-fed single-cell protein, and eventually seaweed (once ocean light returns) could theoretically feed survivors. Seaweed alone could provide ~45% of global food needs within 9–14 months under optimistic scaling assumptions — but this requires intact industrial infrastructure and coordination that may not exist post-impact.
- **Advantage over nuclear winter:** No fallout contamination means stored food is safe, water is drinkable (aside from acid rain), and survivors can immediately begin preparing for long-term food production without radiation exposure.

## Acid Rain Effects

- **Source:** Impact vaporizes anhydrite (calcium sulfate) and nitrogen in target rocks and atmosphere. Sulfur trioxide dominates over sulfur dioxide in the vapor plume.
- **Duration:** 5–10 years of sulfuric and nitric acid deposition.
- **Freshwater:** Shallow lakes, ponds, rivers, and estuaries acidified. Deep lakes and large rivers less affected due to buffering capacity.
- **Soil:** Leaching of nutrients, damage to soil biota. Reduces agricultural productivity even after temperatures recover.
- **Ocean:** Surface pH drops ~0.2–0.3 units (Henehan et al. 2019). Dissolved carbonate reduced ~100x at surface. Devastating for calcifying organisms (shellfish, coral) but deep ocean less affected.
- **Recovery:** Acid rain ceases within ~10 years as sulfate aerosols settle. Soil recovery takes longer — decades in heavily affected areas.

## Data Gaps

- **Crop production estimates for years 3–10 are extrapolated.** No peer-reviewed study models modern agricultural recovery under impact winter conditions specifically. The crop figures are derived from climate recovery timelines (Bardeen, Brugger, Senel) combined with crop temperature thresholds, not from agricultural modeling.
- **ALLFED alternative food estimates assume intact infrastructure.** Post-impact infrastructure damage (from ejecta thermal pulse, wildfires, tsunamis) may prevent the industrial-scale food production their models assume.
- **UV spike mortality is poorly quantified.** The years 6–8 ozone hole produces extreme UV, but human behavioral adaptation (staying indoors, covering skin) could mitigate much of the mortality. No study models this specifically.
- **Social dynamics under decade-long stress.** All mortality estimates beyond year 1 are caloric/thermal math. They don't model organized violence, mass migration, or cooperative survival strategies. A 10-year impact winter is long enough for significant social reorganization — both constructive (planned agriculture, rationing) and destructive (resource wars, warlordism).
- **Fine silicate dust contribution is a recent finding.** Senel et al. 2023 showed dust plays a larger role than previously thought (15-year atmospheric lifetime vs. weeks for coarse dust). Earlier models (Bardeen, Brugger) may underestimate cooling duration because they focused on soot and sulfur. The true duration of severe cooling may be at the upper end of ranges.

## Sources

- Bardeen, C.G., Garcia, R.R., Toon, O.B., & Conley, A.J. (2017). On transient climate change at the Cretaceous−Paleogene boundary due to atmospheric soot injections. *PNAS*, 114(36), E7415–E7424. https://www.pnas.org/doi/10.1073/pnas.1708980114
- Brugger, J., Feulner, G., & Petri, S. (2017). Baby, it's cold outside: Climate model simulations of the effects of the asteroid impact at the end of the Cretaceous. *Geophysical Research Letters*, 44(1), 419–427. https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1002/2016GL072241
- Tabor, C.R., Bardeen, C.G., Otto-Bliesner, B.L., Garcia, R.R., & Toon, O.B. (2020). Causes and climatic consequences of the impact winter at the Cretaceous-Paleogene boundary. *Geophysical Research Letters*, 47(3). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019GL085572
- Senel, C.B. et al. (2023). Chicxulub impact winter sustained by fine silicate dust. *Nature Geoscience*, 16, 1033–1040. https://www.nature.com/articles/s41561-023-01290-4
- Kaiho, K. & Oshima, N. (2017). Site of asteroid impact changed the history of life on Earth: the low probability of mass extinction. *Scientific Reports*, 7, 14855. https://www.nature.com/articles/s41598-017-14199-x
- Schulte, P. et al. (2010). The Chicxulub asteroid impact and mass extinction at the Cretaceous-Paleogene boundary. *Science*, 327(5970), 1214–1218. https://www.science.org/doi/10.1126/science.1177265
- Henehan, M.J. et al. (2019). Rapid ocean acidification and protracted Earth system recovery followed the end-Cretaceous Chicxulub impact. *PNAS*, 116(45), 22500–22504. https://www.pnas.org/doi/full/10.1073/pnas.1905989116
- Xia, L. et al. (2022). Global food insecurity and famine from reduced crop, marine fishery and livestock production due to climate disruption from nuclear war soot injection. *Nature Food*, 3, 586–596. https://www.nature.com/articles/s43016-022-00573-0
- ALLFED / Jehn, F.U. et al. (2024). Seaweed as a resilient food solution after a nuclear war. *Earth's Future*, 12. https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023EF003710
- Denkenberger, D. & Pearce, J. (2015). *Feeding Everyone No Matter What*. Academic Press.
- Kring, D.A. (2002). Chicxulub impact event global effects. Lunar and Planetary Institute. https://www.lpi.usra.edu/science/kring/Chicxulub/global-effects/

<!-- COMPLETE -->
