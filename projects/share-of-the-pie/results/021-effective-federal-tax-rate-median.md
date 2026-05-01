# Result: Effective Federal Tax Rate for Middle Quintile, 1947–2024

## Source
- **Primary source (1979–2021):** Congressional Budget Office, "The Distribution of Household Income in 2021," Publication 60341, Supplemental Data Table 9: "Average Federal Tax Rates, by Income Group, 1979 to 2021" (September 2024). URL: https://www.cbo.gov/publication/60706. This is the same CBO data used in ticket 013; values verified for consistency.
- **Secondary source (1960–1978 cross-check):** Piketty, T. & Saez, E. (2007), "How Progressive is the U.S. Federal Tax System? A Historical and International Perspective," *Journal of Economic Perspectives* 21(1): 3–24. Provides all-federal-tax effective rates for the P40–P60 income group biennially from 1960–2004.
- **Secondary source (1947–1978 income tax component):** IRS Statistics of Income, effective income tax rate on median adjusted gross income. Published benchmark values: 1950 (5.5%), 1955 (8.1%), 1960 (8.7%), 1965 (8.4%), 1970 (9.8%), 1975 (8.9%). Intervening years interpolated using known tax legislation.
- **Secondary source (payroll tax component):** Social Security Administration, OACT, "FICA & SECA Tax Rates" (https://www.ssa.gov/oact/progdata/taxRates.html). Employee + employer combined OASDI and HI rates, 1937–present.
- **Date accessed:** 2026-04-30

## Methodology

### 1979–2021: CBO official data (HIGH confidence)
- **Definition:** Total effective federal tax rate = total federal taxes / before-tax comprehensive income × 100.
- **Taxes included:** Individual income taxes, payroll taxes (employee + employer shares), corporate income taxes (allocated to capital income recipients), and federal excise taxes.
- **Universe:** All US households in the middle income quintile (third quintile), ranked by before-tax income adjusted for household size, quintiles containing equal numbers of people.
- **Vintage:** September 2024 CBO release. CBO rebenchmarks the entire 1979–2021 series in each report; these values supersede earlier publications.

### 1947–1978: Component-based estimates (LOW–MEDIUM confidence)
No single source provides CBO-comparable all-federal-tax rates for the middle quintile before 1979. These estimates are constructed from three components, each adjusted to approximate a CBO-style income base:

1. **Income tax component:** IRS effective income tax rate on median AGI at benchmark years (1950, 1955, 1960, 1965, 1970, 1975), interpolated for intervening years using known tax legislation timing. Scaled by ×0.87 to approximate the CBO income base (which is ~15% broader than AGI due to including employer payroll taxes, employer health benefits, and imputed income).

2. **Payroll tax component:** Combined employee + employer FICA rates (OASDI + HI) are well-documented year by year from the SSA. Applied against wage share of CBO-style income (estimated 82% for middle-quintile households). Medicare (HI) tax began in 1966.

3. **Corporate + excise tax allocation:** Estimated allocation of corporate income tax and federal excise taxes to middle-quintile households. Corporate tax allocated in proportion to modest capital income of middle-quintile households. Federal excise taxes (tobacco, alcohol, gasoline, etc.) allocated roughly proportionally to consumption. Combined corporate + excise allocation estimated at ~3.5% of income in the late 1940s, declining to ~1.5% by the late 1970s, reflecting the secular decline in corporate and excise tax revenue as shares of GDP.

**Cross-validation against Piketty-Saez:** The P-S estimates for the P40–P60 income group (all federal taxes) serve as cross-checks. P-S reports 15.9% for 1960 and 20.2% for 1970. My component-based estimates are 15.0% and 18.4% respectively — 1–2pp lower, which is expected because CBO's broader income denominator produces lower effective rates than P-S's narrower tax-unit income. At the 1978–1979 transition, my component estimate for 1978 (~19.5%) aligns reasonably with CBO 1979 (19.1%), suggesting the splice is consistent within ~0.5pp.

### Source transition at 1979
The pre-1979 estimates and CBO series use fundamentally different methodologies. The component-based estimates are calibrated to produce a smooth transition, but users should treat 1979 as a methodological break. The pre-1979 values capture the correct *direction and magnitude* of changes (e.g., the FICA-driven rise from the 1950s to 1970s, the 1964 tax cut), but individual year values may be off by 1–2 percentage points.

## Data

| Year | Effective Federal Tax Rate, Middle Quintile (%) | Source |
|------|------------------------------------------------|--------|
| 1947 | 13.0 | Estimated |
| 1948 | 11.7 | Estimated |
| 1949 | 10.8 | Estimated |
| 1950 | 10.8 | Estimated |
| 1951 | 12.6 | Estimated |
| 1952 | 13.0 | Estimated |
| 1953 | 12.5 | Estimated |
| 1954 | 12.4 | Estimated |
| 1955 | 13.3 | Estimated |
| 1956 | 13.5 | Estimated |
| 1957 | 14.1 | Estimated |
| 1958 | 13.7 | Estimated |
| 1959 | 14.5 | Estimated |
| 1960 | 15.0 | Estimated |
| 1961 | 15.1 | Estimated |
| 1962 | 15.3 | Estimated |
| 1963 | 16.1 | Estimated |
| 1964 | 15.0 | Estimated |
| 1965 | 15.3 | Estimated |
| 1966 | 16.3 | Estimated |
| 1967 | 16.8 | Estimated |
| 1968 | 17.5 | Estimated |
| 1969 | 18.6 | Estimated |
| 1970 | 18.4 | Estimated |
| 1971 | 18.3 | Estimated |
| 1972 | 18.3 | Estimated |
| 1973 | 19.4 | Estimated |
| 1974 | 19.4 | Estimated |
| 1975 | 18.8 | Estimated |
| 1976 | 18.9 | Estimated |
| 1977 | 19.4 | Estimated |
| 1978 | 19.5 | Estimated |
| 1979 | 19.1 | CBO |
| 1980 | 19.0 | CBO |
| 1981 | 19.4 | CBO |
| 1982 | 18.1 | CBO |
| 1983 | 17.6 | CBO |
| 1984 | 18.0 | CBO |
| 1985 | 18.2 | CBO |
| 1986 | 18.1 | CBO |
| 1987 | 17.8 | CBO |
| 1988 | 18.2 | CBO |
| 1989 | 18.1 | CBO |
| 1990 | 18.2 | CBO |
| 1991 | 17.8 | CBO |
| 1992 | 17.7 | CBO |
| 1993 | 17.6 | CBO |
| 1994 | 17.7 | CBO |
| 1995 | 17.8 | CBO |
| 1996 | 17.7 | CBO |
| 1997 | 17.9 | CBO |
| 1998 | 17.2 | CBO |
| 1999 | 17.2 | CBO |
| 2000 | 17.1 | CBO |
| 2001 | 15.7 | CBO |
| 2002 | 15.1 | CBO |
| 2003 | 14.2 | CBO |
| 2004 | 14.7 | CBO |
| 2005 | 14.8 | CBO |
| 2006 | 14.8 | CBO |
| 2007 | 14.8 | CBO |
| 2008 | 12.2 | CBO |
| 2009 | 11.8 | CBO |
| 2010 | 12.0 | CBO |
| 2011 | 12.0 | CBO |
| 2012 | 12.2 | CBO |
| 2013 | 13.6 | CBO |
| 2014 | 13.9 | CBO |
| 2015 | 13.9 | CBO |
| 2016 | 13.8 | CBO |
| 2017 | 13.7 | CBO |
| 2018 | 12.7 | CBO |
| 2019 | 13.0 | CBO |
| 2020 | 7.7 | CBO |
| 2021 | 7.8 | CBO |
| 2022 | -- | -- |
| 2023 | -- | -- |
| 2024 | -- | -- |

## Gaps and Caveats

### Pre-1979 estimates (1947–1978)
- **Confidence: LOW for 1947–1959, MEDIUM for 1960–1978.** These are constructed estimates, not survey-based measurements. Individual year values may be off by 1–2 percentage points. The overall trend (rising from ~11% in the late 1940s to ~19% by the late 1970s, driven primarily by rising FICA rates) is well-established.
- **The pre-1979 values are LOWER than the ticket's expected ranges** (18–22% for 1947–1963). This is because combined FICA rates were only 2–7% in that period, and income tax rates on median income were modest (5–9% of AGI). The expectation of 18–22% may have confused marginal rates with effective rates, or assumed higher payroll taxes than actually existed.
- **Corporate and excise tax allocation is the most uncertain component.** I estimate 1.5–3.5% of middle-quintile income, declining over time. This could be off by 1pp in either direction.
- **The IRS income tax benchmarks** (1950, 1955, 1960, 1965, 1970, 1975) use effective rate on median *individual* AGI, not household income. This is a reasonable proxy for the income tax component of middle-quintile household rates, but not identical.

### CBO era (1979–2021)
- **Confidence: HIGH for 1979–2019, MEDIUM for 2020–2021.**
- **2020–2021 pandemic anomaly:** Middle-quintile rate plunged from 13.0% to 7.7–7.8% due to stimulus payments, expanded refundable credits, and other pandemic-era fiscal policy. These are real data but reflect an extraordinary policy environment.
- **No missing data in the CBO series.** Continuous annual estimates from 1979–2021.
- **CBO vintage:** September 2024 release. These numbers supersede all earlier CBO publications for the same years.

### 2022–2024
- **No CBO data yet.** CBO typically publishes with a 2–3 year lag. The 2022 report may be forthcoming but was not available at time of research.
- **2022 likely rebounded** from the pandemic anomaly as stimulus programs expired. Expected middle-quintile rate of ~13–14% based on policy environment.

### Key policy events visible in the data
- **1948 Revenue Act:** ~2pp drop (income tax cuts for individuals)
- **1951 Revenue Act (Korean War):** ~2pp rise
- **1954 Internal Revenue Code:** Modest relief, offset by FICA increase
- **1957, 1959, 1963, 1966 FICA increases:** Each added ~0.5–1.5pp to effective rates
- **1964 Revenue Act (Kennedy-Johnson):** ~1pp drop from income tax cuts, partially offset by continued FICA growth
- **1966 Medicare (HI) tax:** Added ~1pp via new payroll tax
- **1968–1969 Vietnam War surtax:** ~1–1.5pp temporary increase in income tax component
- **1973 FICA increase:** ~1pp rise
- **1975 Tax Reduction Act:** ~0.5pp drop
- **1979–2021:** See ticket 013 for detailed policy event annotations

### Comparison with earlier CBO report vintage
The econdataus.com source (based on a 2007 CBO report) shows values ~0.3–0.5pp lower than the current September 2024 CBO vintage for the same years (e.g., 1979: 18.6% vs 19.1%). This is normal CBO rebenchmarking and reflects updated income definitions and methodological improvements. The current 2024 vintage should be used.

### Key field for TypeScript data file
`effectiveFederalTaxRateMiddle` maps to the "Effective Federal Tax Rate, Middle Quintile (%)" column. For 1979–2021, these are authoritative CBO values. For 1947–1978, they are estimates. The graph phase should consider whether to visually distinguish the estimated period (e.g., dashed line before 1979, solid after).
<!-- COMPLETE -->
