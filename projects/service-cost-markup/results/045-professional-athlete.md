# Sports Entertainment — Professional Athlete (MLB)

## Summary

The professional athlete's share of revenue tells a dramatic three-act story: suppression under the reserve clause (~12-17% before 1976), explosive growth after free agency pushed the ratio to a peak of ~56% in 1995, then a steady decline back to ~31-33% as league revenue growth (driven by TV deals and streaming) outpaced salary growth. Despite average salaries rising from $19,000 to $4.9 million, players now capture a smaller share of the pie than they did in the late 1990s because the pie grew even faster.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1967 | 19,000 | 3.20 | per fan-visit (all revenue) | 50,000 | 11.9 | low |
| 1970 | 29,303 | 4.18 | per fan-visit (all revenue) | 47,833 | 14.7 | low |
| 1975 | 44,676 | 5.17 | per fan-visit (all revenue) | 49,667 | 17.4 | low |
| 1980 | 143,756 | 7.91 | per fan-visit (all revenue) | 66,154 | 27.5 | med |
| 1985 | 371,571 | 14.23 | per fan-visit (all revenue) | 72,000 | 36.3 | med |
| 1990 | 597,537 | 18.98 | per fan-visit (all revenue) | 84,344 | 37.3 | med |
| 1995 | 1,110,766 | 27.33 | per fan-visit (all revenue) | 72,143 | 56.3 | med |
| 2000 | 1,895,630 | 41.27 | per fan-visit (all revenue) | 96,998 | 47.4 | med |
| 2005 | 2,476,589 | 69.43 | per fan-visit (all revenue) | 99,867 | 35.7 | med |
| 2010 | 3,014,572 | 95.76 | per fan-visit (all revenue) | 97,467 | 32.3 | med |
| 2015 | 4,250,000 | 128.73 | per fan-visit (all revenue) | 98,400 | 33.6 | med |
| 2019 | 4,380,000 | 156.20 | per fan-visit (all revenue) | 91,333 | 30.7 | med |
| 2023 | 4,900,000 | 164.07 | per fan-visit (all revenue) | 90,641 | 32.9 | high |

## Methodology

**League chosen:** Major League Baseball (MLB). MLB has the longest continuous history of any major American professional league, the most accessible historical salary data (going back to the 1960s), and the most dramatic structural change in labor economics (the end of the reserve clause in 1976).

**Worker compensation:** Average MLB player salary on opening day, from AP annual studies and Baseball Almanac data. This is the mean salary across all active roster players (25-man roster through 2019, 26-man from 2020). Note: this understates total player compensation by ~20-30% because it doesn't capture season-long roster turnover (callups, IL replacements, September rosters), benefits, or bonuses. However, the methodology is applied consistently across all years, so the trend is accurate even if absolute levels are slightly low.

**Customer cost proxy:** Total league revenue divided by total in-person attendance. This yields "revenue per fan-visit" — the total economic value generated per person walking through the gate, including their indirect contribution via TV viewership (which drives broadcast rights), merchandise, sponsorships, and stadium revenue beyond the ticket price.

**Why total revenue instead of ticket price?** Using ticket price alone would produce ratios exceeding 100% from the mid-1990s onward, because TV money funds the majority of player salaries. In 2023, the average ticket was $38 but total revenue per attendee was $164 — the ticket captures less than 25% of the economic activity. Since other industries in this dataset use proxies that capture the full cost to the customer (e.g., tuition for professors, health expenditure for doctors), total revenue per attendee is the appropriate parallel for sports.

**Customers per worker:** Total annual MLB attendance divided by total active roster players (teams × roster size). This represents how many fan-visits each player "serves" per season.

**Revenue estimates by era:**
- 1967-1975: Estimated from per-team revenue averages cited in economic histories of MLB (~$4-6.4M/team). Low confidence.
- 1980-1990: Based on per-team revenue figures from the Blue Ribbon Panel report and SABR economic data ($15-40M/team range). Medium confidence.
- 1995: $1.38B total league revenue (directly reported). The high ratio (56%) is partly an artifact of strike-depressed revenue — the 1994-95 strike cratered attendance and revenue while guaranteed contracts kept salaries high.
- 2000-2005: Interpolated from known benchmarks ($3.55B in 2001, $3.7B in 2002). Medium confidence.
- 2010-2023: Based on widely reported Forbes/Statista/CBS revenue figures ($7B-$11.6B range). Higher confidence.

**Attendance estimates:** Confirmed figures from Baseball Almanac for 1990, 2000, 2010, 2019, 2023. Earlier decades estimated from known league-wide trends (expansion from 20 to 30 teams, stadium capacity changes).

