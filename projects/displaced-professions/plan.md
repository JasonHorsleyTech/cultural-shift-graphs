# Plan: Displaced Professions

## Summary

27 research tickets across 3 displacement mechanism categories (~9 each), interleaved so the dataset is balanced at any point if the pipeline stops. Each ticket researches one historical profession collapse and produces a structured result file.

## The Meta-Scatter (hero visual)

- **X-axis:** Years from peak employment to 75% decline. Log scale. Range: ~1 year to ~50 years.
- **Y-axis:** Income recovery metric (see tier system below).
- **Bubble size:** log(absolute peak workforce displaced).
- **Color:** Displacement mechanism (3 categories).

## Displacement Mechanism Taxonomy

The 9-cause taxonomy from question.md is replaced with 3 mechanism categories (per angle-02.md stress test). Events still carry cause-tags as metadata.

| Mechanism | Description | Expected scatter position | Color |
|-----------|-------------|---------------------------|-------|
| **Gradual erosion** | Market forces slowly erode demand — tool improvements, cultural drift, incremental globalization | Right side (slow decline), variable Y | Blue |
| **Tipping point** | Nonlinear collapse past a threshold — platform shifts, resource depletion tipping, market collapse | Center-left (fast once triggered) | Orange |
| **Discrete shock** | A single event/decision kills it — regime change, regulatory ban, moratorium, war | Far left (near-instant) | Red |

## Event List (27 events)

Tickets are interleaved by mechanism — one gradual, one tipping, one discrete per round — so the dataset is balanced at any stopping point.

### Round 1 (best-documented events)
| # | Event | Mechanism | Era | Country |
|---|-------|-----------|-----|---------|
| 001 | Handloom weavers vs. power looms | Gradual erosion | 1810–1860 | UK |
| 002 | Kodak / film photography workers | Tipping point | 2003–2012 | US |
| 003 | Soviet defense & industrial workers | Discrete shock | 1991–1998 | Russia |
| 004 | Travel agents vs. internet | Gradual erosion | 2000–present | US |
| 005 | Video rental workers (Blockbuster) | Tipping point | 2004–2010 | US |
| 006 | Newfoundland cod fishers | Discrete shock | 1992 | Canada |
| 007 | Switchboard / telephone operators | Gradual erosion | 1920s–1980s | US |
| 008 | Human computers | Tipping point | 1945–1960 | US/UK |
| 009 | Samurai class (Meiji Restoration) | Discrete shock | 1868–1877 | Japan |

### Round 2
| # | Event | Mechanism | Era | Country |
|---|-------|-----------|-----|---------|
| 010 | Typists / word processor operators | Gradual erosion | 1980s–2010s | US |
| 011 | American whalers | Tipping point | 1846–1880s | US |
| 012 | Freed slaves / post-emancipation labor | Discrete shock | 1865 | US |
| 013 | US textile mill workers | Gradual erosion | 1970s–2000s | US |
| 014 | Typesetting / Linotype operators | Tipping point | 1970s–1995 | US |
| 015 | Child laborers (regulatory abolition) | Discrete shock | 1900s–1930s | US/UK |

### Round 3
| # | Event | Mechanism | Era | Country |
|---|-------|-----------|-----|---------|
| 016 | British domestic servants | Gradual erosion | 1911–1960s | UK |
| 017 | Photo lab / film development workers | Tipping point | 2000–2015 | US |
| 018 | Prohibition-era alcohol workers | Discrete shock | 1920–1933 | US |
| 019 | US steel workers | Gradual erosion | 1970s–2000s | US |
| 020 | Encyclopedia salespeople | Tipping point | 1990s–2012 | US/UK |
| 021 | Irish potato blight farm laborers | Discrete shock | 1845–1852 | Ireland |

### Round 4
| # | Event | Mechanism | Era | Country |
|---|-------|-----------|-----|---------|
| 022 | Elevator operators | Gradual erosion | 1950s–1970s | US |
| 023 | Taxi drivers / medallion holders | Tipping point | 2012–present | US |
| 024 | Colonial administrators (decolonization) | Discrete shock | 1945–1970 | UK/France |
| 025 | Ice harvesters / ice deliverers | Gradual erosion | 1900–1940 | US |
| 026 | Print newspaper journalists | Tipping point | 2000–present | US |
| 027 | Dust Bowl farmers | Discrete shock | 1930s | US |

## Data Format Specification

Each ticket produces one result file: `results/NNN-slug.md`. The format below is the canonical template. Every result MUST include all sections, even if data is unavailable (mark as "N/A" with explanation).

### Result File Template

