# AI & Data Center Water Usage

## Summary

US data centers directly consumed an estimated 17.4 billion gallons of water for cooling in 2023 (48 Mgal/day), with an additional 211 billion gallons consumed indirectly through electricity generation (578 Mgal/day). Even combining both, data centers account for roughly 0.2% of total US water withdrawal — less than the water used by American golf courses. The AI-driven surge since 2020 is real (Google's water use nearly doubled from 2020 to 2024), but the absolute numbers remain a rounding error in national water budgets. The panic is disproportionate to the actual water impact.

## Data

### US Data Center Direct Water Consumption (Cooling), 2014-2028

All figures are direct on-site water consumption (evaporative cooling). Indirect water (from electricity generation) is reported separately below. Source: Lawrence Berkeley National Laboratory (Shehabi et al. 2024) unless otherwise noted.

| Year | Direct Water (Bgal/year) | Direct Water (Mgal/day) | Notes | Source |
|------|--------------------------|-------------------------|-------|--------|
| 2014 | 5.6 | 15 | Baseline estimate | LBNL 2024 |
| 2018 | ~9 | ~25 | Interpolated from 2014-2023 trend | LBNL 2024 (derived) |
| 2020 | ~11 | ~30 | Pre-AI boom baseline | LBNL 2024 (derived) |
| 2023 | 17.4 | 48 | Most recent measured estimate | LBNL 2024 |
| 2028 (low) | 38 | 104 | Projection assuming moderate growth | LBNL 2024 |
| 2028 (high) | 73 | 200 | Projection assuming aggressive AI expansion | LBNL 2024 |

### Direct vs. Indirect Water Consumption (2023)

| Category | Bgal/year | Mgal/day | % of Total DC Water | Method |
|----------|-----------|----------|---------------------|--------|
| Direct (cooling) | 17.4 | 48 | 8% | On-site evaporative cooling measurement |
| Indirect (electricity) | 211 | 578 | 92% | Water consumed by power plants generating DC electricity (at ~1.2 gal/kWh × 176 TWh) |
| **Total** | **228** | **626** | **100%** | |

**Important caveat on indirect water:** The 211 Bgal/year indirect figure from LBNL includes water evaporation attributed to hydroelectric dam reservoirs at ~18.3 gal/kWh — roughly 40x the rate of thermoelectric plants (0.47 gal/kWh). Since major data center operators (Google, Microsoft, Amazon, Meta) have extensive renewable energy power purchase agreements (wind and solar, which use minimal water), the real indirect consumption may be closer to 73-91 Bgal/year (200-250 Mgal/day). The LBNL methodology overstates indirect water for operators with high renewable energy procurement. (Analysis: Construction Physics / Brian Potter, 2025.)

### Major Tech Company Water Consumption (Global, 2020-2024)

These are total company water consumption figures (global, all operations including offices), not US-only. Data centers account for ~95% of water use at Google and Meta. Figures converted from cubic meters where necessary (1 m3 = 264.17 gal).

| Company | 2020 (Bgal) | 2021 (Bgal) | 2022 (Bgal) | 2023 (Bgal) | 2024 (Bgal) | Growth 2020-2023 | Source |
|---------|-------------|-------------|-------------|-------------|-------------|------------------|--------|
| Google | 3.75 | 4.56 | 5.56 | 6.35 | 8.1 | +69% (2020-23), +116% (2020-24) | Google Environmental Reports 2021-2025 |
| Microsoft | 1.11 | 1.26 | 1.69 | 2.07 | — | +87% | Microsoft Sustainability Reports 2021-2024 |
| Meta | 0.58 | 0.68 | 0.70 | 0.81 | ~0.9 | +40% | Meta Sustainability Reports 2021-2024 |
| Amazon | — | ~2.8 | — | — | — | Not disclosed | Amazon (leaked 2021 figure; projected 7.7 Bgal by 2030) |
| **Sum (excl. Amazon)** | **5.44** | **6.50** | **7.95** | **9.23** | — | **+70%** | |

Notes:
- Microsoft's WUE improved 39% (0.49 to 0.30 L/kWh) from 2021 to 2024, meaning total consumption grew despite better efficiency — driven by sheer capacity expansion.
- Google's Council Bluffs, Iowa facility alone withdrew 3.9 Mgal/day in 2024 (consumed 2.8 Mgal/day).
- Amazon has never publicly disclosed total water consumption. A leaked internal document projected 7.7 Bgal/year by 2030.
- Google reported 42% increase in water use from 2022 to 2024, driven largely by AI workloads.

### Per-Query Water Consumption

| Service | Water per Query | Notes | Source |
|---------|----------------|-------|--------|
| Google Search | ~0.6 mL | Conventional web search, direct cooling water only | Industry estimates |
| Google Gemini (AI) | 0.26 mL | Google's own 2025 disclosure; "five drops" | Google 2025 |
| ChatGPT (Altman claim) | 0.3 mL | Sam Altman, June 2025; likely reflects GPT-4o efficiency | Sam Altman, June 2025 |
| ChatGPT (corrected est.) | ~5 mL per conversation | Corrected from the viral 500mL figure; accounts for modern model efficiency and realistic conversation length | Goedecke 2025 analysis |
| ChatGPT (original viral claim) | 500 mL per conversation | Based on GPT-3 power draw, 10-70 page conversations; widely misinterpreted and outdated | Li et al. 2023 (misapplied) |
| GPT-3 training (one-time) | 185,000 gal (700,000 L) | One-time cost for full model training run | Li et al. 2023 |

**The 500mL myth:** The widely cited "a bottle of water per ChatGPT conversation" comes from Li et al. (2023), which estimated GPT-3's power consumption at 0.004 kWh per page of generated content. The 500mL figure assumed conversations spanning 10-70 pages (far longer than typical 1-2 page interactions) and used GPT-3's power draw (modern models like GPT-4o are ~10x more efficient). Two orders of magnitude of overestimation compounded. The real figure is likely 3-10 mL per typical conversation.

### Data Center Water as % of US Total Water

| Water User | Withdrawal (Mgal/day) | % of US Total (322 Bgal/day) | Source |
|------------|----------------------|------------------------------|--------|
| Thermoelectric power | 133,000 | 41.3% | USGS 2015 |
| Irrigation | 118,000 | 36.6% | USGS 2015 |
| Public supply | 39,000 | 12.1% | USGS 2015 |
| Industrial | 14,800 | 4.6% | USGS 2015 |
| **Data centers (direct)** | **48** | **0.015%** | LBNL 2024 |
| **Data centers (direct + indirect)** | **626** | **0.19%** | LBNL 2024 |
| **Data centers (direct + adjusted indirect)** | **~300** | **~0.09%** | LBNL 2024 + PPA adjustment |

### Comparison Table

| Item | Water Use (Mgal/day) | Context | Source |
|------|---------------------|---------|--------|
| All US data centers (direct cooling) | 48 | The physical water evaporated on-site | LBNL 2024 |
| All US data centers (direct + indirect) | 626 | Including electricity generation water | LBNL 2024 |
| All US golf courses | 1,454 | 1.63M acre-feet/year (2024); 30x data center direct | GCSAA 2025 |
| US residential lawn watering | ~7,800 | ~29 Bgal/day outdoor residential use | EPA / USGS |
| California almond industry | ~2,855 | ~3.2M acre-feet/year | USDA / Pacific Institute |
| One large coal plant (cooling) | 500-1,000 | Single 1 GW coal plant, once-through cooling | EIA |
| One Google data center (Council Bluffs, IA) | 3.9 | Google's largest single facility, 2024 | Google 2025 |
| One 18-hole golf course (Southwest US) | ~0.3 | Average daily, arid climate | USGA |
| One 18-hole golf course (Palm Springs) | 1+ | Peak usage, extreme arid | USGA |
| Maricopa County, AZ golf courses | ~30-50 | ~100+ courses in Phoenix metro at 0.3-0.5 Mgal/day each | USGA / Maricopa Co. estimates |

### AI Workload vs. Traditional Data Center

| Metric | Traditional DC (CPU) | AI Training (GPU) | Ratio | Source |
|--------|---------------------|-------------------|-------|--------|
| Power density per rack | 7-15 kW | 40-120 kW | 3-8x | Uptime Institute 2024 |
| Water intensity (per kWh) | Same cooling infrastructure | Same cooling infrastructure | ~1:1 | LBNL 2024 |
| Water per unit of compute | Lower (lower power per rack) | Higher (higher power per rack) | 3-8x (proportional to power) | Derived |

The key insight: AI racks are more water-intensive per rack because they consume more electricity, not because the cooling technology is different. A GPU rack drawing 100 kW needs roughly 7x more cooling than a traditional 15 kW CPU rack.

## Key Findings

- **Data center water is a rounding error nationally.** Direct cooling water (48 Mgal/day in 2023) is 0.015% of US total water withdrawal. Even the most aggressive 2028 projection (200 Mgal/day) would be 0.06%. American golf courses alone use 30x more water.
- **The indirect water story is more significant but methodologically fraught.** The LBNL figure of 578 Mgal/day indirect water includes hydroelectric reservoir evaporation and ignores renewable energy PPAs. The real indirect figure for the data center industry, accounting for their actual energy mix, is likely 200-250 Mgal/day.
- **Growth rate is dramatic even if absolute numbers are small.** Google's water use grew 116% from 2020 to 2024. Microsoft grew 87% from 2020 to 2023. This acceleration is real and driven by AI infrastructure buildout.
- **The per-query panic is overblown.** The viral "500mL per ChatGPT conversation" figure is off by ~100x. Real figures are 0.3-5 mL per conversation depending on model and methodology. Google's own Gemini AI uses 0.26 mL per query — less than a conventional Google Search.
- **Local impacts matter more than national averages.** A 3.9 Mgal/day data center in Council Bluffs, Iowa or a planned 1.5 Mgal/day Meta facility in Louisiana can stress local water systems even though they're invisible at the national level. The water question is really a siting question, not a total-volume question.

## Confidence Level

**Medium-high.** The LBNL 2024 report is the best available national estimate, and company sustainability reports provide corroborating company-level data. Key uncertainties:

1. **Indirect water methodology** is genuinely debatable — the hydroelectric reservoir evaporation question alone can swing the total by 2-3x.
2. **Amazon's water use is unknown** — they don't disclose, and they're the largest cloud provider by market share.
3. **Year-by-year direct water data (2014-2023)** is interpolated between two endpoints; the LBNL report doesn't provide annual resolution for direct water.
4. **2028 projections have a 2x range** (38-73 Bgal/year direct), reflecting genuine uncertainty about AI growth rates, efficiency improvements, and adoption of waterless cooling technologies.
5. **Per-query estimates** vary by an order of magnitude depending on model, data center location, time of day, and cooling technology.

## Sources

- Shehabi, A. et al. (2024). "2024 United States Data Center Energy Usage Report." Lawrence Berkeley National Laboratory. https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report
- Li, P. et al. (2023). "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models." UC Riverside. https://arxiv.org/abs/2304.03271
- Google Environmental Reports (2021-2025). https://sustainability.google/reports/
- Microsoft Environmental Sustainability Reports (2021-2024). https://blogs.microsoft.com/on-the-issues/2024/05/15/microsoft-environmental-sustainability-report-2024/
- Meta Sustainability Reports (2021-2024). https://sustainability.fb.com/
- EESI (2024). "Data Centers and Water Consumption." https://www.eesi.org/articles/view/data-centers-and-water-consumption
- MOST Policy Initiative. "Data Center Water Use." https://mostpolicyinitiative.org/science-note/data-center-water-use/
- Potter, B. (2025). "I Was Wrong About Data Center Water Consumption." Construction Physics. https://www.construction-physics.com/p/i-was-wrong-about-data-center-water
- Goedecke, S. (2025). "Talking to ChatGPT costs 5ml of water, not 500ml." https://www.seangoedecke.com/water-impact-of-ai/
- GCSAA (2025). "Golf courses reduce water usage by 31 percent according to national survey." https://www.gcsaa.org/
- USGS (2018). "Estimated Use of Water in the United States in 2015." Circular 1441.
- USGS (2023). "Water use across the conterminous United States, water years 2010-20." PP 1894D.
- Digital Information World (2025). "Big Tech Giants Google, Microsoft, Apple, and Meta Drained 132 Million Cubic Meters of Water." https://www.digitalinformationworld.com/2025/04/big-tech-giants-google-microsoft-apple.html
- Source Material (2025). "Leak reveals Amazon plan to keep water use of data centres secret." https://www.source-material.org/amazon-leak-reveals-true-data-centres-water-usage-secret-plan/

<!-- COMPLETE -->
