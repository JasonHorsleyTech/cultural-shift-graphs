# Ticket 012 — Heroin → Diamorphine

## Demon identity

Heroin (see ticket 001 for demonization detail). This ticket is the *identical-molecule* version of the heroin rebrand — heroin as a prescribed pain medication, primarily in the UK.

## Medicine identity

**Diamorphine** (diacetylmorphine). The clinical name for heroin. Prescribed in the UK NHS for severe pain (palliative care, post-surgical, MI-related). Also used in supervised heroin-assisted treatment (HAT) programs in Switzerland, Germany, Netherlands, Canada (limited), UK (limited). In the US, diamorphine is Schedule I and not available for any medical use.

## Arc type

`street_to_medicine`. The UK case is the project's purest "identical molecule, jurisdiction-dependent rebrand" — same chemical that's the archetypal street drug in the US is a legitimate prescription analgesic across the Atlantic.

## Chemistry hypothesis

**Identical.** Diamorphine is diacetylmorphine, the same molecule as street heroin. PubChem confirms.

## Source hierarchy

1. **British National Formulary (BNF)** for current UK diamorphine prescribing guidance.
2. **NHS prescription cost analysis data** — diamorphine usage volumes.
3. **Bayer historical materials** — heroin was Bayer's product from 1898, marketed initially as a cough suppressant and "non-addictive morphine alternative." Failed catastrophically and the brand was abandoned, but the molecule survived in UK medicine.
4. **Swiss, Dutch, German HAT program data** — heroin-assisted treatment outcomes and prescription volumes.
5. **DEA materials** on why diamorphine remains Schedule I in the US despite UK medical use — useful for contrast.
6. **Survey research** on UK vs. US public awareness that heroin and diamorphine are the same drug.

## Caveats

- The US/UK regulatory split is the load-bearing fact of this ticket. Make sure research distinguishes them clearly.
- HAT (heroin-assisted treatment, i.e., prescribed heroin for hard-to-treat addiction) is a real medical practice in several countries. Cover it as part of the rebrand story — it's the most direct heroin-as-medicine arc available.
- Bayer's 1898–1924 heroin marketing was famously catastrophic. The "failed medicine that came back" framing applies here too — arguably this ticket also has a `failed_medicine_rebranded` component. Mark as `both`.

## Output format

Write result to `results/012-heroin-diamorphine.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Side-by-side US (Schedule I, no medical use) vs. UK (BNF analgesic) framing.
- Bayer 1898–1924 history covered.
- UK NHS diamorphine prescription volume data.
- HAT program data from Switzerland / Netherlands.
- Awareness % — likely low even in the UK, but possibly higher than US for the same connection.
