# Ticket 002 — Heroin → Suboxone / Buprenorphine

## Demon identity

Heroin (see ticket 001 for demon-era detail). This ticket focuses specifically on the buprenorphine substitution arc, which is the newer and more office-based half of the heroin-substitution story (vs. the methadone clinic model).

## Medicine identity

**Buprenorphine**, marketed as **Suboxone** (buprenorphine + naloxone combination), **Subutex** (buprenorphine alone), and **Sublocade** (long-acting injectable). FDA approved for opioid use disorder in October 2002 (DATA 2000 enabled office-based prescription, breaking the methadone-clinic-only model). Originally developed by Reckitt & Colman / Reckitt Benckiser; now Indivior.

## Arc type

`street_to_medicine`. Substitution-style rebrand, like methadone, but with a structurally different deployment model (office-based vs. clinic-based).

## Chemistry hypothesis

**Cousin.** Buprenorphine is a thebaine-derived opioid — chemically a partial mu-opioid agonist with high receptor affinity and a ceiling effect. Different scaffold from heroin and methadone, but again hits the same receptor to do the same job. The "partial agonist" + "naloxone abuse deterrent" framing made the rebrand more politically palatable than methadone. Confirm chemistry via PubChem.

## Source hierarchy

1. **DATA 2000 (Drug Addiction Treatment Act)** — the legislative inflection point for office-based opioid substitution treatment.
2. **FDA approval letter for Suboxone, October 2002.**
3. **SAMHSA buprenorphine prescriber data** — year-over-year growth in waivered prescribers.
4. **IQVIA / SAMHSA prescription volume data** for Suboxone/Subutex/Sublocade.
5. **Survey research on opioid agonist therapy awareness** — Pew, KFF, academic surveys.
6. **Indivior / Reckitt Benckiser corporate filings** for marketing strategy and rebrand framing.
7. **Recent news coverage on buprenorphine waiver removal (2023)** — sign of mainstreaming.

## Caveats specific to this drug

- Suboxone has been marketed explicitly as the *less stigmatized* opioid substitution option, with messaging that distances it from methadone. Note this in research — it's part of the rebrand strategy.
- Naloxone in Suboxone exists primarily as an abuse-deterrent (causes withdrawal if injected). Worth noting clinically.
- The X-waiver requirement for prescribing buprenorphine was eliminated in 2023, a major milestone in normalization.
- Buprenorphine is *also* diverted and sold on the street — the rebrand is medicalized but not airtight.

## Output format

Write result to `results/002-heroin-suboxone.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- DATA 2000 and FDA approval years cited precisely.
- US buprenorphine prescription volume trajectory (2003 → most recent).
- Honest framing of how the Suboxone rebrand explicitly markets itself as "the not-methadone."
- Awareness % for "is Suboxone an opioid" — surveys exist, find them.
