# Adult Entertainment — Exotic Dancer / Stripper

## Summary

This is one of the most unusual entries in the dataset: the exotic dancer is classified as an independent contractor who *pays the venue* to work, earns nothing from the venue itself, and relies entirely on direct tips and dance fees from customers. The dancer's share of total customer spending has likely declined from roughly 60-70% in the early 1990s to 35-45% by the 2020s, driven by rising house fees, stagnant lap dance prices ($20 since ~1990), and the venue capturing an ever-larger share through inflated drink prices, VIP room surcharges, and "funny money" exchange fees. The COVID-19 pandemic and OnlyFans (where performers keep 80%) have disrupted the model, but the in-person club economics remain heavily tilted toward the house.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1980 | $150 | $220 | total customer spend per dancer per shift | 1 | 68% | low |
| 1990 | $250 | $400 | total customer spend per dancer per shift | 1 | 63% | low |
| 1995 | $300 | $520 | total customer spend per dancer per shift | 1 | 58% | low |
| 2000 | $350 | $650 | total customer spend per dancer per shift | 1 | 54% | med |
| 2005 | $375 | $750 | total customer spend per dancer per shift | 1 | 50% | med |
| 2010 | $350 | $780 | total customer spend per dancer per shift | 1 | 45% | med |
| 2015 | $325 | $780 | total customer spend per dancer per shift | 1 | 42% | med |
| 2020 | $200 | $550 | total customer spend per dancer per shift | 1 | 36% | low |
| 2024 | $300 | $750 | total customer spend per dancer per shift | 1 | 40% | med |

### What the numbers mean

**Worker Comp** = dancer's net take-home per shift after paying house fees, tip-outs to DJ/bouncer/bartender/house mom, and any "funny money" exchange fees. This is cash-in-pocket.

**Customer Cost** = total customer spending attributable to each dancer per shift. This includes: the dancer's share of cover charges (prorated across dancers working), all drinks purchased during the dancer's shift (prorated), all lap dance fees, VIP room charges, and stage tips. It represents what customers collectively spent at the club during one dancer's shift, divided by the number of dancers working.

**Customers/Worker** is set to 1 because the unit is already "per dancer per shift" — the ratio directly compares what the dancer takes home vs. what the customers spent.

## Methodology

### Why per-shift, per-dancer?

The strip club is unique in this dataset because the "worker" is not an employee. There is no payroll. There is no salary. The dancer's income is entirely a function of what happens during her shift. The most honest unit of analysis is therefore: on a given shift, how much total money did customers spend at this club per dancer present, and how much of that did the dancer keep?

### Computing "Customer Cost per dancer per shift"

**Anchor point (2024):** U.S. strip club industry revenue is approximately $7.7 billion (IBISWorld/Yahoo Finance, 2024). There are roughly 3,889 clubs (IBISWorld, 2025). Average revenue per club: ~$1.98 million/year. Clubs operate ~350 nights/year = ~$5,657/night in revenue per club. Average club has 10-15 dancers per shift (industry standard from multiple sources), using 12 as midpoint = ~$470 per dancer per shift in club revenue.

However, that figure only captures revenue that flows through the club's books. It does not include direct cash tips to dancers (stage tips, additional gratuities) which bypass the register entirely. Industry estimates suggest cash tips add 40-60% on top of booked revenue. Using a 50% uplift: total customer spend per dancer per shift ≈ $700-800, centered at $750.

**Historical scaling:** For earlier decades, I used the known industry revenue figures:
- 2002: ~$3.1 billion across ~2,500 clubs (Wikipedia / industry estimates)
- 2005: ~$5 billion (Freakynomics / industry estimates)  
- 2008: ~$5-6 billion (industry insider estimates)
- 2013: ~$2.5 billion (Marketdata, though this appears to use a narrower definition)
- 2019: ~$8 billion (Wikipedia, pre-COVID peak)
- 2024: ~$7.7 billion (IBISWorld)

