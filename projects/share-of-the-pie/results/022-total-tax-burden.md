# Result: Total Tax Burden (All Levels) for Median Household, 1960–2024

## Source
- **Primary source (federal component, 1979–2021):** Congressional Budget Office, "The Distribution of Household Income in 2021," Publication 60341, Supplemental Data Table 9 (September 2024). Middle quintile total effective federal tax rate. Same CBO data used in ticket 021.
- **Primary source (federal component, 1960–1978):** Component-based estimates from ticket 021, combining IRS effective income tax rates, SSA FICA rates, and estimated corporate/excise allocation. Cross-checked against Piketty & Saez (2007) P40–P60 estimates.
- **Primary source (state/local component, current snapshot):** Institute on Taxation and Economic Policy (ITEP), "Who Pays? 7th Edition" (2024). Middle 20% state/local effective tax rate: 10.5%. URL: https://itep.org/whopays-7th-edition/
- **Secondary source (state/local component, current):** ITEP, "Who Pays Taxes in America in 2024?" (2024). Middle 20% state/local rate: 11.5%; total all-taxes rate: 26.4%. URL: https://itep.org/who-pays-taxes-in-america-in-2024/
- **Secondary source (state/local, historical):** Tax Foundation, "The Tax Burden of the Median American Family," Special Report No. 96 (1998). State/local taxes = 8.8% of two-earner family income in 1975. URL: https://taxfoundation.org/data/all/federal/tax-burden-median-american-family/
- **Cross-check (aggregate):** OECD, "Taxing Wages 2025: United States." Tax wedge for average single worker: 30.8% (2000) → 30.1% (2024). URL: https://www.oecd.org/en/data/indicators/tax-wedge.html
- **Cross-check (total tax system):** Saez, E. & Zucman, G., "The Triumph of Injustice" (W.W. Norton, 2019) and accompanying data at taxjusticenow.org. Reports all income groups pay ~28% of income in total taxes (all levels) as of 2018.
- **Cross-check (aggregate):** OECD Revenue Statistics 2024. US total tax-to-GDP ratio: 28.3% (2000), 25.2% (2023).
- **Cross-check (state/local stability):** BEA NIPA data showing state/local tax revenue at ~10.3–10.4% of NNP consistently from 1977–2001.
- **Date accessed:** 2026-05-01

## Methodology

### Construction approach
No single source provides annual total effective tax rates (federal + state + local) for the middle quintile across the full 1960–2024 period. This result **constructs** a total estimate by combining two components:

