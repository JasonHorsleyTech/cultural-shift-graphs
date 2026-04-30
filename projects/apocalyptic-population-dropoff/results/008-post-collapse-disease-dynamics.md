# Result: Post-Collapse Disease Dynamics

## Summary

When infrastructure collapses, disease becomes a major secondary killer following a predictable timeline: waterborne diseases emerge within days of water treatment failure, respiratory and crowding diseases within weeks as populations concentrate, and untreated infections accumulate steadily over months. Historical refugee camp data shows emergency-phase crude mortality rates 5–30x baseline, with 60–80% of deaths attributable to just five causes: measles, diarrheal diseases, acute respiratory infections, malaria, and malnutrition. The transition from modern mortality (~8/1000/year) toward pre-industrial rates (~30–40/1000/year) would likely occur within weeks to months of sustained infrastructure failure, not years.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| us_water_systems_power_dependent | 95 | 90 | 98 | pct | current | EPA 2023, AWWA | high |
| urban_water_storage_duration | 2 | 1 | 5 | days | current | AWWA guidelines, Practical Engineering | medium |
| water_backup_generation_extends_to | 4 | 3 | 7 | days | current | EPA Power Resilience Guide 2019 | medium |
| days_until_water_unsafe_after_grid_loss | 3 | 1 | 7 | days | post-event | EPA 2023, water utility data | medium |
| cholera_incubation_hours | 48 | 2 | 120 | hours | post-exposure | WHO, CDC | high |
| cholera_cfr_untreated | 50 | 30 | 60 | pct | per-case | WHO cholera factsheet | high |
| cholera_cfr_with_rehydration | 1 | 0.5 | 2 | pct | per-case | WHO cholera factsheet | high |
| typhoid_cfr_untreated | 15 | 10 | 30 | pct | per-case | CDC, PMC review | high |
| typhoid_incubation_days | 14 | 6 | 30 | days | post-exposure | CDC Yellow Book | high |
| dysentery_cfr_untreated_epidemic | 10 | 1 | 20 | pct | per-case | WHO, Shigella studies | medium |
| norovirus_onset_hours | 30 | 12 | 48 | hours | post-exposure | CDC | high |
| measles_cfr_well_nourished | 2 | 1 | 3 | per_thousand | per-case | WHO, CDC | high |
| measles_cfr_malnourished_displaced | 15 | 10 | 30 | pct | per-case | BMC Int Health, WHO | high |
| appendicitis_cfr_untreated | 50 | 40 | 60 | pct | per-case | StatPearls NIH | high |
| dental_abscess_cfr_untreated_complicated | 40 | 20 | 50 | pct | per-case | StatPearls NIH | medium |
| sepsis_cfr_without_antibiotics | 30 | 20 | 50 | pct | per-case | WHO, historical data | medium |
| appendicitis_annual_incidence_us | 300000 | 250000 | 350000 | people | per-year | Cleveland Clinic, surgical literature | high |
| refugee_camp_cmr_emergency_phase | 5 | 1.2 | 31 | per_10k_per_day | emergency phase | UNHCR 2009-2017, Rwandan data | high |
| refugee_camp_cmr_baseline | 0.5 | 0.3 | 0.8 | per_10k_per_day | stable phase | UNHCR threshold guidelines | high |
| pre_industrial_crude_death_rate | 35 | 30 | 40 | per_thousand_per_year | historical baseline | Demographic transition data, Our World in Data | high |
| modern_us_crude_death_rate | 8.3 | 8.0 | 8.5 | per_thousand_per_year | current | CDC | high |
| refugee_disease_mortality_share | 70 | 60 | 80 | pct | emergency phase | CDC MMWR, UNHCR | high |
| pct_us_population_urban | 83 | 82 | 84 | pct | current | US Census | high |
| us_population_on_daily_medications | 131000000 | 120000000 | 140000000 | people | current | CDC NCHS | medium |

## Disease Emergence Timeline (post-infrastructure collapse)

This is not a mortality timeline per se but a phased model of how disease dynamics unfold after infrastructure failure. It feeds into the scenario curves.

### Phase 1: Water Crisis (Days 1–7)

- **Day 1–2:** Municipal water pressure drops as pumping stations lose power. Stored water in elevated tanks begins draining.
- **Day 2–4:** Water storage exhausted in most urban systems (average 2-day supply; backup generators extend to 3–4 days). Pressure loss allows contaminant intrusion into distribution pipes from surrounding soil/groundwater.
- **Day 3–7:** Sewage backup begins as wastewater treatment plants fail. Direct discharge of untreated sewage into waterways. Population begins using untreated surface water.
- **Day 5–10:** First waterborne disease cases appear. Norovirus (12–48 hour incubation) appears first, followed by cholera (2 hours–5 days) and other enteric pathogens. Shigella dysentery spreads rapidly in areas with fecal contamination.

