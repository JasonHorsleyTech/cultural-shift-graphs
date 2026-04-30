# Result: Nuclear War — Secondary EMP Effects

## Summary

In a full US-Russia nuclear exchange, EMP is largely **redundant** with other effects for long-term mortality modeling. High-altitude detonations blanket the continent with electromagnetic pulse that accelerates grid collapse in areas between blast zones, but those areas face nuclear winter famine regardless. EMP's primary impact is on the *speed* of infrastructure failure (immediate vs. days/weeks), not on the 1–10 year survival curve. The scientific community is sharply divided on EMP severity — the Congressional EMP Commission paints a catastrophic picture while the 2019 EPRI study found much more limited grid damage — but for this project's purposes, the distinction matters less because the grid collapses either way under nuclear winter conditions.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| emp_coverage_single_burst_altitude_400km | 100 | 95 | 100 | pct_continental_us | instant | EMP Commission 2008 | high |
| transformers_at_risk_e3_thermal | 8 | 3 | 14 | transformers | instant | EPRI 2019 | medium |
| vehicle_permanent_disablement | 2 | 1 | 5 | pct | instant | EMP Commission 2004 | low |
| vehicle_temporary_stall | 15 | 10 | 25 | pct | instant | EMP Commission 2004 | low |
| grid_survival_pct_post_emp_only | 60 | 30 | 85 | pct | day_0 | EPRI 2019 vs EMP Commission 2008 | low |
| grid_survival_pct_post_blast_plus_emp | 15 | 5 | 30 | pct | day_0 | composite estimate | low |
| hf_radio_disruption_duration | 12 | 3 | 36 | months | post_event | Starfish Prime extrapolation | low |
| transformer_replacement_lead_time | 18 | 12 | 24 | months | per_unit | utility industry data | high |
| additional_mortality_from_emp | 2 | 0.5 | 5 | pct | year_1 | derived estimate | low |
| russian_super_emp_field_strength | 100000 | 100000 | 200000 | volts_per_meter | instant | DTIC Russian sources | low |
| us_military_hardening_standard | 50000 | 50000 | 50000 | volts_per_meter | standard | MIL-STD-188-125 | high |

## Analysis

### 1. EMP from nuclear war vs. dedicated EMP attack

A single nuclear weapon detonated at ~400–500 km altitude produces EMP covering the entire continental United States plus parts of Canada and Mexico (EMP Commission 2008). The EMP has three components:

- **E1 (nanoseconds):** Fast electromagnetic pulse that damages unshielded solid-state electronics — SCADA systems, control circuits, microprocessors. Most damaging to electronics.
- **E2 (microseconds to milliseconds):** Similar to lightning. Most grid equipment already hardened against this. Least concerning component.
- **E3 (seconds to minutes):** Slow pulse from magnetic field distortion. Induces currents in long conductors (power lines, pipelines). Threatens transformers via thermal damage. Analogous to geomagnetic storm effects.

In a full exchange (~4,400 warheads per the project scenario), EMP is both a byproduct of surface/air bursts over targets AND potentially a deliberate tactic. Russia reportedly possesses "Super-EMP" weapons — low-yield warheads optimized for gamma output generating fields of 100,000+ V/m, exceeding the US military hardening standard of 50,000 V/m (DTIC). A few dedicated high-altitude bursts early in an exchange could serve as a force multiplier by disrupting command, control, and communications before the main strikes land.

**Areas escaping both blast and EMP:** Essentially none. Even areas far from blast zones (rural Midwest, northern Maine, etc.) would be within the EMP footprint. The distinction is that EMP damage is to electronics and grid infrastructure, not to structures or people directly.

### 2. Grid damage: The great disagreement

The two most significant studies reach very different conclusions:

**EMP Commission (2004/2008/2017) — pessimistic:**
- Concluded that EMP could black out the national grid for "months or years"
- Testified that societal collapse could kill "9 of 10 Americans"
- Based on Cold War-era testing data and expert judgment
- Criticized for relying on testimony rather than peer-reviewed modeling

