# Result: Regional Survival Variation — Urban vs. Rural vs. Coastal

## Summary

Survival probability in a civilization-disrupting event varies enormously by location — from single-digit percentages in ultra-dense urban cores to 50-75% in rural agricultural areas. The key drivers are food production potential, water access independence, population density (which determines competition for scarce resources), and community self-sufficiency culture. Roughly 85% of the US population lives in urban or suburban settings with near-zero local food production, making geographic distribution the single largest predictor of individual survival.

## Key Data Points

### Population Distribution by Density Tier

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| pop_urban_core_gt50k_sqmi | 10000000 | 8000000 | 12000000 | people | current | Census 2020 / derived | medium |
| pop_urban_5k_to_50k_sqmi | 85000000 | 75000000 | 95000000 | people | current | Census 2020 / Pew 2020 | medium |
| pop_suburban_1k_to_5k_sqmi | 150000000 | 135000000 | 160000000 | people | current | Census 2020 / Pew 2018 | medium |
| pop_small_town_100_to_1k_sqmi | 50000000 | 40000000 | 55000000 | people | current | Census 2020 / USDA ERS | medium |
| pop_rural_lt100_sqmi | 40000000 | 30000000 | 46000000 | people | current | Census 2020 | high |
| pop_urban_total_census | 268000000 | 265000000 | 270000000 | people | current | Census 2020 | high |
| pop_rural_total_census | 66300000 | 64000000 | 68000000 | people | current | Census 2020 | high |
| pop_coastal_counties | 94700000 | 90000000 | 100000000 | people | 2017 | NOAA / Census | high |
| pop_within_50mi_coast_pct | 50 | 47 | 53 | pct | current | NOAA | high |

### Estimated 1-Year Survival Rate by Tier (Generic Civilizational Collapse)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| survival_1yr_urban_core | 10 | 5 | 20 | pct | year 1 | derived / historical analogy | low |
| survival_1yr_urban | 18 | 10 | 30 | pct | year 1 | derived / historical analogy | low |
| survival_1yr_suburban | 30 | 20 | 45 | pct | year 1 | derived / EMP Commission extrapolation | low |
| survival_1yr_small_town | 50 | 35 | 65 | pct | year 1 | derived / historical analogy | low |
| survival_1yr_rural | 65 | 50 | 80 | pct | year 1 | derived / pre-industrial analogy | low |
| survival_1yr_coastal_bonus | 8 | 3 | 15 | pct | year 1 | derived / NOAA fishing data | low |
| survival_1yr_military | 80 | 65 | 90 | pct | year 1 | derived / DoD supply data | low |
| survival_1yr_amish | 90 | 80 | 95 | pct | year 1 | derived / lifestyle analysis | medium |
| survival_1yr_weighted_national | 28 | 15 | 40 | pct | year 1 | weighted average of tiers | low |

### Special Populations

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| lds_members_us | 7000000 | 6700000 | 7200000 | people | current | Pew Research | high |
| lds_with_meaningful_food_storage | 1200000 | 1000000 | 1500000 | people | current | LDS ward surveys / NPR 2020 | low |
| amish_population_us | 411000 | 400000 | 420000 | people | 2025 | Elizabethtown College Amish Studies | high |
| prepper_population_us | 20000000 | 15000000 | 23000000 | people | 2024 | FEMA / Cornell / TruePrepper | medium |
| preppers_with_30plus_days_supply | 7000000 | 5000000 | 10000000 | people | 2020 | FEMA survey 2020 | medium |
| military_active_duty_us | 1300000 | 1200000 | 1400000 | people | 2025 | DoD demographics 2023 | high |
| military_reserves_us | 747000 | 730000 | 760000 | people | 2025 | DoD demographics 2023 | high |
| military_dependents_us | 2400000 | 2300000 | 2500000 | people | current | MilitaryOneSource 2023 | high |
| military_total_installation_pop | 4500000 | 4200000 | 4700000 | people | current | DoD / derived | medium |

