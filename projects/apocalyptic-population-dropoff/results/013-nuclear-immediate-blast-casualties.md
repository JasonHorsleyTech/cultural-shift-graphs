# Result: Nuclear War — Immediate Blast and Radiation Casualties

## Summary

In a full-scale US-Russia nuclear exchange (~4,400 warheads), Princeton's Plan A simulation estimates 91.5 million total casualties (34.1 million killed, 57.4 million injured) within the first few hours from blast and thermal effects alone. The OTA (1979) estimated 70–160 million US dead for a larger-yield exchange targeting 250 cities. Accounting for firestorm effects (which standard blast models undercount by 2–4x), realistic US deaths in the first 24 hours likely fall in the range of 50–110 million (15–33% of 335M), with the medical system effectively destroyed in all major metro areas simultaneously. An EMP from high-altitude detonations would collapse the continental power grid at the same time, meaning the ~200M+ Americans outside blast zones immediately face a grid-down scenario.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| total_immediate_casualties | 91500000 | 70000000 | 160000000 | people | 0-6 hours | Princeton SGS 2019 / OTA 1979 | high |
| total_immediate_killed | 34100000 | 30000000 | 110000000 | people | 0-6 hours | Princeton SGS 2019 / Postol 1986 fire model | medium |
| total_immediate_injured | 57400000 | 30000000 | 60000000 | people | 0-6 hours | Princeton SGS 2019 | medium |
| warheads_in_exchange | 4400 | 3000 | 5000 | warheads | day 0 | Kristensen & Korda 2024 (FAS) | high |
| us_deployed_warheads | 1770 | 1700 | 1800 | warheads | current | Kristensen & Korda 2024 (FAS) | high |
| russian_deployed_warheads | 1584 | 1500 | 1700 | warheads | current | Kristensen & Korda 2024 (FAS) | high |
| cities_targeted | 30 | 25 | 50 | cities | day 0 | Princeton SGS Plan A 2019 | medium |
| warheads_per_city | 7 | 5 | 10 | warheads | day 0 | Princeton SGS Plan A 2019 | medium |
| hospital_beds_destroyed_pct | 60 | 45 | 80 | pct | day 0 | Dallas et al. 2007 / NCBI | medium |
| burn_beds_national | 1500 | 1400 | 1600 | beds | current | ABA 2024 | high |
| burn_patients_generated | 5300000 | 3000000 | 8000000 | people | 0-24 hours | Postol 1986 (NCBI) | medium |
| infrastructure_destroyed_pct | 50 | 35 | 70 | pct | day 0 | OTA 1979 / FEMA | medium |
| emp_grid_collapse_pct | 100 | 90 | 100 | pct | 0-1 hours | EMP Commission 2008 | medium |
| population_outside_blast_zones | 220000000 | 175000000 | 250000000 | people | day 0 | derived from Plan A targeting | low |

## Mortality Timeline

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 0 | 8.0 | 6.0 | 15.0 | blast wave / thermal pulse (instant) | Princeton SGS Plan A 2019 |
| 1 | 10.0 | 8.0 | 20.0 | firestorms / building collapse / prompt radiation | Princeton SGS 2019 / Postol 1986 |
| 6 | 12.0 | 9.0 | 25.0 | firestorm completion / acute radiation (blast periphery) | Princeton SGS 2019 / Glasstone & Dolan 1977 |
| 24 | 15.0 | 10.0 | 33.0 | early fallout arrival / untreated injuries | OTA 1979 / NCBI Medical Implications |

### Timeline notes

