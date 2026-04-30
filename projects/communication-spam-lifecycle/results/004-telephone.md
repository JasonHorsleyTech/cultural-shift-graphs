# 004: Telephone — Results

## Summary

The telephone is the longest-arc spam story in this dataset: nearly a century of essentially zero unsolicited calls, followed by a rapid descent into robocall chaos. Alexander Graham Bell's invention became publicly available in 1876, reached 35% household penetration by 1920, hit 50% by 1946, and was nearly universal (97%+) by 2000. For most of that time, making a phone call required either an operator or expensive long-distance rates — natural barriers that kept spam economically impossible. The cost per call, especially long distance, was prohibitively high: a 1950 New York-to-LA call cost $3.70 for three minutes (~$48 in 2026 dollars).

Telemarketing emerged as a recognizable industry in the late 1960s-1970s, with business spending on telemarketing exceeding direct-mail advertising for the first time in 1981. By the late 1980s, "dinnertime telemarketing calls" had become a universal cultural complaint. The 1991 Telephone Consumer Protection Act (TCPA) was the first major regulatory response, followed by the National Do Not Call Registry in 2003, which saw 50 million numbers registered before its start date and reduced telemarketing calls by ~80% for registered users (from ~30/month to ~6/month). But VoIP changed everything: when call infrastructure costs dropped from dollars-per-minute to fractions-of-a-penny, auto-dialing operations could blast billions of calls for almost nothing. Robocall volume exploded from an estimated 30.5 billion in 2017 to a peak of 58.5 billion in 2019, settling into a 50-55 billion range through 2025. In 2025, 57% of all robocalls were unwanted telemarketing or scam calls — about 30 billion per year, or roughly 160 per person.

The behavioral response is the most telling datapoint: Pew Research found in 2020 that 80% of Americans don't answer calls from unknown numbers. A 2022 TNS survey put that figure at 75% who will "never" answer unknown calls. The phone has effectively died as a system for receiving unexpected communication. Despite successive regulations (TCPA 1991, DNC 2003, TRACED Act 2019, STIR/SHAKEN mandate 2021), spam calls continue at roughly the same volume — the pattern of too-late regulation failing to fix a too-cheap-to-send problem, identical to email.

## Key Data

**System profile:** Launched 1876 | Spam never reached formal crossover | Still alive (barely, as a voice channel) | VoIP destroyed the cost barrier

### By the Numbers

- **52.5 billion** robocalls in 2025 — roughly 160 per person per year
- **58.5 billion** robocalls at peak (2019) — the worst year
- **80%** of Americans don't answer calls from unknown numbers (Pew, 2020)
- **75%** say they will *never* answer unknown calls (TNS, 2022)
- **$48** cost of a 3-minute NYC-to-LA call in 1950 (2026 dollars) — vs. $0.001--0.005 per VoIP robocall today
- **50 million** numbers registered on Do Not Call before its start date (2003) — reduced calls 80%, then VoIP obliterated the gains
- **246.8 million** numbers on the DNC Registry by 2022, with 3 million complaints still filed that year
- **30 calls/month** average household telemarketing load before Do Not Call (dropped to 6, then robocalls brought it right back)

### Regulations

| Year | Name | What it did |
|------|------|-------------|
| 1991 | Telephone Consumer Protection Act (TCPA) | First major US law targeting unsolicited calls. Banned auto-dialed/prerecorded calls to cell phones without consent. Restricted call hours to 8am--9pm. |
| 2003 | National Do Not Call Registry | FTC opt-out registry. 50M numbers registered before launch day. Cut telemarketing 80% for registrants. 72% of Americans signed up by 2007. |
| 2009 | FTC Robocall Ban | Banned most prerecorded commercial telemarketing calls without prior written consent. |
| 2019 | TRACED Act | Mandated STIR/SHAKEN caller authentication. Extended FCC enforcement window from 1 to 4 years. Increased penalties. |
| 2021 | STIR/SHAKEN Mandate | FCC deadline requiring carriers to implement cryptographic caller ID verification. Effectiveness limited — spammers adapt, and both ends must deploy it. |

### Defenses

| Year | Defense | Description |
|------|---------|-------------|
| 1971 | Answering machines | First consumer call-screening tool. Widespread by the 1980s. |
| 1992 | Caller ID | BellSouth rolled out consumer Caller ID. Spammers later defeated it via number spoofing. |
| 2003 | Do Not Call Registry | Initially effective (80% reduction), then increasingly ignored by illegal robocallers using spoofed numbers and overseas operations. |
| 2013 | Call blocking apps (Nomorobo) | FTC Robocall Challenge winner. Followed by RoboKiller, Hiya, Truecaller. Crowdsourced databases + pattern recognition. |
| 2017 | Carrier spam labels ("Scam Likely") | T-Mobile pioneered caller ID labels for suspected robocalls. AT&T, Verizon followed. Free tier labels; premium tiers auto-block. |
| 2021 | STIR/SHAKEN authentication | Cryptographic caller ID deployed by major carriers. Assigns A/B/C attestation levels based on number legitimacy. |

