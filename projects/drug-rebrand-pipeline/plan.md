# Plan: Drug rebrand pipeline

## Decisions carried forward from workshopping

The explore phase was done live in conversation with Jason. See `research/angle-01.md` for the framing discussion and `research/angle-02.md` for the chemistry-cutoff and dual-arc discussion. This plan commits to those resolutions:

1. **Two rebrand arcs in scope.** (a) Street drug → respectable medicine. (b) Scandalous / failed medicine → rebranded medicine for the same or different problem. Some drugs span both — those get full-arc tickets.
2. **Chemical-relationship rubric.** Each pair classified as identical / sibling / cousin / mechanism-only. The last category is *cut* from this project ("caffeine is legal cocaine" thinking is too thin).
3. **Three primary metrics per drug.** Public awareness of the connection (%), rebrand lag (years), rebrand success over time (current status + trajectory).
4. **Null cases included.** Failed rebrands (Quaaludes, PCP, crack, bath salts, DES) belong in the data — they're how we know rebrand isn't automatic.
5. **Two-wave research.** Wave 1 = broad. Wave 2 (deferred) = ~5 follow-up tickets per high-dual-recognition drug from wave 1, focused on tighter survey data and historical specifics.

## Data format

Every result file is a markdown file with YAML frontmatter, named to match the ticket (e.g. `001-methamphetamine.md`). The frontmatter is the structured data that feeds the TypeScript data file. The body is free-form analysis and citations.

### Required frontmatter fields

```yaml
---
display_name: "Methamphetamine → Adderall"     # How it appears on the chart
demon_name: "Methamphetamine (meth, crystal, Pervitin)"  # Street / scary identity
medicine_name: "Adderall, Desoxyn"             # Prescription identity
arc_type: "street_to_medicine"                  # "street_to_medicine", "failed_medicine_rebranded", or "both"
chemical_relationship: "sibling"                # "identical", "sibling", "cousin", or "mechanism_only" (cut if mechanism_only)
demon_peak_year: 2005                           # Year demonization peaked (best estimate)
medicine_year: 1996                             # Year of FDA approval / mainstream medical adoption under the new name
rebrand_lag_years: -9                           # medicine_year - demon_peak_year. Negative means medicine predated peak demonization.
awareness_pct: 35                               # % of public estimated to know they're the same/related drug
awareness_source: "Pew 2019 stimulants survey + triangulation"  # Where the % came from
awareness_confidence: "medium"                  # "high" (real survey), "medium" (triangulated), "low" (guess with reasoning)
current_status: "thriving"                      # "thriving", "stable", "declining", "failed", "in_trials"
current_prescription_volume_per_year: 41200000  # Most recent annual US prescription count, or null
rebrand_success: "high"                         # "high", "medium", "low", "failed"
confidence: "high"                              # Overall research confidence
sources:
  - "FDA approval letter, Adderall NDA 1996"
  - "Pew Research stimulant awareness, 2019"
---
```

### Required body sections

```markdown
## The demon era
Brief history of the drug as a feared substance. Include: when it became culturally demonized, why, peak fear era, who feared it most. ~150 words.

## The rebrand
The medicine identity. When it was launched, by whom, for what indication, with what marketing. Include the chemical-relationship claim with citation: identical / sibling / cousin and why. ~200 words.

## Awareness of the connection
How widely is it known that the demon and the medicine are the same/related drug? Cite any surveys directly. Where surveys don't exist, triangulate from search volume, news coverage, popular-press articles, Reddit/forum discussion. Be explicit about what's hard data vs. estimate. ~150 words.

## Rebrand success
Is the rebrand thriving, stable, declining, or failed? Cite prescription volumes if available. Note any backlash (oxycontin), any expansion (ketamine clinics), or any failure (Quaaludes never rebranded). ~150 words.

## Honesty check
Where the framing might be misleading: any place where the rebrand is genuinely *not* the same drug in practice. Slow-release pharmacokinetics, abuse-deterrent formulations, route-of-administration differences that materially change clinical profile. Don't editorialize — just flag. ~100 words.
```

### Confidence rubric

- **high** — clear FDA approval dates, real survey data on awareness, prescription volumes from IQVIA / FDA / DEA, peer-reviewed chemistry classification.
- **medium** — most facts solid but awareness % is triangulated from indirect signals, or chemistry classification depends on a judgment call (e.g., methadone-as-heroin-cousin).
- **low** — historical drug where prescription volumes are estimated, awareness is a reasoned guess, or the rebrand status is in flux (psilocybin therapy, MDMA-AT).

