# Ticket 026: Working-Age (25–64) Population Share, 1947–2024

## What to research

Collect annual **percentage of the total US population aged 25–64**, 1947 through 2024.

As the population ages (Baby Boomers retiring), the share of working-age people shrinks. This means GDP per capita is increasingly produced by a smaller share of the population, which mechanically changes the relationship between working-age income and GDP per capita. If 60% of people are working-age and they produce most of GDP, their "share" is higher than if 52% are working-age.

## Data source hierarchy

1. **Census Bureau population estimates** — Annual population by age, 1900–present. Available via Census website or data.census.gov.
2. **FRED series** — Various population-by-age series from Census.
3. **Census decennial data** — For earlier years with interpolation.
4. **UN Population Division** — Fallback for US age structure.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Working-Age Share (%) | percentage | Population aged 25–64 / total population × 100 |

## What "good data" looks like

- 1947: ~47–50% (post-war, lots of children from baby boom about to start)
- 1960: ~44–46% (baby boom children are young, depressing the working-age share)
- 1970: ~42–44% (peak baby boom effect — largest share of population is under 25)
- 1980: ~45–47% (baby boomers entering working age)
- 1990: ~49–51%
- 2000: ~51–53% (baby boomers in peak working years)
- 2010: ~52–53%
- 2020: ~50–52% (baby boomers starting to exit)
- 2024: ~49–51% (aging continues)

## Result format

Follow the standard result format from plan.md.

## Known issues

- Annual population by age is estimated between decennial Census years. Quality is high (Census does annual estimates) but not as precise as decennial counts.
- The 25–64 cutoff is somewhat arbitrary. Some analyses use 18–64 or 15–64. Stick with 25–64 to match the working-age earnings tickets.
