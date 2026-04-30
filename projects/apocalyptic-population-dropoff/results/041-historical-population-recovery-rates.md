# Result: Historical Population Recovery Rates Post-Catastrophe

## Summary

Historical population recovery after major catastrophes is overwhelmingly slow. Pre-industrial baseline growth was ~0.04% per year globally; even aggressive post-crisis baby booms (Cambodia at 2.3%/year) required decades to recover. For the graph's 10-year timeframe, recovery is negligible in every scenario — curves stay flat or nearly flat on the right end. The Ireland case demonstrates that recovery can fail entirely if structural conditions change, even when the immediate crisis ends.

## Key Data Points

### Recovery Cases Comparison

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| black_death_population_loss | 45 | 30 | 60 | pct | 1347-1353 | Alfani/Jedwab 2020 | high |
| black_death_recovery_duration | 200 | 150 | 250 | years | 1350-1600 | Livi-Bacci; McEvedy & Jones | high |
| black_death_recovery_annual_growth | 0.3 | 0.1 | 0.5 | pct | 1400-1600 | Jedwab et al. 2020 | medium |
| black_death_continued_decline_1350_1400 | 12 | 8 | 15 | pct | 1350-1400 | Alfani/Wikipedia synthesis | medium |
| germany_wwii_population_loss | 9 | 8 | 10 | pct | 1939-1945 | Feldgrau; Census data | high |
| germany_wwii_recovery_duration | 10 | 5 | 15 | years | 1945-1955 | German census data | high |
| germany_wwii_recovery_annual_growth | 1.0 | 0.8 | 1.2 | pct | 1950-1960 | Census data | high |
| germany_wwii_external_aid_2005usd | 29300000000 | 29000000000 | 30000000000 | dollars | 1946-1952 | CRS Report; Marshall Plan | high |
| japan_wwii_population_loss | 3 | 2.5 | 4 | pct | 1941-1945 | NPS; Demographics of Japan | high |
| japan_wwii_recovery_duration | 5 | 3 | 7 | years | 1945-1950 | Japanese census data | high |
| japan_wwii_repatriated_population | 9000000 | 8000000 | 9500000 | people | 1945-1950 | Demographics of Japan | high |
| japan_wwii_external_aid_2005usd | 15200000000 | 15000000000 | 16000000000 | dollars | 1946-1952 | CRS Report | high |
| cambodia_kr_population_loss | 25 | 20 | 28 | pct | 1975-1979 | Kiernan; PMC 3922767 | high |
| cambodia_kr_recovery_annual_growth | 2.3 | 2.0 | 2.8 | pct | 1978-1985 | World Bank | high |
| cambodia_kr_peak_tfr | 7.0 | 6.5 | 7.5 | births_per_woman | 1979-1980 | PMC 3922767 | high |
| cambodia_kr_pre_crisis_recovery_years | 15 | 10 | 20 | years | 1979-1995 | World Bank; Cambodia census | medium |
| us_1918_flu_population_loss | 0.65 | 0.5 | 0.8 | pct | 1918-1919 | CDC archive | high |
| us_1918_flu_fertility_depression | 1 | 0.5 | 2 | years | 1919-1920 | Oxford/Population Studies 2023 | medium |
| ireland_famine_population_loss | 25 | 20 | 33 | pct | 1845-1851 | Wikipedia; Britannica | high |
| ireland_famine_pre_crisis_pop | 8175000 | 8100000 | 8200000 | people | 1841 | Irish Census 1841 | high |
| ireland_famine_nadir_pop | 4400000 | 4200000 | 4500000 | people | 1901 | Irish Census 1901 | high |
| ireland_famine_current_pop | 5120000 | 5000000 | 5200000 | people | 2021 | Irish Census 2022 | high |
| ireland_famine_recovery_status | 0 | 0 | 0 | boolean | 1851-present | Census data | high |
| preindustrial_global_growth_rate | 0.04 | 0.02 | 0.06 | pct | 10000BCE-1800CE | Our World in Data | high |
| preindustrial_regional_peak_growth | 0.5 | 0.3 | 0.7 | pct | varies | Livi-Bacci | medium |
| china_1620_1650_population_loss | 43 | 35 | 50 | pct | 1620-1650 | Zhang et al. PNAS 2007 | medium |
| americas_post_1492_recovery_duration | 400 | 350 | 450 | years | 1492-1900 | Historical estimates | medium |