```markdown
# [Profession Name]

## Event Summary
- **Profession:** [specific occupation name]
- **Country/Region:** [country, and sub-region if relevant]
- **Peak Year:** [year of maximum employment]
- **Peak Workforce:** [number] ([source])
- **Primary Mechanism:** [gradual_erosion | tipping_point | discrete_shock]
- **Cause Tags:** [comma-separated from: tech_tool, tech_platform, cultural, regulatory, resource, globalization, war, regime, consolidation, environmental]
- **Killing Event:** [one-sentence description of what killed the profession]

## Workforce Timeline

Minimum 5 data points spanning peak to trough (or present). More is better.
Use the most consistent single source across all data points when possible.
If switching sources mid-timeline, note the transition.

| Year | Workforce | Source |
|------|-----------|--------|
| YYYY | N         | [source name, not full citation] |

## Decline Metrics
- **Decline Start Year:** [year sustained decline began — may differ from peak year]
- **Years from Peak to 25% Decline:** [number, or "N/A" if not yet reached]
- **Years from Peak to 50% Decline:** [number, or "N/A"]
- **Years from Peak to 75% Decline:** [number, or "N/A"]
- **Years from Peak to 90% Decline:** [number, or "N/A"]
- **Decline Shape:** [one of: linear, exponential_decay, cliff, stepped, s_curve]
- **Current Status:** [extinct | remnant (<10% peak) | contracted (10-50%) | ongoing_decline]

## Income Trajectory

### Data Quality: [measured | estimated | unavailable]

For post-1950 events, provide real (inflation-adjusted) income data.
For pre-1950 events, provide whatever wage/earnings data exists with explicit caveats.
All income figures should be in the local currency of the time, with a note on inflation adjustment method.

- **Income at Peak:** [amount] [currency]/[period] in [year] ([source])
- **Income at Trough:** [amount] [currency]/[period] in [year] ([source])
- **Income Recovery at 10 Years Post-Peak:** [percentage of peak real income, or "N/A"]
- **Inflation Adjustment Method:** [CPI, GDP deflator, or specify]

| Year | Median Income | Real (inflation-adj) | As % of Peak | Source |
|------|--------------|---------------------|--------------|--------|
| YYYY | [nominal]    | [real]              | [%]          | [source] |

## Where They Went

Estimate what happened to the displaced workforce. Use concurrent growth in successor industries in the same geography when individual-level tracking isn't available. Label the basis honestly.

| Destination | Est. % of Displaced | Basis | Notes |
|-------------|-------------------|-------|-------|
| [occupation or outcome] | [%] | [tracked/inferred/estimated] | [brief note] |

## Surplus Capture

Who benefited from the efficiency gains or cost savings? Allocate roughly:
- **Capital owners:** [% and description]
- **Consumers:** [% and description]
- **Adjacent workers:** [% and description]
- **Government/public:** [% and description]

## Foresight Stories

### Adapters
[1-2 specific examples of people/firms that saw it coming and pivoted. Names, dates, what they did.]

### False Movers
[1-2 examples of reasonable-seeming pivots that failed. What was the bad bet?]

### Deniers
[Examples of denial or wrong conventional wisdom. Specific quotes if available.]

### Survival Pattern
[One sentence: what did survivors have in common?]

## Unique Texture

The 2-5 most striking, specific data points or observations about this event's aftermath.
These should be things that make someone at a dinner party say "wait, really?"
Each should have a source.

1. [Data point] ([source])
2. [Data point] ([source])
...

## Sources

List all sources used, with enough detail to re-find them. Prefer:
- Academic works: Author, title, year
- Government data: Agency, dataset name, table/series number
- News/reports: Publication, title, date, URL if available

## Known Data Gaps

What you looked for but couldn't find, or found but don't trust:
- [Gap 1]
- [Gap 2]

## Confidence Assessment
- **Overall:** [high | medium | low]
- **Workforce numbers:** [high | medium | low] — [one-line justification]
- **Income data:** [high | medium | low] — [one-line justification]
- **Where-they-went:** [high | medium | low] — [one-line justification]
```

## Data Proxy Decisions by Category

Different events have fundamentally different data landscapes. Each category below specifies what proxy to use and why. The key constraint: each event's proxy must be internally consistent across its own time range.

### Post-1950 US Events (travel agents, typists, Kodak, video rental, photo labs, taxi, newspaper, elevator operators)
- **Workforce proxy:** BLS Occupational Employment Statistics (OES) or Current Population Survey (CPS). SOC codes provide consistent annual data.
- **Income proxy:** BLS OES median annual wage, inflation-adjusted via CPI-U.
- **Where-they-went proxy:** BLS industry employment data for successor sectors in same geography. CPS for occupation-switching data.
- **Confidence:** High for workforce and income. Medium for where-they-went.

