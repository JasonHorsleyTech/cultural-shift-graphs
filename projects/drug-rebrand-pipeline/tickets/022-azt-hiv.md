# Ticket 022 — AZT (failed cancer drug → first HIV drug)

## Demon identity

Not a street drug. **AZT (azidothymidine, zidovudine)** was originally synthesized in 1964 by Jerome Horwitz at the Detroit Cancer Foundation as a potential anticancer drug. It failed for cancer — didn't show meaningful efficacy in animal tumor models — and was shelved for ~20 years.

## Medicine identity

**Retrovir** (zidovudine, AZT). FDA approved March 1987 for HIV/AIDS — the first antiretroviral therapy. Burroughs Wellcome (later GSK / ViiV Healthcare). Subsequently became part of combination ART. Brand name has receded as combination therapy dominates; generic zidovudine remains in WHO essential medicines.

## Arc type

`failed_medicine_rebranded`. The textbook "drug repositioning" case in medical history — failed cancer drug rescued for an entirely different disease 23 years later.

## Chemistry hypothesis

**Identical.** AZT in 1964 cancer trials and AZT in 1987 HIV trials is the same molecule. The new use depended on the discovery that retroviruses use reverse transcriptase, which AZT inhibits — knowledge that didn't exist in 1964.

## Source hierarchy

1. **Horwitz 1964 papers** on the original AZT synthesis.
2. **Mitsuya & Broder 1985** — the NCI work that identified AZT's antiretroviral activity.
3. **FDA Retrovir approval, March 1987.**
4. **Burroughs Wellcome historical materials** for the rapid-development story (AZT was approved on remarkably fast timeline given the AIDS crisis).
5. **AIDS activism history** (ACT UP, Larry Kramer) — pricing controversies around AZT.
6. **WHO HIV treatment guidelines** for current zidovudine role.

## Caveats

- This ticket has *political* depth around the AZT pricing controversy (Burroughs Wellcome charged ~$10k/year, one of the highest drug prices of the time). The rebrand-success metric should acknowledge both clinical success and pricing controversy.
- AZT monotherapy was effective short-term but resistance emerged quickly. Combination ART (post-1996) is where HIV treatment became durable. AZT-alone is no longer first-line.
- Public awareness: high awareness of "AZT for AIDS"; near-zero awareness that AZT was originally a failed cancer drug. The rebrand erased its origin completely.

## Output format

Write result to `results/022-azt-hiv.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- 1964 synthesis, 1985 antiretroviral discovery, 1987 FDA approval — timeline clear.
- ACT UP / pricing controversy covered as part of rebrand success/failure.
- Awareness % for "AZT was originally a cancer drug" — likely very low.
- WHO essential medicines current status.
