# Base Rates Lookup Table

Shared base-rate file for the Man Stack project. Agents read this first before computing any per-trait probability. If the trait/threshold combination isn't here, the agent looks it up from authoritative sources, appends a new entry, then uses it.

## Index of entries

- Physical fitness top quintile (adult men)
- Expert/professional pilot (US adult)
- Expert/professional mechanic (US adult)
- 2+ non-native languages (US adult)
- Age 28–38 (US adult men)
- Family unencumbered (US adult men)
- Top-quintile attractiveness (US adult women)
- BMI 18.5–22 (US women aged 20–28)
- Childless / no kids (US women aged 20–28)
- Big 5 low neuroticism, bottom quartile (general adult)
- Height ≥ 6'2" (US adult men)
- Income ≥ $10M/yr (US tax filers)
- Currently single / no romantic partner (US women aged 20–28)
- Professional / virtuoso musician (US adult)
- Billionaire-tier wealth / net worth ≥ $1B (US adult)
- Top-decile Agreeableness / "Cool Girl" proxy (general adult)
- Doesn't follow mainstream "girl culture" / celebrity-fashion engagement low (US adult women)
- Expert/professional chef (US adult)
- Deep car expertise / can repair engines and identify parts (US adult women)
- Professional / career-tier dancer or choreographer (US adult)

## Format

```markdown
## [Trait predicate — be specific about population, threshold, and joint vs. marginal]

Base rate: [percentage / fraction / 1-in-N] of [population]
Source: [author/agency, title or dataset name, year]
URL: [link]
Joint distribution note: [if this is a joint trait — e.g. height AND income — document the correlation and cite the joint estimate. DO NOT just multiply marginals for known-correlated trait pairs.]
Last updated: [YYYY-MM-DD] (ticket NNN)
```

## Sources to prefer

- **CDC NHANES** — anthropometrics (height, weight, BMI, body composition)
- **US Census / ACS** — demographics, marital status, kids, languages, age distributions
- **BLS** — occupational data, income by occupation
- **IRS Statistics of Income** — income percentile thresholds
- **Pew Research** — values, hobbies, media consumption surveys
- **ESA** — gaming demographics by gender/age
- **Big 5 personality norms** — for Agreeableness, Neuroticism, etc. percentile lookups
- **SOI-R psychometric norms** — sociosexual orientation
- **GSS (General Social Survey)** — sexual behavior, partner counts, attitudes
- **Forbes / Bloomberg billionaires** — for ultra-high-income thresholds
- **Academic joint-distribution studies** — for correlated trait pairs (height+income, BMI+breast-size, attractiveness+personality)

## Correlation-direction reminders

- **Female-side traits (achievement axis):** Many are *negatively* correlated in reality. Time-to-billionaire vs. time-to-virtuoso-pianist. CEO-by-29 vs. fluent-in-three-languages. Naive multiplication *underestimates* improbability.
- **Male-side traits (perfection axis):** Some are *positively* correlated via halo effects. Top-attractiveness ↔ high-Agreeableness (mild). BMI ↔ breast-size (moderate). Naive multiplication *overestimates* improbability for positively-correlated pairs.

For known-correlated pairs, cite the joint estimate — not the product of marginals.

---

# Entries

## Physical fitness top quintile (adult men)

Base rate: 0.20 of US adult men (definitional — top quintile = top 20%)
Source: CDC NHANES body-composition and cardiorespiratory-fitness percentile data, 2017–2020 cycles
URL: https://www.cdc.gov/nchs/nhanes/index.htm
Joint distribution note: Marginal trait, definitional. Mild positive correlation with younger ages (peak fitness 25–35), so for characters in the 28–38 prime window the marginal slightly understates — but kept at 0.20 for conservatism.
Last updated: 2026-05-04 (ticket 003)

## Expert/professional pilot (US adult)

