/**
 * The richest man in the world, sampled at logarithmically-spaced dates
 * (0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 years before 2026), normalized
 * two honest ways so figures separated by a thousand years can be compared:
 *
 *   1. POUNDS OF GOLD — net worth divided by the price of gold that year. Strips
 *      out currency, inflation, and exchange rates: a physical pile of metal.
 *   2. AVERAGE INCOMES CONTROLLED — net worth divided by the world's average
 *      annual income that year (world GDP per capita, the mean). "How many ordinary
 *      people's entire yearly income does this one fortune equal?"
 *
 * Both are pure ratios computed within a single year and currency, so they are
 * unit-clean across eras even though the underlying figures are quoted in 2026
 * dollars, 1962 dollars, 1770 pounds sterling, or 1514 gulden.
 *
 * HONESTY NOTES (the point of a one-off):
 *  - Deep-past points (1002, 1514, 1770) are order-of-magnitude estimates. No
 *    audited balance sheets survive. Wide error bands, low confidence.
 *  - Modern net worths are mark-to-market and swing ±40% within a single year.
 *    The error bands show the realistic intra-year range, not measurement noise.
 *  - "Richest in the world" is genuinely contested in several years (flagged).
 *    For the modern era we use one consistent convention — the world's #1 on the
 *    Forbes annual World's Billionaires list — except 2026, the live anchor year.
 *  - Two points are SOVEREIGN, not private: Basil II's imperial treasury (1002)
 *    and the Sultan of Brunei's oil-state fortune (1994) blend personal and state
 *    wealth. They are marked separately and should not be read as private fortunes.
 *  - "Average income" is the MEAN (GDP per capita), not the median. That's the
 *    right denominator for "how many average incomes" but it is far above what a
 *    typical (median) person earns, especially in unequal eras.
 *
 * Every figure was researched and then independently re-verified by a second
 * agent. Sources are listed per point below and in the page's Sources section.
 */

export type WealthKind = 'private' | 'sovereign'
export type Confidence = 'high' | 'medium' | 'low' | 'speculative'

export type SourceRef = { claim: string; source: string }

/** Raw, per-year inputs. All three money figures in one year are in the SAME currency. */
type RawPoint = {
  year: number
  yearsBack: number
  person: string
  kind: WealthKind
  contested: boolean
  confidence: Confidence
  /** The currency all three money figures below are expressed in. */
  currency: string
  /** Best-estimate net worth, in `currency`. */
  netWorth: number
  netWorthLow: number
  netWorthHigh: number
  /** Human-readable net-worth label for tables/tooltips. */
  netWorthLabel: string
  /** Price of one troy ounce of gold that year, in `currency`. */
  goldPricePerTroyOz: number
  goldPriceLabel: string
  /** World average annual income per person (≈ world GDP per capita), in `currency`. */
  globalAvgAnnualIncome: number
  incomeLabel: string
  /** Short note shown in the data table / tooltip. */
  blurb: string
  sources: SourceRef[]
}

/** Derived, plot-ready record: the two cross-era ratios plus their error bands. */
export type RichestPoint = RawPoint & {
  /** net worth ÷ average annual income */
  incomesControlled: number
  incomesControlledLow: number
  incomesControlledHigh: number
  /** (net worth ÷ gold price) ÷ 14.583 troy oz per avoirdupois pound */
  poundsOfGold: number
  poundsOfGoldLow: number
  poundsOfGoldHigh: number
}

/** 1 avoirdupois pound = 14.583 troy ounces. */
export const TROY_OZ_PER_POUND = 14.583