### Post-1950 International Events (Newfoundland cod, Soviet workers)
- **Workforce proxy:** National statistical agencies (Statistics Canada, Rosstat) or World Bank/OECD compilations.
- **Income proxy:** National wage statistics, inflation-adjusted via national CPI or GDP deflator. For USSR, use Brainerd (2010) or comparable academic reconstructions of real wages.
- **Confidence:** Medium-high for workforce. Medium for income (currency instability in Russia).

### Pre-1950 US Events (whalers, freed slaves, child labor, Prohibition, ice harvesters, Dust Bowl)
- **Workforce proxy:** US Census decennial data (IPUMS for microdata). Historical Statistics of the United States: Millennial Edition for aggregate series.
- **Income proxy:** Census earnings data where available, supplemented by industry-specific wage studies. Historical CPI for adjustment. Mark confidence explicitly.
- **Confidence:** Medium for workforce (census is decennial). Low-medium for income.

### Pre-1950 UK Events (handloom weavers, domestic servants)
- **Workforce proxy:** UK Census returns (decennial, 1801–1911). Parliamentary Papers and Royal Commission reports for inter-censal estimates.
- **Income proxy:** Wage data from Parliamentary inquiries, Poor Law records, academic reconstructions (e.g., Clark, Allen). Adjusted via Bank of England historical CPI.
- **Confidence:** Medium for workforce. Low-medium for income (advocacy data, not surveys).

### Pre-1900 Non-Western Events (samurai, colonial administrators)
- **Workforce proxy:** Government records (Meiji-era population registers, colonial civil service rolls). Academic monographs are the primary source.
- **Income proxy:** Stipend/salary records where available. Often not convertible to a comparable metric — use qualitative assessment.
- **Confidence:** Low-medium for workforce. Low for income.

### Pre-1900 Environmental Events (Irish potato blight)
- **Workforce proxy:** Census data before and after (Irish Census 1841 vs. 1851). Emigration records.
- **Income proxy:** Near-impossible for subsistence farmers. Use population loss and emigration as severity proxy instead.
- **Confidence:** Medium for workforce/population. Unavailable for income.

## Known Data Gaps (Flagged in Advance)

These gaps were identified during exploration. Research agents should not waste time trying to fill them — mark them and move on.

1. **Individual-level tracking pre-1970:** No panel data. Use geographic inference (concurrent industry growth in same region).
2. **Income data for pre-1900 events:** Patchy at best, advocacy-driven at worst. Report what exists, flag confidence.
3. **Samurai income:** Rice stipends in feudal hierarchy. Convertible to rough monetary equivalent but not comparable to modern wages.
4. **Freed slaves income:** Sharecropping "income" is near-meaningless as a metric. Use land ownership, literacy, and employment rates as alternatives.
5. **Child labor income:** Children's wages are not comparable to adult displaced-worker income. Track child employment rates and school enrollment instead.
6. **Prohibition:** Many alcohol workers moved to illegal production. The "where-they-went" data has a huge unmeasurable shadow economy component.
7. **Soviet real wages:** Hyperinflation, currency redenomination, and barter economy make nominal wages meaningless for 1992–1995. Use purchasing power reconstructions.
8. **Colonial administrators:** Scattered across dozens of colonies with different record-keeping. Focus on 2-3 well-documented cases (India, Algeria, Congo).

## Rationale

### Why 27 events?
Exploration pass 2 recommended 25-30 events for ~8-10 per mechanism category. 27 gives exactly 9 per category — enough for visual clustering on the scatter plot without claiming statistical significance.

### Why interleaved ordering?
The orchestrator works tickets sequentially. If the pipeline stops at ticket 15, interleaving ensures we have 5 gradual, 5 tipping, 5 shock events — a balanced dataset at any stopping point. Grouping by mechanism would give us 9 gradual erosion events and 6 tipping points and 0 shocks if stopped at 15.

### Why one ticket per event?
Each event is one unit of research work: search for data, compile into the template, assess confidence. The template is detailed but a competent agent with web search can fill it in one session. If data is thin, the agent marks gaps rather than going on multi-session research expeditions.

### Why this format?
The result template is designed to be machine-parseable for the graph phase while remaining human-readable. Every field the meta-scatter needs (peak workforce, years to 75% decline, income recovery, mechanism) is in a fixed location. The narrative sections (foresight stories, unique texture) provide the per-event panel content.

### Platform shift as a key finding
Exploration pass 2's most important insight: AI displacement of software engineers resembles a platform shift (Kodak, Blockbuster, human computers), not a tool improvement (handlooms, travel agents). The event list includes 5 clear platform shifts (Kodak, video rental, human computers, encyclopedia sales, Linotype) plus 4 other tipping points. If these cluster together on the scatter — fast decline, moderate-to-poor recovery — that's the honest and scary answer to Jason's personal question.
