# 004: Telephone

**System:** Telephone (landline through mobile, including telemarketing and robocalls)
**Time range:** 1876–present
**Expected data quality:** Good — FCC data, YouMail Robocall Index, TCPA records

## Research task

Trace the telephone's full lifecycle from personal communication tool to robocall hellscape. This is one of the longest-running examples — the phone was spam-free for nearly a century, then telemarketing emerged in the 1970s-80s, and robocalls turned it into one of the most spam-saturated systems by the 2020s.

## Key years to sample

- 1880 (early telephone, luxury item)
- 1900 (growing adoption, still personal/business only)
- 1920 (widespread urban adoption)
- 1940 (majority of US households have phones)
- 1950 (suburban boom, phone is primary communication)
- 1960 (near-universal landline adoption)
- 1970 (telemarketing industry emerges)
- 1980 (telemarketing boom, dinner-time calls become cultural complaint)
- 1991 (TCPA passed — first major regulation)
- 1995 (mobile phones spreading, telemarketing continues)
- 2003 (National Do Not Call Registry established)
- 2008 (smartphones, mobile becomes primary phone)
- 2015 (robocalls explode — auto-dialers, VoIP makes calls nearly free)
- 2019 (TRACED Act, STIR/SHAKEN)
- 2022 (peak robocall volume ~50 billion calls/year in US)
- 2025 (present state — most people don't answer unknown numbers)

## Data sources to check

- **YouMail Robocall Index** — monthly US robocall volume estimates (2015–present)
- **FCC complaint data** — telemarketing and robocall complaints
- **FTC Do Not Call Registry** reports
- **FCC historical statistics** on telephone penetration
- **CTIA** (wireless industry) annual reports
- **Direct Marketing Association** historical telemarketing data
- **Pew Research** — surveys on phone use and spam calls
- **Bureau of Labor Statistics** — historical phone cost data

## Dimensions to collect

1. **Spam percentage** — % of calls that are robocalls/telemarketing/scam. YouMail data for modern era. For pre-2000, estimate from DMA telemarketing call volume vs. total call volume.
2. **Total message volume** — total phone calls per year (all types). FCC/CTIA data.
3. **Primary users** — % of US population for whom phone calls are their primary communication method
4. **Total users** — % of US households with a telephone (landline or mobile)
5. **User cost per message** — cost per call. Long-distance rates (historically expensive), local calls (free with subscription), mobile minutes, modern unlimited plans. Inflation-adjusted.
6. **User time per message** — average call duration
7. **Infrastructure cost per message** — telco cost per call minute. Dramatic decline with VoIP — this is what enabled robocalls.
8. **Platform ARPU** — average revenue per phone subscriber per year
9. **Barrier to reach** — phone-number (you need someone's number, but number lists are purchasable/dialable sequentially)
10. **Reach per message** — one-to-one (but auto-dialers effectively make it one-to-many)
11. **Gatekeeping** — open (anyone can call any number)
12. **Years to spam saturation** — ~1876 to whenever robocalls exceeded 50% of calls received by average person
13. **Regulatory response** — TCPA (1991), Do Not Call Registry (2003), TRACED Act (2019), STIR/SHAKEN (2021). Note the pattern: regulation every ~15 years, none of it fixing the problem.
14. **Defenses** — answering machines, caller ID (1990s), Do Not Call Registry, call blocking apps (Nomorobo, RoboKiller), STIR/SHAKEN caller authentication, "Scam Likely" carrier labels

## Special notes

The telephone is the longest arc from clean to spammed. Nearly 100 years of relatively spam-free use before telemarketing took off. The key inflection point was VoIP making calls essentially free — same pattern as email. Also notable: the behavioral response. Most people under 40 now refuse to answer calls from unknown numbers. The phone has functionally died as a system for receiving unexpected communication.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