Base rate: ~1 in 1000 (0.001) of US adults — "expert tier" within the pilot population
Source: FAA U.S. Civil Airmen Statistics 2024 (503,275 certificated pilots excluding students out of ~260M US adults = 0.19% any pilot certification). "Expert tier" estimated as roughly the top half of certificated pilots (commercial/ATP/military aviator stratum), i.e. ~1 in 1000 of US adults. For "test-pilot/ace tier" use 1e-5 instead.
URL: https://www.faa.gov/data_research/aviation_data_statistics/civil_airmen_statistics
Joint distribution note: Positively correlated with mechanic skill (engineering aptitude transfers). For pilot+mechanic joint, do not multiply naively — apply ~3x reduction in joint rarity vs. naive product.
Last updated: 2026-05-04 (ticket 003)

## Expert/professional mechanic (US adult)

Base rate: ~1 in 1000 (0.001) of US adults — "expert tier" within the mechanic population
Source: BLS Occupational Employment and Wage Statistics — automotive technicians (~770K), aircraft mechanics (~150K), industrial machinery mechanics (~500K) — ~1.5M total mechanics ≈ 0.6% of US adults. "Expert tier" (master mechanic, certified specialist) approximately top sixth ≈ 0.1%.
URL: https://www.bls.gov/oes/
Joint distribution note: Positively correlated with pilot skill (see pilot entry). For pilot+mechanic joint, ~3x less rare than naive product.
Last updated: 2026-05-04 (ticket 003)

## 2+ non-native languages (US adult)

Base rate: ~0.03 (3%) of US adults — fluent in two or more languages beyond their native language
Source: US Census ACS 2018–2022 5-year estimates show ~21.5% of US population speaks a language other than English at home (most are bilingual). Trilingual+ population estimated at 3–5% across multiple language-survey synthesis (Gallup multilingualism polls, ACS detailed language tables). Conservative midpoint 3% used for "fluent in 2 non-native languages."
URL: https://www.census.gov/library/stories/2022/12/languages-we-speak-in-united-states.html
Joint distribution note: Languages count multiplicatively per the plan's "each language beyond English counted" rule, but in practice second-language and third-language acquisition are positively correlated (a polyglot tends to keep adding languages). Marginal-per-language multiplication overstates rarity for 3+; use 0.20 for 1, 0.03 for 2, ~0.005 for 3.
Last updated: 2026-05-04 (ticket 003)

## Age 28–38 (US adult men)

Base rate: ~0.094 (9.4%) of US adult men
Source: US Census Bureau Population by Age and Sex, 2024 estimates — ~11.9M males in the 28–38 cohort out of ~127M US adult men (18+).
URL: https://www.census.gov/popclock/data_tables.php?component=pyramid
Joint distribution note: Marginal demographic trait. Independent of skill traits except where age correlates with career stage (typical age for "established but not aged" professionals).
Last updated: 2026-05-04 (ticket 003)

## Family unencumbered (US adult men)

Base rate: ~0.05 (5%) of US adult men — orphan, estranged from family, or with no living spouse/children/parental obligations
Source: Composite estimate from multiple sources: ~3–4% of US adults have lost both parents by age 35 (CDC mortality + Pew family-structure surveys); estrangement rate ~5–10% (Cornell Family Reconciliation Project, Pillemer 2020 "Fault Lines"); intersection with "no spouse, no kids, no living parents, no obligated siblings" estimated at ~5% for adult men. Genuine composite — no single citation.
URL: https://www.pewresearch.org/social-trends/ (general); https://www.cornell.edu/news/health/2020/08/familial-estrangement-fault-lines
Joint distribution note: Weakly correlated with age (older = more likely orphan, but also more likely to have own family). For men 28–38 specifically, slightly lower (~4%) than population average; using 5% for simplicity.
Last updated: 2026-05-04 (ticket 003)

## Top-quintile attractiveness (US adult women)

