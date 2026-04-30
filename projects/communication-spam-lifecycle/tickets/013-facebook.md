# 013: Facebook

**System:** Facebook (feed, Messenger, platform broadly)
**Time range:** 2004–present
**Expected data quality:** Good — SEC filings, Pew Research, internal leaks, academic studies

## Research task

Trace Facebook's evolution from a clean, personal social network to an advertising platform that happens to have social features. Facebook is unique because the "spam" isn't just unsolicited messages — it's the platform itself inserting ads and algorithmic content into what was supposed to be a feed of your friends' posts. The feed went from 100% friend content to majority ads/suggested/algorithmic content.

## Key years to sample

- 2004 (Harvard-only, zero ads, pure friend network)
- 2006 (open to public, News Feed launched — initially controversial)
- 2007 (Facebook Ads launched, first ads in feed)
- 2009 (ads growing but still feel unobtrusive)
- 2012 (IPO — pressure to monetize aggressively, mobile ads begin)
- 2014 (organic reach for pages crashes — Facebook forces businesses to pay for reach)
- 2016 (election misinformation, "fake news," ad targeting controversy)
- 2018 (Cambridge Analytica scandal, peak Facebook backlash)
- 2020 (Marketplace spam, group spam, continued ad load increase)
- 2022 (Meta pivot, Reels (TikTok clone) injected into feed — content from strangers now dominates)
- 2025 (present — what % of feed is ads vs. friend content vs. suggested/algorithmic?)

## Data sources to check

- **Facebook/Meta SEC filings** — ARPU data, user numbers, revenue breakdowns
- **Pew Research** — social media use surveys (extensive Facebook data)
- **DataReportal / We Are Social** — social media statistics
- **eMarketer** — Facebook ad spending data
- **Internal documents** (Facebook Papers/leaked research)
- **Academic studies** on Facebook News Feed composition
- **Hootsuite/Sprout Social** — organic reach decline studies
- **NYU/academic studies** on algorithmic feed composition

## Dimensions to collect

1. **Spam percentage** — This requires a nuanced definition. Track: (a) % of News Feed that is paid advertising, (b) % that is "suggested content" from non-friends, (c) % that is actual content from friends you chose to follow. The decline of (c) IS the spam story.
2. **Total message volume** — total Facebook posts per day/year, total Messenger messages
3. **Primary users** — % of US population for whom Facebook is primary social communication
4. **Total users** — Facebook MAU/DAU as % of US population
5. **User cost per message** — $0 (always free to post)
6. **User time per message** — time to compose a post (short) vs. time spent scrolling (the real "cost" — attention)
7. **Infrastructure cost per message** — Meta's cost per user (operating expenses / MAU)
8. **Platform ARPU** — Meta's US/Canada ARPU (publicly reported quarterly). One of the highest of any platform.
9. **Barrier to reach** — username/none (friend requests, but suggested content reaches everyone)
10. **Reach per message** — one-to-many (friends, followers, or algorithmically suggested)
11. **Gatekeeping** — semi-open (friend system, but feed is algorithmically curated)
12. **Years to spam saturation** — 2004 to ~2016-2018 = ~12-14 years before most users felt the feed was more noise than signal
13. **Regulatory response** — GDPR (2018), various Congressional hearings, Cambridge Analytica fallout, no US-specific Facebook anti-spam law
14. **Defenses** — unfollowing, snooze, "see less of this," ad preferences, using Groups instead of feed, quitting Facebook entirely

## Special notes

Facebook represents a new category: the platform IS the spammer. Unlike email or phone, where external bad actors send spam through the system, Facebook itself decided to fill the feed with ads and algorithmic content. The user's "friends' posts" feed was the product that attracted people, and Facebook systematically diluted it to extract ad revenue. Organic reach for pages dropped from ~16% in 2012 to ~2% by 2016 — Facebook essentially held business' audiences hostage. This is the clearest example of "the business model is the disease."

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
