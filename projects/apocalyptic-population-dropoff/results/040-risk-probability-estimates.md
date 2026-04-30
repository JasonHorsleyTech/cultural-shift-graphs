# Result: Risk Probability Estimates per Scenario

## Summary

Risk probabilities vary by roughly six orders of magnitude across the eight scenarios — from solar storms (~12% per decade, surprisingly high) to Chicxulub-class asteroid impacts (~1 in a million per century). The anthropogenic risks (nuclear war, engineered pandemic, breadbasket failure) are both the most likely and the most rapidly increasing. Natural risks (asteroid, supervolcano) are effectively constant over human timescales. Most published estimates carry enormous uncertainty; the ranges below reflect genuine scientific disagreement, not just statistical error bars.

## Key Data Points

### Scenario probabilities — event occurrence (not extinction, but the specific scenario as scoped in the project)

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| nuclear_war_annual_probability | 1.0 | 0.3 | 2.0 | pct_per_year | current | Barrett et al. 2018, Rodriguez/80K Hours | medium |
| nuclear_war_century_probability | 63 | 26 | 87 | pct_per_century | current | derived from annual (compound) | medium |
| emp_attack_standalone_probability | 0.1 | 0.01 | 0.5 | pct_per_year | current | expert judgment, no formal model | low |
| solar_storm_carrington_class_per_decade | 12 | 6.3 | 12 | pct_per_decade | current | Riley 2012, Love 2013 | high |
| solar_storm_carrington_class_per_century | 72 | 48 | 72 | pct_per_century | current | derived from per-decade (compound) | high |
| engineered_pandemic_catastrophic_per_century | 3.3 | 1.0 | 10.0 | pct_per_century | current | Ord 2020, 2008 Oxford survey, biosecurity experts | medium |
| yellowstone_vei8_per_year | 0.00014 | 0.0001 | 0.0002 | pct_per_year | constant | USGS | high |
| yellowstone_vei8_per_century | 0.014 | 0.01 | 0.02 | pct_per_century | constant | USGS | high |
| vei7_anywhere_on_earth_per_century | 12 | 11 | 20 | pct_per_century | constant | Newhall et al. 2018 | high |
| asteroid_10km_chicxulub_per_century | 0.0001 | 0.00005 | 0.0002 | pct_per_century | constant | NASA CNEOS, geological record | high |
| asteroid_1km_per_century | 0.02 | 0.014 | 0.1 | pct_per_century | constant | NASA CNEOS, Britannica/geological record | high |
| breadbasket_3plus_failure_per_decade | 5 | 1 | 10 | pct_per_decade | 2020s | Gaupp et al. 2020, extrapolation | medium |
| breadbasket_3plus_failure_per_decade_2050s | 15 | 5 | 25 | pct_per_decade | 2050s | Gaupp et al. projected, Chatham House | low |
| climate_4c_plus_by_2100_current_policies | 5 | 2 | 10 | pct | by 2100 | Climate Action Tracker 2025, IPCC AR6 | medium |
| climate_3c_plus_by_2100_current_policies | 33 | 20 | 50 | pct | by 2100 | Climate Action Tracker 2024, IPCC AR6 | medium |

### Toby Ord's existential risk estimates (per century, from The Precipice 2020)

These are for *existential catastrophe* (extinction or permanent civilizational collapse), which is a much higher bar than "the event happens." Included for context.

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| ord_nuclear_existential_risk | 0.1 | 0.01 | 1.0 | pct_per_century | next 100 years | Ord 2020 | low |
| ord_engineered_pandemic_existential_risk | 3.3 | 1.0 | 10.0 | pct_per_century | next 100 years | Ord 2020 | low |
| ord_climate_existential_risk | 0.1 | 0.01 | 1.0 | pct_per_century | next 100 years | Ord 2020 | low |
| ord_all_natural_risks_existential | 0.01 | 0.005 | 0.05 | pct_per_century | next 100 years | Ord 2020 | low |
| ord_total_existential_risk | 17 | 10 | 25 | pct_per_century | next 100 years | Ord 2020 | low |

## Detailed Analysis by Scenario

### 1. Full nuclear war (US-Russia)

**Annual probability of major nuclear war: ~0.3–2%, central estimate ~1%**

- Barrett, Baum & Hostetler (2013): Modeled the probability of inadvertent US-Russia nuclear war using fault trees and Poisson processes. Central estimate: ~1–2% per year (90% CI: 0.02–7%). When restricted to non-crisis periods: ~1% (CI: 0.001–5%).
- Luisa Rodriguez (80,000 Hours): Estimated ~1.17% per year based on historical near-misses and crisis frequency.
- Martin Hellman (Stanford): Did not assign a precise number but argued that even at 1% per year, a child born today has roughly coin-flip odds of avoiding nuclear war in their lifetime. His upper bound implies >1% per year.
- Toby Ord (2020): Estimated existential risk (not just war occurring) at 1/1,000 per century. In "Precipice Revisited" (2024), he noted the risk has not meaningfully changed despite rising geopolitical tension, but flagged growing arsenals and collapsing arms control funding as concerning.
- 80,000 Hours overall: 20–50% probability of *some* nuclear war in the next 100 years.

