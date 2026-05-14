# Ticket 020 — Methotrexate (chemotherapy → RA / psoriasis)

## Demon identity

Not a street drug. **Methotrexate** as a high-dose chemotherapy agent. Originally synthesized by Sidney Farber in 1947 (aminopterin first, then methotrexate by 1950). FDA approved for choriocarcinoma 1953, acute lymphoblastic leukemia 1953, mycosis fungoides 1969. High-dose chemo regimens have severe toxicity (mucositis, marrow suppression, hepatotoxicity) — "chemo" cultural baggage attaches to this molecule.

## Medicine identity

**Methotrexate at low dose** (typically 7.5–25 mg weekly) for autoimmune indications: FDA approved for psoriasis 1971, rheumatoid arthritis 1988. Now the global first-line DMARD for RA — one of the most widely prescribed antirheumatic drugs in the world. Brand names: Rheumatrex, Trexall, Otrexup (auto-injector), Rasuvo. Most prescribing is generic.

## Arc type

`failed_medicine_rebranded`. Same molecule, different dose, different indication. Not really "failed" — the chemo use continues — but the rebrand-as-different-medicine arc is textbook.

## Chemistry hypothesis

**Identical.** Methotrexate is methotrexate. The rebrand is purely dose + indication, not chemistry.

## Source hierarchy

1. **FDA approval letters** for chemo indications (1953) and psoriasis (1971), RA (1988).
2. **Sidney Farber's pediatric leukemia papers** (1947–1948) for the original development story.
3. **EULAR / ACR rheumatoid arthritis guidelines** showing methotrexate's first-line position.
4. **IQVIA data** for methotrexate prescription volume split between oncology and autoimmune indications.
5. **Patient surveys** if any exist on awareness that low-dose methotrexate is the same drug as high-dose chemo.

## Caveats

- This is a dose-and-indication rebrand of an *existing medicine*, not a street drug. Pattern fits the second arc.
- Patient awareness: many low-dose methotrexate patients explicitly don't realize they're taking chemo. Anecdotal but worth surveying.
- The toxicity profile at low dose is *meaningfully different* from high-dose chemo — the rebrand is real, not cosmetic. Honesty section should reflect this.
- Folate supplementation alongside low-dose MTX is a key safety adjustment that makes the rebrand work.

## Output format

Write result to `results/020-methotrexate-ra.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- 1953 / 1971 / 1988 approval years cited.
- Prescription volume split between chemo and autoimmune use.
- Honest framing: low-dose MTX is materially safer than high-dose, the rebrand isn't just marketing.
- Awareness % for "your psoriasis pill is the same drug as chemotherapy."