### Timeline Highlights

- **1876--1970** — Nearly a century of zero spam. Operator-connected calls, expensive long distance ($22 for 3 minutes NYC-SF in 1920), and flat-rate local service meant there was no economic model for mass unsolicited calling. The term "telemarketing" didn't even exist yet.
- **1981** — Telemarketing spending exceeds direct mail for the first time. Predictive dialers automate rapid-fire calling. "Dinnertime telemarketing calls" become a universal cultural complaint.
- **1991** — TCPA enacted: the problem is bad enough for Congress. Average household: ~30 telemarketing calls per month. Caller ID begins rolling out to consumers.
- **2003** — Do Not Call Registry launches. 50 million numbers sign up before it even starts. Telemarketing calls drop 80% for registrants. Brief golden age.
- **2008** — The lull. DNC Registry is working, smartphones are arriving, VoIP robocalls haven't exploded yet. Spam share drops to ~8%. This is the last quiet year.
- **2015--2019** — VoIP destroys the cost barrier. Bulk calling goes from dollars-per-minute to fractions-of-a-penny. Robocalls explode from 30.5B (2017) to 58.5B (2019). "Scam Likely" labels appear. Call-blocking apps proliferate. Most Americans stop answering unknown numbers entirely.
- **2025** — 52.5B robocalls, 57% of which are unwanted telemarketing or scam calls. AI-powered scam calls emerging as new threat. The phone has functionally died as a channel for receiving unexpected communication — most Americans under 40 treat unknown calls as spam by default.

## Sources