**Key nuance:** The probability of a nuclear *war* is much higher than the probability of nuclear *existential catastrophe*. A limited exchange (e.g., India-Pakistan) would not produce the scenario modeled in this project. The US-Russia full exchange specifically is perhaps 30–60% of the total nuclear war probability.

**Trend: Increasing.** Arms control frameworks (INF, Open Skies) have collapsed. New hypersonic weapons reduce decision time. Russia-NATO tensions are elevated. China's arsenal is expanding rapidly.

### 2. EMP attack (standalone)

**No formal probability model exists. Qualitative assessment: very low.**

- CISA classifies EMP as "low probability / high consequence."
- A dedicated EMP attack requires a nuclear weapon detonated at high altitude — which means a state actor with both nuclear and missile capability. Currently limited to Russia, China, North Korea, and potentially Pakistan/India/Israel.
- A standalone EMP (without full nuclear war) requires a state actor to use a nuclear weapon in a way that deliberately avoids triggering full nuclear retaliation. This is an extremely narrow strategic scenario.
- The EMP Commission focused on vulnerability, not probability, and deliberately avoided assigning numbers.
- Most realistic EMP scenarios are subsumed within nuclear war scenarios (i.e., EMP effects would accompany a nuclear exchange, not precede it as a standalone attack).
- For this project's grid-collapse scenario, the Carrington-class solar storm is a much more quantifiable and arguably more likely trigger.

**Trend: Roughly constant.** The number of states with the capability hasn't changed significantly.

### 3. Carrington-class solar storm

**~12% per decade (Riley 2012), ~6% per decade (Love 2013). Best-quantified risk in this set.**

- Pete Riley (2012, Space Weather): Analyzed 50+ years of solar storm data and extrapolated the frequency distribution of Dst disturbances to extreme values. Estimated a 12% probability of a Carrington-class event (Dst < -850 nT) per decade.
- J.J. Love (2013): Applied Poisson statistics to the same historical record and estimated ~6.3% per decade — about half of Riley's figure. The difference stems from methodology, not data disagreement.
- The July 2012 solar superstorm (a massive CME that barely missed Earth) confirmed that Carrington-class events occur more frequently than previously assumed.
- NAS 2008 report estimated ~$1–2 trillion in damages to the US grid in the first year alone if a Carrington-class storm hit.
- Per century (compounded): 48–72% probability.

**Key nuance:** Not all Carrington-class storms would cause the catastrophic grid collapse modeled in Scenario 3. Modern grid hardening (ongoing but incomplete) and space weather early warning systems (15–60 minutes of warning from L1 satellites) provide some mitigation. The ~12% is for the *geomagnetic event*; the probability of it causing the multi-year grid collapse in the scenario is lower but hard to quantify.

**Trend: Constant** (solar physics is unchanged). But *vulnerability* is increasing as grid dependency grows, partially offset by hardening investments.

### 4. Catastrophic engineered pandemic

**~1–10% per century, central estimate ~3% per century (Ord 2020).**

- Toby Ord (2020): 1/30 per century (~3.3%) for existential risk from engineered pandemics — his highest non-AI risk. In Precipice Revisited (2024), he did not significantly revise this number.
- 2008 Oxford Global Catastrophic Risk Conference: Expert survey median of 2% per century for extinction from engineered pandemic (vs. 0.05% for natural pandemic).
- 80,000 Hours: Considers catastrophic biorisk among the top priorities. Notes that no non-state actor has yet demonstrated the capability for a civilization-ending bioweapon, but this is changing rapidly.
- The scenario in this project (30–50% CFR airborne pathogen) is less extreme than extinction — more plausible but still requires significant state or advanced non-state actor capability.

**Key nuance:** COVID-19 demonstrated both global vulnerability and global response capacity. The risk landscape has shifted in both directions: biosecurity awareness and pandemic preparedness have improved, but biotech capabilities have democratized dramatically (benchtop DNA synthesis, AI protein design, open-source pathogen research).

**Trend: Increasing.** Biotechnology is becoming cheaper and more accessible. The number of people with relevant expertise is growing. AI tools lower barriers to designing novel pathogens. But countervailing investment in biosurveillance has also grown post-COVID.

### 5. Yellowstone VEI-8

**~0.00014% per year (1 in 730,000). Negligible on human timescales.**

