# Result: US Food Supply Chain — Total Inventory and Depletion Timeline

## Summary

The US food system contains roughly 1,200+ trillion calories across all categories — theoretically enough to feed 335M people for ~5 years at 2,000 cal/day. However, the vast majority (95%+) is grain stored on farms and in elevators, requiring transportation and processing infrastructure that may not exist post-collapse. The readily accessible food supply (retail, home pantries, restaurants) would be exhausted within 1–2 weeks under realistic conditions. The fundamental tension: the US has years of raw calories but only days of accessible, edible food for urban populations.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| retail_grocery_stores | 63000 | 45575 | 76320 | stores | current | FMI 2024 / IBISWorld 2025 | high |
| retail_inventory_days | 3 | 2 | 5 | days | current | Industry consensus / FMI | high |
| retail_total_calories | 2000000000000 | 1500000000000 | 2500000000000 | calories | current | Derived from consumption data | medium |
| cold_storage_red_meat | 845300000 | 800000000 | 900000000 | pounds | Dec 2025 | USDA NASS Cold Storage Jan 2026 | high |
| cold_storage_poultry | 998300000 | 950000000 | 1050000000 | pounds | Dec 2025 | USDA NASS Cold Storage Jan 2026 | high |
| cold_storage_butter | 199300000 | 180000000 | 220000000 | pounds | Dec 2025 | USDA NASS Cold Storage Jan 2026 | high |
| cold_storage_cheese | 1372200000 | 1300000000 | 1450000000 | pounds | Dec 2025 | USDA NASS Cold Storage Jan 2026 | high |
| cold_storage_frozen_fruit | 1289200000 | 1200000000 | 1400000000 | pounds | Dec 2025 | USDA NASS Cold Storage Jan 2026 | high |
| cold_storage_frozen_vegetables | 2070500000 | 1900000000 | 2200000000 | pounds | Dec 2025 | USDA NASS Cold Storage Jan 2026 | high |
| cold_storage_total_calories | 5600000000000 | 4800000000000 | 6400000000000 | calories | Dec 2025 | Derived from USDA data + USDA nutrient values | medium |
| restaurant_food_service_establishments | 750000 | 720000 | 1000000 | establishments | 2024 | BLS NAICS 722 / NRA | high |
| restaurant_institutional_total_calories | 500000000000 | 300000000000 | 700000000000 | calories | current | Derived from food service spending share | low |
| grain_stocks_corn | 9020000000 | 1530000000 | 13300000000 | bushels | Mar 2025 (range: Sep–Dec) | USDA NASS Grain Stocks | high |
| grain_stocks_wheat | 1300000000 | 1100000000 | 2120000000 | bushels | Mar 2025 (range: Jan–Sep) | USDA NASS Grain Stocks | high |
| grain_stocks_soybeans | 2100000000 | 1500000000 | 2500000000 | bushels | Mar 2025 | USDA NASS Grain Stocks | high |
| grain_total_calories | 1211000000000000 | 400000000000000 | 1800000000000000 | calories | Mar 2025 (range: pre/post-harvest) | Derived from USDA stocks × cal/bushel | medium |
| grain_storage_capacity_total | 25480000000 | 25000000000 | 26000000000 | bushels | Dec 2024 | USDA NASS | high |
| grain_storage_on_farm | 13630000000 | 13000000000 | 14000000000 | bushels | Dec 2024 | USDA NASS | high |
| grain_storage_off_farm | 11850000000 | 11500000000 | 12000000000 | bushels | Dec 2024 | USDA NASS | high |
| cattle_inventory | 94200000 | 92000000 | 96000000 | head | Jul 2025 | USDA NASS Cattle Inventory | high |
| hog_inventory | 74500000 | 72000000 | 76000000 | head | 2024 | USDA NASS | high |
| broiler_chickens_on_hand | 1160000000 | 1000000000 | 1300000000 | birds | current (derived) | NCC annual production / 47-day cycle | medium |
| layer_chickens | 371000000 | 360000000 | 380000000 | birds | Jun 2024 | USDA NASS | high |
| livestock_total_calories | 48000000000000 | 38000000000000 | 60000000000000 | calories | current | Derived from inventory × per-animal yield | medium |
| home_pantry_avg_days | 5 | 3 | 7 | days | current | FEMA surveys / industry estimates | medium |
| home_pantry_total_calories | 4000000000000 | 2500000000000 | 6000000000000 | calories | current | Derived from 131M households × avg supply | low |
| strategic_grain_reserve | 0 | 0 | 0 | bushels | current | USDA FAS / CRS | high |
| us_food_supply_per_capita_daily | 4000 | 3800 | 4200 | calories_per_day | 2022 | USDA ERS Food Availability | high |
| us_daily_caloric_need_total | 670000000000 | 650000000000 | 700000000000 | calories_per_day | current | 335M × 2000 cal/day | high |
| cold_chain_dependent_food_pct | 40 | 35 | 50 | pct | current | Industry estimates / cold chain literature | medium |

