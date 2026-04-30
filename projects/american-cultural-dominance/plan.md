# American Cultural Dominance — Research Plan

## The y-axis: American Cultural Penetration (0-100%)

Every ticket must produce a **normalized 0-100 penetration score** — a percentage that answers "how much of [this domain] has America captured?" The scores are:

- **0%** — America is invisible in this domain. A random person in a random country has never encountered anything American through this channel.
- **100%** — America completely owns this domain. Total dominance — every film is Hollywood, every song is English, every phone runs American software, every central bank holds dollars.

The composite graph averages all active sub-scores for each year. In 1860 only 2 metrics have data, so the composite averages 2. By 2020 all 28 contribute. The line gets more robust over time, which is honest — you're more certain about recent Americanization because you can measure it more ways.

### How to normalize each metric

Every metric can be reframed as a percentage of something. The denominator varies by ticket, but must be defined explicitly and held consistent across the full time range.

| Category | Example metric | 0% anchor | 100% anchor |
|----------|---------------|-----------|-------------|
| Language | English loanwords in Japanese | 0% of new dictionary entries are English-origin | 100% of new dictionary entries are English-origin |
| Film | Hollywood market share in Europe | 0% of box office is US-produced films | 100% of box office is US-produced films |
| Music | English-language chart share | 0% of top chart positions are English-language | 100% of top chart positions are English-language |
| Brands | Coca-Cola global presence | Present in 0% of world's nations | Present in 100% of world's nations |
| Economic | Dollar reserve share | 0% of global reserves are USD | 100% of global reserves are USD |
| Military | US bases abroad | 0% of world's nations host US military | 100% of world's nations host US military |
| Defensive | Cultural protection laws | 0% of top 50 economies have enacted protection | 100% of top 50 economies have enacted protection |

Some metrics are already natural percentages (box office share, reserve currency share, chart positions). Others need a denominator defined — the ticket specifies what it is, and the researcher uses it consistently.

### Graph structure

**Primary:** One composite line — "American Cultural Penetration Index" — that goes up and to the right.

**Secondary:** Category bands (language, film, music, brands, economic, institutional, defensive) visible as shaded regions or toggleable lines underneath the composite.

**Detail:** Each data point is backed by the research result from the corresponding ticket. Hover/click reveals the sub-scores and the evidence.

## Data format

Each result file produces a time series of normalized penetration scores (0-100) for one metric of American cultural influence.

### Result file template

```markdown
# [Metric Name]

## Summary
[2-3 sentences: what this metric shows, the overall trend, key inflection points]

## Penetration Score Definition
**Denominator:** [What does 100% mean for this metric? Be specific.]
**0% anchor:** [What would the world look like with zero American influence in this domain?]
**100% anchor:** [What would total American dominance look like in this domain?]

## Data
| Year | Penetration (%) | Raw Value | Raw Denominator | Confidence | Note |
|------|----------------|-----------|-----------------|------------|------|
| ...  | 0-100          | ...       | ...             | low/med/high | ... |

## Methodology
[How was the penetration score computed? What proxy was used? Why this denominator?
Consistency of methodology across the full time range matters more than single-year precision.]

## Sources
[Full citations with URLs where available]

## Notes
[Caveats, data gaps, surprising findings, inflection point explanations]
```

### TypeScript data structure (target)

```typescript
type CulturalMetric = {
  id: string;           // ticket slug, e.g. "english-loanwords-japanese"
  name: string;         // human-readable metric name
  category: 'language' | 'film' | 'music' | 'tv' | 'brands' | 'economic' | 'education' | 'military' | 'media' | 'defensive';
  denominator: string;  // what 100% means, e.g. "% of global box office"
  startYear: number;    // earliest data point
  description: string;  // one-line description for legend/tooltip
  dataPoints: {
    year: number;
    penetration: number;  // 0-100 normalized score
    rawValue?: number;    // original measurement before normalization
    rawDenominator?: number;
    confidence: 'low' | 'medium' | 'high';
    note?: string;
  }[];
};
```

## Methodology principles

- **Every ticket produces a 0-100 penetration score.** Define the denominator explicitly. Hold it consistent across the full time range.
- **Longest reach over highest precision.** A rougher estimate from 1850 is more valuable than a precise one starting in 1990. We want the arc.
- **Consistency within each metric.** Same measurement methodology across the full time range. Don't switch proxies mid-series.
- **Decade intervals preferred.** Use finer granularity (5-year) only where interesting inflection points exist.
- **Include both raw and normalized values.** The raw data shows what was actually measured. The penetration score is what gets graphed.
- **Flag defensive responses.** Countries passing laws to resist Americanization (quotas, language laws, tech bans) are data points themselves — they mark where the pressure was felt most.

## Ticket list rationale

28 tickets organized by category. Each ticket is one metric researched across its full available time range. Categories:

- **Language (001-006):** Loanwords in 4 languages + ESL rates + lingua franca shift. Loanwords give us the deepest historical reach (1800s).
- **Film (007-010):** Hollywood market share globally and by region + defensive legislation. Film data starts in the 1910s-1920s.
- **Music (011-013):** Chart dominance + genre adoption + quota laws. Chart data from 1960s, genre influence trackable from 1920s.
- **Television & Streaming (014-015):** TV exports and streaming content origin. TV from 1950s, streaming from 2010s.
- **Consumer Brands & Lifestyle (016-019):** Coca-Cola, McDonald's, fashion, holidays. Brand data from 1900s.
- **Economic & Financial (020-022):** Dollar reserves, trade share, tech platforms. Dollar data from 1900s, tech from 2000s.
- **Education & Institutions (023-024):** Foreign students + missionary/educational presence. Institutional data from 1820s.
- **Military & Media (025-026):** Bases abroad + news wire dominance. Both from early-mid 1900s.
- **Defensive Responses (027-028):** Cultural legislation timeline + local competitor emergence. Meta-metrics that measure resistance as evidence of pressure.
