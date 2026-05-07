# Ticket 039 — Ferrari 488

## Product

A Ferrari (representative current sports car — 488 successor or current flagship; use Ferrari's overall auto segment).

## Parent company

Ferrari N.V. (NYSE: RACE; primary listing Milan).

## Panel

consumer

## Segment to use

**Ferrari Cars and Spare Parts segment** (primary) — exclude Sponsorship/Commercial (F1 racing revenue) and Ferrari Financial Services per `plan.md`. Ferrari reports these cleanly.

## Source hierarchy

1. **Ferrari FY2024 20-F** — segment reporting is detailed (Cars, Engines, Sponsorship, Other, Financial Services).
2. **Ferrari investor presentations** for unit volumes and personalization revenue color.
3. **Trade press** (Automotive News, Bloomberg Luxury) for context.

## Specific caveats for this product

- Ferrari has very high gross margin (~50%) — small build relative to revenue.
- Ferrari does NOT advertise traditionally — their "marketing" is F1 sponsorship and the racing program. Ferrari spends ~€100M/yr on the F1 team and counts it as a marketing investment historically. Decision: F1 racing is separately reported; if we exclude that segment, Ferrari's "advertising" line is near zero.
- Dealer network: Ferrari has owned and franchised dealerships globally; structure varies by country. Use 20-F notes.
- Capex moderate (Maranello plant) but not enormous.
- Personalization revenue (custom paint, options) is high-margin add-on — counted in Cars segment.
- Methodology question: should the F1 racing investment (separately reported) be treated as "Ferrari's advertising"? Default: NO — it's a separate operating segment with its own revenue (FIA prize money, sponsorships) and cost. Note this choice.

## Output format

`results/039-ferrari-488.md` per spec.

## What "good data" looks like

- Cars and Spare Parts segment financials cited.
- Methodology explains F1 racing exclusion choice.
- Build_pct probably 65-80% — Ferrari is genuinely build-heavy (in-house mfg) with surprisingly little explicit advertising once F1 is carved out.
- Confidence: **high**.
