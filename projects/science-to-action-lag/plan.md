# Plan: Science-to-Action Lag

## Summary

Measure the time gap between scientific evidence establishing a hazard and binding regulation addressing it, across ~30 hazards spanning 120+ years. The graph shows each hazard as a horizontal bar from "first strong evidence" to "first binding regulation," sorted by lag duration, with visual encoding for hazard category, industry opposition, and in-progress cases.

The core question: is society getting faster at acting on science, or is it getting slower?

## Graph design

**Visualization type:** Horizontal bar/Gantt chart (not scatter plot — the timeline IS the data).

- **X-axis:** Calendar year (1890s–2026)
- **Y-axis:** Hazards, sorted by lag duration (longest at top)
- **Each hazard:** Horizontal bar from early-evidence-year to first-regulation-year
- **Inner marker** on each bar at the formal consensus year (shows how long it took science to formalize what scientists already knew)
- **Bar color** encodes hazard category (substance ban, exposure limit, behavioral mandate, international treaty, product withdrawal, dietary policy)
- **In-progress hazards** shown as arrows extending to present day
- **US regulation** shown as a secondary marker on each bar (the gap between first-OECD and US is itself interesting)

Secondary annotations: industry opposition strength, substitute availability. These explain the variation.

## Data format specification

Each research ticket produces a single markdown result file. The file must contain a structured YAML-style data block at the top (for machine parsing into the TypeScript data file) followed by narrative documentation of sources and judgment calls.

### Result file format

```markdown
# [Hazard Name] → [Harm]

## Data

- slug: kebab-case-identifier
- hazard: Short display name
- harm: What it causes (one phrase)
- category: One of: substance-ban | exposure-limit | behavioral-mandate | international-treaty | product-withdrawal | dietary-policy
- early_evidence_year: YYYY
- early_evidence_desc: What study/report established the link
- consensus_year: YYYY (or "null" if no formal consensus statement exists)
- consensus_desc: What body/report formalized consensus (or "N/A")
- first_regulation_year: YYYY (or "null" if no binding regulation yet)
- first_regulation_country: Country name
- first_regulation_desc: What law/regulation
- us_regulation_year: YYYY (or "null")
- us_regulation_desc: What US law/regulation (or "N/A")
- regulation_status: completed | in-progress | none
- industry_opposition: none | moderate | strong
- substitute_available: yes | no | partial
- harm_visibility: high | medium | low
- exposure_reduction_50_year: YYYY (or "null" if unknown/not applicable)
- lag_from_evidence: Number (first_regulation_year minus early_evidence_year, or "null")
- lag_from_consensus: Number (first_regulation_year minus consensus_year, or "null")

## Sources

[Numbered list of key sources with enough detail to verify — author, year, title/description]

## Judgment calls

[Document any subjective decisions: why this year was chosen for evidence vs. an earlier/later candidate, what was excluded and why, how "first binding regulation" was interpreted for this specific case]
```

### Field definitions

**early_evidence_year:** The year a credible scientific paper or government report first established the link between the hazard and the harm with evidence (not speculation, not anecdote). For chemicals, this is typically the first epidemiological study or controlled experiment. For behaviors, it's the first formal scientific study of the causal link.

**consensus_year:** The year a major scientific body, government advisory panel, or systematic review formally stated the link. Examples: Surgeon General report, NAS report, IARC classification, WHO formal recommendation, first meta-analysis in a top journal. This is LATER than early_evidence_year (or the same year in rare cases). If no formal consensus statement exists, use "null."

**first_regulation_year:** The year of the first binding law or regulation (not voluntary guideline, not labeling requirement, not advisory) in any OECD country that meaningfully restricts population exposure. "Meaningful" means the regulation actually reduces exposure, not just creates a reporting requirement. Workplace-only standards count ONLY if the hazard is primarily occupational.

**us_regulation_year:** The year of the first binding US federal regulation that meaningfully restricts exposure. State-level regulations don't count unless they became the de facto national standard. If the US has no binding federal regulation, use "null."

