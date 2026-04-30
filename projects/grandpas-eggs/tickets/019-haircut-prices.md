# Haircut — Price History 1950-2025

## What to research

Build a time series of men's haircut prices in the United States from 1950 to 2025. Since the quality rubric (results/018-haircut-quality-rubric.md) likely shows minimal quality change, this ticket covers BOTH Line A (cheapest) and Line B (quality-equivalent) — they may be the same or very close.

**Read results/018-haircut-quality-rubric.md first** to determine if there's a meaningful quality gap. If there is, collect both tiers. If not, collect a single series.

## Target data points

Every 5 years from 1950 to 2025, or annual if data allows.

## Data source hierarchy

1. **BLS CPI component** — "Haircut, barber shop, men's" or similar. Check APU average price series first, then CPI indices if no absolute prices.
2. **Historical newspaper advertisements** — Barbershop prices are frequently mentioned in local newspaper ads. Good for pre-1980 data points.
3. **Barber trade publications** — National Association of Barber Boards, barber licensing records sometimes note standard pricing.
4. **Academic literature** — Baumol's cost disease is frequently illustrated with barber services. These studies often include historical price series.
5. **Modern pricing surveys** — Industry surveys of barbershop pricing (Square/Clover POS data, Yelp surveys, etc.)

## Important notes

- **Barber vs. salon:** Track barbershop men's haircuts specifically, not women's salon cuts (which are a completely different product and price structure).
- **Tipping:** 1955 tipping norms for barbers vs. 2025 norms may differ. Record the pre-tip price. Note tipping norms if you find them, but don't add them to the price.
- **Budget chains:** Great Clips, Supercuts, etc. appeared in the 1980s-1990s. These represent the cheapest tier. Before them, "cheapest" was just "the local barbershop."
- **This is the Baumol's benchmark.** The haircut line on the graph should show that a purely labor-based service with no quality change tracks labor costs almost exactly. If it does, it validates the methodology — the gap (or lack thereof) between cheapest and quality-equivalent for other commodities is meaningful precisely because haircuts show no gap.

## Output format

Follow the **Type 3: Price data** format from plan.md.

If collecting two tiers:

| Year | Price Cheap (nominal $) | Price Quality-Equiv (nominal $) | Unit | Source | Notes |
|------|------------------------|--------------------------------|------|--------|-------|

Unit = "one men's haircut".

## What "good data" looks like

- At least 10 data points spanning 1950-2025
- If a gap exists between budget chains and standard barbershops, it should be modest ($5-15, not $50)
- The labor-minutes calculation should show haircuts roughly tracked median wage growth — they got neither cheaper nor more expensive in work-hours