### Phase 2: Epidemic Emergence (Weeks 2–8)

- **Week 2–3:** Waterborne disease epidemics establish in urban areas. Cholera outbreaks in communities drinking contaminated water. Without IV rehydration capability, CFR reaches 30–60%.
- **Week 3–4:** Typhoid fever cases emerge (6–30 day incubation). CFR 10–30% untreated. Becomes endemic wherever water/food is fecally contaminated.
- **Week 2–6:** As populations concentrate (fleeing cities, gathering at resource points), crowding diseases emerge. Respiratory infections spread rapidly. Measles outbreaks begin in unvaccinated pockets (~8% of US children under-vaccinated).
- **Week 4–8:** In malnourished, crowded populations, measles CFR rises from ~0.2% (well-nourished) to 10–30% (malnourished/displaced). This is one of the most lethal dynamics in refugee settings.

### Phase 3: Endemic Elevation (Months 2–6)

- **Month 2–3:** Untreated surgical emergencies accumulate. Appendicitis (~300K cases/year in US) becomes 50%+ fatal without surgery. Compound fractures, burns, and lacerations develop sepsis at high rates (20–50% CFR without antibiotics).
- **Month 2–4:** Dental infections — historically a leading killer in pre-antibiotic era — begin causing systemic sepsis. Complicated dental abscesses carry ~40% mortality if they spread to mediastinum.
- **Month 3–6:** Rat and vermin populations explode as sanitation systems fail and food waste/corpses accumulate. This increases flea-borne disease risk (typhus, plague) though the primary disease vector remains contaminated water, not corpses themselves.
- **Month 3–6:** Mortality rate approaches pre-industrial baseline of 30–40/1000/year (roughly 4x modern rates), stabilizing at elevated endemic levels rather than continued epidemic spikes.

### Phase 4: New Equilibrium (Months 6–12+)

- **Month 6–12:** Surviving population has partial acquired immunity to endemic waterborne diseases. Communities that establish clean water sources (boiling, filtration, spring access) see dramatically lower disease mortality.
- **Ongoing:** Without antibiotics, any significant infection (wound, respiratory, urinary) carries 20–50% mortality risk from sepsis. This becomes the "background noise" of elevated mortality indefinitely.

## Estimated Excess Disease Deaths (cumulative, % of 335M baseline)

These estimates assume a full nationwide infrastructure collapse (worst case). Partial or regional collapse would scale proportionally.

| timeframe | excess_disease_deaths_pct | range_low | range_high | primary_drivers | notes |
|---|---|---|---|---|---|
| month 1 | 1.5 | 0.5 | 3.0 | waterborne disease (cholera, dysentery), dehydration | Urban populations hit hardest; rural areas with wells partially buffered |
| month 3 | 4.0 | 2.0 | 7.0 | waterborne epidemics, untreated surgical emergencies, respiratory infections | Refugee camp analogues suggest CMR 2-5/10k/day in concentrated populations |
| month 6 | 7.0 | 4.0 | 12.0 | all above + measles in malnourished, accumulated untreated infections | Measles becomes major killer in displaced children |
| month 12 | 10.0 | 6.0 | 18.0 | endemic waterborne disease, untreated infections, seasonal respiratory disease | Rate decelerating as survivors adapt and most vulnerable have died |

**Calibration note:** These disease-only estimates are *additive* to starvation deaths, violence, and other causes. They are calibrated against refugee camp data (UNHCR emergency phase CMRs of 1.2–31/10K/day) and scaled to a population without external aid. The wide ranges reflect the enormous uncertainty in extrapolating refugee camp conditions to a 335M population.

**Important caveat on dead bodies:** Contrary to popular belief, unburied dead bodies from non-infectious causes pose minimal direct disease risk (WHO/Red Cross 2023 joint statement). The primary disease threats are contaminated water, poor sanitation, and crowding — not corpses. Bodies may contaminate water sources via normal intestinal flora, but this is secondary to direct sewage contamination.

## Data Gaps

- **Compound effects unmeasured:** No study models the interaction of simultaneous water failure + medication loss + food shortage + population displacement. Each factor amplifies the others, but the compound effect is genuinely unknown. Refugee camp data is the closest analogue but camps receive external aid.
- **Urban vs. rural divergence:** Disease dynamics would differ enormously between dense urban areas (rapid epidemic spread, faster water system failure) and rural areas (well water, lower density, slower spread). No model disaggregates this for a US-scale collapse.
- **Antibiotic stockpile depletion curve:** Some antibiotics would remain available from pharmacies, hospitals, and personal stockpiles. How quickly this supply depletes and how it affects the disease mortality curve is unmodeled.
- **Immunity landscape:** The modern US population has near-zero acquired immunity to cholera, typhoid, and other endemic pre-industrial diseases. Whether this makes initial outbreaks worse than historical baselines is debated.
- **Seasonal variation:** Disease dynamics vary enormously by season. A grid collapse in July (heat, rapid bacterial growth, higher water demand) vs. January (cold slows pathogens but increases respiratory disease, hypothermia) would produce very different curves.
- **Pre-industrial mortality reversion speed:** The ticket asks "how quickly does mortality revert to pre-industrial rates?" — the honest answer is nobody knows. Refugee camp data suggests emergency-phase mortality can exceed pre-industrial rates within days, but sustained rates depend heavily on community organization and resource access.

