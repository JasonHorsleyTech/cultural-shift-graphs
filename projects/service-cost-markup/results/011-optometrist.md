# Vision Care — Optometrist

## Summary

The optometrist's share of the total vision care bill has been steadily eroding — from roughly 11% in the 1980s to about 8% today. The culprit is almost entirely the eyewear side of the equation: frames that cost $70 in 1980 now average $350, a 5x increase driven largely by EssilorLuxottica's near-monopoly, while optometrist compensation has grown more modestly (4.5x over the same period). The optometrist is the person the customer interacts with, but takes home less than 9 cents of every dollar the customer spends on the visit.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1980 | 30,000 | 105 | 1 vision episode (exam + Rx glasses) | 2,600 | 11.0 | low |
| 1990 | 62,000 | 200 | 1 vision episode (exam + Rx glasses) | 2,800 | 11.1 | med |
| 2000 | 91,000 | 300 | 1 vision episode (exam + Rx glasses) | 3,000 | 10.1 | med-high |
| 2005 | 93,000 | 345 | 1 vision episode (exam + Rx glasses) | 3,000 | 9.0 | med |
| 2010 | 96,000 | 395 | 1 vision episode (exam + Rx glasses) | 3,000 | 8.1 | med |
| 2015 | 103,000 | 445 | 1 vision episode (exam + Rx glasses) | 3,000 | 7.7 | med |
| 2020 | 121,000 | 480 | 1 vision episode (exam + Rx glasses) | 2,800 | 9.0 | med-high |
| 2024 | 135,000 | 525 | 1 vision episode (exam + Rx glasses) | 3,000 | 8.6 | high |

## Methodology

**Worker compensation:** BLS Occupational Employment and Wage Statistics (OES) median annual wage for optometrists (SOC 29-1041) from 2000 onward. Pre-2000 figures are estimates based on physician-to-optometrist income ratios (optometrists historically earn 40–55% of physician median) and professional income benchmarks from census data and academic surveys. The median (not mean) is used because high-earning practice owners skew the average significantly — Review of Optometry survey data (which reports means) runs 20–40% higher than BLS medians.

**Customer cost proxy:** Total cost of one "vision episode" — a comprehensive eye exam plus one pair of prescription eyeglasses with standard single-vision lenses. This combined number was chosen because (a) the majority of eye exam patients (~65%) purchase eyewear at the same visit, and (b) the ratio of exam cost to eyewear cost is the heart of the story. The exam fee and eyeglasses price are estimated separately and summed:

- *Exam fees:* Derived from AOA survey data, Medicare/Medicaid fee schedules, and consumer surveys. Cross-checked against the BLS CPI for "Eyeglasses and eye care" (base 1986 = 100). AOA data shows vision plan reimbursements were $30–55 in ~1995 and $35–90 in 2020, while private-pay/uninsured fees are 2–3x insurance reimbursement rates.
- *Eyeglasses prices:* Derived from industry sources, consumer surveys, and CPI data. Pre-1995 prices reflect a fragmented, competitive market (retail max ~$99 for a quality pair in the late 1980s, per industry sources). Post-1995 prices reflect Luxottica's consolidation of frame manufacturing, retail, and insurance — retail averages climbed from ~$140 in 1990 to ~$350 in 2024.

**Customers per worker:** Estimated from optometrist workforce density (BLS, AOA) and eye care utilization rates. BLS reports optometrist density rising from 11.06 per 100,000 (1990) to ~16.16 per 100,000 (2017). Current practice management surveys (AOA, Review of Optometric Business) report 2,500–3,500 patient visits per optometrist per year, with ~3,000 as the midpoint. Historical figures scaled using density ratios and estimated utilization rates (~30% of population per year in 1980, rising to ~36% by 2024). The 2020 figure (2,800) reflects COVID-related practice closures.