### Recovery Math for 10-Year Graph Window

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| recovery_from_50pct_loss_at_0.04pct | 50.2 | 50.1 | 50.3 | pct_of_original | year 10 | calculation from baseline | high |
| recovery_from_50pct_loss_at_0.3pct | 51.5 | 51.0 | 52.0 | pct_of_original | year 10 | calculation from baseline | high |
| recovery_from_50pct_loss_at_2.3pct | 62.7 | 60.0 | 65.0 | pct_of_original | year 10 | calculation from Cambodia rate | high |
| recovery_from_90pct_loss_at_0.3pct | 10.3 | 10.2 | 10.4 | pct_of_original | year 10 | calculation from baseline | high |
| recovery_from_90pct_loss_at_2.3pct | 12.5 | 12.0 | 13.0 | pct_of_original | year 10 | calculation from Cambodia rate | high |
| years_to_recover_50pct_loss_at_0.3pct | 231 | 200 | 260 | years | post-event | calculation | high |
| years_to_recover_90pct_loss_at_0.3pct | 767 | 700 | 850 | years | post-event | calculation | high |

## Key Findings by Recovery Case

### 1. Post-Black Death Europe (1350-1600)

Population dropped 30-60% by 1353 and **continued declining** for another 50 years due to recurrent plague outbreaks (1361, 1369, 1374, etc.). Europe's population fell from ~85M (1340) to ~68M (1350) to ~60M (1400). Recovery only began after plague recurrence subsided around 1400-1450. Full recovery to pre-plague levels took until ~1500 (urban areas, existing cities) or ~1600 (Europe-wide). Recovery growth rate was ~0.3-0.5% annually, driven by labor scarcity creating higher wages, earlier marriage, and higher fertility. **No external aid — this is the closest analogue to post-collapse US.**

### 2. Post-WWII Germany (1945-1960)

Germany lost ~7M dead (~9% of 1939 population within 1937 borders) plus displacement of 12-14M ethnic Germans from eastern territories. The 1950 census showed 68.4M combined (West 50M + East 18.4M), roughly matching the 1939 figure of 69.3M. Recovery was rapid (~1%/year growth in the 1950s) but driven entirely by external factors: $29.3B in Marshall Plan aid (2005 dollars), an intact global economy, influx of 8M expellees into western zones. **Not analogous to post-collapse scenarios — the global system was intact and providing massive support.**

### 3. Post-WWII Japan (1945-1960)

Japan lost ~2-3M dead (~3% of population). Population rebounded rapidly, reaching 83M by 1950 (from ~72M in 1945), driven by repatriation of 9M Japanese from former empire territories (45% of the increase) plus a baby boom. External aid totaled $15.2B (2005 dollars). Life expectancy jumped 20 years between 1945 and 1955. **Same caveat as Germany — external aid and intact global economy make this a poor analogue for civilizational collapse.**

### 4. Post-Khmer Rouge Cambodia (1979-2000)

Cambodia lost 1.5-2.0M people (~25% of population). Post-crisis fertility surged dramatically: TFR jumped from 3.7 during KR to 7.0 in 1979-80 (91% increase), remained elevated at 5.5 through 1985. Annual population growth rate was 2.3% (1978-1985). Population roughly recovered to pre-crisis trajectory within 15-20 years. **Better analogue than WWII cases** — less external aid, institutional devastation, but still had an intact outside world and eventual international support. The extreme fertility rebound demonstrates biological/social recovery potential when survivors have resources.

### 5. Post-1918 Flu US

Only ~675,000 US deaths (~0.65% of population). Society and infrastructure remained fully intact. Recent research (Oxford, 2023) found the pandemic depressed fertility longer than previously thought — the 1920 "baby boom" was driven by post-WWI economic recovery, not pandemic rebound. **Not analogous to civilizational collapse; useful only for pandemic-specific recovery where infrastructure is intact.**

### 6. Ireland Post-Famine (1845-present)

Population dropped from 8.2M (1841) to 6.6M (1851) and kept declining to 4.4M (1901). The Republic of Ireland's population only surpassed its 1851 level in 2016 (~4.9M) and remains well below the 1841 peak. **Critical lesson: population can permanently fail to recover.** Ireland's non-recovery was driven by: sustained emigration (nowhere for post-collapse Americans to emigrate to, so this factor is removed), cultural shift to late/non-marriage, and structural economic change. The emigration factor makes Ireland less directly analogous, but the cultural/structural shift is relevant — catastrophe can permanently alter reproductive behavior.

### 7. Pre-Industrial Baseline

Global population growth averaged ~0.04% per year from 10,000 BCE to 1800 CE. This is far lower than the 0.1-0.5% range sometimes cited because it includes periodic mortality crises (famines, epidemics, wars) that offset growth. Regional growth during stable periods could reach 0.3-0.7% per year. Post-collapse US would revert to pre-industrial mortality conditions but with residual knowledge and infrastructure — actual growth rate would likely be between 0.1% and 0.5% per year, with periodic setbacks.

## Implications for the Graph

