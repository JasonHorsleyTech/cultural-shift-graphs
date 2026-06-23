# Was Social Security worth it? (and for whom?)

*Captured 2026-06-11 from voice dump.*

## The raw idea

Compare two worlds, per lifetime-income percentile:

- **World 1 (actual):** Payroll tax goes to Social Security. You get what the benefit
  formula gives you from 65 until average death.
- **World 2 (forced private accounts):** Same money is taken from your paycheck, but
  it's yours. Must be invested Roth-IRA-style (stocks, gold, cash, house — anything
  IRA-eligible), untouchable until 65. At 65 you convert the nest egg into a
  lifetime income stream (annuity).

Key framing decisions from the dump:

- The unit of analysis is **lifetime income percentile**, not point-in-time income
  percentile. People bounce around year to year; what matters is where the whole
  life averaged out.
- The lives must be **real, lumpy lives** — not a hypothetical who earns 20th-percentile
  income every single year from 18 to 65. The construction worker who earned big young
  then fell apart at 30. The mother who divorced and collects spousal benefits. The
  person blind from birth who never paid in. The early-high/late-low trajectory matters
  enormously in World 2 because money invested young compounds longest.
- Dream version: 100 real people, one per percentile, per retirement decade since SS's
  inception. Did each one get more out than in, in each world?
- Default investment for World 2 modeling: dutiful S&P 500, never panic-sells,
  never skips a year.
- Possible shapes of the answer: rich do better privatized / poor do worse; or middle
  class loses and the tails win; or something weirder. The graph should show whatever
  the data shows.

## Workshop notes (Claude, 2026-06-11)

### Methodology asymmetries to resolve before this is graphable

These stack the deck if ignored — flagging per the research-honesty rule:

1. **SS is insurance, not just a pension.** The 12.4% OASDI tax also buys disability
   insurance (DI, ~1.8 points) and survivor benefits for your kids/spouse if you die
   young. A pure S&P comparison charges World 1 for insurance World 2 doesn't provide.
   Either exclude the DI portion of the tax, or price equivalent term-life + disability
   insurance into World 2's costs.
2. **Inheritance asymmetry (favors World 2).** Die at 66 in World 2 and your kids get
   $1.3M. Die at 66 in World 1 and your estate gets roughly nothing. Since low earners
   die earlier (Chetty 2016: ~10–15 year life-expectancy gap between top and bottom
   income percentiles), this hits the bottom deciles hardest — it partially cancels the
   progressive benefit formula. Must use mortality **by income**, not population average.
3. **The annuity at 65 doesn't really exist.** SS pays an inflation-indexed life
   annuity. Commercial inflation-adjusted SPIAs have essentially vanished from the US
   market. World 2's retiree can buy a nominal annuity (and eat inflation risk) or
   we price a fair actuarial real annuity ourselves. Decision needed — this is a big
   thumb on the scale either way.
4. **Employer half.** Worker sees 6.2% leave the paycheck but economists agree the
   employer's 6.2% is also the worker's money (wage incidence). Does World 2 invest
   6.2% or 12.4%? (Probably 12.4% — it's the honest economic answer — but say so on
   the graph.)
5. **Cohort luck / sequence risk.** World 2 outcomes swing wildly by retirement year
   (retire 1982 vs 2009). Doing one line per retirement decade, as the dump suggests,
   actually handles this — keep it.
6. **Transition cost (scope out, but footnote).** Early SS cohorts got enormous returns
   because the first generation paid in almost nothing — someone has to pay that bill.
   Geanakoplos/Mitchell/Zeldes (1998) is the canonical "privatized returns aren't
   free money" argument. For a per-person "was it worth it" graph we can scope this
   out, but the graph should footnote it or commenters will (correctly) bring it up.
7. **Scope of "Social Security."** Blind-from-birth person collects **SSI**, which is
   general-revenue welfare, not OASDI — probably out of scope. Spousal/survivor/divorced-
   spouse benefits ARE OASDI and in scope (and are a huge part of why SS pencils out
   for low-lifetime-earnings women).