**Why this proxy over alternatives:** An alternative would be to use only the exam fee (ignoring eyewear). This would yield a much higher ratio (~25–30%) but would miss the real economic story: the customer's total bill is dominated by eyewear costs that the optometrist doesn't control or meaningfully profit from. The combined number captures the full economic burden on the consumer and exposes the wedge between the professional's contribution and the total cost.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 29-1041 "Optometrists" — median annual wage data for 2000–2024. https://www.bls.gov/oes/current/oes291041.htm
- Bureau of Labor Statistics, Consumer Price Index for "Eyeglasses and eye care" (1986–2026). CPI index values from https://www.in2013dollars.com/Eyeglasses-and-eye-care/price-inflation
- American Optometric Association, "Plans' stagnant fee schedules undervalue primary eye care" — vision plan reimbursement rates ($30–55 in ~1995 vs $35–90 in 2020; 70% of ODs report no fee increase in 5+ years). https://www.aoa.org/news/advocacy/third-party/vision-plan-reimbursment
- Review of Optometry, annual Income Survey series: 2009 survey (avg net income $114,410), 2015 survey (full-time avg $150,123), 2019 survey (avg $170,341). https://www.reviewofoptometry.com/department/income-survey
- Ferris State University / AOA, "2022 AOA Survey of Optometric Practice — Income from Optometry." https://www.ferris.edu/optometry/pdfs-docs/2022_AOA_Income.pdf
- National Trends in the United States Eye Care Workforce from 1995 to 2017 (PubMed 32445703) — optometrist density 11.06/100K (1990) to 16.16/100K (2017). https://pubmed.ncbi.nlm.nih.gov/32445703/
- EssilorLuxottica corporate data and antitrust filings — controls ~60–80% of global eyewear market, owns LensCrafters, Pearle Vision, Sunglass Hut, Ray-Ban, Oakley, and EyeMed insurance. Frame manufacturing cost $4–8, designer frames ~$15, lenses ~$1.25 each; retail prices $300–800+. https://en.wikipedia.org/wiki/EssilorLuxottica
- Washington Consumers' Checkbook, "How EssilorLuxottica Dominates the Eyewear Market." https://www.checkbook.org/washington-area/opticians-optometrists-buying-eyewear/articles/How-EssilorLuxottica-Dominates-the-Eyewear-Market-4568
- Review of Optometric Business, practice management benchmarks: average practice revenue ~$973K, ~55% from patient care fees, ~40% from optical sales, 2,500–3,500 patient visits/year. https://reviewob.com/by-the-numbers-how-many-ods-are-actually-practicing-medical-eyecare/
- AllAboutVision, "How Much Does an Eye Exam Cost?" (2024: average $136–$194 without insurance). https://www.allaboutvision.com/eye-care/eye-exam/cost/how-much/
- AllAboutVision, "Average Cost of Prescription Glasses" (2024: frames ~$231, single-vision lenses ~$112). https://www.allaboutvision.com/eyewear/eyeglasses/cost/average-eyeglass-cost/

## Notes

- **The Luxottica effect is the dominant story.** EssilorLuxottica (formed 2018 from the merger of Luxottica and Essilor) controls manufacturing, retail, and insurance for eyewear. They own the frame brands (Ray-Ban, Oakley, Persol, Oliver Peoples), the retail chains (LensCrafters, Pearle Vision, Sunglass Hut, Target Optical), AND the vision insurance company (EyeMed). Frames that cost $4–8 to manufacture sell for $300–800. An active antitrust class action (filed 2023) accuses EssilorLuxottica and 48 co-defendants of conspiring to inflate prices by up to 1,000%.

- **The optometrist is squeezed from both sides.** Vision plan reimbursement for eye exams has been essentially flat for 25 years (AOA data: $30–55 in ~1995, $35–90 in 2020), while eyewear — which the optometrist performs but Luxottica profits from — has skyrocketed. 70% of optometrists report receiving no increase in fees from their largest vision plan in at least 5 years.

- **Online disruption is real but limited.** Warby Parker (founded 2010, glasses from $95) and Zenni (frames from $6.95) have created budget alternatives, but EssilorLuxottica still dominates ~60–80% of the market. Online eyewear represents only ~15–20% of total eyeglasses sales. The average consumer still walks into a Luxottica-owned or Luxottica-supplied store and pays $300–500 for a pair of glasses.

- **The 2020 ratio bump is a COVID artifact.** Patient volume dropped ~7% due to practice closures, which reduces the denominator. Optometrist salaries (for employed ODs) were relatively unaffected since many practices received PPP loans.

- **Pre-2000 data is estimated.** BLS OES data for optometrists begins around 1997–1999. Earlier salary figures are derived from physician income ratios and professional income surveys. Eyeglasses pricing data before 1986 (when BLS began tracking the eye care CPI) is based on industry recollections and fragmentary sources. Confidence improves significantly from 2000 onward.

- **If measured against exam-only cost, the ratio is much higher (~25–30%).** Optometrist income per visit ($45 in 2024) against a $175 exam fee = 25.7%. But this ignores the economic reality that the customer's bill is dominated by eyewear. The combined metric is more honest about what vision care actually costs the consumer.

- **Compared to other healthcare professions,** the optometrist's share is notably low because of the product component. A physician visit doesn't typically include a $350 physical product. The closest analogue might be a dentist where crowns/prosthetics add a large product cost — but even dental labs don't have one company controlling 80% of the market.

<!-- COMPLETE -->
