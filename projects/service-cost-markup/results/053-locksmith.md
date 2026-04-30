# Locksmith Services — Locksmith

## Summary

The locksmith ratio is remarkably high (~40-45%) and has been relatively stable over the past two decades — reflecting an industry with minimal institutional overhead where the worker IS the product. A modest decline from ~44% to ~40% is visible in recent years (2017-2024), driven by escalating digital marketing costs, the growth of dispatch middlemen, and the shift toward higher-value electronic/smart lock work that inflates the per-visit bill faster than wages rise. Locksmithing remains one of the purest "person with tools" trades, but the customer-acquisition layer is slowly capturing more of the transaction.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2005 | 32,700 | 74 | per service visit | 1,030 | 43 | low |
| 2008 | 34,700 | 87 | per service visit | 920 | 43 | low |
| 2013 | 37,950 | 93 | per service visit | 930 | 44 | med |
| 2017 | 40,680 | 106 | per service visit | 876 | 44 | med |
| 2022 | 47,400 | 131 | per service visit | 786 | 46 | med |
| 2024 | 48,340 | 147 | per service visit | 822 | 40 | med |

## Methodology

**Worker compensation:** BLS median annual wage for "Locksmiths and Safe Repairers" (SOC 49-9094). Reliable BLS OES data exists from 2012-2024; pre-2012 values are back-extrapolated at ~2% annual growth consistent with the 2012-2017 observed trend.

**Customer cost per visit:** Constructed from Locksmith Ledger's annual National Average Price Survey as: average service call fee + 0.5 hours at the surveyed average hourly billing rate. This represents a standard residential visit (lockout, rekey, or single lock service). The Locksmith Ledger survey has polled working locksmiths annually since 1953, making it the most consistent longitudinal pricing source for this trade.

Key Locksmith Ledger data points used:
- 2005: $48 service call + 0.5 × $51/hr = $73.50
- 2008: $64 service call + 0.5 × $46/hr = $87
- 2013: $68 service call + 0.5 × $50/hr = $93
- 2017: $74 service call + 0.5 × $64/hr = $106
- 2022: $85 service call + 0.5 × $92/hr = $131
- 2024: ~$95 service call + 0.5 × $104/hr = $147

**Customers per worker (annual visits):** Derived from estimated total industry revenue divided by the number of locksmiths (DataUSA/Census workforce counts, which include self-employed), then divided by the average visit cost. Industry revenue data: $2.9B (2024, IBISWorld), ~$2.0B (2018, reported), with earlier years estimated at ~2.5% annual growth pre-2018 and ~6% growth post-2020 (post-COVID recovery plus smart-lock demand). Workforce estimates range from ~19,000 (2005) to ~24,000 (2024), based on DataUSA showing 21,188 in 2014 and 23,385 in 2023.

**Why this proxy:** A locksmith visit is the natural unit of customer interaction — one locksmith serves one customer per visit, the visit has a clear price, and the locksmith's wage is the primary labor input. The ratio directly answers: of the total revenue a locksmith generates per visit, how much reaches the locksmith as wages?

**Important caveat on employed vs. independent:** BLS wage data captures employed locksmiths working for locksmith companies. Roughly half of locksmiths are independent owner-operators whose income is technically business profit, not "wages." Independent operators typically gross $80,000-$200,000 and net $40,000-$70,000 after expenses (van, tools, insurance, fuel, advertising). Their effective ratio is likely higher (50-60%) because they eliminate the employer's profit margin, but their overhead is also fully self-borne. The BLS-based ratio represents the employed locksmith's share of the customer dollar.

## Sources

- U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 49-9094 "Locksmiths and Safe Repairers" — median annual wages 2012-2024 (via USAWage.com historical compilation: https://www.usawage.com/usa/locksmiths_and_safe_repairers-salary.php)
- DataUSA, Locksmiths & Safe Repairers occupational profile — workforce counts and average wages (https://datausa.io/profile/soc/locksmiths-safe-repairers)
- Locksmith Ledger, National Average Price Survey — annual pricing surveys (2005, 2006, 2008, 2013, 2017, 2022, 2024):
  - 2013 survey: https://www.locksmithledger.com/home/article/10881122/locksmith-services-pricing-2013
  - 2017 survey: https://www.locksmithledger.com/home/article/12286536/2017-national-average-price-survey-results
  - 2022 survey: https://www.locksmithledger.com/home/article/21269230/2022-national-average-price-survey
  - 2024 survey: https://www.locksmithledger.com/home/article/55137701/2024-national-average-price-survey
  - Historical pricing overview: https://www.locksmithledger.com/business-technical-aids/article/10229972/national-average-prices
- IBISWorld, "Locksmiths in the US" — industry revenue and business counts (https://www.ibisworld.com/united-states/industry/locksmiths/4833/)
- HomeAdvisor / Angi, "How Much Does It Cost to Hire a Locksmith?" — consumer-reported pricing 2024-2026 (https://www.angi.com/articles/keys-home-locksmith-assistance-and-costs.htm)
- HomeGuide, "How Much Does a Locksmith Cost?" — 2026 pricing data (https://homeguide.com/costs/locksmith-cost)
- Wikipedia, "Locksmith scam" — industry scam dynamics (https://en.wikipedia.org/wiki/Locksmith_scam)

## Notes

**The ratio is high because locksmithing has minimal institutional overhead.** Unlike healthcare (hospitals, insurance companies, administrators) or education (campuses, deans, bureaucracy), a locksmith is one person with a van, tools, and knowledge. The customer is paying almost entirely for human skill. A ~40-45% ratio puts locksmithing among the highest-ratio service industries — the worker captures nearly half of every customer dollar.

**The scam industry is the elephant in the room.** According to extensive reporting (New York Times, NPR, investigative journalists), fraudulent locksmith operations outnumber legitimate ones by as much as 100-to-1 in online listings. The scam model: a call center creates hundreds of fake Google Business listings with different names and addresses, quotes $15-$29 to get the call, then dispatches an untrained worker with a drill who destroys the lock and charges $200-$500. The "locksmith" who shows up gets $50-75; the call center keeps the rest. This shadow industry doesn't appear in BLS wage data or Locksmith Ledger surveys (which poll actual licensed locksmiths), but it represents a significant fraction of what consumers actually experience. For scam-victims, the real "worker ratio" is 10-20% — the untrained worker gets a fraction, the call center operation captures the majority.

**Google Ads have become the new rent.** Locksmith keywords are among the most expensive in local services advertising, with cost-per-click rates of $30-$60+ for terms like "locksmith near me." A legitimate locksmith spending $2,000-$5,000/month on advertising effectively pays a marketing tax that reduces their net ratio. This cost doesn't appear in the BLS wage data but is a major expense for independent operators.

**The 2022 spike in the ratio is likely a COVID-era artifact.** Locksmith wages jumped ~13% from 2019-2022 ($41,940 to $47,400) as labor markets tightened, while industry revenue growth was more modest. By 2024, revenue had caught up and the ratio dipped back to ~40%.

**Smart locks are changing the service mix.** The shift toward electronic and smart lock installation (higher-value, longer visits) is inflating the average customer bill faster than wages. A traditional rekey is $80-$150; a smart lock installation is $200-$400. This partly explains the widening gap between customer cost growth (~3.5% CAGR) and wage growth (~2.1% CAGR).

**The declining visits-per-locksmith trend** (from ~1,030 in 2005 to ~820 in 2024) reflects both higher-value/longer-duration jobs and the competitive pressure from scam operations siphoning call volume away from legitimate locksmiths.

<!-- COMPLETE -->
