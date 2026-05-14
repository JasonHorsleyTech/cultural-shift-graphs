# Ticket 011 — Methamphetamine → Desoxyn

## Demon identity

Methamphetamine (see ticket 003 for the demonization era detail). This ticket is the *identical-molecule* version of the meth rebrand story — the same molecule, prescribed in tablet form.

## Medicine identity

**Desoxyn** (methamphetamine hydrochloride). FDA approved 1944 (originally as Methedrine by Burroughs Wellcome) for various indications; current Recordati Rare Diseases label indicates ADHD and short-term obesity treatment. Schedule II. Prescription volumes are extremely low — a few thousand prescriptions per year in the US, mostly second-line ADHD cases.

## Arc type

`street_to_medicine`. The chemically purest case in the project — identical molecule, different name, different cultural meaning.

## Chemistry hypothesis

**Identical.** Desoxyn is methamphetamine hydrochloride. Same molecule, same enantiomer (d-methamphetamine), same salt form as crystal meth. The only difference is pharmaceutical-grade purity, oral tablet formulation, and prescription context. PubChem and FDA label confirm.

## Source hierarchy

1. **FDA Desoxyn label and approval history** — Drugs@FDA.
2. **DEA prescription data on methamphetamine** — Schedule II quotas and dispensing.
3. **Historical Methedrine marketing materials** (1940s–1960s) for the original rebrand story.
4. **Recent IQVIA data** for current Desoxyn prescription volumes.
5. **Survey data** on Desoxyn awareness — almost certainly very low.

## Caveats

- Desoxyn's prescription volumes are so low that the rebrand is best described as "technically exists" rather than "thriving." This is a different success profile than Adderall (ticket 003) and worth contrasting in research.
- Methedrine was historically prescribed more aggressively (1950s–60s as a diet pill and antidepressant). The current Desoxyn label is a vestige of that era.
- The fact that the *exact* same drug as crystal meth is still legally prescribed in the US is poorly known. Awareness is the most surprising data point in this ticket.

## Output format

Write result to `results/011-methamphetamine-desoxyn.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Crystal-clear identical-molecule classification.
- Current US Desoxyn prescription volume (likely <10k/year).
- Awareness % marked low-confidence; this is the project's "wait, *that's* still prescribed?" moment.