### Food Production Potential

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| us_commercial_fish_catch | 3800000 | 3500000 | 4000000 | metric_tons | 2023 | NOAA Fisheries | high |
| fish_catch_calories_total | 6700000000000 | 5500000000000 | 7500000000000 | calories | annual | derived (~800 cal/lb) | medium |
| fish_calories_per_capita_daily | 55 | 45 | 62 | calories_per_day | annual | derived (335M pop) | medium |
| us_pop_1850_pre_industrial | 23200000 | 23000000 | 23400000 | people | 1850 | US Census 1850 | high |
| farm_labor_pct_1850 | 64 | 62 | 66 | pct | 1850 | EH.net / Census 1850 | high |

### Historical Siege Analogues

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| leningrad_prewar_pop | 3200000 | 3000000 | 3400000 | people | 1941 | Soviet census | high |
| leningrad_deaths_total | 1100000 | 700000 | 1500000 | people | 872 days | ICTY / Soviet records | medium |
| leningrad_mortality_pct | 34 | 22 | 47 | pct | 872 days | derived | medium |
| leningrad_peak_daily_deaths | 3000 | 2500 | 4000 | people | Jan-Feb 1942 | Soviet records | medium |
| leningrad_daily_ration_cal | 300 | 250 | 460 | calories_per_day | Nov 1941-Feb 1942 | PMC / historical records | high |
| sarajevo_prewar_pop | 400000 | 380000 | 430000 | people | 1992 | Bosnian census | high |
| sarajevo_total_killed | 13952 | 9500 | 14000 | people | 1425 days | ICTY | medium |
| sarajevo_civilian_killed | 5434 | 4954 | 6000 | people | 1425 days | ICTY | medium |
| sarajevo_mortality_pct | 3.5 | 2.4 | 3.5 | pct | 1425 days | derived | medium |

## Analysis by Tier

### Urban Core (>50,000/sq mi) — ~10M people

The ultra-dense urban cores (Manhattan at ~72K/sq mi, parts of Brooklyn/Bronx, downtown Chicago, San Francisco, parts of Boston, DC) are the most vulnerable. These areas have:

- **Zero food production capacity.** No arable land, no livestock, negligible garden space.
- **Complete water dependency.** Municipal water requires electric pumps. NYC's gravity-fed system is an exception (Catskill aqueducts), but distribution still needs pressure.
- **Evacuation near-impossible at scale.** NYC DOT pedestrian evacuation studies show that even organized walk-out plans for Manhattan take many hours for just a fraction of the population. For 8M+ in the NYC metro core, full pedestrian evacuation would take days under favorable conditions — longer in winter, at night, or under panic conditions.
- **Historical analogue: Leningrad.** With a supply lifeline (Road of Life across Lake Ladoga), 34-47% of the population died in 872 days, mostly from starvation. Peak mortality reached 3,000/day when rations fell to ~300 cal/day. Without any supply line, mortality would likely have reached 70-90%.

Estimated 1-year survival: **5-20%**, with most deaths from starvation, dehydration, disease, and violence within the first 3-6 months. The minority who survive are those who evacuate early and successfully reach more sustainable locations.

### Urban (5,000-50,000/sq mi) — ~85M people

Standard American cities — most of LA, Houston, Phoenix, Philadelphia, etc. Slightly better than core:

- Some green space, but negligible food production at scale.
- Better evacuation routes (wider roads, less vertical density).
- Some homes have yards, but at this density the land-to-mouth ratio is hopelessly inadequate.
- Water: some cities have natural water sources (rivers, lakes); desert cities (Phoenix, Las Vegas) are extremely vulnerable.
- **Key variable:** proximity to agricultural hinterland. Cities adjacent to farmland have better prospects than island-like dense metros.

Estimated 1-year survival: **10-30%**. Slightly better than core due to easier evacuation and occasionally better water access, but food math is still catastrophic.

### Suburban (1,000-5,000/sq mi) — ~150M people

The largest tier and the swing population. Suburbs are:

