# Ticket 005 — Ketamine → Spravato

## Demon identity

Ketamine (Special K, K, kit kat, vitamin K). Schedule III in the US. Originally a veterinary anesthetic (also human pediatric/battlefield anesthetic — Parke-Davis 1962, FDA approved 1970). Demonized as a club drug from the 1990s onward (rave culture, dissociative misuse). Cultural fear lower than heroin/meth — ketamine never reached the "scourge of society" framing that the harder drugs did, more of a niche club-drug worry.

## Medicine identity

**Spravato** (esketamine nasal spray). FDA approved March 2019 for treatment-resistant depression (Janssen / J&J). Plus parallel **off-label IV ketamine clinics** that proliferated through the 2010s for depression, PTSD, chronic pain. The clinic network is arguably the bigger story than Spravato itself in terms of patient volume.

## Arc type

`street_to_medicine`. Interesting variant: ketamine *was* a medicine first (anesthesia, 1970s), got recreational misuse, then was re-rebranded for a totally different indication (depression). So it's also weakly `failed_medicine_rebranded` — anesthetic original use never failed, just expanded.

## Chemistry hypothesis

**Sibling.** Spravato is the S-enantiomer (esketamine) of racemic ketamine. Same molecule, one mirror-image half. Pharmacologically more potent at NMDA receptors per mg than the R-enantiomer. The street-and-IV-clinic version is racemic. Confirm via PubChem / DrugBank.

The genealogy also includes PCP (phencyclidine) — ketamine was developed at Parke-Davis specifically as a shorter-acting, less-disruptive PCP analog. See ticket 014 for the PCP side of this story.

## Source hierarchy

1. **FDA Spravato approval (March 2019)** — Janssen press materials, FDA briefing documents.
2. **DEA scheduling history** for ketamine (Schedule III since 1999) and esketamine.
3. **Insurance coverage and prescription volume for Spravato** — Janssen Q earnings, IQVIA.
4. **Academic literature on ketamine for depression** — Krystal et al. 2000, the foundational papers.
5. **Ketamine clinic count growth** — American Society of Ketamine Physicians (if exists), survey/industry estimates.
6. **News coverage of "ketamine therapy" cultural moment** — Matthew Perry's death (2023) and aftermath as a recent inflection point.
7. **Survey research on ketamine-as-medicine awareness** — search Pew, KFF.

## Caveats specific to this drug

- Spravato vs. off-label IV ketamine clinics is a real distinction — different drug forms, different access models, different price points. Spravato is the *pharma rebrand*; the clinic network is more of a *grassroots medicalization*.
- Esketamine being a single enantiomer is partly clinical (potency) and partly evergreening (extends Janssen's patent advantage over generic racemic ketamine). Honesty section should flag.
- Matthew Perry's 2023 ketamine-related death is a recent cultural moment that may have shifted public perception. Worth tracking in research.
- Ketamine's recreational use has not collapsed despite the medicalization — both continue in parallel.

## Output format

Write result to `results/005-ketamine-spravato.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Spravato approval date (2019) and prescription volume trajectory.
- IV ketamine clinic count growth estimate over time.
- Awareness % for "ketamine is used to treat depression" — public consciousness on this has shifted fast; find any survey data that tracks the shift.
- Honest framing of esketamine-vs-racemic as partly patent strategy.
