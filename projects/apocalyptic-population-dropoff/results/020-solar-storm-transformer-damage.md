# Result: Carrington-Class Solar Storm — Transformer Damage and Grid Effects

## Summary

A Carrington-class geomagnetic storm would generate geomagnetically induced currents (GICs) capable of damaging or destroying 350+ extra-high-voltage (EHV) transformers across the US grid, triggering cascading collapse affecting 130+ million people. Unlike nuclear EMP, solar storms produce only E3-like slow GIC effects — consumer electronics survive, but the grid goes down for months to years. The probability per decade is debated: Riley (2012) estimated ~12%, but a 2019 Nature study revised this sharply downward to 0.46-1.88%. Grid hardening since the NAS 2008 warning has been minimal despite regulatory frameworks (FERC Order 779, NERC TPL-007).

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| ehv_transformers_total_us | 2000 | 2000 | 2000 | count | current | DOE 2012 | high |
| ehv_transformers_at_risk_1921_scenario | 350 | 300 | 400 | count | event | Metatech/EMP Commission 2008 | medium |
| critical_transformers_for_grid_stability | 30 | 30 | 30 | count | current | FERC | high |
| transformers_loss_causing_coast_to_coast_blackout | 9 | 9 | 9 | count | event | FERC | medium |
| population_affected_1921_scenario | 130000000 | 100000000 | 170000000 | people | event | Metatech/NAS 2008 | medium |
| population_affected_carrington_scenario | 30000000 | 20000000 | 40000000 | people | event | Lloyd's/AER 2013 | medium |
| recovery_time_worst_case | 7 | 4 | 10 | years | post-event | NAS 2008 | medium |
| recovery_time_moderate | 1.5 | 0.04 | 2 | years | post-event | Lloyd's/AER 2013 | medium |
| economic_damage_first_year | 1500000000000 | 600000000000 | 2600000000000 | usd | year 1 | NAS 2008, Lloyd's 2013 | medium |
| transformer_lead_time_normal | 18 | 12 | 24 | months | current | DOE 2012 | high |
| transformer_lead_time_post_covid | 36 | 24 | 48 | months | 2024 | DOE 2024 | high |
| event_probability_per_decade_riley | 12 | 10 | 12 | pct | per decade | Riley 2012 | low |
| event_probability_per_decade_revised | 1.17 | 0.46 | 1.88 | pct | per decade | Schrijver et al. 2019 | medium |
| carrington_dst_estimate | -1760 | -1760 | -900 | nT | 1859 event | Siscoe et al. 2006 | medium |
| july_2012_near_miss_dst | -1200 | -1200 | -1200 | nT | 2012-07-23 | Baker et al. 2013 | high |
| quebec_1989_blackout_duration | 9 | 9 | 9 | hours | 1989-03-13 | Hydro-Quebec | high |
| quebec_1989_material_damage | 13200000 | 13200000 | 13200000 | cad | 1989-03-13 | Hydro-Quebec | high |
| grid_hardening_cost_per_resistor | 70000 | 40000 | 100000 | usd | current | NERC | high |
| grid_hardening_total_estimate | 200000000 | 200000000 | 30000000000 | usd | total | various | low |

## Solar Storm vs. EMP Attack Comparison

| characteristic | solar_storm_carrington | nuclear_emp_attack |
|---|---|---|
| E1 pulse (fast, nanoseconds) | NO | YES — 25-50 kV/m, destroys semiconductors |
| E2 pulse (intermediate) | NO | YES — similar to lightning |
| E3 pulse (slow GIC) | YES — primary threat | YES — also present |
| consumer electronics damaged | NO — phones, cars, radios survive | YES — anything with integrated circuits |
| transformers damaged | YES — overheating from GIC | YES — same E3 mechanism |
| advance warning | YES — 15-60 minutes (NOAA SWPC) to hours/days for CME travel | NO — zero warning |
| geographic pattern | Latitude-dependent, higher latitudes + coastal areas + high-resistivity geology worst | Centered on detonation point, altitude-dependent |
| grid recovery potential | Faster — electronics intact, only grid infrastructure damaged | Slower — backup generators, control systems also destroyed |
| probability | 0.46-12% per decade (debated) | Very low but non-zero, geopolitically dependent |

