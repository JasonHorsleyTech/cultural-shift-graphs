# Result: Global Food Trade Disruption — Cascading Effects on US Food Security

## Summary

The US is among the world's most food-secure nations, producing roughly 3x its domestic caloric needs and exporting $176 billion in agricultural products annually (2024). In a trade disruption, the US could feed itself in the short term — its critical vulnerability is not calories but fertilizer inputs. The US imports ~90% of its potash (primarily from Canada) and ~25% of its nitrogen fertilizer; without these, crop yields decline 40–60% within 2–3 years, potentially dropping the US from feeding 335M+ to feeding 130–200M from domestic production alone.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| us_caloric_self_sufficiency_ratio | 120 | 115 | 130 | pct | current | USDA ERS / Savills 2024 | high |
| us_food_supply_per_capita | 3800 | 3600 | 4000 | calories_per_day | current | USDA ERS / U Michigan CSS | high |
| us_food_exports_value | 176 | 174 | 178 | billion_usd | 2024 | USDA FAS 2024 Yearbook | high |
| us_food_imports_value | 204 | 200 | 208 | billion_usd | 2024 | USDA ERS / Rethink Trade | high |
| us_food_trade_deficit_value | 58.7 | 55 | 62 | billion_usd | 2024 | Rethink Trade 2024 | medium |
| us_nitrogen_fertilizer_import_pct | 25 | 18 | 33 | pct | current | USDA ERS / farmdoc daily | high |
| us_potash_import_pct | 90 | 85 | 93 | pct | current | USGS MCS 2025 | high |
| us_potash_from_canada_pct | 79 | 75 | 85 | pct | 2020-2023 | USGS MCS 2025 | high |
| us_phosphate_import_pct | 13 | 10 | 27 | pct | current | USDA ERS | medium |
| corn_yield_decline_without_nitrogen | 40 | 35 | 60 | pct | year 1-2 | Mosaic Crop Nutrition / U Missouri | high |
| wheat_yield_decline_without_fertilizer | 40 | 35 | 57 | pct | year 1-2 | Oklahoma State / U Missouri | high |
| total_yield_attributable_to_fertilizer | 50 | 30 | 60 | pct | current | Multiple long-term trials | high |
| us_yield_with_no_fertilizer_imports | 70 | 55 | 80 | pct_of_current | year 1-3 | Derived: domestic fert + soil reserves | medium |
| us_yield_with_no_fertilizer_at_all | 45 | 40 | 60 | pct_of_current | year 2-5 | Long-term trial data extrapolation | medium |
| us_feedable_pop_no_trade_short_term | 335000000 | 300000000 | 335000000 | people | year 0-1 | Derived: caloric surplus | medium |
| us_feedable_pop_no_fertilizer_imports | 235000000 | 185000000 | 270000000 | people | year 2-3 | Derived: yield decline + surplus | low |
| us_feedable_pop_no_fertilizer_at_all | 165000000 | 130000000 | 200000000 | people | year 3-5 | Derived: 45% yield × 3x surplus | low |
| farm_diesel_dependency | 75 | 70 | 80 | pct_of_equipment | current | Engine Technology Forum | high |
| us_net_petroleum_position | 1.64 | 1.5 | 1.8 | million_barrels_per_day_net_export | 2023 | EIA 2024 | high |
| export_ban_cascade_rice_price_increase | 45 | 30 | 50 | pct | 2007-2008 | Headey & Fan / World Bank | high |
| export_ban_cascade_wheat_price_increase | 30 | 20 | 40 | pct | 2007-2008 | OECD / World Bank | high |
| fao_food_price_index_riot_threshold | 210 | 200 | 220 | index_points | 2008-2011 | Lagi et al. 2011 (NECSI) | medium |
| countries_with_food_riots_2011 | 48 | 40 | 50 | countries | 2011 | CSIS / ASP | medium |
| soil_nitrogen_depletion_rate | 18.7 | 15 | 25 | kg_per_ha_per_year | continuous | Global Soil Nutrient Depletion studies | medium |
| allfed_survivable_population_pct | 80 | 60 | 85 | pct | with_preparation | Denkenberger / ALLFED | low |

## Analysis