### Primary Data Sources
- [YouMail Robocall Index](https://robocallindex.com/) — Monthly and annual US robocall volume estimates (2015–present). Cited by FCC as definitive source for national robocall trends.
- [U.S. Consumers Received 52.5 Billion Robocalls in 2025 (PR Newswire)](https://www.prnewswire.com/news-releases/us-consumers-received-52-5-billion-robocalls-in-2025--over-4-1-billion-in-december-according-to-youmail-robocall-index-302656174.html) — 2025 annual totals and call type breakdown.
- [Americans Hit by Over 58 Billion Robocalls in 2019 (PR Newswire)](https://www.prnewswire.com/news-releases/americans-hit-by-over-58-billion-robocalls-in-2019-says-youmail-robocall-index-300987126.html) — Peak robocall year.
- [Robocalls Top 50.3 Billion in 2022 (PR Newswire)](https://www.prnewswire.com/news-releases/robocalls-top-50-3-billion-in-2022--matching-2021-call-volumes-despite-enforcement-efforts-301714297.html) — 2022 annual total.
- [Americans Hit by Just Under 46 Billion Robocalls in 2020 (PR Newswire)](https://www.prnewswire.com/news-releases/americans-hit-by-just-under-46-billion-robocalls-in-2020-says-youmail-robocall-index-301215139.html) — Pandemic-year drop.
- [Nearly 48 Billion Robocalls in 2018 (PR Newswire)](https://www.prnewswire.com/news-releases/nearly-48-billion-robocalls-made-in-2018-according-to-youmail-robocall-index-300782638.html) — 2018 annual total.

### Government and Regulatory Sources
- [FCC TRACED Act Implementation](https://www.fcc.gov/TRACEDAct) — TRACED Act provisions and STIR/SHAKEN timeline.
- [FCC Call Authentication (STIR/SHAKEN)](https://www.fcc.gov/call-authentication) — Technical details on caller ID authentication framework.
- [GAO-05-113: Telemarketing Implementation of Do-Not-Call Registry](https://www.gao.gov/assets/a245185.html) — Early DNC Registry effectiveness data.
- [FCC Trends in Telephone Service](https://docs.fcc.gov/public/attachments/DOC-301823A1.pdf) — Historical telephone penetration and subscription data.
- [FCC Subscribership and Penetration Data](https://docs.fcc.gov/public/attachments/DOC-287688A8.pdf) — State-by-state telephone penetration 1984–present.
- [US Census Historical Housing Tables: Telephones](https://www.census.gov/data/tables/time-series/dec/coh-phone.html) — Decennial census telephone data 1960–2000.
- [FTC Do Not Call Registry](https://www.donotcall.gov/) — Consumer registration data and complaint statistics.
- [USAFacts: How many spam phone calls do Americans receive?](https://usafacts.org/articles/how-many-spam-phone-calls-do-americans-receive/) — DNC complaint trends and state-by-state data.

### Surveys and Research
- [Pew Research: Most Americans don't answer unknown calls (2020)](https://www.pewresearch.org/short-reads/2020/12/14/most-americans-dont-answer-cellphone-calls-from-unknown-numbers/) — 80% of Americans don't answer unknown calls.
- [TNS Survey: 75% of Americans will never answer unknown calls (2022)](https://www.businesswire.com/news/home/20220726005226/en/TNS-Survey-75-of-Americans-Will-Never-Answer-Calls-from-Unknown-Numbers) — Behavioral response to robocall epidemic.
- [Pew Research: Mobile Device Ownership](https://www.pewresearch.org/internet/fact-sheet/mobile/) — Cell phone and smartphone adoption rates.
- [Comparitech: Phone Spam Statistics 2017-2024](https://www.comparitech.com/blog/information-security/phone-spam-statistics/) — Hiya and Truecaller spam call data.
- [SellCell: How Many Phone Calls Are Made a Day (2026)](https://www.sellcell.com/blog/how-many-phone-calls-are-made-a-day/) — 3.1 billion mobile calls/day in US, call duration trends, mobile minutes data.

### Historical and Industry Sources
- [Wikipedia: History of the telephone in the United States](https://en.wikipedia.org/wiki/History_of_the_telephone_in_the_United_States) — AT&T daily call volume milestones (5M in 1900, 50M in 1925, 500M in 1975).
- [Wikipedia: National Do Not Call Registry](https://en.wikipedia.org/wiki/National_Do_Not_Call_Registry) — Pre-/post-DNC telemarketing call volumes (30/month to 6/month).
- [Hagley Museum: 1930 telephone penetration](https://www.hagley.org/research/news/hagley-vault/1930-almost-41-american-housing-units-featured-telephone) — 41% by 1930, Depression-era decline.
- [NAAG: History of Do Not Call and Telemarketing Evolution](https://www.naag.org/attorney-general-journal/do-not-call-the-history-of-do-not-call-and-how-telemarketing-has-evolved/) — Regulatory history.
- [RiverB2B: History of Telemarketing](https://www.riverb2b.com/post/the-history-of-telemarketing) — Industry growth 1970s–2000s, manual vs. predictive dialing.
- [Reference for Business: Telemarketing Encyclopedia](https://www.referenceforbusiness.com/encyclopedia/Str-The/Telemarketing.html) — Telemarketing spend exceeded direct mail in 1981, $660B revenue by 2001.
- [Early US Telephone Industry Data](http://galbithink.org/telcos/early-telephone-data.htm) — Guide to historical telephone statistics from FCC, ICC, and Census sources.
- [Ask MetaFilter: Long Distance Rates 1970s-80s](https://ask.metafilter.com/211826/Long-Distance-Rates-For-the-Late-Seventies-and-Early-Eighties) — Historical AT&T rate card data.
- [Statista: US wireless service ARPU 1993-2021](https://www.statista.com/statistics/183882/monthly-arpu-through-mobile-wireless-services-in-the-us-since-2004/) — Monthly ARPU trend data.

### Cost Data
- [Telnyx: PSTN vs VoIP](https://telnyx.com/resources/what-is-pstn) — VoIP calls $0.01-0.09/minute vs. traditional PSTN rates.
- [ClearlyIP: VoIP vs Traditional Telephony Cost Analysis](https://clearlyip.com/2024/05/03/cost-analysis-comparing-voip-with-traditional-telephony-expenses/) — 30-50% savings with VoIP, landlines cost businesses 50% more.
- [UtilitySmarts: Average Phone Bill in 1970](https://www.utilitysmarts.com/utility-bills/what-was-the-average-phone-bill-in-1970/) — Historical residential telephone rates.

## Confidence Assessment

**Overall confidence: MODERATE-HIGH**

- **Robocall data (2017–2025):** HIGH confidence. YouMail Robocall Index is FCC-cited and provides consistent methodology. Year-by-year totals are well-documented.
- **Telephone adoption rates:** HIGH confidence. Census Bureau decennial data provides firm anchors at 1920, 1930, 1940, 1960, 1990, 2000. Gaps filled from FCC data.
- **Pre-2015 spam percentages:** MODERATE confidence. No systematic measurement of telemarketing call volume as % of total calls existed before YouMail. Estimates derived from DNC Registry data (~30 telemarketing calls/month pre-2003), industry revenue data, and contemporary accounts. These are informed estimates, not measurements.
- **Total call volumes (pre-2000):** MODERATE confidence. AT&T daily call volume milestones (1900, 1925, 1975) provide anchors; intervening decades are interpolated. Modern mobile call data from CTIA/SellCell is more reliable.
- **Cost data:** MODERATE confidence. Nominal rates are well-documented; inflation adjustment introduces ±10% uncertainty. ARPU figures for modern era based on carrier SEC filings; historical ARPU reconstructed from residential rate data.
- **Infrastructure costs:** LOW-MODERATE confidence. PSTN vs. VoIP cost comparisons are well-established directionally, but per-call infrastructure cost estimates are rough — telcos do not publish these figures. The key fact (VoIP made calls essentially free for spammers) is well-supported.
- **Primary/total user share:** MODERATE confidence. Total user share anchored to Census data. Primary user share (% using phone as primary communication method) is estimated from survey data and cultural analysis — no single authoritative source tracks this metric historically.

<!-- COMPLETE -->
