# Ticket 003 — Methamphetamine → Adderall

## Demon identity

Methamphetamine (meth, crystal, ice, glass, Tina, Pervitin in WWII Germany). Schedule II in the US. Cultural demonization peaked through the 2000s — Breaking Bad (2008–2013) cemented "blue meth" iconography in mainstream consciousness. DEA-tracked meth lab raids peaked 2004-2005. Pre-Breaking Bad, "Faces of Meth" campaigns (Oregon, mid-2000s) shaped public perception.

## Medicine identity

**Adderall** (mixed amphetamine salts — dextroamphetamine + amphetamine racemic mix). FDA approval 1996 for ADHD (Shire / Richwood Pharmaceuticals; the 1996 launch was actually a relicensing of the earlier Obetrol formulation — see ticket 023 for the full amphetamine arc). Vyvanse (lisdexamfetamine, 2007) is a prodrug sibling. **Desoxyn** (methamphetamine HCl, see ticket 011) is the actual identical-molecule prescription — this ticket is about the *cultural* rebrand to Adderall.

## Arc type

`street_to_medicine`. The chemically iffy but culturally clean pair.

## Chemistry hypothesis

**Sibling.** Adderall is amphetamine (no N-methyl group); meth is N-methyl-amphetamine. Same neurotransmitter targets (DAT, NET, VMAT2), similar effects, different molecule. The N-methylation gives meth higher CNS penetration and a stronger / faster subjective effect — pharmacokinetically meaningful difference. Confirm: PubChem structures and any DEA / NIDA comparison docs.

## Source hierarchy

1. **FDA Adderall approval history** — 1996 NDA, indication evolution.
2. **DEA scheduling history** for amphetamine and methamphetamine.
3. **IQVIA Adderall prescription volume data** — 1996 onward trajectory. Note the explosive growth.
4. **Pew / KFF / academic surveys on ADHD medication awareness** — particularly whether the public knows Adderall is in the amphetamine family.
5. **"Generation Adderall" NYT 2016 long-form piece** and similar mainstream cultural-recognition pieces.
6. **Academic literature on stimulant pharmacokinetics** for the meth-vs-amphetamine clinical differences.
7. **Breaking Bad cultural impact studies** if any peer-reviewed work exists — for demon-era awareness signal.

## Caveats specific to this drug

- "Adderall is meth" is the culturally viral claim but the chemistry is sibling, not identical. **Don't oversell.** This is the project's most-cited example and also the one where the chemistry pushback is loudest.
- ADHD diagnosis rates exploded in the same window as Adderall prescriptions. Disentangle whether the rebrand drove diagnosis or vice versa — relevant to the success metric.
- Adderall *is* diverted and abused. The rebrand worked institutionally but the abuse profile is real (college campuses, finance, tech).
- The "Adderall shortage" of 2022–2024 is recent context — flag as a current-status data point.

## Output format

Write result to `results/003-methamphetamine-adderall.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Explicit chemistry rubric ranking: sibling, with reasoning.
- Adderall US prescription volume time series (or at least 1996 vs. most-recent snapshot).
- Real awareness survey data if it exists — "% of people who know Adderall is in the amphetamine family." Triangulate transparently if no direct survey.
- Honest acknowledgment that this is the project's flagship "BS-but-we-count-it" pair and the chemistry caveat matters.
