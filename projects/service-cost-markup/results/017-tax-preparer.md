# Tax Preparation — Tax Preparer

## Summary

The tax preparer's share of customer fees has declined steadily from roughly 40% in 1990 to about 22% in 2024. Preparation fees have roughly quadrupled while front-line preparer hourly wages have barely doubled, with the widening gap absorbed by franchise overhead, marketing, technology platforms, and corporate profit. The most dramatic shift isn't visible in the human-assisted channel at all — it's the 50%+ of filers who now use software like TurboTax, where the "worker" (a software engineer) earns perhaps 12% of the revenue they generate, and the customer pays nearly as much as they would for a human preparer.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1990 | 4,900 | 55 | 1 individual tax return (1040 + state) | 225 | 39.6 | low |
| 1995 | 5,600 | 70 | 1 individual tax return (1040 + state) | 225 | 35.6 | low |
| 2000 | 7,000 | 90 | 1 individual tax return (1040 + state) | 225 | 34.6 | low |
| 2005 | 7,700 | 110 | 1 individual tax return (1040 + state) | 225 | 31.1 | med |
| 2009 | 9,100 | 129 | 1 individual tax return (1040 + state) | 225 | 31.4 | med |
| 2013 | 9,800 | 150 | 1 individual tax return (1040 + state) | 225 | 29.0 | med |
| 2017 | 10,500 | 176 | 1 individual tax return (1040 + state) | 225 | 26.5 | med |
| 2021 | 11,200 | 220 | 1 individual tax return (1040 + state) | 225 | 22.6 | med |
| 2024 | 12,600 | 250 | 1 individual tax return (1040 + state) | 225 | 22.4 | med |

## Methodology

**Worker comp** represents the seasonal earnings of a front-line tax preparer — the person sitting across from you at H&R Block or a small accounting firm. Tax preparation is fundamentally seasonal work (January–April), so I used seasonal compensation: estimated hourly wage × ~700 hours per season (roughly 16–18 weeks at 40–45 hours/week). This is the most honest measure for comparison with other industries because it captures what the worker earns specifically from doing this job.

Hourly rates were estimated from H&R Block seasonal preparer wages (current: ~$18/hr per Glassdoor/Indeed/ZipRecruiter), scaled backward using general wage trends and minimum wage benchmarks. H&R Block seasonal preparers have historically earned roughly 1.8–2.5× federal minimum wage. The BLS median annual wage for year-round tax preparers (SOC 13-2082) is $50,560 as of May 2024, but this captures experienced year-round professionals who also do bookkeeping, payroll, and financial planning — not the "fundamental worker" preparing basic individual returns.

**Customer cost** uses the National Society of Accountants (NSA) biennial survey average fee for preparing a Form 1040 with state return, non-itemized (standard deduction). This is the most common return type — 70%+ of filers took the standard deduction before the 2017 Tax Cuts and Jobs Act, and 87%+ after. NSA has tracked this metric consistently since at least 2005. For pre-2005 years and gaps between surveys, fees were estimated by extrapolating the historical growth rate (~4–5% annually). The 2024 figure ($250) reflects NATP 2023 survey data ($248 average individual return) projected forward.

**Customers per worker** is estimated at 225 returns per preparer per season. H&R Block data suggests ~300–350 returns per employee (23M returns / ~70,000 seasonal employees), but this includes DIY online returns not prepared by a human. Adjusting for the assisted-only channel (~50% of returns) and excluding non-preparer employees (admin, management), ~225 is a reasonable industry-average output for a working preparer. Independent preparers handle fewer (100–175 complex returns) while chain preparers handle more (250–350 simpler returns).

**Why not use BLS annual salary?** The BLS year-round median ($50,560) divided by a typical fee ($250) × returns (225) gives a ratio of ~90%, implying the worker earns almost all the revenue. This is misleading because the BLS figure includes off-season earnings from non-tax-prep work (bookkeeping, payroll). Using the seasonal earnings isolates the tax-preparation ratio specifically, which is what we're measuring.

