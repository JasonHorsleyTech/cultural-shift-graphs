# Ticket 014 — PCP → Ketamine (the cousin that survived)

## Demon identity

PCP (phencyclidine, angel dust, sherm, wet). Schedule II from 1978 (originally Schedule III). Cultural demonization peaked in the 1980s with the "superhuman strength" panic — myths about PCP users having superhuman strength, immunity to pain, etc., partially overlapping with the crack-era moral panic. PCP-related ER visits peaked late 1970s / early 1980s. By 2000s, recreational PCP use had collapsed in the US.

## Medicine identity

PCP itself: **failed rebrand**. Originally synthesized at Parke-Davis in 1956 (as Sernyl), marketed briefly as a human anesthetic in the late 1950s. Withdrawn from human use by 1965 due to severe emergence reactions (delirium, hallucinations on emergence from anesthesia). Continued as a veterinary anesthetic (Sernylan) until 1978. No human medical use today.

**Ketamine** (see ticket 005) is PCP's cousin — synthesized specifically as a shorter-acting, less-disruptive PCP analog. Ketamine survived as both a human and veterinary anesthetic and later got the depression rebrand. So the molecular family branched: PCP got demonized and died medically; ketamine got demonized lighter and rebranded successfully.

## Arc type

`failed_medicine_rebranded` (for PCP itself, with no successful rebrand). Plus context: this ticket is also a *case study in why some rebrands fail* — the cousin survived (ketamine), the original didn't (PCP).

## Chemistry hypothesis

- PCP itself: no current medicine, so no rebrand-pair classification needed.
- PCP ↔ Ketamine relationship: **sibling-to-cousin**. Both are arylcyclohexylamines, both NMDA receptor antagonists, similar mechanism. Ketamine has a shorter duration and milder emergence reactions, which is why it survived clinical use. Mark this as a *meta-relationship* in the ticket — it's important to the rebrand-success story even though PCP itself has no current medicine name.

## Source hierarchy

1. **Parke-Davis Sernyl marketing materials (1957–1965)** — historical primary source for the original medical use.
2. **FDA withdrawal documentation** for PCP human use.
3. **DEA scheduling history** for PCP and ketamine.
4. **Ketamine development history** (Parke-Davis, Stevens 1962, Domino & Corssen 1965) — explicitly framed as a PCP improvement.
5. **DAWN (Drug Abuse Warning Network) data** for PCP ER visits over time — demon-era signals.
6. **Academic literature** on NMDA antagonist development and the failure of PCP.

## Caveats

- PCP is a *null case* in the rebrand success metric. It's important to the graph for the honesty story — not every demon drug gets the Adderall treatment.
- The PCP-to-ketamine genealogy is the project's clearest example of "successful rebrand of the *next molecule over*." Useful for explaining why some rebrands work (better pharmacokinetics) and some don't (PCP's emergence reactions were unmanageable).
- PCP street use has largely disappeared in the US, so even the "demon" half is fading culturally. Awareness of the name remains high but the current cultural footprint is small.

## Output format

Write result to `results/014-pcp-ketamine-cousin.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Clear `failed_medicine_rebranded` classification for PCP itself with `medicine_year: null` for any rebrand.
- The PCP-ketamine genealogy explained with chemistry.
- DAWN data for PCP ER visit trajectory (peak and decline).
- Honesty framing of "the cousin made it; the original didn't."
