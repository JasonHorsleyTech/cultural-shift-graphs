# Food & Agriculture Water Intensity

## What to research

Build a table of **water required per pound (or per unit) of common foods**, using **blue water only** (actual freshwater withdrawn from rivers/aquifers, not rain or pollution dilution).

The popular water-footprint numbers are inflated by green water (rain). A pound of beef is "1,800 gallons" using total footprint but only "300-400 gallons" of blue water. This ticket gathers the honest numbers.

## Target foods

Research blue water intensity for each of the following. For each, find:
- **Total water footprint** (gal/lb) — the viral number people cite
- **Blue water only** (gal/lb) — the honest number
- **Green water** (gal/lb) — rain
- **Grey water** (gal/lb) — pollution dilution
- **Blue water as % of total** — shows how misleading the total footprint is

### Proteins
- Beef (feedlot, US average)
- Beef (grass-fed/pasture-raised)
- Pork
- Chicken
- Eggs (per dozen)
- Farmed fish (salmon, tilapia)
- Tofu / soybeans
- Lentils / beans

### Grains & Staples
- Rice (paddy)
- Wheat / bread
- Corn
- Potatoes
- Pasta

### Fruits & Vegetables
- Avocados
- Almonds
- Walnuts
- Lettuce
- Tomatoes
- Oranges
- Apples
- Bananas

### Beverages (per gallon produced)
- Milk
- Beer
- Wine
- Coffee (per pound of beans)
- Orange juice

### Processed
- Sugar (per pound)
- Chocolate (per pound)
- Cheese (per pound)

## Data source hierarchy

1. **Mekonnen & Hoekstra (2011, 2012)** — The foundational global water footprint studies from University of Twente. Published in Water Resources Research. These break out green/blue/grey for hundreds of crops and animal products. Widely cited. Available at waterfootprint.org.
2. **USDA Economic Research Service** — US-specific crop water use data. More focused on irrigation requirements than full lifecycle.
3. **Water Footprint Network** — Database and calculator at waterfootprint.org.
4. **Poore & Nemecek (2018)** — "Reducing food's environmental impacts through producers and consumers" (Science). Comprehensive meta-analysis with water data.
5. **Beef Research / National Cattlemen's Beef Association** — Industry response to water footprint claims, with alternative calculations.

## Important notes

- **US-specific where possible.** Global averages mask huge regional differences. US feedlot beef uses less blue water than Brazilian pasture beef because of different feed systems. Prefer US numbers.
- **Blue water is what matters for scarcity.** Green water (rain) isn't competitive — it falls whether crops are there or not. The whole point of this ticket is to strip away the green water inflation.
- **Some foods have near-zero blue water.** Grass-fed beef in rainy regions might use almost no blue water (the cows drink from streams that would flow anyway, the grass grows from rain). This is a real finding, not a data error.

## Output format

```
| Food | Unit | Total Footprint (gal/unit) | Blue Water (gal/unit) | Green Water (gal/unit) | Grey Water (gal/unit) | Blue % of Total | Region/System | Source |
```

## What "good data" looks like

- 25+ foods with complete blue/green/grey breakdown
- Blue water for beef is dramatically lower than the viral "1,800 gal/lb" — probably 200-500 gal/lb
- Almonds and rice should have high blue-water ratios (they're irrigated, not rain-fed)
- Grass-fed/rain-fed products should have very low blue water
- Numbers are sourced to specific studies, not recycled from infographics
