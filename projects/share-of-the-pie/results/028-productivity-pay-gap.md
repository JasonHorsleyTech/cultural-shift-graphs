# Result: Productivity vs Median Compensation (EPI/BLS), 1947–2024

## Source
- **Primary source:** BLS Major Sector Productivity and Costs, via FRED — OPHNFB (output per hour, nonfarm business, index 2017=100), COMPRNFB (real hourly compensation, all workers, nonfarm business, index 2017=100)
- **Secondary source:** BLS Current Population Survey via FRED — LES1252881600Q (median usual weekly real earnings, 1982-84 dollars), available 1979–2024
- **Tertiary source:** Economic Policy Institute (EPI), "The Productivity–Pay Gap" (epi.org/productivity-pay-gap/) — published compilation with different methodology (net productivity, production/nonsupervisory workers)
- **Date accessed:** 2026-05-01

## Methodology

### What is measured
Three series capturing the productivity-pay relationship from different angles:

1. **Productivity (Output per Hour):** BLS nonfarm business sector labor productivity index (OPHNFB). Real output divided by hours worked for all persons (employees, proprietors, unpaid family workers). Deflated by the implicit price deflator (IPD) for nonfarm business output. This is GROSS productivity (before depreciation). Index 2017=100; rebased below to 1948=100.

2. **Average Real Hourly Compensation (All Workers):** BLS nonfarm business sector real hourly compensation (COMPRNFB). Total compensation (wages + benefits) per hour worked for all workers, deflated by CPI-U. This is MEAN compensation for ALL workers — not median, not production/nonsupervisory. Index 2017=100; rebased below to 1948=100.

3. **Median Real Weekly Earnings:** BLS median usual weekly earnings of full-time wage and salary workers, in constant 1982-84 dollars (LES1252881600Q). Available 1979–2024 only. This captures the MEDIAN worker — the person in the middle of the distribution.

### How this differs from EPI's famous chart
The EPI productivity-pay gap chart uses slightly different definitions that produce a larger gap:
- **EPI uses NET productivity** (gross output minus depreciation), which grows ~10-15% slower than gross over long periods because depreciation's share of GDP has risen.
- **EPI deflates productivity with IPD but wages with CPI-U-RS.** The CPI has historically risen faster than the IPD (the "deflator wedge"), making real wages look flatter. This accounts for roughly 1/3 of the measured gap.
- **EPI uses production/nonsupervisory workers** (~80% of workforce), not all workers. This excludes managers and professionals whose compensation grew faster, producing a lower compensation line than the all-worker average.
- **EPI's base year is 1948** with values expressed as cumulative percent change.

The data below uses BLS published indexes directly, making it independently verifiable. The EPI's version is an analytical construction that emphasizes certain real phenomena (rising inequality, deflator divergence, rising depreciation) but should be understood as one interpretation of the underlying data.

### Key known findings (cross-reference)
The EPI reports these cumulative changes for validation:
- 1948–1973: Net productivity +96.7%, typical worker hourly compensation +91.3% (rough lockstep)
- 1948–1979: Net productivity +112.5%, typical worker compensation +90.2% (gap opens)
- 1979–2019: Net productivity +85.1%, typical worker compensation +13.2% (massive divergence)

## Data

### Table 1: BLS Productivity and Average Compensation Indexes (rebased to 1948=100)

