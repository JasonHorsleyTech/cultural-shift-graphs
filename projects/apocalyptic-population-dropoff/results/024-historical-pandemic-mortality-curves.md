# Result: Historical Pandemic Mortality Curves

## Summary

Historical pandemics provide the best calibration data for modeling the pandemic scenario curve. The 1918 influenza offers the gold-standard mortality curve shape — a sharp spike-and-decline over ~3 months — while the Black Death demonstrates what a truly civilizational pandemic looks like at 50%+ mortality. A critical finding: no modern pandemic has caused civilizational collapse; the threshold where a pandemic transitions from "medical crisis" to "civilizational disruption" appears to be somewhere around 10-20% CFR sustained over months, a range with no modern precedent.

## Key Data Points

### 1918 Influenza ("Spanish Flu")

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| us_population_1918 | 105000000 | 103000000 | 106000000 | people | 1918 | US Census Bureau | high |
| us_total_deaths | 675000 | 500000 | 850000 | people | 1918-1919 | CDC / Taubenberger & Morens 2006 | high |
| total_mortality_pct | 0.64 | 0.48 | 0.81 | pct | 1918-1919 | CDC / Census Bureau | high |
| cfr | 2.5 | 0.5 | 3.0 | pct | 1918-1919 | Taubenberger & Morens 2006 | medium |
| global_deaths | 50000000 | 40000000 | 100000000 | people | 1918-1919 | Taubenberger & Morens 2006 | medium |
| infection_rate | 33 | 25 | 40 | pct | 1918-1919 | Taubenberger & Morens 2006 | medium |
| duration_months | 18 | 12 | 24 | months | Mar 1918 - Aug 1919 | CDC | high |
| time_to_peak_mortality_months | 7 | 6 | 8 | months | Sep-Oct 1918 | CDC / Census Bureau | high |
| peak_month_deaths | 195000 | 180000 | 210000 | people | Oct 1918 | Census Bureau | high |
| deaths_sept_dec_1918 | 445000 | 346000 | 500000 | people | Sep-Dec 1918 | Census Bureau | high |
| infrastructure_impact | 1 | 1 | 2 | scale_0_3 | 1918-1919 | historical record | high |
| recovery_time_years | 2 | 1 | 3 | years | 1920-1922 | Census Bureau | high |

*Infrastructure impact scale: 0=none, 1=strained, 2=partially collapsed, 3=collapsed*

*Key feature: W-shaped age mortality curve — young adults (20-40) accounted for nearly half of deaths due to cytokine storm response. Deaths in the 15-34 age group were 20x higher than in normal years. Over 99% of excess deaths were in people under 65.*

### Black Death (1347-1353)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| european_population_pre | 75000000 | 70000000 | 80000000 | people | 1346 | Benedictow 2004 | medium |
| total_mortality_pct | 50 | 30 | 60 | pct | 1347-1353 | Benedictow 2004 / multiple | medium |
| cfr_bubonic | 70 | 60 | 90 | pct | per epidemic | historical sources | medium |
| cfr_pneumonic | 95 | 90 | 100 | pct | per epidemic | historical sources | medium |
| duration_months | 72 | 60 | 84 | months | 1347-1353 (Europe-wide) | historical record | high |
| duration_local_months | 6 | 4 | 9 | months | per city/region | historical record | medium |
| time_to_peak_mortality_months | 3 | 2 | 4 | months | per city/region | historical record | medium |
| england_traversal_days | 500 | 400 | 600 | days | 1348-1349 | historical record | medium |
| infrastructure_impact | 3 | 2 | 3 | scale_0_3 | 1347-1353 | historical record | high |
| recovery_time_years | 150 | 100 | 200 | years | 1353-1500s | Benedictow 2004 | medium |

*Key feature: This IS the calibration for civilizational collapse from pandemic. Labor shortages disrupted feudal system. Florence dropped from 110-120K to 50K. Paris lost half its population. England may have lost up to 70% in some regions. Population took 150+ years to recover to pre-plague levels.*

