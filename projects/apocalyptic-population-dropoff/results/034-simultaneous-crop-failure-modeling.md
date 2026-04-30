# Result: Simultaneous Crop Failure — Multi-Breadbasket Failure Modeling

## Summary

A simultaneous failure of 3+ major breadbaskets from correlated climate/weather events is a low-probability but increasingly likely scenario. Gaupp et al. (2020) showed that climate teleconnections (El Niño, jet stream patterns) correlate crop failures across distant regions far more than previously assumed. Historical breadbasket yield shocks have hit 3+ regions simultaneously ~10% of years for maize and ~18% for wheat. The US is uniquely positioned: it is a net food exporter (~20% of production exported), so a domestic-only failure is survivable with rationing. But when the US Midwest fails *simultaneously* with China, India, and Brazil, there are no imports to backfill — everyone is short. In a sustained 2+ year multi-breadbasket failure, US mortality would likely reach 10–25% (33–84M), driven by famine onset 3–6 months after harvest failure, compounded by social breakdown in year 2. This is the slowest-onset scenario in the project — mortality ramps over months, not hours.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| simultaneous_3plus_breadbasket_failure_maize_pct_years | 10.3 | 8 | 13 | pct | historical record | Anderson et al. 2019 (Science Advances) | high |
| simultaneous_3plus_breadbasket_failure_wheat_pct_years | 18.4 | 15 | 22 | pct | historical record | Anderson et al. 2019 (Science Advances) | high |
| simultaneous_5plus_breadbasket_failure_maize_pct_years | 1.1 | 0.5 | 2 | pct | historical record | Anderson et al. 2019 (Science Advances) | high |
| probability_15pct_global_grain_shock_per_decade_2030s | 18 | 10 | 25 | pct | 2030s projection | McKinsey / Chatham House | medium |
| sync_maize_loss_10pct_probability_2c_warming | 7 | 4 | 12 | pct_per_year | 2°C warming | Tigchelaar et al. 2018 (PNAS) | high |
| sync_maize_loss_10pct_probability_4c_warming | 86 | 75 | 95 | pct_per_year | 4°C warming | Tigchelaar et al. 2018 (PNAS) | high |
| enso_crop_yield_impact_on_paired_breadbaskets | 30 | 20 | 40 | pct_probability_shift | per ENSO event | Anderson et al. 2019 | medium |
| us_food_production_exported_pct | 20 | 18 | 22 | pct | current | USDA FAS 2024 | high |
| us_food_self_sufficiency_pct | 80 | 78 | 85 | pct | current | USDA / FAO | high |
| us_strategic_grain_reserve | 0 | 0 | 0 | bushels | current | USDA FAS / CRS | high |
| global_stocks_to_use_ratio | 32.2 | 30 | 34 | pct | 2025-26 | IGC 2025 | high |
| global_food_from_5_nations_pct | 60 | 55 | 65 | pct | current | FAO / Atlantic Council | medium |
| us_midwest_global_corn_share | 33 | 30 | 36 | pct | current | USDA / WorldAtlas | high |
| rice_wheat_global_calorie_share | 37 | 35 | 40 | pct | current | FAO | high |
| corn_global_calorie_share | 19.5 | 18 | 21 | pct | current | FAO | high |
| us_production_loss_3bb_failure_pct | 45 | 30 | 70 | pct | scenario | Derived from Gaupp et al. + USDA | low |
| global_caloric_shortfall_3bb_failure_pct | 20 | 10 | 35 | pct | scenario | Gaupp et al. 2020 / ALLFED | medium |
| months_to_famine_onset | 5 | 3 | 8 | months | post-harvest failure | Historical famine analogues | medium |
| famine_duration_years_if_persistent | 2 | 1 | 3 | years | scenario | Historical analogues | low |
| price_spike_at_20pct_stock_to_use | 100 | 60 | 150 | pct_increase | within months | Historical (2007-08, 2010-11) | medium |
| historical_famine_mortality_pct_ireland | 13 | 12 | 14 | pct | 1845-1852 (7 years) | Ó Gráda / Census | high |
| historical_famine_mortality_pct_bengal | 3.5 | 1.3 | 6.3 | pct | 1943 (8 months peak) | Ó Gráda scholarly consensus | high |
| historical_famine_mortality_pct_holodomor | 10 | 8 | 13 | pct | 1932-33 (peak 7 months) | Demographic studies | medium |
| historical_famine_mortality_pct_china_glf | 4.5 | 2.2 | 8 | pct | 1959-61 (3 years) | Demographic studies | medium |
| starvation_death_timeline_total_weeks | 10 | 3 | 12 | weeks | complete starvation | Medical literature | high |
| us_mortality_2yr_sustained_failure_pct | 15 | 5 | 25 | pct | year 1-3 | Derived from analogues | low |