const RAW: RawPoint[] = [
  {
    year: 1002,
    yearsBack: 1024,
    person: 'Basil II',
    kind: 'sovereign',
    contested: true,
    confidence: 'speculative',
    currency: 'modern gold-equivalent USD',
    netWorth: 4_100_000_000,
    netWorthLow: 600_000_000,
    netWorthHigh: 9_000_000_000,
    netWorthLabel: '≈ $4.1 billion (gold-equivalent)',
    goldPricePerTroyOz: 2_000,
    goldPriceLabel: '$2,000 / oz (modern anchor)',
    globalAvgAnnualIncome: 1_100,
    incomeLabel: '≈ $1,100 (subsistence world)',
    blurb:
      'Byzantine Emperor. The best-DOCUMENTED great fortune of the era — ~14.4M gold nomismata (~64 tonnes of gold) in the imperial treasury by 1025. But this is STATE wealth, not a private net worth, and the title is contested with Mahmud of Ghazni (whose India plunder peaked in the 1020s) and the Song emperor. Order-of-magnitude only.',
    sources: [
      { claim: 'Basil II left ~14.4M nomismata (~200,000 Roman pounds, ~64 t of gold) in the treasury at his death (1025).', source: "Wikipedia, 'Basil II'; Britannica; CoinWeek 'The Coinage of Basil II'" },
      { claim: 'World GDP per capita c.1000 AD ≈ $450 (1990 international $).', source: 'Maddison Project Database / Our World in Data' },
      { claim: 'Strongest private-treasure alternative: Mahmud of Ghazni, whose hoard peaked 1018–1026, after a 1002 snapshot.', source: "Wikipedia, 'Mahmud of Ghazni', 'Sack of Somnath'" },
    ],
  },
  {
    year: 1514,
    yearsBack: 512,
    person: 'Jakob Fugger',
    kind: 'private',
    contested: true,
    confidence: 'low',
    currency: '1514 Rhenish gulden',
    netWorth: 300_000,
    netWorthLow: 250_000,
    netWorthHigh: 450_000,
    netWorthLabel: '≈ 300,000 gulden',
    goldPricePerTroyOz: 12.44,
    goldPriceLabel: '12.44 gulden / oz (2.50 g fine per gulden)',
    globalAvgAnnualIncome: 9,
    incomeLabel: '≈ 9 gulden (subsistence world)',
    blurb:
      'Augsburg banker–merchant, "the Rich" — consensus pick for richest PRIVATE individual of the early 1500s, made Imperial Count in 1514. His fortune was ~200,000 gulden in 1511 and >2,000,000 by his death in 1525; the 1514 figure is interpolated and back-loaded growth came later. If crown wealth counts, the Habsburg, Ottoman, or Ming sovereigns exceeded him.',
    sources: [
      { claim: 'Fugger fortune ~200,000 gulden (1511); bequest 2,032,652 gulden at death (1525); made Imperial Count 1514.', source: "Greg Steinmetz, 'The Richest Man Who Ever Lived' (2015); Wikipedia 'Jakob Fugger'" },
      { claim: 'Rhenish gold gulden held ~2.50 g fine gold in the early 1500s → 12.44 gulden per troy ounce.', source: "Wikipedia, 'Rhenish gulden'; Reichsmünzordnung standard" },
      { claim: 'World GDP per capita 1500 ≈ $566 (1990 international $).', source: "Angus Maddison, 'Contours of the World Economy 1-2030 AD'" },
    ],
  },
  {
    year: 1770,
    yearsBack: 256,
    person: 'Robert Clive',
    kind: 'private',
    contested: true,
    confidence: 'low',
    currency: '1770 pounds sterling',
    netWorth: 500_000,
    netWorthLow: 350_000,
    netWorthHigh: 600_000,
    netWorthLabel: '≈ £500,000',
    goldPricePerTroyOz: 3.8938,
    goldPriceLabel: '£3 17s 10½d / oz (Newton mint price)',
    globalAvgAnnualIncome: 4,
    incomeLabel: '≈ £4 (subsistence world)',
    blurb:
      'Clive of India — the best-DOCUMENTED large private fortune of the 1760s–70s (~£500,000 at his death in 1774). But probably NOT actually #1: the self-made Sir Lawrence Dundas left ~£900,000, and the Bengal Jagat Seth bankers were vastly richer before their 1760s collapse. 1770 has no documented "world\'s richest" — Clive is a sourced placeholder, not a confident answer.',
    sources: [
      { claim: 'Clive left India in 1767 with £401,102; total wealth ~£500,000 at his death (1774).', source: "Wikipedia, 'Robert Clive'; National Army Museum" },
      { claim: 'Self-made Sir Lawrence Dundas left ~£900,000 (d.1781), likely richer than Clive.', source: "Wikipedia, 'Sir Lawrence Dundas'; History of Parliament" },
      { claim: 'British mint price of gold £3 17s 10½d (£3.894) per standard oz, fixed by Newton (1717).', source: 'World Gold Council mint indenture (1717); Econlib' },
    ],
  },
  {
    year: 1898,
    yearsBack: 128,
    person: 'John D. Rockefeller',
    kind: 'private',
    contested: false,
    confidence: 'medium',
    currency: '1898 USD',
    netWorth: 180_000_000,
    netWorthLow: 130_000_000,
    netWorthHigh: 200_000_000,
    netWorthLabel: '$180 million',
    goldPricePerTroyOz: 20.67,
    goldPriceLabel: '$20.67 / oz (gold standard, 1834–1933)',
    globalAvgAnnualIncome: 110,
    incomeLabel: '≈ $110',
    blurb:
      'Standard Oil controlled ~84% of US refining; Rockefeller is the consensus richest man in the world by the late 1890s. Carnegie only overtook him after the 1901 sale of Carnegie Steel. The 1898 figure is reconstructed (no clean audit until ~1902, when he hit ~$200M); his peak was ~$900M in 1913.',
    sources: [
      { claim: '1902 audit put Rockefeller at ~$200M; richest man by end of the 1890s; peak ~$900M (1913).', source: 'Britannica Money; Library of Congress; Guinness World Records' },
      { claim: 'US gold price fixed at $20.67/oz, 1834–1933.', source: "National Mining Association; Wikipedia 'Gold Standard Act'" },
      { claim: 'World GDP per capita 1900 ≈ $3,100 (2011 int$), deflated to ~$110 nominal 1898 USD.', source: 'Maddison Project / OWID; US CPI' },
    ],
  },
  {
    year: 1962,
    yearsBack: 64,
    person: 'J. Paul Getty',
    kind: 'private',
    contested: false,
    confidence: 'medium',
    currency: '1962 USD',
    netWorth: 1_000_000_000,
    netWorthLow: 700_000_000,
    netWorthHigh: 1_200_000_000,
    netWorthLabel: '≈ $1.0 billion',
    goldPricePerTroyOz: 35,
    goldPriceLabel: '$35 / oz (Bretton Woods, 1934–1971)',
    globalAvgAnnualIncome: 495.58,
    incomeLabel: '$495.58 (World Bank)',
    blurb:
      'Getty Oil and the Saudi–Kuwaiti Neutral Zone concession made him the world\'s wealthiest private citizen (Guinness 1966, ~$1.2B; Fortune 1957). The 1962 figure is interpolated between those anchors. Howard Hughes is the real rival, but his empire was illiquid and the documentary consensus ranks Getty first.',
    sources: [
      { claim: 'Guinness 1966 named Getty the world\'s wealthiest private citizen (~$1.2B); Fortune (1957) wealthiest American.', source: "Wikipedia, 'J. Paul Getty'; Britannica Money" },
      { claim: 'Gold fixed at $35/oz under Bretton Woods (1934–1971); defended by the London Gold Pool in 1962.', source: "Wikipedia, 'London Gold Pool'; World Gold Council" },
      { claim: 'World GDP per capita 1962 = $495.58 (current US$).', source: 'World Bank API, NY.GDP.PCAP.CD, World/1W' },
    ],
  },
  {
    year: 1994,
    yearsBack: 32,
    person: 'Sultan Hassanal Bolkiah of Brunei',
    kind: 'sovereign',
    contested: true,
    confidence: 'low',
    currency: '1994 USD',
    netWorth: 37_000_000_000,
    netWorthLow: 25_000_000_000,
    netWorthHigh: 40_000_000_000,
    netWorthLabel: '≈ $37 billion',
    goldPricePerTroyOz: 384,
    goldPriceLabel: '$384 / oz (1994 average)',
    globalAvgAnnualIncome: 4_948,
    incomeLabel: '$4,948 (World Bank)',
    blurb:
      'Widely called the world\'s richest man from the late 1980s until Bill Gates overtook him ~1998 (Forbes excluded him as a head of state). But his "wealth" blends personal fortune with Brunei\'s sovereign oil assets — not a clean private net worth. The richest unambiguously PRIVATE individual in 1994 was Bill Gates (~$9.35B), which would shrink these bars ~4×.',
    sources: [
      { claim: 'Sultan of Brunei regarded as world\'s richest man (~$37–40B) until displaced by Gates ~1998.', source: 'Facts and Details; lovemoney; South China Morning Post' },
      { claim: 'Richest private individual in 1994 was Bill Gates at $9.35B (newly #1, displacing Buffett).', source: 'Forbes 400; Celebrity Net Worth' },
      { claim: '1994 average gold price ≈ $384/oz; world GDP per capita $4,948 (current US$).', source: 'National Mining Association; World Bank NY.GDP.PCAP.CD' },
    ],
  },
  {
    year: 2010,
    yearsBack: 16,
    person: 'Carlos Slim Helú',
    kind: 'private',
    contested: false,
    confidence: 'high',
    currency: '2010 USD',
    netWorth: 53_500_000_000,
    netWorthLow: 53_000_000_000,
    netWorthHigh: 60_500_000_000,
    netWorthLabel: '$53.5 billion',
    goldPricePerTroyOz: 1_227.31,
    goldPriceLabel: '$1,227 / oz (2010 average)',
    globalAvgAnnualIncome: 9_542.73,
    incomeLabel: '$9,543 (World Bank)',
    blurb:
      'Mexican telecom magnate (Telmex, América Móvil). Forbes #1 in March 2010 at $53.5B, edging Bill Gates ($53.0B) — the first non-American to top the list since 1994. Held #1 through 2013.',
    sources: [
      { claim: 'Carlos Slim #1 on Forbes (March 2010) at $53.5B, ahead of Gates ($53.0B) and Buffett ($47.0B).', source: "Forbes 2010; CNN; Wikipedia 'The World's Billionaires 2010'" },
      { claim: '2010 average gold price ≈ $1,227/oz; world GDP per capita $9,542.73 (current US$).', source: 'SD Bullion / StatMuse; World Bank NY.GDP.PCAP.CD' },
    ],
  },
  {
    year: 2018,
    yearsBack: 8,
    person: 'Jeff Bezos',
    kind: 'private',
    contested: false,
    confidence: 'high',
    currency: '2018 USD',
    netWorth: 112_000_000_000,
    netWorthLow: 112_000_000_000,
    netWorthHigh: 160_000_000_000,
    netWorthLabel: '$112 billion',
    goldPricePerTroyOz: 1_269.89,
    goldPriceLabel: '$1,270 / oz (2018 average)',
    globalAvgAnnualIncome: 11_400,
    incomeLabel: '≈ $11,400 (World Bank)',
    blurb:
      'Amazon founder — first centibillionaire on the Forbes list (March 2018, $112B), unseating Gates. Crossed $150B on the Bloomberg index in July 2018 (the error band\'s high end), then designated the "wealthiest person in modern history."',
    sources: [
      { claim: 'Bezos topped Forbes 2018 at $112B (first centibillionaire), then hit ~$150B on Bloomberg in July 2018.', source: 'Forbes 2018; CNBC; Bloomberg; Fortune' },
      { claim: '2018 average gold price $1,269.89/oz; world GDP per capita ≈ $11,400 (current US$).', source: 'BullionByPost; World Bank NY.GDP.PCAP.CD' },
    ],
  },
  {
    year: 2022,
    yearsBack: 4,
    person: 'Elon Musk',
    kind: 'private',
    contested: true,
    confidence: 'high',
    currency: '2022 USD',
    netWorth: 219_000_000_000,
    netWorthLow: 137_000_000_000,
    netWorthHigh: 270_000_000_000,
    netWorthLabel: '$219 billion',
    goldPricePerTroyOz: 1_802.39,
    goldPriceLabel: '$1,802 / oz (2022 average)',
    globalAvgAnnualIncome: 12_800,
    incomeLabel: '$12,800 (World Bank)',
    blurb:
      'Forbes #1 in April 2022 at $219B (Tesla + SpaceX). Wildly volatile that year: from a ~$340B peak (Nov 2021) down to ~$137B by late December as Tesla fell ~65% — the largest one-year wealth loss in history. Bernard Arnault overtook him in the final weeks, so the year is contested.',
    sources: [
      { claim: 'Musk #1 on Forbes 2022 at $219B; fell to a ~$137B low by Dec; Arnault overtook him in Dec 2022.', source: "Wikipedia 'The World's Billionaires'; Bloomberg; CNN Business" },
      { claim: '2022 average gold price $1,802/oz; world GDP per capita $12,798 (current US$).', source: 'World Gold Council; World Bank NY.GDP.PCAP.CD' },
    ],
  },
  {
    year: 2024,
    yearsBack: 2,
    person: 'Bernard Arnault',
    kind: 'private',
    contested: true,
    confidence: 'high',
    currency: '2024 USD',
    netWorth: 233_000_000_000,
    netWorthLow: 178_000_000_000,
    netWorthHigh: 233_000_000_000,
    netWorthLabel: '$233 billion',
    goldPricePerTroyOz: 2_388,
    goldPriceLabel: '$2,388 / oz (2024 average)',
    globalAvgAnnualIncome: 13_664,
    incomeLabel: '$13,664 (World Bank)',
    blurb:
      'LVMH chairman — #1 on the Forbes annual list (April 2024) at $233B, with Musk #2 at $195B. We use the Forbes-list convention here, so 2024 belongs to Arnault. But by YEAR-END the title flipped hard to Musk, who became the first person ever to cross $400B (Dec 11, 2024) as Tesla rallied post-election.',
    sources: [
      { claim: 'Forbes 2024 #1 was Bernard Arnault & family at $233B; Musk #2 ($195B), Bezos #3 ($195B).', source: 'Forbes 2024; CBS News; Yahoo Finance' },
      { claim: 'Musk became the first person to cross $400B on Dec 11, 2024, ending the year #1.', source: 'Bloomberg; CNN Business; The National' },
      { claim: '2024 average gold price ≈ $2,388/oz; world GDP per capita $13,664 (current US$).', source: 'Statista; World Bank NY.GDP.PCAP.CD' },
    ],
  },
  {
    year: 2025,
    yearsBack: 1,
    person: 'Elon Musk',
    kind: 'private',
    contested: false,
    confidence: 'high',
    currency: '2025 USD',
    netWorth: 342_000_000_000,
    netWorthLow: 300_000_000_000,
    netWorthHigh: 726_000_000_000,
    netWorthLabel: '$342 billion',
    goldPricePerTroyOz: 3_431,
    goldPriceLabel: '$3,431 / oz (2025 average, record)',
    globalAvgAnnualIncome: 14_554,
    incomeLabel: '$14,554 (IMF)',
    blurb:
      'Forbes #1 (March 2025) at $342B, a ~$126B lead over #2. The point uses that annual-list snapshot, but 2025 was extreme: he dipped to ~$300B in March, then became the first person ever worth $500B (Oct 2025) and ended the year ~$647B (Bloomberg). The huge error band ($300B–$726B) is the real story.',
    sources: [
      { claim: 'Musk #1 on Forbes 2025 at $342B; first person worth $500B (Oct 2, 2025); ~$647B year-end (Bloomberg).', source: "Wikipedia 'The World's Billionaires' / 'Wealth of Elon Musk'; Bloomberg" },
      { claim: '2025 record average gold price $3,431/oz (+44% y/y); world GDP per capita ≈ $14,554 (IMF, nominal).', source: 'World Gold Council; IMF WEO April 2026' },
    ],
  },
  {
    year: 2026,
    yearsBack: 0,
    person: 'Elon Musk',
    kind: 'private',
    contested: false,
    confidence: 'medium',
    currency: '2026 USD',
    netWorth: 1_000_000_000_000,
    netWorthLow: 950_000_000_000,
    netWorthHigh: 1_400_000_000_000,
    netWorthLabel: '≈ $1.0 trillion',
    goldPricePerTroyOz: 4_709,
    goldPriceLabel: '$4,709 / oz (2026 YTD average, record)',
    globalAvgAnnualIncome: 15_180,
    incomeLabel: '≈ $15,180 (IMF, nominal)',
    blurb:
      'The live anchor year. Musk became the world\'s first trillionaire on June 12, 2026 when SpaceX went public (largest IPO ever), briefly peaking at ~$1.1–1.45T. SpaceX shares then fell ~30%, and by late June he had slipped back to ~$950B — losing trillionaire status. ~$660B ahead of #2. The one point taken at a live snapshot rather than an annual list.',
    sources: [
      { claim: 'Musk became the first trillionaire on June 12, 2026 via the SpaceX IPO; ~$950B by late June after a ~30% pullback.', source: "Bloomberg; CNBC; Yahoo Finance; Wikipedia 'Wealth of Elon Musk'" },
      { claim: '2026 YTD average gold price ≈ $4,709/oz (record); world GDP per capita ≈ $15,180 ($126T / 8.30B).', source: 'exchange-rates.org; IMF WEO April 2026; Worldometers' },
    ],
  },
]

