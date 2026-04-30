# Result: Median Earnings, Full-Time Year-Round All Workers, 1955–2024

## Source
- **Primary source:** U.S. Census Bureau, Current Population Survey, 1956–2025 Annual Social and Economic Supplements (CPS ASEC). Historical Income Tables: People, Table P-36 — "Full-Time, Year-Round All Workers by Median Income and Sex: 1955 to 2024." Downloaded from https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-income-people/p36ar.xlsx
- **Secondary source:** Census Bureau, Table A-7 — "Number and Real Median Earnings of Total Workers and Full-Time, Year-Round Workers With Earnings by Sex and Female-to-Male Earnings Ratio: 1960 to 2024." Downloaded from https://www2.census.gov/programs-surveys/demo/tables/p60/286/tableA7.xlsx. Used for cross-validation of earnings vs. income distinction.
- **Date accessed:** 2026-04-30

## Methodology
- **Key finding: No direct Census "both sexes combined" FTYR median exists as a published historical time series.** Census Table P-36 publishes median income for FTYR workers by sex only (Male and Female columns). Census Table A-7 likewise publishes FTYR median earnings by sex only plus a female-to-male ratio. No Census table provides a combined both-sexes FTYR median going back to 1960.
- **What is provided instead:** FTYR worker counts by sex (from P-36, available 1966–2024) and **weighted-average estimates** of the combined median, computed as: `(male_count × male_median + female_count × female_median) / (male_count + female_count)`.
- **Important: A weighted average of medians is NOT the true combined median.** The true median of a merged distribution depends on the full CDFs, not just the two sub-group medians. Cross-checking against the one year where Census reports a combined figure (2024: $63,360 for FTYR median earnings from P-60-286), the weighted average of the corresponding A-7 earnings data gives ~$65,100, overestimating by ~2.7%. The weighted average systematically overestimates because adding the lower-earning female group pulls the true combined median down more than simple weighting captures.
- **Income vs. Earnings distinction:** Table P-36 reports median **income** (including non-earnings sources), while the TypeScript field is named `workingAgeMedianEarnings`. For consistency with tickets 014 (men) and 015 (women), which both used P-36 income data, the weighted averages here also use P-36 income. For FTYR workers, income exceeds earnings by roughly 6% (comparing P-36 to A-7 for 2024: male $75,440 vs $71,090; female $61,020 vs $57,520).
- **Universe:** All persons 15 years old and over (beginning 1980), 14+ prior. **All ages**, not restricted to 25–64. Same all-ages FTYR population as tickets 014 and 015.
- **Recommendation for graph phase:** Rather than using these weighted averages directly, consider computing the combined figure from the sex-specific medians in tickets 014/015 using the worker counts below. An adjustment factor of approximately 0.97 (reducing the weighted average by ~3%) would better approximate the true combined median, based on the 2024 cross-check. Alternatively, for years where the female share of FTYR workers was smaller (pre-1980, when women were <35% of FTYR), the weighted average is dominated by men and the bias is smaller (~1–2%).

## Data

All values are nominal (current) U.S. dollars. The Weighted Average column is computed from sex-specific P-36 medians and counts.

