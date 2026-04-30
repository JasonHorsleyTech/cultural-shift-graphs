# Result: Pre-Industrial US Agricultural Carrying Capacity

## Summary

The continental US could support roughly 100–200 million people with pre-industrial agriculture (draft animals, no synthetic fertilizer, no hybrid seeds), based on convergent evidence from historical farm output, Haber-Bosch dependency analysis, and Pimentel's energy-agriculture modeling. The range widens dramatically depending on assumed technology level: hand-labor-only subsistence drops to 30–80 million, while early mechanized (tractors but no Haber-Bosch) could stretch to 150–250 million. A critical finding is that the US was never at carrying capacity during the pre-industrial period — it was a massive net food exporter even in 1900 with 76 million people and 1860s-era yields.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| carrying_capacity_hand_labor_only | 50000000 | 30000000 | 80000000 | people | steady_state | extrapolation from subsistence farming yields | low |
| carrying_capacity_draft_animal_era | 150000000 | 100000000 | 200000000 | people | steady_state | historical US farm output 1880-1910 + Pimentel | medium |
| carrying_capacity_pre_fertilizer_mechanized | 200000000 | 150000000 | 250000000 | people | steady_state | 1920s-1930s yields, tractor replaces horse feed acreage | medium |
| us_population_1800 | 5300000 | — | — | people | 1800 | US Census | high |
| us_population_1850 | 23200000 | — | — | people | 1850 | US Census | high |
| us_population_1900 | 76200000 | — | — | people | 1900 | US Census | high |
| us_population_1920 | 106000000 | — | — | people | 1920 | US Census | high |
| total_farmland_1900 | 841000000 | — | — | acres | 1900 | USDA Census of Agriculture | high |
| improved_farmland_1900 | 415000000 | — | — | acres | 1900 | USDA Census of Agriculture | high |
| total_farms_1850 | 1449000 | — | — | farms | 1850 | USDA Census of Agriculture | high |
| total_farms_1900 | 5740000 | — | — | farms | 1900 | USDA Census of Agriculture | high |
| total_farms_1910 | 6400000 | — | — | farms | 1910 | USDA Census of Agriculture | high |
| corn_yield_pre_hybrid | 26 | 20 | 30 | bushels_per_acre | 1866-1936 | USDA NASS, Purdue Extension | high |
| wheat_yield_pre_hybrid | 13 | 12 | 14 | bushels_per_acre | 1870-1900 | FRED/USDA historical data | high |
| potato_yield_pre_hybrid | 99 | 85 | 115 | bushels_per_acre | 1914-1923 | USDA NASS | high |
| corn_calories_per_acre_pre_industrial | 2180000 | 1680000 | 2520000 | calories | 1866-1936 | calculated: 26 bu × 56 lb/bu × 1500 cal/lb | medium |
| wheat_calories_per_acre_pre_industrial | 1160000 | 1070000 | 1250000 | calories | 1870-1900 | calculated: 13 bu × 60 lb/bu × 1485 cal/lb | medium |
| potato_calories_per_acre_pre_industrial | 2020000 | 1730000 | 2340000 | calories | 1914-1923 | calculated: 99 bu × 60 lb/bu × 340 cal/lb | medium |
| corn_yield_modern | 180 | 170 | 190 | bushels_per_acre | 2020s | USDA NASS | high |
| wheat_yield_modern | 50 | 47 | 53 | bushels_per_acre | 2020s | USDA NASS | high |
| yield_multiplier_fertilizer_plus_hybrids | 5.5 | 4.0 | 7.0 | ratio | pre-1940 vs 2020s | USDA yield comparison (corn: 26→180 bu) | high |
| draft_animal_population_1900 | 21500000 | 21000000 | 22000000 | animals | 1900 | USDA/Census, Yale Energy History | high |
| draft_animal_population_1910 | 27500000 | 27000000 | 28000000 | animals | 1910 | USDA/Census, Yale Energy History | high |
| draft_animal_population_current | 300000 | 200000 | 500000 | animals | current | breed registry estimates | low |
| farmland_for_horse_feed_1915 | 93000000 | 80000000 | 100000000 | acres | 1915 | USDA, NBER working paper | medium |
| farmland_pct_for_horse_feed | 27 | 20 | 33 | pct_of_harvested_cropland | 1915 | USDA | medium |
| irrigated_cropland_current | 55000000 | 53000000 | 58000000 | acres | 2022 | USDA Census of Agriculture 2022 | high |
| irrigated_pct_of_cropland | 15 | 14 | 17 | pct | 2022 | USDA ERS | high |
| rainfed_cropland_current | 341000000 | 338000000 | 343000000 | acres | 2022 | calculated: 396M total - 55M irrigated | high |
| topsoil_lost_corn_belt | 35 | 24 | 46 | pct_of_original | current | Evan Thaler-Null et al. (PNAS 2021) | medium |
| topsoil_depth_iowa_original | 16 | 14 | 18 | inches | pre-1900 | USDA NRCS historical | medium |
| topsoil_depth_iowa_current | 7 | 6 | 8 | inches | current | USDA NRCS | medium |
| haber_bosch_dependency_global | 48 | 40 | 50 | pct_of_population | 2015 | Smil 2001/2004, Our World in Data | high |
| yield_attributable_to_synthetic_fertilizer | 40 | 30 | 50 | pct_of_crop_yield | current | Stewart et al. 2005, Smil 2004 | high |
| pimentel_optimal_us_population | 200000000 | 100000000 | 200000000 | people | sustainable | Pimentel & Giampietro 1994 | medium |

