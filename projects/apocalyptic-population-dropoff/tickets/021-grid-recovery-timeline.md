# Ticket 021: Grid Recovery Timeline — Transformer Replacement and Prioritized Restoration

## What to research

If the US grid goes down from EMP or solar storm, how long does it actually take to bring it back? This is the key variable that separates "bad year" from "civilization ends."

## Specific data needed

1. **EHV transformer manufacturing:**
   - Where are EHV transformers made? (Almost entirely overseas: South Korea, Germany, Japan, China)
   - US domestic manufacturing capacity: how many per year?
   - Typical lead time for a custom EHV transformer: 12-24 months under normal conditions
   - If 300-2000 transformers need replacement simultaneously, what's the queue?

2. **EPRI / DHS RecX (Recovery Transformer) program:**
   - Modular replacement transformers designed for rapid deployment
   - How many exist? Where are they stored?
   - Can they substitute for destroyed EHV units? At what capacity?

3. **Prioritized restoration:**
   - NERC/FERC restoration plans: what gets power first?
   - Could a partial grid (say, 10-20% capacity) be restored in months?
   - Black start capability: which plants can restart without grid power?
   - Geographic prioritization: which regions first?

4. **The chicken-and-egg problem:**
   - Manufacturing transformers requires electricity, factories, supply chains
   - If the grid is down globally (solar storm hits the whole hemisphere), who manufactures replacements?
   - If only the US grid is down (EMP), international manufacturing could help — but shipping requires functioning ports
   - Time to first partial restoration vs. time to full restoration

5. **Historical grid recovery analogues:**
   - Puerto Rico 2017: Category 5 hurricane destroyed most of the grid. Recovery timeline?
   - Northeast blackout 2003: how fast was restoration? (This was NOT equipment destruction, just cascade failure)
   - Iraq post-2003: grid destruction and reconstruction timeline

6. **Impact of recovery time on mortality:**
   - Grid down for 1 month vs. 6 months vs. 2 years vs. 5 years — qualitatively different scenarios
   - At what point does "grid down temporarily" become "civilization collapse"? Probably 6-12 months.

## Where to look

1. **EPRI** — transformer vulnerability and RecX program
2. **NERC** — grid restoration plans
3. **DHS / DOE** — critical infrastructure protection plans
4. **NIAC (2018) — "Surviving a Catastrophic Power Outage"** — the key government assessment
5. **IEEE Power & Energy Magazine** — black start and restoration procedures
6. **Puerto Rico grid recovery after-action reports**

## Result format

Key Data Points:
- `partial_grid_restoration_months` — time to 10-20% capacity (range)
- `full_grid_restoration_years` — time to ~80% capacity (range)
- `domestic_transformer_capacity_per_year`
- `ehv_transformers_needed` — for full restoration

Break out estimates for three sub-scenarios:
1. EMP (US only, international manufacturing available)
2. Solar storm (hemisphere-wide, manufacturing capacity also affected)
3. Nuclear war (global, manufacturing + supply chain destroyed)

## What good data looks like

- NIAC 2018 is the most recent comprehensive government assessment — use it as the anchor
- Distinguishes between EMP and solar storm recovery (different damage profiles)
- Notes the chicken-and-egg problem honestly: you can't manufacture replacements without a grid
- Recovery range should be 1-10 years depending on damage severity and international aid availability