**category:** Determined by what the regulation looks like, not what the hazard is:
- `substance-ban`: A specific substance is banned or removed from products (lead paint, DDT, trans fats)
- `exposure-limit`: An enforceable exposure threshold is set (benzene PEL, PM2.5 standard, arsenic MCL)
- `behavioral-mandate`: Law mandates or prohibits individual behavior (seat belt laws, drunk driving BAC limits)
- `international-treaty`: Requires multi-country agreement (Montreal Protocol, Paris Agreement)
- `product-withdrawal`: Specific product removed from market (thalidomide, DES)
- `dietary-policy`: Tax, reformulation requirement, or marketing restriction on food/beverage (sugar tax, trans fat reformulation)

**industry_opposition:**
- `none`: No well-funded organized opposition (thalidomide, seat belts)
- `moderate`: Some industry pushback but not a coordinated multi-decade campaign (trans fats, BPA)
- `strong`: Well-funded, organized, sustained campaign to delay regulation (tobacco, lead, fossil fuels, PFAS)

**substitute_available:** At the time of regulation, was there a commercially viable substitute?
- `yes`: Drop-in or near-drop-in replacement existed (CFCs → HFCs, leaded gas → unleaded)
- `partial`: Substitutes existed but with significant cost or performance tradeoffs
- `no`: No viable substitute; regulation required systemic change (fossil fuels, asbestos in some applications)

**harm_visibility:**
- `high`: Harm is visible, immediate, and directly attributable (thalidomide birth defects, acute poisoning)
- `medium`: Harm is delayed but eventually visible (cancer from smoking, ecosystem damage from DDT)
- `low`: Harm is statistical, invisible, or diffuse (IQ points from lead, endocrine disruption from BPA, climate change)

## Data proxy strategy

Different hazard categories have fundamentally different data landscapes. Each category uses a proxy appropriate to its regulatory structure:

| Category | Primary regulation proxy | Fallback | Notes |
|----------|------------------------|----------|-------|
| Substance ban | Year substance banned in first OECD country | Year of first enforceable restriction (even partial) | Clean binary — either banned or not |
| Exposure limit | Year first enforceable exposure limit set | Year of first occupational guideline (if no general population limit exists) | Limits tighten over time; use the FIRST meaningful limit |
| Behavioral mandate | Year first OECD country enacts binding law | Year of first state/provincial law if it became widespread | Behavioral laws often start subnational |
| International treaty | Year treaty signed | Year treaty enters into force | Signing vs. enforcement can differ by years |
| Product withdrawal | Year product removed from market | Year sales suspended pending review | Usually fast — product-specific, not industry-wide |
| Dietary policy | Year first binding tax or reformulation mandate | Year of first enforceable labeling requirement | Dietary regulation is the weakest category — often stops at labeling |

## Data source hierarchy

Research agents should search in this order:

1. **WHO / IARC / EPA / CDC historical databases** — Often have formal timelines of regulatory milestones for well-known hazards
2. **Legislative databases** — US Congress (congress.gov), EU (EUR-Lex), national archives for regulation dates
3. **Academic review articles** — Search PubMed/Google Scholar for "[hazard] regulation history" or "[hazard] regulatory timeline" — review articles often compile the full chronology
4. **Books on regulatory history** — David Michaels "Doubt Is Their Product," Oreskes & Conway "Merchants of Doubt," Gerald Markowitz & David Rosner "Deceit and Denial" — these have detailed timelines for major hazards
5. **Wikipedia** — Often has well-sourced regulatory history sections; verify key dates against primary sources
6. **Industry and advocacy organization histories** — EPA historical documents, OSHA regulatory history, industry trade association records

## Known data gaps

- **Pre-1900 hazards** (benzene, lead, arsenic): Evidence dates are fuzzy. Early case reports blend into systematic study over decades. Use the first epidemiological study or controlled experiment, not anecdotal case reports.
- **In-progress hazards** (PFAS, microplastics, ultra-processed food): No regulation endpoint yet. Record current regulatory status and note as "in-progress."
- **Exposure reduction data**: The secondary metric (year of 50% exposure reduction) is only available for ~8-10 hazards where population-level biomonitoring or usage data exists (blood lead levels, smoking rates, CFC emissions, etc.). Most hazards won't have this. Mark as "null" when unavailable.
- **Non-OECD early regulators**: Some hazards may have been regulated first by non-OECD countries. Prioritize OECD for consistency, but note non-OECD action in the judgment calls section if relevant.