**EPRI (2019) — more optimistic:**
- Three-year study with 60+ utilities, DTRA, DOE, and three national labs
- Found E3 thermal damage risk limited to 3–14 transformers (not hundreds or thousands)
- E2 comparable to lightning — existing hardening largely sufficient
- E1 damages electronics but grid hardware is relatively robust
- Concluded widespread transformer failure "unlikely"

**Key context for this project:** This disagreement matters enormously for a standalone EMP/grid-collapse scenario (ticket 019–023) but matters much less for the nuclear war scenario. In a full exchange:
- Blast directly destroys power plants, substations, and fuel infrastructure in targeted areas
- Personnel who operate and repair the grid are killed or displaced
- Fuel supply chains (coal, natural gas, diesel for backup generators) are disrupted
- Nuclear winter eliminates the economic and social basis for grid restoration

The grid fails regardless. EMP accelerates the timeline from "days to weeks of degrading service" to "immediate blackout" in areas between blast zones.

### 3. Vehicle and transportation effects

The EMP Commission (2004) tested 50 vehicles from 1987–2002:
- ~2% permanently disabled (would not restart)
- ~15% experienced temporary stall or dashboard malfunctions at 25+ kV/m but restarted
- ~83% showed no significant effects

**Critical caveats:**
- Vehicles tested were pre-2002. Modern vehicles have far more complex electronic systems (ECUs, drive-by-wire, integrated infotainment). No equivalent testing exists for post-2010 vehicles.
- Testing was done at field strengths up to 50 kV/m. Russian Super-EMP weapons may produce 100,000+ V/m.
- Even if vehicles survive EMP, the fuel supply chain is grid-dependent. Gas station pumps require electricity. Refineries require grid power. Pipelines require electronic control systems. Within weeks, functional vehicles become paperweights without fuel.

For the nuclear war scenario: vehicle EMP damage is a footnote. Fuel supply collapse from blast destruction + grid failure + nuclear winter would immobilize transportation regardless.

### 4. Communication systems

**Destroyed by EMP:**
- Cell towers (electronics vulnerable to E1)
- Internet infrastructure (routers, switches, fiber-optic terminal equipment)
- Most satellite ground stations
- Civilian broadcast (TV, FM radio)

**Disrupted for months to years:**
- HF (shortwave) radio — ionospheric disruption from high-altitude bursts. Starfish Prime (1.4 MT at 400 km, 1962) disrupted HF across the Pacific for hours to days. A full exchange with multiple high-altitude bursts would cause far worse ionospheric damage, potentially rendering HF unusable for months to years.

**Likely survivors:**
- Military VLF/ELF (designed for nuclear command and control, hardened and uses ground-wave propagation)
- Battery-powered VHF/UHF amateur radio with rubber-duck antennas (ARRL testing found these immune to EMP damage)
- Hardened military communications systems (MIL-STD-188-125 rated)
- Simple AM/FM receivers if not connected to external antennas during pulse

Loss of communication compounds every other survival problem: no coordination of evacuation, no weather information, no ability to organize food distribution or medical care. This is a genuine force multiplier for mortality in the weeks following the exchange, though it's difficult to quantify separately.

### 5. Relevance to the nuclear war mortality curve

**Bottom line: EMP is largely redundant for long-term mortality modeling, but matters for the first 1–4 weeks.**

The mortality curve for full nuclear war is dominated by:
1. Immediate blast/thermal deaths (hours 0–1): ~27% of population
2. Acute radiation syndrome (days 1–30): additional ~3–8%
3. Fallout exposure in unprotected populations (weeks 1–8): additional ~5–15%
4. Nuclear winter famine (months 3–36): the big killer, potentially 30–60% additional

EMP's incremental contribution:
- **Week 1:** Matters significantly. Areas 50–200 miles from blast zones that might otherwise have functioning hospitals, water treatment, and communication lose them immediately instead of gradually. This accelerates mortality from medical dependency (insulin, dialysis — see ticket 001) by eliminating the grace period.
- **Month 1–6:** Diminishing relevance. Grid was going to fail anyway from fuel supply disruption and personnel loss. EMP just removed the brief window of partial function.
- **Year 1+:** Irrelevant. Nuclear winter famine dominates. Whether the grid died on day 0 (EMP) or day 14 (cascade failure) makes no difference to the year-5 survival number.

