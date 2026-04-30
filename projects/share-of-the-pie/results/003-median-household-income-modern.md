# Result: Median Household Income (Nominal), 1967–2024

## Source
- **Primary source:** U.S. Census Bureau, Current Population Survey (CPS) Annual Social and Economic Supplement (ASEC), Historical Income Table H-5: "Race and Hispanic Origin of Householder — Households by Median and Mean Income: 1967 to 2018" (All Races, Current Dollars column). Downloaded from https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-income-households/h05.xls
- **Secondary source:** FRED series MEHOINUSA646N (Median Household Income in the United States, nominal dollars), sourced from Census CPS ASEC. Used for 2019–2024 values not yet in the H-5 historical table. https://fred.stlouisfed.org/series/MEHOINUSA646N
- **Date accessed:** 2026-04-28

## Methodology
- **Definition:** Median total money income of all households in the United States, in current (nominal) dollars. "Money income" includes wages, salaries, self-employment income, interest, dividends, rents, royalties, Social Security, public assistance, pensions, and other regular payments. Excludes capital gains, noncash benefits (employer health insurance, food stamps, housing subsidies), and imputed income.
- **Universe:** All households (one or more persons sharing a housing unit), householder age 15+. Includes single-person households, unrelated individuals, and families. This is broader than "family income" which excludes single-person and unrelated-individual households.
- **Survey:** CPS ASEC, conducted each March. Income refers to the prior calendar year (e.g., the March 2025 survey collects 2024 income).
- **Known methodology changes:**
  - **2013 CPS redesign:** The Census Bureau redesigned income questions, adding new categories and improving measurement of retirement income, health insurance income, and other sources. This raised measured median income by approximately 3.2%. The table includes both old-methodology and new-methodology estimates for 2013.
  - **2017 processing system update:** Census implemented an updated processing system for CPS ASEC data. They re-released 2017 data under both legacy and updated systems. The difference in overall median household income was not statistically significant, but the table includes both estimates for transparency.
  - **2010, 2004, 2000, 1995, 1994, 1993, 1992, 1987, 1985, 1984, 1979, 1976, 1975, 1974, 1972, 1971, 1967:** Various footnotes in the Census H-5 table indicate minor methodological adjustments (weighting changes, population controls updates, sample redesigns). These are small enough that the Census Bureau treats the series as continuous.

## Data

| Year | Median Household Income ($) | Notes |
|------|----------------------------|-------|
| 1967 | 7,143 | |
| 1968 | 7,743 | |
| 1969 | 8,389 | |
| 1970 | 8,734 | |
| 1971 | 9,028 | |
| 1972 | 9,697 | |
| 1973 | 10,512 | |
| 1974 | 11,197 | |
| 1975 | 11,800 | |
| 1976 | 12,686 | |
| 1977 | 13,572 | |
| 1978 | 15,064 | |
| 1979 | 16,461 | |
| 1980 | 17,710 | |
| 1981 | 19,074 | |
| 1982 | 20,171 | |
| 1983 | 20,885 | |
| 1984 | 22,415 | |
| 1985 | 23,618 | |
| 1986 | 24,897 | |
| 1987 | 26,061 | |
| 1988 | 27,225 | |
| 1989 | 28,906 | |
| 1990 | 29,943 | |
| 1991 | 30,126 | |
| 1992 | 30,636 | |
| 1993 | 31,241 | |
| 1994 | 32,264 | |
| 1995 | 34,076 | |
| 1996 | 35,492 | |
| 1997 | 37,005 | |
| 1998 | 38,885 | |
| 1999 | 40,696 | |
| 2000 | 41,990 | |
| 2001 | 42,228 | |
| 2002 | 42,409 | |
| 2003 | 43,318 | |
| 2004 | 44,334 | |
| 2005 | 46,326 | |
| 2006 | 48,201 | |
| 2007 | 50,233 | |
| 2008 | 50,303 | |
| 2009 | 49,777 | |
| 2010 | 49,276 | |
| 2011 | 50,054 | |
| 2012 | 51,017 | |
| 2013 | 51,939 | Old methodology |
| 2013 | 53,585 | New methodology (CPS redesign) |
| 2014 | 53,657 | New methodology |
| 2015 | 56,516 | |
| 2016 | 59,039 | |
| 2017 | 61,372 | Legacy processing system |
| 2017 | 61,136 | Updated processing system |
| 2018 | 63,179 | Updated processing system |
| 2019 | 68,700 | FRED; large jump partly reflects updated processing |
| 2020 | 68,010 | Pandemic year; stimulus payments included in money income |
| 2021 | 70,780 | |
| 2022 | 74,580 | |
| 2023 | 80,610 | |
| 2024 | 83,730 | |

## Gaps and Caveats

- **No data before 1967.** The Census Bureau did not track household income before 1967. Prior to that, only family income was measured (ticket 004 covers the 1947–1966 reconstruction).
- **2013 methodology break (~3.2% jump).** The CPS redesign added new income questions that captured previously unmeasured income. The new-methodology value ($53,585) is the one that is consistent with 2014+ data. The old-methodology value ($51,939) is consistent with 2012 and earlier. For graphing, use the new-methodology 2013 value and accept a small artificial bump relative to 2012.
- **2017 processing system change.** The Census updated its data processing system. The two 2017 estimates differ by ~$236 (not statistically significant). FRED uses the updated processing system value ($61,140, rounded from Census's $61,136). For continuity with 2018+, use the updated processing system value.
- **2019–2024 values from FRED.** These are rounded to the nearest $10 compared to the Census H-5 table's more precise values. The H-5 table file accessed was last updated through 2018. Once the Census updates H-5 through 2024, slightly more precise values will be available, but the difference is negligible for ratio computations.
- **2020 anomaly.** The pandemic year shows an unusual pattern: median household income was essentially flat ($68,010 vs. $68,700 in 2019) despite massive GDP contraction. This reflects stimulus payments (Economic Impact Payments) being counted as income, partially offsetting job losses. The 2020 CPS ASEC also had lower response rates due to COVID, which may introduce measurement error.
- **"Money income" excludes employer health insurance, noncash transfers, and capital gains.** This is important for the share-of-pie calculation: the median person's "true" compensation is higher than what this series shows, because employer health insurance premiums (ticket 018) are invisible here. The CBO data (tickets 011–013) uses a broader income definition.
- **Confidence:**
  - 1967–2012: **High.** Census CPS is the gold standard for income measurement. Minor weighting/sample changes over the decades are well-documented and small.
  - 2013: **Medium.** The methodology break creates ambiguity about the "true" level. The trend before and after is solid, but the exact 2013 level depends on which methodology you use.
  - 2014–2024: **High.** Consistent methodology (post-2013 redesign, post-2017 processing update).
<!-- COMPLETE -->
