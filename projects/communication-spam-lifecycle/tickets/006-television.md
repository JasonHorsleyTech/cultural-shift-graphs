# 006: Television

**System:** Television broadcasting (broadcast, cable, streaming)
**Time range:** 1941–present
**Expected data quality:** Good — Nielsen, FCC, industry data extensive

## Research task

Trace television's ad lifecycle. Same arc as radio but with a sequel: cable TV promised fewer/no ads (you're paying a subscription!), then filled up with ads anyway. Then streaming promised no ads (you're paying a subscription!), and now streaming is filling up with ads. The cycle has repeated THREE TIMES within the same medium.

## Key years to sample

- 1941 (first legal TV ad — Bulova watches)
- 1950 (TV golden age, single-sponsor shows)
- 1960 (transition to multi-sponsor, ad breaks normalized)
- 1970 (ad load growing, FCC considers limits)
- 1980 (cable TV launches — promise of ad-free/reduced-ad content)
- 1985 (cable channels start running ads)
- 1990 (cable ad load approaching broadcast levels)
- 1999 (TiVo/DVR — first consumer ad-skipping defense)
- 2005 (peak broadcast TV ad load ~16 min/hour)
- 2007 (Netflix streaming launches — no ads)
- 2010 (cord-cutting begins)
- 2015 (streaming wars, all services ad-free)
- 2020 (ad-supported streaming tiers begin appearing)
- 2022 (Netflix, Disney+ launch ad tiers)
- 2025 (streaming ad loads increasing, cheapest tiers are ad-supported)

## Data sources to check

- **Nielsen** — ad minute per hour data, viewership statistics
- **FCC records** on broadcast advertising
- **TVB (Television Bureau of Advertising)** — ad revenue data
- **Kantar/Ad Age** — ad spending reports
- **Pew Research** — media consumption surveys
- **SNL Kagan / S&P** — cable and streaming industry data
- **eMarketer** — streaming ad revenue projections

## Dimensions to collect

1. **Spam percentage** — minutes of advertising per hour of programming. Broadcast peaked at ~16 min/hour. Cable converged to similar levels. Track streaming separately if possible.
2. **Total message volume** — total TV ad impressions/spots per year
3. **Primary users** — % of US population for whom TV is primary entertainment
4. **Total users** — % of US households with a television
5. **User cost per message** — cost to viewer. Broadcast: $0 (antenna). Cable: monthly subscription (track over time). Streaming: subscription tier prices.
6. **User time per message** — average daily viewing hours
7. **Infrastructure cost per message** — broadcast cost per minute, cable cost per subscriber, streaming cost per subscriber
8. **Platform ARPU** — ad revenue per viewer per year (broadcast, cable, streaming separately if possible)
9. **Barrier to reach** — broadcast/none
10. **Reach per message** — broadcast
11. **Gatekeeping** — semi-open (FCC licensing)
12. **Years to spam saturation** — multiple cycles: broadcast (1941 to peak ads), cable (launch to ad-saturated), streaming (2007 to now)
13. **Regulatory response** — FCC content rules, Children's Television Act (1990, ad limits for kids' TV), CALM Act (2010, loud commercials)
14. **Defenses** — channel changing, mute button, VCR fast-forward, TiVo/DVR ad-skipping, ad-free streaming tiers, ad blockers (YouTube)

## Special notes

TV is the triple-cycle example. The pattern has played out three times: broadcast → cable → streaming, each time with the promise of "no ads this time" followed by gradual ad creep. This makes it one of the most compelling data points for the thesis that advertising inevitably destroys any communication/media system regardless of the business model.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
