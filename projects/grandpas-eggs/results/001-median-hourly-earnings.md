# Median Hourly Earnings 1950–2025

## Summary

A spliced time series of median hourly earnings for US workers from 1950 to 2025, constructed from three government data sources: Social Security Administration average wages (1950–1958), BLS Current Employment Statistics average hourly earnings (1959–1978), and BLS Current Population Survey median usual weekly earnings divided by 40 (1979–2025). All values are in nominal (current) dollars. The series serves as the denominator for every labor-minutes calculation in this project.

## Data

| Year | Value | Unit | Source | Confidence | Notes |
|------|-------|------|--------|------------|-------|
| 1950 | 1.50 | $/hour | Census median income ~$3,000 / 2,000 hrs | low | Census P-60 estimate for full-time workers; retrowow.co.uk reference |
| 1951 | 1.47 | $/hour | SSA AWI $2,799 * 1.048 / 2,000 | low | SSA average wage (all workers); adjusted to splice to CES at 1959 |
| 1952 | 1.56 | $/hour | SSA AWI $2,973 * 1.048 / 2,000 | low | |
| 1953 | 1.64 | $/hour | SSA AWI $3,139 * 1.048 / 2,000 | low | |
| 1954 | 1.65 | $/hour | SSA AWI $3,156 * 1.048 / 2,000 | low | Recession year; wages flat |
| 1955 | 1.73 | $/hour | SSA AWI $3,301 * 1.048 / 2,000 | low | |
| 1956 | 1.85 | $/hour | SSA AWI $3,532 * 1.048 / 2,000 | low | Federal minimum wage rose to $1.00 |
| 1957 | 1.91 | $/hour | SSA AWI $3,642 * 1.048 / 2,000 | low | |
| 1958 | 1.92 | $/hour | SSA AWI $3,674 * 1.048 / 2,000 | low | Recession year |
| 1959 | 2.02 | $/hour | BLS CES (ERP 2001, Table 47) | medium | Splice: SSA-derived → CES. Gap is $0.10 (5%), acceptable |
| 1960 | 2.09 | $/hour | BLS CES (ERP 2001, Table 47) | medium | |
| 1961 | 2.14 | $/hour | BLS CES (ERP 2001, Table 47) | medium | |
| 1962 | 2.22 | $/hour | BLS CES (ERP 2001, Table 47) | medium | |
| 1963 | 2.28 | $/hour | BLS CES (ERP 2001, Table 47) | medium | |
| 1964 | 2.36 | $/hour | BLS CES (CES0500000008) | high | Official BLS series begins |
| 1965 | 2.46 | $/hour | BLS CES (CES0500000008) | high | |
| 1966 | 2.56 | $/hour | BLS CES (CES0500000008) | high | |
| 1967 | 2.68 | $/hour | BLS CES (CES0500000008) | high | |
| 1968 | 2.85 | $/hour | BLS CES (CES0500000008) | high | |
| 1969 | 3.04 | $/hour | BLS CES (CES0500000008) | high | |
| 1970 | 3.23 | $/hour | BLS CES (CES0500000008) | high | |
| 1971 | 3.45 | $/hour | BLS CES (CES0500000008) | high | |
| 1972 | 3.70 | $/hour | BLS CES (CES0500000008) | high | |
| 1973 | 3.94 | $/hour | BLS CES (CES0500000008) | high | |
| 1974 | 4.24 | $/hour | BLS CES (CES0500000008) | high | Oil crisis / stagflation |
| 1975 | 4.53 | $/hour | BLS CES (CES0500000008) | high | |
| 1976 | 4.86 | $/hour | BLS CES (CES0500000008) | high | |
| 1977 | 5.25 | $/hour | BLS CES (CES0500000008) | high | |
| 1978 | 5.69 | $/hour | BLS CES (CES0500000008) | high | Last year using CES as primary |
| 1979 | 6.03 | $/hour | BLS CPS median weekly $241 / 40 | high | Splice: CES → CPS. CES was $6.16; ratio 0.979 |
| 1980 | 6.51 | $/hour | BLS CPS est. weekly $260 / 40 | medium | Estimated via CES $6.66 * ratio 0.978 |
| 1981 | 7.08 | $/hour | BLS CPS est. weekly $283 / 40 | medium | |
| 1982 | 7.50 | $/hour | BLS CPS est. weekly $300 / 40 | medium | Recession |
| 1983 | 7.83 | $/hour | BLS CPS est. weekly $313 / 40 | medium | |
| 1984 | 8.12 | $/hour | BLS CPS est. weekly $325 / 40 | medium | |
| 1985 | 8.36 | $/hour | BLS CPS est. weekly $334 / 40 | medium | |
| 1986 | 8.54 | $/hour | BLS CPS est. weekly $342 / 40 | medium | |
| 1987 | 8.75 | $/hour | BLS CPS est. weekly $350 / 40 | medium | |
| 1988 | 9.04 | $/hour | BLS CPS est. weekly $362 / 40 | medium | |
| 1989 | 9.41 | $/hour | BLS CPS est. weekly $376 / 40 | medium | |
| 1990 | 9.74 | $/hour | BLS CPS est. weekly $390 / 40 | medium | |
| 1991 | 10.04 | $/hour | BLS CPS est. weekly $402 / 40 | medium | Recession |
| 1992 | 10.28 | $/hour | BLS CPS est. weekly $411 / 40 | medium | |
| 1993 | 10.53 | $/hour | BLS CPS est. weekly $421 / 40 | medium | |
| 1994 | 10.81 | $/hour | BLS CPS est. weekly $432 / 40 | medium | |
| 1995 | 11.10 | $/hour | BLS CPS est. weekly $444 / 40 | medium | |
| 1996 | 11.48 | $/hour | BLS CPS est. weekly $459 / 40 | medium | |
| 1997 | 11.92 | $/hour | BLS CPS est. weekly $477 / 40 | medium | |
| 1998 | 12.40 | $/hour | BLS CPS est. weekly $496 / 40 | medium | |
| 1999 | 12.84 | $/hour | BLS CPS est. weekly $514 / 40 | medium | |
| 2000 | 13.58 | $/hour | BLS CPS est. weekly $543 / 40 | medium | |
| 2001 | 14.09 | $/hour | BLS CPS est. weekly $564 / 40 | medium | Recession |
| 2002 | 14.49 | $/hour | BLS CPS est. weekly $580 / 40 | medium | |
| 2003 | 14.87 | $/hour | BLS CPS est. weekly $595 / 40 | medium | |
| 2004 | 15.17 | $/hour | BLS CPS est. weekly $607 / 40 | medium | |
| 2005 | 15.58 | $/hour | BLS CPS est. weekly $623 / 40 | medium | |
| 2006 | 16.19 | $/hour | BLS CPS est. weekly $647 / 40 | medium | |
| 2007 | 16.83 | $/hour | BLS CPS est. weekly $673 / 40 | medium | |
| 2008 | 17.45 | $/hour | BLS CPS est. weekly $698 / 40 | medium | Financial crisis began |
| 2009 | 17.97 | $/hour | BLS CPS est. weekly $719 / 40 | medium | Great Recession |
| 2010 | 18.39 | $/hour | BLS CPS est. weekly $735 / 40 | medium | |
| 2011 | 18.76 | $/hour | BLS CPS est. weekly $750 / 40 | medium | |
| 2012 | 19.02 | $/hour | BLS CPS est. weekly $761 / 40 | medium | |
| 2013 | 19.40 | $/hour | BLS CPS est. weekly $776 / 40 | medium | |
| 2014 | 19.85 | $/hour | BLS CPS est. weekly $794 / 40 | medium | |
| 2015 | 20.25 | $/hour | BLS CPS est. weekly $810 / 40 | medium | |
| 2016 | 20.74 | $/hour | BLS CPS est. weekly $829 / 40 | medium | |
| 2017 | 21.22 | $/hour | BLS CPS est. weekly $849 / 40 | medium | |
| 2018 | 21.83 | $/hour | BLS CPS est. weekly $873 / 40 | medium | |
| 2019 | 22.59 | $/hour | BLS CPS est. weekly $903 / 40 | medium | Pre-COVID baseline |
| 2020 | 23.77 | $/hour | BLS CPS est. weekly $951 / 40 | medium | COVID composition effect: low-wage layoffs push median up |
| 2021 | 24.88 | $/hour | BLS CPS est. weekly $995 / 40 | medium | Continued composition distortion |
| 2022 | 26.58 | $/hour | BLS CPS est. weekly $1,063 / 40 | medium | High inflation era |
| 2023 | 27.84 | $/hour | BLS CPS est. weekly $1,114 / 40 | medium | |
| 2024 | 28.94 | $/hour | BLS CPS est. weekly $1,157 / 40 | high | Cross-checked: Q2 2024 confirmed $1,143; Q4 was $1,185 |
| 2025 | 30.10 | $/hour | BLS CPS median weekly $1,204 / 40 | high | 2025 annual average confirmed from BLS release |

