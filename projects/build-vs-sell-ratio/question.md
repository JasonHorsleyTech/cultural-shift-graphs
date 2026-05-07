# Build vs. Sell: Where does your dollar actually go?

## The question

For 50 famous products, when a consumer spends $1 on the product, how much went to **building** the thing vs. **selling** the thing?

Sort the 50 items from most-build to most-sell. Hypothesis: the spread is enormous and counterintuitive. CPG (Tide, Coke, Gillette) and luxury (Rolex, Ferrari) will be sell-heavy. Heavy industrial and defense (F-35, MRI, combine harvester, 737) will be build-heavy. Some categories that "feel" premium (Lululemon, Yankee Candle, Peloton) will be more sell-heavy than people expect.

## Why it's interesting

The visceral hook: people picture *the product* when they buy something. They don't picture the years of TV ads, the in-store displays, the influencer deals, the dealer incentives, the brand consultants — even though that's where most of their money often goes. This graph makes that invisible spend visible. It's the kind of thing Jason wants to show his friends and have them go "wait, *what?*"

## The build/sell rubric

Apply this rubric per company, using the latest available 10-K (or equivalent) for public companies and best-effort financials for private ones.

**Build** — money that, if you stopped spending it, would mean you don't have the product:
- R&D / engineering
- Manufacturing labor, factory ops
- Cost of goods sold (raw materials, components)
- Capex on production assets
- Distribution / logistics (the product doesn't reach you without it)
- Customer support (product doesn't keep working without it)

**Sell** — everything spent on getting people to buy:
- Advertising / marketing (all forms: TV, digital, influencer, sponsorship, content)
- Sales force compensation and commissions
- Dealer incentives, retail trade promotion, slotting fees
- Brand / packaging / store design beyond functional necessity
- Retail real estate (storefronts, not factories)
- Customer acquisition costs

**Excluded as overhead** (counted in neither numerator nor denominator):
- Executive comp, finance, legal, general admin
- Investor relations
- Real estate that's neither factory nor storefront

The output ratio = build / (build + sell). Express as a percentage. "X% of every dollar went to making the thing."

## The 50 products

### Bathroom (5)
1. Tide pod (P&G)
2. Gillette razor blade (P&G)
3. Crest toothpaste (P&G)
4. Old Spice deodorant (P&G)
5. Bottle of Tylenol (Johnson & Johnson / Kenvue)

### Kitchen / pantry (8)
6. Can of Coca-Cola (Coca-Cola Co.)
7. Box of Cheerios (General Mills)
8. Pack of Oreos (Mondelez)
9. Heinz ketchup (Kraft Heinz)
10. Kraft Mac & Cheese (Kraft Heinz)
11. Big Mac (McDonald's)
12. Bud Light 6-pack (AB InBev)
13. Jack Daniel's bottle (Brown-Forman)

### Cleaning closet (4)
14. Bounty paper towels (P&G)
15. Clorox bleach (Clorox)
16. Febreze (P&G)
17. Charmin toilet paper (P&G)

### Electronics (6)
18. iPhone (Apple)
19. MacBook Pro (Apple)
20. PS5 (Sony)
21. Samsung 65" TV (Samsung)
22. AirPods (Apple)
23. Nintendo Switch (Nintendo)

### Appliances (5)
24. Dyson vacuum (Dyson — UK private, use Companies House filings)
25. Whirlpool washing machine (Whirlpool)
26. KitchenAid stand mixer (Whirlpool)
27. Nespresso machine (Nestlé)
28. Nest thermostat (Alphabet)

### Furniture / decor (4)
29. Casper mattress (Casper — was public, now private; use historical filings)
30. IKEA Billy bookcase (IKEA — private, but publishes group financials)
31. West Elm sofa (Williams-Sonoma)
32. Yankee Candle (Newell Brands)

### Wear (5)
33. Lululemon leggings (Lululemon)
34. Nike Air Force 1s (Nike)
35. Levi's 501s (Levi Strauss)
36. North Face fleece (VF Corp)
37. Rolex Submariner (Rolex — private foundation; triangulate via Federation of Swiss Watch Industry data and public peers Swatch / Richemont)

### Driveway (4)
38. Toyota Camry (Toyota)
39. Ford F-150 (Ford)
40. Tesla Model 3 (Tesla)
41. Ferrari 488 (Ferrari)

### Famous, but not in your house (9)
42. Boeing 737 (Boeing)
43. Cessna 172 (Textron)
44. John Deere combine harvester (Deere & Co.)
45. Caterpillar D9 bulldozer (Caterpillar)
46. Lockheed F-35 (Lockheed Martin)
47. GE wind turbine (GE Vernova)
48. GE MRI machine (GE Healthcare)
49. Peloton bike (Peloton)
50. Blue Bird school bus (Blue Bird Corp)

## Methodology hazards (read before researching)

- **GAAP isn't clean.** "SG&A" bundles ads + sales + exec comp + rent. Some companies break out "advertising expense" or "research and development" separately, many don't. Each ticket needs a per-company classification pass — don't regex the income statement.
- **Multi-product parents.** P&G owns 7 items on this list, Apple owns 3, Whirlpool owns 2, Kraft Heinz owns 2. Default approach: use parent-company ratio for all the parent's products and accept the imprecision. If brand-level ad spend is available (Kantar / Ad Age) and brand-level revenue can be estimated, prefer that. Note the approach in each ticket result.
- **Private companies.** Dyson, Rolex, Casper (now), IKEA, In-N-Out, Patagonia, etc. Each requires a bespoke approach — note the source and confidence level in the result.
- **Distribution vs. retail real estate.** Apple Stores are retail (sell). Toyota dealerships are not Toyota's expense, they're the dealers'. McDonald's is a franchise model — corporate-owned vs. franchised stores get different treatment. Be explicit per company.
- **Customer acquisition vs. customer support.** SaaS-style "customer success" is often sales in disguise. Use the gut test: if you stopped spending, would the product still work for existing customers? If yes (you'd just stop getting new ones), it's sell.
- **R&D in pharma and tech.** Some R&D is genuinely speculative bets that didn't make the product you're holding. Default: count it as build for the parent's product line, since it's the cost structure that produced the current product.
- **Per-product allocation.** For products like a Big Mac or a can of Coke, ratios likely match the parent company's overall mix. Note this. Don't pretend to greater precision than we have.

## Research honesty commitment

The framing ("garbage advertising vs. real product") presupposes high sell ratio = bad product. **The data should be allowed to contradict that.** If a sell-heavy product (e.g., Coke, Rolex) has clear evidence that the brand IS the product (luxury signaling, taste consistency, distribution reliability) and people get value commensurate with the price, the result file should say so. If a build-heavy product is build-heavy because it's structurally capital-intensive (not because it's better), say that. Don't massage results toward a punchline.

If during research an agent finds a methodology choice that materially changes the answer, flag it explicitly in the ticket result. The graph will be more interesting if the data is honest than if it confirms the title.

## Data format (rough plan — to be finalized in plan phase)

Per ticket result, capture at minimum:
- Product name
- Parent company
- Source(s) used (10-K year, alternative if private)
- Build $ (with brief breakdown)
- Sell $ (with brief breakdown)
- Excluded overhead $
- Build %  = build / (build + sell)
- Confidence: high / medium / low
- Notes: any methodology choices, surprises, caveats

Final TS data file shape will be sorted by build %, ascending or descending depending on what graphs best.

## Out of scope (for this project)

- Time series — interesting but a separate, harder project. Stay snapshot-based.
- Industry-level NAICS aggregation — confounded by structural industry economics, not the right cut.
- Quality / customer satisfaction overlay — fascinating follow-up project (does sell-heavy correlate with worse product?), but adds a second research axis. Park it.
