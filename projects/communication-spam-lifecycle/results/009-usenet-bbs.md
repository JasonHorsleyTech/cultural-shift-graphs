# 009: Usenet & Bulletin Board Systems (BBS) — Results

## Summary

Usenet is the birthplace of internet spam. Created in 1980 as a decentralized discussion system linking universities, it grew from 50 articles per day in 1983 to hundreds of thousands by the mid-1990s. The system's open, unmoderated architecture — anyone could post to any newsgroup, and messages propagated to every server carrying that group — made it uniquely vulnerable. The term "spam" in its internet sense was coined on Usenet in 1993, and the first major commercial spam (Canter & Siegel's "Green Card Lottery" ad, cross-posted to 5,500 newsgroups on April 12, 1994) demonstrated how a single actor could flood the entire network at near-zero cost. The "Eternal September" of 1993, when AOL opened Usenet access to its millions of subscribers, simultaneously expanded the audience for spammers and overwhelmed the community's informal norms.

Bulletin Board Systems (BBSes) followed a parallel but distinct arc. Peaking at an estimated 45,000–60,000 systems serving 17 million users in the US by 1994–1995, BBSes were largely insulated from spam by their dial-up, single-operator architecture — sysops could ban users directly. BBSes died not from spam but from the Web: the introduction of cheap dial-up ISPs and the Mosaic browser in 1994–1995 triggered a rapid collapse, with US BBSes falling from ~45,000 in 1995 to ~10,000 by 1997. FidoNet, the largest BBS network, peaked at ~39,000 nodes in 1995.

Usenet's spam problem escalated rapidly from 1994 onward. The community developed novel defenses — cancel bots (automated message deletion), the Breidbart Index (a mathematical spam-detection metric, threshold of 20 for cancellation), NoCeM ("no-see-um" advisory system), killfiles (client-side filtering), and moderated newsgroups — but these were volunteer-run and couldn't scale against automated spamming tools. By the late 1990s, many newsgroups were majority spam. Major ISPs began dropping Usenet access in the mid-2000s (AOL in 2005, Verizon/Time Warner/Sprint in 2008–2009), citing low demand and the cost of carrying spam-heavy traffic. Today Usenet survives primarily as a binary file distribution network, with text discussion a ghost of its former self. Google Groups stopped accepting new Usenet content in February 2024.

## Key Data

**System profile:** Launched 1980 | Spam crossover ~1999 | Effectively dead by 2010 | 19 years to spam saturation | Open architecture, no gatekeeping, one-to-many reach

### Regulations

None. No legislation ever specifically targeted Usenet spam. CAN-SPAM (2003) addressed email only -- newsgroups fell through every legal crack.

### Defenses

| Year | Defense | How it worked |
|------|---------|---------------|
| 1985 | Killfiles | Client-side filtering by author, subject, or newsgroup. Predated spam but became essential for managing it. |
| 1987 | Moderated newsgroups | Posts required moderator approval. Effective but labor-intensive and contrary to Usenet's open culture. |
| 1993 | Breidbart Index | Mathematical spam metric based on cross-posting. Posts exceeding a BI of 20 over 45 days were eligible for automated cancellation. |
| 1994 | Cancel bots | Automated programs that issued cancel messages for identified spam. Controversial (anyone could forge cancels) but effective against bulk spam. |
| 1996 | NoCeM | "No-see-um" advisory protocol -- trusted volunteers published spam message ID lists. Servers and clients hid flagged messages without issuing cancels. |

### Timeline Highlights

- **1993 -- The word "spam" is born.** Richard Depew accidentally posted 200 messages to a newsgroup. The community borrowed the Monty Python sketch to name the phenomenon. The same year, AOL opened Usenet access to 300,000+ subscribers ("Eternal September"), flooding established newsgroups with new users -- and soon, new spammers.
- **April 12, 1994 -- The Green Card spam.** Lawyers Canter & Siegel posted a "Green Card Lottery" ad to 5,500 newsgroups in 90 minutes using a Perl script. They made $100K-$200K. Their ISP crashed from the complaint volume. Cancel bots were deployed in direct response -- the first automated spam defense.
- **1999 -- Spam crosses 50%.** By the late 1990s, many newsgroups were majority spam. The volunteer defense system (cancel bots, NoCeM, killfiles) couldn't scale against automated spamming tools. The spam crossover happened a second time as spam climbed through 50% and kept going.
- **2005-2009 -- ISPs pull the plug.** AOL dropped Usenet in 2005. Verizon, Time Warner, Sprint, and AT&T followed in 2008-2009, citing low demand and the cost of carrying spam-heavy traffic. By this point, Usenet was 75%+ spam.
- **2010 -- Duke kills the original server.** Duke University decommissioned the very machine where Usenet was born. UNC retired news.unc.edu in Feb 2011. Usenet survived only as a binary file distribution network.
- **February 2024 -- Google Groups stops accepting Usenet.** The last major public gateway closed, ending 30+ years of Usenet indexing.