## Key Differences That Matter for Population Modeling

1. **Electronics survive solar storms.** Cars start, portable generators work, radios function, battery-powered medical devices continue. This is the single most important distinction — it means distributed power generation, communication, and transportation remain possible even during a total grid collapse.

2. **Advance warning exists.** NOAA's Space Weather Prediction Center can provide 15-60 minutes warning of GIC arrival (and days of warning for the CME transit). Utilities can de-energize transformers, open breakers, and reduce load. Whether they actually would in time is debatable, but the option exists.

3. **Geographic selectivity.** Solar storms hit hardest at higher magnetic latitudes, near coastlines, and in areas with high-resistivity geology (like the Canadian Shield). The US Southeast and parts of the Midwest are relatively less vulnerable. The East Coast from Virginia north is the highest-risk corridor.

4. **Recovery is theoretically faster.** Because backup systems, generators, and electronics survive, recovery infrastructure exists. The bottleneck is transformer manufacturing and installation (12-48 months per unit), not rebuilding from scratch.

## Historical Precedents

### The Carrington Event (1859)
- Strongest recorded geomagnetic storm, Dst estimated at -900 to -1760 nT
- Telegraph operators received electric shocks; equipment sparked and caught fire
- Auroras visible as far south as the Caribbean
- Modern infrastructure did not exist — damage was limited to telegraph lines

### March 1989 Quebec Blackout
- Dst approximately -589 nT (roughly 100x weaker than Carrington)
- Hydro-Quebec's entire grid collapsed in 92 seconds
- 6 million people without power for 9 hours
- $13.2M CAD in material damages
- Long transmission lines over high-resistivity Canadian Shield rock amplified GICs
- Prompted first wave of GIC monitoring and protection efforts

### July 2012 Near-Miss
- Carrington-class CME erupted from the sun on July 23, 2012
- Estimated Dst of -1200 nT had it hit Earth
- Missed Earth by approximately 9 days of orbital position
- Daniel Baker (University of Colorado): "In my view the July 2012 storm was in all respects at least as strong as the 1859 Carrington event. The only difference is, it missed."
- Recorded by STEREO-A spacecraft, providing detailed measurements

## Grid Hardening Status

### Regulatory Framework (exists but slow)
- **FERC Order 779 (2013):** Directed NERC to develop GMD reliability standards
- **NERC TPL-007-1 (approved 2016):** Required vulnerability assessments on 5-year cycles
- **NERC TPL-007-4 (approved 2020):** Updated standard with corrective action plan requirements; compliance deadline January 1, 2024

### Actual Progress (minimal)
- Regulatory confusion among FERC, NERC, DOD, DHS, and DOE has slowed implementation
- Low-ohm neutral blocking resistors cost $40,000-$100,000 each — cheap relative to the risk
- Total grid hardening estimates range from $200M (minimal protection) to $30B (comprehensive)
- No strategic transformer reserve program has been fully implemented despite multiple legislative attempts (H.R. 2244)
- DHS developed "RecX" prototype recovery transformers but program scale remains limited
- Transformer supply chain has worsened since COVID: lead times stretched from months to 2-4 years

## Probability Assessment

| study | probability_per_decade | methodology | notes |
|---|---|---|---|
| Riley 2012 (Space Weather) | ~12% | Extrapolation from 50+ years of storm records | Widely cited but potentially too high |
| Schrijver et al. 2019 (Scientific Reports) | 0.46-1.88% (95% CI) | Weibull distribution analysis | ~10x lower than Riley; improved statistical methods |
| General expert consensus | 1-5% | Various | Most experts settle somewhere between the two studies |

The probability debate matters significantly for this project: at 12%/decade, a Carrington event is the most likely of all apocalyptic scenarios. At ~1%/decade, it's still non-trivial but no longer exceptional.

## Data Gaps

