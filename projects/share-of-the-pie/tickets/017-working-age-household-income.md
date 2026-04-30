# Ticket 017: Median Income for Households with Householder Age 25–64, 1967–2024

## What to research

Collect annual **median household income for households where the householder is aged 25–64** in nominal dollars, 1967 through 2024.

This strips out retiree households (whose income is dominated by Social Security transfers) and very young households (who are typically students or early-career). It provides a cleaner "working-age household" benchmark than all-ages median household income.

## Data source hierarchy

1. **Census Bureau Table H-10** — Median household income by age of householder. Has brackets: 15–24, 25–34, 35–44, 45–54, 55–64, 65+.
2. **Census CPS ASEC detailed tables** — Income by age of householder.
3. **FRED** — May not have age-specific household income series directly.

**Note:** Census publishes medians for individual age brackets, not for the combined 25–64 range. You may need to report each bracket separately (25–34, 35–44, 45–54, 55–64). The graph phase can compute a weighted median or use the 35–44 or 45–54 bracket as the "prime working age" proxy.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Age 25–34 Median ($) | current US dollars | Median household income, householder age 25–34 |
| Age 35–44 Median ($) | current US dollars | Median household income, householder age 35–44 |
| Age 45–54 Median ($) | current US dollars | Median household income, householder age 45–54 |
| Age 55–64 Median ($) | current US dollars | Median household income, householder age 55–64 |

If a combined 25–64 figure is directly available, collect that too.

## What "good data" looks like

- ~57 rows (1967–2024)
- The 45–54 bracket should be highest (peak earning years)
- 25–34 should be lowest of the four
- All brackets should show the same general trend as overall median, but the 25–34 bracket may show a steeper decline in GDP share (younger workers hit harder by the post-1973 divergence)

## Result format

Follow the standard result format from plan.md.

## Known issues

- "Householder" is the person in whose name the home is owned or rented. In married couples, this is somewhat arbitrary. The age of householder doesn't perfectly capture age of all earners.
- Census Table H-10 may start later than 1967 for some age brackets. Note the first available year for each.