## Analysis

### What "pre-industrial" means — three technology tiers

The ticket correctly identifies that "pre-industrial" is not a single number. There are at least three meaningful tiers:

**Tier 1 — Hand labor only (no draft animals, no fertilizer, no hybrid seeds):**
This is the relevant scenario for a sudden collapse where draft animal herds don't exist. One person can work roughly 5–10 acres by hand. Pre-industrial corn yields were ~26 bu/acre, giving ~2.18M calories/acre. At 730,000 cal/person/year (2,000 cal/day), one acre of corn theoretically feeds ~3 people. But you need crop rotation (⅓ to ½ of land fallow or in legumes), dietary variety, seed reserves, and losses to pests/weather. Realistically, 2–3 acres per person are required, with huge labor constraints. With 300–400M theoretically farmable acres and severe labor bottlenecks, the realistic range is 30–80 million.

**Tier 2 — Draft animal era (~1880–1910 technology):**
This is the most historically grounded estimate. In 1900, the US had 76M people, 415M improved acres, 21.5M horses and mules (eating ~27% of cropland output), and was a major net food exporter. The US was clearly not at carrying capacity — agriculture represented 62% of exports. Extrapolating from the surplus: the 1900 system could likely have fed 100–150M people domestically without exports, and possibly up to 200M with full land utilization and diet optimization. Pimentel's sustainable estimate of 100–200M for a no-fossil-fuel US converges with this range.

