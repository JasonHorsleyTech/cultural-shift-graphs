# Result: NDP Per Capita and Depreciation Share, 1947–2024

## Source
- **Primary source:** BEA NIPA Table 1.7.5, "Relation of Gross Domestic Product, Gross National Product, Net National Product, National Income, and Personal Income" (millions of dollars, annual). Downloaded from https://apps.bea.gov/iTable/ as Section 1 Excel file. Data published April 9, 2026.
- **Series used:** Line 1 (Gross domestic product, A191RC) and Line 5 (Consumption of fixed capital, A262RC).
- **Population denominator:** Derived from GDP (Table 1.7.5) divided by GDP per capita (FRED series A939RC0A052NBEA, as used in ticket 001). This yields the same midyear resident population BEA uses for its official per capita series.
- **Cross-validation:** CFC values for 2001–2024 match ycharts.com/indicators/us_consumption_of_fixed_capital_yearly (sourced from FRED COFC series) to within rounding.
- **Date accessed:** 2026-04-28

## Methodology
- **NDP definition:** Net Domestic Product = GDP minus Consumption of Fixed Capital (CFC). CFC measures the decline in value of the stock of fixed assets (structures, equipment, intellectual property products) due to wear, obsolescence, accidental damage, and aging. It is computed on a current-cost basis using BEA's geometric depreciation model.
- **NDP per capita:** Computed as NDP (millions) / midyear population. Population derived from GDP (millions) / GDP per capita (from ticket 001, BEA series A939RC0A052NBEA). This ensures the same population denominator is used across both GDP per capita and NDP per capita.
- **Depreciation share:** CFC / GDP × 100. This is the percentage of gross output consumed by capital depreciation.
- **Universe:** Total US economy (all sectors: private, government, households).
- **Known methodology changes:**
  - BEA comprehensive revisions roughly every 5 years affect both GDP and CFC. The latest (2023) revised historical values.
  - The 1999 SNA revision reclassified software as capital investment, increasing measured CFC. The 2013 comprehensive revision added R&D and entertainment originals as intellectual property products, further increasing CFC. These are real measurement improvements, not artifacts — they partly explain the rising depreciation share post-1990s.

## Data

| Year | NDP Per Capita ($) | Depreciation Share (%) |
|------|-------------------|----------------------|
| 1947 | 1530 | 11.67 |
| 1948 | 1658 | 11.41 |
| 1949 | 1610 | 11.85 |
| 1950 | 1757 | 11.14 |
| 1951 | 2004 | 10.87 |
| 1952 | 2081 | 11.05 |
| 1953 | 2166 | 11.17 |
| 1954 | 2122 | 11.77 |
| 1955 | 2278 | 11.49 |
| 1956 | 2349 | 12.05 |
| 1957 | 2424 | 12.43 |
| 1958 | 2404 | 12.98 |
| 1959 | 2576 | 12.55 |
| 1960 | 2625 | 12.52 |
| 1961 | 2676 | 12.56 |
| 1962 | 2840 | 12.27 |
| 1963 | 2955 | 12.24 |
| 1964 | 3137 | 12.04 |
| 1965 | 3366 | 11.86 |
| 1966 | 3652 | 11.72 |
| 1967 | 3806 | 12.04 |
| 1968 | 4121 | 12.05 |
| 1969 | 4403 | 12.27 |
| 1970 | 4566 | 12.75 |
| 1971 | 4892 | 12.78 |
| 1972 | 5326 | 12.59 |
| 1973 | 5882 | 12.54 |
| 1974 | 6257 | 13.39 |
| 1975 | 6697 | 14.16 |
| 1976 | 7397 | 13.89 |
| 1977 | 8134 | 13.92 |
| 1978 | 9093 | 13.91 |
| 1979 | 10011 | 14.23 |
| 1980 | 10666 | 14.99 |
| 1981 | 11825 | 15.19 |
| 1982 | 12087 | 16.06 |
| 1983 | 13107 | 15.48 |
| 1984 | 14549 | 14.82 |
| 1985 | 15508 | 14.75 |
| 1986 | 16181 | 14.96 |
| 1987 | 16985 | 15.04 |
| 1988 | 18167 | 14.98 |
| 1989 | 19417 | 14.86 |
| 1990 | 20283 | 14.90 |
| 1991 | 20612 | 15.14 |
| 1992 | 21641 | 14.73 |
| 1993 | 22495 | 14.63 |
| 1994 | 23653 | 14.49 |
| 1995 | 24448 | 14.69 |
| 1996 | 25574 | 14.56 |
| 1997 | 26884 | 14.45 |
| 1998 | 28075 | 14.45 |
| 1999 | 29472 | 14.53 |
| 2000 | 30949 | 14.74 |
| 2001 | 31492 | 15.12 |
| 2002 | 32196 | 15.17 |
| 2003 | 33505 | 15.01 |
| 2004 | 35448 | 14.91 |
| 2005 | 37393 | 15.12 |
| 2006 | 39125 | 15.38 |
| 2007 | 40509 | 15.56 |
| 2008 | 40752 | 15.97 |
| 2009 | 39405 | 16.38 |
| 2010 | 40855 | 15.88 |
| 2011 | 42029 | 15.86 |
| 2012 | 43462 | 15.85 |
| 2013 | 44778 | 15.89 |
| 2014 | 46272 | 16.01 |
| 2015 | 47723 | 15.98 |
| 2016 | 48664 | 16.00 |
| 2017 | 50368 | 16.06 |
| 2018 | 52750 | 16.04 |
| 2019 | 54649 | 16.14 |
| 2020 | 53497 | 16.95 |
| 2021 | 59714 | 16.31 |
| 2022 | 65043 | 16.53 |
| 2023 | 68946 | 16.43 |
| 2024 | 72042 | 16.37 |

## Gaps and Caveats
- **No missing data.** All 78 years (1947–2024) have values from BEA NIPA Table 1.7.5.
- **2024 is preliminary.** The BEA 2024 annual figures reflect the advance/second estimate and will be revised in subsequent annual and comprehensive updates.
- **2025 is excluded.** BEA publishes a 2025 value but it is even more preliminary (based on partial-year data). Excluded for consistency with ticket 001.
- **Depreciation share trend matches expectations:** ~11% in late 1940s/1950s, rising to ~12–13% in the 1960s–1970s, ~14–15% in the 1980s–1990s, and ~16% in the 2010s–2020s. The ticket expected "~10% in 1950s → ~13% in 1980s → ~15–16% in 2020s" — actual data starts slightly higher (~11%) but follows the same upward trajectory.
- **2020 spike (16.95%):** The pandemic year shows the highest depreciation share in the series because GDP contracted while CFC (based on accumulated capital stock) continued largely unchanged. This is mechanically correct, not an anomaly to smooth.
- **Intellectual property contribution:** The post-1999 rise in depreciation share partly reflects BEA reclassifying software (1999) and R&D/entertainment originals (2013) as capital investment. Software and IP depreciate faster than structures, pushing up the CFC/GDP ratio. This is a measurement improvement capturing real economic activity, but it means the 1947–1999 and 2000–2024 periods are not perfectly comparable in terms of what "depreciation" includes.
- **NDP per capita values are rounded to whole dollars.** Depreciation shares are rounded to two decimal places.
- **Confidence: High** across the full 1947–2024 range. Both GDP and CFC are core BEA series with no methodology breaks within this time span (comprehensive revisions affect levels but not the internal consistency of the series).
<!-- COMPLETE -->
