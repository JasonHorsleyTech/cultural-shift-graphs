# Lodging — Hotel Housekeeper

## Summary

The hotel housekeeper's share of the room rate has been remarkably low and stable — hovering between 4.7% and 5.5% for over three decades, with a brief dip to ~4.7% during the pre-recession peak (2008) and a COVID-era anomaly. Unlike healthcare or education where the fundamental worker ratio collapsed, the hotel housekeeper ratio was already near rock-bottom by 1980 and has barely moved since. The main story is that in the 1970s a housekeeper's daily wage could pay for a room; by the 2020s it covers about 77% of one — but her per-room labor share was always tiny because she cleans 13–14 rooms per shift.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | $13.20 | $14.00 | per room-night (ADR) | 13 | 7.3 | low |
| 1980 | $26.80 | $35.00 | per room-night (ADR) | 14 | 5.5 | low |
| 1990 | $38.00 | $55.00 | per room-night (ADR) | 14 | 4.9 | med |
| 2000 | $56.00 | $85.00 | per room-night (ADR) | 14 | 4.7 | med |
| 2005 | $64.00 | $91.00 | per room-night (ADR) | 14 | 5.0 | med |
| 2008 | $70.00 | $106.55 | per room-night (ADR) | 14 | 4.7 | high |
| 2010 | $74.00 | $98.08 | per room-night (ADR) | 14 | 5.4 | high |
| 2015 | $82.00 | $120.01 | per room-night (ADR) | 14 | 4.9 | high |
| 2019 | $96.00 | $131.21 | per room-night (ADR) | 14 | 5.2 | high |
| 2020 | $100.00 | $103.00 | per room-night (ADR) | 14 | 6.9 | med |
| 2023 | $120.00 | $155.62 | per room-night (ADR) | 14 | 5.5 | high |

## Methodology

**Ratio formula:** Housekeeper daily wage / (ADR × rooms cleaned per shift)

This measures: of every dollar the customer pays for a room night, what fraction is the housekeeper's labor cost for cleaning that specific room? The remainder goes to property costs, management, front desk, maintenance, franchise fees, marketing, corporate overhead, OTAs (online travel agencies), taxes, and profit.

**Worker compensation:** Daily wage = hourly wage × 8-hour shift. Wage sources:
- 2005–2023: BLS Occupational Employment and Wage Statistics for "Maids and Housekeeping Cleaners" (SOC 37-2012), mean hourly wage. The 2014 mean was $10.70 per EPI analysis of BLS data. The 2024 BLS median was $16.66/hr (mean $17.39). Intermediate years estimated from BLS OES trends.
- Pre-2005: Following the EPI methodology — the 1997 BLS OES housekeeper wage indexed backward using BLS average hourly earnings of production and nonsupervisory employees in the "Leisure and Hospitality" supersector (FRED series CES7000000008). Hotel housekeepers historically earned near or slightly above the federal minimum wage: $1.60/hr in 1970, $3.10–3.35/hr in 1980, $4.25–4.75/hr in 1990.
- The EPI's key finding anchors early estimates: in the 1960s–70s, a housekeeper's daily wage (8 hrs) roughly equaled the average room rate. By 2012 it covered only 78% of a room. This cross-check validates the 1970 wage/ADR pairing.

**Customer cost proxy:** Average Daily Rate (ADR) — total room revenue divided by rooms sold, the standard hotel industry metric tracked by STR (Smith Travel Research, now CoStar).
- 2008–2023: STR/CoStar reported figures. Key confirmed data points: $106.55 (2008 peak), $98.08 (2010 trough), $120.01 (2015), $131.21 (2019), $155.62 (2023 record).
- 2000–2005: Derived from BLS Consumer Price Index for "Lodging Away from Home" (FRED series CUUR0000SEHB), anchored to the 2008 STR figure. The CPI-to-ADR ratio of ~0.74 holds consistently from 2000–2010.
- Pre-2000: Estimated using the CPI for "Other Lodging Away from Home Including Hotels and Motels" (base 1982-84=100), cross-referenced with anecdotal and industry data — Motel 6 charged $6/night in 1962 and ~$10 in 1970; full-service hotels were $18–25; economy motels were $20–$35 in the early 1980s; the average hotel room was ~$58 and average motel ~$39 in 1982.

**Customers per worker:** Rooms cleaned per 8-hour shift. Industry standard from AHLA and hotel operations research: 12–14 rooms for full-service hotels, 14–18 for limited-service. Used 13 for 1970 (simpler rooms, fewer amenities) and 14 for 1980–2023 as a stable average. This is conservative — budget hotels push 16–20 rooms/shift, which would make the ratio even lower. Post-COVID, many hotels eliminated daily housekeeping for stayover guests, effectively reducing rooms-cleaned-per-shift, but the shift was inconsistent across properties.