**Hour 0 (detonation):** The exchange unfolds in under 5 hours total per Plan A. The tactical phase (~300 Russian + 180 NATO warheads) produces ~2.6M casualties in 3 hours. The strategic counterforce phase (~600 US + comparable Russian warheads targeting each other's silos/bases) adds ~3.4M casualties in 45 minutes. The countervalue phase (5–10 warheads each on 30 most populous cities per side) produces the bulk: ~85.3M casualties. The blast wave and thermal pulse kill instantly within ~2–4 km of each ground zero (12+ psi overpressure zone). For a 1-Mt airburst, virtually everyone within 2.5 km dies; severe casualties extend to ~7 km.

**Hours 0–1:** Firestorms ignite across all targeted metro areas. A single 1-Mt airburst ignites simultaneous fires across ~175 square miles (Postol 1986). The conflagration model predicts 2.5–4x more fatalities than blast-only models — the standard Plan A figure of 34.1M killed likely underestimates deaths because it uses NUKEMAP's overpressure model, not firestorm modeling. With firestorms, immediate deaths could reach 50–110M.

**Hours 1–6:** Firestorms reach peak intensity and consume available oxygen in urban cores. Building collapse traps an unknown number of injured. Prompt radiation (neutron and gamma) kills those in the 1–3 km ring who survived initial blast. Medical system is destroyed: in Hiroshima, 270 of 300 doctors and 1,654 of 1,780 nurses were killed or injured. In a full exchange, hospitals are concentrated in exactly the zones that are targeted. The US has ~1,500 burn beds nationally; there are 3–8 million burn patients. Physician-to-patient ratio drops to ~1:72 (Civil War was 1:19).

**Hours 6–24:** Early fallout begins settling. More than half of total fallout lands within the first 24 hours. Fallout arrives near ground zero within ~1 hour; at 40–45 miles downwind, within ~3 hours. Lethal radiation doses accumulate for unprotected people downwind. This period also sees deaths among the fatally injured (crush injuries, severe burns, acute radiation syndrome) who would normally survive with medical care but cannot access any.

**Critical context — EMP:** One or more high-altitude detonations (200+ miles up) produce continental-scale EMP simultaneously with the blast exchange. Two to three such detonations blanket the entire continental US. The power grid goes down everywhere — not just in blast zones. This means the ~200M+ Americans outside direct blast zones immediately face total grid failure: no power, no communications, no water treatment, no fuel pumps. This is simultaneous with, not subsequent to, the blast casualties.

## Data Gaps

- **Firestorm vs. overpressure disagreement:** The Plan A figure of 34.1M killed uses NUKEMAP's overpressure model. Postol (1986) and other fire-effects researchers argue this underestimates deaths by 2–4x because it doesn't model urban firestorms. The "true" immediate death count could be anywhere from 34M to 110M. This is the single largest uncertainty in the first 24 hours.
- **Hour-by-hour breakdown is synthetic.** No model provides hour-by-hour US casualties for a full exchange. Plan A gives total casualties across all phases (~5 hours). The OTA gives scenario-level totals. The hourly breakdown above is constructed from phase timings and cause-of-death sequencing, not from a single authoritative time-series model.
- **Injury survival rates without medical care.** Of the 57.4M injured in Plan A, what fraction die within 24 hours without treatment? Postol estimates 46% of severely injured die within 20 days even with care; without care, the figure is likely 70–90% within the first week. But this is extrapolation from conventional-warfare triage data scaled to nuclear scenarios.
- **Rural vs. urban distribution.** Plan A targets the 30 most populous cities with 5–10 warheads each. Counterforce targets (ICBM fields in MT, WY, NE, ND) are rural. The geographic distribution of casualties is heavily urban, but fallout plumes from silo strikes affect large rural areas. No single source provides a clean urban/rural split.
- **Exact number of cities effectively destroyed.** Plan A explicitly targets 30 cities. OTA modeled 250 cities. The actual number depends on targeting doctrine, which is classified. 30 is a floor; the real number is likely higher given military bases and industrial targets in secondary cities.

## Sources

- Princeton Science & Global Security, "Plan A" nuclear war simulation (2019). https://sgs.princeton.edu/the-lab/plan-a — Central estimate of 91.5M casualties (34.1M dead, 57.4M injured) in first few hours. Uses NUKEMAP casualty modeling and current US/Russian force postures.
- Office of Technology Assessment, "The Effects of Nuclear War" (1979). https://ota.fas.org/reports/7906.pdf — 70M–160M US dead for full-scale exchange (7,800 Mt across 250 cities). Older but independent estimate.
- Postol, T.A., "Possible Fatalities from Superfires Following Nuclear Attacks in or Near Urban Areas," in *The Medical Implications of Nuclear War* (1986). https://www.ncbi.nlm.nih.gov/books/NBK219184/ — Fire-inclusive models predict 36–56M dead from 100 1-Mt airbursts on cities (vs. 14–15M blast-only). Scaling factor of 2.5–4x.
- Haaland, C.M. et al., "Casualties Due to the Blast, Heat, and Radioactive Fallout from Various Hypothetical Nuclear Attacks on the United States," in *The Medical Implications of Nuclear War* (1986). https://www.ncbi.nlm.nih.gov/books/NBK219165/ — Counterforce attack: 13–34M dead; countervalue attack on 100 cities: up to 56M dead with fire effects.
- National Security Archive, "Long-Classified U.S. Estimates of Nuclear War Casualties During the Cold War" (2022). https://nsarchive.gwu.edu/briefing-book/nuclear-vault/2022-07-14/long-classified-us-estimates-nuclear-war-casualties-during — Historical range of US government estimates: 50M dead (1958 NESC) to 134M dead (1963 NESC, 1968 scenario).
- Kristensen, H.M. & Korda, M., "Nuclear Notebook" (2024), Federation of American Scientists. https://fas.org/publication/nuclear-weapons-2024/ — US: ~3,708 stockpile, ~1,770 deployed. Russia: ~4,380 stockpile.
- Rethink Priorities, "How many people would be killed as a direct result of a US-Russia nuclear exchange?" (2022). https://rethinkpriorities.org/research-area/how-many-people-would-be-killed-as-a-direct-result-of-a-us-russia-nuclear-exchange/ — Expert survey estimate: 51M dead (90% CI: 30–75M) including counterforce and weighted countervalue probability.
- Dallas, C.E. et al., "Vulnerability of populations and the urban health care systems to nuclear weapon attack" (2007). https://pmc.ncbi.nlm.nih.gov/articles/PMC1828719/ — Hospital destruction in targeted cities; healthcare system collapse data.
- Glasstone, S. & Dolan, P.J., *The Effects of Nuclear Weapons*, 3rd ed. (1977). https://www.atomicarchive.com/resources/documents/effects/glasstone-dolan.html — Standard reference for blast radii, thermal effects, and radiation doses by distance and yield.
- EMP Commission Reports (2004/2008/2017). https://www.govinfo.gov/content/pkg/CHRG-112hhrg80856/html/CHRG-112hhrg80856.htm — Continental-scale EMP from high-altitude detonation; 2–3 bursts blanket entire US; grid collapse expected.
- Leaning, J. & Langmuir, A., "Burn and Blast Casualties: Triage in Nuclear War," in *The Medical Implications of Nuclear War* (1986). https://www.ncbi.nlm.nih.gov/books/NBK219175/ — 1:72 physician-to-patient ratio; 46% mortality at 20 days even with triage.

<!-- COMPLETE -->
