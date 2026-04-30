# Emergency Medical Services — EMT / Paramedic

## Summary

The EMT/paramedic worker ratio has declined from roughly 31% in 2000 to about 18% in 2024, nearly halving over 24 years. Ambulance charges have tripled while EMT wages have grown less than 75%. The sharpest decline coincides with private equity's aggressive entry into EMS after 2008 — KKR's $9.9B acquisition of Envision/AMR in 2018 being the most notable example. Despite providing life-saving medical care, EMTs remain among the lowest-paid healthcare workers, often earning less than retail employees, while the bills they generate have become a poster child for American healthcare cost inflation.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2000 | 24,000 | 425 | per ground ambulance transport | 180 | 31.4 | low |
| 2005 | 27,000 | 525 | per ground ambulance transport | 180 | 28.6 | low |
| 2010 | 30,360 | 650 | per ground ambulance transport | 180 | 25.9 | med |
| 2015 | 32,000 | 850 | per ground ambulance transport | 180 | 20.9 | med |
| 2020 | 36,650 | 1,100 | per ground ambulance transport | 180 | 18.5 | med |
| 2024 | 41,340 | 1,300 | per ground ambulance transport | 180 | 17.7 | med-high |

## Methodology

**Worker compensation:** Median annual wage for BLS occupation code 29-2040 (Emergency Medical Technicians and Paramedics, combined category). BLS-confirmed data points at 2010 ($30,360), 2016 (~$32,680), 2020 (~$36,650), and 2024 ($41,340 for EMTs, $58,410 for paramedics — now separate codes; EMT median used since EMTs outnumber paramedics ~2:1 and staff every ambulance). Years 2000 and 2005 are estimated by backward extrapolation at ~2.5% annual growth from the 2010 anchor point, consistent with general wage trends in the healthcare support sector during that period.

**Customer cost proxy: Average revenue collected per ground ambulance transport (all-payer).** This represents the actual economic exchange — what the ambulance service receives from the patient plus their insurer combined. Key anchor points:

- 2001: Medicare national average payment ~$309 (GAO-07-383)
- 2004: Provider cost per transport $415 (GAO-07-383); Medicare payment ~$320
- 2010: Median provider cost $429 (GAO-13-6); Medicare payment ~$350
- 2012: Average commercial allowed amount $820 (HCCI, employer-sponsored insurance)
- 2017: Average commercial charge BLS $800 / ALS $1,042 (FAIR Health)
- 2020: Average commercial charge BLS $940 / ALS $1,277; allowed BLS $522 / ALS $758 (FAIR Health)
- 2021: Average commercial allowed amount $1,093 (HCCI)
- ~2022: Average reimbursement across all payers $1,147 per transport (EMS industry survey via EMS1)
- 2024: Average ambulance cost $1,383 (Compare the Market international analysis)

The all-payer average is lower than commercial-only figures because Medicare (~$330-350) and Medicaid pay well below commercial rates. I estimated all-payer averages for each year by weighting available data across payer types (Medicare ~30%, Medicaid ~15%, commercial ~35%, self-pay/other ~20%).

**Customers per worker (transports per EMT/year):** Estimated at ~180, derived from total annual ground ambulance transports (~30-35 million) divided by estimated ambulance-based EMTs/paramedics (~185,000-200,000, approximately 70% of total BLS-reported employment of ~270,000). This accounts for the fact that each transport has a 2-person crew — each transport is attributed once per crew member when dividing total transports by total workers, meaning the revenue each EMT generates equals (their share of transports × revenue per transport). The 180 figure is a central estimate; actual values range roughly 160-200 depending on year and assumptions about non-transport EMT employment.

**Why this proxy over alternatives?** Several "customer cost" measures exist for ambulances:
- *Billed charges* ($1,500-2,500+ recently) — what providers put on the bill; inflated and rarely collected in full
- *Allowed amounts* (commercial) — what insurer + patient actually pay; higher than Medicare
- *Medicare reimbursement* ($300-350) — well below cost, subsidized by commercial payers
- *Provider cost per transport* ($429 in 2010, $2,673 in ~2022) — cost to operate, not what's charged

