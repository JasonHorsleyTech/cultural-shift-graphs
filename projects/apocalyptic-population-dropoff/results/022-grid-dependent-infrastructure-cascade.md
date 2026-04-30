# Result: Grid-Dependent Infrastructure — Cascade Failure Timeline

## Summary

A prolonged, nationwide grid collapse triggers a predictable cascade of infrastructure failures over hours to weeks. Communications degrade within hours, water and sewage fail within 1–3 days, the fuel supply chain halts within days, healthcare collapses within a week, and the entire food cold chain is lost within the first week. The NIAC (2018) concluded that existing national plans are "outmatched" by a catastrophic prolonged outage, and the cascade effects create compounding mortality drivers — loss of water leads to disease, loss of fuel prevents resupply, loss of communications prevents coordination. Seasonal timing matters enormously: a winter grid failure is far more lethal due to heating loss, as demonstrated by Texas Winter Storm Uri (2021, 246–702 deaths in just days of partial outage).

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| cell_tower_battery_backup | 8 | 4 | 24 | hours | immediate | FCC / carrier data | high |
| cell_towers_with_adequate_backup_pct | 30 | 20 | 40 | pct | current | FCC reports | medium |
| cell_tower_generator_fuel_onsite | 48 | 24 | 72 | hours | post-battery | carrier data | medium |
| total_communication_loss | 72 | 24 | 168 | hours | post-event | NIAC 2018 | medium |
| water_system_pump_dependent_pct | 95 | 90 | 98 | pct | current | EPA / AWWA | high |
| water_system_backup_generator_fuel | 48 | 24 | 72 | hours | post-event | EPA 2019 Power Resilience Guide | medium |
| water_pressure_loss_timeline | 48 | 24 | 72 | hours | post-event | NIAC 2018 / EPA | high |
| nyc_gravity_fed_pct | 95 | 93 | 97 | pct | current | NYC DEP | high |
| sewage_lift_station_overflow | 6 | 1 | 24 | hours | post-event | AWWA / municipal data | medium |
| sewage_sso_from_power_failure_pct | 10 | 8 | 15 | pct | current | EPA SSO data | medium |
| natural_gas_electric_compressor_pct | 10 | 8 | 15 | pct | current | Carnegie Mellon 2023 | high |
| natural_gas_regional_failure | 72 | 48 | 168 | hours | post-event | INGAA / EIA | medium |
| refinery_shutdown_immediate | 1 | 1 | 6 | hours | post-event | EIA | high |
| gas_stations_with_backup_pct | 5 | 3 | 10 | pct | current | GovTech / state surveys | medium |
| fuel_production_halt | 1 | 1 | 6 | hours | post-event | EIA | high |
| existing_fuel_in_tanks_duration | 336 | 168 | 504 | hours | post-event | EIA / industry estimates | low |
| spr_crude_reserves_million_barrels | 372 | 370 | 375 | million_barrels | current (2026) | DOE | high |
| spr_requires_grid_for_pumping | 1 | 1 | 1 | boolean | current | DOE SPR operations | medium |
| hospital_generator_fuel_nfpa_requirement | 96 | 96 | 96 | hours | post-event | NFPA 110 | high |
| hospital_actual_fuel_supply | 96 | 48 | 336 | hours | post-event | NFPA / Joint Commission | medium |
| hospital_natural_gas_backup_pct | 30 | 20 | 40 | pct | current | AHA / FEMA | low |
| refrigerator_food_unsafe | 4 | 3 | 6 | hours | post-event | CDC / USDA | high |
| freezer_food_loss | 48 | 24 | 72 | hours | post-event | CDC / USDA | high |
| cold_chain_warehouse_backup | 24 | 8 | 72 | hours | post-event | industry estimates | medium |
| total_perishable_food_loss | 168 | 120 | 240 | hours | post-event | NIAC 2018 / USDA | medium |
| pop_dependent_on_grid_heating_pct | 60 | 50 | 70 | pct | winter | EIA RECS | medium |
| texas_uri_deaths | 246 | 246 | 702 | people | Feb 2021 (days) | TX DSHS / BuzzFeed | high |
| texas_uri_water_boil_notices | 322 | 300 | 350 | notices | Feb 2021 | EPA Region 6 | high |
| puerto_rico_maria_full_restore_days | 328 | 180 | 365 | days | 2017-2018 | NREL / FEMA | high |
| puerto_rico_maria_deaths | 2975 | 2658 | 3290 | people | 2017-2018 | GW Milken SPH study | high |
| emp_commission_mortality_estimate_pct | 90 | 66 | 90 | pct | year 1 | EMP Commission 2008 | low |

## Cascade Failure Timeline

