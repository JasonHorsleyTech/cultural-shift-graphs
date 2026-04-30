# Result: EMP Weapon — Grid Effects and Damage Assessment

## Summary

A high-altitude nuclear EMP (HEMP) attack presents a genuine threat to the US power grid, but the severity is hotly contested between two camps: the Congressional EMP Commission (catastrophic, potentially civilization-ending) and EPRI/industry (regional disruption, recoverable). The crux of the disagreement is transformer damage — the EMP Commission warns of widespread EHV transformer destruction requiring years of recovery, while EPRI's 2019 study found only 3–14 transformers at thermal risk and projected regional rather than nationwide blackout. Both agree the grid goes down; they disagree on how much breaks permanently and how long recovery takes.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| ehv_transformers_us_total | 2100 | 2000 | 2500 | units | current | DOE/INL 2018 testimony | medium |
| ehv_transformers_damaged_pct_epri | 0.5 | 0.1 | 0.7 | pct | event | EPRI 2019 (3-14 of ~2100) | medium |
| ehv_transformers_damaged_pct_emp_commission | 30 | 15 | 50 | pct | event | EMP Commission 2008 | low |
| ehv_transformers_damaged_carrington_analogue | 300 | 200 | 400 | units | event | NAS 2008 | medium |
| e1_digital_relay_damage_nominal_pct | 5 | 3 | 8 | pct | event | EPRI 2019 | medium |
| e1_digital_relay_damage_scaled_pct | 15 | 10 | 20 | pct | event | EPRI 2019 | medium |
| grid_recovery_time_epri | 1 | 0.5 | 2 | years | post-event | EPRI 2019 | medium |
| grid_recovery_time_emp_commission | 5 | 4 | 10 | years | post-event | EMP Commission 2008 | low |
| transformer_lead_time_normal | 120 | 80 | 210 | weeks | current | Wood Mackenzie 2024 | high |
| ehv_transformer_import_dependency_pct | 85 | 80 | 90 | pct | current (345kV+) | DOE 2024 | high |
| vehicle_permanent_damage_pct | 3 | 1 | 10 | pct | event | EMP Commission vehicle tests | medium |
| vehicle_engine_stop_pct | 8 | 5 | 15 | pct | event | EMP Commission vehicle tests | medium |
| vehicle_no_effect_pct | 22 | 15 | 30 | pct | event | EMP Commission vehicle tests | medium |
| multistate_blackout_probability | 45 | 30 | 60 | pct | event (per scenario) | EPRI 2019 (5 of 11 sims) | medium |
| emp_coverage_single_warhead_km_altitude | 400 | 300 | 500 | km | event | EMP Commission 2004 | high |

## EMP Mechanism Breakdown

### E1 (Fast Pulse — nanoseconds)
- Electromagnetic shock wave, arrives first
- Damages unshielded electronics: digital protective relays, SCADA systems, control electronics
- EPRI found 5% of transmission line digital protective relays (DPRs) damaged at nominal E1 field strengths; 15% at scaled (worst-case) E1
- EMP Commission found relay malfunctions at 3–5 kV injected; EPRI found them at 15–80 kV — a 3–16x disagreement on sensitivity thresholds
- Consumer electronics damage depends heavily on whether devices are connected to long conductors (power lines, antennas) that act as collection antennas

### E2 (Intermediate Pulse — microseconds)
- Similar to a lightning strike
- Existing lightning protection on the grid handles most E2 effects
- Least concerning of the three components
- However, E2 arrives after E1, which may have already damaged protective systems — so the grid faces E2 without its normal defenses

### E3 (Slow Pulse — seconds to minutes)
- Induces quasi-DC geomagnetically induced currents (GIC) in long transmission lines
- GIC causes transformer core saturation → extreme internal heating → potential winding melt in as little as 90 seconds
- This is the grid-killing component — similar mechanism to severe geomagnetic storms
- EPRI modeled E3 at ~35 V/km; EMP Commission recommended using 85 V/km as the threat level — a 2.4x disagreement on baseline threat

## The EPRI vs. EMP Commission Dispute

This is the central analytical problem for this ticket. Two credible institutions disagree fundamentally:

**EPRI 2019 (optimistic):**
- 3-year study, funded by 60+ utilities, collaborated with DTRA and DOE national labs
- Found 3–14 transformers at thermal risk from E3 (out of ~2,100 EHV units)
- Concluded regional blackout possible but NOT nationwide grid failure
- Recovery timeline similar to large-scale outages from other causes (weeks to months)
- "Possible damage to large power transformers was found to be minimal"

**EMP Commission 2004/2008/2017 (catastrophic):**
- Congressionally mandated, staffed by defense/nuclear weapons scientists
- Warned of widespread transformer destruction requiring years of recovery
- Chairman Graham testified: "catastrophic consequences... 70–90% of population unsustainable"
- Commissioner Wood (2005): "literally destroy the American nation"

**Why they disagree:**
1. **Detonation assumptions:** EPRI used a 1.4 kT device at 250 miles (~400 km) altitude. Critics argue this is non-optimal — an adversary would use a larger device at lower altitude for maximum E1, or optimize altitude separately for E3. EPRI's E1 peak field was ~65% lower than EMP Commission scenarios; E3 field was ~41% of Commission recommendations.
2. **Scope:** EPRI focused on bulk power transmission only. It excluded generation facilities, distribution systems, and most communications/control systems.
3. **Institutional incentives:** EPRI is funded by utilities (incentive to minimize threat and avoid costly hardening mandates). The EMP Commission had defense/policy motivations (incentive to highlight threat for funding).

## Transformer Replacement Bottleneck

Even in the EPRI scenario, the transformer supply chain is a critical vulnerability:

- **Normal lead times (2024):** 80–210 weeks for large power transformers — and these are peacetime figures with functioning global logistics
- **Import dependency:** 85%+ of EHV transformers (345 kV+) come from overseas manufacturers
- **Domestic steel:** Only one US producer of grain-oriented electrical steel (GOES), the critical magnetic material
- **Supply deficit:** Even without an EMP, the US faces a ~30% supply shortfall for power transformers (Wood Mackenzie 2025)
- **Post-EMP manufacturing:** If an EMP damages the grid, the factories that build replacement transformers also lack power, creating a recovery paradox
- **Strategic reserve:** DOE/ORNL have studied a Strategic Transformer Reserve but no large-scale reserve exists

In a worst-case scenario (EMP Commission estimates of hundreds of damaged transformers), replacement is not a 1–2 year problem — it's a 4–10 year problem, because you cannot build transformers at the rate you lost them, especially without a functioning grid to power the factories.

## Vehicle and Electronics Testing

The EMP Commission tested 37 vehicles (1986–2002 models) under simulated EMP:
- **8 vehicles (22%):** No anomalous response
- **25 vehicles (68%):** Nuisance malfunctions only (blinking dashboard lights, etc.) — self-correcting
- **3 vehicles (8%):** Engines stopped at ~30 kV/m field strength (restarted after)
- **1 vehicle (3%):** Permanent dashboard electronics damage requiring repair

**Caveats:** Testing stopped when anomalies appeared (vehicles were not exposed to full-strength fields). Modern vehicles (2003+) have far more electronics and were not tested. The test sample is small. Results suggest most vehicles would survive but some fraction would be permanently disabled — a significant problem when traffic signals, fuel pumps, and road infrastructure also fail.

## The "90% Within a Year" Claim

**Origin:** Commissioner Lowell Wood, March 8, 2005, Senate Judiciary Subcommittee on Terrorism, Technology, and Homeland Security. EMP Commission Chairman Graham later cited "70–90%" in subsequent testimony.

**The logic chain:**
1. EMP destroys grid → no electricity for months/years
2. No electricity → no water pumping, no refrigeration, no fuel distribution, no transportation
3. No transportation → no food distribution → miss the harvest → mass starvation
4. No water treatment → disease epidemics
5. No medical infrastructure → medication-dependent population dies (see foundation tickets 001–004)
6. Social breakdown → violence accelerates mortality

**Assessment:** This is a **chain of reasoning, not a model**. No one has built a population dynamics simulation that outputs "90%." The number is expert testimony extrapolating from infrastructure dependencies. It assumes:
- Total, nationwide grid failure (contested by EPRI)
- No partial recovery for 1+ year (possible but not certain)
- No organized government response or mutual aid (unlikely — some response would occur)
- No pre-positioned reserves or alternative food sources

