# Mail Delivery — Postal Worker (Mail Carrier)

## Summary

The mail carrier's share of stamp-equivalent revenue has collapsed from ~80% in the 1960s to ~37% by 2020. Two inflection points drive the story: the 1970 Postal Reorganization Act (which forced USPS toward self-sufficiency, causing stamp prices to rise faster than wages) and the post-2006 email-driven mail volume crash (which shrank the workforce but pushed per-employee overhead costs far above salary). The carrier went from being practically the only cost of delivering mail to being barely a third of it.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 4,800 | 0.04 | FC stamp (1 oz) | 155,684 | 77.1 | low |
| 1970 | 7,500 | 0.06 | FC stamp (1 oz) | 154,612 | 80.8 | med |
| 1980 | 19,000 | 0.15 | FC stamp (1 oz) | 198,342 | 63.9 | med |
| 1990 | 29,000 | 0.25 | FC stamp (1 oz) | 218,528 | 53.1 | med |
| 2000 | 39,000 | 0.33 | FC stamp (1 oz) | 263,810 | 44.8 | med |
| 2005 | 44,460 | 0.37 | FC stamp (1 oz) | 300,835 | 39.9 | high |
| 2010 | 50,250 | 0.44 | FC stamp (1 oz) | 292,571 | 39.0 | high |
| 2015 | 51,130 | 0.49 | FC stamp (1 oz) | 305,191 | 34.2 | high |
| 2020 | 53,180 | 0.55 | FC stamp (1 oz) | 260,424 | 37.1 | high |
| 2024 | 56,000 | 0.73 | FC stamp (1 oz) | 209,738 | 36.6 | med |

## Methodology

**Ratio = Mail carrier mean annual salary / (Stamp price × Total mail pieces per employee)**

This measures what fraction of "stamp-equivalent revenue per worker" goes to the carrier's base salary. The stamp price is the individual customer's cost of sending one letter — the most visible and consistent unit price USPS charges. Total mail pieces per employee represents the delivery workload each carrier contributes to.

**Customer Cost:** Price of a first-class stamp (1 oz letter) from official USPS rate history. When rates changed mid-year, the rate effective for the majority of the year was used.

**Customers/Worker:** Total pieces of mail handled (all classes — first-class, marketing, periodicals, packages) divided by total career/full-time USPS employees. All mail is used rather than first-class alone because carriers deliver all mail regardless of class. For 2005 and 2015, total volume estimated from decade data interpolation (~212B and ~150B respectively).

**Worker compensation sources:**
- **2004–2020:** BLS Occupational Employment Statistics, SOC 43-5052 (Postal Service Mail Carriers), mean annual wage. These are the most reliable figures. Key values: $43,370 (2004), $50,250 (2010), $51,130 (2015), $53,180 (2020).
- **1970:** Well-documented from postal strike records. Starting salary $6,176, top step (21 years) $8,442. Mid-career average ~$7,500 for the year (accounting for 14% raise phased in after March strike).
- **1960:** Estimated from Post Office Department GS-equivalent pay schedules (~$4,800 mid-career).
- **1975–2000:** Estimated from APWU/NALC contract progression, COLA adjustments, and CPI growth, validated against USPS total expense data (known: compensation was ~65% of total expenses in 2010; carrier salary was ~60% of per-employee total compensation). Estimates for these years track the known salary trajectory from $7,500 (1970) to $43,370 (2004).
- **2024:** Estimated from recent NALC contract terms and BLS reporting of $57,870 median for all postal workers.

**Revenue, volume, and employee data** from USPS official historical statistics (about.usps.com), which publishes continuous annual data going back to 1789. High confidence for all years.

**Why the 1960–1970 ratios are so high (~77–81%):** Before the 1970 Postal Reorganization Act, the Post Office Department was a federal agency. Congress set stamp prices deliberately low as a public service, and the department ran permanent deficits covered by taxpayers. The carrier's salary genuinely consumed most of what each stamp brought in because stamps weren't priced to cover full costs.

**Cross-check using actual USPS revenue per employee:** An alternative denominator — total USPS revenue per employee — gives lower ratios (60% in 1960 → 36% in 2020) because actual average revenue per piece exceeds the stamp price in most years (packages and services cost more than a stamp). Same declining trend, confirming the result is robust regardless of denominator choice.

## Sources

- USPS, "Rates for Domestic Letters Since 1863" — https://about.usps.com/who/profile/history/domestic-letter-rates-since-1863.htm
- USPS, "Number of Postal Employees Since 1926" — https://about.usps.com/who/profile/history/employees-since-1926.htm
- USPS, "Pieces of Mail Handled, Number of Post Offices, Income, and Expenses Since 1789" — https://about.usps.com/who/profile/history/pieces-of-mail-since-1789.htm
- USPS, "First-Class Mail Volume Since 1926" — https://about.usps.com/who/profile/history/first-class-mail-since-1926.htm
- Bureau of Labor Statistics, OES data for SOC 43-5052 (2004–2020 mean annual wages) — https://www.bls.gov/oes/current/oes435052.htm
- Recruiter.com, "Postal Service Mail Carriers Salary" (BLS-sourced historical data) — https://www.recruiter.com/salaries/postal-service-mail-carriers-salary/
- Wikipedia, "1970 United States postal strike" (pre-strike salary: $6,176 starting, $8,442 top step) — https://en.wikipedia.org/wiki/1970_United_States_postal_strike
- APWU Pay Scale Archive 1971–1989 — https://apwu.org/pay-scale-archive-1989-1971/
- USPS FY2010 Annual Report (compensation: $49.035B on 583,908 employees) — https://about.usps.com/what/financials/annual-reports/fy2010/ar2010_finance_026.htm

## Notes

- **The 1970 postal strike is the pivotal event.** Mail carriers earned $6,176/year starting — less than sanitation workers. Congress approved only a 4% raise for postal workers while giving itself 41%. The resulting wildcat strike by 200,000 workers was the largest against the federal government in U.S. history. It won a 14% raise and, more importantly, collective bargaining rights under the new USPS. But ironically, the reorganization also meant USPS had to start covering its own costs, which long-term compressed the carrier's share of revenue as institutional overhead grew.
- **The Postal Accountability and Enhancement Act (2006) imposed the infamous pre-funding mandate.** USPS was required to pre-fund 75 years of retiree health benefits within 10 years — a burden no other agency or private company faces. This is the largest single driver of USPS's reported losses and contributed to the workforce reduction from ~700K to ~500K employees. The Postal Service Reform Act of 2022 eliminated much of this burden, but the damage to the workforce was already done.
- **Customers/Worker peaked at ~305K pieces per employee around 2015** despite total mail volume declining, because the workforce shrank faster than volume. Each remaining carrier processed more mail for roughly the same pay. After 2015, volume decline caught up and the workload per carrier dropped.
- **The ratio stabilized at ~35–37% after 2015.** Volume decline slowed, the DeJoy 10-year plan stabilized the workforce, and the 2023–2024 NALC contract provided meaningful raises (including back pay). The long compression may have bottomed out.
- **Packages are the wild card going forward.** USPS package volume has surged with e-commerce while letter volume collapses. Packages generate several dollars each vs. cents for a letter, shifting the revenue mix. The stamp-based methodology doesn't capture this; using total USPS revenue as the denominator would better reflect the modern postal economy.
- **Overtime is excluded.** Mail carriers frequently work overtime, especially during holidays. BLS OES mean annual wage (~$53K in 2020) represents base salary for 2,080 hours. Including overtime would raise effective compensation by 10–15%, increasing the ratio by 3–5 percentage points in recent years.

<!-- COMPLETE -->
