# 003: Newspaper Classifieds & Personal Ads

**System:** Newspaper classified advertising sections, including personal ads
**Time range:** 1700s–present
**Expected data quality:** Moderate — newspaper industry reports, Newspaper Association of America data

## Research task

Trace how newspaper classifieds evolved from a genuine communication and commerce channel (help wanted, items for sale, personal ads, lost & found) into a landscape dominated by scams, professional advertisers, and deceptive listings — and then got killed entirely by Craigslist and the internet.

## Key years to sample

- 1800 (early American newspapers, classifieds as community bulletin board)
- 1850 (penny press era, classifieds grow)
- 1900 (classifieds as major newspaper revenue)
- 1930 (Depression-era help wanted)
- 1950 (post-war classifieds boom — cars, homes, jobs)
- 1970 (peak classified revenue era begins)
- 1980 (900-number scams, mail-order fraud in classifieds)
- 1990 (peak classified ad revenue ~$20B)
- 2000 (Craigslist and early internet classifieds emerge)
- 2005 (classified revenue in freefall)
- 2010 (most newspapers have gutted classified sections)
- 2020 (classifieds essentially dead in print)

## Data sources to check

- **Newspaper Association of America (NAA)** — annual classified ad revenue data
- **Pew Research Center** — State of the News Media reports
- **Editor & Publisher** yearbooks (historical newspaper industry data)
- **Academic papers** on classified advertising fraud and scams
- **FTC records** on classified ad fraud cases
- **Craigslist impact studies**

## Dimensions to collect

1. **Spam percentage** — % of classified listings that were scams, deceptive, or professional advertiser spam (vs. genuine person-to-person). This is harder to measure — look for FTC complaint data, newspaper industry studies on fraudulent listings.
2. **Total message volume** — total classified ad listings per year (or classified ad revenue as proxy)
3. **Primary users** — % of US population who regularly used classifieds to find jobs, housing, items, or dates
4. **Total users** — % of US households that read classified sections
5. **User cost per message** — cost to place a classified ad (per line, per word, per day), 2026 USD
6. **User time per message** — time to compose and place a classified ad
7. **Infrastructure cost per message** — newspaper's cost to typeset, print, and distribute per classified line
8. **Platform ARPU** — classified ad revenue per subscriber/reader
9. **Barrier to reach** — semi-open (pay to place, anyone can read)
10. **Reach per message** — one-to-many (published to all readers in circulation area)
11. **Gatekeeping** — semi-open (newspapers had editorial discretion on what to publish)
12. **Years to spam saturation** — when did scam/deceptive listings become a significant percentage?
13. **Regulatory response** — FTC enforcement actions, state consumer protection laws
14. **Defenses** — newspaper editorial review, Better Business Bureau, reader skepticism

## Special notes

Classifieds are an interesting hybrid — they were ALWAYS advertising by design, but the useful kind (person-to-person commerce). The "spam" here is when the channel shifted from genuine individual sellers to professional scammers and deceptive commercial advertisers. Also interesting: Craigslist killed classifieds not because classifieds were spammy but because Craigslist was free — then Craigslist itself started getting scammy.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