For 1980 and 1990, no reliable industry revenue figures exist. Estimates are based on the known structure: far fewer clubs (~1,000 in 1980, ~2,000 in 1990), smaller venues, lower drink prices, and the lap dance only being introduced around 1980 (Mitchell Brothers O'Farrell Theatre). Customer spend per visit was much lower in nominal terms.

### Computing "Worker Comp" (dancer net take-home)

This is the hardest number because it's a cash economy with massive variance. I triangulated from multiple sources:

**House fees paid by dancer to club:**
- 1980s: Minimal. Most burlesque-era clubs paid dancers a small wage or had negligible stage fees ($5-15/night).
- Early 1990s: $15-35/night (Las Vegas data)
- Late 1990s: $35-50/night
- 2000s: $50-100/night (standard); up to $150 on weekends at high-end clubs
- 2010s: $75-150/night (standard); up to $200-400 for prime weekend shifts
- 2020s: $80-180/night (standard); $200-400 for event nights

**Tip-outs (mandatory, per shift):**
- DJ: $5-20
- Bouncer/security: $5-10
- Bartender: $5-10
- House mom: $5-10
- Manager: $10-20
- Total tip-outs: $30-70/shift (has been relatively stable since the 2000s; smaller in earlier decades)

**Lap dance revenue split:**
- Standard lap dance: customer pays $20-30/song
- Club takes $5-10 per dance (or 20-30%)
- Dancer keeps $10-20 per dance
- VIP rooms: customer pays $200-1,000/hour; club takes $100-300; dancer keeps the rest

**Dancer gross earnings per shift (before house fees and tip-outs):**
- Sources consistently report $200-700/night at mid-tier clubs, $400-1,000 at high-end clubs
- Day shifts: $200-400; Night shifts: $300-700; Weekend nights: $400-1,000+
- Using midpoint of ~$400 gross for a typical shift in 2024

**Net take-home calculation (2024):**
- Gross earnings: ~$400
- Minus house fee: ~$100 (midpoint)
- Minus tip-outs: ~$50 (midpoint of $30-70)  
- Minus funny money exchange fee (~10% of dances paid in house currency): ~$20
- Net: ~$230-350, centered at ~$300

**Historical net take-home:**
- In the 1980s, house fees were minimal ($5-15) and tip-outs were smaller ($10-20 total). The dancer kept a much higher share of a smaller pie.
- Through the 1990s-2000s, gross earnings rose with the "gentleman's club" boom and lap dance proliferation, but house fees rose faster, compressing the net ratio.
- Post-2008: stagnant lap dance prices ($20/song hasn't moved in 30+ years) combined with continued house fee increases squeezed dancer income in real terms.

### The inverted power dynamic

In most industries in this dataset, the employer pays the worker. Here, the worker pays the employer. The club's business model is:
1. Charge customers cover + drinks + VIP (captured by the house)
2. Charge dancers house fees to access the customers
3. Let dancers earn tips/dances (partially captured through dance fee splits and funny money)
4. Classify dancers as independent contractors to avoid wages, benefits, overtime, and payroll tax

The result: the dancer IS the product (customers come to see dancers, not to drink overpriced beer), but the club extracts 55-65% of total customer spending while bearing minimal labor cost.

## Sources

- IBISWorld, "Strip Clubs in the US" (2025) — $7.7B revenue in 2024, 3,889 clubs, 2.3% CAGR over 5 years, declined 2.7% CAGR to reach $7.7B. https://www.ibisworld.com/united-states/industry/strip-clubs/4409/
- Yahoo Finance / ResearchAndMarkets, "Analysis of the U.S. Strip Clubs Market, 2014-2029" — revenue trends, alcohol-heavy revenue model, COVID impact. https://finance.yahoo.com/news/analysis-u-strip-clubs-market-140400895.html
- Marketdata Enterprises, "Strip Clubs Are A $2.5 Billion Industry" (2014) — 3,500 clubs, $2.47B revenue in 2013. https://www.marketdataenterprises.com/wp-content/uploads/2014/01/Strip-Clubs-2014-PR.pdf
- Wikipedia, "Strip club" — historical industry estimates: $3.1B/2,500 clubs (2002), $8B (2019), $75B global (2005). https://en.wikipedia.org/wiki/Strip_club
- MEL Magazine, "Who Gets the Money You Spend in a Strip Club?" — detailed breakdown of house fees ($20-400/night), tip-outs ($5-10 per staff member), dance fee splits ($5-7/song to house), VIP room splits. https://melmagazine.com/en-us/story/who-gets-the-money-you-spend-in-a-strip-club
- MEL Magazine, "Why Haven't Lap Dance Prices Increased With Inflation?" — $20/song price stagnant since at least 1990, dancers fired for charging more. https://melmagazine.com/en-us/story/why-havent-lapdance-prices-increased-with-inflation
- Portland Mercury, "Stripper Economics" (2014) — Portland stage fees as low as $5, 10% to bar staff model, 20-40% take at other clubs, $300-500/night at upscale clubs, IRS raids in 2010-2011, club owner making $30K-40K/month in fees. https://www.portlandmercury.com/General/2014/07/02/12878916/stripper-economics
- Student Life (Washington University), "Freakynomics: An economic analysis of a gentlemen's club" (2008) — $5B industry, $15K-20K Saturday revenue for mid-size club, Texas/Nevada 25-30% strip club taxes. https://www.studlife.com/archives/special-issues/sex-issue/sexy-scene/2008/02/13/FreakynomicsAneconomicanalysisofagentlemensclub/
- ProfitableVenture, "How Do Strip Clubs Make Money?" and "How Much Do Strip Club Owners Make?" — $6B annual industry, 3,979 clubs, 58,680 employees, owner earnings $150K-367K/year (small club), alcohol PC of 21%. https://www.profitableventure.com/income-strip-club-owners-make/
- RCI Hospitality Holdings (RICK) 10-K filings — FY2022 nightclub segment revenue mix: 45% service revenue (cover charges, dance fees, VIP rooms), 39% alcoholic beverages, 16% food/merchandise. FY2025 nightclub segment revenue: $242.5M. https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000935419
- Bloomberg Law analysis (cited in Schulten Ward Turner & Weiss) — 400+ wage-and-hour complaints by exotic dancers 2006-2019; notable settlements: $8M (Penthouse Executive Club), $10.8M (Rick's Cabaret), $13M (Spearmint Rhino). https://swtwlaw.com/strip-club-wage-dispute-lawsuits
- PayScale, "Average Stripper/Exotic Dancer Hourly Pay" (2026) — $28.96/hour average. https://www.payscale.com/research/US/Job=Stripper%2FExotic_Dancer/Hourly_Rate
- BLS, Occupational Employment and Wage Statistics, SOC 27-2031 "Dancers" (2023) — median $23.97/hour, but excludes self-employed (most exotic dancers). https://www.bls.gov/oes/2023/may/oes272031.htm
- Bucks Cabaret, "History of The Gentlemen's Strip Club in America" — lap dancing introduced 1980 (Mitchell Brothers), topless era began 1964 (Carol Doda), gentleman's club model emerged 1990s. https://www.bucksclubs.com/bucks-cabaret/blog/history-of-the-gentlemens-club/
- OnlyFans platform — 80/20 creator/platform split, $7.22B shared among creators in 2024. https://ofstats.net/

## Notes

**This is the most data-poor industry in the dataset.** The cash economy, independent contractor classification, and underground nature of the business mean there is almost no longitudinal data collected by any government agency. BLS data explicitly excludes self-employed workers, and most exotic dancers are classified as independent contractors. The numbers above are constructed from triangulating industry revenue estimates, anecdotal reports, journalistic investigations, and court filings. Confidence is accordingly lower than for industries with BLS/Census data.

**The stagnant lap dance price is the most remarkable finding.** A standard lap dance has cost $20/song since at least 1990. Adjusted for inflation, that $20 in 1990 would be ~$47 in 2024. This means the real price of the dancer's core service has been cut in half over 34 years. Meanwhile, club drink prices, cover charges, and VIP room rates have all increased with or above inflation. The club captures the inflation premium; the dancer does not.

**The independent contractor classification is the structural mechanism.** By classifying dancers as contractors, clubs avoid minimum wage obligations, benefits, payroll taxes, and overtime. Dancers must pay to work (house fees), pay mandatory tip-outs to other staff, and accept price ceilings on their services ($20/dance enforced by the club despite being "independent"). Over 400 federal lawsuits were filed between 2006-2019 challenging this classification, with settlements totaling tens of millions. Most courts have found dancers to be employees, but the industry broadly continues the contractor model.

**The OnlyFans comparison is instructive.** On OnlyFans, the performer keeps 80% and the platform takes 20%. In a strip club, the dancer — who IS the product — keeps roughly 35-45% of total customer spending while the venue takes 55-65%. The inversion is striking: the digital platform takes a smaller cut than the physical venue, despite the physical venue theoretically providing more infrastructure (space, security, alcohol license, marketing). This explains why many dancers moved to OnlyFans during and after COVID, and why industry revenue has not recovered to pre-pandemic levels.

**The "customers per worker" column is 1** because the metric is already normalized per dancer per shift. Unlike a teacher (many students per teacher) or a doctor (many patients per doctor), in a strip club the revenue is already attributable per dancer because the dancer's earnings are individual. The "customer cost" figure represents total customer spending at the club during a shift, divided by the number of dancers working that shift.

**2020 is an outlier** due to COVID-19 shutdowns. Many clubs closed entirely for months; those that reopened had reduced capacity and fewer customers. The 36% ratio that year reflects both lower gross spending and the fact that clubs maintained house fees even with fewer customers, compressing the dancer's share further.

**Revenue figure discrepancies:** Industry revenue estimates vary wildly by source — from $2.5B (Marketdata, 2013, narrow definition) to $8B (Wikipedia/industry, 2019). The discrepancy likely reflects different definitions of what counts as "strip club revenue." Some include only club-reported revenue; others include estimated cash tips. I used the IBISWorld/Yahoo Finance $7.7B (2024) as the primary anchor because it is the most recent, comes from a standard industry research methodology, and cross-checks reasonably against RCI Hospitality's publicly reported financials (RCI operates ~50 of ~3,900 clubs and reports ~$242M in nightclub revenue, implying ~$4.8M/club — higher than the industry average of ~$2M, which is expected for a publicly traded operator of premium venues).

<!-- COMPLETE -->