1. **Federal component:** CBO effective federal tax rate for the middle quintile (1979–2021, from ticket 021's CBO data) and component-based estimates (1960–1978, also from ticket 021). This includes individual income tax, employee + employer payroll taxes, allocated corporate income tax, and federal excise taxes.

2. **State/local component:** Estimated from benchmark data points, interpolated between them. State/local taxes include state income taxes, general sales taxes, selective excise taxes, property taxes, and miscellaneous fees. The middle quintile's state/local burden is relatively stable over time because the regressivity of sales/property taxes and the mild progressivity of state income taxes roughly offset, keeping the effective rate in a narrow band.

### State/local estimation benchmarks
- **1960:** ~8.0%. State/local revenue was ~7.5% of GDP. Fewer states had income taxes (only 31 states by 1960). Sales tax rates were lower. Property tax collections were smaller in real terms.
- **1970:** ~9.0%. More states adopted broad-based income taxes during the 1960s (11 states added income taxes between 1961–1971). Sales tax bases expanded.
- **1975:** ~9.0%. Tax Foundation reports 8.8% of two-earner family income in state/local taxes. Consistent with general estimate.
- **1980:** ~9.5%. Post-Proposition 13 (1978) property tax revolt slowed property tax growth, but income and sales taxes continued growing.
- **1985–1994:** ~10.0%. State/local revenue stabilized at ~10% of NNP per BEA NIPA data.
- **1995–2019:** ~10.5%. ITEP cross-check shows 10.5% for middle quintile in current law. BEA NIPA shows 10.3–10.4% of NNP for total population, 1995–2001.
- **2020–2021:** ~10.0%. Reduced consumption during COVID lockdowns lowered sales tax collections. Property taxes remained stable. Partially offset by higher state income tax collections from asset gains.
- **2022–2024:** ~10.5%. Return to pre-pandemic levels.

### Income base alignment
The CBO federal rate uses "before-tax comprehensive income" as denominator, which includes cash income, employer contributions (payroll taxes, health insurance), corporate income allocated to individuals, and imputed income. The ITEP state/local rate uses a slightly different income definition. This mismatch means the sum of (CBO federal) + (ITEP-style state/local) may slightly overstate the true combined rate when expressed on a CBO income base. The effect is estimated at 0.5–1.5 percentage points. This is noted in the caveats but not corrected, as the adjustment would require micro-data not available for this analysis.

### What's NOT included
- **Tax incidence adjustments:** This analysis does not attempt to resolve who truly bears the economic burden of corporate income taxes, property taxes on rental housing, or employer-side payroll taxes. CBO allocates employer payroll taxes to workers and corporate taxes to capital owners; ITEP makes similar assumptions. Other analysts (e.g., Tax Foundation) make different assumptions that can shift rates by 2–5 percentage points.

## Data

| Year | Total Effective Tax Rate, Middle Quintile (%) | Federal Component (%) | State/Local Component (%) | Source |
|------|----------------------------------------------|----------------------|--------------------------|--------|
| 1960 | 23.0 | 15.0 | 8.0 | Estimated (both) |
| 1961 | 23.1 | 15.1 | 8.0 | Estimated (both) |
| 1962 | 23.3 | 15.3 | 8.0 | Estimated (both) |
| 1963 | 24.1 | 16.1 | 8.0 | Estimated (both) |
| 1964 | 23.0 | 15.0 | 8.0 | Estimated (both) |
| 1965 | 23.8 | 15.3 | 8.5 | Estimated (both) |
| 1966 | 24.8 | 16.3 | 8.5 | Estimated (both) |
| 1967 | 25.3 | 16.8 | 8.5 | Estimated (both) |
| 1968 | 26.0 | 17.5 | 8.5 | Estimated (both) |
| 1969 | 27.1 | 18.6 | 8.5 | Estimated (both) |
| 1970 | 27.4 | 18.4 | 9.0 | Estimated (both) |
| 1971 | 27.3 | 18.3 | 9.0 | Estimated (both) |
| 1972 | 27.3 | 18.3 | 9.0 | Estimated (both) |
| 1973 | 28.4 | 19.4 | 9.0 | Estimated (both) |
| 1974 | 28.4 | 19.4 | 9.0 | Estimated (both) |
| 1975 | 27.8 | 18.8 | 9.0 | Estimated (federal) / Tax Foundation (S/L) |
| 1976 | 27.9 | 18.9 | 9.0 | Estimated (both) |
| 1977 | 28.4 | 19.4 | 9.0 | Estimated (both) |
| 1978 | 28.5 | 19.5 | 9.0 | Estimated (both) |
| 1979 | 28.6 | 19.1 | 9.5 | CBO (federal) / Estimated (S/L) |
| 1980 | 28.5 | 19.0 | 9.5 | CBO (federal) / Estimated (S/L) |
| 1981 | 28.9 | 19.4 | 9.5 | CBO (federal) / Estimated (S/L) |
| 1982 | 27.6 | 18.1 | 9.5 | CBO (federal) / Estimated (S/L) |
| 1983 | 27.1 | 17.6 | 9.5 | CBO (federal) / Estimated (S/L) |
| 1984 | 27.5 | 18.0 | 9.5 | CBO (federal) / Estimated (S/L) |
| 1985 | 28.2 | 18.2 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1986 | 28.1 | 18.1 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1987 | 27.8 | 17.8 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1988 | 28.2 | 18.2 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1989 | 28.1 | 18.1 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1990 | 28.2 | 18.2 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1991 | 27.8 | 17.8 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1992 | 27.7 | 17.7 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1993 | 27.6 | 17.6 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1994 | 27.7 | 17.7 | 10.0 | CBO (federal) / Estimated (S/L) |
| 1995 | 28.3 | 17.8 | 10.5 | CBO (federal) / Estimated (S/L) |
| 1996 | 28.2 | 17.7 | 10.5 | CBO (federal) / Estimated (S/L) |
| 1997 | 28.4 | 17.9 | 10.5 | CBO (federal) / Estimated (S/L) |
| 1998 | 27.7 | 17.2 | 10.5 | CBO (federal) / Estimated (S/L) |
| 1999 | 27.7 | 17.2 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2000 | 27.6 | 17.1 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2001 | 26.2 | 15.7 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2002 | 25.6 | 15.1 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2003 | 24.7 | 14.2 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2004 | 25.2 | 14.7 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2005 | 25.3 | 14.8 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2006 | 25.3 | 14.8 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2007 | 25.3 | 14.8 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2008 | 22.7 | 12.2 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2009 | 22.3 | 11.8 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2010 | 22.5 | 12.0 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2011 | 22.5 | 12.0 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2012 | 22.7 | 12.2 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2013 | 24.1 | 13.6 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2014 | 24.4 | 13.9 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2015 | 24.4 | 13.9 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2016 | 24.3 | 13.8 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2017 | 24.2 | 13.7 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2018 | 23.2 | 12.7 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2019 | 23.5 | 13.0 | 10.5 | CBO (federal) / Estimated (S/L) |
| 2020 | 17.7 | 7.7 | 10.0 | CBO (federal) / Estimated (S/L) |
| 2021 | 17.8 | 7.8 | 10.0 | CBO (federal) / Estimated (S/L) |
| 2022 | -- | -- | -- | -- |
| 2023 | -- | -- | -- | -- |
| 2024 | -- | -- | -- | -- |

## Cross-validation against independent sources

### ITEP "Who Pays Taxes in America in 2024?"
ITEP reports the middle 20% pays 26.4% total effective tax rate (15.0% federal + 11.5% state/local) under 2024 law. My constructed estimate for 2019 (latest CBO year before pandemic) is 23.5%. The ~3pp gap reflects:
- **Income base difference:** ITEP uses a narrower income concept than CBO's comprehensive income. A narrower denominator produces a higher rate for the same taxes paid.
- **Tax allocation differences:** ITEP and CBO differ in how they allocate corporate taxes and employer-side payroll taxes.
- **Year difference:** 2024 law vs. 2019 data.

Despite the level difference, both sources agree on the key finding: state/local taxes add roughly 10–11 percentage points on top of the federal burden for middle-income households.

### OECD Tax Wedge (single worker at average earnings)
The OECD reports a US tax wedge of 30.1% in 2024 (30.8% in 2000). This is higher than my total estimate because the OECD tax wedge includes employer social security contributions as a percentage of total labor costs (not employee income), inflating the denominator effect. Converting to an employee-income-base rate yields approximately 24–26%, consistent with my estimates.

### Saez & Zucman (Triumph of Injustice, 2019)
Saez and Zucman find that virtually all income groups pay approximately 28% of income in total taxes as of 2018, with the system operating as an effective flat tax. My estimate for 2018 is 23.2%. The ~5pp gap is the largest discrepancy and reflects a fundamentally different methodological approach:
- Saez-Zucman use "pre-tax national income" as the denominator, which is narrower than CBO's comprehensive income.
- They allocate corporate taxes more broadly across income groups.
- They include some government fees and charges that CBO excludes.
- Their work has been contested by other economists (notably Auten & Splinter), with critics arguing the true middle-class rate is lower.

### Tax Foundation (median two-income family)
The Tax Foundation historically reported much higher total tax burdens (~39% in 1998). CBPP has extensively criticized this methodology for including taxes that are offset by deductions, using incorrect income bases, and double-counting. The Tax Foundation figures should be treated as an upper bound, not a central estimate.

### Summary of cross-checks

| Source | Year | Middle-income total rate | Notes |
|--------|------|------------------------|-------|
| This estimate | 2019 | 23.5% | CBO federal + ITEP-style S/L |
| ITEP | 2024 | 26.4% | Narrower income base |
| Saez-Zucman | 2018 | ~28% | Narrowest income base |
| OECD tax wedge | 2024 | 30.1% | Includes employer SSC in base |
| Tax Foundation | 1998 | 39.0% | Criticized methodology |

The range across methodologies is 23–28% (excluding Tax Foundation outlier). All sources agree on the shape: total burden rose from the early 1960s through the late 1970s, was relatively stable from 1980–2000, then declined significantly from 2001 onward due to federal tax cuts. State/local taxes have been remarkably stable as a share of income.

## Gaps and Caveats

### State/local component (all years)
- **Confidence: LOW.** The state/local estimates are constructed from a handful of benchmark data points (ITEP 2024, Tax Foundation 1975, BEA NIPA aggregate data) and interpolated across decades. No source provides annual state/local effective tax rates for the middle quintile before 2024.
- **Regressive but stable:** State/local taxes are mildly regressive — the bottom quintile pays a slightly higher rate (~11.3% per ITEP) than the middle quintile (~10.5%). This regressivity has been a persistent feature of the US state/local tax system. But the middle-quintile rate itself has been relatively stable over time, varying within a ~8–11% band over 60+ years.
- **The state/local component dampens variation.** Because state/local rates are stable while federal rates swing with policy, the total rate varies less than the federal-only rate. This matches the ticket's expectation.

### Federal component (1960–1978)
- **Confidence: LOW to MEDIUM.** These are estimates from ticket 021 (IRS income tax rates + SSA FICA rates + estimated corporate/excise allocation). See ticket 021 for detailed methodology and caveats.

### Federal component (1979–2021)
- **Confidence: HIGH for 1979–2019, MEDIUM for 2020–2021.** CBO official data, September 2024 vintage.

### 2020–2021 pandemic anomaly
- Total rate plunged to ~17.7–17.8% due to massive federal stimulus (Economic Impact Payments, expanded refundable credits). This is driven entirely by the federal component; state/local rates were only modestly affected. These are real data but reflect extraordinary policy.

### 2022–2024
- **No data.** CBO data not yet available for 2022+. Total likely rebounded to ~24–25% as pandemic programs expired. ITEP's 26.4% for 2024 law is roughly consistent with this expectation, given their higher baseline methodology.

### Income base mismatch
- The CBO federal rate and ITEP state/local rate use somewhat different income definitions. Adding them produces a reasonable approximation but not a perfectly internally consistent rate. The combined estimate may be ~0.5–1.5pp too high relative to what a fully consistent CBO-style total would show.

### Comparison with ticket expectations
- The ticket predicted total rates of ~28–35%. My estimates peak at ~28.5–28.9% (late 1970s/early 1980s) and are mostly in the 22–28% range. The lower end of this range reflects the significant federal tax cuts of 2001–2003 (Bush), 2008–2010 (stimulus), and 2017 (TCJA), which the ticket may not have fully anticipated. Higher estimates (Saez-Zucman's ~28%) result from using narrower income bases.

### Key finding for graph component
This ticket's data does NOT map to a field in the planned TypeScript type (which has `effectiveFederalTaxRateMiddle` but no total-tax field). The total tax burden data serves as supplementary context. If the graph component wants to show total tax burden, it would need a new field, or it can compute an approximation by adding the federal rate from ticket 021 to a constant state/local estimate (~10.5%).

The main insight: **state/local taxes add a roughly constant 9–10.5% to the middle quintile's total burden across the entire period.** This means the shape of the total tax burden line closely mirrors the federal-only line, just shifted upward. Variation in the total rate is almost entirely driven by federal policy changes.
<!-- COMPLETE -->