| Year | Productivity Index (1948=100) | Avg Real Hourly Compensation Index (1948=100) | Median Real Weekly Earnings (1982-84 $) |
|------|-------------------------------|----------------------------------------------|----------------------------------------|
| 1947 | 97.5 | 99.0 | -- |
| 1948 | 100.0 | 100.0 | -- |
| 1949 | 103.2 | 103.9 | -- |
| 1950 | 110.1 | 108.9 | -- |
| 1951 | 112.9 | 109.7 | -- |
| 1952 | 115.1 | 113.2 | -- |
| 1953 | 117.9 | 118.7 | -- |
| 1954 | 120.2 | 121.9 | -- |
| 1955 | 125.3 | 126.7 | -- |
| 1956 | 124.6 | 132.5 | -- |
| 1957 | 127.8 | 135.6 | -- |
| 1958 | 130.7 | 137.1 | -- |
| 1959 | 135.4 | 141.2 | -- |
| 1960 | 137.0 | 145.1 | -- |
| 1961 | 141.4 | 148.3 | -- |
| 1962 | 147.9 | 152.4 | -- |
| 1963 | 152.9 | 155.7 | -- |
| 1964 | 157.0 | 158.1 | -- |
| 1965 | 162.0 | 160.8 | -- |
| 1966 | 167.8 | 165.4 | -- |
| 1967 | 170.9 | 170.3 | -- |
| 1968 | 176.9 | 175.6 | -- |
| 1969 | 177.2 | 178.0 | -- |
| 1970 | 179.8 | 179.7 | -- |
| 1971 | 186.8 | 182.9 | -- |
| 1972 | 193.2 | 188.7 | -- |
| 1973 | 199.2 | 191.1 | -- |
| 1974 | 195.9 | 188.4 | -- |
| 1975 | 201.1 | 190.6 | -- |
| 1976 | 208.1 | 194.2 | -- |
| 1977 | 211.7 | 197.3 | -- |
| 1978 | 214.7 | 200.2 | -- |
| 1979 | 214.4 | 200.4 | 332 |
| 1980 | 214.3 | 199.7 | 318 |
| 1981 | 217.4 | 199.8 | 312 |
| 1982 | 215.6 | 202.1 | 313 |
| 1983 | 224.4 | 202.6 | 314 |
| 1984 | 229.5 | 202.8 | 314 |
| 1985 | 233.4 | 205.8 | 319 |
| 1986 | 240.4 | 213.8 | 327 |
| 1987 | 241.7 | 214.8 | 329 |
| 1988 | 245.7 | 217.9 | 326 |
| 1989 | 247.8 | 214.9 | 322 |
| 1990 | 252.0 | 217.0 | 316 |
| 1991 | 256.1 | 219.3 | 313 |
| 1992 | 267.5 | 227.2 | 314 |
| 1993 | 267.8 | 224.4 | 318 |
| 1994 | 269.7 | 221.9 | 315 |
| 1995 | 272.6 | 222.1 | 314 |
| 1996 | 278.3 | 223.7 | 313 |
| 1997 | 283.7 | 227.5 | 314 |
| 1998 | 293.2 | 237.5 | 322 |
| 1999 | 304.7 | 243.3 | 330 |
| 2000 | 313.8 | 251.9 | 334 |
| 2001 | 321.9 | 255.6 | 337 |
| 2002 | 335.6 | 257.4 | 338 |
| 2003 | 348.0 | 261.0 | 337 |
| 2004 | 358.4 | 265.8 | 338 |
| 2005 | 366.2 | 266.5 | 333 |
| 2006 | 369.9 | 268.1 | 333 |
| 2007 | 375.7 | 271.5 | 335 |
| 2008 | 380.7 | 269.5 | 335 |
| 2009 | 396.2 | 273.9 | 345 |
| 2010 | 408.7 | 274.1 | 342 |
| 2011 | 408.6 | 271.3 | 336 |
| 2012 | 412.4 | 272.3 | 335 |
| 2013 | 414.9 | 271.2 | 334 |
| 2014 | 419.1 | 274.0 | 334 |
| 2015 | 424.4 | 281.9 | 341 |
| 2016 | 427.0 | 281.6 | 347 |
| 2017 | 433.4 | 285.7 | 351 |
| 2018 | 439.5 | 288.3 | 353 |
| 2019 | 448.9 | 293.7 | 359 |
| 2020 | 472.7 | 313.5 | 380 |
| 2021 | 482.4 | 313.9 | 368 |
| 2022 | 475.4 | 301.1 | 362 |
| 2023 | 485.3 | 301.0 | 366 |
| 2024 | 499.4 | 308.1 | 370 |

### Table 2: Key Ratios and Growth Summary