### By the Numbers

| Metric | Value |
|--------|-------|
| Peak BBSes in the US (1994) | 45,000-60,000 systems serving 17M users |
| FidoNet peak (1995) | ~39,000 nodes |
| Usenet posts/day, Jan 1998 | 554,000 |
| Usenet posts/day, Jan 2005 | 7.54 million (overwhelmingly spam + binaries) |
| Usenet posts/day, Jan 2010 | 15.66 million |
| Peak spam percentage | ~90% (2010) |
| BBS collapse speed | 45,000 systems in 1995 to ~10,000 by 1997 |

## Sources

1. **Wikipedia: Usenet** — https://en.wikipedia.org/wiki/Usenet — Comprehensive history, traffic statistics table (1996–2024), key dates.
2. **Wikipedia: Newsgroup spam** — https://en.wikipedia.org/wiki/Newsgroup_spam — Spam history, Breidbart Index, cancel bots, first spam events.
3. **Wikipedia: Eternal September** — https://en.wikipedia.org/wiki/Eternal_September — AOL opening Usenet access, Sept 1993 cultural shift.
4. **Wikipedia: Laurence Canter and Martha Siegel** — https://en.wikipedia.org/wiki/Laurence_Canter_and_Martha_Siegel — Green Card spam details, 5,500 newsgroups, $100k-200k revenue.
5. **Wikipedia: Bulletin board system** — https://en.wikipedia.org/wiki/Bulletin_board_system — 60,000 BBSes/17M users in 1994, FidoNet peak at 39,000 nodes.
6. **Wikipedia: Breidbart Index** — https://en.wikipedia.org/wiki/Breidbart_Index — Spam measurement metric, threshold of 20, 45-day window.
7. **LivingInternet: Usenet History 1985-1990** — https://www.livinginternet.com/u/ui_usenethist.htm — Early traffic statistics, volume doubling annually.
8. **NewsDemon: History of Usenet** — https://www.newsdemon.com/history-of-usenet — Timeline 1979-2026, newsgroup counts, traffic growth.
9. **Giganews: Usenet Newsgroups History** — https://giganews.com/usenet-history/ — Software evolution (A News, B News, C News, INN), Great Renaming.
10. **Big-8.org: Changes in ISP Usenet Policies (2008)** — https://www.big-8.org/wiki/Changes_in_ISP_Usenet_Policies_(2008) — ISP Usenet discontinuation details.
11. **Pew Research Center: Internet/Broadband Fact Sheet** — https://www.pewresearch.org/internet/fact-sheet/internet-broadband/ — US internet adoption statistics.
12. **NoCeM FAQ** — http://www.cm.org/faq.html — NoCeM anti-spam protocol details.
13. **Brad Templeton's spam history** (referenced) — Origin of the term "spam" on Usenet.
14. **American Scientist: "Spam, Spam, Spam, Lovely Spam"** — https://www.americanscientist.org/article/spam-spam-spam-lovely-spam — Early internet spam context.

## Confidence Assessment

**Overall confidence: MODERATE**

- **Strong confidence** in timeline events (Green Card spam, Eternal September, ISP dropoffs) — well-documented with primary sources.
- **Strong confidence** in BBS statistics (60,000 systems, FidoNet nodes) — InfoWorld and FidoNet nodelist data.
- **Strong confidence** in Usenet traffic volumes from 1996 onward — Wikipedia's table draws from verifiable server logs.
- **Moderate confidence** in pre-1996 Usenet traffic estimates — extrapolated from "doubling annually" pattern starting from ~50 articles/day in 1983.
- **Low-to-moderate confidence** in spam percentage estimates — no systematic measurement existed before ~1998. Pre-1994 spam was essentially zero. The 1994-1998 ramp is estimated from qualitative accounts (academic papers, community reports). Post-2000 estimates are based on the consensus that spam became majority traffic by the late 1990s, with the proportion growing as legitimate users left.
- **Low confidence** in user share percentages — Usenet user counts are poorly documented. The 3.5M peak figure is widely cited but its provenance is unclear. Primary/total user share as percentage of US population is estimated from internet adoption rates and the niche nature of Usenet.
- **Platform ARPU** is correctly null — Usenet was decentralized with no platform monetization.

<!-- COMPLETE -->