**Tier 3 — Early mechanized, pre-Haber-Bosch (1920s–1930s tractors, no synthetic fertilizer):**
Tractors eliminate the enormous horse-feed tax (93M acres in 1915 — 27% of harvested cropland). This reclaimed acreage goes directly to human food. Yields remain ~26 bu/acre corn and ~14 bu/acre wheat (hybrids hadn't taken off yet), but the effective food-producing acreage jumps by ~25%. This tier could plausibly support 150–250M.

### Historical evidence: the US was never food-constrained

At no point from 1800 to 1920 was the US at agricultural carrying capacity. It was expanding westward, converting prairie to farmland, and exporting massive quantities of food:
- 1860: 16M bushels of wheat exported
- Agriculture was 65–87% of total US exports from 1800–1860
- By 1900, agriculture was still 62% of exports

The 1900 population of 76M on 415M improved acres represents roughly 5.5 improved acres per person — well above the ~2–3 acres/person minimum needed for subsistence. The surplus was enormous.

### The Haber-Bosch discontinuity

Synthetic nitrogen (available ~1913, widespread by 1950s) roughly doubled yields when combined with other Green Revolution inputs. Smil estimates that without Haber-Bosch, global crop harvests would be ~50% of current levels. Stewart et al. (2005) attribute 30–50% of yield increases specifically to synthetic fertilizer. The remaining yield gains come from hybrid/GMO seeds, mechanization, irrigation, and pesticides — all of which also depend on fossil fuels.

For US carrying capacity, this means:
- Modern yields (corn 180 bu/acre) include ALL inputs: fertilizer + hybrids + irrigation + pesticides
- Removing ONLY fertilizer: yields drop ~30–50% → ~90–126 bu/acre corn
- Removing fertilizer AND hybrids AND pesticides (true pre-industrial): yields return to ~26 bu/acre → a ~7x reduction

### The soil degradation discount

Modern soils are significantly degraded compared to 1900:
- Corn Belt has lost 24–46% of its topsoil
- Iowa: 14–18" original depth → 6–8" today
- Midwest has lost 57.6 billion metric tons of topsoil in 160 years
- Erosion rate: 1.9mm/year; regeneration rate: 1 inch per 1,000 years

This means pre-industrial carrying capacity estimates based on 1900-era yields may need a 20–40% discount if applied to today's degraded soils. A field that produced 26 bu/acre of corn in 1900 with full topsoil might produce only 15–22 bu/acre today without modern inputs compensating for lost soil quality.

### Draft animal rebuild timeline

The current US draft horse/mule population is roughly 200,000–500,000 (mostly recreational). In 1900, there were 21.5M. Horses reproduce slowly — one foal per mare per year, with 5 years to working age. Even at maximum breeding effort, doubling the population takes 4–5 years. Reaching 1900-era levels from current stock would take approximately 15–25 years. This creates a critical gap in any post-collapse scenario: draft animal-dependent agriculture cannot be restored quickly.

### Caloric yield comparison by crop and era

| Crop | Pre-industrial bu/acre | Cal/acre (pre-industrial) | Modern bu/acre | Cal/acre (modern) | Ratio |
|---|---|---|---|---|---|
| Corn | 26 | 2,180,000 | 180 | 15,120,000 | 6.9x |
| Wheat | 13 | 1,160,000 | 50 | 4,455,000 | 3.8x |
| Potatoes | 99 | 2,020,000 | 450+ | 9,180,000+ | 4.5x |

Potatoes are the strongest subsistence crop — high caloric yield even without modern inputs, and Arthur Young's 1760s surveys showed potatoes yielded roughly 3x the calories per acre of cereal grains. In a collapse scenario, rapid conversion to potato-heavy diets would significantly increase carrying capacity.

## Data Gaps

- **Transition period carrying capacity.** The 100–200M estimate assumes a functioning pre-industrial agricultural system with experienced farmers, seed stocks, and draft animals. The gap between "steady-state pre-industrial capacity" and "what can be achieved in year 1 after modern systems collapse" is enormous and under-studied. ALLFED has some work here but no US-specific transition models.
- **Soil quality impact on pre-industrial yields.** No study directly measures what pre-industrial yields would look like on today's degraded soils. The 20–40% discount is extrapolation from topsoil loss data, not direct measurement.
- **Hand-labor productivity.** The Tier 1 estimate is the weakest because modern Americans have no subsistence farming experience. Labor output per person is highly uncertain — the 5–10 acres/person figure comes from historical peasant agriculture with lifetime expertise.
- **Peters et al. carrying capacity study.** The 402–807M figure from Peters et al. (2016) assumes MODERN agricultural inputs and technology. It is not a pre-industrial estimate and should not be used as one.
- **Draft animal population data.** Current draft horse numbers are estimates from breed registries, not systematic counts. The 200K–500K range is rough.

## Sources

- Smil, Vaclav. *Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production.* MIT Press, 2001.
- Smil, Vaclav. "Nitrogen and Food Production: Proteins for Human Diets." *Ambio* 31(2), 2002.
- Stewart, W.M. et al. "The Contribution of Commercial Fertilizer Nutrients to Food Production." *Agronomy Journal* 97(1), 2005.
- Ritchie, Hannah. "How many people does synthetic fertilizer feed?" *Our World in Data*, 2017. https://ourworldindata.org/how-many-people-does-synthetic-fertilizer-feed
- Pimentel, David and Giampietro, Mario. "Food, Land, Population and the U.S. Economy." Carrying Capacity Network, 1994.
- Pimentel, David. "Will Limits of the Earth's Resources Control Human Numbers?" *Environment, Development and Sustainability* 1, 1999.
- Peters, Christian J. et al. "Carrying capacity of U.S. agricultural land: Ten diet scenarios." *Elementa: Science of the Anthropocene* 4, 2016.
- USDA National Agricultural Statistics Service. *Crop Production Historical Track Records*, 2019. https://www.nass.usda.gov/Publications/Todays_Reports/reports/croptr19.pdf
- USDA Census of Agriculture historical data (1850–2022). https://www.nass.usda.gov/AgCensus/
- Purdue University Extension. "Historical Corn Grain Yields in the U.S." https://www.agry.purdue.edu/ext/corn/news/timeless/YieldTrends.html
- University of Nebraska–Lincoln PASSEL. "Corn Grain Yields, 1870 to 1930." https://passel2.unl.edu/view/lesson/c3ded390efbf/7
- Yale Energy History. "Horse and Mule Population Statistics." https://energyhistory.yale.edu/horse-and-mule-population-statistics/
- Thaler-Null, Evan et al. "The extent of soil loss across the US Corn Belt." *PNAS* 118(8), 2021.
- USDA Economic Research Service. "Irrigation & Water Use." https://www.ers.usda.gov/topics/farm-practices-management/irrigation-water-use
- USDA NRCS. Soil survey and arable land classification data.
- FRED (Federal Reserve Economic Data). "Wheat Crop, Yield Per Acre for United States." https://fred.stlouisfed.org/series/A0137GUSA254NNBR
- NBER Working Paper 7947. "The Diffusion of the Tractor in American Agriculture: 1910–1960." https://www.nber.org/system/files/working_papers/w7947/w7947.pdf
- Waisanen & Bliss. "Changes in population and agricultural land in conterminous United States counties, 1790 to 1997." *Global Biogeochemical Cycles* 16(4), 2002.
- Smithsonian Magazine. "The Nation's Corn Belt Has Lost a Third of Its Topsoil." 2021.

<!-- COMPLETE -->