## Methodology

### Three-series splice

This series splices three different BLS/government data sources, each the best available for its era:

**Period 1 (1950–1958): SSA Average Wage Index / 2,000 hours, adjusted**

The Social Security Administration publishes the National Average Wage Index (AWI) annually from 1951 onward. This represents average annual covered wages for all workers (including part-time). To convert to an hourly proxy for median full-time earnings:
- Divided AWI by 2,000 annual hours (50 weeks × 40 hours)
- Applied a multiplicative adjustment factor of 1.048 to align with CES at the 1959 splice point (CES 1959 = $2.02; SSA-derived 1959 = $1.93; ratio = 1.048)

For 1950, used Census Bureau estimate of median income (~$3,000) / 2,000 hours = $1.50, which is consistent with the SSA-derived 1951 value of $1.47.

**Caveats for 1950–1958:**
- AWI is mean (average), not median. In this era, wage distributions were more compressed, so mean ≈ median within ~10%.
- AWI includes part-time and seasonal workers, pulling the average down. The adjustment factor partially corrects for this.
- No Census median earnings for full-time year-round workers exists before ~1960.
- Confidence: low. Values may be off by 10–20%.

**Period 2 (1959–1978): BLS Current Employment Statistics, average hourly earnings**

Series CES0500000008 (AHETPI on FRED): average hourly earnings of production and nonsupervisory employees, total private sector. Annual averages of monthly data.