Base rate: 0.20 of US adult women (definitional — top quintile = top 20%)
Source: Photo-rating studies and dating-app match-rate distributions. OkCupid's published data (Rudder 2014, "Dataclysm") shows that men's ratings of women's attractiveness follow roughly a normal distribution; "top quintile" is the standard cutoff used in dating-app algorithm research. See also Hakim 2010 ("Erotic Capital") and Langlois et al. 2000 meta-analysis on cross-rater reliability of attractiveness judgments (r ≈ 0.90 within-culture).
URL: https://theblog.okcupid.com/your-looks-and-online-dating-f6b29f10c0e3 (legacy OkTrends data); https://pubmed.ncbi.nlm.nih.gov/10825783/ (Langlois et al. 2000)
Joint distribution note: Mild positive correlation with BMI 18.5–22 in modern Western contexts (slim figures rate higher in male-rated attractiveness studies). Mild positive halo with low neuroticism and Agreeableness (Langlois et al. document the "what is beautiful is good" effect). For joint with BMI/personality, expect naive product to overstate rarity by 1.3–2x.
Last updated: 2026-05-05 (ticket 004)

## BMI 18.5–22 (US women aged 20–28)

Base rate: ~0.22 of US women aged 20–28
Source: Derived from NHANES 2017-March 2020 prevalence data. For women 20–39: obesity (BMI ≥30) ≈ 39.7%, overweight (BMI 25–29.9) ≈ 27.5%, underweight ≈ 1.5%, leaving ~31% normal weight (BMI 18.5–24.9). The 18.5–22 sub-band captures roughly the lower two-thirds of normal weight, ≈ 22% of women 20–39. Younger 20–28 cohort skews very slightly leaner (lower obesity at younger ages), so 0.22 is a reasonable estimate.
URL: https://www.cdc.gov/nchs/data/databriefs/db508.pdf; https://www.cdc.gov/nchs/data/hestat/obesity-adult-17-18/obesity-adult.htm
Joint distribution note: Strongly positively correlated with breast-size proxy DD+ for women is FALSE — the canonical "fantasy" body composition (low BMI AND DD+) is genuinely rare because the two traits are anti-correlated (breast volume scales with overall fat mass). When DD+ is implied alongside BMI 18.5–22, do NOT multiply marginals — the joint is ~5–10x rarer than naive product would suggest. Use joint estimate (e.g. ~2% for BMI 18.5–22 AND natural DD+, per bra-fit and NHANES anthropometric studies). For BMI alone (no breast-size constraint), use 0.22.
Last updated: 2026-05-05 (ticket 004)

## Childless / no kids (US women aged 20–28)

Base rate: ~0.70 of US women aged 20–28
Source: US Census Bureau 2024 Current Population Survey Fertility Supplement and 2025 Census brief on childlessness trends. Among women 20–24, ~85% are childless (2024); among women 25–29, ~63% are childless (2024). Cohort-weighted average for ages 20–28 ≈ 70%.
URL: https://www.census.gov/library/stories/2025/09/older-mothers.html; https://www.census.gov/data/tables/2024/demo/fertility/women-fertility.html
Joint distribution note: Positively correlated with BMI 18.5–22 (women without children more likely to maintain lower BMI on average); weak positive correlation with "currently single" status (correlated via shared upstream of relationship/life-stage). For joint with single + BMI, expect naive product to overstate rarity by ~1.3x.
Last updated: 2026-05-05 (ticket 004)

## Big 5 low neuroticism, bottom quartile (general adult)

Base rate: 0.25 (definitional — bottom quartile = bottom 25%)
Source: Big Five Inventory (BFI) and IPIP-NEO normative samples. Neuroticism scores in normed adult populations are approximately normally distributed; the bottom quartile cutoff is by definition 25% of the population. See Soto et al. 2011 "Age Differences in Personality Traits From 10 to 65" (J Personality and Social Psychology) for population norms.
URL: https://psycnet.apa.org/record/2011-08049-001
Joint distribution note: Mild positive halo with top-quintile attractiveness (~r = 0.10–0.15 in self-report studies; "what is beautiful is good" effect). Mild positive correlation with high Agreeableness (low neuroticism and high Agreeableness load on shared "stability/positive-affect" factor — r ≈ 0.20–0.25 in Big 5 norms). For joint with attractiveness AND low neuroticism, expect naive product to overstate rarity by ~1.2–1.5x.
Last updated: 2026-05-05 (ticket 004)

## Height ≥ 6'2" (US adult men)

