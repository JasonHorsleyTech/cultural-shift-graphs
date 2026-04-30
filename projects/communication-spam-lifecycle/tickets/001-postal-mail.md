# 001: US Postal Mail

**System:** United States Postal Service / postal mail
**Time range:** 1775–present
**Expected data quality:** Excellent — USPS publishes detailed annual reports

## Research task

Trace the lifecycle of US postal mail as a personal communication system, focusing on how direct mail advertising (junk mail) overtook personal correspondence.

## Key years to sample

- 1850 (early postal system, personal letters dominant)
- 1900 (penny postcards, rural free delivery)
- 1930 (pre-WWII baseline)
- 1950 (post-war suburban boom, mail-order catalogs rise)
- 1970 (direct mail industry takes off)
- 1980 (junk mail becomes a household complaint)
- 1990 (email begins displacing personal mail)
- 2000 (marketing mail volume approaching first-class)
- 2006 (peak total mail volume — ~213 billion pieces)
- 2010 (marketing mail overtakes first-class)
- 2015 (continued decline in personal mail)
- 2020 (COVID era)
- 2025 (present state)

## Data sources to check

- **USPS Annual Reports** — break down volume by First-Class Mail vs. Marketing Mail (Standard Mail). This is the primary source. Available at usps.com going back decades.
- **USPS Revenue & Pieces data** — detailed volume and revenue by mail class
- **Postal Regulatory Commission** annual reports
- **Direct Marketing Association** (now ANA) annual statistical reports
- **Historical postage rates** — USPS publishes historical first-class stamp prices
- **Bureau of Labor Statistics** — CPI adjustments for inflation

## Dimensions to collect

For each sampled year, find:

1. **Spam percentage** — % of total mail pieces that are Marketing Mail / Standard Mail / bulk advertising (as opposed to First-Class personal correspondence). USPS categorizes this explicitly.
2. **Total message volume** — total mail pieces per year (all classes)
3. **Primary users** — % of US population for whom mail is their primary way to send personal messages
4. **Total users** — % of US households receiving mail regularly (should be ~100% for most of history)
5. **User cost per message** — First-class stamp price, inflation-adjusted to 2026 USD
6. **User time per message** — Estimated time to write, address, and mail a letter (order of magnitude)
7. **Infrastructure cost per message** — USPS cost per piece (operating expenses / total pieces). Note: USPS is "self-funding" via postage but also subsidized in various ways.
8. **Platform ARPU** — USPS Marketing Mail revenue per US household per year (2026 USD)
9. **Barrier to reach** — physical-address (you need someone's mailing address)
10. **Reach per message** — one-to-one (individual letters) but bulk mailers send one-to-many
11. **Gatekeeping** — semi-open (need an address, but address lists are purchasable)
12. **Years to spam saturation** — year when marketing mail exceeded 50% of total volume, minus 1775
13. **Regulatory response** — CAN-SPAM (mostly email), Deceptive Mail Prevention and Enforcement Act (1999), Do Not Mail efforts (largely failed)
14. **Defenses** — "No junk mail" stickers, DMAchoice opt-out, USPS Informed Delivery

## Output

Result file with prose summary, structured data matching the TypeScript types in plan.md, and full source list.
