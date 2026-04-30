# 014: Twitter

**System:** Twitter / X
**Time range:** 2006–present
**Expected data quality:** Good — SEC filings (pre-2022), Pew Research, Bot Sentinel, academic studies

## Research task

Trace Twitter's evolution from a clean microblogging platform to its current state. Twitter's spam story has multiple layers: traditional spam bots, the platform injecting ads/promoted tweets, algorithmic timeline replacing chronological, and the unique problem of bot accounts amplifying content (political bots, astroturfing). Post-2022 (Musk acquisition), blue check verification changes and reduced moderation accelerated the spam problem.

## Key years to sample

- 2006 (launch, pure chronological timeline, zero ads)
- 2009 (mainstream adoption, first spam bots appearing)
- 2010 (Promoted Tweets launched — first ads)
- 2012 (growing ad load, spam bots increasing)
- 2014 (algorithmic timeline introduced — no longer pure chronological)
- 2016 (election bots, Russian interference, bot manipulation becomes mainstream concern)
- 2018 (major bot purge, SEC filings show bot estimates)
- 2020 (pandemic misinformation, continued ad growth)
- 2022 (Musk acquisition, blue check changes, mass exodus to Mastodon/Bluesky/Threads)
- 2023 (rebrand to X, reduced content moderation, bot problem worsens)
- 2025 (present state)

## Data sources to check

- **Twitter/X SEC filings** (through 2022) — ARPU, mDAU, revenue
- **Pew Research** — Twitter use surveys, demographics, "most tweets come from most prolific users" study
- **Bot Sentinel** — bot activity analysis
- **Indiana University Observatory on Social Media (OSoMe)** — Botometer, academic bot research
- **Oxford Internet Institute** — computational propaganda reports
- **eMarketer** — Twitter ad spending data
- **Academic papers** on Twitter bot prevalence (extensive literature)

## Dimensions to collect

1. **Spam percentage** — multiple layers: (a) % of tweets from bot accounts (academic estimates vary 5-30%), (b) % of timeline that is ads/promoted content, (c) % of timeline that is algorithmic/"for you" content from non-followed accounts. Sum these for total "noise."
2. **Total message volume** — total tweets per day/year
3. **Primary users** — % of US population for whom Twitter is a primary communication/information source
4. **Total users** — Twitter mDAU / MAU as % of US population
5. **User cost per message** — $0 (or $8/month for blue check / premium features)
6. **User time per message** — seconds (280 characters)
7. **Infrastructure cost per message** — Twitter's operating cost per user
8. **Platform ARPU** — Twitter's US ARPU (available through 2022 SEC filings)
9. **Barrier to reach** — none (public tweets visible to everyone, replies open)
10. **Reach per message** — one-to-many (followers + algorithmic amplification)
11. **Gatekeeping** — open (public by default, anyone can reply/quote)
12. **Years to spam saturation** — 2006 to ~2016-2018 = ~10-12 years before bot/ad/algorithmic noise became dominant complaint
13. **Regulatory response** — Congressional hearings on bot manipulation, no specific legislation
14. **Defenses** — mute, block, quality filter, chronological timeline option, third-party clients (killed in 2023), leaving for Mastodon/Bluesky/Threads

## Special notes

Twitter's spam story has a unique twist: the "spam" isn't just commercial advertising — it's ideological. Bot networks amplify political messaging, making the platform feel like standing in a room where half the people are paid actors reciting scripts. This connects directly to the face-to-face communication ticket — Twitter bots are the digital version of people acting as unwitting mouthpieces. Also notable: the Musk acquisition is a natural experiment in what happens when you remove spam defenses (moderation, verification) from a platform.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