| Year | Male FTYR Count (thousands) | Female FTYR Count (thousands) | Female Share of FTYR (%) | Weighted Avg Median Income, All FTYR ($) |
|------|----------------------------|------------------------------|--------------------------|------------------------------------------|
| 2024 | 68840 | 53840 | 43.9 | 69112 |
| 2023 | 68480 | 52850 | 43.6 | 65119 |
| 2022 | 68570 | 52790 | 43.5 | 61560 |
| 2021 | 66370 | 50990 | 43.4 | 59065 |
| 2020 | 60290 | 46000 | 43.3 | 59604 |
| 2019 | 67130 | 52040 | 43.7 | 56186 |
| 2018 | 67210 | 50800 | 43.0 | 52618 |
| 2017 | 66510 | 49240 | 42.5 | 51386 |
| 2016 | 64960 | 48340 | 42.7 | 49088 |
| 2015 | 63890 | 47230 | 42.5 | 47787 |
| 2014 | 62460 | 46230 | 42.5 | 46926 |
| 2013 | 61240 | 44630 | 42.2 | 46901 |
| 2012 | 59010 | 44050 | 42.7 | 46124 |
| 2011 | 58000 | 43680 | 43.0 | 45324 |
| 2010 | 56290 | 43180 | 43.4 | 45067 |
| 2009 | 56060 | 43240 | 43.5 | 43965 |
| 2008 | 59860 | 44160 | 42.5 | 43072 |
| 2007 | 62990 | 45620 | 42.0 | 41999 |
| 2006 | 63060 | 44670 | 41.5 | 40826 |
| 2005 | 61500 | 43360 | 41.4 | 38497 |
| 2004 | 60090 | 42410 | 41.4 | 37719 |
| 2003 | 58780 | 41920 | 41.6 | 37400 |
| 2002 | 58760 | 41880 | 41.6 | 36540 |
| 2001 | 58720 | 41650 | 41.5 | 36107 |
| 2000 | 59610 | 41730 | 41.2 | 34867 |
| 1999 | 58310 | 40890 | 41.2 | 33295 |
| 1998 | 56950 | 38810 | 40.5 | 32444 |
| 1997 | 54910 | 37700 | 40.7 | 31497 |
| 1996 | 53790 | 36450 | 40.4 | 30066 |
| 1995 | 52670 | 35500 | 40.3 | 28810 |
| 1994 | 51590 | 34180 | 39.9 | 28286 |
| 1993 | 49830 | 33540 | 40.2 | 27616 |
| 1992 | 48550 | 33270 | 40.7 | 27276 |
| 1991 | 47890 | 32480 | 40.4 | 26660 |
| 1990 | 49170 | 31730 | 39.2 | 25689 |
| 1989 | 49680 | 31390 | 38.7 | 25020 |
| 1988 | 48290 | 31310 | 39.3 | 23883 |
| 1987 | 47020 | 29950 | 38.9 | 23131 |
| 1986 | 45920 | 28460 | 38.3 | 22427 |
| 1985 | 44950 | 27440 | 37.9 | 21683 |
| 1984 | 43820 | 26560 | 37.7 | 20762 |
| 1983 | 41540 | 25250 | 37.8 | 19474 |
| 1982 | 40120 | 23810 | 37.2 | 18680 |
| 1981 | 41790 | 23430 | 35.9 | 17733 |
| 1980 | 41900 | 22970 | 35.4 | 16486 |
| 1979 | 42450 | 22200 | 34.3 | 15093 |
| 1978 | 41040 | 20990 | 33.8 | 13888 |
| 1977 | 39290 | 19280 | 32.9 | 13011 |
| 1976 | 38200 | 18120 | 32.2 | 12075 |
| 1975 | 37280 | 17480 | 31.9 | 11267 |
| 1974 | 37930 | 16970 | 30.9 | 10619 |
| 1973 | 39590 | 17220 | 30.3 | 9960 |
| 1972 | 38200 | 16710 | 30.4 | 9175 |
| 1971 | 36840 | 16040 | 30.3 | 8439 |
| 1970 | 36150 | 15520 | 30.0 | 8059 |
| 1969 | 37020 | 15420 | 29.4 | 7612 |
| 1968 | 37070 | 15050 | 28.9 | 6877 |
| 1967 | 36660 | 14870 | 28.9 | 6397 |
| 1966 | 35570 | 13230 | 27.1 | 6161 |
| 1965 | -- | -- | -- | -- |
| 1964 | -- | -- | -- | -- |
| 1963 | -- | -- | -- | -- |
| 1962 | -- | -- | -- | -- |
| 1961 | -- | -- | -- | -- |
| 1960 | -- | -- | -- | -- |
| 1959 | -- | -- | -- | -- |
| 1958 | -- | -- | -- | -- |
| 1957 | -- | -- | -- | -- |
| 1956 | -- | -- | -- | -- |
| 1955 | -- | -- | -- | -- |

### Methodology break handling

For years with dual Census estimates (methodology changes), the **new methodology** estimate is used, consistent with tickets 014 and 015:
- **2013:** Uses new methodology (footnote 39). Old methodology (footnote 38) values differ by <1%.
- **2017:** Uses new processing (footnote 40). Old processing values differ by ~0.6% for men and ~3.3% for women.

## Gaps and Caveats

- **No direct combined both-sexes series exists.** This is the central finding of this ticket. The Census Bureau publishes FTYR median income/earnings by sex (Table P-36, Table A-7) but does not publish a consistent historical time series combining both sexes. The combined figure is occasionally reported in the text of annual P-60 reports (e.g., $63,360 for 2024 FTYR median earnings in P-60-286) but is not available as a downloadable historical table.
- **Weighted average overestimates the true combined median by ~3%.** Cross-checked against the 2024 Census-reported combined FTYR median earnings of $63,360: the weighted average of A-7 sex-specific earnings medians gives ~$65,100 (overestimate of 2.7%). The bias increases as the female share of the FTYR workforce grows (from ~27% in 1966 to ~44% in 2024) and as the male-female earnings gap widens. For years before 1980 (female share <35%), the bias is likely 1–2%.
- **Age restriction not achieved.** Data is for all-ages (15+/14+) FTYR workers, not the preferred 25–64 age band. Consistent with tickets 014 (men) and 015 (women). The 25–64 median would be roughly 2–5% higher than all-ages FTYR.
- **Pre-1966 worker counts unavailable.** Census did not publish FTYR worker counts by sex before 1966 (marked "N" in Table P-36). No weighted estimate can be computed for 1955–1965. For those years, only the sex-specific medians from tickets 014 and 015 are available.
- **2020 pandemic anomaly.** Both male and female FTYR worker counts dropped sharply in 2020 (men: 67,130K → 60,290K; women: 52,040K → 46,000K). The weighted average for 2020 ($59,604) is artificially elevated due to compositional effects — lower-wage workers disproportionately left FTYR status. Note that the 2020 weighted average is higher than 2019 ($56,186) despite the recession.
- **Female share trend is itself meaningful.** Women went from 27% of FTYR workers in 1966 to 44% in 2024. This secular shift means the combined median increasingly reflects women's earnings over time. Since women's median has always been lower than men's, the combined median has been pulled down more over time — partially offsetting the convergence of women's earnings toward men's.
- **Confidence assessment:**
  - 1967–2024 worker counts: **High** — direct CPS ASEC survey estimates.
  - 1966 worker counts: **Medium** — pre-redesign CPS data.
  - Weighted average estimates 1966–2024: **Medium** — correct methodology but known ~3% systematic overestimation vs. true combined median.
  - 1955–1965: **Not available** — no worker counts to compute weighted estimates.

<!-- COMPLETE -->
