# Cinema Exhibition — Movie Theater Worker

## Summary

The movie theater worker's share of ticket revenue has been remarkably stable at 17–21% for five decades, despite massive structural changes — the death of the unionized projectionist, the multiplex revolution, digital projection, and premium formats. Two notable dips coincide with the two longest federal minimum wage freezes (1981–1990 and 1997–2009), when wages stagnated while ticket prices kept climbing. The ratio recovers each time the minimum wage catches up. Post-2015, the federal minimum understates actual theater wages as state minimums have diverged sharply upward.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | 3,328 | 1.55 | per ticket | 10,222 | 21.0 | low |
| 1980 | 6,448 | 2.69 | per ticket | 12,143 | 19.7 | low |
| 1990 | 7,904 | 4.35 | per ticket | 10,818 | 16.8 | med |
| 2000 | 10,712 | 5.39 | per ticket | 10,519 | 18.9 | med |
| 2007 | 12,168 | 6.88 | per ticket | 10,553 | 16.8 | high |
| 2010 | 15,080 | 7.89 | per ticket | 10,640 | 18.0 | high |
| 2019 | 15,080 | 9.16 | per ticket | 8,786 | 18.7 | med |

## Methodology

**Worker compensation:** Federal minimum wage × 2,080 hours (standard BLS annualization). Movie theater front-line workers (ticket takers, concession staff, ushers) have historically earned at or near the federal minimum wage. This is the most longitudinally consistent proxy available. The BLS Occupational Employment Statistics survey (SOC 39-3031: Ushers, Lobby Attendants, and Ticket Takers) only covers 2003+ and lumps in higher-paying venue types (sports, concerts). Using federal minimum as the wage proxy gives a conservative floor for the ratio.

**Important caveat for 2019:** The federal minimum wage of $7.25/hr significantly understates actual theater wages by 2019, as roughly half of US workers lived in states with minimums above $10/hr. The BLS median for ushers/ticket takers in 2019 was $9.39/hr ($19,531 annualized). Using that figure, the 2019 ratio rises to approximately 24.3%. This divergence is a post-2009 phenomenon — before that, the federal minimum was a tight proxy for actual theater wages.

**Customer cost:** Average movie ticket price, sourced from MPAA/NATO data compiled by multiple tracking services. This represents only the ticket — not concessions, parking, or premium format surcharges.

**Customers per worker:** Total US annual ticket admissions divided by estimated total US movie theater employees.

- **Admissions data:** Well-documented from NATO/MPAA. Pre-1980 derived from per-capita attendance rates (4–5 tickets/capita in the 1970s) and weekly attendance figures. Post-1995 data is precise (The Numbers, Box Office Mojo).
- **Employment data:** 2007 (132,656 employees) and 2012 (129,533) are from the US Economic Census for indoor motion picture theaters (SIC 7832 / NAICS 512131). Other years are estimated from screen counts × employees per screen, calibrated against the census benchmarks. Screen counts are well-documented by NATO. Employees-per-screen declined over time: ~5–6 in the single-screen era (1960s–70s), ~4 during early multiplexing (1980s), ~3.5 in the megaplex era (1990s–2010s).

**Why this proxy over alternatives:** Ticket price is the most trackable, standardized cost unit that a movie customer pays. Concession spending is harder to track historically and varies enormously by customer. Using total box office revenue (ticket price × admissions) as the denominator captures the full customer-facing ticket economy and normalizes cleanly per worker.

## Sources

- National Association of Theatre Owners (NATO) — historical ticket price data, screen counts
- MPAA/MPA Theatrical Market Statistics reports — ticket prices, admissions
- Dave Manuel, "The Cost of a Movie Ticket Throughout the Years" (https://www.davemanuel.com/the-cost-of-a-movie-ticket-throughout-the-years-166/) — compiled NATO/MPAA ticket prices
- US Bureau of Labor Statistics, Occupational Employment and Wage Statistics — SOC 39-3031 wage data (https://www.bls.gov/oes/2023/may/oes393031.htm)
- US Department of Labor, Wage and Hour Division — federal minimum wage history (https://www.dol.gov/agencies/whd/minimum-wage/history/chart)
- US Census Bureau, Economic Census 2007 and 2012 — motion picture theater employment (SIC 7832 / NAICS 512131)
- The Numbers (https://www.the-numbers.com/market/) — annual ticket sales and box office data 1995–2025
- Box Office Mojo (https://www.boxofficemojo.com/year/) — annual domestic box office
- University of Dayton, "The Decline in Average Weekly Cinema Attendance, 1930–2000" (https://ecommons.udayton.edu/cgi/viewcontent.cgi?article=1023&context=pol_fac_pub) — historical weekly attendance
- IBISWorld — Movie Theaters in the US employment statistics
- Roger Ebert, "How your ticket price is divided" (https://www.rogerebert.com/roger-ebert/how-your-ticket-price-is-divided) — studio/exhibitor revenue split

## Notes

- **The studio split makes this industry unique.** Studios take an average of 50–55% of ticket revenue (up to 80–90% in opening week for major releases, declining to ~40% in later weeks). The theater keeps only ~45% of the ticket price. So when the worker's ratio against total ticket price is ~19%, the worker's ratio against the *theater's share* of ticket revenue is roughly 19% / 0.45 = ~42%. This means front-line labor consumes nearly half of what the theater earns from tickets — which is precisely why theaters survive on concession margins (where the markup is 85–90% on popcorn and soda).

- **The projectionist is a ghost in this data.** Union projectionists (IATSE) earned significantly above minimum wage — $8–12/hr in the 1980s when minimum was $3.35. As digital projection automated the booth (roughly 2005–2013), projectionists vanished (from ~12,000 in the 1990s to ~1,950 by 2024 per BLS). Ticket prices did not drop. The skilled worker's wage was captured by exhibitor margins and reinvested in capital (digital projectors, premium formats). This is invisible in the ratio because we're tracking the front-line minimum-wage worker, not the projectionist.

- **Premium formats are pure capital capture.** IMAX, Dolby Cinema, and luxury recliner auditoriums charge $15–25 per ticket (2–3× standard price). The workers are the same minimum-wage employees. The premium goes entirely to capital recovery (screen/speaker investment) and licensing fees. This should compress the worker ratio for any theater with a high premium-format mix, but averaged nationally the effect is smoothed.

- **The minimum wage freeze creates visible dips.** The 1981–1990 freeze ($3.35/hr for 9 years) and 1997–2009 freeze ($5.15/hr for 10 years) each show up as ratio compressions in the data. Ticket prices rose 60–80% during each freeze while wages were flat. The ratio snaps back after each raise, suggesting the long-run equilibrium is around 19–21%.

- **Post-2015 divergence.** State minimum wage increases (California, New York, Washington, etc. moving to $15/hr) have pushed actual theater wages well above the $7.25 federal floor. Using BLS median data, the "real" 2019 ratio is likely 24–25%, the highest in the dataset — driven not by ticket pricing but by labor cost increases that theaters have so far absorbed from concession margins.

- **Admissions per worker declined in the 2010s.** From ~10,500 admissions per worker in the 2000s to ~8,800 in 2019. This reflects both declining attendance (streaming competition) and expanded in-theater services (alcohol, full dining, reserved seating) requiring more staff per customer. The denominator is shrinking, which pushes the ratio up even with flat wages.

<!-- COMPLETE -->
