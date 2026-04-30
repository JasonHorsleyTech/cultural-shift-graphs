# Ticket 040: Risk Probability Estimates per Scenario

## What to research

How likely is each scenario? Annotating the graph with probability context transforms it from "scary lines" to "how worried should you actually be?"

## Specific data needed

For each scenario, find the best available probability estimate per century (or per decade, per year):

1. **Full nuclear war (US-Russia):**
   - Toby Ord estimate
   - Other estimates (Hellman at Stanford, Barrett et al.)
   - Has the probability changed with current geopolitics?

2. **EMP attack:**
   - Likelihood of a state actor executing a dedicated EMP strike
   - Not well-quantified — mostly qualitative assessments

3. **Carrington-class solar storm:**
   - NAS 2008: ~12% per decade probability
   - Riley (2012): updated estimate
   - This is the most quantifiable probability

4. **Catastrophic engineered pandemic:**
   - Ord: ~1/30 per century (3.3% per century)
   - Other biosecurity experts' estimates
   - Has the risk increased since COVID-19? (Increased awareness of vulnerability AND increased biotech capability)

5. **Yellowstone VEI-8:**
   - USGS: ~1 in 730,000 per year
   - Not meaningfully likely in any human-relevant timeframe
   - But: VEI-7 somewhere on Earth is much more likely (~1 in 1000 per year?)

6. **10 km asteroid impact:**
   - ~1 per 100 million years for Chicxulub-class
   - 1 km impact: ~1 per 500,000 years
   - Current detection capability: would we see it coming?

7. **Global breadbasket failure:**
   - Gaupp et al. probability estimates
   - Increasing with climate change
   - Maybe 1-5% per decade for a 3+ breadbasket failure?

8. **Climate cascades (4°C+):**
   - Probability depends entirely on emissions trajectory
   - Under current policies: what's the probability of reaching 4°C?
   - IPCC AR6 probability ranges by SSP pathway

## Where to look

1. **Ord, Toby — "The Precipice" (2020)** — comprehensive risk probability compilation
2. **GCR Institute / FHI** — global catastrophic risk research
3. **Riley (2012) — Space Weather** — solar storm probability
4. **Hellman, Martin — nuclear war probability estimation**
5. **IPCC AR6** — temperature trajectory probabilities
6. **USGS** — volcanic eruption frequency
7. **NASA CNEOS** — near-Earth object detection and probability

## Result format

Key Data Points table — one row per scenario:

| scenario | probability_per_century | probability_per_decade | source | confidence |
|---|---|---|---|---|

Also note: which risks are increasing over time (climate, pandemic, nuclear) vs. constant (asteroid, volcano)?

## What good data looks like

- Uses Toby Ord as the primary framework but supplements with domain-specific estimates
- Acknowledges that most of these probabilities are educated guesses, not actuarial data
- The solar storm is the best-quantified (~12%/decade) and the most surprisingly likely
- Notes that risks are NOT independent — nuclear war becomes more likely during climate stress, for example
