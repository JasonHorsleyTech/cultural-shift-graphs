# 010: Email

**System:** Electronic mail (SMTP-based email)
**Time range:** 1990s–present (mainstream era)
**Expected data quality:** Excellent — Symantec/Cisco/Kaspersky annual reports, Radicati Group, Statista

## Research task

Trace email's spam lifecycle. Email is the canonical example and has the best data. The trajectory is well-documented: near-zero spam in the early 1990s, steady rise through the late 90s, peak at 85-95% of all email being spam around 2008-2012, then a slight decline due to better filtering (but filtering just made spam invisible, not absent). Email is technically "still alive" but functionally destroyed for many users — important messages are buried in noise.

## Key years to sample

- 1991 (early consumer internet, email is exciting and clean)
- 1995 (AOL "You've got mail" era, first notable spam campaigns)
- 1997 (spam becoming annoying, first anti-spam tools)
- 1999 (spam ~30% of email traffic)
- 2001 (spam growing rapidly, Nigerian prince emails)
- 2003 (CAN-SPAM Act passed — widely considered ineffective)
- 2004 (spam ~70-80% of email)
- 2006 (Gmail launches spam filter, changes the game)
- 2008 (spam peaks at ~90-95% of all email globally)
- 2010 (spam still ~85%, but filters hide most of it)
- 2012 (Rustock botnet takedown, brief spam dip)
- 2015 (spam stabilizes ~50-55% with improved filtering)
- 2020 (COVID-era phishing surge)
- 2025 (present state — spam % of total, plus marketing email/"graymail" problem)

## Data sources to check

- **Symantec/Broadcom** Internet Security Threat Report — annual spam percentage data
- **Cisco Talos** — email threat intelligence reports
- **Kaspersky** annual security reports
- **Radicati Group** — Email Statistics Report (annual, very detailed)
- **Statista** — email volume and spam statistics
- **Spamhaus** — real-time spam tracking
- **MessageLabs** (pre-Symantec) intelligence reports
- **CAN-SPAM Act (2003)** legislative history
- **Return Path / Validity** — inbox placement studies
- **Gmail/Google Transparency Report** — spam filtering statistics

## Dimensions to collect

1. **Spam percentage** — % of all email that is spam. This is the best-documented metric across all our systems. Track BOTH raw spam percentage AND "inbox spam" (what gets past filters) — the gap shows how much work filters do.
2. **Total message volume** — total emails sent per day/year globally and in US. Radicati is the go-to source.
3. **Primary users** — % of US population for whom email is primary digital communication
4. **Total users** — email accounts and active email users as % of population
5. **User cost per message** — $0 per email (after ISP/device cost)
6. **User time per message** — average time to compose an email (varies enormously by context)
7. **Infrastructure cost per message** — cost to send/receive/store one email. Essentially fractions of a cent. This near-zero cost is WHY email spam is viable.
8. **Platform ARPU** — Gmail/Outlook ad revenue per user, ISP email service revenue
9. **Barrier to reach** — email (need an address, but addresses are harvestable and guessable)
10. **Reach per message** — one-to-one (but mass emailers send to millions via BCC/mailing lists)
11. **Gatekeeping** — open (anyone can email anyone)
12. **Years to spam saturation** — ~1991 (mainstream) to ~2003-2004 (>50%) = ~12-13 years
13. **Regulatory response** — CAN-SPAM Act (2003), GDPR (2018, affects marketing email), various international anti-spam laws
14. **Defenses** — Bayesian spam filters, SpamAssassin (2001), Gmail spam filter (2004), SPF/DKIM/DMARC authentication, unsubscribe links (CAN-SPAM requirement), spam reporting buttons, AI-based filtering

## Special notes

Email is the gold standard dataset for this project. The data is abundant and well-sourced. Two important nuances:

1. **Filters don't fix it.** Spam filters reduced VISIBLE spam dramatically, but the spam still exists — it's just hidden. The total spam percentage of all email sent is still enormous. The system isn't "fixed," it's on life support.

2. **Graymail.** Even beyond spam, legitimate email has been destroyed by marketing email — newsletters, receipts, promotions, notifications. Jason's wife's inbox (50 emails, all junk) isn't 90% spam bots — it's marketing email she technically "opted into." The CAN-SPAM-compliant stuff that is ALSO worthless. Track this as a separate dimension if data exists.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