### The dataset answer (what actually exists)

**Real individual earnings histories, public:**
- **PSID** (psidonline.isr.umich.edu) — same families annually since 1968, free public
  microdata extracts. The only fully public source of actual lumpy lives long enough to
  cover whole careers. Caveats: self-reported income, attrition, modest sample.
- **NLSY79** — born 1957–64, tracked since 1979; just now hitting retirement age. Good
  for career shapes, too young for completed SS benefit histories.
- **NLS Older Men cohort** — born 1907–21, surveyed 1966–1990. Actually retired under SS.

**Real earnings histories, restricted (probably overkill):**
- **HRS linked to SSA records** — actual administrative earnings + benefits for consenting
  respondents born 1931+. The gold standard; requires a research application.
- **SSA CWHS / Census linked data via FSRDC** — effectively inaccessible for a personal site.

**Lifetime-earnings percentiles, precomputed (the shortcut):**
- **Guvenen, Kaplan, Song & Weidner 2022** (AEJ: Applied) — lifetime earnings
  distributions for 27 cohorts from actual SSA records, 1957–2013. Replication data
  public on openICPSR (project 138441). This IS the "lifetime income percentile"
  concept, already built. Caveat: ages 25–55, excludes very weak labor-force attachment.
- **SSA scaled-worker profiles** (Actuarial Note 2007.3 et seq.) — realistic age-earnings
  *shapes* (earnings vary by age, derived from actual records) at very-low/low/medium/
  high/max levels. Could be extended to deciles using Guvenen.

**World 1 side, already computed by others (prior art — read first):**
- **SSA Office of the Chief Actuary, "Internal Real Rates of Return" notes** (latest
  an2024-5) — real IRR of SS by birth cohort × earnings level. The public-world half
  of this graph exists as a government PDF.
- **Urban Institute, Steuerle & Quakenbush, "Social Security and Medicare Lifetime
  Benefits and Taxes"** (updated through 2025) — lifetime taxes vs benefits per
  hypothetical worker per retirement cohort.

**Mechanics inputs (all public):**
- Payroll tax rates + taxable maximum history, PIA bend points, AWI series — ssa.gov.
- S&P 500 total returns from 1871 — Shiller's online data; also Damodaran's NYU series.
- CPI — BLS.
- Mortality by income percentile — Chetty et al. 2016 (Health Inequality Project,
  public downloads). SSA cohort life tables for averages.
- Annuity pricing — actuarial fair pricing from life tables + rates, or current SPIA
  quotes (nominal only).

### Realistic construction (proposal)

Nobody gets a public dataset of "thousands of perfectly described lives" with SS taxes
and benefits attached — that's the restricted HRS/SSA linkage. The honest reachable
version is a hybrid:

1. Take **decile lifetime-earnings levels per cohort** from Guvenen (real data).
2. Give each decile a **real earnings *shape*** — either SSA scaled-worker curves or,
   better, actual sampled PSID trajectories whose lifetime totals land in that decile
   (this preserves the lumpy construction-worker/alcoholic/divorce stories Jason wants,
   with real lives instead of fabricated ones).
3. Run each life through both worlds with real tax/benefit/market/mortality history.

Open questions: which retirement cohorts (one per decade from ~1950?), deciles vs
finer, how to show uncertainty bands from sequence risk.

## Where we left off (2026-06-11)

Dataset question answered; Jason parked it ("we'll get back to this"). Nothing decided
yet. When this resumes, the pending decisions are:

1. The three methodology asymmetries above (DI/survivor insurance, mortality by income +
   inheritance, the nonexistent real annuity) — each needs a scope ruling.
2. Whether the hybrid construction (Guvenen percentile levels + PSID real trajectories)
   is acceptable, or Jason wants to pursue restricted HRS/SSA-linked data.
3. World 2 contribution rate: 6.2% vs 12.4% (lean 12.4%, but it's his call).
4. Cohort/decile granularity for the graph.
