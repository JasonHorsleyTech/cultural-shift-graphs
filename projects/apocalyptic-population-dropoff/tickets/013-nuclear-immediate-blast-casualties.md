# Ticket 013: Nuclear War — Immediate Blast and Radiation Casualties

## What to research

In a full-scale US-Russia nuclear exchange (~4,400 warheads), how many Americans die in the first 24 hours from blast, thermal radiation, and prompt radiation?

## Specific data needed

1. **Princeton SGS Plan A simulation:**
   - Total US casualties in the first hours (their figure: ~91.5M)
   - Breakdown: killed vs. injured
   - Target list assumptions (counterforce vs. countervalue)
   - Geographic distribution of casualties

2. **FEMA / DTRA targeting models:**
   - Which US cities/bases are targeted?
   - Blast radius overlaps in dense target areas (DC, NYC, military corridors)
   - Rural vs. urban casualty distribution

3. **Time-phased casualties in first 24 hours:**
   - Hour 0: Blast wave, thermal pulse (instant deaths)
   - Hours 1-6: Firestorms, building collapse, acute radiation syndrome in blast periphery
   - Hours 6-24: Fallout begins arriving downwind; initial radiation casualties

4. **Injury burden:**
   - Of the ~90M+ casualties, how many are immediately dead vs. fatally injured?
   - Burn patients, crush injuries, radiation exposure — in a functioning medical system, how many would survive? (Answer: nearly all would die because the medical system IS the target area)

5. **EMP as immediate secondary effect:**
   - A high-altitude nuclear detonation produces continental-scale EMP
   - This is SIMULTANEOUS with blast casualties — the grid goes down everywhere, not just in blast zones
   - Cross-reference with ticket 017 for details, but note here that EMP is part of the nuclear war scenario, not separate

## Where to look

1. **Princeton SGS (Science and Global Security) — Plan A simulation (2019)**
2. **FEMA-196 — "Nuclear Attack Planning Base" (declassified)**
3. **OTA (Office of Technology Assessment) — "The Effects of Nuclear War" (1979)**
4. **Glasstone & Dolan — "Effects of Nuclear Weapons" (standard reference)**
5. **DTRA (Defense Threat Reduction Agency)** — blast and fallout modeling
6. **Kristensen & Korda — Nuclear Notebook** (Federation of American Scientists) for current warhead counts/types

## Result format

**Mortality Timeline** is the primary output for this ticket:

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

Key time points: 0 (detonation), 1, 6, 24 hours.

Also Key Data Points for:
- `total_immediate_deaths` (0-24 hours)
- `total_immediate_injured`
- `cities_destroyed` (count of major metro areas in target zone)
- `infrastructure_destroyed_pct` (hospitals, power plants, water treatment in blast zones)

## What good data looks like

- Princeton Plan A is the anchor — their 91.5M figure should be the central estimate
- OTA 1979 provides an older but well-documented independent estimate for comparison
- Distinguishes between "dead" and "fatally injured but not yet dead" (this matters for the curve shape in the first week)
- Notes that ~100M+ Americans are OUTSIDE blast zones but now face a grid-down scenario with no medical system
