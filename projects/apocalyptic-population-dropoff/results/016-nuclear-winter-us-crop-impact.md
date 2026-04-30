# Result: Nuclear Winter — US Crop Production and Famine Mortality

## Summary

Under the Xia et al. (2022) 150 Tg soot scenario, US caloric production collapses to ~5-15% of baseline in years 1-3, with the worst period at years 2-3 when stratospheric soot concentration peaks. Global crop production drops ~90% by years 3-4. The US corn belt loses ~80% of production for 3+ years due to 5-10°C cooling and growing season reduction of 30+ days. Marine fisheries decline ~29% but cannot compensate for crop losses. Emergency livestock slaughter provides a one-time buffer of ~2-3 months for survivors. Without alternative food deployment (which requires pre-war R&D that doesn't exist), Xia et al. estimate >90% of the US population dies from starvation by end of year 2. A more realistic model incorporating stored grain (~2-4 months buffer), livestock slaughter, and some adaptation still yields 50-60% famine mortality by year 5, bringing total cumulative deaths (blast + radiation + famine) to 85-95% of the US population.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| us_caloric_production_pct | 15 | 5 | 20 | pct | year 1 | Xia et al. 2022, WorldMetrics synthesis | medium |
| us_caloric_production_pct | 8 | 3 | 12 | pct | year 2 | Xia et al. 2022 (peak soot) | medium |
| us_caloric_production_pct | 5 | 2 | 10 | pct | year 3 | Xia et al. 2022 (90% global reduction) | medium |
| us_caloric_production_pct | 12 | 5 | 18 | pct | year 4 | Xia et al. 2022 (soot settling begins) | medium |
| us_caloric_production_pct | 22 | 15 | 30 | pct | year 5 | Xia et al. 2022, Penn State 2025 | medium |
| us_caloric_production_pct | 33 | 25 | 40 | pct | year 6 | extrapolated from recovery curve | low |
| us_caloric_production_pct | 45 | 35 | 55 | pct | year 7 | extrapolated from recovery curve | low |
| us_caloric_production_pct | 58 | 45 | 70 | pct | year 8 | extrapolated from recovery curve | low |
| us_caloric_production_pct | 72 | 60 | 82 | pct | year 9 | extrapolated from recovery curve | low |
| us_caloric_production_pct | 83 | 70 | 95 | pct | year 10 | Xia et al. (return to control by yr 10) | medium |
| us_corn_belt_production_loss | 80 | 70 | 90 | pct | years 1-3 | WorldMetrics, Penn State 2025 | medium |
| global_crop_decline_peak | 90 | 85 | 95 | pct | years 3-4 | Xia et al. 2022, Rutgers press release | high |
| marine_fish_catch_decline | 29 | 22 | 36 | pct | peak (year 3) | Harrison et al. 2020 (PNAS) | high |
| marine_biomass_decline | 18 | 14.5 | 21.5 | pct | peak | Harrison et al. 2020 (PNAS) | high |
| fishery_recovery_years | 14 | 10 | 18 | years | post-event | Harrison et al. 2020 | medium |
| fishery_protein_replacement_pct | 43 | 8 | 78 | pct | year 1 (if pre-managed) | Harrison et al. 2020 | low |
| livestock_emergency_slaughter_buffer | 80 | 50 | 120 | days | one-time | calculated from USDA inventory | low |
| us_cattle_inventory | 94000000 | 90000000 | 95000000 | head | current | USDA NASS 2025 | high |
| us_hog_inventory | 75000000 | 73000000 | 76000000 | head | current | USDA NASS 2026 | high |
| global_grain_reserves | 73 | 68 | 77 | days | current | FAO, Xia et al. 2022 | high |
| us_strategic_grain_reserve | 0 | 0 | 0 | metric_tons | current | USDA (depleted 2008) | high |
| us_food_supply_per_capita | 4000 | 3800 | 4200 | calories_per_day | current (pre-waste) | USDA ERS | high |
| minimum_survival_ration | 1911 | 1800 | 2000 | calories_per_day | survival threshold | Xia et al. 2022 | medium |
| xia_us_starvation_deaths_pct | 90 | 85 | 99 | pct | by end year 2 | Xia et al. 2022 (no trade, no reserves) | medium |
| temperature_drop_north_america | 20 | 15 | 35 | degrees_c | years 1-3 | Xia et al. 2022, Robock et al. | medium |
| growing_season_reduction_corn_belt | 30 | 20 | 60 | days | years 1-5 | WorldMetrics, Penn State | medium |
| uv_b_additional_crop_loss | 7 | 5 | 10 | pct | years 6-8 | Penn State 2025 | medium |
| alt_food_seaweed_global_cal_pct | 45 | 20 | 60 | pct | averaged over 10 years | ALLFED, Denkenberger | low |
| alt_food_ramp_up_time | 4.5 | 3 | 6 | months | from start of production | ALLFED, Denkenberger | low |
| survival_with_alt_food_prep | 70 | 60 | 80 | pct | with full R&D preparation | Denkenberger (80K Hours) | low |
| survival_without_prep_stored_only | 10 | 5 | 15 | pct | stored food only | Denkenberger (80K Hours) | low |

## Mortality Timeline

Continuing from tickets 013 + 014 baseline. At hour 4320 (month 6), cumulative deaths stand at 40% (32-49%) from blast, radiation, and immune-compromise disease. Famine deaths begin accumulating from approximately month 3-4 as stored food depletes, but become the dominant cause from month 6 onwards.

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 4320 | 42.0 | 33.0 | 51.0 | radiation disease + early famine onset | ticket 014 baseline + famine onset |
| 8760 | 55.0 | 42.0 | 68.0 | famine (year 1: stored food depleted, ~15% crop production) | Xia et al. 2022, ALLFED |
| 17520 | 72.0 | 58.0 | 85.0 | famine (year 2: peak soot, ~8% production, mass starvation) | Xia et al. 2022 |
| 26280 | 80.0 | 65.0 | 92.0 | famine (year 3: worst crop year ~5%, but reduced population eases per-capita) | Xia et al. 2022 |
| 43800 | 85.0 | 70.0 | 95.0 | famine + disease + violence (years 4-5: slow recovery beginning) | Xia et al. 2022, extrapolation |
| 87600 | 88.0 | 72.0 | 96.0 | residual starvation + rebuilding losses (year 10: production recovering) | Xia et al. 2022, extrapolation |

### Timeline notes

**Months 3-6 (hours 2160-4320):** Stored grain and emergency livestock slaughter sustain survivors through the initial post-attack period. The US has approximately 68-77 days of global grain reserves on hand (FAO), though domestic stocks are somewhat higher due to the US being a net food exporter. Emergency slaughter of 94M cattle and 75M hogs provides an estimated 50-120 days of additional buffer for survivors (~200M people after blast/radiation). However, infrastructure destruction (no refrigeration, no transport, no processing capacity) means only 40-60% of this theoretical buffer is accessible. Famine deaths begin among displaced populations, those in destroyed urban areas, and communities cut off from food distribution.

**Year 1 (hours 4320-8760):** Stored food is largely exhausted by months 6-8. The first post-war growing season yields only ~15% of baseline — the US corn belt loses 80% of production due to 5-10°C cooling and severe growing season shortening. The Midwest, which produces most US grain, is also the region most affected by nuclear winter cooling (20-35°C temperature drops in Northern Hemisphere summers). Southern states produce some food but inadequate for national needs. Per capita caloric availability for survivors (~200M) drops to ~400-800 cal/day. Mass starvation begins in earnest. An estimated 15% of the original 335M (50M people) die from famine in this period, bringing cumulative deaths to ~55%.

**Year 2 (hours 8760-17520):** Peak nuclear winter conditions. Stratospheric soot concentration at maximum. US crop production drops to ~5-8% of baseline. This is the period Xia et al. identify as "90% global crop reduction." The surviving population (~150M at start of year 2) faces severe caloric deficits. Even with rationing, available food supports perhaps 50-70M people at survival level. An estimated 17% of original population (57M) die from starvation and starvation-related disease, bringing cumulative total to ~72%.

**Year 3 (hours 17520-26280):** Worst agricultural year globally, but the US population has already been reduced to ~90-100M survivors. Per-capita food availability paradoxically improves slightly as population drops faster than production. Production at ~5-10% of pre-war baseline for 335M is equivalent to ~20-30% of needs for 90M survivors. Deaths continue but at a slowing rate: ~8% additional (27M) die, cumulative total reaches ~80%.

**Years 4-5 (hours 26280-43800):** Soot begins settling. Production recovers to 15-25% of original baseline. With ~70-80M survivors, this equates to ~60-100% of survival-level needs per capita. Famine deaths slow dramatically but continue from violence over resources, disease in weakened populations, and regional distribution failures. Additional deaths: ~5% (17M), cumulative: ~85%.

**Years 6-10 (hours 43800-87600):** Gradual agricultural recovery. By year 7, production at ~45% of baseline supports the reduced population (~50-60M) adequately. UV-B radiation from ozone depletion causes an additional ~7% crop loss peaking at years 6-8 (Penn State 2025), partially offsetting temperature recovery. By year 10, crop production returns to ~80-95% of pre-war levels, but population has stabilized at ~40-60M (12-18% of pre-war). Additional mortality in this period is mostly from cancer (radiation-induced), chronic illness, and rebuilding accidents: ~3%.

### Key modeling assumptions

1. **No international trade:** The US is modeled as self-reliant post-war. In reality, Australia and Argentina (Southern Hemisphere, less affected) retain more food production, but trade infrastructure is destroyed and these countries prioritize domestic needs.

2. **No large-scale alternative food deployment:** ALLFED research suggests that with advance preparation, seaweed and cellulose-to-sugar conversion could provide 45-60% of caloric needs within 6 months. However, no such infrastructure or planning exists. The "survival without preparation" scenario (Denkenberger) yields ~10% survival, which aligns with the pessimistic end of this timeline.

3. **Famine mortality is not purely caloric math:** Historical famines show that mortality is amplified 2-3x beyond simple caloric deficit predictions due to disease (cholera, typhus), violence over food, exposure (no heating fuel), and psychological collapse. The Irish Famine killed 12.5% of the population despite Ireland producing enough food to feed itself — distribution, economics, and political failures dominated. Post-nuclear famine would face even worse distribution challenges.

4. **Population reduction creates negative feedback:** As population drops, per-capita food availability rises (assuming production holds). This creates a decelerating mortality curve — most famine deaths occur in years 1-3, then taper. By year 4-5, the reduced population can be sustained by the recovering (but still diminished) food supply.

## Crop-Specific Impacts

### Corn (maize)
- US baseline: ~384 million metric tons (2023), ~35% of global production
- Nuclear winter impact: 80% yield reduction in corn belt for 3+ years (Penn State 2025)
- Primary mechanism: temperature too cold for germination (corn needs 10°C soil temp); growing season 30-60 days shorter
- Recovery: begins year 4-5 as temperatures moderate; corn is temperature-sensitive so recovers slower than wheat

### Wheat
- US baseline: ~47 million metric tons (2023)
- Nuclear winter impact: 50% global reduction for 5 years (150 Tg); winter wheat more resilient than spring wheat
- Primary mechanism: reduced growing season, reduced solar radiation
- Recovery: faster than corn (wheat tolerates cooler temperatures); spring wheat in southern regions could partially recover by year 4

### Soybeans
- US baseline: ~113 million metric tons (2023)
- Nuclear winter impact: Similar to corn (70-80% reduction); 15-40% decline sustained over decade in 150 Tg case
- Primary mechanism: soy requires warm temperatures and long photoperiod
- Recovery: tracks corn recovery closely

### Rice
- US baseline: ~6.5 million metric tons (minor US crop, grown in South/California)
- Nuclear winter impact: 30% first year; less affected than corn/wheat due to southern growing regions
- Primary mechanism: temperature and water availability
- Note: US rice production is minor; not a significant factor in national food security

## Livestock Impact Timeline

| Period | Livestock status | Caloric contribution | Notes |
|---|---|---|---|
| Months 1-3 | Emergency slaughter begins | High (one-time) | ~53 trillion calories from full inventory; but only 40-60% accessible without infrastructure |
| Months 3-6 | Hogs/poultry depleted; cattle being slaughtered | Moderate | Hogs cycle fast and are slaughtered first; poultry die from no feed within weeks |
| Months 6-12 | Cattle herd mostly consumed | Declining | Remaining cattle on pasture survive longer than grain-fed; dairy cows provide some calories |
| Year 2+ | Livestock essentially gone | Negligible | No feed crops available; remaining animals are breeding stock/wild |

Key calculation: US livestock (94M cattle × ~400 lbs edible meat + 75M hogs × ~120 lbs) yields ~47 trillion calories. At 2,000 cal/day for 200M survivors = 400 billion cal/day. Theoretical buffer: ~117 days. Realistic (40-60% accessible): 50-70 days.

However: "Even if half the livestock feed calories were diverted and consumed as human food, and all food wastage was also consumed, the authors calculate a shortfall in calories of close to 74% in this extreme 150 Tg scenario" (Xia et al. 2022).

## Marine Fisheries

- Pre-war US fish catch: ~4.5 million metric tons/year
- Nuclear winter impact: 29% (±7%) decline in global catch under business-as-usual (Harrison et al. 2020)
- Worst year: year 3 at 31% (±9%) decline
- Recovery: ~14 years to baseline
- Mechanism: reduced photosynthetically active radiation → reduced ocean primary productivity; linear relationship (~2% catch decline per 1 Tg soot)
- US-specific: largest decreases along midlatitudes; some tropical/subtropical increases
- Protein replacement potential: with optimal pre-war fishery management, could theoretically replace ~43% (±35%) of global animal protein supply — but this assumes fish stocks are healthy pre-war and infrastructure (boats, ports, processing) survives
- Reality: coastal infrastructure heavily damaged; fuel unavailable for fishing vessels; cold reduces fish biomass. Fishing becomes local/subsistence only.

## Alternative Food Assessment (ALLFED/Denkenberger)

### Available alternative foods (no sunlight required)
1. **Seaweed farming**: Could produce up to 160% of human calories in <1 year IF scaled (Denkenberger). Grows at 10%/day even in reduced light/temperature. Most promising single source. Could provide 45% of global calories averaged over 10 years.
2. **Mushrooms on dead wood**: Nuclear winter kills forests → vast dead biomass available. Mushrooms convert wood to food but inefficiently (~10% caloric conversion).
3. **Cellulose-to-sugar conversion (enzymatic)**: Industrial enzymes break cellulose into digestible sugars. Much more efficient than mushrooms but requires industrial infrastructure.
4. **Single-cell protein (bacteria)**: Methane-digesting bacteria produce protein-rich biomass. Requires methane (natural gas infrastructure) and bioreactors.
5. **Leaf protein concentrate**: Extraction from surviving plant matter. Small-scale, supplementary.

### Realistic assessment for US post-nuclear-war
- **No pre-war preparation exists.** ALLFED's research is theoretical. No nation has stockpiled enzymes, seaweed farming infrastructure at scale, or bacterial protein bioreactors for catastrophe scenarios.
- **With information only (no pre-built infrastructure):** Denkenberger estimates ~30% of population survives. People can learn to farm seaweed and mushrooms with instructions, but ramp-up takes 3-6 months and reaches limited scale without industrial support.
- **With full R&D and pre-positioning:** 60-80% survival theoretically possible. This scenario doesn't exist.
- **Practical impact on this mortality curve:** Alternative foods likely save 5-15% of population beyond what stored food + crops alone would sustain. The optimistic bound of this timeline's range accounts for partial alternative food deployment.

## Historical Famine Calibration

| Famine | Duration | Population loss | Caloric deficit (est.) | Context |
|---|---|---|---|---|
| Ireland 1845-52 | 7 years | 12.5% died + 12.5% emigrated | ~30-50% reduction | External food exported; political failure |
| China 1959-61 | 3 years | 3.5-7% (15-45M) | ~30-40% reduction | Collective farming failure; no external aid |
| Bengal 1943 | 1 year | 4-5% of Bengal (2-3M) | ~20-30% reduction | Wartime disruption + hoarding |
| Leningrad siege 1941-44 | 872 days | 33% (1M of 3M) | ~70-90% reduction | Near-total food cutoff; some supply |
| North Korea 1994-98 | 4 years | 3-5% (600K-1M) | ~40-60% reduction | Agricultural collapse + trade loss |

**Calibration insight:** The Leningrad siege is the closest historical analogue — a near-total food cutoff for a large population. 33% mortality over 2.5 years with ~80% caloric deficit and some external supply (Road of Life). Nuclear winter for the US represents a WORSE scenario: larger caloric deficit (>85% in years 2-3), no external supply possible, and compounded by radiation illness, infrastructure loss, and no heating fuel. This supports the 50-60% famine mortality estimate for years 1-5.

## Data Gaps

- **Year-by-year US-specific crop data not published separately.** Xia et al. 2022 provides country-level data in supplementary materials, but these are behind a paywall. The year-by-year US figures above are synthesized from multiple sources and should be treated as medium-confidence estimates.
- **Stored food accessibility post-nuclear-war.** No study models what fraction of stored grain is actually accessible after EMP + infrastructure destruction + displacement. The 40-60% accessibility assumption is a judgment call.
- **Social dynamics completely unmodeled.** All mortality estimates assume passive populations receiving equitable distribution. In reality: food hoarding, armed conflict over resources, regional warlordism, government rationing programs (or their failure) would dramatically alter the distribution of deaths. This likely increases mortality in the short term but may create pockets of organized survival.
- **Compound effects.** Nuclear winter hits simultaneously with EMP/grid collapse (ticket 019-023 territory), radiation illness, medication loss, and social breakdown. Each individually reduces food access; together they create cascading failures not captured by crop-production-only models.
- **Recovery assumptions.** The return-to-baseline-by-year-10 timeline assumes functioning agricultural infrastructure (seed stocks, machinery, fuel, knowledge). Post-nuclear-war, much of this is destroyed. Real recovery may take 15-20 years, but the reduced population means less food is needed.

## Sources

- Xia, L., Robock, A., Scherrer, K. et al. "Global food insecurity and famine from reduced crop, marine fishery and livestock production due to climate disruption from nuclear war soot injection." Nature Food 3, 586–596 (2022). https://www.nature.com/articles/s43016-022-00573-0 — Primary source: 90% global crop reduction by years 3-4 in 150 Tg scenario; >5 billion dead from famine globally; >90% US mortality from starvation.
- Harrison, C.S. et al. "Marine wild-capture fisheries after nuclear war." PNAS 117(47), 29748-29758 (2020). https://www.pnas.org/doi/10.1073/pnas.2008256117 — 29% catch decline, 18% biomass decline; 14-year recovery; fisheries cannot compensate for crop losses.
- Penn State University. "Simulating the unthinkable: Models show nuclear winter food production plunge." (2025). https://www.psu.edu/news/research/story/simulating-unthinkable-models-show-nuclear-winter-food-production-plunge — 80% corn yield reduction; UV-B adds 7% additional loss at years 6-8; adaptation potential of 10%.
- Denkenberger, D. & Pearce, J.M. "Feeding Everyone No Matter What." Academic Press (2014). Via 80,000 Hours podcast. https://80000hours.org/podcast/episodes/david-denkenberger-allfed-and-feeding-everyone-no-matter-what/ — Alternative foods could theoretically feed everyone 2-3x over; seaweed 45% of global calories; 10% survival without preparation, 60-80% with full R&D.
- ALLFED. "Resilient Food Solutions." https://allfed.info/resilient-foods — Seaweed, single-cell protein, cellulose-to-sugar, mushrooms as catastrophe foods; 3-6 month ramp-up for seaweed.
- WorldMetrics. "Nuclear Winter Statistics." (2026). https://worldmetrics.org/nuclear-winter-statistics/ — US corn belt 80% loss for 3 years; mid-latitude maize 90% shortfall for 7-10 years; 150 Tg gives 8-10°C cooling persisting 5-10 years; grain stocks last 2-3 months.
- USDA NASS. "United States Cattle Inventory." (2025-2026). https://www.nass.usda.gov/Newsroom/2025/07-25-2025.php — 94.2M cattle; hog inventory ~75M.
- Wikipedia. "Nuclear famine." https://en.wikipedia.org/wiki/Nuclear_famine — US corn 10% average decline over decade (regional war); global grain reserves 68-77 days; Tambora analogue (-0.7°C caused 75% crop loss).
- FAO. Global grain reserves data. Via Xia et al. 2022 supplementary. — 68-77 days global reserves.
- Ó Gráda, C. "Famine: A Short History." Princeton University Press (2009). — Historical famine mortality calibration data.

<!-- COMPLETE -->