function derive(p: RawPoint): RichestPoint {
  const incomesControlled = p.netWorth / p.globalAvgAnnualIncome
  const incomesControlledLow = p.netWorthLow / p.globalAvgAnnualIncome
  const incomesControlledHigh = p.netWorthHigh / p.globalAvgAnnualIncome
  const lbs = (nw: number) => nw / p.goldPricePerTroyOz / TROY_OZ_PER_POUND
  return {
    ...p,
    incomesControlled,
    incomesControlledLow,
    incomesControlledHigh,
    poundsOfGold: lbs(p.netWorth),
    poundsOfGoldLow: lbs(p.netWorthLow),
    poundsOfGoldHigh: lbs(p.netWorthHigh),
  }
}

/** All twelve points, oldest → newest, plot-ready. */
export const points: RichestPoint[] = RAW.map(derive)

export type MethodologyNote = { signal: string; status: 'measured' | 'estimated' | 'derived'; detail: string }

export const methodology: MethodologyNote[] = [
  {
    signal: 'Who was richest',
    status: 'estimated',
    detail:
      'Modern years use the world #1 on the Forbes annual billionaires list (one consistent snapshot per year); 2026 is the live mid-year figure. Pre-Forbes years use the best-documented historical estimate. Several years are genuinely contested — flagged per point.',
  },
  {
    signal: 'Net worth',
    status: 'estimated',
    detail:
      'Modern net worths are mark-to-market and swing ±40% within a year — the error bands show that real intra-year range, not measurement error. Deep-past figures (1002, 1514, 1770) are order-of-magnitude reconstructions from fragmentary records.',
  },
  {
    signal: 'Gold price',
    status: 'measured',
    detail:
      'The strongest series. Fixed by law for long stretches ($20.67/oz 1834–1933; $35 under Bretton Woods 1934–71; the Newton mint price £3.894/oz 1717–1931) and well-recorded annual averages since gold floated in 1971. The 1002 gold price is a modern anchor used only as a unit bridge.',
  },
  {
    signal: 'Average world income',
    status: 'derived',
    detail:
      'World GDP per capita (the MEAN), from the World Bank (modern) and the Maddison Project (historical). It is far above the median person\'s income, especially in unequal eras — the right denominator for "how many average incomes," but not "how many typical people."',
  },
  {
    signal: 'Pounds of gold',
    status: 'derived',
    detail:
      'Net worth ÷ gold price ÷ 14.583 troy ounces per avoirdupois pound. A physical quantity, immune to inflation and exchange rates.',
  },
]