## Sources

- National Society of Accountants (NSA) biennial Income & Fees Survey — average preparation fees for Form 1040 returns (2005: $110; 2007: $115; 2009: $129; 2016–17: $176 non-itemized, $273 itemized). Reported via NSA press releases and CPA Practice Advisor.
- National Association of Tax Professionals (NATP) 2023 Fee Study — average individual return preparation fee of $248 (2023), up 16%+ from 2021.
- Bureau of Labor Statistics OEWS, occupation 13-2082 (Tax Preparers) — May 2024: median annual $50,560, mean $58,860, employment 64,860.
- BLS Economics Daily (2024) — employment in tax preparation services averaged 95,000 in 2022, down from peak of 113,000 in 2009.
- H&R Block Wikipedia/SEC filings — 23M returns worldwide (2016, 2024); ~70,900 seasonal + 4,200 full-time employees (2024); $3.62B revenue (2024).
- H&R Block historical revenue data via CompaniesMarketCap — revenue from 1996–2025.
- Glassdoor, Indeed, ZipRecruiter — H&R Block seasonal tax preparer hourly rates: $17–19/hr (2024–2026 data).
- IRS Return Preparer Office statistics — ~800,000 active PTIN holders; 53–56% of individual returns filed by paid preparers.
- GAO report on tax compliance costs (2005) — annual preparation and filing costs of $100–150 billion nationally.
- Various industry analyses (wifitalents.com, franchisehelp.com) — industry revenue $14.4B (2023), 3.9% CAGR 2018–2023, $4.9B total industry wages.

## Notes

**The two-channel split is the real story.** The table above covers human-assisted preparation, but roughly half of all filers now use software (TurboTax, H&R Block Online, FreeTaxUSA). In the software channel, the "fundamental worker" is a software engineer. Intuit's consumer tax group generates ~$4.1B in revenue with perhaps 2,000–3,000 engineers — roughly $1.5M in revenue per worker. At an average engineer salary of ~$200K, the software channel's worker ratio is around 12–13%, lower than even the declining human-assisted ratio. The customer pays $80–250 for software that costs essentially nothing per marginal user to deliver.

**The fee/wage divergence accelerated after 2010.** Between 2005 and 2010, the ratio was roughly stable at 31%. Between 2010 and 2024, it dropped from 31% to 22%. This coincides with two trends: (1) chain tax prep firms invested heavily in technology, marketing, and upselling (refund advances, audit protection, identity theft insurance), pulling fee revenue up; (2) a tight labor market pushed up starting wages but not as fast as fees rose.

**Manufactured complexity.** The ticket correctly notes that Intuit and H&R Block spend $2–3M+ annually lobbying against government-prepared returns. In many countries (UK, Japan, most of Scandinavia), the government pre-fills returns and the taxpayer simply confirms. The IRS already has most taxpayers' income data. The entire $14.4B US tax preparation industry exists partly because the tax code is deliberately kept complex enough to need professionals. This means a significant portion of the "customer cost" isn't paying for genuine value creation — it's paying to navigate artificial complexity.

**Independent vs. chain ratio.** The 22% ratio is dominated by the chain model. Independent preparers (CPAs, enrolled agents working solo) retain 75–85% of fees because they ARE the business — minimal overhead beyond software and office space. The industry-blended ratio is probably closer to 35–40% when weighted by share of returns: ~35% chain (ratio ~22%), ~35% CPA firms (ratio ~50%), ~30% independents (ratio ~82%).

**Post-TCJA fee paradox.** The 2017 Tax Cuts and Jobs Act doubled the standard deduction, making 87% of returns non-itemized (simpler). You'd expect fees to drop for simpler returns. Instead, average fees rose 25%+ from 2017 to 2023. Preparers and firms captured the "simplification dividend" as profit, not savings for customers.

<!-- COMPLETE -->
