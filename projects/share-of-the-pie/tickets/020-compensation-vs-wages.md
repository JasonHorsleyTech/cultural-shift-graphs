# Ticket 020: Total Compensation vs Wages — Benefits Share of Compensation, 1947–2024

## What to research

Collect annual data on **total employee compensation vs. wages/salaries**, specifically the **share of total compensation that goes to benefits (non-wage compensation)**, 1947 through 2024.

This is the big-picture version of the health insurance story. Benefits include employer health insurance, retirement contributions, payroll taxes (employer share of FICA), workers' comp, and other legally required benefits. The benefits share has grown from ~5% in 1947 to ~30% today, meaning nearly a third of what employers spend on workers is invisible to the worker.

## Data source hierarchy

1. **BEA NIPA Table 2.1** — Compensation of employees (line 2), wages and salaries (line 3), supplements to wages and salaries (line 4). Supplements = employer contributions for social insurance + employer contributions for employee pension/insurance funds.
2. **FRED series A576RC1A027NBEA** — Supplements to wages and salaries.
3. **FRED series A132RC1A027NBEA** — Compensation of employees.
4. **FRED series A576RC1 / BA06RC1** — Various compensation components.
5. **BLS ECEC (Employer Costs for Employee Compensation)** — Quarterly from 1986, breaks out wages vs. all benefit categories.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Total Compensation ($B) | billions, current dollars | Total employee compensation |
| Wages and Salaries ($B) | billions, current dollars | Wage/salary component |
| Benefits Share (%) | percentage | (Total Comp - Wages) / Total Comp × 100 |

## What "good data" looks like

- 77–78 rows (1947–2024)
- Benefits share should grow steadily:
  - 1947: ~5%
  - 1960: ~8–10%
  - 1970: ~12–14%
  - 1980: ~18–20%
  - 1990: ~22–24%
  - 2000: ~24–26%
  - 2010: ~28–30%
  - 2024: ~30–32%
- Total compensation should always exceed wages
- The acceleration in benefits share should correlate with the health insurance cost explosion (tickets 018–019)

## Result format

Follow the standard result format from plan.md. Note: BEA provides aggregate figures, not per-worker. Per-worker can be derived by dividing by total employees, but the percentage (benefits share) is what matters most.

## Known issues

- "Supplements to wages" includes employer FICA contributions (~7.65% of wages), which is a tax, not a benefit to the worker. But it IS compensation that doesn't reach the paycheck. Including it is appropriate for this project's question.
- BEA covers all employees. A per-worker figure requires total employment data (available from BLS).
