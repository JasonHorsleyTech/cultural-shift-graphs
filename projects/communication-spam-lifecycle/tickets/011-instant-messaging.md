# 011: Instant Messaging (AIM, ICQ, MSN, Yahoo)

**System:** First-generation instant messaging platforms
**Time range:** 1996–2010s
**Expected data quality:** Moderate — industry reports, some academic research, AIM/ICQ nostalgia histories

## Research task

Trace the spam lifecycle of first-generation instant messaging. AIM, ICQ, MSN Messenger, and Yahoo Messenger were the dominant personal communication tools of the late 1990s–2000s. They were eventually plagued by "spIM" (spam over instant messaging) — unsolicited messages from bots, often with malicious links. IM spam accelerated the migration to Facebook Messenger, iMessage, and eventually WhatsApp/Telegram.

## Key years to sample

- 1996 (ICQ launches — first mainstream consumer IM)
- 1997 (AOL Instant Messenger launches)
- 1999 (MSN Messenger, Yahoo Messenger — IM wars)
- 2001 (IM usage exploding among teens and office workers)
- 2003 (IM spam "spIM" becoming noticeable)
- 2005 (IM spam significant — Akonix/IMlogic studies show growing problem)
- 2006 (peak IM usage ~250 million users, spam worsening)
- 2008 (Facebook Chat launches — migration begins)
- 2010 (smartphone messaging apps emerging, desktop IM declining)
- 2012 (AIM usage collapsing)
- 2017 (AIM officially shut down)

## Data sources to check

- **Akonix / IMlogic** — published IM spam statistics in mid-2000s
- **Radicati Group** — IM market studies
- **FaceTime Communications** (now Actiance) — IM threat reports
- **Pew Research** — teen technology use surveys (heavy on IM data)
- **Symantec** — IM threat intelligence
- **AOL press releases** — AIM user statistics
- **ICQ historical statistics**

## Dimensions to collect

1. **Spam percentage** — % of IM messages that were unsolicited spam/bot messages. Akonix and FaceTime published estimates in the 2004-2007 range.
2. **Total message volume** — total IM messages per day/year
3. **Primary users** — % of US internet users for whom IM was primary personal communication
4. **Total users** — total unique IM users (across all platforms)
5. **User cost per message** — $0 (all major IM platforms were free)
6. **User time per message** — seconds (IM was designed for quick back-and-forth)
7. **Infrastructure cost per message** — minimal (text messages, centralized servers)
8. **Platform ARPU** — AIM/MSN/Yahoo ad revenue per user (banner ads in the client)
9. **Barrier to reach** — username (need someone's screen name, but random messages to usernames were possible)
10. **Reach per message** — one-to-one (but bots could message many users)
11. **Gatekeeping** — semi-open (buddy lists existed but strangers could message you)
12. **Years to spam saturation** — 1996 to ~2005-2006 = ~9-10 years
13. **Regulatory response** — CAN-SPAM technically covered some IM spam, but no specific IM anti-spam legislation
14. **Defenses** — buddy list / allow lists, block user, CAPTCHA on account creation, bot detection

## Special notes

IM is the bridge between email and social media. It established the pattern of free real-time communication that attracted users and then spam. Also notable: IM was where "stranger danger" on the internet became a cultural panic (predators messaging minors), which is a different kind of "spam" — unwanted contact from bad actors. The buddy list / allow list was the first mainstream implementation of gatekeeping as a spam defense, predating social media friend lists.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