The following table shows the ordered sequence of infrastructure failures after a permanent, nationwide grid collapse. Time is measured from grid-down.

| time_hours | system | failure_description | population_affected_pct | mortality_mechanism | source |
|---|---|---|---|---|---|
| 0 | grid | Total electrical power loss nationwide | 100 | Immediate loss of lighting, HVAC, all electrically-powered systems | NIAC 2018 |
| 4 | communications | Cell towers begin failing as batteries deplete; ~70% of towers have no adequate backup | 70 | Loss of 911, coordination, information; panic | FCC / NIAC 2018 |
| 4 | food_cold_chain | Home refrigerators reach unsafe temperatures; perishable food begins spoiling | 100 | Food safety risk begins; grocery store cold cases fail | CDC / USDA |
| 6 | sewage | Lift stations without backup overflow; sewage begins backing up in low-lying urban areas | 30 | Waterborne disease exposure; environmental contamination | EPA / AWWA |
| 8 | communications | Most cell towers offline; only generator-backed sites remain (~30%) | 70 | Near-total communication blackout for most population | FCC |
| 24 | water | Elevated storage tanks depleted in systems without backup; pressure dropping across most systems | 50 | Contamination risk from depressurized pipes; rationing begins | EPA 2019 |
| 48 | water | Municipal water systems fail across ~95% of service areas as backup generators exhaust fuel | 95 | No potable water for most Americans; dehydration timeline begins (3 days) | NIAC 2018 / EPA |
| 48 | food_cold_chain | Freezer food in homes and warehouses reaches unsafe temperatures | 100 | Massive perishable food loss; remaining safe food is shelf-stable only | CDC / USDA |
| 72 | communications | Nearly all cell towers offline; only hardened military/government comms remain | 95 | Total communication blackout for civilians | NIAC 2018 |
| 72 | natural_gas | Regional gas distribution begins failing as electric compressor stations exhaust backup fuel | 30 | Loss of gas heating (critical in winter), gas cooking, gas water heaters | Carnegie Mellon 2023 / EIA |
| 96 | healthcare | Hospital generators begin running out of fuel (NFPA 96-hour minimum); ICU patients at risk | 80 | Ventilator-dependent patients die; dialysis stops; surgical capability lost; pharmacy cold chain fails | NFPA 110 / NIAC 2018 |
| 168 | fuel | Existing fuel in gas station underground tanks functionally inaccessible (no power to pump, most stations lack backup); refineries halted since hour 1 | 95 | No fuel for generators, vehicles, resupply trucks; remaining generators begin failing | EIA / GovTech |
| 168 | food_cold_chain | All commercial cold chain infrastructure failed; only canned/dry goods remain | 100 | Food supply reduced to ~30-60 days of shelf-stable inventory | NIAC 2018 / USDA |
| 336 | natural_gas | Gas distribution fails across most of the network as compressor stations cannot be refueled | 80 | Winter: mass hypothermia risk for gas-heated homes (~48% of US households) | EIA RECS / Carnegie Mellon 2023 |
| 720 | healthcare | All hospital operations ceased except field-medicine level; pharmaceutical supply exhausted | 99 | Medication-dependent populations (insulin, cardiac, psychiatric) face acute crises | AHA / NIAC 2018 |

## Seasonal Variation

Winter grid failure is dramatically more lethal than summer:

- **Winter:** ~60% of US population depends on grid-powered or gas-powered heating (gas furnaces need electric blowers and thermostats). Indoor temperatures in northern states drop below freezing within 12-24 hours. Hypothermia is the leading cause of death in short-duration grid failures (Texas Uri: ~2/3 of deaths were hypothermia). Frozen pipes cascade into water system failures even faster. The elderly and very young are most vulnerable.

- **Summer:** Heat-related mortality is significant but slower-developing than cold. Air conditioning loss affects ~90% of US households. Heat stroke risk peaks in 48-72 hours for vulnerable populations. However, outdoor survival is more feasible in summer, and water sources (rivers, lakes) are accessible.

- **Net effect:** A winter grid collapse likely produces 2-5x the mortality of an equivalent summer collapse in the first month, primarily from hypothermia and heating-related cascades.

## Real-World Analogues

**Texas Winter Storm Uri (Feb 2021):** Partial grid failure for 4-5 days affecting ~4.5 million households. 246-702 deaths, 322 boil-water notices, cascading gas supply failures. Demonstrates that even *days* of *partial* outage cause significant mortality and infrastructure cascade. The gas-electric interdependency was a key finding: electric pumps in the gas system failed, which reduced gas supply to gas-fired power plants, deepening the grid failure.