### Smallpox in the Americas (16th-19th century)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| pre_contact_population | 60000000 | 40000000 | 100000000 | people | pre-1492 | Cook / Denevan | low |
| total_mortality_pct | 90 | 80 | 95 | pct | 1492-1650 | Cook / Crosby | medium |
| mexico_pop_pre | 25000000 | 20000000 | 30000000 | people | 1519 | Cook & Borah | medium |
| mexico_pop_post | 1200000 | 1000000 | 3000000 | people | 1620 | Cook & Borah | medium |
| mexico_decline_pct | 95 | 88 | 96 | pct | 1519-1620 | Cook & Borah | medium |
| cfr_naive_population | 35 | 20 | 50 | pct | per epidemic | historical record | medium |
| duration_months | 1800 | 1200 | 2400 | months | ~150 years | historical record | high |
| major_epidemic_count | 14 | 10 | 20 | events | 1518-1700 | Cook | medium |
| infrastructure_impact | 3 | 3 | 3 | scale_0_3 | 16th-17th century | historical record | high |
| recovery_time_years | 300 | 250 | 400 | years | ongoing into 19th century | demographic records | medium |

*Key feature: Not a single pandemic but repeated epidemics in immunologically naive populations. This is the closest analogue to "what happens when a population has zero immunity." Represents the worst-case biological scenario, though compounded by conquest, enslavement, and societal destruction. CFR per individual epidemic was 20-50%, but cumulative effect over generations was 80-95% population loss.*

### Plague of Justinian (541-549 CE)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| mediterranean_mortality_pct | 33 | 15 | 50 | pct | 541-549 | Mordechai et al. 2019 / Stathakopoulos | low |
| constantinople_mortality_pct | 35 | 20 | 50 | pct | 541-542 | Procopius / modern estimates | low |
| cfr_infected | 70 | 60 | 80 | pct | per outbreak | historical sources | low |
| peak_daily_deaths_constantinople | 10000 | 5000 | 10000 | people | 542 peak | Procopius (contested) | low |
| duration_months | 96 | 12 | 108 | months | 541-549 (recurring waves) | historical record | medium |
| infrastructure_impact | 2 | 2 | 3 | scale_0_3 | 541-549 | historical record | medium |
| recovery_time_years | 50 | 30 | 100 | years | 6th-7th century | historical record | low |

*Key feature: Significant scholarly debate about actual severity. Mordechai et al. (2019 PNAS) argue the plague was "inconsequential" at a civilizational scale — that demographic and economic evidence doesn't support the traditional catastrophic narrative. Others maintain 25-50% Mediterranean mortality. The disagreement is unresolved. Used here as a lower-confidence calibration point.*

### COVID-19 (2020-2023, for comparison)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| us_total_deaths | 1100000 | 1050000 | 1200000 | people | 2020-2023 | CDC | high |
| us_population_2020 | 331000000 | 330000000 | 332000000 | people | 2020 | Census Bureau | high |
| total_mortality_pct | 0.33 | 0.32 | 0.36 | pct | 2020-2023 | CDC | high |
| cfr | 0.91 | 0.5 | 2.0 | pct | 2020-2023 (varied by wave) | CDC | high |
| excess_deaths_2020 | 522368 | 500000 | 550000 | people | Mar-Dec 2020 | CDC NCHS | high |
| excess_deaths_2021 | 1098808 | 1000000 | 1200000 | people | 2021 | PMC study | high |
| duration_months | 36 | 30 | 42 | months | Mar 2020 - mid 2023 | CDC | high |
| time_to_peak_mortality_months | 10 | 9 | 12 | months | Jan 2021 (US peak) | CDC | high |
| infrastructure_impact | 1 | 0 | 1 | scale_0_3 | 2020-2023 | direct observation | high |
| recovery_time_years | 1 | 0.5 | 2 | years | 2023-2024 | demographic data | high |

*Key feature: Modern baseline showing that even a pandemic killing 1.1M Americans did NOT cause infrastructure collapse. Healthcare was strained, supply chains disrupted, but society did not break. This establishes a floor: a pandemic needs to be far worse than COVID-19 (by an order of magnitude in CFR) to threaten civilizational function.*

### Pandemic Exercise Projections (Clade X, 2018)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| clade_x_us_deaths | 15000000 | 10000000 | 40000000 | people | ~20 months | Johns Hopkins CHS 2018 | medium |
| clade_x_global_deaths | 150000000 | 100000000 | 900000000 | people | ~20 months | Johns Hopkins CHS 2018 | medium |
| clade_x_us_mortality_pct | 4.5 | 3.0 | 12.0 | pct | ~20 months | Johns Hopkins CHS 2018 | medium |
| clade_x_cfr | 10 | 5 | 20 | pct | modeled | Johns Hopkins CHS 2018 | medium |
| clade_x_vaccine_timeline | 12 | 12 | 24 | months | modeled | Johns Hopkins CHS 2018 | medium |