| Period | Productivity Growth | Avg Comp Growth | Median Earnings Growth | Productivity-Median Gap |
|--------|--------------------|-----------------|-----------------------|------------------------|
| 1948–1973 | +99.2% | +91.1% | -- | ~8 pp |
| 1948–1979 | +114.4% | +100.4% | -- | ~14 pp |
| 1979–2024 | +133.0% | +53.7% | +11.4% | ~122 pp |
| 1948–2024 | +399.4% | +208.1% | -- | ~191 pp |

### Table 3: EPI-Style Cumulative Percent Change (from published EPI anchor points)

The EPI chart shows larger divergence due to methodological differences (see Methodology). Key anchor points from EPI publications:

| Year | Net Productivity (cum. % from 1948) | Typical Worker Hourly Comp (cum. % from 1948) |
|------|-------------------------------------|----------------------------------------------|
| 1948 | 0.0% | 0.0% |
| 1950 | 10.5% | 9.3% |
| 1956 | 33.9% | 26.4% |
| 1960 | 45.4% | 40.1% |
| 1973 | ~96.7% | ~91.3% |
| 1979 | 112.5% | 90.2% |
| 2019 | ~160% | ~26% |
| 2023 | ~170% | ~30% (est.) |

## Gaps and Caveats

- **1947–1978 median earnings: missing.** The BLS median usual weekly earnings series begins in 1979. Before that, there is no directly comparable median earnings series from BLS. The EPI reconstructs a proxy using production/nonsupervisory worker hourly earnings, which is the closest available but is not a true median.
- **2020 anomaly.** The pandemic year shows an artificial spike in both productivity (denominator collapse: hours fell faster than output) and in median earnings (low-wage workers disproportionately lost jobs, compositionally raising the median). These are real measurements but don't reflect improved living standards.
- **Average vs median compensation.** COMPRNFB is mean compensation for all workers. It rose 208% since 1948 because it includes high earners whose compensation soared. Median weekly earnings rose only 11.4% since 1979. The gap between mean and median IS inequality — the same story as this project's primary graph line.
- **Deflator wedge.** The productivity index is deflated by the IPD (output prices), while compensation is deflated by the CPI (consumer prices). The CPI has risen ~0.3–0.4 pp/year faster than the IPD since the 1970s, partly because import prices (cheaper consumer goods) held down consumer prices less than domestic output prices. This means about 1/3 of the apparent productivity-pay gap is a measurement artifact of using different deflators. If both are deflated by CPI, the gap narrows but does not close.
- **Benefits vs wages.** COMPRNFB includes employer-paid benefits (especially health insurance). If we looked at wages alone (excluding benefits), the gap would be even larger — confirming the health cost story from tickets 018–020.
- **Gross vs net productivity.** The BLS index (OPHNFB) is gross output per hour. Depreciation has risen from ~10% to ~16% of GDP since 1947, so net productivity grew ~10-15 percentage points less than gross over the full period. The EPI uses net productivity, partially explaining their different numbers.

### Confidence assessment
- **Productivity index (1947–2024):** High confidence. BLS publishes this directly; methodology is stable and well-documented.
- **Average real hourly compensation (1947–2024):** High confidence. Same source, same methodology.
- **Median real weekly earnings (1979–2024):** High confidence for post-1979 period. CPS-based, widely used.
- **EPI anchor points:** Medium confidence. Reconstructed from multiple EPI publications across different years; exact values may differ slightly from the latest EPI update.
- **Pre-1979 median proxy:** Not available in this dataset. The absence is itself informative — the BLS simply didn't track a comparable median measure before 1979.

### Interpretation for this project's graph
This data validates the primary "share of the pie" story from a different angle:
- **1948–1973:** Productivity and compensation grew together. The median worker captured roughly their share of output growth. This is the "golden age" baseline.
- **1973–2024:** Productivity kept growing; median compensation flatlined. The divergence is real regardless of which methodology you use — it shows up in BLS averages, EPI's production-worker proxy, and median weekly earnings.
- **Three wedges explain the gap:** (1) Rising inequality (mean grew much more than median), (2) deflator divergence (CPI vs IPD), (3) rising depreciation (gross vs net). Together they account for all of the gap, but the first wedge (inequality) is by far the largest.
<!-- COMPLETE -->
