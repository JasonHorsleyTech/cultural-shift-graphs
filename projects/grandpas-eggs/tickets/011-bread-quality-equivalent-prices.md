# Bread — Quality-Equivalent Prices 1990-2025

## What to research

Build a time series of the price for **quality-equivalent bread** (matching the 1955 baseline as defined in results/009-bread-quality-rubric.md) from the earliest available year to 2025.

**Read results/009-bread-quality-rubric.md first.** If it doesn't exist yet, use "fresh bakery bread with simple ingredients (flour, water, yeast, salt, sugar)" as the working definition — think supermarket bakery section or artisanal bakery loaf, not the bread aisle.

## Target data points

Annual from the earliest available year to 2025. The quality tier divergence for bread is harder to pin down than for eggs — industrial bread became dominant in the 1960s-1970s, but "artisanal" as a retail category is a 2000s phenomenon. Data before 2000 may be sparse.

## Data source hierarchy

1. **BLS Average Price Data** — There may not be a separate series for artisanal/bakery bread. Check for any premium bread price series.
2. **Supermarket bakery section pricing** — Industry reports or market research on in-store bakery pricing.
3. **Artisanal bread brand pricing** — Retail prices for brands like Dave's Killer Bread, Pepperidge Farm Farmhouse, or local bakery equivalents.
4. **Consumer expenditure surveys** — May have data on spending in different bread categories.
5. **Historical bakery pricing** — Pre-industrialization, local bakery bread was the default. If pre-1970 bakery bread prices exist, they represent the quality-equivalent baseline.

## Important notes

- The bread story is interesting because industrialization happened EARLIER than for eggs or milk. The quality tiers diverged in the 1960s-1970s when industrial continuous-mix bread (Wonder Bread) became dominant and local bakeries declined.
- Pre-divergence (~before 1960), the standard loaf was closer to what we'd now call "artisanal" — report the single price and note it applies to both lines.
- The modern "artisanal" market is fragmented: supermarket bakery section ($3-5/loaf), premium brands ($5-7/loaf), actual artisan bakeries ($7-12/loaf). The rubric should specify which tier matches the 1955 baseline.

## Output format

Follow the **Type 3: Price data** format from plan.md. Unit = "pound" or "loaf" with weight noted.

## What "good data" looks like

- At least a few data points per decade from 1970 onward
- Clear identification of what product is being priced
- Premium ratio over cheapest white bread documented