## Mortality Timeline

This scenario models a 3+ breadbasket simultaneous failure lasting 2 growing seasons (roughly 2 years of severely reduced global food output), with no single catastrophic trigger. The US Midwest is one of the failing breadbaskets.

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 1 | 0.0 | 0.0 | 0.0 | none | N/A — harvest failure is discovered, not instantaneous |
| 24 | 0.0 | 0.0 | 0.0 | none | Crop failure only becomes apparent at harvest |
| 168 | 0.0 | 0.0 | 0.0 | none | Government and markets begin responding |
| 720 | 0.0 | 0.0 | 0.1 | medical_dependency | Insulin/dialysis-dependent die as supply chains prioritize food (ticket 001) |
| 2160 | 0.5 | 0.1 | 1.5 | starvation_malnutrition | Existing food stores depleted; rationing in effect; vulnerable populations (elderly, infants, homeless) begin dying |
| 4320 | 2.0 | 0.5 | 5.0 | starvation_and_disease | Full famine conditions; caloric intake below 1,200/day for most; disease amplified by malnutrition |
| 8760 | 5.0 | 2.0 | 10.0 | starvation_disease_violence | First year complete; government rationing strained; social unrest in cities; historical famine mortality pattern |
| 17520 | 12.0 | 5.0 | 20.0 | starvation_social_breakdown | Second year of failure; government capacity degraded; urban-rural conflict over food; mass migration |
| 26280 | 15.0 | 5.0 | 25.0 | compound_famine_effects | If failure persists into year 3; some recovery begins as alternative food production ramps |
| 43800 | 15.0 | 5.0 | 25.0 | stabilization | Population stabilizes; alternative agriculture, remaining stores, and reduced population ease pressure |
| 87600 | 15.0 | 5.0 | 25.0 | recovery | Agricultural recovery underway; mortality returns to near-baseline |

### Timeline Rationale

**Months 0–3 (discovery to depletion):** Breadbasket failure is seasonal — you don't know the harvest failed until harvest time. Once confirmed, governments impose export bans (Russia 2010 precedent), trigger strategic reserves (the US has none — the Bill Emerson Humanitarian Trust was liquidated in 2008), and begin rationing. Global grain prices spike 60–150% within weeks. The US has roughly 5 months of grain stocks at current consumption levels (per ticket 003), but most grain is on farms and in elevators requiring transport/processing infrastructure. Retail food exhausted in 1–2 weeks under panic buying.

**Months 3–6 (famine onset):** This tracks the historical pattern. The Bengal famine's harshest phase was 8 months (March–October 1943). In the Holodomor, 70–80% of deaths occurred in the first 7 months of peak famine. Once caloric intake drops below ~1,200 cal/day sustained, mortality begins climbing among the most vulnerable: the very old, very young, those with chronic illness, and the urban poor with no land.