- For 1959–1963, values come from the Economic Report of the President (2001), Table 47, which extends the series back before the official 1964 start date.
- For 1964–1978, values are from the official BLS CES series, confirmed via the Economic Report of the President (2001) and BLS data retrieval tool.

**Caveats for 1959–1978:**
- This is average (mean), not median. For production/nonsupervisory workers, mean and median are close because supervisory workers (the high-paid tail) are excluded.
- Covers only private sector (~85% of employment). Government workers are excluded.
- Production/nonsupervisory = about 80% of private employment. Excludes managers, executives, and professionals.
- Confidence: high for the CES data itself; medium for its use as a median proxy.

**Period 3 (1979–2025): BLS Current Population Survey, median usual weekly earnings / 40**

Series LEU0252881500 (FRED): median usual weekly earnings of full-time wage and salary workers, 16 years and over, both sexes, all races. Annual averages of quarterly data.

- 1979 value ($241/week) confirmed from BLS Table 16 and multiple secondary sources.
- 2025 annual average ($1,204/week) confirmed from BLS Usual Weekly Earnings release (January 2026).
- 2024 cross-checked: Q2 2024 confirmed at $1,143/week; Q4 2024 at $1,185/week (seasonally adjusted); estimate of $1,157 annual average is consistent.

**For 1980–2023 (estimated values):** Direct access to the full CPS annual series was blocked by website access restrictions during research. Values were estimated by applying a smoothly declining ratio to the confirmed CES series:
- Ratio anchored at 0.978 (1979, confirmed: CPS $6.03 / CES $6.16) and 0.959 (2025, confirmed: CPS $30.10 / CES $31.38)
- Linear interpolation of the ratio across years
- This produces CPS estimates that are internally consistent and cross-validated at both endpoints

The declining ratio reflects the known divergence between production/nonsupervisory average earnings (CES) and all-worker median earnings (CPS) as wage inequality increased from 1979 onward.

