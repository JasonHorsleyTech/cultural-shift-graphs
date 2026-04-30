# Ticket 010: Income Shares by Quintile and Top 5%, 1967–2024

## What to research

Collect annual **share of aggregate household income received by each quintile and the top 5%**, 1967 through 2024.

This directly measures how the pie is sliced. If the top quintile's share grew from 43% to 52% while the bottom quintile's share shrank from 4% to 3%, that's the inequality story in one table.

## Data source hierarchy

1. **Census Bureau Historical Income Table H-2** — Share of aggregate income received by each fifth and top 5% of households. This is exactly what we need.
2. **Census Table H-3** — Mean income received by each fifth (can compute shares from this).
3. **FRED** — May have individual series.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Bottom 20% Share (%) | percentage | Share of total household income, lowest quintile |
| Second 20% Share (%) | percentage | Second quintile |
| Middle 20% Share (%) | percentage | Third quintile |
| Fourth 20% Share (%) | percentage | Fourth quintile |
| Top 20% Share (%) | percentage | Highest quintile |
| Top 5% Share (%) | percentage | Top 5% (subset of top 20%) |

## What "good data" looks like

- ~57 rows (1967–2024)
- All five quintile shares should sum to 100% (±0.1% for rounding)
- Bottom quintile: ~4% in 1967 → ~3% today
- Top quintile: ~43% in 1967 → ~52% today
- Top 5%: ~17% in 1967 → ~23% today
- The trend should show steady concentration at the top, with an acceleration after ~1980

## Result format

Follow the standard result format from plan.md.

## Known issues

- These are pre-tax, pre-transfer income shares. They tell the market distribution story. CBO data (tickets 011–013) provides the after-tax version.
- Top-coding: Census caps reported income at certain thresholds, which may compress the top quintile's measured share. The effect is minor for quintile shares but worth noting.
