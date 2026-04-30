# Ground Transportation — Taxi / Rideshare Driver

## Summary

This is arguably the most dramatic before/after story in the dataset. The taxi industry cycled through three distinct intermediary models — commission (pre-1979), medallion lease (1979–2013), and platform commission (2014–present) — each of which started with a better deal for drivers before eroding over time. Uber's initial 80/20 split in 2014 was a massive jump from the ~58% drivers were keeping under the medallion lease system. But by 2024, the platform take rate has crept to ~30%, bringing the driver's share down to ~70% — and the trajectory suggests continued erosion. The "cut out the middleman" disruption may be converging back toward the old middleman's cut.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 0.50 | 1.10 | per trip | 1 | 45 | medium |
| 1965 | 0.55 | 1.20 | per trip | 1 | 46 | medium |
| 1970 | 0.86 | 1.80 | per trip | 1 | 48 | medium |
| 1975 | 1.18 | 2.50 | per trip | 1 | 47 | medium |
| 1980 | 2.28 | 3.50 | per trip | 1 | 65 | low |
| 1985 | 4.48 | 7.00 | per trip | 1 | 64 | low |
| 1990 | 5.78 | 8.50 | per trip | 1 | 68 | medium |
| 1995 | 6.58 | 10.50 | per trip | 1 | 63 | medium |
| 2000 | 6.50 | 10.00 | per trip | 1 | 65 | medium |
| 2005 | 7.56 | 12.00 | per trip | 1 | 63 | medium |
| 2010 | 8.12 | 14.00 | per trip | 1 | 58 | medium |
| 2013 | 7.98 | 14.00 | per trip | 1 | 57 | medium |
| 2014 | 10.40 | 13.00 | per trip | 1 | 80 | high |
| 2016 | 9.75 | 13.00 | per trip | 1 | 75 | medium |
| 2019 | 9.75 | 12.50 | per trip | 1 | 78 | medium |
| 2022 | 13.43 | 18.39 | per trip | 1 | 73 | high |
| 2024 | 10.50 | 15.00 | per trip | 1 | 70 | medium |

## Methodology

**What's being measured:** The driver's share of the customer's fare — what the driver receives from each trip after the intermediary (taxi company, medallion owner, or platform) takes its cut, but before the driver's own vehicle expenses (gas, depreciation, insurance, maintenance). Vehicle expenses are the driver's personal business costs, analogous to a tradesperson's tool costs, and are excluded for consistency with other industries in this project.

**Three eras, three intermediary models:**

**Commission era (pre-1979):** In NYC and most major cities, taxi drivers were employees or quasi-employees paid a percentage commission on fares collected. Part-time "hackers" received 42% of fares; experienced "steady men" received 49%. The ratio IS the commission rate. This model was remarkably stable from the 1940s through 1979.

**Medallion lease era (1979–2013):** In 1979, the NYC TLC shifted taxi drivers from commission employees to independent contractors who lease a medallion by the shift. The driver pays a fixed daily lease fee ($25–35 initially in 1979, rising to $129+ by 2012) and keeps all fares collected. The driver's effective share depends on how busy they are — more trips per shift means the fixed lease cost is spread thinner. Ratio = (gross fares per shift − lease cost) / gross fares per shift.

Key data anchors for this era:
- 1993 Schaller Consulting study: NYC drivers averaged $154/day in gross fares and $82/day in net income (after lease, gas, and all costs). Estimated lease-only ratio: ~64–68%.
- 2004 industry data: Average gross revenue $90,747/year, net income $49,532 — a 55% net ratio. Adding back estimated gas costs (~$5,000–6,000/year), the after-lease-only ratio was approximately 63%.
- TLC-regulated lease caps rose over time: 14% increase in 1996, 8% in 2004, plus additional increases tracking the medallion bubble.
- By 2010–2013, with medallion prices exceeding $1M and daily lease rates at $129+, the driver's effective share dropped to its nadir (~57%).

**Platform era (2014–present):** Uber launched UberX nationally in 2013–2014 with an 80/20 fare split (driver keeps 80%). In 2015, the commission rose to 25% for new drivers. By 2022–2024, Uber's "take rate" (revenue as percentage of gross bookings, from SEC filings) has risen to 27–30% for its Mobility segment. Lyft has followed a similar trajectory, currently guaranteeing drivers at least 70% of passenger payments.

