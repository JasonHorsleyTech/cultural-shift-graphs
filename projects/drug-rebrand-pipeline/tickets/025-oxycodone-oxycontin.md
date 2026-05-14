# Ticket 025 — Oxycodone / OxyContin

## Demon identity

**OxyContin** (oxycodone extended-release). Cultural demonization peaked late 2000s / 2010s as the opioid crisis spotlight landed on Purdue Pharma's aggressive marketing of OxyContin starting in 1996. Oxy diversion, doctor-shopping, "pill mills" — became cultural shorthand for the prescription opioid crisis. Patrick Radden Keefe's *Empire of Pain* (2021) and the Sackler family bankruptcy/settlement are the cultural touchstones.

## Medicine identity

**Oxycodone** (and OxyContin specifically) is, of course, still an FDA-approved prescription opioid. OxyContin received FDA approval December 1995 for severe chronic pain. Reformulated 2010 with abuse-deterrent properties. Continues to be prescribed, though volumes have dropped substantially post-2012 as opioid prescribing guidelines tightened.

## Arc type

Inverted from the project's typical arc. This is `failed_medicine_rebranded` in spirit but the failure-and-rebrand happens *within* the medicine identity: oxycodone went from "medicine" to "demonized medicine" to "still medicine but more controlled," not from "medicine to street." Treat as a hybrid case — same drug, same identity, but the *cultural meaning* of the medicine shifted dramatically.

## Chemistry hypothesis

**Identical.** Oxycodone is oxycodone in all formulations. The 2010 reformulation added physical abuse-deterrent properties (harder to crush/extract) but the active molecule is unchanged.

## Source hierarchy

1. **FDA OxyContin approval (December 1995), reformulation approval (April 2010).**
2. **Purdue Pharma marketing materials** — well-documented in litigation discovery.
3. **CDC opioid prescribing data** — peak (around 2012) and subsequent decline.
4. **DEA ARCOS data** for oxycodone distribution by year.
5. **Patrick Radden Keefe, *Empire of Pain*** (2021) for cultural arc.
6. **Sackler family bankruptcy / Purdue settlement** documentation.

## Caveats

- This ticket is a *fit at the edge* of the project. OxyContin never had a "street name only" identity — it was always a prescription medicine. The rebrand axis here is *cultural meaning of the same drug over time*, not name change.
- Decision: include in wave 1 because Jason explicitly named "every drug." Flag in result that the arc fit is unusual.
- The 2010 abuse-deterrent reformulation paradoxically pushed users toward heroin and then fentanyl — the unintended-consequences part of the rebrand story is important.
- Public awareness of "OxyContin is oxycodone" is reasonably high — the brand-vs-generic relationship was widely covered during the crisis.

## Output format

Write result to `results/025-oxycodone-oxycontin.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- 1995 / 2010 approval years.
- Prescription volume trajectory through the crisis arc.
- Sackler-era marketing narrative covered briefly.
- Honest framing: this is an edge case for the project but Jason wanted breadth.