- USGS: The annual probability of a Yellowstone supereruption is approximately 1 in 730,000. They emphasize this is probably an overestimate for the short term.
- Yellowstone's last three caldera-forming eruptions were 2.1 million, 1.3 million, and 640,000 years ago. The intervals (800K and 660K years) do not support the "overdue" narrative.
- Yellowstone is not showing signs of imminent eruption. Current volcanic unrest (geysers, minor earthquakes) is within normal parameters.

**However — VEI-7 anywhere on Earth: ~12% per century.**

- Newhall et al. (2018): VEI-7 eruptions occur roughly 1–2 times per millennium globally (probably closer to 2 when correcting for incomplete records). This translates to ~12% probability per century.
- The most recent VEI-7 was Tambora (1815), which caused the "Year Without a Summer" in 1816 — severe crop failures, famine, and social disruption across the Northern Hemisphere.
- A VEI-7 would not cause the catastrophic effects of a Yellowstone VEI-8 but could trigger significant global cooling and crop failures.

**Trend: Constant.** Volcanic activity operates on geological timescales.

### 6. Asteroid impact (10 km Chicxulub-class)

**~1 in 100 million per year. Essentially zero risk in human-relevant timeframes.**

- Geological record: Chicxulub-class (10+ km) impacts occur approximately once per 100 million years. Per century probability: ~0.0001%.
- 1 km impacts: approximately once per 500,000 years (some sources say 100,000–700,000 years). Per century: ~0.014–0.1%.
- NASA's Sentry-II system continuously monitors all known NEOs for impact probability over the next 100 years.
- As of 2025, >90% of near-Earth objects larger than 1 km have been discovered. No known object poses a significant threat in the next 100+ years.
- A 10 km asteroid would be detected years to decades before impact, potentially allowing deflection (DART mission demonstrated kinetic impactor technology in 2022).

**Key nuance:** The risk is not zero — undiscovered objects could appear with shorter warning times. But the residual risk after current surveys is extremely low for civilization-ending impacts.

**Trend: Decreasing.** Detection capability is improving. The Vera Rubin Observatory (operational 2025) will dramatically increase the detection rate for smaller objects. Deflection technology is being actively developed.

### 7. Global breadbasket failure

**~1–10% per decade currently, rising to ~5–25% per decade by mid-century.**

- Gaupp et al. (2020, Nature Climate Change): Found increasing risk of simultaneous failure of wheat, maize, and soybean breadbaskets. Climate teleconnections (ENSO, IOD, NAO) drive correlated failures across geographically distant regions.
- Chatham House / Woodwell Climate (2021): By 2030, a >10% grain production shock has an 11% annual probability. By mid-century, the risk of simultaneous crop failures across multiple breadbaskets rises dramatically.
- Nature Communications (2023): Risks of synchronized low yields are underestimated in current climate and crop model projections.
- For this project's specific scenario (3+ breadbaskets failing simultaneously, severe enough to cause civilizational stress): estimated ~1–5% per decade currently, rising to perhaps ~5–15% per decade by 2050.

**Key nuance:** "Breadbasket failure" is a spectrum. A 10% production shock causes price spikes and hardship but not civilizational collapse. The scenario in this project (severe enough to cause mass famine in the US) requires simultaneous failure extreme enough that global trade cannot compensate — a narrower and less likely event than general crop failure.

**Trend: Rapidly increasing.** Climate change is the primary driver. Heat stress during reproductive periods, changing precipitation patterns, and increased climate variability all contribute. The 2021 research suggests crop failure risk is nearly 5x higher by 2030 compared to historical baseline.

### 8. Climate tipping cascades (4°C+)

**Probability of reaching 4°C+ by 2100: ~2–10% under current policies. Much higher under worst-case emissions.**

- Climate Action Tracker (2025): Current policies project median warming of ~2.6°C by 2100. A 33% chance of exceeding 3.1°C, ~10% chance of exceeding 3.4°C.
- IPCC AR6 SSP scenarios:
  - SSP2-4.5 (most likely under current policies): 2.1–3.5°C by 2100. 4°C+ is in the extreme tail.
  - SSP3-7.0: 2.8–4.6°C. 4°C+ is plausible (~20–40% probability).
  - SSP5-8.5 (worst case): 3.3–5.7°C. 4°C+ is likely (>60% probability).
- Kemp et al. (2022, PNAS): Argued that catastrophic climate change scenarios (≥4°C) are dangerously under-studied. At 4°C+, multiple tipping points are likely crossed (AMOC collapse, Amazon dieback, permafrost methane release), potentially triggering cascading feedbacks.
- Lenton et al. (2019): Identified ~15 climate tipping points, several of which may interact. Once multiple tipping points are crossed, the system may be committed to further warming regardless of emissions reductions.

**Key nuance:** The probability depends entirely on future emissions policy. Under aggressive decarbonization, 4°C+ is virtually impossible. Under current policies, it's unlikely but not negligible. Under fossil-fuel-intensive pathways, it becomes probable. This makes the scenario fundamentally different from the others — its probability is a policy variable, not a physical constant.

