# Ticket 047 — GE wind turbine

## Product

A GE Vernova onshore wind turbine (e.g. GE 3.6-154, or the Cypress / Sierra platforms). Iconic utility-scale renewable equipment, multi-MW class. B2B / structural panel anchor.

## Parent company

GE Vernova Inc. (NYSE: GEV) — spun off from General Electric in April 2024 as a standalone public company for GE's energy businesses.

## Panel

b2b

## Segment to use

**GE Vernova Wind segment** (which itself includes Onshore Wind and Offshore Wind sub-segments — use the consolidated Wind segment, or onshore-only if the report breaks them out and you want the more representative number; offshore has been a major loss center recently).

## Source hierarchy

1. **GE Vernova FY2024 10-K** (first full year as standalone public company; fiscal year ending Dec 2024). Look for: Wind segment revenue and operating income (or loss — Offshore Wind has been a multi-billion-dollar loss line), R&D expense, SG&A breakdown.
2. **GE Vernova investor day deck (March 2024 spin-off investor day)** for forward-looking color and segment economics framing.
3. **Earnings call transcripts** for any color on Wind cost structure, advertising/marketing intensity (negligible — utility-scale wind is sold via direct sales to utility customers and IPPs).
4. **Bloomberg NEF / Wood Mackenzie** trade press for industry-typical wind OEM cost structure benchmarking (build-heavy, low advertising).
5. **Pre-spin GE 10-Ks** (2022, 2023) for historical Wind cost structure context — note that pre-spin GE allocated some corporate overhead differently than post-spin.

## Specific caveats for this product

- **Wind has been loss-making.** Don't be surprised if the segment shows negative operating profit, especially for offshore wind where GE Vernova has taken multi-billion-dollar charges on the Dogger Bank and Vineyard Wind contracts. Report honestly with negative profit_millions if applicable.
- **Advertising is essentially zero.** Wind turbines are sold to a small set of utility and IPP customers via direct enterprise sales. Sell line is dominated by sales force comp, project-development support, and bid/proposal expense.
- **R&D is meaningful** — turbine platforms (Cypress, Haliade-X) require multi-year engineering. Counted as build per rubric.
- **GE Vernova is a young public company.** First annual report only just filed. Methodology should note that segment cost allocation may shift between 2024 and 2025 reporting as the standalone company refines its disclosure structure.
- **Customer support / long-term service agreements (LTSAs)** are a meaningful revenue stream — typically embedded in either Wind segment or a separate Power Services line. Note where it lands in the chosen year's segment structure. Service revenue is a build line per rubric (keeping the product working).
- **Loss-making segment numerator/denominator behavior:** When operating profit is negative, build + sell + overhead > revenue. Don't try to "balance" the bars artificially — show the actual numbers and let the negative profit show as a negative bar segment in the visualization.

## Output format

Write result to `results/047-ge-wind-turbine.md` per the YAML frontmatter spec. Methodology must:
1. Confirm Wind segment was used and note whether onshore/offshore were combined or separated.
2. Acknowledge the loss position honestly if applicable.
3. Note the standalone-spin caveat.
4. Explain the LTSA service revenue treatment.

## What "good data" looks like

- Wind segment revenue, segment cost of revenue, R&D allocation, and SG&A all cited from the GE Vernova 10-K.
- Build_pct probably 92-97% — almost no advertising, heavy COGS and R&D.
- If profit is negative, that's reported faithfully (negative profit_millions).
- Confidence: **medium-to-high** — segment reporting exists but is in its first year of standalone disclosure.
- Methodology note: spin-off newness and offshore-wind loss treatment are flagged.