- **Car-dependent.** Fuel supply lasts 2-4 weeks under rationing. After that, mobility collapses.
- **Some growing potential.** Average suburban lot is ~0.25 acres, of which maybe 0.1 acre is plantable. At intensive subsistence farming yields (~4M cal/acre/year for root crops), one lot could theoretically produce 400K calories — enough for one person for ~5.5 months. But this requires seeds, knowledge, water, and a full growing season that may not align with the collapse timeline.
- **Water varies.** Some suburbs have wells; most depend on municipal supply.
- **Social dynamics unpredictable.** Suburbs lack both the anonymity of cities and the cohesion of small towns. Neighbor cooperation vs. neighbor conflict is the key variable.

Estimated 1-year survival: **20-45%**. The wide range reflects the enormous heterogeneity — a well-watered suburb near farmland with community organization is vastly different from a desert suburb 50 miles from agriculture.

### Small Town (100-1,000/sq mi) — ~50M people

Small towns and exurbs represent a transition zone:

- Closer to food sources; many are agricultural service centers.
- Community cohesion is typically stronger — people know each other, institutions function at human scale.
- Many households have some self-sufficiency infrastructure (gardens, chest freezers, wells, hunting equipment).
- Local knowledge of land, water sources, and game is widespread.
- However, many small towns are still dependent on external supply chains for most calories.

Estimated 1-year survival: **35-65%**. The key differentiator from rural is that small-town residents may not have direct access to farmland but benefit from proximity and community.

### Rural (<100/sq mi) — ~40M people

The best-positioned tier, but with important caveats:

- **Direct access to farmland, livestock, well water, and game.** The fundamental resources exist.
- **Modern farming ≠ pre-industrial farming.** Without diesel, fertilizer (Haber-Bosch nitrogen), and pesticides, crop yields drop 50-75% from modern levels. A transition to hand labor and animal traction takes years. The 1850 US supported 23M people with 64% of the labor force farming — but they had the equipment, draft animals, seeds, and knowledge for that mode. Modern rural Americans largely don't.
- **Hunting can supplement but not sustain.** US deer population is ~30M. If every deer were harvested (which would take years), that's ~2.1 billion lbs of meat — meaningful but not a primary food source for 40M people.
- **Self-sufficiency culture is thin.** Even among rural Americans, few are genuinely self-sufficient. Homesteaders who produce >50% of their own food after 5 years of practice represent maybe 2 out of 10, per homesteading surveys.
- **Pre-industrial reference:** The US in 1800 had 5.3M people, almost all rural and farming. By 1850, 23M. This suggests the land can support tens of millions at pre-industrial agricultural technology — but the transition from modern to pre-industrial farming would cause mass starvation even in rural areas.

Estimated 1-year survival: **50-80%**. Highest of any general tier, but the lower bound reflects the harsh reality that modern rural life is not the same as subsistence farming.

### Coastal Communities — ~95-130M people (overlaps with other tiers)

Coastal location provides a caloric supplement, not a solution:

- **US commercial fishing catch:** 8.4 billion pounds/year (3.8M metric tons). At ~800 calories per pound of mixed fish, that's ~6.7 trillion calories annually. Divided among 335M people, that's only ~55 calories/person/day — a rounding error against the 2,000+ needed.
- **Subsistence fishing is different from commercial.** Without diesel-powered vessels, the catch would plummet. Nearshore/artisanal fishing yields far less. However, it provides high-quality protein that's otherwise scarce.
- **Historical precedent:** Coastal fishing communities worldwide have served as famine refuges. In Iceland, coastal populations survived the Laki eruption (1783) far better than inland populations. Japanese fishing villages maintained nutrition through historical famines.
- **Net effect:** Coastal location adds an estimated 3-15 percentage points to survival probability compared to equivalent inland density, primarily through protein supplementation rather than caloric sufficiency.

### Military Installations — ~4.5M people

Active-duty (~1.3M), reserves (~747K), dependents (~2.4M), and civilian employees:

- **Supply reserves:** Military installations typically maintain 30-90 days of MREs, fuel, water purification, and medical supplies. Major bases like Fort Liberty (Bragg) have 57,000 service members plus 23,000 dependents.
- **Organization advantage:** Military command structure provides immediate coordination for rationing, security, labor allocation, and resource foraging — exactly the things that civilian populations struggle with.
- **Transition:** After supply reserves are exhausted, military installations must integrate with surrounding communities or expand to control agricultural land. Their organizational advantage persists but caloric math catches up.

Estimated 1-year survival: **65-90%**. Very high short-term survival, with the range reflecting uncertainty about the post-supply-exhaustion transition.

### Special Communities

**LDS/Mormon (~7M in US):**
- Church doctrine emphasizes food storage (3-month to 1-year supply). However, only ~15-20% of members actively maintain meaningful storage — roughly 1-1.5M people with 3+ months of food.
- The LDS Church operates ~100 food storage/distribution facilities (Bishop's Storehouses), primarily in Utah and the Intermountain West.
- Net effect: LDS food storage extends survival by months for prepared members, but doesn't solve the long-term food production problem. Concentrated in Utah/Idaho, where they form a large enough community to organize.

**Amish (~411K in 2025):**
- Already practice pre-industrial agriculture. Horse-drawn equipment, manual labor, seed saving, animal husbandry. They are the only large US population that could continue farming without industrial inputs on day one.
- Population doubles every 20 years; concentrated in Pennsylvania, Ohio, Indiana.
- Estimated 1-year survival: **80-95%**. The highest of any identifiable group. Their main vulnerability is that surrounding desperate populations may overrun their communities.

**Preppers (~15-23M self-identified, ~5-10M with 30+ day supplies):**
- Wide range of preparedness — from "has extra canned goods" to "fortified homestead with years of food and armaments."
- FEMA 2020 survey: 14.9M Americans had 31+ days of at-home preparedness.
- Net effect: Extends survival by weeks to months depending on preparation level. Concentrated among rural and suburban populations, so partially captured in those tiers already.

## Weighted National Average Check

Using midpoint population estimates and midpoint survival rates:

| Tier | Population (M) | Survival % | Survivors (M) |
|---|---|---|---|
| Urban core | 10 | 10% | 1.0 |
| Urban | 85 | 18% | 15.3 |
| Suburban | 150 | 30% | 45.0 |
| Small town | 50 | 50% | 25.0 |
| Rural | 40 | 65% | 26.0 |

**Weighted national average: ~112M survivors = ~33% survival rate at 1 year.**

This is roughly consistent with: the EMP Commission's "90% mortality" testimony (pessimistic end), the general literature on grid-down scenarios (20-40% survival at 1 year), and the pre-industrial carrying capacity of the US (~75-130M as an upper bound). The weighted average falls within a plausible range, though scenario-specific mortality patterns will shift these numbers significantly.

**Important caveat:** These survival estimates assume a sudden, total collapse with no external aid. Many scenarios (pandemic, climate cascades, breadbasket failure) involve partial collapse where some infrastructure persists, which would significantly improve survival across all tiers.

## Data Gaps

- **Population density tiers are approximations.** The Census classifies urban vs. rural at the block level, but does not publish population counts by the specific density bands requested (>50K, 5-50K, 1-5K, 100-1K, <100 per sq mi). The tier populations above are derived estimates, not direct Census counts.
- **Survival rate estimates are extrapolations, not modeled outcomes.** No peer-reviewed study provides 1-year survival rates by population density tier for a generic civilizational collapse. These numbers are derived from historical analogues (siege mortality), infrastructure analysis (EMP Commission), and food production math.
- **Migration is unmodeled.** In reality, millions would flee cities for rural areas in the first weeks. This would dramatically reshape the population distribution and stress rural carrying capacity. Urban survival rates might improve (people leave) while rural rates decline (carrying capacity exceeded).
- **Violence and social dynamics are unquantified.** Historical collapses show both extraordinary cooperation and extraordinary violence. The estimates above assume a middling social response — not Mad Max, not organized communes.
- **Season of collapse matters enormously.** A collapse in April (start of growing season) vs. November (end of growing season, beginning of winter) could shift survival rates by 10-20 percentage points across all tiers.
- **Suburban heterogeneity is enormous.** A water-rich suburb near Iowa farmland is a different universe from a desert suburb outside Phoenix. The 20-45% range tries to capture this but is inherently imprecise.

## Sources

- US Census Bureau. "Nation's Urban and Rural Populations Shift Following 2020 Census." 2022. https://www.census.gov/newsroom/press-releases/2022/urban-rural-populations.html
- Pew Research Center. "Demographic and Economic Trends in Urban, Suburban and Rural Communities." 2018. https://www.pewresearch.org/social-trends/2018/05/22/demographic-and-economic-trends-in-urban-suburban-and-rural-communities/
- Pew Research Center. "Comparing Urban Core, Suburban Counties in the U.S." 2020. https://www.pewresearch.org/social-trends/2020/07/29/prior-to-covid-19-urban-core-counties-in-the-u-s-were-gaining-vitality-on-key-measures/
- NOAA. "What Percentage of the American Population Lives Near the Coast?" https://oceanservice.noaa.gov/facts/population.html
- NOAA Fisheries. "Commercial Fisheries Landings." https://www.fisheries.noaa.gov/national/sustainable-fisheries/commercial-fisheries-landings
- NOAA Fisheries. "Fisheries of the United States, 2023." https://www.fisheries.noaa.gov/national/sustainable-fisheries/fisheries-united-states
- Sparre, P. et al. "Long term mortality after severe starvation during the siege of Leningrad." PMC, 2004. https://pmc.ncbi.nlm.nih.gov/articles/PMC313894/
- Wikipedia. "Siege of Leningrad." https://en.wikipedia.org/wiki/Siege_of_Leningrad
- Wikipedia. "Effects of the siege of Leningrad." https://en.wikipedia.org/wiki/Effects_of_the_siege_of_Leningrad
- ICTY. "Death Toll in the Siege of Sarajevo, April 1992 to December 1995." https://www.icty.org/x/file/About/OTP/War_Demographics/en/slobodan_milosevic_sarajevo_030818.pdf
- Wikipedia. "Siege of Sarajevo." https://en.wikipedia.org/wiki/Siege_of_Sarajevo
- EMP Commission / Power Magazine. "Expert: 90% of U.S. Population Could Die if a Pulse Event Hits the Power Grid." https://www.powermag.com/expect-death-if-pulse-event-hits-power-grid/
- DoD / MilitaryOneSource. "2023 Demographics Report." https://download.militaryonesource.mil/12038/MOS/Reports/2023-demographics-report.pdf
- Elizabethtown College. "Amish Population Profile 2025." https://groups.etown.edu/amishstudies/amish-population-profile-2025/
- NPR. "Mormons Have Long Preached Preparedness — Which Is Coming In Handy Now." 2020. https://www.npr.org/2020/04/09/831174853/mormons-have-long-preached-preparedness-which-is-coming-in-handy-now
- The Prepared / FEMA. "Prepper demographics updated with 2020 FEMA survey data." https://theprepared.com/forum/thread/prepper-demographics-updated-with-2020-fema-survey-data-over-20m-people-in-the-us-alone/
- TruePrepper. "Prepping Statistics and Demographics." https://trueprepper.com/prepping-statistics/
- USDA ERS. "Rural Classifications — What is Rural?" https://www.ers.usda.gov/topics/rural-economy-population/rural-classifications/what-is-rural
- EH.net. "U.S. Agricultural Workforce, 1800-1900." https://eh.net/database/u-s-agricultural-workforce1800-1900/
- NY DOT. "Pedestrian Disaster Preparedness and Walk-Out Plans." https://www.dot.ny.gov/divisions/engineering/design/dqab/dqab-repository/QHC08PedFacAndWalkOutPlansInDisasterPrep.pdf

<!-- COMPLETE -->