## Per-Category Caloric Breakdown and Days of Supply

### 1. Retail Grocery Inventory (~2.0 trillion calories)

**Store count:** ~63,000 supermarkets/grocery stores (45,575 supermarkets per FMI; 76,320 broader per IBISWorld).

**Inventory depth:** Industry standard is ~3 days of normal consumer demand. Stores run lean — shelf space is selling space, not storage. Fresh produce shelf life is 10–14 days; most perishables turn over in 2–3 days.

**Caloric estimate:** The US food system provides ~4,000 cal/person/day. Retail grocery handles ~54% of food expenditures. 335M × 4,000 × 0.54 = 724 billion cal/day through retail. At 3 days of inventory: ~2.0 trillion calories on retail shelves at any moment.

**Days of supply (335M at 2,000 cal/day):** 3.0 days normal | 5.0 days rationed at 1,200 cal

**Accessibility:** High in normal conditions. In a crisis: emptied within 24–48 hours by panic buying. Perishables (dairy, meat, produce — ~40% of retail inventory) spoil within 2–3 days without refrigeration.

### 2. Warehouse / Cold Storage (~5.6 trillion calories)

**USDA Cold Storage totals (Dec 31, 2025):**
- Red meat: 845.3M lbs (~930B cal at ~1,100 cal/lb avg)
- Poultry: 998.3M lbs (~900B cal at ~900 cal/lb avg)
- Butter: 199.3M lbs (~650B cal at ~3,250 cal/lb)
- Cheese: 1,372.2M lbs (~2,470B cal at ~1,800 cal/lb)
- Frozen fruit: 1,289.2M lbs (~320B cal at ~250 cal/lb)
- Frozen vegetables: 2,070.5M lbs (~310B cal at ~150 cal/lb)
- **Subtotal cold storage:** ~6.8 billion lbs, ~5.6 trillion calories

Dry goods warehousing (canned goods, shelf-stable products) adds an additional estimated 1–3 trillion calories but is poorly tracked by any single data source.

**Days of supply:** 8.3 days normal | 13.9 days rationed

**Accessibility:** 100% cold-chain dependent. Without grid power, frozen products begin thawing within hours and are unsafe within 24–48 hours (USDA food safety guidance: freezer contents safe ~48 hours if door remains closed). Warehouse locations are known to distributors but not the general public. In a total grid collapse, this category effectively drops to ~2 days before spoilage renders it inedible.

### 3. Restaurant / Institutional Supply (~0.5 trillion calories)

**Establishments:** ~750,000 restaurants; ~130,000 schools; ~6,000 hospitals; military installations.

**Inventory depth:** Restaurants keep 1–3 days of inventory. Institutional food service (hospitals, schools, military) may hold 1–2 weeks of shelf-stable supplies per FEMA guidance, but this represents a small fraction of the total food service sector.

**Caloric estimate:** Food service accounts for ~46% of food expenditures but turns over faster (1–2 days). Roughly 0.3–0.7 trillion calories at any moment.

**Days of supply:** 0.7 days normal | 1.2 days rationed

**Accessibility:** Commercial kitchens are not designed for mass public feeding. In a crisis, restaurant food is looted or consumed by staff within hours.

### 4. Home Pantry (~4.0 trillion calories)

**Household count:** ~131 million US households, average size 2.5 persons.

**Average supply:** FEMA survey data suggests 38% of households have a 3-day supply; 81% have enough non-perishable food for 3 days. Actual average is estimated at 3–7 days at normal consumption, with enormous variance.

**Caloric estimate:**
- Average household: ~5 days × 2.5 people × 2,000 cal = 25,000 cal/household
- 131M × 25,000 = ~3.3 trillion calories

