# Ticket 025: Final Data Compilation and Consistency Check

## Objective

Compile all intervention research results into a single summary table ready for the graph-building phase. This is the last synthesis ticket before moving to the graph phase.

## What to do

1. **Read all result files (004-022)** plus the normalization outputs from tickets 023 and 024.

2. **Compile the master data table:**
   For each intervention that made the cut (including any borderline interventions that passed assessment), extract the "Data for Graph" table values and compile into a single summary:

   | id | name | category | annualCostLow | annualCostMid | annualCostHigh | qalyLow | qalyMid | qalyHigh | evidenceTier | weeklyHours | timeCategory | activationEnergy | adherenceRate |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|---|

3. **Apply normalization adjustments:**
   - Incorporate any QALY adjustments from ticket 023
   - Incorporate any cost adjustments from ticket 024

4. **Consistency checks:**
   - Do any interventions have QALY ranges that don't make sense? (e.g., low > mid)
   - Are cost ranges reasonable? (e.g., walking shouldn't cost more than $100/year)
   - Does the overall picture make visual sense? (Walking should be near $0 with decent QALYs. Bariatric surgery should be high cost with decent QALYs. SSRIs should be low cost with moderate QALYs.)
   - Flag any outliers that seem wrong.

5. **Note interventions that were excluded** and why (from tickets 020-022 if they recommended exclusion).

6. **Produce the final intervention count** — how many data points will be on the graph?

## Prerequisites

This ticket should be the LAST one researched, after ALL other tickets (001-024) are complete.

## Output format

The master data table (step 2) plus notes on adjustments, exclusions, and any remaining concerns for the graph builder.

## What "good output" looks like

- A clean, complete table with no missing values
- All values in 2024 dollars, all QALYs consistently measured
- Confirmation that the data tells a coherent story (even if the story isn't what the hypothesis predicted)
- Clear count of final interventions for the graph
