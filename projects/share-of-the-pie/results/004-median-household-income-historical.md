# Result: Median Household/Family Income Estimates, 1947–1966

## Source
- **Primary source:** U.S. Census Bureau, Current Population Survey (CPS), Historical Income Table F-7: "Type of Family, All Races by Median and Mean Income: 1947 to 2018." Downloaded from https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-income-families/f07ar.xls
- **Secondary source (cross-validation):** FRED series MEFAINUSA646N (Median Family Income in the United States, nominal dollars), sourced from Census CPS ASEC. Values for 1953–1966 match Table F-7 exactly. https://fred.stlouisfed.org/series/MEFAINUSA646N
- **Tertiary source (cross-validation):** NCES Youth Indicators 1996, Table 16 — Median family income by race/ethnicity, 1950–1993. 5-year benchmarks (1950, 1955, 1960, 1965) match Table F-7 exactly. https://nces.ed.gov/pubs98/yi/y9616a.asp
- **Date accessed:** 2026-04-28

## Methodology
- **Definition:** Median total money income of all families in the United States, in current (nominal) dollars. A "family" is defined as two or more persons related by birth, marriage, or adoption and residing together. This EXCLUDES non-family households (persons living alone or with unrelated individuals only).
- **Universe:** All families, all races. Families as of March of the following year (e.g., the 1947 figure was collected in the CPS fielded in early 1948). Income refers to the prior calendar year.
- **Why family, not household:** The Census Bureau did not tabulate "household" income as a separate concept until 1967. Before that, the income unit was the "family." The household concept is broader — it includes single-person households and non-family groups. In the 1947–1966 era, non-family households were roughly 15–17% of all households and generally had lower incomes, so **family** median income runs higher than **household** median income for any given year.
- **Splice point (1966→1967):** In 1966, median family income was $7,532 (Table F-7). In 1967, median family income was $7,933 while median household income was $7,143 (Table H-5, from ticket 003). The gap of ~$790 (~10%) between family and household median income in 1967 reflects the inclusion of lower-income non-family households. The Vue component will need to handle this series break when connecting pre-1967 family data to post-1967 household data — either by using family income throughout (Table F-7 continues past 1967) or by noting the discontinuity.
- **Known methodology changes (Census footnotes):**
  - **(5) 1947:** Based on 1940 census population controls and sample design. Income data collected in the CPS for the first time in this period.
  - **(6) 1949:** Revised CPS processing procedures introduced.
  - **(7) 1952:** Full implementation of revised CPS sample based on 1950 census and new CPS questionnaire.
  - **(8) 1961:** Implementation of population controls based on 1960 census.
  - **(9) 1962:** Full implementation of 1960 census-based sample design and revised estimation procedures.
  - **(10) 1965:** Implementation of new CPS processing/imputation procedures.
  - **(11) 1966:** CPS questionnaire expanded to ask eight income questions (up from fewer categories), improving income measurement.

## Data

| Year | Median Family Income ($) | Number of Families (thousands) | Mean Family Income ($) | Source | Confidence |
|------|--------------------------|-------------------------------|------------------------|--------|------------|
| 1947 | 3,031 | 37,237 | 3,546 | Census Table F-7 (CPS) | medium |
| 1948 | 3,187 | 38,624 | 3,671 | Census Table F-7 (CPS) | medium |
| 1949 | 3,107 | 39,303 | 3,569 | Census Table F-7 (CPS) | medium |
| 1950 | 3,319 | 39,929 | 3,815 | Census Table F-7 (CPS) | medium |
| 1951 | 3,709 | 40,578 | 4,194 | Census Table F-7 (CPS) | medium |
| 1952 | 3,890 | 40,832 | 4,457 | Census Table F-7 (CPS) | medium |
| 1953 | 4,242 | 41,202 | 4,706 | Census Table F-7 (CPS); FRED confirms | high |
| 1954 | 4,167 | 41,951 | 4,684 | Census Table F-7 (CPS); FRED confirms | high |
| 1955 | 4,418 | 42,889 | 4,962 | Census Table F-7 (CPS); FRED confirms | high |
| 1956 | 4,780 | 43,497 | 5,341 | Census Table F-7 (CPS); FRED confirms | high |
| 1957 | 4,966 | 43,696 | 5,443 | Census Table F-7 (CPS); FRED confirms | high |
| 1958 | 5,087 | 44,232 | 5,565 | Census Table F-7 (CPS); FRED confirms | high |
| 1959 | 5,417 | 45,111 | 5,976 | Census Table F-7 (CPS); FRED confirms | high |
| 1960 | 5,620 | 45,539 | 6,227 | Census Table F-7 (CPS); FRED confirms | high |
| 1961 | 5,735 | 46,418 | 6,471 | Census Table F-7 (CPS); FRED confirms | high |
| 1962 | 5,956 | 47,059 | 6,670 | Census Table F-7 (CPS); FRED confirms | high |
| 1963 | 6,249 | 47,540 | 6,998 | Census Table F-7 (CPS); FRED confirms | high |
| 1964 | 6,569 | 47,956 | 7,336 | Census Table F-7 (CPS); FRED confirms | high |
| 1965 | 6,957 | 48,509 | 7,704 | Census Table F-7 (CPS); FRED confirms | high |
| 1966 | 7,532 | 49,214 | 8,395 | Census Table F-7 (CPS); FRED confirms | high |

## Gaps and Caveats

- **No missing years.** All 20 years (1947–1966) have data points directly from Census Table F-7. No interpolation was needed.
- **1947–1952 medium confidence:** These years are based on early CPS sample designs (rooted in 1940 census controls) and less sophisticated questionnaires. The Census Bureau itself flags these years with footnotes about methodology changes. The figures are the best available but have wider sampling error than later years. The 1949 dip ($3,107, below 1948's $3,187) reflects the 1948–49 recession and is plausible, not an artifact.
- **1954 dip:** $4,167, below 1953's $4,242 — consistent with the 1953–54 recession.
- **Family ≠ household:** This is the most important caveat. Pre-1967 data measures **family** income, while the post-1967 data in ticket 003 measures **household** income. Family median consistently runs ~10% above household median because non-family households (predominantly single persons with lower income) are excluded. In the graph-building phase, options include: (a) use family income for the full run (Table F-7 continues to 2018), (b) splice with an adjustment factor, or (c) show the break explicitly.
- **Mean/median ratio:** The ratio of mean to median family income was ~1.17 in 1947 and ~1.11 in 1966, suggesting income distribution was slightly more compressed during the postwar boom than in earlier years. This ratio widens considerably in later decades.
- **Plausibility check:** The ticket specified expected ranges — 1947: ~$3,000–$3,500 (actual: $3,031 ✓), 1955: ~$4,400–$4,800 (actual: $4,418 ✓), 1960: ~$5,600–$6,000 (actual: $5,620 ✓), 1966: ~$7,400–$7,700 (actual: $7,532 ✓). All within expected ranges. Values increase steadily, consistent with the postwar boom.
- **Connection to 1967:** The 1966 family median ($7,532) connects to the 1967 family median ($7,933, a 5.3% increase). The 1967 *household* median ($7,143 from ticket 003) is lower because it includes non-family households.

<!-- COMPLETE -->
