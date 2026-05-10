# Ticket 046 — John Deere combine harvester

## Product

A John Deere S-Series combine harvester (e.g. S780). Iconic large-ag equipment, ~$700K-$1M list price per unit. Sold via independent dealer network. B2B / structural panel anchor.

## Parent company

Deere & Company (NYSE: DE).

## Panel

b2b

## Segment to use

**Production & Precision Ag (PPA) segment.** Deere reports four segments: Production & Precision Ag, Small Ag & Turf, Construction & Forestry, and Financial Services. Combines sit in PPA. Use PPA segment net sales and operating profit. **Exclude John Deere Financial Services** entirely (separate segment) — same approach as the Toyota/Ford finco carve-out.

## Source hierarchy

1. **Deere FY2024 10-K** (fiscal year ending Oct/Nov 2024). Look for: PPA segment revenue and operating profit (segment footnote), R&D expense (income statement, Deere reports R&D as a line), advertising/promotion (Deere typically reports advertising in SG&A breakdown — modest as % of revenue).
2. **Deere FY2024 Annual Report and investor presentation** for color on R&D allocation across segments and dealer support spend.
3. **Earnings call transcripts** for any commentary on dealer floor plan financing and sales incentives.
4. **Trade press**: Successful Farming, Farm Equipment Magazine for context on dealer economics and sell-side spend.

## Specific caveats for this product

- **Dealer network is independent.** John Deere dealers are independent businesses (not Deere-owned). Their cost structure isn't in Deere's books. What IS in Deere's books: dealer support, co-op advertising contributions, dealer floor-plan financing (handled by JD Financial Services — excluded), training programs, and trade promotion / dealer incentives. Note the dealer-cost-structure invisibility as a methodology caveat.
- **R&D is significant.** Deere is investing heavily in precision agriculture / autonomous machinery (See & Spray, autonomous tractors). Recent annual R&D is ~$2B+. All counted as build per rubric.
- **Advertising is small** as % of revenue — Deere does some consumer advertising for the brand but most marketing is dealer-driven and trade-show-based (Farm Progress Show, Commodity Classic).
- **Sales force comp** — Deere has a regional sales/account-management headcount that supports dealers; modest. Estimate from segment SG&A.
- **Excluding Financial Services is critical** — JD Financial booked ~$5B+ revenue and significant operating profit from financing equipment. Including it would massively skew the picture toward a "financial services with a tractor attached" misframing. Match the auto-OEM treatment.
- **Customer support / parts** — significant ongoing parts and service revenue, partly captured in PPA, partly in Construction & Forestry. Don't try to reallocate; use PPA as reported.

## Output format

Write result to `results/046-john-deere-combine.md` per the YAML frontmatter spec. Methodology must:
1. Confirm PPA segment was used and Financial Services was excluded.
2. Note the independent-dealer caveat.
3. Highlight R&D as a major build component (precision ag investment).

## What "good data" looks like

- PPA segment revenue, operating profit, R&D allocation, and SG&A all cited from the 10-K segment footnote.
- Build_pct probably 90-96% — heavy industrial OEM with modest sell intensity.
- Confidence: **high** — Deere's segment reporting is clean.
- Methodology note: dealer network invisibility and Financial Services carve-out are both flagged.
