# Ticket 022: Grid-Dependent Infrastructure — Cascade Failure Timeline

## What to research

When the power grid goes down permanently, everything else follows. Map the cascade: what fails when, and what does each failure mean for survival.

## Specific cascade to document

For each infrastructure system, determine: how long it operates without grid power, what backup exists, and what happens when it fails.

1. **Water treatment and distribution:**
   - Municipal water systems: how many are pump-dependent? (Almost all)
   - Backup generator fuel supply: hours? Days?
   - When water stops: timeline to unsafe tap water (bacterial growth in stagnant pipes)
   - Gravity-fed systems: which cities have these? (NYC has some, most cities don't)

2. **Sewage and wastewater:**
   - Lift stations require power
   - Timeline to sewage backup in urban areas
   - Consequences: disease (see ticket 008), environmental contamination

3. **Natural gas:**
   - Gas distribution requires electric compressor stations
   - Does gas stop flowing when power goes out?
   - Impact on heating (winter collapse is worse than summer)

4. **Fuel supply chain:**
   - Refineries: all grid-dependent
   - Pipeline pumps: all electric
   - Gas stations: electric pumps (most have no backup)
   - Timeline: existing fuel in underground tanks is accessible with manual pumps, but refineries stop producing immediately
   - Strategic Petroleum Reserve: accessible without grid?

5. **Communication:**
   - Cell towers: 8-hour battery backup typical
   - Internet: backbone has generator backup but nodes don't
   - Radio: AM/FM stations — some have generator backup
   - Timeline to total communication loss

6. **Healthcare:**
   - Hospitals: backup generators with 3-7 days of fuel typically
   - When generators run out: ICU patients die, surgeries stop, pharmacies go dark
   - Rural hospitals vs. urban: different backup capacity

7. **Food cold chain:**
   - Refrigerated warehouses: backup generators for hours to days
   - Home refrigerators: food unsafe in 4-6 hours without power
   - Freezer food: 24-48 hours
   - Total perishable food loss within 1 week

## Where to look

1. **NIAC (2018) — "Surviving a Catastrophic Power Outage"** — maps this cascade in detail
2. **AWWA (American Water Works Association)** — water system power dependency
3. **DHS / CISA** — critical infrastructure interdependency studies
4. **EIA (Energy Information Administration)** — fuel supply chain data
5. **FEMA** — hospital preparedness assessments
6. **FCC** — communication infrastructure resilience

## Result format

Key Data Points table with one row per infrastructure system:
- `system`: water, sewage, gas, fuel, communications, healthcare, cold_chain
- `time_to_failure_hours`: hours without grid before system fails
- `backup_duration_hours`: typical backup capacity
- `population_affected_pct`: % of US population dependent on this system
- `mortality_consequence`: what happens when this fails (qualitative + mortality estimate where possible)

## What good data looks like

- NIAC 2018 provides the cascade timeline — this ticket largely systematizes their findings
- Specific numbers for backup duration (not "a few days" but "72 hours median, 168 hours for hospitals with extended fuel contracts")
- The cascade has a clear order: communications fail in hours, water in days, food chain in days, fuel in weeks
- Notes seasonal variation: winter grid failure is far more lethal (heating) than summer (though summer has cooling)