The 90% figure is better understood as an upper bound for the absolute worst case (total grid loss, no recovery, no aid) rather than a central estimate. A more defensible range for a severe EMP scenario might be 30–70% mortality within 2 years, with the range depending primarily on whether grid damage is regional (lower) or truly nationwide (higher), and how quickly partial restoration occurs.

## Data Gaps

- **No peer-reviewed population mortality model exists for prolonged grid loss.** The 90% figure is testimony, not simulation output. The actual mortality curve is unknown.
- **EPRI vs. EMP Commission disagreement is unresolved.** Neither has fully addressed the other's criticisms. The true threat level likely falls between their estimates.
- **Modern electronics untested.** The 37-car test used pre-2003 vehicles. No systematic testing of modern vehicles, smart grid components, or renewable energy infrastructure (solar inverters, wind turbine controllers).
- **E1 + E3 compound effect:** EPRI notes E2 arrives after E1 may have damaged lightning protection, but the full compound E1→E2→E3 cascade is not well-modeled.
- **Post-EMP social dynamics:** Whether partial grid regions could maintain order and expand recovery outward, or whether social breakdown would prevent organized recovery, is entirely speculative.
- **Adversary optimization:** An adversary could use multiple devices optimized for different pulse components, or pair EMP with cyber/physical attacks. This is outside EMP Commission modeling.

## Sources

- Congressional EMP Commission. "Report of the Commission to Assess the Threat to the United States from Electromagnetic Pulse (EMP) Attack: Critical National Infrastructures." 2008. https://www.empcommission.org/
- Congressional EMP Commission. "Report of the Commission to Assess the Threat to the United States from Electromagnetic Pulse (EMP) Attack." 2004. https://commdocs.house.gov/committees/security/has204000.000/has204000_0.HTM
- EPRI. "High-Altitude Electromagnetic Pulse and the Bulk Power System — Potential Impacts and Mitigation Strategies." April 2019.
- Horton, R. (EPRI). "High-Altitude Electromagnetic Pulse (HEMP) Research." Testimony before Senate HSGAC, February 2019. https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Horton-2019-02-27.pdf
- National Academy of Sciences. "Severe Space Weather Events — Understanding Societal and Economic Impacts." 2008.
- NIAC. "Surviving a Catastrophic Power Outage." December 2018. https://www.cisa.gov/sites/default/files/publications/NIAC%20Catastrophic%20Power%20Outage%20Study_FINAL.pdf
- Wood, Lowell. Testimony before Senate Judiciary Subcommittee on Terrorism, Technology, and Homeland Security. March 8, 2005.
- Pry, Peter Vincent. "Electromagnetic Pulse Threats to America's Electric Grid: Counterpoints to EPRI Positions." Over The Horizon Journal, August 2019. https://othjournal.com/2019/08/27/electromagnetic-pulse-threats-to-americas-electric-grid-counterpoints-to-electric-power-research-institute-positions/
- Metatech Corporation. "Meta-R-319/320/321/322: Electromagnetic Pulse Effects on the U.S. Power Grid." Prepared for FERC/DOE, 2010. https://www.ferc.gov/sites/default/files/2020-05/ferc_executive_summary.pdf
- DOE. "Large Power Transformer Resilience Report to Congress." July 2024. https://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%20signed%20by%20Secretary%20Granholm%20on%207-10-24.pdf
- Wood Mackenzie. "Power transformers and distribution transformers will face supply deficits." 2024/2025. https://www.woodmac.com/press-releases/power-transformers-and-distribution-transformers-will-face-supply-deficits-of-30-and-10-in-2025/
- CISA. "Electromagnetic Pulse and Geomagnetic Disturbance." https://www.cisa.gov/resources-tools/programs/electromagnetic-pulse-and-geomagnetic-disturbance
- T&D World. "EPRI Research Finds Limited Impact to Transformers from E3 Electromagnetic Pulse." 2019. https://www.tdworld.com/grid-innovations/distribution/article/20969437/epri-research-finds-limited-impact-to-transformers-from-e3-electromagnetic-pulse

<!-- COMPLETE -->