**Prepper / LDS stockpiles:** The LDS Church recommends 3-month to 1-year food storage. However, compliance is low — estimated 15–20% of LDS members maintain recommended stores. ~7 million US LDS members (3M households), maybe 500K–600K with substantial stores. Add non-LDS preppers (est. 3–5% of households): perhaps 5M households with 30–90+ day supplies, contributing an additional ~0.5–1.5 trillion calories.

**Total home pantry:** ~4.0 trillion calories (range: 2.5–6.0T)

**Days of supply:** 6.0 days normal | 10.0 days rationed

**Accessibility:** Immediately accessible to the household, but highly unequal. Urban apartments have 1–3 days; rural homesteads may have months. About 35–40% of home food is refrigerated and spoils within days of grid failure.

### 5. Grain Stocks (~1,211 trillion calories — the elephant in the room)

**USDA Grain Stocks (March 1, 2025 snapshot):**
- Corn: 9.02 billion bushels (5.43B on-farm, 3.59B off-farm)
- Wheat: 1.30 billion bushels (0.30B on-farm, 1.00B off-farm)
- Soybeans: 2.10 billion bushels

**Seasonal variation is enormous:**
- Corn ranges from 1.53B bushels (Sep, pre-harvest) to 13.3B bushels (Dec, post-harvest)
- Total grain storage capacity: 25.5 billion bushels (13.6B on-farm, 11.9B off-farm)
- December 2025 utilization: 80% of on-farm capacity

**Caloric conversion:**
- Corn: 56 lbs/bushel × ~1,650 cal/lb = ~92,400 cal/bushel → 9.02B × 92,400 = 833 trillion cal
- Wheat: 60 lbs/bushel × ~1,540 cal/lb = ~92,400 cal/bushel → 1.30B × 92,400 = 120 trillion cal
- Soybeans: 60 lbs/bushel × ~2,020 cal/lb = ~121,200 cal/bushel → 2.10B × 121,200 = 255 trillion cal
- Other grains (sorghum, oats, barley, rice): estimated +3–5% → ~40 trillion cal
- **Total grain calories: ~1,211 trillion** (range: 400T pre-harvest to 1,800T post-harvest)

**Days of supply:** 1,808 days (4.95 years) normal | 3,013 days (8.25 years) rationed

**Critical caveats:**
- Currently ~36% of corn goes to animal feed, ~34% to ethanol, only ~10% directly to human food — but all is technically edible
- 53% of corn stocks are on-farm, primarily in the Midwest (Iowa, Illinois, Nebraska, Minnesota)
- Grain requires milling/processing and cooking, both energy-intensive
- Transportation from rural silos to urban centers requires functioning infrastructure
- Soybeans require significant processing to be palatable as human food
- Nutritionally incomplete: grain alone lacks sufficient vitamins, fats, and micronutrients for long-term survival
- Without pesticides and climate control, stored grain degrades and suffers pest losses (~2–5% per year in good storage, much more in improvised storage)

### 6. Livestock as Walking Calories (~48 trillion calories)

**Inventory:**
- Cattle: 94.2M head (28.7M beef cows, 9.4M dairy cows, ~30M+ calves, ~12M feedlot, remainder heifers/bulls)
- Hogs: 74.5M head
- Broiler chickens on hand: ~1.16 billion (9B produced annually ÷ 365 × 47-day grow cycle)
- Layer chickens: 371M

**Per-animal caloric yield:**
- Cattle (average across all types): ~1,000 lbs avg live weight → 630 lbs carcass → ~430 lbs retail meat → ~350,000 cal/animal (conservative, accounts for calves)
- Hogs: ~250 lbs live → 144 lbs retail cuts → ~150,000 cal/animal
- Broiler chickens: ~5.8 lbs live → 4 lbs ready-to-cook → ~2.9 lbs edible → ~2,500 cal/bird
- Layer chickens: ~4 lbs live → ~2 lbs edible → ~1,800 cal/bird

**Total livestock calories:**
- Cattle: 94.2M × 350,000 = 33.0 trillion cal
- Hogs: 74.5M × 150,000 = 11.2 trillion cal
- Broilers: 1,160M × 2,500 = 2.9 trillion cal
- Layers: 371M × 1,800 = 0.7 trillion cal
- **Total: ~48 trillion calories**

