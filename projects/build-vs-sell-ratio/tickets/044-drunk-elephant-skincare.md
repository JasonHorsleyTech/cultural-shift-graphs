# Ticket 044 — Drunk Elephant skincare

## Product

A representative Drunk Elephant skincare item (e.g. Protini Polypeptide Cream, C-Firma Day Serum, Lala Retro Whipped Cream). Founded 2012, acquired by Shiseido in 2019 for ~$845M. A "founder-DTC turned premium prestige brand" archetype — heavy social media marketing, prestige distribution (Sephora), high-priced SKUs.

## Parent company

Shiseido Company, Limited (TYO: 4911). Drunk Elephant sits in Shiseido's "Other / Americas" reporting cluster.

## Panel

consumer

## Segment to use

**Shiseido Americas region** (or "Other" segment depending on current year's segment structure). Drunk Elephant is reported within Americas geographic segment in recent annual reports. Note: Shiseido does NOT break out Drunk Elephant brand financials separately; Americas region is the closest available segment.

## Source hierarchy

1. **Shiseido FY2024 Annual Report (Securities Report / 有価証券報告書)** — Japanese GAAP / IFRS. Look for: Americas segment revenue and operating income; advertising/promotion expense (Japanese filers typically disclose 広告宣伝費 advertising expense as a separate SG&A line); R&D expense.
2. **Shiseido Investor Relations website** — segment reporting, integrated report PDFs. Shiseido has historically been transparent about advertising as a percentage of net sales.
3. **Trade press estimates** of Drunk Elephant revenue (cited at $100M at acquisition in 2019; current trade press estimates ~$300-400M but these are not authoritative).
4. **Comparable**: Estée Lauder 10-K for Skin Care segment cost structure as a public peer reference for prestige skincare economics.

## Specific caveats for this product

- **Drunk Elephant brand-specific financials are NOT disclosed.** Shiseido reports at region/segment level only. Default: use Americas segment ratio as the proxy for Drunk Elephant.
- **Prestige skincare has structurally heavy sell:** Sephora retail trade (slotting, in-store events), influencer/affiliate marketing, sample programs, and packaging-as-marketing. Industry benchmark for prestige skincare puts marketing/sales at 25-35% of revenue.
- **R&D for skincare is a meaningful build line** for Shiseido (one of the more R&D-intensive cosmetics companies, ~2.5-3% of revenue).
- Sephora is a third-party retailer — not Shiseido's storefront — so retail real estate isn't on Shiseido's books, but the trade promotion to keep shelves stocked at Sephora IS sell.
- Drunk Elephant has been rumored to underperform recent guidance (Shiseido has noted Americas weakness in recent earnings calls). Note in methodology if the segment is loss-making (would change the profit_millions field, possibly to negative).
- **Currency:** Shiseido reports in JPY. Convert to USD using the average FX rate for the fiscal year used. Document the rate.

## Output format

Write result to `results/044-drunk-elephant-skincare.md` per the YAML frontmatter spec. Methodology must:
1. State that Americas segment is being used as a proxy because brand-level isn't disclosed.
2. Note the JPY→USD conversion rate.
3. If the Americas segment was loss-making, report it honestly with negative profit.
4. Discuss why prestige skincare is structurally sell-heavy and whether DE follows the pattern.

## What "good data" looks like

- Shiseido annual report cited with specific page/section reference.
- Currency conversion documented.
- Build_pct probably 50-65% — prestige skincare is meaningfully sell-tilted but not as extreme as Coke/Rolex.
- Confidence: **medium** (segment-level proxy for brand-level, but the parent's disclosure is good).
