# Real Estate (Home Inspection) — Home Inspector

## Summary

Home inspection is one of the most transparent services in real estate: one person, one house, one fee, no middlemen. The fundamental worker ratio is remarkably high (~70–80%) and has been slowly declining as the industry professionalized — licensing requirements, mandatory E&O insurance, report-writing software, and continuing education have all added overhead since the industry's informal origins in the 1970s–80s. This is the "control case" for real estate: adjacent to home buying but free of commission distortion.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1990 | 28,000 | 175 | per inspection | 200 | 80 | low |
| 1995 | 39,500 | 225 | per inspection | 225 | 78 | low |
| 2000 | 48,000 | 260 | per inspection | 240 | 77 | low-med |
| 2005 | 59,600 | 318 | per inspection | 250 | 75 | med |
| 2010 | 41,400 | 315 | per inspection | 180 | 73 | med |
| 2015 | 53,800 | 325 | per inspection | 230 | 72 | med |
| 2020 | 55,400 | 350 | per inspection | 220 | 72 | med |
| 2025 | 64,400 | 400 | per inspection | 230 | 70 | med |

## Methodology

**Worker compensation** = annual net income of a typical self-employed home inspector after business expenses but before personal income taxes. Approximately 70–80% of home inspectors are self-employed sole proprietors, making this the representative model. Business overhead includes vehicle costs (gas, maintenance), E&O and liability insurance, report-writing software, tools and equipment, marketing, and licensing/continuing education fees. Health insurance is excluded from overhead for consistency with other salaried-worker tickets.

**Customer cost** = the average fee charged for a standard single-family home inspection (~1,500–2,500 sq ft). The fee is paid directly by the buyer to the inspector — no intermediary, no insurance pass-through, no tax funding. This is the cleanest customer-cost-to-worker-comp pipeline in the entire dataset.

**Customers/worker** = average number of inspections performed per inspector per year. Full-time inspectors typically do 1–2 per day; industry averages are lower because they include part-timers and seasonal variation. The 2010 dip reflects the post-housing-crash collapse in transaction volume.

**Overhead estimation by era:**
- **1990:** ~20%. Industry was barely regulated. Few states required licensing. E&O insurance was uncommon. Reports were handwritten or simple checklists. Marketing was Yellow Pages and realtor referrals.
- **2000:** ~23%. Some states starting to require licensing. E&O insurance becoming standard. Computerized reports emerging.
- **2005:** ~25%. More licensing states. Standard E&O ($1,500–2,500/yr). Report software ($100–150/mo). ASHI survey anchors this year's data.
- **2010–2015:** ~27–28%. Most states now require licensing and CE. E&O premiums rising. Software subscriptions (HomeGauge, Spectora) standard. Digital marketing costs.
- **2025:** ~30%. Full regulatory maturity in most states. E&O/GL insurance ($2,500–4,000/yr), reporting software ($150–250/mo), drone/thermal imaging equipment becoming expected, ongoing CE requirements.

**The ratio** = Worker Comp / (Customer Cost × Customers/Worker). This simplifies to net profit margin on the business — the percentage of every dollar the customer pays that ends up as the inspector's income.

**Key anchor point:** The ASHI 2005 Business Operations Study reported an average inspection fee of $318 and average gross revenues exceeding $75,000. At 250 inspections/year, this implies ~$79,500 gross; with 25% overhead, net income ≈ $59,600, yielding a 75% ratio. Other years are estimated by CPI-adjusting the fee, estimating volume from housing market conditions, and scaling overhead to reflect increasing regulatory and operational costs.

**Why this ratio is so high:** Home inspection has almost zero intermediation. There's no insurance company, no government agency, no franchise corporate office (for most inspectors) standing between the worker and the fee. The customer pays the inspector directly for labor performed that day. The only "markup" is the inspector's own business overhead. This makes it a near-ideal control case against which to compare commission-heavy real estate services, insurance-intermediated healthcare, or tax-funded public services.

## Sources

- ASHI 2005 Home Inspection Business Operations Study — average fee $318, gross revenues >$75,000 (referenced via homeinspector.org)
- Bureau of Labor Statistics, Occupational Employment and Wages, Construction and Building Inspectors (47-4011) — median annual wage $67,700–$72,120 (2018–2024); note this category includes government building inspectors, not just residential home inspectors (bls.gov/oes)
- HomeAdvisor/Angi 2025 data — national average $343, typical range $296–$424
- Spectora 2023 Home Inspection Industry Report — 12 inspections/month average per inspector
- InterNACHI fee calculator and business operations guidance (nachi.org/pricing-profitable-inspection-fees.htm)
- Pillar to Post FDD — franchise royalty of 7% of gross revenue, brand fee of 4% (franchisechatter.com)
- GITNUX 2025 Home Inspection Industry Statistics — industry revenue ~$3–5 billion, 25,000+ certified inspectors
- Working RE, "The Evolution of Home Inspection" and "History of Home Inspection" — industry timeline from 1970s origins
- CREIA, "The History of Home Inspections" — 1976 founding of ASHI and CREIA, 1984 Easton v. Strassberger decision

## Notes

- **This is a control case.** The ratio here (70–80%) is likely among the highest in the entire dataset. It shows what a service looks like when the customer pays the worker directly with minimal intermediation. Compare this against realtor commissions, healthcare, or higher education to see how much "the system" absorbs in other industries.
- **The BLS category "Construction and Building Inspectors" (47-4011) is a poor proxy.** It blends government building code inspectors (salaried, lower pay, different job) with private home inspectors (self-employed, per-inspection fees). BLS also explicitly excludes self-employed workers from OEWS data. Since most home inspectors are self-employed, BLS wage data systematically understates the field.
- **Franchise vs. independent matters.** An inspector working under a franchise (Pillar to Post, HouseMaster, WIN) pays 7–11% of gross revenue in royalties plus other fees, reducing their ratio by ~10 points compared to an independent. But franchises represent a minority of the industry (~15–20% of inspectors).
- **The 2008–2012 dip is real.** Home inspection volume is directly tied to existing home sales. When the housing market collapsed, inspectors didn't lose their fee rate — they lost their volume. Annual inspections fell from ~250 to ~150–180 for many inspectors, devastating income even though the per-inspection ratio held.
- **Fee vs. home price disconnect is notable.** Inspection fees have risen modestly (roughly tracking CPI), while home prices have roughly tripled since 1990. The work doesn't change whether the house is worth $200K or $800K. Inspectors in high-cost markets do charge more ($500–700+), but not proportionally to home values. This is the opposite of realtor commissions, which scale with price.
- **The industry is only ~50 years old.** ASHI was founded in 1976. Home inspections became standard practice in the 1990s after the 1984 Easton v. Strassberger ruling shifted liability. Pre-1990 data is essentially nonexistent because the industry barely existed in organized form.
- **Emerging cost pressures:** Thermal imaging cameras ($300–2,000), drones for roof inspection, radon/mold/sewer-scope add-ons, and increasingly complex reporting requirements are pushing overhead higher. Some of these generate additional revenue (add-on fees), but the baseline inspection ratio is slowly compressing.

<!-- COMPLETE -->
