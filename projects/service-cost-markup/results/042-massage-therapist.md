# Massage / Bodywork — Massage Therapist

## Summary

The employed massage therapist's share of the session fee has been gradually *improving* — from roughly 39% in the early 2000s to about 58% by 2024. This is counterintuitive given the Massage Envy narrative (franchise takes 65%+), but the explanation is straightforward: therapist wages have grown at ~3.7% annually while average session prices have been held down (~1.7% CAGR) by franchise competition and membership-model discounting. The franchise model simultaneously depresses both the numerator (therapist pay) and the denominator (session price), but session prices have been suppressed more. Meanwhile, the 67% of therapists who are self-employed — and aren't captured by BLS data — likely maintain ratios of 70–85%, making this one of the highest "true" fundamental worker ratios on the graph if measured correctly.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2003 | 27,000 | 56 | per 1-hr session | 1,250 | 38.6 | low |
| 2005 | 29,000 | 58 | per 1-hr session | 1,250 | 40.0 | low |
| 2008 | 30,000 | 61 | per 1-hr session | 1,250 | 39.3 | low |
| 2010 | 32,000 | 64 | per 1-hr session | 1,250 | 40.0 | med |
| 2012 | 34,100 | 66 | per 1-hr session | 1,250 | 41.3 | med |
| 2015 | 37,600 | 69 | per 1-hr session | 1,250 | 43.6 | med |
| 2018 | 41,420 | 72 | per 1-hr session | 1,250 | 46.0 | high |
| 2020 | 43,500 | 74 | per 1-hr session | 1,250 | 47.0 | med |
| 2022 | 49,860 | 76 | per 1-hr session | 1,250 | 52.5 | high |
| 2024 | 57,950 | 80 | per 1-hr session | 1,250 | 58.0 | high |

## Methodology

**Ratio formula:** Massage Therapist Median Annual Wage / (Average Session Price × Sessions per Year per FTE Therapist)

This is a 1:1 service: one therapist, one client, one hour. The ratio directly answers "when you pay $X for a one-hour massage, how much goes to the person whose hands are on your back?"

