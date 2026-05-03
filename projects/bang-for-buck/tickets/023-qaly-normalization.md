# Ticket 023: QALY Methodology Normalization

## Objective

After all intervention tickets (004-022) are complete, review the QALY estimates across all interventions for methodological consistency. Flag any apples-to-oranges comparisons and recommend adjustments.

## What to do

1. **Catalog the QALY methodology for each intervention result:**
   - What instrument was used? (EQ-5D, SF-6D, mortality-based, custom utility mapping)
   - What was the study design? (RCT, meta-analysis, modeling, observational)
   - What was the comparator? (Placebo, usual care, waitlist, no treatment)
   - What was the population? (General adults, clinical population, low-income)
   - What was the time horizon?

2. **Identify inconsistencies:**
   - Are some interventions measured against "no treatment" while others are measured against "usual care"? This inflates the former relative to the latter.
   - Are some QALYs from all-cause endpoints while others are domain-specific? (Risk of apples-to-oranges)
   - Are time horizons comparable? (A 1-year study QALY vs. a lifetime QALY annualized over 20 years)

3. **Flag specific problems:**
   - List each intervention and note any methodology mismatch
   - Recommend whether any QALY estimates should be adjusted, re-sourced, or given a lower evidence tier

4. **Check for double-counting:**
   - Walking may appear to have higher QALYs because it touches multiple health domains. Is the estimate from a single all-cause study, or summed from multiple domain-specific studies?
   - If summed, recommend using the all-cause number instead.

5. **Produce a comparison table:**
   | Intervention | QALY Source | Instrument | Comparator | Population | Time Horizon | Consistency Flag |
   |---|---|---|---|---|---|---|

## Prerequisites

This ticket should be researched AFTER tickets 004-022 are complete. Read all result files before starting.

## Output format

Structured report with the comparison table and specific recommendations. No new web research needed — this is a synthesis of existing results.

## What "good output" looks like

- A clear table showing methodological details side by side
- Specific, actionable flags ("intervention X used waitlist control while intervention Y used usual care — X's QALY may be inflated by ~0.01-0.02")
- Recommendation: adjust, keep, or flag with caveat
