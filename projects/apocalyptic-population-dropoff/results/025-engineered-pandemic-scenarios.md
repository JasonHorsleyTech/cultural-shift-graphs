# Result: Engineered Pandemic — Modeled Scenarios and Parameters

## Summary

Tabletop exercises and academic modeling consistently show that an engineered pathogen with high CFR (20–50%) and airborne transmission (R0 5–10) could kill tens of millions in the US within 12–20 months of release, with secondary infrastructure-collapse mortality potentially doubling or tripling direct disease deaths. The key insight from the literature is that civilizational collapse doesn't require a pathogen that kills everyone — it requires a pathogen lethal and transmissible enough that essential workers either die or refuse to show up, triggering cascading infrastructure failure. COVID-19 (CFR ~1%) strained but didn't break systems; the exercises model what happens when CFR crosses the 20–50% threshold where fear-driven and actual absenteeism destroy the supply chain for food, water, power, and medical care.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| canonical_scenario_cfr | 35 | 30 | 50 | pct | duration | Plan spec / Clade X extrapolation | medium |
| canonical_scenario_r0 | 7 | 5 | 10 | dimensionless | duration | Esvelt 2023, exercise parameters | medium |
| canonical_incubation_period | 10 | 7 | 14 | days | per case | Plan spec / Dark Winter analogue | medium |
| canonical_pandemic_duration | 9 | 6 | 12 | months | onset to burnout | SIR modeling consensus | medium |
| dark_winter_infected_2wk | 16000 | 16000 | 16000 | people | day 1-14 | O'Toole et al. 2002 | high |
| dark_winter_dead_2wk | 6000 | 6000 | 6000 | people | day 1-14 | O'Toole et al. 2002 | high |
| dark_winter_projected_3rd_gen | 300000 | 300000 | 300000 | people infected | week 4-6 | O'Toole et al. 2002 | medium |
| dark_winter_projected_4th_gen | 3000000 | 3000000 | 3000000 | people infected | week 6-9 | O'Toole et al. 2002 | low |
| dark_winter_projected_dead_4th_gen | 1000000 | 1000000 | 1000000 | people | week 6-9 | O'Toole et al. 2002 | low |
| dark_winter_smallpox_cfr | 30 | 20 | 50 | pct | per case | Historical variola major | high |
| dark_winter_smallpox_r0 | 4.6 | 4 | 10 | dimensionless | per generation | Gani & Leach 2001 | high |
| clade_x_cfr | 20 | 20 | 20 | pct | per case | JHU CHS 2018 | high |
| clade_x_us_deaths_20mo | 17500000 | 15000000 | 20000000 | people | month 1-20 | JHU CHS Clade X 2018 | medium |
| clade_x_global_deaths_20mo | 150000000 | 150000000 | 150000000 | people | month 1-20 | JHU CHS Clade X 2018 | medium |
| clade_x_worst_case_global | 900000000 | 900000000 | 900000000 | people | multi-year | JHU CHS Clade X 2018 | low |
| event_201_global_deaths | 65000000 | 65000000 | 65000000 | people | 18 months | JHU CHS Event 201 2019 | medium |
| dhs_scenario2_anthrax_exposed | 328484 | 328484 | 328484 | people | per city | DHS NPS 2006 | medium |
| dhs_scenario2_anthrax_deaths | 13208 | 13208 | 13208 | people | per city untreated | DHS NPS 2006 | medium |
| hhs_planned_absenteeism_peak | 40 | 30 | 40 | pct of workforce | peak 2-week period | HHS Pandemic Influenza Plan | high |
| covid_hospital_critical_staffing | 22 | 22 | 22 | pct of hospitals | peak Omicron Jan 2022 | HHS ASPE 2022 | high |
| ord_engineered_pandemic_risk | 3.3 | 1 | 5 | pct per century | next 100 years | Ord 2020 "The Precipice" | medium |
| ord_natural_pandemic_risk | 0.01 | 0.01 | 0.01 | pct per century | next 100 years | Ord 2020 "The Precipice" | medium |
| us_population_baseline | 335000000 | 335000000 | 335000000 | people | current | Census | high |
| infrastructure_collapse_cfr_threshold | 25 | 15 | 35 | pct | threshold estimate | Esvelt/GCSP 2023, exercise synthesis | low |

## Mortality Timeline