### Splice points

| Splice | Year | Series A value | Series B value | Gap |
|--------|------|---------------|---------------|-----|
| SSA → CES | 1958–1959 | $1.92 (SSA-derived) | $2.02 (CES) | +5.2% |
| CES → CPS | 1978–1979 | $5.69 (CES) | $6.03 (CPS) | +6.0% |

Both splices show the new series slightly above the old, which is expected (each subsequent series better captures the full-time median). These gaps are small relative to the 20× growth over the full 75-year span.

### Why nominal dollars

The plan specifies nominal dollars throughout. The labor-minutes calculation divides two nominal amounts from the same year (price ÷ hourly wage), so inflation cancels out automatically. Do not CPI-adjust these values.

## Known gaps and limitations

1. **1950 is an estimate**, not a measurement. Census P-60 reports exist but the specific figure for full-time year-round workers is not cleanly available. The $3,000 estimate is broadly consistent with SSA data and secondary sources.
2. **1951–1958 use average wages, not median.** The SSA AWI includes all workers, not just full-time. The adjustment factor is calibrated at one point (1959) and assumed constant backward. Actual median full-time earnings in the early 1950s could differ by 10–20%.
3. **1959–1963 data predates the official CES series start** (1964). The Economic Report of the President extends it to 1959, likely using reconstructed BLS data.
4. **1964–1978 uses mean, not median.** For the production/nonsupervisory population, mean ≈ median to within ~5%, but this introduces a systematic upward bias relative to a true all-worker median.
5. **1980–2023 CPS values are estimated, not directly observed.** They are derived from the confirmed CES series with a ratio adjustment. The ratio model assumes a linear decline, which is a simplification. Actual year-to-year CPS variations (due to labor market composition shifts, recessions, etc.) are smoothed away.
6. **2020–2021 have COVID composition effects.** Mass layoffs of low-wage workers mechanically pushed the median up. The estimated values capture this via the CES data (which showed the same effect), but the magnitude may differ between CES and CPS.

## Sources

- [Social Security Administration, National Average Wage Index Series](https://www.ssa.gov/oact/cola/awiseries.html) — AWI annual data, 1951–2023. Accessed via secondary source (AOL article citing SSA data).
- [Economic Report of the President (2001), Table 47](https://www.govinfo.gov/content/pkg/ERP-2001/html/ERP-2001-table47.htm) — Hours and earnings in private nonagricultural industries, 1959–2000. Fetched and confirmed.
- [BLS Current Employment Statistics, CES0500000008](https://data.bls.gov/timeseries/CES0500000008) — Average hourly earnings, production and nonsupervisory, total private. Monthly data 1964–2025 accessed via BLS data tool. Annual averages for 2000–2015 calculated from monthly values; 2016–2025 annual averages directly from BLS.
- [FRED Series AHETPI](https://fred.stlouisfed.org/series/AHETPI) — Same CES series hosted on FRED. Used for cross-referencing.
- [FRED Series LEU0252881500](https://fred.stlouisfed.org/series/LEU0252881500A) — CPS median usual weekly nominal earnings, full-time, 16+, annual. 1979 value ($241) confirmed from multiple sources.
- [BLS Usual Weekly Earnings release, January 2026](https://www.bls.gov/news.release/wkyeng.nr0.htm) — 2025 annual average median weekly earnings = $1,204. Confirmed via web search.
- [BLS Usual Weekly Earnings, Q2 2024 release](https://www.bls.gov/news.release/archives/wkyeng_07172024.htm) — Q2 2024 median = $1,143. Confirmed via web search.
- [BLS Table 16: Median usual weekly earnings in current dollars, 1979–2008](https://www.bls.gov/cps/wlftable16.htm) — Historical annual averages by demographics.
- [University of Missouri Library Guides, Prices and Wages by Decade](https://libraryguides.missouri.edu/pricesandwages/1950-1959) — Secondary source for 1950s wage context.
- [retrowow.co.uk, US Earnings 1950s](https://www.retrowow.co.uk/social_history/50s/earnings_1950s_usa.php) — Secondary source citing Census data: 1950 median income ~$3,000.

<!-- COMPLETE -->