### Short-term (Year 0–1): US is well-positioned

The US produces roughly 120% of its caloric needs domestically, with a food supply of ~3,800 calories per capita per day (vs. ~2,000–2,500 consumed). Even accounting for livestock feed inefficiencies and waste, the US has substantial caloric surplus. If trade stopped tomorrow but agriculture continued normally, the US could feed its entire population — the $58.7B trade deficit is misleading because US imports are disproportionately high-value, low-calorie items (coffee, cocoa, tropical fruits, wine, specialty seafood), while exports are bulk calories (soybeans, corn, wheat).

The US is also a net petroleum exporter (1.64M barrels/day net), so fuel for farming would continue. Machinery parts may become scarce but wouldn't stop farming in year 1.

### Medium-term (Years 1–3): Fertilizer becomes the crisis

This is where the US position degrades significantly:

- **Potash**: 90% imported, overwhelmingly from Canada. If trade with Canada continues (likely in most scenarios), this is manageable. If all trade stops: potash reserves in soil last 1–2 growing seasons before yields noticeably decline.
- **Nitrogen**: 25% imported, but domestic production exists (~20M metric tons/year). Losing imports reduces available nitrogen by ~25%, causing moderate yield drops.
- **Phosphate**: Mostly domestic (Florida, Idaho mines). Least vulnerable.

Combined effect: Without fertilizer imports, yields decline an estimated 20–30% by year 2–3, dropping feedable population to roughly 235M (185M–270M range). The wide range reflects uncertainty about soil nutrient reserves and adaptation speed.

### Long-term (Years 3–5+): Yield degradation compounds

Without any fertilizer (complete collapse scenario), long-term trial data shows 40–60% of current yields are attributable to fertilizer and lime. US cropland producing at 40–60% of current yields, even with the current acreage surplus (much cropland is used for exports and ethanol), could feed roughly 130–200M people on basic caloric needs.

Soil nutrient depletion rates of ~18.7 kg/ha/year nitrogen and 38.8 kg/ha/year potassium mean degradation is gradual but cumulative. This is NOT a cliff — it's a slope, with yields declining year-over-year until a new equilibrium is reached.

### Export ban cascade dynamics

Historical precedent from 2007–2008 shows food trade collapses through game theory:
1. One country restricts exports (e.g., India bans rice exports)
2. Panic buying by importers drives prices up
3. More countries impose restrictions (self-fulfilling fear)
4. 2008: Export bans contributed to 45% rice price increase, 30% wheat price increase
5. 36 countries appealed for food aid; 40+ countries experienced social unrest

In a multi-breadbasket failure, this cascade would be more severe and faster. The US, as the world's largest food exporter, would face intense diplomatic pressure to continue exports vs. domestic hoarding instincts.

### Social unrest threshold

Research by NECSI (Lagi et al. 2011) identified FAO Food Price Index >210 as a "riot danger zone" — this threshold was exceeded in both 2008 and 2011, corresponding to food riots in 40–48 countries. However, the US has not experienced genuine food scarcity since the Dust Bowl (1930s), and food riots historically require pre-existing grievances amplified by price spikes, not just high prices alone. The US is more likely to see political disruption (hoarding, rationing debates, export policy fights) than street-level food riots, at least initially.

### Key insight for breadbasket failure scenario

The US is simultaneously the world's best-positioned survivor AND the country whose export decisions most affect everyone else. In a global breadbasket failure:
- Short-term (year 1): US can feed itself, may restrict exports, worsening crisis for import-dependent nations
- Medium-term (years 2–3): Fertilizer supply determines whether the US maintains production or joins the crisis
- Long-term (years 3–5): Without fertilizer, US carrying capacity drops to roughly 130–200M — still surviving but at ~40–60% of current population

The distinction between "trade stops for 1 year" (manageable) and "trade stops for 5 years" (yield collapse from fertilizer depletion) is the key variable for the breadbasket failure mortality curve.

## Data Gaps