### Null-case tickets (failed rebrands)

For drugs that *didn't* successfully rebrand (Quaaludes, PCP, crack, bath salts, DES), the frontmatter still applies but:
- `medicine_year` and `medicine_name` may be `null` or refer to a failed attempt
- `rebrand_success`: "failed"
- The body should explain *why* the rebrand didn't happen. These nulls are critical for honesty — they show the rebrand pipeline isn't automatic.

## Source hierarchy

Tickets specify their own source hierarchy, but the project-wide priorities are:

1. **FDA approval databases (Drugs@FDA, OrangeBook)** for medicine launch dates and indications.
2. **DEA scheduling history** for legal status timeline.
3. **Survey research** for public awareness — Pew, Gallup, KFF, academic surveys via Google Scholar.
4. **IQVIA / CDC / DEA prescription data** for prescription volumes.
5. **PubChem / DrugBank** for chemical relationship classification.
6. **News archives (NYT, WaPo)** for demonization peak periods and cultural narratives.
7. **Peer-reviewed history-of-medicine articles** for older drugs (thalidomide, opium, cocaine, lithium).

## Methodology hazards (read before researching)

- **"Awareness %" is the squishiest number in the project.** Real surveys exist for some pairs (heroin/methadone awareness has been studied) but most pairs require triangulation. Be honest about confidence. Better to mark as "low confidence, ~30%" than to publish a fake-precise "32.4%."
- **Demonization peak is fuzzy.** Use specific signals where available — newspaper coverage spike, DEA scheduling year, congressional hearing year, peak street price, peak overdose statistics. Cite the signal.
- **Chemical relationship judgment.** Sibling vs. cousin can be argued. The rule: if a chemist would call them the same drug class (substituted amphetamines, mu-opioid agonists, dissociatives), they're siblings. If they hit the same receptor but from a different chemical scaffold (methadone vs. heroin), they're cousins. Cite the classification choice.
- **Current prescription volume.** US data is easiest (IQVIA, DEA ARCOS). International varies. Use US numbers as the default unless the rebrand is foreign-specific (diamorphine UK).
- **Spanning-both-arcs drugs.** Heroin, MDMA, LSD, amphetamine — set `arc_type: "both"` and explain the full arc in the body. Don't split into multiple tickets.

## Research honesty commitment

The framing is provocative ("they renamed heroin and called it medicine"). The data should be allowed to contradict that:

- If a rebrand is *materially* a different drug clinically (slow-release pharmacokinetics genuinely matter, abuse-deterrent formulations work, route-of-administration changes the experience), say so plainly. The "same molecule" claim is only the start of the story.
- If a "failed" rebrand actually worked but is just less famous (e.g., methaqualone analogs exist, just under different names), note it.
- If a "successful" rebrand is showing cracks (oxy crisis, Adderall shortage / abuse concerns), note it.

The graph is more interesting if it surfaces these nuances than if every entry confirms the punchline.

## Wave 2 plan (deferred — execute after wave 1 completes)

After wave 1 results are in, generate ~5 follow-up tickets per drug that scored highest on dual public recognition (Tier A from workshopping: heroin/methadone, meth/Adderall, marijuana/medical, ketamine/Spravato, MDMA, thalidomide). Follow-up tickets target:

1. Historical primary-source verification (FDA briefing documents, original marketing materials, etc.)
2. International rebrand variation (UK vs. US diamorphine, MDMA-AT trial countries, ketamine clinic geography)
3. Demographic awareness splits (age, education) where survey data permits
4. Failed-rebrand-attempts-within-the-arc (e.g., heroin substitution drugs that didn't catch on like LAAM)
5. Cultural-touchstone moments (Breaking Bad and meth, Limitless and Adderall, etc.)

Wave 2 tickets are not generated yet. Triggered by Jason after wave 1 review.

## Out of scope (in this project)

- Drug consumption / usage rates as a primary metric. We're measuring rebrand success, not drug use.
- Medicine → street arcs where there's no rebrand-back component (pure abuse stories). Separate project.
- Pricing / cost analysis. Separate question.
- Pharma company profitability per drug arc. Adjacent but different.