Key data for this era:
- 2014: Uber's advertised 80/20 split.
- 2015+: Raised to 75/25, plus booking fees that effectively increase the platform's cut.
- Uber SEC filings show Mobility take rate: ~22% (2018–2019), ~20% (2020, COVID driver retention), ~27% (2022), ~29% (2023), ~30% (2024).
- 2022 Gridwise data: Median driver pay per trip $14.41, median passenger fare $18.39 — a 78% driver share, though this includes tips/bonuses.

**Why per-trip framing:** Unlike most industries in this project, each taxi/rideshare trip is a discrete transaction. There's no meaningful "customers per worker per year" normalization — the ratio is simply the driver's share of each fare. The "Customers/Worker" column is set to 1 throughout.

**Dollar amounts for the commission era (1960–1975)** are estimated from known NYC fare rate structures and typical trip characteristics (2–3 mile trip, 5–10 minutes). These should be treated as illustrative — the ratio (the commission percentage) is the reliable number.

## Sources

- Schaller Consulting, "New York City Taxi Drivers" (1993, 2006) — driver income and fare revenue data
- NYC Taxi and Limousine Commission, 2014 and 2018 TLC Factbooks — fare statistics, medallion data, trip counts
- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 53-3041/53-3054 — taxi driver wage data
- FRED (Federal Reserve Economic Data), series LEU0254682000A — taxi driver median weekly earnings
- Uber Technologies SEC filings (S-1, 10-K annual reports 2019–2024) — gross bookings, revenue, take rate
- Angrist, Caldwell, and Hall, "Uber versus Taxi: A Driver's Eye View," American Economic Journal: Applied Economics (2021) — comparative economics of lease vs. commission models
- Gridwise rideshare analytics (2022–2025) — per-trip driver earnings and passenger fares
- Wikipedia, "Taxis of New York City" and "Taxi medallion" — historical fare structures, medallion prices, regulatory timeline
- The Awl, "How Much More Do Taxi Fares Cost Today?" (2012) — historical fare comparisons
- Slate, "The Taxi Medallion System" (2012) — medallion economics and driver impact
- LSE Business Review, "Leasing a licence to drive a taxi or giving a cut to a ride-sharing company?" (2021) — comparative analysis
- Business of Apps, "Uber Revenue and Usage Statistics" (2026) — take rate historical data
- Lyft blog, "A Deep Dive into Driver Earnings & Expenses" (2023) — driver compensation data

## Notes

- **The cycle repeats.** Each new intermediary model starts with a better deal for drivers and then erodes. Commission (45–48%) gave way to leasing (~65% initially, declining to ~57% by 2013). Rideshare started at 80% and has declined to ~70% in a decade. If the trend continues linearly, rideshare drivers' share will match the late-era taxi lease level (~58%) within another decade.
- **The 2014 inflection is real and dramatic.** When Uber launched with 80/20, drivers immediately went from keeping ~57% of fares to ~80%. This 23-percentage-point jump is one of the largest positive disruptions in the dataset — and is likely the real reason early driver enthusiasm was so intense.
- **Owner-operators vs. lessee drivers.** In the taxi era, about 18–30% of drivers were owner-operators who owned their own medallion. They paid no lease but had medallion financing costs (mortgage-like payments). Their economics were different from lessee drivers. The ratios above primarily reflect lessee/fleet drivers, who were the majority.
- **Tips are excluded for consistency.** Taxi drivers typically received 15–20% tips. Early Uber had no tipping feature; it was added in 2017. Including tips would raise the ratio for taxis relative to early rideshare. The 2022 Gridwise data ($14.41 per trip) likely includes tips, which inflates that data point slightly.
- **Surge pricing complicates the rideshare picture.** During surge periods, both rider fares and driver payouts increase, but the platform's percentage cut remains similar. Average trip fares include surge rides, which inflates the absolute dollar amounts in post-2014 data but doesn't materially affect the ratio.
- **The "cut out the middleman" narrative.** Uber's pitch was that the medallion system imposed artificial scarcity and rent extraction. The early 80/20 split supported this narrative. But Uber's take rate has climbed from 20% to 30% in ten years — comparable to the medallion system's effective 35–43% intermediary take at its worst. The middleman was replaced, not eliminated.
- **Data quality warning:** Pre-1980 dollar amounts are rough estimates based on fare rate structures. The RATIOS for the commission era (42–49%) are well-documented; the per-trip dollar amounts less so. Lease-era ratios carry moderate uncertainty because daily lease costs and trips per shift must be estimated from fragmentary studies.

<!-- COMPLETE -->