## Target TypeScript type

```typescript
export type HazardCategory =
  | 'substance-ban'
  | 'exposure-limit'
  | 'behavioral-mandate'
  | 'international-treaty'
  | 'product-withdrawal'
  | 'dietary-policy'

export type OppositionLevel = 'none' | 'moderate' | 'strong'
export type HarmVisibility = 'high' | 'medium' | 'low'
export type SubstituteAvailability = 'yes' | 'no' | 'partial'
export type RegulationStatus = 'completed' | 'in-progress' | 'none'

export interface ScienceToActionDataPoint {
  slug: string
  hazard: string
  harm: string
  category: HazardCategory
  earlyEvidenceYear: number
  earlyEvidenceDesc: string
  consensusYear: number | null
  consensusDesc: string
  firstRegulationYear: number | null
  firstRegulationCountry: string
  firstRegulationDesc: string
  usRegulationYear: number | null
  usRegulationDesc: string
  regulationStatus: RegulationStatus
  industryOpposition: OppositionLevel
  substituteAvailable: SubstituteAvailability
  harmVisibility: HarmVisibility
  exposureReduction50Year: number | null
  lagFromEvidence: number | null
  lagFromConsensus: number | null
  notes: string
  sources: string[]
}
```

## Hazard list and rationale

32 hazards organized into 6 categories. This covers the major documented cases of science-to-regulation lag across chemical bans, exposure standards, behavioral mandates, international treaties, product withdrawals, and dietary policy. It includes 3 in-progress cases and 1 false-positive case for completeness.

### Block 1: Substance bans (8 tickets)

These are the cleanest cases — a specific substance is banned from products. The regulatory endpoint is binary (banned or not).

- **001 Lead paint** — Well-documented, long lag (~50 years), strong industry opposition. US banned 1978; many countries earlier.
- **002 Leaded gasoline** — Separate regulatory story from lead paint. Industry (Ethyl Corp) fought for decades. Phase-out 1970s-2020s depending on country.
- **003 Asbestos** — Extremely long lag. UK regulated 1931, banned 1999. US still has no comprehensive ban as of 2026. Messy endpoint.
- **004 DDT** — Rachel Carson's Silent Spring (1962) is the iconic consensus moment. US ban 1972. Relatively fast for its era.
- **005 Trans fats** — Modern case with clean dates. Denmark 2003, US 2018. Good contrast between fast and slow regulators.
- **006 PCBs** — Manufactured by Monsanto. Banned in US 1979, widely regulated globally by 1980s. Environmental persistence makes this ongoing.
- **007 Mercury (consumer products)** — Multiple exposure routes. Focus on methylmercury in food / mercury in consumer products rather than occupational.
- **008 BPA** — Endocrine disruptor. France banned in food packaging 2015. US has no federal ban. Active regulatory divergence between countries.

### Block 2: Exposure limits (7 tickets)

Enforceable concentration thresholds. The regulatory endpoint is the first binding limit, not subsequent tightening.

- **009 Benzene** — One of the oldest documented occupational carcinogens (1890s). OSHA standard 1971, tightened 1987. Very long lag.
- **010 Particulate matter (PM2.5)** — US Clean Air Act 1970 addressed particulates generally; PM2.5-specific standard not until 1997. Science keeps showing harm at lower levels.
- **011 Radon** — Lung cancer link established mid-20th century. EPA set action level in 1988. Regulation is advisory/guideline-based in most countries.
- **012 Vinyl chloride** — Liver cancer link established early 1970s. OSHA emergency standard 1974 — unusually fast response. Good contrast case.
- **013 Formaldehyde** — IARC classified as carcinogenic 2004. Regulated as occupational hazard earlier. Consumer product regulation patchy.
- **014 Arsenic in drinking water** — Toxicity known since antiquity, but enforceable drinking water standards are modern. US MCL tightened from 50 ppb to 10 ppb in 2001.
- **015 Dioxins (TCDD)** — Agent Orange contaminant. Science emerged 1970s. Regulation fragmented across environmental laws. Stockholm Convention 2001.