*Key feature: Clade X modeled a Nipah-derived engineered pathogen with ~10% CFR among hospitalized cases. With no effective vaccine, deaths reached 150M globally / 15M US in the exercise. Worst-case (no policy solutions, failed vaccine) projected 900M global / 30-40M US. One-third of Congress died in the exercise. This represents the most credible modern modeling of a civilizational-threat pandemic.*

## Mortality Timeline: 1918 Influenza (US)

*Note: Percentages below are of 1918 US population (~105M), not the project's 335M baseline. This timeline serves as calibration for the SHAPE of a pandemic mortality curve, not absolute numbers. Time zero = March 1918 (first wave onset).*

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 720 | 0.01 | 0.005 | 0.02 | influenza/pneumonia (mild first wave) | Census Bureau 1918 |
| 2160 | 0.04 | 0.02 | 0.05 | influenza/pneumonia (first wave spreading) | Census Bureau 1918 |
| 4320 | 0.07 | 0.05 | 0.10 | influenza/pneumonia (first wave complete) | Census Bureau 1918 |
| 4680 | 0.10 | 0.07 | 0.13 | influenza/pneumonia (second wave begins) | Census Bureau / CDC |
| 5040 | 0.12 | 0.09 | 0.17 | influenza/pneumonia (second wave accelerating) | Census Bureau 1918 |
| 5400 | 0.22 | 0.17 | 0.28 | influenza/pneumonia (second wave peak approach) | Census Bureau 1918 |
| 5760 | 0.31 | 0.24 | 0.38 | influenza/pneumonia (PEAK — October 1918) | Census Bureau 1918 |
| 6120 | 0.38 | 0.30 | 0.45 | influenza/pneumonia (declining) | Census Bureau 1918 |
| 6480 | 0.41 | 0.33 | 0.48 | influenza/pneumonia (second wave waning) | Census Bureau 1918 |
| 7200 | 0.50 | 0.40 | 0.57 | influenza/pneumonia (Dec 1918) | Census Bureau 1918 |
| 8760 | 0.57 | 0.45 | 0.65 | influenza/pneumonia (third wave, lower) | Census Bureau / CDC |
| 13140 | 0.64 | 0.48 | 0.81 | influenza/pneumonia (pandemic ends) | CDC |

*Curve shape: The 1918 flu mortality curve is characterized by a dramatic spike — going from near-baseline mortality to peak in ~6 weeks (mid-September to late October 1918), then declining nearly as fast. The entire lethal second wave was compressed into about 12 weeks. This spike-and-decline shape is the template for pandemic mortality curves: slow build during initial spread, explosive growth as community transmission takes hold, sharp peak as the susceptible population is depleted, rapid decline.*

## Civilizational Collapse Threshold Analysis

The historical record suggests a rough threshold for when pandemics transition from "medical crisis" to "civilizational disruption":

| pandemic | cfr | mortality_pct | infrastructure_impact | civilizational_disruption |
|---|---|---|---|---|
| COVID-19 | ~1% | 0.33% | strained | no |
| 1918 Influenza | ~2.5% | 0.64% | strained | no |
| Clade X (exercise) | ~10% | 4.5-12% | severe | yes (modeled) |
| Plague of Justinian | ~70% (infected) | 15-50% (regional) | partially collapsed | debated |
| Black Death | 60-90% (infected) | 30-60% | collapsed | yes |
| Smallpox in Americas | 20-50% (per wave) | 80-95% (cumulative) | collapsed | yes |

**Threshold estimate:** The transition from "society strains but holds" to "civilizational disruption" appears to require:
- CFR > 10% sustained over months, AND
- Total mortality > 5-10% of population within 1-2 years, AND
- Mortality concentrated enough to overwhelm healthcare and essential services simultaneously

No modern pandemic has crossed this threshold. The scenario modeled in this project (30-50% CFR, 6-month spread) would be unprecedented in the modern era and falls squarely in Black Death territory.

## Data Gaps