**Trend: Improving (slowly).** Warming projections under current policies have decreased from ~3.5°C a decade ago to ~2.6°C today, primarily due to renewable energy cost reductions and coal decline. But the projections still carry wide uncertainty, and policy reversals could push the trajectory back up.

## Risk Correlation and Interaction

These risks are NOT independent. Key correlations:

- **Climate stress → nuclear war:** Resource scarcity and climate migration increase geopolitical tension. Climate-stressed states with nuclear weapons (Pakistan, India, potentially others) face compounding pressures.
- **Climate change → breadbasket failure:** The primary driver. These are essentially the same risk on different timescales.
- **Nuclear war → grid collapse → pandemic:** A nuclear exchange produces EMP effects, infrastructure damage, and conditions favoring disease outbreak simultaneously. The compound scenario is worse than any individual curve.
- **Breadbasket failure → social collapse → nuclear risk:** Food insecurity in nuclear-armed states increases risk of conflict escalation.

## Data Gaps

- **EMP attack probability:** No formal quantitative model exists. The probability is essentially expert intuition, not data-driven estimation.
- **Compound scenario probabilities:** No model captures the probability of cascading failures (e.g., climate → breadbasket → social collapse → nuclear). Each is modeled independently.
- **Engineered pandemic specifics:** The probability of a pathogen with 30–50% CFR being *created and released* (vs. engineered pandemic in general) is not well-estimated. Most estimates bundle creation, release, and spread together.
- **Breadbasket failure severity threshold:** The probability of *any* multi-breadbasket failure is well-studied. The probability of one severe enough to cause civilizational stress (as scoped in this project) is much less quantified.
- **Climate tipping cascade dynamics:** The probability of reaching 4°C is estimable, but the population mortality from cascading tipping points is the least-modeled aspect of any scenario in this project.
- **Temporal trends:** Most probability estimates are point-in-time. How nuclear war risk changes year-to-year with geopolitical shifts, or how pandemic risk changes as biotech advances, is difficult to formalize.

## Sources

- Barrett, A.M., Baum, S.D., & Hostetler, K. (2013). "Analyzing and Reducing the Risks of Inadvertent Nuclear War Between the United States and Russia." *Science & Global Security*, 21(2). https://sethbaum.com/ac/2013_NuclearWar.html
- Baum, S.D., de Neufville, R., & Barrett, A.M. (2018). "A Model for the Probability of Nuclear War." *SSRN*. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3137081
- Climate Action Tracker (2025). "Global Update: Little change in warming outlook." https://climateactiontracker.org/publications/warming-projections-global-update-2025/
- Gaupp, F., et al. (2020). "Changing risks of simultaneous global breadbasket failure." *Nature Climate Change*, 10, 54–57. https://www.nature.com/articles/s41558-019-0600-z
- Hellman, M. "Nuclear War: Inevitable or Preventable?" Stanford University. https://ee.stanford.edu/~hellman/opinion/inevitability.html
- IPCC (2021). AR6 Working Group I: Summary for Policymakers. https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/
- Kemp, L., et al. (2022). "Climate Endgame: Exploring catastrophic climate change scenarios." *PNAS*, 119(34). https://www.pnas.org/doi/10.1073/pnas.2108146119
- Lenton, T.M., et al. (2019). "Climate tipping points — too risky to bet against." *Nature*, 575, 592–595.
- Love, J.J. (2013). "On the insignificance of Herschel's sunspot correlation." *Geophysical Research Letters*.
- NASA CNEOS. Sentry: Earth Impact Monitoring. https://cneos.jpl.nasa.gov/sentry/
- Newhall, C., et al. (2018). "Anticipating future VEI 7 eruptions and their chilling impacts." *Geosphere*, 14(2), 572–603. https://pubs.geoscienceworld.org/gsa/geosphere/article/14/2/572/529016/
- Ord, T. (2020). *The Precipice: Existential Risk and the Future of Humanity*. Hachette Books.
- Ord, T. (2024). "The Precipice Revisited." EA Global Bay Area 2024. https://www.tobyord.com/writing/the-precipice-revisited
- Riley, P. (2012). "On the probability of occurrence of extreme space weather events." *Space Weather*, 10(2). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2011sw000734
- Rodriguez, L. (80,000 Hours). Nuclear war probability estimates. https://80000hours.org/problem-profiles/nuclear-security/
- USGS. "Is Yellowstone overdue for an eruption?" https://www.usgs.gov/faqs/yellowstone-overdue-eruption-when-will-yellowstone-erupt
- USGS. "Questions About Supervolcanoes." https://www.usgs.gov/volcanoes/yellowstone/questions-about-supervolcanoes

<!-- COMPLETE -->
