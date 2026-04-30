# Ticket 028: Productivity vs Median Compensation, 1947–2024

## What to research

Collect annual **labor productivity (output per hour) and median hourly compensation**, both as index numbers with a common base year, 1947 through 2024.

The "productivity-pay gap" is one of the most iconic charts in labor economics. From 1947 to ~1973, productivity and median compensation rose in lockstep. After 1973, they diverged: productivity kept rising while median compensation flattened. This is the same story our graph tells, but from a different angle. It serves as independent validation.

## Data source hierarchy

1. **Economic Policy Institute (EPI) "Productivity-Pay Gap" data** — EPI publishes this exact comparison, updated annually. Their data page has downloadable tables.
2. **BLS Major Sector Productivity and Costs** — Output per hour, nonfarm business sector. FRED series PRS85006092 (real output per hour).
3. **BLS / Census** — Median usual weekly earnings (real), from 1979. For earlier years, use CPS data or EPI's reconstruction.
4. **FRED** — Various productivity and compensation series.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Productivity Index | index, base year noted | Real output per hour, nonfarm business |
| Median Compensation Index | index, same base year | Real median hourly compensation (wages + benefits) |

**Critical:** Both series must use the **same base year** for the index. EPI typically uses 1979=100. BLS uses various base years. Pick one and rebase if needed, or note both base years and the graph phase will align them.

## What "good data" looks like

- 1947–1973: both indices rise together (roughly doubling)
- 1973–2024: productivity index continues rising (roughly doubling again), median compensation index flatlines or rises only ~15–20%
- The gap between the two lines after 1973 IS the story
- By 2024, productivity should be ~250% of 1947 level; median compensation ~170% of 1947 level

## Result format

Follow the standard result format from plan.md. Note the base year, deflator used, and whether "compensation" includes benefits or is wages-only.

## Known issues

- The "gap" depends on which deflator you use. EPI uses CPI for wages (consumer prices) and IPD for output (producer prices). Using the same deflator for both narrows the gap somewhat. Note which deflators are used.
- "Compensation" vs "wages" matters enormously here. The gap is larger for wages-only (because benefits grew). Including benefits narrows it but doesn't eliminate it.
- Pre-1973 data may need to be reconstructed from BLS historical series. EPI's compilation is the most convenient source.