**Days of supply:** 72 days normal | 119 days rationed

**Critical caveats:**
- Chickens and pigs are entirely feed-dependent; without commercial feed, chickens die in 1–2 weeks, pigs in 2–4 weeks
- Cattle on pasture can survive indefinitely (seasonal) but lose weight rapidly without supplemental feed
- Slaughter capacity: US processes ~125,000 cattle/day, ~480,000 hogs/day, ~24M chickens/day in normal operations — all dependent on grid power and labor
- Without industrial slaughter infrastructure, processing is orders of magnitude slower
- Meat spoils within hours without refrigeration; jerky/smoking preserves some but requires fuel and labor

### 7. Strategic Reserves (effectively zero)

The US has **no strategic food reserve**. The Bill Emerson Humanitarian Trust, originally the Food Security Wheat Reserve, held physical grain until 2008 when the USDA sold remaining stocks (~915,000 MT) and converted the trust to an all-cash reserve. In 2022, the remaining funds were drawn down for Ukraine food assistance. There is no government-held grain buffer for domestic emergencies.

This is a notable policy choice: the US has a Strategic Petroleum Reserve (700M+ barrels) but no food equivalent. The assumption has been that the private-sector food supply chain and crop insurance are sufficient buffers.

## Summary: Days of Total Food Supply Under Three Assumptions

### Assumption 1: Perfect distribution, normal consumption (2,000 cal/day)

All food in the system is accessible and distributed optimally. No spoilage, no waste, no logistical constraints.

| Category | Calories (trillion) | Days of supply |
|---|---|---|
| Retail grocery | 2.0 | 3 |
| Cold storage / warehouse | 5.6 | 8 |
| Restaurant / institutional | 0.5 | 1 |
| Home pantry | 4.0 | 6 |
| Grain stocks | 1,211 | 1,808 |
| Livestock | 48 | 72 |
| Strategic reserves | 0 | 0 |
| **Total** | **~1,271** | **~1,898 (~5.2 years)** |

### Assumption 2: Perfect distribution, severe rationing (1,200 cal/day)

Same perfect logistics but at survival-level intake.

| Category | Calories (trillion) | Days of supply |
|---|---|---|
| Retail grocery | 2.0 | 5 |
| Cold storage / warehouse | 5.6 | 14 |
| Restaurant / institutional | 0.5 | 1 |
| Home pantry | 4.0 | 10 |
| Grain stocks | 1,211 | 3,013 |
| Livestock | 48 | 119 |
| Strategic reserves | 0 | 0 |
| **Total** | **~1,271** | **~3,162 (~8.7 years)** |

### Assumption 3: Realistic distribution (accounting for hoarding, spoilage, access)

Grid failure assumed. Transportation largely non-functional. Panic buying in first 48 hours.

| Category | Effective calories (trillion) | Effective days | Why reduced |
|---|---|---|---|
| Retail grocery | 0.8 | 1 | Panic buying empties stores in 24–48 hrs |
| Cold storage / warehouse | 1.5 | 2 | Spoils within 48 hrs without grid; partial access before spoilage |
| Restaurant / institutional | 0.2 | 0.3 | Looted/consumed immediately |
| Home pantry | 2.5 | 4 | ~35–40% is refrigerated and spoils; remainder lasts |
| Grain stocks (accessible portion) | 120–240 | 180–360 | ~10–20% accessible without transport/processing infrastructure |
| Livestock (accessible portion) | 15–20 | 22–30 | Feed-dependent animals die in weeks; slaughter bottleneck |
| **Total** | **~140–265** | **~210–397** |

**The realistic picture:** Most Americans have 4–7 days of immediately edible food. The subsequent weeks depend entirely on proximity to grain storage and livestock, ability to process raw grain, and social organization for distribution. Urban populations face the worst odds; rural agricultural areas sit on years of raw calories they can't easily share.

## Data Gaps