- **Week-by-week 1918 data**: The Census Bureau compiled detailed weekly mortality tables for select cities (Philadelphia, Indianapolis, etc.) but comprehensive nationwide weekly data for all of 1918-1919 is not freely available in digital form. Monthly approximations are used here.
- **Infrastructure cascade threshold**: No systematic study has modeled the CFR threshold at which modern infrastructure begins to fail. The Clade X exercise is the closest approximation, but it's a tabletop exercise, not a quantitative simulation.
- **Pre-modern vs. modern comparisons**: Black Death and Plague of Justinian mortality data come from a world without modern medicine, sanitation, or communication. Directly mapping their mortality curves to a modern pandemic is problematic — modern medicine lowers CFR but modern interconnectedness speeds spread.
- **Plague of Justinian severity**: Active scholarly debate (Mordechai et al. 2019 vs. traditionalists) about whether this plague was truly catastrophic or has been overstated in historical tradition.
- **Smallpox in Americas confounders**: Population decline was not purely disease-driven — conquest, enslavement, forced labor, famine, and social disruption all contributed. Isolating disease mortality is impossible.
- **Engineered pathogen parameters**: The Clade X scenario (Nipah-derived, ~10% CFR) is plausible but represents one point in a vast design space. A pathogen engineered for 30-50% CFR (as specified in this project's pandemic scenario) has no historical or exercise analogue.

## Sources

- Taubenberger JK, Morens DM. "1918 Influenza: the Mother of All Pandemics." *Emerging Infectious Diseases* 12(1), Jan 2006. https://pmc.ncbi.nlm.nih.gov/articles/PMC3291398/
- Taubenberger JK, Kash JC, Morens DM. "The 1918 Influenza Pandemic and Its Legacy." *Cold Spring Harbor Perspectives in Medicine*, 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7528857/
- US Census Bureau. "Special Tables of Mortality from Influenza and Pneumonia, September 1 to December 31, 1918." https://www.census.gov/library/publications/1920/demo/1918-mortality-special-tables.html
- US Census Bureau. "March 2023: The 1918 Influenza Pandemic." https://www.census.gov/about/history/stories/monthly/2023/march-2023.html
- CDC. "History of 1918 Flu Pandemic." https://archive.cdc.gov/www_cdc_gov/flu/pandemic-resources/1918-commemoration/1918-pandemic-history.htm
- Benedictow OJ. *The Black Death 1346-1353: The Complete History.* Boydell Press, 2004.
- Wikipedia. "Black Death." https://en.wikipedia.org/wiki/Black_Death (synthesis of Benedictow, Horrox, and other scholarly sources)
- DeWitte SN. "Age Patterns of Mortality During the Black Death in London, A.D. 1349-1350." *Social Science & Medicine* 75(12), 2010. https://pmc.ncbi.nlm.nih.gov/articles/PMC3094018/
- Cook ND. *Born to Die: Disease and New World Conquest, 1492-1650.* Cambridge UP, 1998.
- Wikipedia. "Native American disease and epidemics." https://en.wikipedia.org/wiki/Native_American_disease_and_epidemics
- Mordechai L et al. "The Justinianic Plague: An inconsequential pandemic?" *PNAS* 116(51), 2019. https://www.pnas.org/doi/10.1073/pnas.1903797116
- Wikipedia. "Plague of Justinian." https://en.wikipedia.org/wiki/Plague_of_Justinian
- CDC. "Excess Deaths Associated with COVID-19." https://www.cdc.gov/nchs/nvss/vsrr/covid19/excess_deaths.htm
- CDC. "COVID-19 Mortality Update — United States, 2022." https://pmc.ncbi.nlm.nih.gov/articles/PMC10168601/
- Johns Hopkins Center for Health Security. "Clade X Pandemic Exercise." 2018. https://centerforhealthsecurity.org/our-work/tabletop-exercises/clade-x-tabletop-exercise
- Schoch-Spana M et al. "Clade X: A Pandemic Exercise." *Health Security* 17(5), 2019. https://pubmed.ncbi.nlm.nih.gov/31593508/

## Confidence Assessment

**Overall confidence: MEDIUM**

- 1918 flu data: HIGH — best-documented pandemic in history, week/month-level US mortality data exists
- Black Death data: MEDIUM — well-studied but inherently limited by medieval record-keeping; 30-60% range is wide
- Smallpox in Americas: MEDIUM — pre-contact population estimates vary by 2.5x; disease mortality is confounded with conquest
- Plague of Justinian: LOW — active scholarly debate about whether it was truly catastrophic; limited source material
- COVID-19: HIGH — modern epidemiological surveillance
- Civilizational collapse threshold: LOW — extrapolated from historical cases and one tabletop exercise; no modern empirical data

<!-- COMPLETE -->