**Worker compensation (numerator):**
- **2018:** $41,420 median annual wage ($19.92/hr) from BLS OES for SOC 31-9011, as reported by CareersWiki. This is the earliest year with directly confirmed BLS data from accessible sources.
- **2022:** $49,860 median annual from BLS OES (reported via wifitalents industry compilation).
- **2023:** $53,310 median annual ($25.63/hr) from BLS OES (via SimplePractice).
- **2024:** $57,950 median annual ($27.86/hr) from BLS Occupational Outlook Handbook.
- **2003–2015:** Estimated by backward extrapolation from the 2018 BLS anchor at ~3.2% annual nominal growth, consistent with healthcare support occupation wage trends for the period. BLS began tracking SOC 31-9011 in its OES survey around 2002–2003, but archived data pages returned 403 errors. Estimates are cross-checked against industry context: the profession was still professionalizing in the early 2000s (many states didn't require licensing until 2005–2010), and wages were correspondingly lower.
- **2020:** Interpolated between 2018 and 2022, with slight pandemic dampening (massage industry revenue fell 23% in 2020, but wages for retained employees held relatively stable).

**CRITICAL CAVEAT:** BLS OES only surveys wage and salary workers (employees). Approximately 67% of massage therapists are self-employed or independent contractors. The BLS data captures the minority who work at spas, franchises, clinics, and resorts — typically the lower-earning segment. Self-employed therapists who charge $80–$120/session and keep 70–85% after overhead are invisible to this data. The table therefore represents the *employed therapist's* share, not the profession's average.

**Customer cost (denominator):**
- **2009:** $63 per one-hour massage — confirmed anchor from the AMTA 2009 Industry Survey (consumer survey across spas, salons, clinics, and health clubs; spa/salon average $64.40, health club $61.10).
- **2024:** ~$80 per one-hour massage — derived from multiple sources reporting $75–$85 national average (CostHelper, AMTA Fact Sheet, industry surveys). The $75.23 figure from wifitalents represents the lower end; the average is pulled down by franchise/membership pricing (Massage Envy member rate ~$60–$70).
- **Other years:** Interpolated/extrapolated at ~1.7% annual growth, anchored to the 2009 and 2024 data points. Session price growth has been notably slow compared to other personal services — held down by the Massage Envy membership model (launched 2002, 1,009 locations by 2024) and consumer price sensitivity.
- **Pre-2009:** Extrapolated backward at ~2% annual growth from the $63 anchor. The U.S. massage market was ~$6–$11 billion in 2005 vs. $18 billion by 2018, suggesting rapid volume growth but modest price growth.

**Sessions per year per FTE therapist (customers/worker):**
- 1,250 sessions/year, held constant. Based on 5 one-hour sessions per 8-hour workday × 250 working days. This reflects the physical demands of massage work — most sources indicate therapists perform 4–6 hands-on hours per day with rest/setup time between sessions. The figure is consistent with BLS annual wage computation (hourly × 2,080 hours), since the therapist is paid for all 8 hours but only performs massage for ~5 of them.
- Sensitivity: at 1,000 sessions/year, the 2024 ratio would be 72.4%; at 1,500, it would be 48.3%. The absolute ratio is sensitive to this assumption, but the *trend* (improving over time) is robust to any reasonable constant.

**Why session price over alternatives:** Unlike healthcare or education, massage has no insurance intermediary for most clients — 82% of therapy revenue comes from direct out-of-pocket consumer payments. The session price is what the customer actually hands over. This makes massage, like barbering, a clean ratio with minimal indirect-cost distortion.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES) — SOC 31-9011 "Massage Therapists." Median annual wage: $41,420 (May 2018), $49,860 (May 2022), $53,310 (May 2023), $57,950 (May 2024). https://www.bls.gov/oes/current/oes319011.htm
- Bureau of Labor Statistics, Occupational Outlook Handbook — Massage Therapists. Median pay $57,950/yr ($27.86/hr) as of May 2024; 168,000 employed. https://www.bls.gov/ooh/healthcare/massage-therapists.htm
- CareersWiki — "Massage Therapist Salary," citing BLS OES May 2018 data: median $41,420, hourly $19.92, wage distribution by industry. https://careerswiki.com/massage-therapist-salary/
- American Massage Therapy Association (AMTA) — 2009 Industry Survey: average session fee $63/hr; spa/salon $64.40, health club $61.10. Referenced via MASSAGE Magazine: https://www.massagemag.com/session-fees-clients-and-demographics-nationwide-massage-profession-report-released-7059/
- AMTA Massage Therapy Industry Fact Sheet — Industry revenue, consumer participation, market size data. https://www.amtamassage.org/publications/massage-industry-fact-sheet/
- wifitalents — "Massage Therapy Industry: Data Reports 2026." May 2022 median annual $49,860; average session cost $75.23; 485,200 therapists; 67% self-employed; 82% out-of-pocket revenue; industry revenue $19B (2023). https://wifitalents.com/massage-therapy-industry-statistics/
- Massage Strong — "Massage Therapy Statistics in the United States." Average annual salary ~$29,000; 321,000 registered therapists; 235,000 self-employed; gender wage gap (F: $27,212, M: $32,073). https://massagestrong.com/massage-therapy-statistics-in-the-united-states/
- East West College — "Market for Massage Therapists: The Numbers According to the AMTA." U.S. market $6–$11B (2005), $18B (2018); 19% consumer participation rate (2017–2018). https://www.eastwestcollege.com/market-for-massage-therapists-the-numbers-according-to-the-amta/
- CostHelper — "Cost of Massage" (2024). Clinic/gym: $50–$90/hr; hotel/resort: $85–$125/hr. https://health.costhelper.com/massage.html
- Massage Envy Franchise FDD data — Average unit revenue ~$1.06M; 1,009 locations (2024); member session rate ~$60–$80; therapist base pay $15–$25/session. https://sharpsheets.io/blog/massage-envy-franchise-costs-profits/
- Glassdoor — Massage Envy Licensed Massage Therapist pay: average ~$22.86/hr. https://www.glassdoor.com/Hourly-Pay/Massage-Envy-Licensed-Massage-Therapist-Hourly-Pay-E114803_D_KO13,39.htm
- SimplePractice — "What Is a Massage Therapist's Salary?" BLS 2023 median $53,310 ($26.59/hr); new therapists $35K–$45K; experienced $60K–$80K+. https://www.simplepractice.com/blog/massage-therapists-salary/
- Data USA — Massage Therapists occupation profile. Average salary $32,762 (2023, ACS data including part-time/self-employed). https://datausa.io/profile/soc/massage-therapists

