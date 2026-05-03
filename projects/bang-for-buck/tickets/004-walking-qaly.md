# Ticket 004: Walking (30 min/day) — QALY Evidence

## Objective

Find the best available QALY estimates for regular moderate walking (~30 min/day, 150 min/week) in populations that match or approximate Bob's profile (sedentary, lower-income, elevated BMI, mildly elevated depression risk).

## What to research

1. **All-cause mortality reduction** — meta-analyses quantifying mortality risk reduction for 150 min/week of moderate walking. Convert to annualized QALY gain using standard life-table methods or use pre-computed values from CEA studies.

2. **Cost-effectiveness analyses** — published $/QALY estimates for walking interventions. These will give us QALY gains directly.

3. **Multi-dimensional benefits captured in a single measure** — studies using EQ-5D, SF-6D, or other health utility instruments to measure walking's overall quality-of-life impact (not just cardiovascular or just depression).

4. **Depression-specific QALY gains** — to compare against SSRIs/CBT, but only as secondary to all-cause estimates to avoid double-counting.

5. **Effect modification by baseline health** — does walking produce larger QALY gains in people who are obese, sedentary, or depressed at baseline? This matters for Bob's profile match.

## Where to look (in order)

1. **Tufts CEA Registry** — search for "walking" and "physical activity" cost-effectiveness analyses
2. **Cochrane Reviews** — "Exercise for depression," "Walking for cardiovascular health"
3. **NICE guidelines** — physical activity recommendations include CEA backing
4. **Key meta-analyses:**
   - Hamer & Chida (2008) — walking and cardiovascular events
   - Murtagh et al. (2015) — walking and health outcomes
   - Schuch et al. (2016) — exercise and depression
   - Any 2020+ meta-analyses on walking + all-cause mortality
5. **PubMed** — search "walking QALY" or "walking cost-effectiveness" or "physical activity QALY"

## Output format

Use the intervention result format from plan.md. Fill in all sections. For the "Data for Graph" table, use the **all-cause QALY estimate** as the primary number (captures multi-dimensional benefits without double-counting).

## What "good data" looks like

- QALY estimate from a meta-analysis or systematic review, not a single small RCT
- All-cause or general health utility measure preferred over domain-specific
- Population includes sedentary adults (not athletes adding more exercise)
- Confidence interval or range reported
- Clear methodology for QALY conversion (not just "reduced risk by X%")

## Known pitfalls

- Walking studies are almost never blinded — account for this in evidence quality rating
- Many studies compare "exercise" broadly, not walking specifically — prefer walking-specific data
- Multi-dimensional benefits risk double-counting if you sum across domains — use all-cause estimates
- Publication bias favors positive exercise results — use conservative end of estimates