- **No real-world analogue for nationwide permanent grid loss.** The 1989 Quebec event lasted 9 hours and affected one region. Puerto Rico 2017 (Hurricane Maria) is the closest analogue for prolonged grid loss but had external aid. No event has tested what happens when the entire US grid goes down simultaneously with no external assistance.
- **The "350 transformers" figure is from 2008 Metatech modeling** for a 1921-level storm, not a Carrington-level storm. A true Carrington repeat could affect more. The number is widely cited but based on a single contractor's model reviewed by Oak Ridge National Laboratory.
- **Grid hardening status is difficult to assess.** NERC compliance data is not publicly detailed enough to determine how many utilities have actually installed GIC blocking devices vs. merely completed vulnerability assessments.
- **Population mortality from prolonged grid loss is not modeled in these studies.** NAS 2008, Lloyd's 2013, and NIAC 2018 all discuss economic impact and affected populations, but none model mortality curves. The EMP Commission's "90% mortality within a year" testimony is not backed by published modeling — it's a qualitative expert estimate.
- **Transformer inventory data is aging.** The ~2,000 EHV transformer figure is from DOE 2012. The 2024 DOE report to Congress notes supply chain strain but does not provide an updated inventory count.
- **The revised probability estimate (0.46-1.88%) has not yet been widely adopted** in risk assessments, which still frequently cite Riley's 12% figure. The methodological debate is ongoing.

## Sources

- National Academy of Sciences (2008). "Severe Space Weather Events—Understanding Societal and Economic Impacts: A Workshop Report." National Academies Press. https://nap.nationalacademies.org/catalog/12507/
- Lloyd's / Atmospheric and Environmental Research (2013). "Solar Storm Risk to the North American Electric Grid." https://assets.lloyds.com/assets/pdf-solar-storm-risk-to-the-north-american-electric-grid/1/pdf-Solar-Storm-Risk-to-the-North-American-Electric-Grid.pdf
- Riley, Pete (2012). "On the probability of occurrence of extreme space weather events." Space Weather, 10(2). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2011sw000734
- Escribano et al. (2019). "Probability estimation of a Carrington-like geomagnetic storm." Scientific Reports, 9(1). https://www.nature.com/articles/s41598-019-38918-8
- Baker, D.N. et al. (2013). "A major solar eruptive event in July 2012." Space Weather, 11(10). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/swe.20097
- U.S. Department of Energy (2012). "Large Power Transformers and the U.S. Electric Grid." https://www.energy.gov/sites/prod/files/Large%20Power%20Transformer%20Study%20-%20June%202012_0.pdf
- U.S. Department of Energy (2024). "Large Power Transformer Resilience Report to Congress." https://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%20signed%20by%20Secretary%20Granholm%20on%207-10-24.pdf
- National Infrastructure Advisory Council (2018). "Surviving a Catastrophic Power Outage." https://www.cisa.gov/sites/default/files/2023-01/NIAC%20Catastrophic%20Power%20Outage%20Study_FINAL.pdf
- EMP Commission / Metatech Corporation (2008). Congressional testimony on transformer vulnerability. https://oversight.house.gov/wp-content/uploads/2015/05/Baker-Statement-5-13-EMP.pdf
- FERC Order 779 (2013). https://www.federalregister.gov/documents/2015/05/26/2015-12466/reliability-standard-for-transmission-system-planned-performance-for-geomagnetic-disturbance-events
- NERC TPL-007-4. "Transmission System Planned Performance for Geomagnetic Disturbance Events." https://www.nerc.com/pa/Stand/Reliability%20Standards/tpl-007-4.PDF
- Hydro-Quebec. "Understanding Electricity: March 1989 Blackout." https://www.hydroquebec.com/learning/notions-de-base/tempete-mars-1989.html
- Said, Chris (2020). "Everything I've learned about solar storm risk and EMP attacks." https://chris-said.io/2020/06/18/everything-ive-learned-about-solar-storm-risk-and-emp-attacks/
- NASA (2014). "Near Miss: The Solar Superstorm of July 2012." https://science.nasa.gov/science-research/planetary-science/23jul_superstorm/
- GAO (2023). "Electricity Grid: DOE Could Better Support Industry Efforts to Ensure Adequate Transformer Reserves." GAO-23-106180. https://www.gao.gov/products/gao-23-106180

<!-- COMPLETE -->