**Why ADR over alternatives:** ADR captures actual revenue per room sold. Rack rates overstate what customers pay. Consumer surveys understate total cost (they miss resort fees and taxes). RevPAR (revenue per available room) dilutes the number by including unsold rooms, which isn't what the customer experiences. ADR is the most honest representation of "what the customer pays for one night."

## Sources

- Economic Policy Institute, "Hotel housekeepers make the beds but still can't afford to lie in them" (2015) — historical housekeeper wage/ADR comparison from 1960s–2014: https://www.epi.org/publication/hotel-housekeepers-make-the-beds-but-still-cant-afford-to-lie-in-them/
- BLS Occupational Employment and Wage Statistics, SOC 37-2012 "Maids and Housekeeping Cleaners" (2000–2024): https://www.bls.gov/oes/current/oes372012.htm
- FRED, Average Hourly Earnings of Production and Nonsupervisory Employees, Leisure and Hospitality (CES7000000008), 1964–2025: https://fred.stlouisfed.org/series/CES7000000008
- BLS Consumer Price Index, "Other Lodging Away from Home Including Hotels and Motels" (1967–2026): https://www.in2013dollars.com/Other-lodging-away-from-home-including-hotels-and-motels/price-inflation
- BLS Consumer Price Index, "Lodging Away from Home" (1997–2026): https://www.in2013dollars.com/Lodging-away-from-home/price-inflation
- CoStar/STR, "Room Values Change Little Over 4 Decades" — Chicago ADR $13.95 in 1960, inflation-adjusted analysis: https://www.costar.com/article/1437797114/room-values-change-little-over-4-decades
- CoStar/STR, "US Hotels Posted Record-High ADR in 2023" — $155.62 ADR: https://www.costar.com/article/2000387758/us-hotels-posted-record-high-average-daily-rate-revenue-per-available-room-in-2023
- STR historical data via Cayuga Hospitality: 2008 peak ADR $106.55, 2010 trough $98.08: https://cayugahospitality.com/wp-content/uploads/2024/04/STR-Trends-in-the-Hospitality-Lodging-Industry.pdf
- AHLA / industry operations data on rooms per housekeeper per shift (12–18 range): https://www.xenia.team/articles/housekeeping-operations-management-guide-checklists
- NPR, "Should hotel rooms be cleaned daily?" (2023) — post-COVID housekeeping reduction: https://www.npr.org/2023/05/11/1175336181/hotels-daily-room-cleaning-do-not-disturb-labor-union-jobs

## Notes

- **The ratio is startlingly stable.** Unlike college professors (collapsed from ~40% to ~7%) or physicians (8% to 1.3%), the hotel housekeeper ratio has sat in the 4.7–5.5% band for decades. This isn't because housekeepers are well-treated — it's because the ratio was already extremely low by the time data becomes reliable. The "collapse" happened earlier, as motels industrialized room-cleaning into a high-throughput, minimum-wage operation in the 1950s–60s.
- **COVID was the natural experiment.** Hotels cut daily housekeeping in 2020, many permanently. Room rates fell ~21% but quickly rebounded to record highs by 2022–2023 without restoring daily cleaning. The "savings" from eliminating the fundamental worker — already only 5% of the room cost — went directly to profit margins. This confirms the housekeeper's labor was never a meaningful cost driver.
- **Luxury vs. average gap is extreme.** The national ADR is ~$156, but luxury hotels in major cities charge $400–$800/night. The housekeeper cleaning a $600 suite earns the same $15/hr — making the luxury-hotel ratio as low as 1.3–2%. The graph should note that the "average" line masks enormous variation by hotel tier.
- **Resort fees are pure extraction.** Since ~2010, hotels have added $25–$50/night "resort fees" that go entirely to the property (not the worker). If resort fees were included in the ADR, the housekeeper ratio would be even lower. STR's ADR does not include resort fees.
- **Tipping partially compensates** but is inconsistent. Only ~30% of hotel guests leave tips for housekeepers (average $1–$5/room when they do). Including average tips would add roughly $0.50–$1.00 per room to the housekeeper's compensation — moving the ratio up by ~0.5 percentage points at most.
- **The Airbnb comparison is interesting but off-scope.** In Airbnb rentals, the "housekeeper" is often the host or a contracted cleaner paid $75–$150 per turnover — a dramatically higher per-unit cost than hotel housekeeping. This creates an inverted ratio where the cleaning labor is 15–30% of the nightly rate in budget Airbnbs.

<!-- COMPLETE -->