I chose all-payer collected revenue because it best represents the total economic exchange between service and customer across the full patient population. It avoids the inflation of billed charges while capturing more than just the Medicare floor.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), occupation 29-2040 (EMTs and Paramedics), May 2010, 2016, 2020, 2023, 2024 — [BLS OES 29-2040](https://www.bls.gov/oes/current/oes292043.htm)
- GAO-07-383, "Ambulance Providers: Costs and Expected Medicare Margins Vary Greatly" (2007) — provider cost $415 in 2004, Medicare payments by area — [GAO Report](https://www.gao.gov/assets/a261088.html)
- GAO-13-6, "Ambulance Providers: Costs and Medicare Margins Varied Widely" (2012) — median cost $429 in 2010, transport growth 33% from 2004-2010 — [GAO Report](https://www.gao.gov/products/gao-13-6)
- Health Care Cost Institute, "Ambulance Trends over 10 Years (2012-2021)" — average commercial allowed $820 in 2012, $1,093 in 2021 — [HCCI Report](https://healthcostinstitute.org/all-hcci-reports/ambulance-trends-over-10-years-2012-2021/)
- FAIR Health, "Ground Ambulance Services in the United States" (2022) — BLS charges $800→$940, ALS charges $1,042→$1,277, 2017 to 2020 — [FAIR Health](https://www.fairhealth.org/article/fair-health-releases-study-on-ground-ambulance-services)
- EMS1/NAEMT survey data, "Quantifying the Gap Between Expenses and Revenue for EMS Services" — average all-payer reimbursement $1,147, provider cost $2,673 — [EMS1](https://www.ems1.com/ems-trend-report/quantifying-the-gap-between-expenses-and-revenue-for-ems-services)
- Compare the Market (2024), international ambulance cost analysis — U.S. average $1,383 per ride plus $19.49/mile — [EMS1 Coverage](https://www.ems1.com/billing-and-administration/u-s-has-most-expensive-ambulance-billing-international-analysis-finds)
- National Association of State EMS Officials — 28.5M annual 911 dispatches, 18,200+ agencies, 73,500 ground vehicles — [EMS1](https://www.ems1.com/ambulance-service/articles/national-association-of-state-ems-officials-releases-stats-on-local-agencies-911-calls-LPQTHJrK2oIpxuR1/)
- PMC, "Trends in demographic and employment characteristics of US EMTs and paramedics, 2011-2019" — workforce grew from 216,310 to 289,830 — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9262352/)
- The American Prospect, "Private Equity Chases Ambulances" (2019) — PE entry post-2008, KKR acquisitions — [American Prospect](https://prospect.org/2019/10/03/private-equity-chases-ambulances-emergency-medical-transport/)
- MedPAC, "Ambulance Services Payment System" Payment Basics (2024) — labor = 70% of ambulance costs — [MedPAC](https://www.medpac.gov/wp-content/uploads/2024/10/MedPAC_Payment_Basics_24_ambulance_FINAL_SEC.pdf)

## Notes

**The "$40 ambulance ride" framing is misleading but instructive.** The ticket's napkin math (2 EMTs × $18/hr × 45 min = ~$40 in labor vs. $3,000 bill) uses only *direct on-call time*. In reality, EMTs are paid for all working hours, most of which are standby time waiting for calls. The actual EMT labor cost per transport, including standby, is closer to $230 for a 2-person crew ($41,340 salary / 180 transports = $230 per EMT, ×2 for the crew = $460). Against a $1,300 all-payer average: the crew's fully-loaded salary share is about 35%. Not the 1.3% the napkin math suggests, but still leaving 65% for everything else.

**Where the other 65% goes (2024):** Per MedPAC, labor represents 70% of ambulance operating costs. Since EMT crew wages are ~35% of revenue, the remaining ~35% of labor costs go to dispatchers, administrators, billing staff, supervisors, and medical directors. The 30% non-labor portion covers vehicles ($150,000-250,000 per ambulance, replaced every 5-7 years), medical equipment, fuel, insurance, facilities, and regulatory compliance. For PE-owned companies, add debt service and profit extraction.

**Private equity transformed the industry.** After the 2008 recession, PE firms began acquiring ambulance companies as municipalities struggled to fund services. KKR acquired Envision Healthcare (parent of AMR, the nation's largest ambulance company) for $9.9B in 2018. Air ambulance charges rose 60%+ from 2012-2017 under PE ownership. Ground ambulance charges followed. Just three air ambulance companies now control two-thirds of the U.S. market. Envision filed Chapter 11 bankruptcy in May 2023, crushed by PE-loaded debt — a pattern seen repeatedly in PE healthcare acquisitions. The ratio decline is steepest in the 2010-2017 window coinciding with peak PE consolidation.

**Volunteer EMS complicates the picture.** Approximately 25-30% of U.S. EMS agencies are entirely volunteer-staffed, predominantly in rural areas. For these services, the EMT "wage" is $0, making the ratio 0% — the customer pays the same or similar fees for labor that costs nothing. The ratio in this analysis applies only to paid, professional EMTs.

**The collection gap is enormous.** The average cost to provide an ambulance transport is $2,673, but the average amount collected is only $1,147 — a shortfall of $1,526 per transport (57% underpayment). Medicare reimburses only ~$330, well below cost. Many EMS agencies survive on tax subsidies, subscription programs, or cross-subsidization from commercial patients. This means the "customer cost" in the ratio actually understates what the service truly costs to provide.

**EMTs remain shockingly underpaid relative to the billing they generate.** An EMT making $41,340/year generates roughly $234,000 in annual transport revenue (180 transports × $1,300). Their employer collects 5.7× their salary in revenue from their work. For comparison, a fast-food worker making $35,000 might generate $100,000-150,000 in revenue. EMTs generate substantially more revenue per dollar of compensation than most service workers, despite holding medical certifications and making life-or-death decisions.

<!-- COMPLETE -->