### Block 3: Product withdrawals (3 tickets)

Specific products pulled from market. Usually the fastest regulatory response because the target is narrow.

- **016 Thalidomide** — The fastest case. Evidence to withdrawal: weeks. The baseline for "how fast CAN society act?"
- **017 DES (diethylstilbestrol)** — Prescribed to pregnant women 1940s-1970s. Cancer in daughters discovered 1971. FDA warning 1971. Fast once evidence emerged, but decades of exposure first.
- **018 Vioxx (rofecoxib)** — Cardiovascular risk. Merck withdrew 2004 after internal data showed risk. Modern pharma case — fast withdrawal, but questions about how long the company knew.

### Block 4: Behavioral mandates (4 tickets)

Laws requiring or prohibiting individual behavior. Often start subnational and take decades to become universal.

- **019 Tobacco (smoking)** — The canonical case. Doll & Hill 1950. Surgeon General 1964. Ad bans, health warnings, indoor bans rolled out over 50+ years. The longest, most-studied lag.
- **020 Secondhand smoke** — Distinct from direct smoking. Consensus ~1986 (Surgeon General report). Indoor smoking bans 1990s-2010s. Separate regulatory arc.
- **021 Drunk driving** — Tricky case: NJ banned it in 1906 before formal science. AMA study 1938. 0.08 BAC standard 1990s-2000s. Start clock from formal science.
- **022 Seat belts** — Engineering evidence 1950s. Australia first mandate 1970. US federal mandate 1968 (vehicles) / state laws 1984+ (usage). Fast once political will formed.

### Block 5: International treaties (4 tickets)

Require multi-country coordination. Structurally slower but measuring a different kind of political challenge.

- **023 CFCs / ozone depletion** — Molina & Rowland 1974. Montreal Protocol 1987. One of the great success stories. DuPont had substitutes ready.
- **024 CO2 / climate change** — IPCC First Assessment 1990. Kyoto 1997 (weak). Paris 2015 (broader but non-binding targets). The most politically complex case.
- **025 Acid rain (SO2)** — Science established 1960s-70s. US Clean Air Act amendments 1990 (cap-and-trade). Cross-border cooperation in Europe (CLRTAP 1979). Largely solved.
- **026 Neonicotinoids / pollinators** — Science emerged 2000s. EU partial ban 2013, full outdoor ban 2018. US has no federal ban. Active regulatory divergence.

### Block 6: Dietary/lifestyle policy (3 tickets)

The weakest regulatory response category. Often stops at labeling or voluntary guidelines rather than binding restrictions.

- **027 Sugar / metabolic disease** — WHO recommendation 2015. UK sugar levy 2018. No US federal action. Industry opposition mirrors tobacco playbook (Sugar Research Foundation).
- **028 Ultra-processed food** — Monteiro's NOVA classification 2009. Growing consensus 2019+. Minimal regulation anywhere. In-progress case.
- **029 UV / tanning beds** — Skin cancer link well-established. IARC classified tanning beds as carcinogenic 2009. Some countries ban minors' access. Weak regulation overall.

### Block 7: Special cases (3 tickets)

Cases that test the edges of the framework.

- **030 PFAS / forever chemicals** — C8 Science Panel 2012. Regulation emerging slowly (EU restriction proposal 2023, some US state bans). In-progress. Strong industry opposition.
- **031 Chlorpyrifos** — Neurodevelopmental toxicity in children. EPA proposed ban 2015, reversed 2017, reinstated 2021, court-ordered ban 2022. Modern case showing regulatory whiplash.
- **032 Saccharin (false positive)** — Rat studies suggested cancer 1970s. Warning labels 1977. Science retracted — labels removed 2000. The graph's control case: what happens when the science was wrong?

## Ticket overview

32 tickets, each producing one result file. Every ticket is independent — no ticket depends on another's output. Expected completion: 32 cron ticks (~1 day at 45-minute intervals).

Each ticket contains:
- The specific hazard and harm to research
- What dates to find (early evidence, consensus, first regulation, US regulation)
- Where to look first (source hierarchy tailored to that hazard)
- What "good data" looks like for that specific case
- Known pitfalls and judgment calls to watch for
