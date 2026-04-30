# 015: LinkedIn

**System:** LinkedIn
**Time range:** 2003–present
**Expected data quality:** Moderate — SEC filings (through 2016 acquisition by Microsoft), Pew Research, industry reports

## Research task

Trace LinkedIn's evolution from a professional networking tool to a platform where every inbox message is a sales pitch and every feed post is self-promotional cringe. LinkedIn is arguably the most spam-saturated active platform — InMail is essentially a paid cold-email system that LinkedIn itself profits from. The "spam" on LinkedIn is baked into the business model even more explicitly than Facebook.

## Key years to sample

- 2003 (launch, genuine professional networking)
- 2006 (growing adoption, still primarily used for job searching and professional connections)
- 2008 (InMail and premium features, LinkedIn as recruiting tool)
- 2010 (LinkedIn Groups active, content starting to appear)
- 2012 (LinkedIn feed/content platform emerging, endorsements feature)
- 2014 (LinkedIn becoming content platform, "broetry" emerges)
- 2016 (Microsoft acquisition for $26.2B, aggressive growth strategy)
- 2018 (feed increasingly full of motivational stories, humble brags, sales pitches)
- 2020 (COVID — LinkedIn becomes Facebook-for-professionals, personal stories flood feed)
- 2022 (AI-generated content, automated connection requests, InMail spam at peak)
- 2025 (present state — AI-generated posts, automated outreach bots)

## Data sources to check

- **LinkedIn/Microsoft SEC filings** — revenue, user numbers, InMail data
- **Pew Research** — social media platform usage surveys
- **eMarketer** — LinkedIn ad revenue and ARPU
- **SalesLoft, Outreach, Apollo** — data on automated LinkedIn outreach (the tools enabling the spam)
- **Industry articles/surveys** on InMail response rates (declining = spam indicator)
- **Reddit/Hacker News threads** — qualitative evidence of LinkedIn spam complaints (for timeline)

## Dimensions to collect

1. **Spam percentage** — multiple layers: (a) % of InMail/messages that are unsolicited sales pitches or recruiting spam, (b) % of feed that is ads/promoted content, (c) % of feed that is self-promotional content (motivational posts, humble brags, "I'm pleased to announce"). The last category is unique to LinkedIn — user-generated spam.
2. **Total message volume** — InMail messages, connection requests, feed posts per year
3. **Primary users** — % of US professional workforce for whom LinkedIn is primary professional networking tool
4. **Total users** — LinkedIn members as % of US working-age population
5. **User cost per message** — $0 for basic posts/connections, InMail credits on premium ($30-60/month), Sales Navigator ($80-130/month)
6. **User time per message** — varies (connection request: seconds, post: minutes)
7. **Infrastructure cost per message** — Microsoft cloud costs per user
8. **Platform ARPU** — LinkedIn revenue per member (from SEC filings: Talent Solutions, Marketing Solutions, Premium Subscriptions, Sales Solutions)
9. **Barrier to reach** — username/semi-open (connection requests to anyone, InMail to anyone with premium)
10. **Reach per message** — one-to-one (messages) or one-to-many (feed posts)
11. **Gatekeeping** — semi-open (connection system, but bypassed by InMail premium)
12. **Years to spam saturation** — 2003 to ~2018 = ~15 years, but really 2016 (Microsoft acquisition) to 2020 = 4 years of aggressive degradation
13. **Regulatory response** — GDPR affects LinkedIn targeting, but no specific anti-spam regulation
14. **Defenses** — ignore/decline messages, connection request limits, "I don't know this person" button, unfollow, turning off InMail, switching to "creator mode" to change feed

## Special notes

LinkedIn is the purest example of a platform that sells the right to spam its users as its primary business model. InMail literally IS paid spam — LinkedIn charges you $30-130/month for the privilege of sending unsolicited messages to strangers. They then charge the recipients $0 and fill their feed with ads as well. It's spam arbitrage. Also unique: the user-generated "spam" — people performing professional success, posting LinkedIn-brained motivational stories, "I'm humbled to announce" posts. This is the bridge to the face-to-face ticket — LinkedIn trained people to be their own spammers.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
