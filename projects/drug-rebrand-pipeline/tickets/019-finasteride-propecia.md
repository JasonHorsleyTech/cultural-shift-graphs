# Ticket 019 — Finasteride (Proscar → Propecia)

## Demon identity

Not a street drug. **Proscar** (finasteride 5 mg). FDA approved 1992 for benign prostatic hyperplasia. Merck. No demonization era — boring third-tier urology drug.

## Medicine identity

**Propecia** (finasteride 1 mg). FDA approved December 1997 for androgenetic alopecia (male pattern baldness). Same molecule, one-fifth the dose, different brand, different indication. Merck's evergreening play — explicitly developed after observing hair regrowth in BPH trial subjects.

## Arc type

`failed_medicine_rebranded`. Same-molecule, different-indication repurposing.

## Chemistry hypothesis

**Identical.** Finasteride in both. Just a dose difference (5 mg vs. 1 mg) and brand split. PubChem confirms.

## Source hierarchy

1. **FDA approval letters** for Proscar (1992) and Propecia (1997).
2. **Merck historical materials** for the BPH-to-hair-loss discovery story.
3. **IQVIA data** for finasteride prescription split between BPH and hair-loss indications.
4. **Recent literature on post-finasteride syndrome (PFS)** — the controversial side-effect profile that has dogged the drug.

## Caveats

- Post-finasteride syndrome is a real-but-contested adverse-event cluster (sexual side effects persisting after discontinuation). The honesty section should acknowledge this — the rebrand isn't as clean as Viagra's.
- Dutasteride (Avodart, sibling 5-alpha-reductase inhibitor) is the next-molecule-over case. Worth a brief mention.
- Awareness that Propecia and Proscar are the same drug is essentially zero outside clinical circles.

## Output format

Write result to `results/019-finasteride-propecia.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- 1992 / 1997 approval years cited.
- Honest treatment of PFS controversy in the honesty section.
- Awareness % marked low-confidence; this is a low-recognition rebrand pair.