**Months 6–12 (deepening crisis):** Government rationing is the key variable. The US military and federal government could plausibly maintain basic order and distribution for one year — the US has institutional capacity that historical famine-affected nations (colonial Bengal, Soviet Ukraine, Mao's China) lacked. But the US has never experienced anything close to this. Estimated 2–10% mortality by end of year 1, heavily concentrated in urban areas and among medically dependent populations.

**Year 2 (social breakdown threshold):** Historical famines that lasted 2+ years consistently produced social breakdown regardless of government capacity. The Irish Famine saw ~13% mortality over 7 years. The Holodomor killed ~10% in roughly 1.5 years. A second consecutive failed harvest would exhaust remaining reserves, collapse confidence in government rationing, and trigger mass urban-to-rural migration and violence. Mortality accelerates to 5–20% cumulative.

**Year 3+ (stabilization or continued decline):** If climate conditions normalize, agricultural recovery begins within one growing season. ALLFED research suggests alternative food production (seaweed, single-cell protein from methane, cellulosic sugar) could theoretically ramp up within 2.5–4.5 years but requires infrastructure that may not exist. Population reduction itself eases food pressure. Cumulative mortality likely stabilizes at 5–25% depending on government effectiveness and whether a third harvest fails.

## Key Variables and Scenario Branching

**Government effectiveness is the dominant variable.** Unlike nuclear war or asteroid impact, breadbasket failure leaves all infrastructure intact. The question is not "can we produce food?" but "can we distribute 30–70% less food without society collapsing?" Historical precedent is mixed:

- **Best case (~5% mortality):** Government maintains order, implements effective rationing, redirects agricultural land from animal feed/biofuel to direct human consumption (currently ~36% of US corn goes to ethanol, ~36% to animal feed). One bad year is survivable; even two years are manageable with rationing and livestock drawdown. The US has 94M cattle, 74M hogs, and 1.16B chickens that represent a massive caloric buffer if converted from feed-consuming animals to food.

- **Central case (~15% mortality):** Rationing holds for year 1 but frays in year 2. Urban areas experience severe shortages while rural areas hoard. Social unrest disrupts remaining distribution networks. Medical supply chains collapse as a secondary effect. Mortality concentrated in cities and among vulnerable populations.

- **Worst case (~25% mortality):** Government rationing collapses within 6–12 months. Export bans by all nations simultaneously choke trade. Climate conditions persist for 3+ years (plausible if driven by a persistent La Niña or jet stream shift). Urban-rural warfare over food. This approaches but does not reach the severity of nuclear winter scenarios because infrastructure remains intact and some domestic production continues.

## Climate Teleconnections — Why Simultaneous Failure is More Likely Than Assumed

Gaupp et al. (2020) was groundbreaking because it showed crop failures across distant breadbaskets are **correlated, not independent.** Key mechanisms:

1. **ENSO (El Niño / La Niña):** Affects yields on >25% of global croplands. A strong El Niño simultaneously reduces maize yields in the US Midwest, wheat in Australia, and rice in South/Southeast Asia. The 2015–16 El Niño caused simultaneous drought in southern Africa, the Caribbean, and Central America.

2. **Jet stream waviness:** Mid-latitude crop failures are driven by jet stream patterns that act as "circumglobal teleconnections." A specific jet stream configuration can simultaneously produce heat extremes in the US Midwest, Europe, and Central Asia. This is getting worse with Arctic warming, which increases jet stream waviness.

3. **Climate change amplification:** Tigchelaar et al. (2018) found the probability of synchronized >10% maize losses in the top 4 exporting countries goes from ~0% today to 7% at 2°C warming to **86% at 4°C warming.** This is perhaps the most alarming single statistic in the breadbasket failure literature.

4. **Historical frequency:** Anderson et al. (2019, Science Advances) found that simultaneous yield shocks in 3+ of 9 breadbaskets occurred 10.3% of years for maize and 18.4% for wheat — far more common than assumed under independence.

## The US-Specific Calculus

The US is better positioned than most nations for this scenario, but worse than commonly assumed:

**Advantages:**
- Net food exporter (exports ~20% of production)
- Massive livestock inventory = caloric buffer (94M cattle alone)
- ~36% of corn currently goes to ethanol, could be redirected
- ~36% of corn currently goes to animal feed, could be redirected to direct consumption
- Institutional capacity (FEMA, military, state governments) for distribution
- Diverse agricultural geography — not all US regions fail simultaneously in most scenarios

**Vulnerabilities:**
- **No strategic grain reserve.** The US liquidated its last food reserves in 2008. The global stocks-to-use ratio is ~32%, but those stocks are spread across 195 countries and would be hoarded.
- **Urban concentration.** ~83% of Americans live in urban areas, entirely dependent on supply chains for food.
- **Just-in-time food system.** Retail grocery carries ~3 days of inventory. Cold storage and warehouse reserves add weeks, not months.
- **If the US Midwest fails, the "redirect exports" strategy collapses** — there's nothing to redirect.
- **Fertilizer dependency.** Modern US agriculture depends on synthetic fertilizer (natural gas → ammonia). If a global crisis disrupts energy markets simultaneously, yields drop further.

## Data Gaps

- **No historical precedent for simultaneous global breadbasket failure at the modeled scale.** All mortality estimates are extrapolations from regional famines that had external aid available. A truly global failure with no external aid source has never occurred in modern history.
- **Government response modeling is weak.** The difference between "effective rationing" and "social collapse" is the difference between 5% and 25% mortality, but no rigorous model exists for US government capacity under sustained food crisis.
- **Livestock-to-food conversion timeline is unclear.** Slaughtering 94M cattle provides enormous calories, but processing capacity, refrigeration, and distribution under crisis conditions are not well-modeled.
- **Compound effects with other crises are not modeled.** A breadbasket failure during a pandemic, or one that triggers financial collapse, would be significantly worse than the isolated scenario modeled here.
- **Duration uncertainty is the biggest gap.** Climate conditions that cause multi-breadbasket failure (e.g., persistent La Niña, jet stream blocking patterns) can last 1–3+ years. The difference between a 1-year and 3-year failure is the difference between "bad recession" and "civilizational stress test."
- **Alternative food production ramp-up times (ALLFED research) are theoretical.** Methane single-cell protein could theoretically meet global protein needs in 2.5–4.5 years, but this assumes industrial infrastructure, energy supply, and coordination that may not exist during a food crisis.

## Sources

- Gaupp, F., Hall, J., Hochrainer-Stigler, S. & Dadson, S. (2020). "Changing risks of simultaneous global breadbasket failure." *Nature Climate Change*, 10, 54–57. https://www.nature.com/articles/s41558-019-0600-z
- Tigchelaar, M., Battisti, D.S., Naylor, R.L. & Ray, D.K. (2018). "Future warming increases probability of globally synchronized maize production shocks." *PNAS*, 115(26), 6644–6649. https://www.pnas.org/doi/10.1073/pnas.1718031115
- Anderson, W., Seager, R., Baethgen, W., Cane, M. & You, L. (2019). "Synchronous crop failures and climate-forced production variability." *Science Advances*, 5(7), eaaw1976. https://www.science.org/doi/10.1126/sciadv.aaw1976
- Chatham House (2017). "Chokepoints and Vulnerabilities in Global Food Trade." https://www.chathamhouse.org/2017/06/chokepoints-and-vulnerabilities-global-food-trade-0
- ALLFED — Alliance to Feed the Earth in Disasters. "Multiple Breadbasket Failure." https://allfed.info/about/catastrophic-risks-to-food/multiple-breadbasket-failure
- ALLFED (2022). "Methane Single Cell Protein: Potential to Secure a Global Protein Supply Against Catastrophic Food Shocks." *Frontiers in Bioengineering and Biotechnology*. https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2022.906704/full
- USDA NASS — Grain Stocks, Cattle Inventory, Cold Storage reports (2024–2025).
- USDA Foreign Agricultural Service (2024). Agricultural export data. https://www.fas.usda.gov/data/trade-spotlight-us-agricultural-exports-close-2024-on-strong-note
- International Grains Council (2025). Grain Market Report — global stocks-to-use ratios. https://www.igc.int/en/gmr_summary.aspx
- FAO (2025). Cereal Supply and Demand Brief. https://www.fao.org/worldfoodsituation/csdb/en
- Oxfam (2011). "The Impact of Russia's 2010 Grain Export Ban." https://www.oxfam.org/en/research/impact-russias-2010-grain-export-ban
- McKinsey (2020). "Will the world's breadbaskets become less reliable?" https://www.mckinsey.com/capabilities/sustainability/our-insights/will-the-worlds-breadbaskets-become-less-reliable
- Ó Gráda, C. — Historical famine mortality estimates (Ireland, Bengal). Various publications.
- Wikipedia — "Multiple breadbasket failure," "Bengal famine of 1943," "Great Chinese Famine," "Strategic grain reserve." Accessed April 2026.
<!-- COMPLETE -->
