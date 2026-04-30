# 002: Telegraph

**System:** Electric telegraph (primarily Western Union in the US)
**Time range:** 1844–1960s
**Expected data quality:** Moderate — historical records, Western Union archives, academic history

## Research task

Trace the telegraph's lifecycle as a communication system. The telegraph is interesting because it was expensive per message (required a skilled operator), which should have made it resistant to spam — but commercial/advertising telegrams still emerged. Document how advertising use evolved and whether it contributed to the system's decline (vs. being displaced by the telephone).

## Key years to sample

- 1844 (Morse's first message)
- 1860 (transcontinental telegraph, Civil War use)
- 1870 (Western Union dominance, commercial telegraph grows)
- 1880 (peak telegram era begins)
- 1900 (telephone emerging as competitor)
- 1920 (telegram still relevant for long-distance, but phone growing)
- 1940 (WWII use — military telegrams, "we regret to inform you")
- 1960 (rapid decline, Western Union pivots)
- 1970–2006 (death spiral, Western Union sends last telegram 2006)

## Data sources to check

- **Western Union annual reports** (historical archives)
- **"The Victorian Internet"** by Tom Standage — well-researched history of telegraph culture
- **FCC historical records** on telegraph traffic
- **US Census Bureau** — historical communication statistics
- **Academic papers** on telegraph commerce and advertising
- **Smithsonian / Library of Congress** telegraph collections

## Dimensions to collect

1. **Spam percentage** — % of telegrams that were commercial/advertising vs. personal. Western Union offered "commercial telegram" services and night-rate advertising telegrams. Estimate this ratio across key years.
2. **Total message volume** — telegrams sent per year in the US
3. **Primary users** — % of US population who used telegraph as their primary long-distance communication
4. **Total users** — % of US population who sent at least one telegram per year
5. **User cost per message** — cost per word or per standard telegram, inflation-adjusted to 2026 USD
6. **User time per message** — time to go to a telegraph office, compose, wait for sending (vs. cost of delivery to door)
7. **Infrastructure cost per message** — Western Union's operating cost per message (skilled operators, wire maintenance, office network)
8. **Platform ARPU** — Western Union revenue per active user
9. **Barrier to reach** — semi-open (need recipient's name and city, operator handles routing)
10. **Reach per message** — one-to-one
11. **Gatekeeping** — semi-open (anyone with money can send, but cost is a natural gate)
12. **Years to spam saturation** — did commercial telegrams ever hit 50%? Or was the system displaced by telephone before spam could kill it?
13. **Regulatory response** — any legislation governing commercial telegram content
14. **Defenses** — cost itself was the primary defense against spam

## Special notes

The telegraph is the control case: a system where the cost per message was so high that spam never fully took over. The system died for OTHER reasons (telephone was better). This data point anchors the cost-vs-spam-death correlation.

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