**Puerto Rico Hurricane Maria (Sept 2017):** Total grid failure for the island (~3.4M people). Full restoration took nearly a year (328 days). ~2,975 excess deaths over 6 months. Water systems took weeks to partially restore. However, Puerto Rico received massive external aid — a nationwide US grid collapse would have no external rescuer.

**Northeast Blackout 2003:** 55 million people lost power for up to 2 days. 11 deaths directly attributed. Short enough that backup systems held, but demonstrated how quickly cascading failures begin.

## Data Gaps

- **SPR accessibility without grid:** The Strategic Petroleum Reserve requires electric pumps to extract crude from salt caverns. Whether SPR facilities have sufficient backup generation to operate during a total grid collapse is not clearly documented in public sources. Even if accessible, SPR holds crude oil, not refined fuel — refineries would need to be operational to convert it.
- **Exact percentage of water systems with backup generators:** EPA tracks this but comprehensive national statistics are not readily available in public reports. The 95% pump-dependent figure is widely cited but the backup generator coverage varies enormously by municipality.
- **Natural gas local distribution vs. transmission:** The 10% electric compressor figure applies to interstate transmission. Local distribution systems have different (and less well-documented) electric dependencies — gate stations, regulators, and monitoring systems all require power.
- **Gas station fuel accessibility:** Underground fuel tanks could theoretically be accessed with manual or portable pumps, but no systematic assessment exists of how much fuel could be recovered this way at scale.
- **Compounding mortality:** Each infrastructure failure amplifies the others (no water + no sanitation = disease; no fuel + no communication = no resupply coordination), but no integrated model quantifies the compound effect. The NIAC 2018 report acknowledges this gap explicitly.
- **EMP Commission 90% figure:** The widely-cited claim that 90% of Americans would die within a year of prolonged grid collapse originated in congressional testimony (Commissioner Lowell Wood, 2005; Dr. Peter Pry, various hearings) but has no published underlying model or methodology. It is testimony, not peer-reviewed analysis. The range of 66-90% reflects different statements by different commissioners.

## Sources

- NIAC (2018). "Surviving a Catastrophic Power Outage: How to Strengthen the Capabilities of the Nation." President's National Infrastructure Advisory Council. https://www.cisa.gov/sites/default/files/publications/NIAC%20Catastrophic%20Power%20Outage%20Study_FINAL.pdf
- EPA (2019/2023). "Power Resilience: Guide for Water and Wastewater Utilities." EPA 800-R-19-001. https://www.epa.gov/system/files/documents/2023-05/PowerResilienceGuide_2023_508c.pdf
- Guo, Samaras, and Apt (2023). "How vulnerable are US natural gas pipelines to electric outages?" *The Electricity Journal*, 36(2). https://www.sciencedirect.com/science/article/pii/S1040619023000180
- EMP Commission (2004/2008/2017). Reports to Congress on electromagnetic pulse threats. Congressional testimony by Lowell Wood (2005) and Peter Pry (various).
- CDC/USDA. "Food Safety During Power Outage." https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage
- NFPA 110: Standard for Emergency and Standby Power Systems. Requires 96-hour fuel supply for Category 1 (hospital) facilities.
- NREL (2022). "Puerto Rico Grid and Recovery Post Hurricane Maria." NREL/TP-5D00-82860. https://docs.nrel.gov/docs/fy22osti/82860.pdf
- Santos-Burgoa et al. (2018). "Differential and persistent risk of excess mortality from Hurricane Maria in Puerto Rico." George Washington University Milken Institute School of Public Health.
- Texas DSHS / BuzzFeed News (2021). Death toll analysis from Winter Storm Uri. Wikipedia: "2021 Texas power crisis." https://en.wikipedia.org/wiki/2021_Texas_power_crisis
- Springer Nature (2024). "Assessing the household burdens of infrastructure disruptions in Texas during Winter Storm Uri." *Natural Hazards*. https://link.springer.com/article/10.1007/s11069-024-06480-w
- FCC. Cell tower backup power requirements and coverage data. https://huffman.house.gov/media-center/in-the-news/why-cell-phones-failed-in-pgande-outages-and-how-to-prevent-a-repeat
- EIA. Residential Energy Consumption Survey (RECS) — heating fuel type data.
- DOE. Strategic Petroleum Reserve operations. https://www.energy.gov/hgeo/opr/strategic-petroleum-reserve
- Power Magazine (2017). "Expert: 90% of U.S. Population Could Die if a Pulse Event Hits the Power Grid." https://www.powermag.com/expect-death-if-pulse-event-hits-power-grid/
- GovTech. "Back-up Power for Gas Stations." https://www.govtech.com/em/emergency-blogs/disaster-zone/back-up-power-for-gas-stations.html

<!-- COMPLETE -->