- **Exact US caloric production figures**: Most data reports food supply per capita, not total national caloric output. The "3x domestic needs" figure is widely cited but imprecise — it likely includes animal feed calories that aren't directly human-edible.
- **Fertilizer stockpile data**: How much fertilizer is stored on-farm or in distribution vs. just-in-time? This determines the lag between trade stoppage and yield impact. Likely only 1–2 seasons of inventory.
- **Crop switching speed**: If trade stops, how fast could US agriculture pivot from export crops (soybeans for Chinese feed) to domestic calorie crops (wheat, potatoes)? No good modeling exists for a forced rapid transition.
- **Ethanol diversion**: ~40% of US corn goes to ethanol. In a crisis this could be redirected to food, adding significant caloric capacity — but the political/economic dynamics of this shift are unmodeled.
- **ALLFED carrying capacity for US specifically**: ALLFED's work on alternative foods (seaweed, single-cell protein, dead biomass utilization) suggests 80% global survival is possible with preparation, but US-specific carrying capacity with alternative foods is not well-quantified.
- **Canada-US trade resilience**: In most realistic scenarios, US-Canada trade would likely continue (shared border, mutual dependency). This dramatically changes the potash vulnerability. Most modeling assumes complete trade cessation, which overstates risk for the US.

## Sources

- USDA Foreign Agricultural Service (2024). "2024 U.S. Agricultural Export Yearbook." https://www.fas.usda.gov/data/2024-us-agricultural-export-yearbook
- USDA Economic Research Service. "Ag and Food Statistics: Charting the Essentials — Agricultural Trade." https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/agricultural-trade
- USGS (2025). "Mineral Commodity Summaries 2025 — Potash." https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-potash.pdf
- USGS (2024). "Mineral Commodity Summaries 2024 — Potash." https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-potash.pdf
- University of Michigan Center for Sustainable Systems. "U.S. Food System Factsheet." https://css.umich.edu/publications/factsheets/food/us-food-system-factsheet
- Savills (2024). "Self-sufficiency in food production: an international comparison." https://impacts.savills.com/environment/self-sufficiency-in-food-production-an-international-comparison.html
- farmdoc daily / University of Illinois (2025). "US Fertilizer Industry in Global Markets: Structure and Supply Risks." https://farmdocdaily.illinois.edu/2025/07/us-fertilizer-industry-in-global-markets-structure-and-supply-risks.html
- Mosaic Crop Nutrition. "Understanding Fertilizer and Its Essential Role in High-Yielding Crops." https://www.cropnutrition.com/resource-library/understanding-fertilizer-and-its-essential-role-in-high-yielding-crops/
- Our World in Data. "Can we reduce fertilizer use without sacrificing food production?" https://ourworldindata.org/reducing-fertilizer-use
- FAO (2012). "Food Export Restrictions: Review of the 2007-2010 Experience." https://www.fao.org/fileadmin/templates/est/PUBLICATIONS/Comm_Working_Papers/EST-WP32.pdf
- OECD (2024). "Export Restrictions on Staple Crops Since 2007." https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/09/export-restrictions-on-staple-crops-since-2007_f240bc0d/ccfa8a95-en.pdf
- Bailey & Wellesley / Chatham House (2017). "Chokepoints and Vulnerabilities in Global Food Trade." https://www.chathamhouse.org/2017/06/chokepoints-and-vulnerabilities-global-food-trade
- Lagi, Bertrand & Bar-Yam (2011). "The Food Crises and Political Instability in North Africa and the Middle East." New England Complex Systems Institute.
- CSIS. "Dangerously Hungry: The Link between Food Insecurity and Conflict." https://www.csis.org/analysis/dangerously-hungry-link-between-food-insecurity-and-conflict
- Denkenberger & Pearce / ALLFED. "Feeding Everyone No Matter What." https://allfed.info/research/publications-and-reports
- Rethink Trade (2024). "U.S. Food Trade Deficit Surges Amid Rising Import Reliance." https://rethinktrade.org/food-deficit/
- EIA. "How much petroleum does the United States import and export?" https://www.eia.gov/tools/faqs/faq.php?id=727&t=6
- Engine Technology Forum. "Agriculture — Diesel in Farm Equipment." https://enginetechforum.org/agriculture
- World Bank (2022). "How export restrictions are impacting global food prices." https://blogs.worldbank.org/en/psd/how-export-restrictions-are-impacting-global-food-prices

<!-- COMPLETE -->
