# Ticket 026: Pandemic — Infrastructure Cascade and Secondary Mortality

## What to research

A pandemic with 30-50% CFR doesn't just kill through disease — it kills essential workers, collapses supply chains, and triggers the same infrastructure failures as a grid-down event. When does a pandemic BECOME a grid-down scenario?

## Specific data needed

1. **Essential worker mortality:**
   - How many essential workers (power plant operators, water treatment, trucking, farming) exist in the US?
   - At 30-50% CFR, how many die? (Same as general population, roughly)
   - At what point does the loss of essential workers cause infrastructure failure?
   - Is there a critical threshold? (e.g., lose 20% of power plant operators and the grid can't be maintained)

2. **Absenteeism modeling:**
   - Even before death, illness removes workers for weeks
   - Fear/family care causes additional absenteeism
   - DHS pandemic planning assumes 40% peak absenteeism — but that's for a mild pandemic. At 30-50% CFR, absenteeism could be 60-80%

3. **Supply chain collapse timeline:**
   - Trucking: 70% of US freight by weight. What happens when drivers die/refuse to work?
   - Just-in-time logistics: how quickly do stores empty?
   - Fuel delivery: refineries and distribution with depleted workforce

4. **Grid failure from workforce loss:**
   - Power plants require continuous staffing
   - At what absenteeism level does grid maintenance fail?
   - Does the grid fail regionally or nationally?
   - Timeline: pandemic peaks at month 3-6; grid fails at month ___?

5. **The pandemic → grid-down transition:**
   - At what point does the pandemic mortality curve merge with the grid-down mortality curve?
   - Once the grid goes down, the pandemic scenario produces the SAME cascade as tickets 019-022
   - But the starting conditions are different: population is already depleted by 20-40% from disease before grid collapse adds its toll

6. **Historical near-analogues:**
   - 1918 flu: some cities experienced partial infrastructure strain. Philadelphia's dead went uncollected. Garbage piled up.
   - Ebola in West Africa (2014): healthcare collapse in affected regions
   - COVID-19: supply chain disruption with ~1% CFR. Scale up to 30-50% CFR

## Where to look

1. **DHS National Infrastructure Protection Plan** — essential worker categories
2. **BLS** — occupation data for essential services
3. **DHS / CISA** — pandemic preparedness plans
4. **FEMA** — continuity of operations planning
5. **Academic papers on pandemic supply chain disruption**
6. **WHO Ebola response reports** — healthcare collapse in Sierra Leone/Liberia

## Result format

Key Data Points:
- `essential_worker_population`
- `grid_failure_threshold_absenteeism_pct`
- `pandemic_to_grid_failure_months` — time from pandemic onset to infrastructure collapse
- `combined_mortality_1year` — disease + infrastructure collapse

**Mortality Timeline** showing the two-phase mortality: disease deaths (months 1-6) followed by infrastructure-collapse deaths (months 3-12+, overlapping).

## What good data looks like

- Identifies the specific absenteeism/mortality threshold where infrastructure fails
- Shows the pandemic scenario as a TWO-PHASE event: disease kills 30-50%, then infrastructure collapse kills more
- Final 1-year mortality should be higher than just the CFR (disease kills 30-50%, then 20-40% more die from infrastructure collapse)
- Total mortality probably 50-70% — if outside this range, explain
