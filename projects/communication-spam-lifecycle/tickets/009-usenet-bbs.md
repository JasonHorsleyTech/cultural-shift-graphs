# 009: Usenet & Bulletin Board Systems (BBS)

**System:** Usenet newsgroups and dial-up bulletin board systems
**Time range:** 1980–2000s
**Expected data quality:** Moderate — academic papers, Google Groups archive, early internet histories

## Research task

Trace the spam lifecycle of Usenet and BBS systems. Usenet is historically significant because it's where the word "spam" (in the internet sense) was coined, inspired by the 1994 "Green Card spam" by lawyers Canter & Siegel. Usenet went from a pure academic/technical discussion system to effectively unusable due to spam within about 15 years.

## Key years to sample

- 1980 (Usenet created, academic use only)
- 1985 (growing academic/technical community, BBSes thriving)
- 1988 (Morris Worm — early internet security awareness)
- 1990 (Usenet accessible via early ISPs, BBSes at peak)
- 1993 (Eternal September — AOL users flood Usenet)
- 1994 (Green Card spam — first major commercial Usenet spam, term "spam" enters internet vocabulary)
- 1996 (spam becoming serious problem, cancel bots deployed)
- 1998 (spam overwhelming many newsgroups)
- 2000 (Usenet effectively dead for most non-technical users)
- 2005 (Google Groups archive, Usenet a shadow of itself)
- 2010 (BBSes extinct, Usenet niche/binary distribution only)

## Data sources to check

- **"Spam Kings" by Brian McWilliams** — history of internet spam
- **Brad Templeton's spam history** — he's documented the origin of the term
- **Academic papers** on Usenet spam measurement (several exist from late 1990s)
- **Google Groups / Deja News archive** — historical Usenet posts
- **"The Virtual Community" by Howard Rheingold** — early BBS culture
- **Usenet spam cancellation statistics** (NoCeM, cancel bots)
- **BBS Documentary** (Jason Scott) and textfiles.com

## Dimensions to collect

1. **Spam percentage** — % of Usenet posts that were spam. Academic studies measured this. Estimates range from near 0% pre-1994 to 90%+ by early 2000s.
2. **Total message volume** — total Usenet posts per day/year. Available from archive data.
3. **Primary users** — % of internet users for whom Usenet/BBS was primary online communication
4. **Total users** — estimated Usenet/BBS users per year
5. **User cost per message** — $0 for posting (after ISP/university connection). BBS: local phone call or long-distance charges.
6. **User time per message** — time to compose a Usenet post
7. **Infrastructure cost per message** — NNTP server hosting, bandwidth for propagation across Usenet network
8. **Platform ARPU** — N/A (decentralized, no platform revenue)
9. **Barrier to reach** — none (post to any public newsgroup)
10. **Reach per message** — one-to-many (a single post reaches all subscribers of a newsgroup, cross-posting reaches more)
11. **Gatekeeping** — open (anyone can post to most newsgroups). Moderated groups existed but were minority.
12. **Years to spam saturation** — 1980 to ~1998 = ~18 years, but really 1993 (public access) to 1998 = ~5 years
13. **Regulatory response** — essentially none specific to Usenet. No legislation addressed it.
14. **Defenses** — cancel bots (automated spam removal), NoCeM protocol, moderated newsgroups, killfiles (client-side filtering), Breidbart Index (spam detection metric)

## Special notes

Usenet is the patient zero — where internet spam was born and named. It's also an example of a decentralized, unmonetized system that still got destroyed by spam. There was no platform extracting ARPU, no advertising model — spam destroyed it purely through volume, with no economic incentive structure to blame. The "Eternal September" (1993) is a key event: when AOL opened Usenet access to millions of non-technical users, it changed the culture AND opened the door for spammers.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
