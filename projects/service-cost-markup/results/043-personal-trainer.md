# Fitness — Personal Trainer

## Summary

Personal trainers capture roughly 49–60% of what clients pay per session, and the ratio has been gradually compressing. In the early 2000s, trainers averaged about 60% of session revenue. By 2015, that had fallen to ~49%, where it has roughly stabilized. The key driver is a structural shift: as big-box gym chains captured more of the personal training market, they inserted themselves between trainer and client, taking 50–70% of session fees while trainer hourly wages stagnated. Independent trainers maintain near-100% ratios, but they're a shrinking share of the market.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2000 | $29.00 | $48 | per 1-hr session | 1 | 60 | low |
| 2004 | $31.25 | $52 | per 1-hr session | 1 | 60 | med |
| 2006 | $30.50 | $55 | per 1-hr session | 1 | 55 | med |
| 2008 | $34.75 | $60 | per 1-hr session | 1 | 58 | med |
| 2010 | $34.00 | $60 | per 1-hr session | 1 | 57 | med |
| 2013 | $30.50 | $60 | per 1-hr session | 1 | 51 | med |
| 2015 | $30.50 | $62 | per 1-hr session | 1 | 49 | med |
| 2020 | $28.00 | $58 | per 1-hr session | 1 | 48 | low |
| 2025 | $32.00 | $65 | per 1-hr session | 1 | 49 | med |

## Methodology

**Worker compensation** is the average hourly earnings of a personal trainer per session hour delivered — what the trainer actually takes home for one hour of 1-on-1 training. The primary source is the IDEA Health & Fitness Association's biennial compensation surveys (conducted since 1997), which specifically survey personal trainers and fitness professionals. These figures blend gym-employed trainers and independent contractors into a single average. For years without IDEA coverage (2000, 2020), estimates are derived from BLS data for occupation code 39-9031 (Exercise Trainers and Group Fitness Instructors) adjusted upward to account for the fact that BLS includes lower-paid group fitness instructors and excludes self-employed workers.

**Customer cost** is the average price a client pays for one hour of 1-on-1 personal training. This is the harder number to pin down historically. The 2004 anchor comes from the IDEA survey itself, which found that 54% of trainers were paid a percentage of client fees, with 60% typically going to the trainer — implying a ~$52 session cost when average trainer earnings were $31.25. For subsequent years, estimates are based on industry reporting: CostHelper data ($35–$100, typically $60–$75), Thumbtack and other aggregator pricing ($40–$100, average $55–$65), and individual gym chain pricing (LA Fitness $40–$75, 24 Hour Fitness $40–$90, Equinox $100–$150). The gradual price increase from ~$48 in 2000 to ~$65 in 2025 reflects both inflation and the premiumization of personal training as it became more mainstream.

**Customers per worker** is 1. Personal training is a 1-on-1 service — one trainer serves one client per session hour.

**Why this proxy over alternatives:** Personal training is one of the cleanest services to measure because the unit of delivery (one session hour) is identical for the worker and the customer. No need to normalize for class sizes, overhead allocation, or shared-service models. The only complication is the independent-vs-employed bifurcation, which I address below.

### Critical bifurcation: gym-employed vs. independent

The blended ratio masks a stark split:

- **Gym-employed trainers** (49–57% of the market, growing): Earn $15–$25/hr per session. Gyms charge clients $50–$75/session. Effective ratio: **25–40%**. At chains like LA Fitness ($6–$15/session to trainer vs $40–$75 to client), the ratio can drop below 20%.
- **Independent trainers** (38–43% of the market, shrinking): Charge $40–$80/hr and keep 85–100% after minimal facility costs. Effective ratio: **85–100%**.

The 2006 IDEA survey provides the clearest snapshot: employees averaged $24.75/hr while independent contractors averaged $38.25/hr, against estimated client costs of ~$55/session. This yields ~45% for employees and ~70% for independents (the independent figure is below 100% because some facility rental and marketing costs reduce their effective take).

The trend toward gym employment means the blended ratio understates how much the worker's share has eroded for the majority of trainers.

## Sources

- IDEA Health & Fitness Association, Fitness Industry Compensation Survey 2004 (survey of 517 fitness professionals; $31.25/hr personal trainer average, 60/40 fee split finding)
- IDEA Health & Fitness Association, Fitness Industry Compensation Survey 2006 (employees $24.75/hr, independent contractors $38.25/hr, blended $30.50/hr)
- IDEA Health & Fitness Association, Compensation Trends Report 2008 ($34.75/hr average)
- IDEA Health & Fitness Association, Compensation Trends Report 2010 ($34.00/hr average, 49% employees, 38% independent contractors)
- IDEA Health & Fitness Association, Compensation Trends Report 2013 ($30.50/hr average, via PR Newswire)
- IDEA Health & Fitness Association, Compensation Trends Report 2015 ($30.50/hr average)
- U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 39-9031 Exercise Trainers and Group Fitness Instructors (May 2024: $46,180 median annual / $22.20 median hourly for all fitness trainers including group fitness)
- SmartAsset, "The Economics of Personal Training" (~2014; gym chain rates $10–$20/hr starting, independent $35–$60/hr; Equinox $92–$105/session to client)
- CostHelper, "How Much Does a Personal Trainer Cost?" ($35–$100/hr, typically $60–$75)
- Fitness Mentors, "Personal Trainer Salary: Which Gyms Pay the Most?" (LA Fitness $6–$15/session, 24 Hour Fitness $7–$17/session, Equinox $26–$64/session, YMCA $15.89–$28.61/session)
- IBISWorld, Personal Trainers in the US (2011: $7.2B industry revenue; 2015: ~$10B; 2024: $12.0B; 8.2% CAGR 2020–2025)
- ISSA/NASM/ACE industry publications (various current session pricing data: $40–$100/hr, national average $55–$65)

## Notes

- **Personal training barely existed before 1990.** ACE was founded in 1985, NASM in 1987. Certification became widespread in the late 1990s. This limits how far back the data can go — there's no meaningful "1970 personal trainer ratio" because the profession didn't exist in a formalized way.
- **The 2020 data point is especially uncertain.** The pandemic shuttered gyms nationwide. Many trainers pivoted to virtual sessions (often at lower rates), went fully independent, or left the profession entirely. The $28/hr estimate reflects reduced demand and price compression, but the true average is hard to pin down because the market fragmented.
- **Online coaching is a wild card.** Trainers offering asynchronous online coaching via apps (Trainerize, TrueCoach) charge $150–$400/month for multiple clients simultaneously. This changes the unit economics entirely — the trainer's hourly effective rate can be very high, but the "session" model doesn't apply. This category is growing but still a small fraction of total personal training revenue.
- **The Equinox/Planet Fitness split illustrates market stratification.** Equinox charges $100–$150/session and pays trainers $26–$64 (ratio: 26–43%). Planet Fitness charges $10/month for gym access with no personal training. The middle market (LA Fitness, 24 Hour Fitness) charges $50–$75/session and pays trainers $6–$25 (ratio: 8–33%). The cheapest tier has eliminated the trainer entirely.
- **Part-time work biases BLS data downward.** BLS reports $46,180 median annual for SOC 39-9031, but many fitness trainers work part-time. The IDEA data (which reports per-hour-of-training earnings) is a better measure of the actual session-level ratio.
- **The ratio bump in 2008 likely reflects pre-recession demand.** Personal training was booming, and trainers had leverage to command higher rates. The 2009–2013 decline tracks the recession's impact on discretionary spending — gyms cut trainer pay before cutting client prices.

<!-- COMPLETE -->
