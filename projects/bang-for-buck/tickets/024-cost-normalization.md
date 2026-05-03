# Ticket 024: Cost Normalization to 2024 Dollars

## Objective

After all intervention tickets are complete, verify that all cost figures across results are in consistent 2024 US dollars. Adjust any that aren't.

## What to do

1. **Review all cost figures in result files (004-022):**
   - Check what year each cost estimate is denominated in
   - Note the source year for each figure

2. **Inflate/deflate to 2024 dollars:**
   - Use CPI-U (All Urban Consumers) for general inflation adjustment
   - Use CPI-Medical for healthcare-specific costs (if noticeably different from general CPI)
   - Formula: 2024_cost = source_cost × (CPI_2024 / CPI_source_year)

3. **Find the CPI conversion factors:**
   - BLS CPI tables for 2015-2024 (most source data will be from this range)
   - Note: medical inflation has outpaced general inflation — healthcare costs from 2015 need a larger adjustment than non-healthcare costs

4. **Produce a cost reconciliation table:**
   | Intervention | Original Cost | Source Year | CPI Factor | 2024 Cost | Notes |
   |---|---|---|---|---|---|

5. **Check for regional variation issues:**
   - Are any cost estimates from a specific city/state that doesn't generalize? (e.g., NYC therapy costs ≠ national average)
   - Flag and adjust if needed

## Prerequisites

This ticket should be researched AFTER tickets 004-022 are complete. Read all result files.

## Where to look

1. **BLS CPI Data** — annual average CPI-U and CPI-Medical
2. **FRED** — CPI series for quick lookups

## Output format

A reconciliation table showing each intervention's original cost, source year, conversion factor, and normalized 2024 cost. Plus any flags for regional or methodological issues.

## What "good output" looks like

- Every intervention's cost is verifiably in 2024 dollars
- Medical vs. general CPI used appropriately
- Clear audit trail from source cost to final figure
