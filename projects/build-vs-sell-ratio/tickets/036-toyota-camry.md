# Ticket 036 — Toyota Camry

## Product

A Toyota Camry (representative mid-size sedan).

## Parent company

Toyota Motor Corporation (TYO: 7203, NYSE: TM).

## Panel

consumer

## Segment to use

**Toyota Automotive segment, EXCLUDING financial services (Toyota Financial Services).** Per `plan.md`, financing is carved out. Subtract Toyota Financial Services revenue, COGS, and OpEx from consolidated. Use the remaining "automotive" cost structure.

## Source hierarchy

1. **Toyota FY2024 Annual Securities Report (fiscal year ending March 2024) and 20-F** — segment reporting separates Automotive from Financial Services.
2. **Toyota investor presentations** for color on advertising spend (Toyota typically reports SG&A but not advertising separately in some filings).
3. **Kantar Media** for Toyota US ad spend (Toyota is a top-5 US auto advertiser).
4. **Automotive News** for dealer-incentive context.

## Specific caveats for this product

- Dealer markup is invisible to Toyota's books (dealers are independent franchisees). Same parent-vs-can issue as Coke. Note this — Toyota's books exclude the ~10-15% dealer-side markup of consumer purchase price.
- Dealer incentives (manufacturer-funded incentives passed through to consumers) ARE on Toyota's books — counted as sell.
- Manufacturing is heavily in-house (Kentucky, Texas, Indiana, plus Japan). Capex significant. Build is genuinely large.
- R&D is meaningful (hybrid powertrain, EV development) — counted as build.
- Camry-specific allocation: use Toyota Automotive ratios; Camry is a high-volume single product representative of mass-market auto economics.
- Yen translation: state FX rate.

## Output format

`results/036-toyota-camry.md` per spec. Methodology must show how finco was carved out.

## What "good data" looks like

- Automotive segment financials cited; finco carve-out shown.
- Build_pct probably 88-95% — auto manufacturing is genuinely build-heavy.
- Confidence: **high**.