This models a canonical engineered pandemic scenario: airborne pathogen, R0 ~7, CFR ~35%, 10-day incubation, released in multiple US travel hubs simultaneously. Mortality is split into direct disease deaths (S-curve, logistic growth) and secondary infrastructure-collapse deaths that begin once essential worker absenteeism crosses critical thresholds (~month 2–3).

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 1 | 0.0 | 0.0 | 0.0 | none (incubation) | SIR modeling |
| 168 | 0.0 | 0.0 | 0.0 | none (incubation, early cases only) | Dark Winter analogue |
| 720 | 0.1 | 0.05 | 0.2 | direct disease mortality | SIR modeling, Dark Winter extrapolation |
| 2160 | 2.0 | 1.0 | 4.0 | direct disease mortality, early healthcare collapse | Clade X extrapolation, 1918 flu wave shape |
| 4320 | 10.0 | 5.0 | 18.0 | disease + infrastructure cascade begins | Clade X/GCSP wildfire model |
| 8760 | 25.0 | 15.0 | 40.0 | disease burnout + infrastructure collapse + famine onset | Clade X worst-case, Esvelt wildfire model |
| 17520 | 35.0 | 20.0 | 55.0 | famine, medical dependency deaths, violence | GCSP 2023, ALLFED extrapolation |
| 26280 | 38.0 | 22.0 | 58.0 | continued famine, slow recovery begins | Extrapolation from grid-collapse analogues |
| 43800 | 40.0 | 23.0 | 60.0 | residual famine and infrastructure recovery | Extrapolation |
| 87600 | 42.0 | 24.0 | 62.0 | long-tail mortality, partial recovery | Extrapolation |

### Timeline rationale

**Weeks 1–4 (hours 1–720):** Incubation period means almost no deaths initially. With 10-day incubation and multi-hub release, first cases appear around day 10–14. By month 1, thousands of cases but deaths still under 0.1% of population. This matches Dark Winter's 6,000 dead / 16,000 infected at 2 weeks from a single-city smallpox release — our scenario is multi-city but similar early dynamics.

**Months 1–3 (hours 720–2,160):** Exponential growth phase. Healthcare system overwhelmed within weeks of widespread case recognition. COVID-19 at ~1% CFR pushed 22% of hospitals to critical staffing shortages; at 35% CFR, healthcare collapse is near-total. HHS pandemic planning assumes 40% peak workforce absenteeism for moderate pandemics — at 35% CFR this would be far higher due to actual deaths plus terror-driven refusal to work. By month 3, ~2% of total population dead directly from disease.

**Months 3–6 (hours 2,160–4,320):** Peak mortality period. The S-curve inflects here. Disease is burning through the population at maximum rate. Simultaneously, infrastructure begins cascading: Esvelt's "wildfire pandemic" model shows essential workers (power, water, food distribution) abandoning posts when CFR is high enough to make showing up feel suicidal. Food supply chains break. Medications become unavailable. By 6 months, direct disease deaths reach ~8–12% and secondary infrastructure deaths add another 2–6%.

