# 005: Radio

**System:** Radio broadcasting (AM/FM, US market)
**Time range:** 1920–present
**Expected data quality:** Good — FCC data, Nielsen Audio, Radio Advertising Bureau

## Research task

Trace radio's evolution from an ad-free medium to one where advertising is the entire business model. Radio is unique: it started as a genuinely ad-free communication/entertainment system (funded by equipment manufacturers who wanted to sell radios), and within a single decade became commercially sponsored. By the modern era, terrestrial radio is ~25-33% advertising by airtime. Track this transition and document the rise of ad-free alternatives (satellite radio, podcasts, streaming).

## Key years to sample

- 1920 (KDKA, first commercial broadcasts — no ads)
- 1922 (first paid radio advertisement — WEAF, AT&T)
- 1925 (sponsored programming becoming normal)
- 1930 (radio as dominant home entertainment, commercial model established)
- 1940 (golden age of radio — soap operas named for their sponsors)
- 1950 (TV emerging, radio shifts to music/DJs)
- 1960 (FM radio growth, more stations = more ad inventory)
- 1970 (ad load increasing)
- 1980 (deregulation under Reagan, ad limits relaxed)
- 1990 (Telecommunications Act 1996 — consolidation, Clear Channel era)
- 2001 (XM/Sirius satellite radio launches — ad-free alternative)
- 2005 (podcasts emerge)
- 2010 (Spotify/Pandora/streaming — ad-supported and ad-free tiers)
- 2015 (terrestrial radio audience declining)
- 2020 (podcast ad revenue surpasses $1B)
- 2025 (present state)

## Data sources to check

- **Radio Advertising Bureau (RAB)** — annual ad revenue data
- **FCC historical records** on radio regulation and ad limits
- **Nielsen Audio** (formerly Arbitron) — listenership data
- **Pew Research** — media consumption surveys
- **NAB (National Association of Broadcasters)** — industry reports
- **Academic research** on radio advertising history
- **IAB** — podcast advertising revenue studies

## Dimensions to collect

1. **Spam percentage** — % of broadcast airtime that is advertising/commercials. Note: for radio, ALL advertising is "spam" from the listener's perspective — they're there for music/talk, ads are interruptions. Track minutes of ads per hour.
2. **Total message volume** — total broadcast hours per year (or total ad spots)
3. **Primary users** — % of US population for whom radio is a primary entertainment/information source
4. **Total users** — % of US population who listen to radio weekly
5. **User cost per message** — $0 for listeners (broadcast is free). Cost of a radio receiver over time.
6. **User time per message** — N/A for broadcast; measure as time spent listening per day
7. **Infrastructure cost per message** — cost to broadcast one minute of radio (transmitter, licensing, talent). For advertisers: cost per 30-second spot.
8. **Platform ARPU** — radio ad revenue per listener per year
9. **Barrier to reach** — broadcast/none (anyone with a radio hears it)
10. **Reach per message** — broadcast
11. **Gatekeeping** — semi-open (FCC licensing, but once on air, no filtering)
12. **Years to spam saturation** — 1920 to when ad load exceeded ~50% of airtime (if ever)
13. **Regulatory response** — FCC ad limits (if any), FCC deregulation history
14. **Defenses** — station-changing, satellite radio (subscription ad-free), streaming services, podcasts with skip buttons

## Special notes

Radio is a broadcast medium, not point-to-point, so "spam" works differently. It's not unsolicited messages TO you — it's ads injected INTO the content stream. But the lifecycle pattern is the same: started clean, ads crept in, eventually the ad load drove people to alternatives. The migration from terrestrial radio → satellite → streaming → podcasts is the same cycle playing out within audio.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