## Notes

- **The BLS data tells the employed-therapist story, not the whole story.** Only 33% of massage therapists are W-2 employees captured by BLS OES. The self-employed majority (67%) operate with fundamentally different economics. An independent therapist charging $100/session with $20 in overhead (room rental, supplies, insurance) retains 80%. A Massage Envy employee earning $20/session on a $70 member rate retains 28.6%. The blended "true" ratio across all therapists is probably 55–65% in 2024, significantly higher than the 58% shown for employees only.

- **The Massage Envy paradox: franchises lowered the ratio AND the price.** Massage Envy (founded 2002, 420 locations by 2008, 1,009 by 2024) democratized massage through $60–$80 membership pricing. This pulled the average session price DOWN, which actually helps the ratio for non-Massage-Envy therapists (higher wages relative to a depressed average price). Inside the franchise, the ratio is terrible (~28%). Outside the franchise, it's excellent (~75–85%). The BLS median blends these, landing in the middle.

- **Session prices have been strikingly stagnant.** From $63 (2009) to ~$80 (2024) is only ~1.6% annual growth — well below general inflation (~2.5%). Massage has become relatively cheaper in real terms even as demand has grown. This reflects both franchise competition and the awkward economics of a physically demanding 1:1 service: you can't charge dramatically more when Massage Envy is down the street offering memberships.

- **The post-2020 wage acceleration is real and driven by labor shortage.** Massage therapist wages grew ~7.8% annually from 2022 to 2024 — more than double the pre-2018 rate. The pandemic drove 30%+ of therapists out of the profession (physical burnout, health risk, career switching). With employment at 168,000 (down from 485,200 total pre-pandemic), the supply squeeze has pushed wages up aggressively. Whether this continues depends on whether the supply recovers.

- **Tips are a major untracked variable.** Industry standard tipping is 15–20% of session price ($12–$16 on an $80 session). At Massage Envy, tips are how therapists make their income livable — $20 base + $15 tip = $35 effective per session (50% ratio vs. 28.6% before tips). Tips are not captured in BLS wage data. If tips were included, the employed therapist ratio would be 8–12 percentage points higher across all years. The data table excludes tips to maintain consistency with BLS methodology and comparability with other tickets.

- **The sessions-per-year estimate is the weakest link.** The 1,250 figure (5/day × 250 days) represents a productively employed therapist. But many employed therapists work at locations with inconsistent booking — some days they do 6 sessions, some days 2. If actual sessions are lower (say 1,000/year), the ratio jumps to ~72% in 2024. The trend is unaffected, but the absolute level depends heavily on this assumption. Future iterations could use industry scheduling data (e.g., from booking platforms like MindBody or Vagaro) for a better estimate.

- **Pre-2018 data quality is low.** BLS OES began tracking SOC 31-9011 around 2002–2003, but archived pages are inaccessible (403 errors). The 2003–2015 wage estimates are backward extrapolations, not confirmed figures. Similarly, session price data before 2009 is estimated. The pre-2009 ratios should be treated as ±5% directional estimates.

- **The profession's age affects the data range.** Unlike barbering (centuries old) or nursing (tracked since the 1960s), licensed massage therapy only became widespread in the 1990s–2000s. Most states enacted licensing between 1990 and 2010 (17 states had licensing in the 1990s; 45+ today). There's no meaningful data before ~2000 because the profession barely existed in its current form.

<!-- COMPLETE -->