**Estimated additional mortality attributable specifically to EMP:** 0.5–5% of population (1.7–16.8M people), primarily from accelerated medical dependency deaths and loss of the coordination window in the first weeks. Central estimate: ~2% (~6.7M). This is significant in absolute terms but small relative to the 60–90% total mortality from the full nuclear war scenario.

## Data Gaps

- **No testing of modern vehicles (post-2010):** The 2004 EMP Commission tests used 1987–2002 vehicles. Modern vehicles with extensive ECU networks, CAN bus systems, and drive-by-wire are untested. The 2%/15% figures may significantly underestimate damage to current vehicles.
- **EMP Commission vs. EPRI disagreement is unresolved:** These represent the two poles of the debate. The EMP Commission's work is expert testimony with limited peer review; EPRI's study is industry-funded and may have incentives to minimize findings. Neither is definitively authoritative.
- **Compound effects unmodeled:** No study models EMP occurring simultaneously with blast, fallout, and nuclear winter. Each is studied in isolation. The compound effect on human survival (e.g., EMP removes hospital power → fallout patients can't be treated → mortality from moderate radiation exposure increases) is not quantified.
- **Russian Super-EMP capabilities are uncertain:** Claims of 100,000+ V/m field strengths from Russian sources are not independently verified. If true, they would exceed US hardening standards and worsen all EMP effects substantially.
- **Ionospheric recovery time from multiple high-altitude bursts is poorly understood.** Starfish Prime was a single burst. A full exchange might include dozens of high-altitude detonations, and cumulative ionospheric effects are not well-modeled.

## Sources

- Congressional EMP Commission. (2004). *Executive Report: Report of the Commission to Assess the Threat to the United States from Electromagnetic Pulse Attack.* https://www.empcommission.org/docs/empc_exec_rpt.pdf
- Congressional EMP Commission. (2008). *Critical National Infrastructures Report.* https://www.empcommission.org/docs/A2473-EMP_Commission-7MB.pdf
- Congressional EMP Commission. (2017/2018). *Executive Report on Assessing the Threat from EMP — Final April 2018.* http://www.firstempcommission.org/uploads/1/1/9/5/119571849/executive_report_on_assessing_the_threat_from_emp_-_final_april2018.pdf
- EPRI. (2019). *High-Altitude Electromagnetic Pulse and the Bulk Power System — Potential Impacts and Mitigation Strategies.* Summarized at https://www.publicpower.org/periodical/article/epri-releases-findings-study-high-altitude-emp-attack
- Pence, S. & Reynolds, A. (2025). *High-Altitude Nuclear Explosions: Myths and Reality.* CSIS. https://www.csis.org/analysis/high-altitude-nuclear-explosions-myths-and-reality
- Atherton, K. D. (2020). "Electromagnetic Pulses Are the Last Thing You Need to Worry About in a Nuclear Explosion." *Foreign Policy.* https://foreignpolicy.com/2020/07/21/electromagnetic-pulses-emp-weapons-nuclear-explosion/
- Practical Engineering. (2022). "How Would a Nuclear EMP Affect the Power Grid?" https://practical.engineering/blog/2022/11/7/how-would-a-nuclear-emp-affect-the-power-grid
- DTIC. *Russia: EMP Threat.* https://apps.dtic.mil/sti/pdfs/AD1124730.pdf
- Idaho National Laboratory. (2015). *Strategies, Protections, and Mitigations for the Electric Grid from EMP.* https://inldigitallibrary.inl.gov/sites/STI/STI/INL-EXT-15-35582.pdf
- Princeton SGS. *Plan A Nuclear War Simulation.* https://sgs.princeton.edu/the-lab/plan-a

<!-- COMPLETE -->