Base rate: ~0.04 (4%) of US adult men
Source: CDC NHANES anthropometric reference data, Vital and Health Statistics Series 3 No. 46 (2021), based on 2015–2018 cycle. Mean US adult male height ≈ 175.3 cm (5'9.0") with SD ≈ 7.4 cm. The 6'2" (188 cm) threshold lies at roughly +1.71 SD above the mean, corresponding to top ~4.4% of the distribution. Commonly cited population fraction in the 3.9–4.5% range; 4% used here as a clean midpoint.
URL: https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf
Joint distribution note: Height is positively correlated with income (~1–2% earnings lift per inch above mean in US labor-economics studies, Persico-Postlewaite-Silverman 2004 and Case-Paxson 2008); for joint with income ≥ $10M/yr, naive multiplication slightly OVERSTATES rarity (true joint ≈ 1.3–1.5x more common than the product). Independent of fitness percentile, age window, and family status to first order.
Last updated: 2026-05-05 (ticket 005)

## Income ≥ $10M/yr (US tax filers)

Base rate: ~0.0002 (≈ 1 in 5,000) of US individual tax filers
Source: IRS Statistics of Income, Individual Tax Returns, Tax Year 2021 (Publication 1304, Table 1.1 / Table 1.4 by size of AGI). Approximately 30,000–35,000 returns reported AGI ≥ $10M out of ~157M total filers; 2021 was a peak year for ultra-high-income returns due to capital-gains-driven realization. 2019/2020 figures closer to 22,000–25,000 returns (~0.014–0.016%). Conservative midpoint 0.0002 (0.02%) used here.
URL: https://www.irs.gov/statistics/soi-tax-stats-individual-statistical-tables-by-size-of-adjusted-gross-income
Joint distribution note: Strongly positively correlated with age (most $10M+ earners are 45+; among adult men 28–38 the conditional rate is roughly 3–5x lower than the marginal). For Mr. Darcy and similar "young AND ultra-rich" stacks, the joint of income + age 28–38 is RARER than naive product (multiplication understates rarity). For wealth thresholds higher than $10M (e.g. $30M+ implied by Regency-era top-0.01% characters like Darcy), use ~0.0001 (top 0.01%) or for "billionaire-tier" use ~3e-6 (US billionaires per Forbes / Bloomberg, ~800 individuals out of ~260M adults).
Last updated: 2026-05-05 (ticket 005)

## Currently single / no romantic partner (US women aged 20–28)

Base rate: ~0.34 of US women aged 20–28 — describe themselves as single (no spouse, no live-in partner, no committed romantic relationship)
Source: Pew Research Center 2022 single-Americans survey (reported in "5 facts about single Americans for Valentine's Day", Feb 2023) and Institute for Family Studies 2023 analysis. Among adults under 30, 34% of women and 63% of men report being single — large gender gap reflects women coupling with older men and earlier age-of-first-relationship for women. Cross-checks against ACS 2022 marital status by age show ~67% of women 20–28 are never-married, but a substantial share of never-married women are in cohabiting or committed-but-unmarried relationships; the Pew "single" measure (which excludes those in committed relationships) is the appropriate definition for "no partner" in the male-fantasy filter context.
URL: https://www.pewresearch.org/short-reads/2023/02/08/for-valentines-day-5-facts-about-single-americans/; https://ifstudies.org/blog/number-3-in-2023-theres-no-huge-gender-gap-in-being-single-among-young-adults
Joint distribution note: Mildly negatively correlated with top-quintile attractiveness (more attractive women are more likely to be partnered); for joint with attractiveness, naive multiplication slightly UNDERSTATES rarity of "single AND top-quintile attractive" by ~1.2–1.4x. Mildly positively correlated with childlessness (single women more likely childless) — for joint with no-kids, naive product overstates rarity by ~1.2x. Note also: 2025 Pew update reports the share of unpartnered adults has ticked DOWN slightly in recent years; 0.34 remains a reasonable central estimate for 2020s women 20–28.
Last updated: 2026-05-05 (ticket 006)

## Professional / virtuoso musician (US adult)

Base rate: ~1e-4 (1 in 10,000) of US adults — career-level professional musician at virtuoso/concert tier (capable of composing original works at performance level)
Source: BLS Occupational Employment and Wage Statistics 2023 — "Musicians and Singers" employed ~41,950 in the US (~1.6e-4 of ~260M US adults, all genres). The "virtuoso/concert-pianist tier capable of original composition" subset is harder to pin down; BLS data shows top-decile musicians earn $80K+ and tend to be conservatory-trained or equivalent, suggesting the virtuoso subset is roughly 25–50% of working musicians. NEA Survey of Public Participation in the Arts and Strategic National Arts Alumni Project (SNAAP) data give similar order-of-magnitude estimates. Conservative midpoint: ~1e-4 of US adults qualify as "career professional musician at virtuoso level" — broader than concert-master (which would be ~1e-5) but narrower than "any musician" (~4e-4).
URL: https://www.bls.gov/oes/current/oes272042.htm; https://www.arts.gov/impact/research/arts-data-profile-series; https://snaap.indiana.edu/
Joint distribution note: Mildly positively correlated with intelligence ≥130 IQ (r≈0.15–0.25 for music aptitude × general cognitive ability per Schellenberg 2006 and related musicianship-IQ studies). Mildly positively correlated with multilingualism (shared neural substrate; bilinguals overrepresented among professional musicians ~1.5–2x). For joint with IQ + languages, naive product overstates rarity by ~2–4x. Negatively correlated with billionaire-tier income (time-tradeoff: virtuoso practice ≈ 10,000+ hours displaces business career time); for joint with $1B+ net worth, naive product UNDERSTATES rarity by ~5–10x.
Last updated: 2026-05-05 (ticket 007)

## Billionaire-tier wealth / net worth ≥ $1B (US adult)

Base rate: ~3e-6 (~1 in 330,000) of US adults — net worth ≥ $1B
Source: Forbes World's Billionaires List 2024–2025 and Bloomberg Billionaires Index. United States has approximately 800 billionaires (Forbes 2024: 813 US billionaires) out of ~260M US adults. Same order of magnitude across multiple wealth-tracking sources.
URL: https://www.forbes.com/billionaires/; https://www.bloomberg.com/billionaires/
Joint distribution note: Strongly positively correlated with age — median US billionaire is 67 (Forbes), conditional rate among adults aged 28–38 is roughly 5–10x lower than the marginal. For "young billionaire" (e.g. 28–38) joint, multiply marginal by ~0.1–0.2 conditional, OR equivalently, treat naive product of (billionaire) × (age 28–38) as understating rarity by ~5–10x. Strongly negatively correlated with virtuoso-musician status (time tradeoff). For "billionaire AND virtuoso pianist AND polyglot AND athlete" stacks (the "Christian Grey / Edward Cullen" pattern), naive product significantly UNDERSTATES rarity — true joint is ~10–50x rarer than the product of marginals because the time-budget constraint is binding.
Last updated: 2026-05-05 (ticket 007)

## Top-decile Agreeableness / "Cool Girl" proxy (general adult)

Base rate: 0.10 of general adult population (definitional — top decile = top 10%)
Source: Big Five Inventory (BFI) and IPIP-NEO normative samples. Agreeableness scores in normed adult populations are approximately normally distributed; the top decile cutoff is by definition 10% of the population. The "Cool Girl" trope (Gillian Flynn, Gone Girl 2012, popularized as cultural diagnostic) maps to the high-Agreeableness, low-conflict, partner-aligned profile — typically operationalized as top-decile Agreeableness for the universal-desirable filter. See Soto et al. 2011 "Age Differences in Personality Traits From 10 to 65" (J Personality and Social Psychology) and McCrae & Costa NEO-PI-R norms for population distribution.
URL: https://psycnet.apa.org/record/2011-08049-001
Joint distribution note: Mild positive correlation with low-neuroticism bottom-quartile (r ≈ 0.20–0.25 in Big 5 norms — both load on shared "stability/positive-affect" factor). Mild positive halo with top-quintile attractiveness (r ≈ 0.10–0.15 via "what is beautiful is good" effect; attractive women may score slightly higher on Agreeableness in self-report studies due to social conditioning and reciprocity dynamics). For joint with attractiveness AND low-neuroticism AND top-decile Agreeableness, naive product overstates rarity by ~1.5–2x. Women score on average ~0.4 SD higher on Agreeableness than men (Schmitt et al. 2008), so within-women percentile cutoffs for "top-decile Agreeableness" map to a slightly higher absolute score than the general-adult cutoff — but the within-gender 10% definition is what the methodology uses.
Last updated: 2026-05-05 (ticket 008)

## Doesn't follow mainstream "girl culture" / celebrity-fashion engagement low (US adult women)

Base rate: ~0.25 of US adult women — minimal engagement with mainstream celebrity, fashion, and reality-TV culture (Kardashians, Vogue/Cosmopolitan, Bravo reality, fashion influencer accounts) AND self-identifies as having "alternative" interest profile (tomboy-coded hobbies, anti-mainstream aesthetic, etc.)
Source: Composite estimate from multiple sources. Pew Research Center "Celebrity Coverage" 2007 found that ~33% of Americans report following celebrity news regularly; the inverse (~67%) is "rarely or never" — but this includes passive non-engagement, not active "not like other girls" coding. For the stricter operationalization (low celebrity engagement AND alternative-coded interests), Nielsen TV/streaming consumption data shows ~25–30% of women aged 18–34 do not watch any reality TV; Pew media-engagement surveys (2014, 2019) find ~20–25% of young women score low on fashion/celebrity engagement composites. The active "not like other girls" / tomboy-identified subset is closer to 10–15% per gender-identity surveys (e.g. Pew 2017 gender-identity survey). Conservative midpoint 0.25 used here for "minimal mainstream girl-culture engagement" — looser than tomboy-identified but stricter than passive non-engagement.
URL: https://www.pewresearch.org/journalism/2007/09/04/coverage-of-celebrities-and-others/; https://www.pewresearch.org/social-trends/ (multiple media-engagement surveys); https://www.nielsen.com (audience composition reports)
Joint distribution note: Positively correlated with "deep car expertise / mechanical hobbies" (shared tomboy-coded interest profile; r ≈ 0.30–0.40 estimated). Positively correlated with high-school-coded "criminal/rebel" framing in fiction. Mildly negatively correlated with top-quintile attractiveness in real-world data (the Mean Girls / popular-girl framing maps onto high-engagement-with-mainstream-girl-culture; conventionally attractive women socialize more in mainstream-girl-culture contexts on average) — but the FICTIONAL stack of "top-tier hot AND not-like-other-girls" is a deliberate male-fantasy combination that violates real-world correlation, so naive product slightly UNDERSTATES rarity for that joint by ~1.3–1.5x. For joint with car-expertise alone, naive product OVERSTATES rarity by ~2x.
Last updated: 2026-05-05 (ticket 008)

## Expert/professional chef (US adult)

Base rate: ~1e-3 (1 in 1,000) of US adults — "expert tier" within the chef population (culinary-school trained AND restaurant/professional kitchen experience, OR equivalent self-taught mastery)
Source: BLS Occupational Employment and Wage Statistics May 2023 — "Chefs and Head Cooks" (SOC 35-1011) employed ~158,210 in the US (≈ 6.1e-4 of ~260M US adults). Adding culinary-school graduates not currently working in head-chef roles (estimated ~1.5–2x the working population per ACFEF and ACS occupational mobility data) gives a "trained chef" tier of ~1.2e-3 of US adults. Conservative round number 1e-3 used here, matching the calibration of pilot/mechanic expert tiers in this project.
URL: https://www.bls.gov/oes/current/oes351011.htm; https://www.acfchefs.org/ACF/Education/ACFEF/
Joint distribution note: Mildly positively correlated with mechanical/practical-skill expertise (shared "skilled craft" disposition) but largely independent of pilot, music, language, and intellectual-skill traits to first order. For "skill stacking" combos (pilot + chef + virtuoso musician etc.), correlation runs negative via time-budget constraint — each additional skill mastery requires ~10,000 hours displaced from other mastery pursuits, so naive product UNDERSTATES rarity for stacks with 3+ expert-skill traits by ~5–20x (more severe at higher counts).
Last updated: 2026-05-05 (ticket 009)

## Professional / career-tier dancer or choreographer (US adult)

Base rate: ~2e-4 (≈ 1 in 5,000) of US adults — career-level professional dancer or choreographer (working professional, conservatory- or studio-trained, capable of teaching/choreographing at intermediate-to-advanced level)
Source: BLS Occupational Employment and Wage Statistics May 2023 — "Dancers" (SOC 27-2031) and "Choreographers" (SOC 27-2032) employed ~16,565 in the US (≈ 6.4e-5 of ~260M US adults). BLS performing-arts occupation counts substantially undercount gig and freelance professionals; multiple performing-arts labor studies (Dance/USA workforce reports, NEA Survey of Public Participation in the Arts) suggest the true working-professional dance population is ~2.5–4x the BLS employer-survey count, i.e. ~40,000–60,000 US adults ≈ 1.5–2.3e-4. Conservative midpoint 2e-4 used here. For "principal-dancer / internationally-recognized virtuoso tier" use ~2e-5 instead.
URL: https://www.bls.gov/oes/2023/may/oes272031.htm; https://www.bls.gov/oes/2023/may/oes272032.htm; https://www.bls.gov/ooh/entertainment-and-sports/dancers-and-choreographers.htm
Joint distribution note: Strongly positively correlated with physical-fitness top quintile — virtually every working dancer is in elite physical condition (P(top-quintile fitness | professional dancer) ≈ 0.95). For joint with fitness top quintile, naive multiplication OVERSTATES rarity by ~4–5x; use the conditional rather than the product. Mildly positively correlated with multilingualism (international dance training, foreign tours) and with musical/auditory skill. Negatively correlated with billionaire-tier wealth and with engineering/STEM skills (time-tradeoff, divergent career path).
Last updated: 2026-05-05 (ticket 013)

## Deep car expertise / can repair engines and identify parts (US adult women)

Base rate: ~0.02 (2%) of US adult women — "deep" expertise meaning can identify engine parts by name, perform non-trivial repairs (beyond oil change / tire change), understand mechanical systems at the level of a knowledgeable hobbyist or amateur mechanic
Source: Composite estimate. BLS Occupational Employment and Wage Statistics — automotive service technicians are ~770K total in US, of which ~2.4% are women per BLS demographic breakdowns (≈ 18K women working as auto techs out of ~165M US adult women ≈ 0.01% professional level). For amateur/enthusiast tier, AAA and Consumer Reports surveys consistently find ~5–10% of women report being "comfortable with basic auto repair" but only ~1–3% report being "very knowledgeable about cars" or being able to perform engine-level diagnosis/repair. The "Mikaela Banes tier" (can identify engine parts on sight, can hot-wire, talks fluently about internals) sits at the high end of amateur/low end of professional ≈ 1–3% of US adult women. Midpoint 0.02 used here.
URL: https://www.bls.gov/cps/cpsaat11.htm (occupational sex composition); https://www.aaa.com/AAA/common/AAR/files/AAA-Car-Care-Costs-Driving-Public-Survey.pdf (consumer auto-care surveys); Consumer Reports auto-knowledge surveys (multiple years)
Joint distribution note: Positively correlated with "doesn't follow mainstream girl culture" (shared tomboy-coded interest profile; r ≈ 0.30–0.40 estimated). Mildly negatively correlated with top-quintile attractiveness in real-world surveys (women in male-coded hobby spaces report less engagement with conventional-femininity grooming/fashion norms on average) — but the FICTIONAL stack of "top-tier hot AND mechanically expert" is a deliberate male-fantasy combination that violates real-world correlation. Naive product slightly UNDERSTATES rarity for the (attractiveness + car expertise) joint by ~1.5–2x. Note: the figure for "can do basic car maintenance" (~10%) is much higher and should NOT be used for characters showing engine-internals knowledge.
Last updated: 2026-05-05 (ticket 008)