**Roster sizes:** 25-man active roster × number of teams (20 teams in 1967, 24 in 1969, 26 in 1977, 28 in 1993, 30 in 1998). Expanded to 26-man in 2020.

## Sources

- Baseball Almanac — MLB average salary history (https://www.baseball-almanac.com/charts/salary/major_league_salaries.shtml)
- AP Annual MLB Salary Studies via ESPN (https://www.espn.com/mlb/story/_/id/36070487/study-shows-mlb-average-salary-11-yoy-49-million)
- AP 2026 MLB Salary Study via US News (https://www.usnews.com/news/sports/articles/2026-04-09/ap-study-mlb-average-salary-hits-a-record-534m-as-the-mets-lead-spending-again)
- CBS Sports — MLB 2024 revenue report (https://www.cbssports.com/mlb/news/mlb-reports-record-12-1-billion-in-revenues-for-2024-season/)
- Bradbury, J.C. "What Explains Labor's Declining Share of Revenue in Major League Baseball?" Kennesaw State University (https://www.kennesaw.edu/coles/research/docs/spring-2018/spring18-02.pdf)
- EH.net — The Economic History of Major League Baseball (https://eh.net/encyclopedia/the-economic-history-of-major-league-baseball/)
- SABR — 1991-2001 Ticket Prices and Fan Cost Index (http://roadsidephotos.sabr.org/baseball/1991-2001tickets.htm)
- SABR — Ticket prices, 1950-2003 (http://roadsidephotos.sabr.org/baseball/earlyticketprices.htm)
- Team Marketing Report — Fan Cost Index (https://teammarketing.com/fancostindex/)
- Statista — MLB average ticket price 2006-2024 (https://www.statista.com/statistics/193426/average-ticket-price-in-the-mlb-since-2006/)
- Statista — Total revenue of MLB 2001-2024 (https://www.statista.com/statistics/193466/total-league-revenue-of-the-mlb-since-2005/)
- Baseball Almanac — Attendance history (https://www.baseball-almanac.com/baseball_attendance.shtml)
- Baseball Reference — League year-by-year miscellaneous (https://www.baseball-reference.com/leagues/majors/misc.shtml)
- The Ringer — Baseball's Economics (https://www.theringer.com/2018/02/21/mlb/mlb-revenue-sharing-owners-players-free-agency-rob-manfred)
- Fueled by Sports — MLB Payroll 1984-1999 (https://www.fueledbysports.com/mlb-payroll-1984-1999/)

## Notes

- **The free agency inflection is the dominant story.** The reserve clause (pre-1976) functioned as a monopsony — teams had sole claim on players indefinitely, suppressing wages to ~12-17% of revenue. Free agency (Seitz decision, December 1975) broke this, and salaries quadrupled within 5 years. The ratio climbed from 17% to 37% in just 15 years.

- **Collusion era (1985-1987) temporarily reversed the trend.** MLB owners colluded to suppress free agent signings from 1985-1987. Salary growth stalled. Arbitrator ruled collusion in 1990, owners paid $280M in damages. This is visible as the ratio plateauing from 1985-1990.

- **1995 spike is partly structural, partly anomalous.** The 1994-95 players' strike depressed revenue while guaranteed contracts kept salaries high. The 56% ratio reflects real conditions that year but isn't representative of the mid-1990s trend.

- **The CBA-negotiated split is remarkably stable post-2005.** Despite no formal salary cap, the ratio has settled into a 31-34% band (using opening-day salary methodology). Industry reports using total compensation (including benefits, turnover) show 40-45%, closer to the NFL's negotiated 48% and NBA's 50%. The lack of a formal cap hasn't prevented convergence toward similar levels.

- **Revenue growth is the real story post-2000.** Average salary roughly doubled ($1.9M to $4.9M) from 2000-2023, but revenue quadrupled ($3B to $11.6B). The difference flows to owners, stadium costs, front office operations, analytics departments, and media infrastructure. The player's slice of a much larger pie is worth far more in absolute terms despite being a smaller percentage.

- **Minor league athletes are the dark mirror.** The ticket mentioned this angle: AAA minor leaguers earned roughly $15,000-25,000/year as recently as 2020. Using the same methodology against their parent MLB organization's revenue, the ratio would be well under 1%. Congress passed the Save America's Pastime Act (2018) to exempt minor leaguers from minimum wage laws. This was partially addressed by the 2022 CBA which raised minor league minimums significantly, but the ratio remains extremely low.

- **For the mega-graph:** This industry is unique because a formal labor market transformation (free agency) caused a step-change in the ratio. Most other industries show gradual drift. The MLB line will have a distinctive hockey-stick shape from 1975-1995, then a decline.

<!-- COMPLETE -->