**Within the 10-year timeframe of the graph, population recovery is negligible for all scenarios.** Even at Cambodia's aggressive 2.3% growth rate (which required surviving infrastructure and an intact outside world), a 50% population loss only recovers to ~63% by year 10. At a more realistic post-collapse rate of 0.3%, recovery from 50% is imperceptible (50.0% → 51.5%). From 90% loss, a 10-year recovery at 0.3% goes from 10.0% to 10.3% — effectively invisible on the graph.

The right end of every curve should be essentially flat. The only scenario where any perceptible uptick might occur within 10 years is one with modest population loss (~10-25%) where infrastructure is partially intact and survivors can quickly restart agriculture — even then, growth would be slight.

**For the graph design:** The flatness at year 10 is actually a powerful visual — it shows that the initial drop is essentially permanent on any human-relevant timescale. The graph ends at year 10, but recovery takes centuries.

## Data Gaps

- **Post-collapse growth rates are extrapolated**, not observed. No historical case matches the specific conditions of a modern US population collapse (high-tech society reverting to pre-industrial conditions with no external aid). Cambodia is the best analogue but still had international support.
- **Behavioral response to extreme loss is unknown.** Would survivors prioritize reproduction (as in Cambodia) or would despair, resource competition, and institutional collapse suppress fertility? Historical cases split both ways.
- **The "recurrent crisis" problem** is poorly modeled. Black Death recovery was delayed 50+ years by plague recurrences. Post-nuclear or post-grid-collapse scenarios would similarly face cascading secondary crises that prevent recovery from beginning.
- **Pre-industrial growth rates vary enormously** depending on the time window and region selected. The 0.04% global average masks periods of 0.5%+ regional growth interspersed with catastrophic declines.
- **China's post-1620 recovery** is the most dramatic historical bounce-back (43% loss, rapid recovery) but is poorly documented at the annual level and occurred in a context of political reunification under the Qing dynasty — not analogous to post-collapse scenarios.

## Sources

- Alfani, G. & Jedwab, R. (2020). "The Economic Impact of the Black Death." George Washington University IIEP Working Paper. https://www2.gwu.edu/~iiep/assets/docs/papers/2020WP/JedwabIIEP2020-14.pdf
- Heuveline, P. (2015). "The Phoenix Population: Demographic Crisis and Rebound in Cambodia." PMC 3922767. https://pmc.ncbi.nlm.nih.gov/articles/PMC3922767/
- Zhang, D.D. et al. (2007). "Global climate change, war, and population decline in recent human history." PNAS. https://www.pnas.org/doi/10.1073/pnas.0703073104
- Mamelund, S.-E. et al. (2023). "Did the 1918 influenza pandemic cause a 1920 baby boom?" Population Studies. https://www.tandfonline.com/doi/full/10.1080/00324728.2023.2192041
- "Consequences of the Black Death." Wikipedia. https://en.wikipedia.org/wiki/Consequences_of_the_Black_Death
- "Great Famine (Ireland)." Wikipedia. https://en.wikipedia.org/wiki/Great_Famine_(Ireland)
- "Historical population of Ireland." Wikipedia. https://en.wikipedia.org/wiki/Historical_population_of_Ireland
- "Demographics of Germany." Wikipedia. https://en.wikipedia.org/wiki/Demographics_of_Germany
- "Demographics of Japan." Wikipedia. https://en.wikipedia.org/wiki/Demographics_of_Japan
- "Demographics of Cambodia." Wikipedia. https://en.wikipedia.org/wiki/Demographics_of_Cambodia
- CRS Report RL33331. "US Occupation Assistance: Iraq, Germany and Japan Compared." https://www.everycrsreport.com/reports/RL33331.html
- "Reconstruction of Germany." Wikipedia. https://en.wikipedia.org/wiki/Reconstruction_of_Germany
- "Population Growth." Our World in Data. https://ourworldindata.org/population-growth
- "Estimates of historical world population." Wikipedia. https://en.wikipedia.org/wiki/Estimates_of_historical_world_population
- World Bank. "Population growth (annual %) - Cambodia." https://data.worldbank.org/indicator/SP.POP.GROW?locations=KH
- CDC Archive. "History of 1918 Flu Pandemic." https://archive.cdc.gov/www_cdc_gov/flu/pandemic-resources/1918-commemoration/1918-pandemic-history.htm
- WW2 Germany Statistics. Feldgrau. https://www.feldgrau.com/ww2-germany-statistics-and-numbers/
- "Population After a Catastrophe." EA Forum. https://forum.effectivealtruism.org/posts/djM84hy77DtsyJnDD/population-after-a-catastrophe
- Livi-Bacci, M. "A Concise History of World Population" (6th ed.). Wiley-Blackwell.
- McEvedy, C. & Jones, R. "Atlas of World Population History." Penguin.

<!-- COMPLETE -->