## Sources

- WHO. "Cholera Fact Sheet." https://www.who.int/news-room/fact-sheets/detail/cholera — Cholera CFR, incubation period, treatment effectiveness.
- WHO. "Drinking-Water Fact Sheet." https://www.who.int/news-room/fact-sheets/detail/drinking-water — Global waterborne disease mortality (505,000 diarrheal deaths/year).
- WHO/Red Cross. "Dead bodies from natural disasters and conflict do not generally pose health risks." Joint statement, September 2023. https://www.who.int/news/item/15-09-2023-dead-bodies-from-natural-disasters-and-conflict-do-not-generally-pose-health-risks--red-cross-and-who-say
- CDC. "Famine-Affected, Refugee, and Displaced Populations: Recommendations for Public Health Issues." MMWR. https://www.cdc.gov/mmwr/preview/mmwrhtml/00019261.htm — 60-80% of refugee deaths from 5 causes.
- UNHCR. "Mortality Surveillance Threshold." https://emergency.unhcr.org/emergency-assistance/health-and-nutrition/mortality-surveillance-threshold — Emergency phase CMR thresholds, 1/10K/day standard.
- NCBI/PMC. "Understanding Mortality Patterns in Complex Humanitarian Emergencies." https://www.ncbi.nlm.nih.gov/books/NBK223340/ — Rwandan crisis CMR 19.4-30.9/10K/day, Sudan camp data.
- Connolly MA et al. "Infectious disease epidemics in refugee camps: a retrospective analysis of UNHCR data (2009-2017)." Journal of Global Health Reports. https://www.joghr.org/article/12009 — 364 outbreaks, 75% from measles/cholera/meningitis.
- BMC International Health and Human Rights. "Measles outbreaks in displaced populations." https://bmcinthealthhumrights.biomedcentral.com/articles/10.1186/1472-698X-10-5 — Measles CFR 10-30% in malnourished displaced populations.
- WHO. "Measles Fact Sheet." https://www.who.int/news-room/fact-sheets/detail/measles — Global measles mortality, CFR data.
- EPA. "Power Resilience Guide for Water and Wastewater Utilities." 2019/2023. https://www.epa.gov/system/files/documents/2023-05/PowerResilienceGuide_2023_508c.pdf — Water system power dependency, backup capacity.
- Practical Engineering. "How Long Would Society Last During a Total Grid Collapse?" 2022. https://practical.engineering/blog/2022/11/22/how-long-would-society-last-during-a-total-grid-collapse — 2-day average urban water storage, 3-4 days with backup.
- StatPearls/NIH. "Appendicitis." https://www.ncbi.nlm.nih.gov/books/NBK493193/ — Untreated appendicitis CFR >50%.
- StatPearls/NIH. "Dental Abscess." https://www.ncbi.nlm.nih.gov/books/NBK493149/ — Complicated dental abscess mortality up to 40%.
- PMC. "Complications and mortality of typhoid fever." https://pmc.ncbi.nlm.nih.gov/articles/PMC7754788/ — Typhoid CFR 10-30% untreated.
- CDC Yellow Book. "Typhoid and Paratyphoid Fever." https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/typhoid-and-paratyphoid-fever.html — Incubation 6-30 days.
- PMC. "The Rise of the Current Mortality Pattern of the United States." https://pmc.ncbi.nlm.nih.gov/articles/PMC7314254/ — Historical US mortality transition.
- Carolina Demography. "Mortality and Cause of Death, 1900 v. 2010." https://carolinademography.cpc.unc.edu/2014/06/16/mortality-and-cause-of-death-1900-v-2010/ — 1900 leading causes of death.
- Our World in Data. "Mortality in the past." https://ourworldindata.org/child-mortality-in-the-past — Pre-industrial mortality rates 30-40/1000/year.
- EMP Commission. 2008 Report to Congress. — 90% mortality estimate within 12 months of grid collapse (testimony, not peer-reviewed modeling).
- WHO. "Sepsis Fact Sheet." https://www.who.int/news-room/fact-sheets/detail/sepsis — Sepsis mortality without treatment.

<!-- COMPLETE -->
