# Ticket 019: EMP Weapon — Grid Effects and Damage Assessment

## What to research

A dedicated high-altitude nuclear EMP attack (1-3 devices, optimized for EMP rather than blast) designed to collapse the US power grid. What actually breaks, how badly, and how widespread?

## Specific data needed

1. **EMP mechanism and coverage:**
   - A single warhead at 300-400 km altitude covers the entire continental US
   - E1 (fast pulse) vs. E2 (intermediate) vs. E3 (slow pulse) — what does each damage?
   - E1 damages electronics; E3 damages transformers — which matters more for grid collapse?

2. **Transformer vulnerability:**
   - US extra-high-voltage (EHV) transformers: how many? (~2,000)
   - How many would be damaged by E3 pulse? (EMP Commission estimates)
   - Replacement time for EHV transformers: 12-24 months each, manufactured overseas
   - US domestic transformer manufacturing capacity

3. **Grid cascade failure:**
   - How does loss of X% of EHV transformers cascade through the grid?
   - Is partial grid survival possible, or does it cascade to total failure?
   - NERC (North American Electric Reliability Corporation) assessments

4. **Electronics damage:**
   - E1 pulse: what consumer/industrial electronics are destroyed vs. temporarily disrupted?
   - Vehicles: EMP Commission tested 37 cars — most restarted but some had permanent damage. What does the full literature say?
   - Generators: would backup generators survive? (Depends on whether they were running or off)

5. **The "90% within a year" claim:**
   - Congressional EMP Commission testimony (Commissioner Lowell Wood, 2005)
   - What assumptions underlie this number?
   - Has anyone published a rebuttal or alternative estimate?
   - What's the actual range of estimates?

## Where to look

1. **Congressional EMP Commission reports (2004, 2008, 2017)** — primary source
2. **Metatech Corporation — "Meta-R-319/320/321"** — detailed EMP infrastructure studies
3. **EPRI (Electric Power Research Institute)** — transformer vulnerability assessments
4. **Oak Ridge National Laboratory** — GIC (geomagnetically induced current) studies
5. **NERC** — grid reliability assessments
6. **Pry, Peter Vincent** — EMP Commission staff reports (note: Pry is an advocate, not neutral)

## Result format

Key Data Points table:
- `ehv_transformers_damaged_pct` — central estimate with range
- `grid_recovery_time_years` — with and without international aid
- `electronics_permanent_damage_pct`
- `vehicle_disablement_pct`

## What good data looks like

- Treats the EMP Commission as a primary source but notes its advocacy context
- Separates "grid goes down" (well-supported) from "90% die" (contested extrapolation)
- Provides transformer replacement timeline with realistic manufacturing constraints
- Notes that EMP damage to the grid is similar to but potentially worse than a solar storm (connects to ticket 020)
