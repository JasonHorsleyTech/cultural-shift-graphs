# Ticket 023: Labor Force Participation Rate by Sex, 1947–2024

## What to research

Collect annual **civilian labor force participation rate for men and women separately**, 1947 through 2024.

Women's labor force participation rose from ~32% in 1947 to ~60% by 2000, then plateaued. Men's fell from ~86% to ~68%. This context is crucial: household income would have declined *even more* if women hadn't massively entered the workforce. The fact that the ratio fell despite this entry makes the story stronger.

## Data source hierarchy

1. **FRED series LNS11300001 (men) and LNS11300002 (women)** — BLS civilian labor force participation rate, monthly. Annual average is fine.
2. **BLS Labor Force Statistics from the Current Population Survey** — Table A-1, or historical tables.
3. **BLS Handbook of Labor Statistics** — For pre-1960 data.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Men LFP (%) | percentage | Male civilian labor force participation rate, 16+ |
| Women LFP (%) | percentage | Female civilian labor force participation rate, 16+ |

## What "good data" looks like

- 77–78 rows (1947–2024)
- Men: ~86% (1947) → declining steadily → ~68% (2024)
- Women: ~32% (1947) → rising steeply → ~60% (2000) → plateau/slight decline → ~57% (2024)
- The lines should cross or nearly cross around 2050 on a trend projection (but don't project — just collect actuals)

## Result format

Follow the standard result format from plan.md. This is a clean BLS series — should be straightforward.

## Known issues

- Participation rate includes part-time workers. A person working 5 hours/week counts the same as 40 hours/week. This is a known limitation but not one we can fix here.
- Post-2020 data reflects pandemic disruption (sharp drop in 2020, partial recovery). Don't smooth it.