- **Dry goods warehousing:** No centralized tracking of non-refrigerated warehouse inventory (canned goods, shelf-stable products). USDA tracks cold storage monthly but dry goods warehousing is fragmented across thousands of private facilities. This could add 1–3 trillion calories to the warehouse category.
- **In-transit food:** At any moment, food is in trucks, rail cars, and container ships. The US food system moves ~1 billion ton-miles of food per day. No aggregate estimate of in-transit inventory exists.
- **Aquaculture and fisheries:** Not included. US commercial fishing produces ~10 billion lbs/year; aquaculture another ~1 billion lbs. Minor relative to grain and livestock.
- **Pet food:** ~50 million tons of pet food produced annually in the US. Edible by humans in extremis but not included in calculations.
- **Home gardens and urban agriculture:** Negligible at the macro level (~1% of US food supply) but could matter locally.
- **Seasonal timing:** A collapse in October (post-harvest) vs. August (pre-harvest) could mean a 3–4× difference in available grain stocks. The March snapshot used for grain calculations is a reasonable midpoint but the range is enormous.
- **Prepper/stockpile data:** No systematic survey of emergency food stockpiles. Estimates for the prepper population range from 3% to 15% of households with >30 days of stored food. The true number is unknown.

## Sources

- USDA NASS, "Cold Storage" report, January 23, 2026 (data as of December 31, 2025). https://esmis.nal.usda.gov/publication/cold-storage
- USDA NASS, "Grain Stocks" report, March 2025. https://esmis.nal.usda.gov/publication/grain-stocks
- USDA NASS, "Grain Stocks" report, January 10, 2025 (December 2024 data). https://esmis.nal.usda.gov/sites/default/release-files/xg94hp534/5d86qt759/xp68nc84m/grst0125.pdf
- USDA NASS, "Grain Stocks" report, September 30, 2025. https://release.nass.usda.gov/reports/grst0925.pdf
- USDA NASS, "United States cattle inventory" report, January 30, 2026. https://www.nass.usda.gov/Newsroom/2026/01-30-2026.php
- USDA NASS, "United States Cattle Inventory Report" July 25, 2025. https://www.nass.usda.gov/Newsroom/2025/07-25-2025.php
- USDA NASS, "Capacity of Refrigerated Warehouses" (October 2023 biennial survey). https://esmis.nal.usda.gov/publication/capacity-refrigerated-warehouses
- USDA ERS, "Food Availability (Per Capita) Data System" — per capita food availability and loss-adjusted data. https://www.ers.usda.gov/data-products/food-availability-per-capita-data-system
- USDA ERS, "Ag and Food Statistics: Charting the Essentials — Food Availability and Consumption." https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/food-availability-and-consumption
- USDA FAS, "Bill Emerson Humanitarian Trust." https://www.fas.usda.gov/programs/bill-emerson-humanitarian-trust
- FMI (Food Marketing Institute), "Food Industry Facts" 2024 — supermarket count and retail data. https://www.fmi.org/our-research/food-industry-facts
- IBISWorld, "Supermarkets & Grocery Stores in the US" 2025 — broader store count. https://www.ibisworld.com/united-states/number-of-businesses/supermarkets-grocery-stores/1040/
- National Chicken Council, "U.S. Broiler Performance" — annual production (~9B birds), 47-day cycle. https://www.nationalchickencouncil.org/about-the-industry/statistics/u-s-broiler-performance/
- American Farm Bureau Federation, "Grain Storage Remains Tight" — storage capacity trends. https://www.fb.org/market-intel/grain-storage-remains-tight
- University of Nebraska–Lincoln Beef Watch, "How Many Pounds of Meat Can We Expect From A Beef Animal?" https://beef.unl.edu/beefwatch/2020/how-many-pounds-meat-can-we-expect-beef-animal/
- University of Wisconsin Extension, "How much meat should a hog yield?" https://livestock.extension.wisc.edu/articles/how-much-meat-should-a-hog-yield/
- FEMA / Ready.gov, "Food" — emergency preparedness recommendations. https://www.ready.gov/food
- Church of Jesus Christ of Latter-day Saints, "Food Storage" guidance. https://www.churchofjesuschrist.org/study/manual/gospel-topics/food-storage?lang=eng
- CRS Report RS21234, "The Bill Emerson Humanitarian Trust: Background and Current Issues." https://www.everycrsreport.com/reports/RS21234.html
- NPR / USDA, "U.S. Lets 141 Trillion Calories Of Food Go To Waste Each Year" (2014). https://www.npr.org/sections/thesalt/2014/02/27/283071610/u-s-lets-141-trillion-calories-of-food-go-to-waste-each-year
- Wikipedia, "Strategic grain reserve." https://en.wikipedia.org/wiki/Strategic_grain_reserve

<!-- COMPLETE -->
