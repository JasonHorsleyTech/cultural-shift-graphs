# Ticket 007 — GHB → Xyrem

## Demon identity

GHB (gamma-hydroxybutyrate). Street names: G, liquid ecstasy, liquid X, Georgia home boy, grievous bodily harm. Cultural demonization centered on "date-rape drug" framing — late 1990s tabloid coverage, congressional hearings, the Hillory J. Farias and Samantha Reid Date-Rape Drug Prohibition Act (2000). Schedule I in the US since 2000, with a unique Schedule III carve-out for the prescription form.

## Medicine identity

**Xyrem** (sodium oxybate). FDA approved July 2002 for cataplexy in narcolepsy, expanded 2005 for excessive daytime sleepiness in narcolepsy. Jazz Pharmaceuticals. Plus **Xywav** (lower-sodium version, 2020) and **Lumryz** (extended-release, 2023). All three are sodium / mixed-salt formulations of the same active compound.

## Arc type

`street_to_medicine`. Clean case. The same molecule has Schedule I status as GHB and Schedule III status as Xyrem — a legal split that is essentially unique in US drug law.

## Chemistry hypothesis

**Identical.** Sodium oxybate is the sodium salt of GHB. The active gamma-hydroxybutyrate anion is identical to street GHB. The only difference is the cation it's paired with (sodium in Xyrem; whatever solvent or salt in street GHB). PubChem confirms.

This is one of the project's cleanest "literally the same drug" pairs — even cleaner than methamphetamine/Desoxyn because the regulatory split (Schedule I street form / Schedule III prescription form) is so stark.

## Source hierarchy

1. **FDA Xyrem approval letter (July 2002)** — and the orphan-drug pathway used.
2. **DEA dual-scheduling rationale** for GHB / sodium oxybate — the Schedule I/III split is documented.
3. **Hillory J. Farias and Samantha Reid Act (2000)** — the legislation that drove demonization.
4. **Jazz Pharmaceuticals annual reports** — Xyrem prescription volume and pricing trajectory.
5. **Academic literature on narcolepsy and cataplexy** — for medicine-identity context.
6. **News archives 1996–2000** for date-rape drug demonization era.
7. **Survey research** on GHB / Xyrem awareness — likely thin; flag as low-confidence triangulation.

## Caveats specific to this drug

- Xyrem is famously expensive (~$160k/year retail in the US). The "rebrand" generates an extreme markup over the street form. Worth flagging in the honesty section — the rebrand is partly chemistry-identical, partly access-controlled.
- The Schedule I/III split is a *legal* rebrand without a chemical one. Document this — it's structurally interesting for the project.
- Public awareness is probably very low because narcolepsy is a niche indication. Most people who know GHB don't know Xyrem.
- Date-rape drug framing was somewhat overstated even in the demonization era (alcohol remained the more common drug used in DFSA). Note for honesty.

## Output format

Write result to `results/007-ghb-xyrem.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Clear identical-molecule classification with PubChem/DrugBank citation.
- The Schedule I/III dual-scheduling story told plainly.
- Xyrem prescription volume + pricing data (Jazz disclosures).
- Honest framing of the date-rape drug demonization era — how much was real, how much was tabloid.
- Awareness % marked low-confidence if no survey exists.