**Months 6–12 (hours 4,320–8,760):** Disease begins to burn out (herd immunity threshold for R0=7 is ~86% infection rate; with 35% CFR, that's ~30% of total population dead from disease alone at saturation). But infrastructure collapse continues driving mortality — people who survived the disease now die from starvation, untreated chronic conditions, violence over resources. Insulin-dependent diabetics (~8.4M), dialysis patients (~550K), and other medically dependent populations face near-total mortality without supply chains.

**Years 1–2 (hours 8,760–17,520):** Disease is largely over. Mortality is now from famine and failed infrastructure. This is the most uncertain period — it depends entirely on how quickly agriculture, power, and water systems can be reconstituted. The wide uncertainty band (20–55%) reflects the fundamental gap in the literature: no model accounts for post-pandemic social dynamics (cooperation vs. violence, regional variation in agricultural capacity).

**Years 2–10 (hours 17,520–87,600):** Slow stabilization. Remaining population consolidates around functional agricultural zones. Mortality rate drops sharply but doesn't reach zero — ongoing elevated mortality from lack of medical care, nutritional deficiency, and continued social disruption. By year 10, the population has stabilized at roughly 55–80% of pre-pandemic levels (meaning 20–45% total cumulative mortality).

## Data Gaps

- **No real-world precedent for a pandemic that also collapses infrastructure.** COVID-19 strained but didn't break systems at ~1% CFR. The 1918 flu (~2.5% CFR in the US) killed 675,000 Americans (~0.65% of population) but infrastructure held. The jump from "strained infrastructure" to "collapsed infrastructure" is modeled but never observed. The threshold CFR for collapse is estimated at 15–35% but this is expert judgment, not empirical data.
- **Essential worker absenteeism modeling is weak.** HHS assumes 40% absenteeism for a moderate pandemic. No modeling exists for absenteeism at 35% CFR — the fear multiplier on top of actual illness/death is unknown. Esvelt's GCSP paper identifies this as the key variable but doesn't quantify it.
- **Secondary mortality (post-disease) is almost entirely extrapolation.** The transition from "pandemic kills people directly" to "infrastructure collapse kills people indirectly" is the critical unknown. No peer-reviewed study provides a mortality curve for this transition. Our estimates for months 6+ are synthesized from grid-collapse research (EMP Commission), famine mortality research (ALLFED), and medical-dependency data rather than pandemic-specific modeling.
- **Exercise limitations.** Dark Winter, Clade X, and Event 201 are policy exercises, not rigorous epidemiological models. They're designed to expose decision-making failures, not produce precise casualty numbers. The numbers they generate (900M dead in Clade X, 65M in Event 201) are scenario outputs, not predictions.
- **The wide uncertainty band is honest but limits graph utility.** At year 2, our range is 20–55% cumulative mortality — a nearly 3x spread. This reflects genuine scientific uncertainty but means the curve's uncertainty band will be very wide compared to better-modeled scenarios like nuclear war.
- **Compound effects not modeled.** A pandemic bad enough to collapse infrastructure would also collapse governance, law enforcement, and social order. Violence, refugee crises, and regional variation in impact are not captured in any exercise or model.

## Sources

- O'Toole, T., Mair, M., & Inglesby, T.V. (2002). "Shining Light on Dark Winter." *Clinical Infectious Diseases*, 34(7), 972-983. — Dark Winter exercise results with generational case projections.
- Johns Hopkins Center for Health Security. (2018). "Clade X Pandemic Exercise." — 20% CFR engineered parainfluenza/Nipah hybrid, 150M global deaths in 20 months, worst-case 900M.
- Johns Hopkins Center for Health Security. (2019). "Event 201 Pandemic Tabletop Exercise." — Novel coronavirus scenario, 65M global deaths in 18 months.
- DHS National Planning Scenarios, Version 21.3 (2006). Scenario 2: Biological Attack (Aerosol Anthrax). — 328,484 exposures, 13,208 untreated fatalities per city.
- Gopal, A., Bradshaw, W., Sunil, V., & Esvelt, K.M. (2023). "Securing Civilisation Against Catastrophic Pandemics." *Geneva Centre for Security Policy*, Geneva Paper 31/23. — Wildfire and stealth pandemic collapse mechanisms, essential worker threshold analysis.
- Ord, T. (2020). *The Precipice: Existential Risk and the Future of Humanity.* London: Bloomsbury. — Engineered pandemic existential risk at 1-in-30 per century; natural pandemic at 1-in-10,000.
- Gerstein, D.M., Espinosa, B., & Leidy, E.N. (2024). "Emerging Technology and Risk Analysis: Synthetic Pandemics." RAND Corporation, RR-A2882-1. — Assessment of engineered pathogen feasibility and technology trajectory.
- HHS Pandemic Influenza Plan (2005/updated). — 40% peak workforce absenteeism planning assumption.
- CDC MMWR (2020). "Increases in Health-Related Workplace Absenteeism Among Workers in Essential Critical Infrastructure Occupations During the COVID-19 Pandemic." — COVID-19 baseline absenteeism data.
- HHS ASPE (2022). "Impact of the COVID-19 Pandemic on the Hospital and Outpatient Clinician Workforce." — 22% of hospitals at critical staffing during Omicron peak.
- Gani, R. & Leach, S. (2001). "Transmission potential of smallpox in contemporary populations." *Nature*, 414, 748-751. — Smallpox R0 estimate of 4.6 (range 4–10).
- U.S. Census Bureau (2023). "The 1918 Influenza Pandemic." — 675,000 US deaths (~0.65% of 103M population).

<!-- COMPLETE -->
