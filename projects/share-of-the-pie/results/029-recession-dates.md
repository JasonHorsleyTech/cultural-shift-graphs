# Result: NBER Recession Dates and GDP Impact, 1947–2024

## Source
- **Primary source:** NBER Business Cycle Dating Committee — US Business Cycle Expansions and Contractions (https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions)
- **Secondary source:** Wikipedia — List of recessions in the United States (https://en.wikipedia.org/wiki/List_of_recessions_in_the_United_States), which compiles BEA GDP data
- **Tertiary source:** FRED USREC series (https://fred.stlouisfed.org/series/USREC)
- **Date accessed:** 2026-05-01

## Methodology
- **Recession dates:** NBER Business Cycle Dating Committee official peak and trough dates. Recessions start the month after the peak and end in the trough month.
- **Duration:** Months from peak to trough (inclusive of both months), per NBER convention.
- **GDP decline:** Peak-to-trough change in real GDP, compiled from BEA NIPA data as reported in secondary sources. These are NOT annualized quarterly rates — they are cumulative peak-to-trough declines.
- **Years affected:** Any calendar year that contains the peak month, the trough month, or any month of recession between them. This is the broadest reasonable flagging for annual data.

## Data

| Recession Name | Peak Date | Trough Date | Duration (months) | Peak-to-Trough Real GDP Change (%) | Years Affected |
|----------------|-----------|-------------|--------------------|------------------------------------|----------------|
| Post-War Recession | 1948-11 | 1949-10 | 11 | -1.7 | 1948, 1949 |
| Post-Korean War Recession | 1953-07 | 1954-05 | 10 | -2.6 | 1953, 1954 |
| Eisenhower Recession | 1957-08 | 1958-04 | 8 | -3.7 | 1957, 1958 |
| Rolling Adjustment Recession | 1960-04 | 1961-02 | 10 | -1.6 | 1960, 1961 |
| Guns and Butter Recession | 1969-12 | 1970-11 | 11 | -0.6 | 1969, 1970 |
| Oil Shock Recession | 1973-11 | 1975-03 | 16 | -3.2 | 1973, 1974, 1975 |
| Energy Crisis Recession | 1980-01 | 1980-07 | 6 | -2.2 | 1980 |
| Volcker Recession | 1981-07 | 1982-11 | 16 | -2.7 | 1981, 1982 |
| Gulf War Recession | 1990-07 | 1991-03 | 8 | -1.4 | 1990, 1991 |
| Dot-Com Recession | 2001-03 | 2001-11 | 8 | -0.3 | 2001 |
| Great Recession | 2007-12 | 2009-06 | 18 | -5.1 | 2007, 2008, 2009 |
| COVID-19 Recession | 2020-02 | 2020-04 | 2 | -9.0 | 2020 |

## Recession Year Flags (for `isRecession` field)

The following calendar years should be flagged `true` for `isRecession`:

1948, 1949, 1953, 1954, 1957, 1958, 1960, 1961, 1969, 1970, 1973, 1974, 1975, 1980, 1981, 1982, 1990, 1991, 2001, 2007, 2008, 2009, 2020

All other years from 1947–2024 should be flagged `false`.

**Total:** 23 recession years out of 78 calendar years (1947–2024), or about 29% of years touched by recession.

## Gaps and Caveats

- **COVID-19 GDP decline:** The -9.0% figure represents an approximate peak-to-trough real GDP decline based on quarterly BEA data (Q4 2019 to Q2 2020). This is the most comparable measure to other recessions in the table. Note that the commonly cited -31.2% figure is the *annualized* Q2 2020 quarterly GDP change — a very different statistic. Some sources report larger peak-to-trough declines (~19%) based on monthly GDP estimates, which capture the sharper within-quarter collapse that quarterly data smooths over. For consistency with other recessions (all measured using quarterly GDP), the ~9–10% figure is used here.
- **2007 flagging:** The NBER peak is December 2007, meaning the recession technically begins January 2008. However, December 2007 is included in "years affected" because (a) the economy was already weakening in Q4 2007 and (b) for annual data display purposes, the peak year provides useful context.
- **1969 flagging:** The peak is December 1969, so only one month of the peak year is at the turning point. The recession proper runs January–November 1970. Both years are flagged.
- **No recessions since 2020:** As of the NBER's latest determinations (through 2024), no additional recessions have been declared. The expansion that began in April 2020 continues.
- **Pre-1947 recessions excluded:** The 1945 recession (Feb 1945 – Oct 1945) is excluded per the ticket's 1947–2024 scope.
- **GDP decline figures:** Different sources report slightly different peak-to-trough GDP decline percentages depending on the vintage of GDP data used (BEA revises historical GDP periodically). The figures here are from widely cited compilations and are internally consistent, but may differ by ±0.5pp from other sources.
- **Confidence: High** for all recession dates (NBER official). **High** for GDP declines of post-1969 recessions. **Medium** for pre-1969 GDP declines (earlier GDP data has been revised multiple times).
<!-- COMPLETE -->
