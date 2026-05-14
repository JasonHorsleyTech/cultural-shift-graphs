# Ticket 001 — Heroin → Methadone

## Demon identity

Heroin (smack, dope, junk, H). Schedule I in the US. The archetypal "street drug" of the late 20th century. Peak cultural demonization arguably mid-1990s (post-crack era, pre-opioid-pill crisis), though heroin specifically had a resurgence narrative in the 2010s tied to oxy-pill cutoffs.

## Medicine identity

**Methadone** (Dolophine, Methadose). Synthetic opioid first synthesized in 1937–1939 in Nazi Germany at IG Farben (the original synthesis was actually for analgesia, not heroin replacement — that came later). FDA approval for analgesia 1947. Approved for opioid addiction treatment in the US starting in the mid-1960s (Dole and Nyswander's NYC studies); formal SAMHSA opioid treatment program framework codified 1972.

## Arc type

`street_to_medicine`. Note this is the *substitution* version of the arc — methadone wasn't the same molecule rebranded, it was a different synthetic opioid positioned as the medical answer to heroin.

## Chemistry hypothesis

**Cousin.** Methadone and heroin have totally different chemical scaffolds — methadone is a diphenylpropylamine, heroin is a diacetylated morphinan. Both are full mu-opioid agonists with similar therapeutic effect at the receptor, but the molecules are not chemically related. Confirm via PubChem structure comparison.

## Source hierarchy

1. **SAMHSA opioid treatment program history** — official US methadone-for-addiction timeline.
2. **NIDA / NIH publications on methadone maintenance** — efficacy, demographics, prescription volumes.
3. **DEA ARCOS data** — methadone distribution numbers, by year.
4. **CDC heroin overdose / use stats** for demon-era peak signals.
5. **Pew / Gallup surveys on opioid awareness** — search for any survey asking whether respondents know methadone is an opioid agonist / heroin substitute. Cite directly.
6. **Dole & Nyswander 1965 JAMA paper** — primary source for the medicalization argument.
7. **Historical NYT / WaPo coverage of methadone clinics** — backlash, NIMBY, "the new heroin" framings.

## Caveats specific to this drug

- Methadone has a *darker* clinical profile than people credit (long QT, overdose risk, withdrawal worse than heroin in some ways). The "successful rebrand" framing should acknowledge this.
- Methadone is *still* stigmatized despite being medicine — many patients describe being treated as addicts rather than patients. The rebrand worked institutionally but only partially culturally.
- LAAM (levomethadyl acetate) was an attempted methadone-alternative that was withdrawn — worth a brief mention as a failed-in-the-rebrand-already cousin.

## Output format

Write result to `results/001-heroin-methadone.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Specific years cited for demon peak signals (overdose stats, news coverage) and medicalization milestones (SAMHSA program, FDA approval).
- Awareness % cited from a real survey if any exists; otherwise triangulated with explicit reasoning.
- Current methadone prescription volume (US, most recent year available via SAMHSA / DEA).
- Honesty section that doesn't pretend methadone is a clean win.
