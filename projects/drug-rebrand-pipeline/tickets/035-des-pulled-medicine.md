# Ticket 035 — DES / Diethylstilbestrol (null case: scandal-then-mostly-pulled)

## Demon identity

DES (diethylstilbestrol) — synthetic non-steroidal estrogen. Originally synthesized 1938 (Dodds). Widely prescribed from the 1940s through the 1971 to pregnant women to prevent miscarriage. Linked in 1971 (Herbst et al., *NEJM*) to clear-cell adenocarcinoma of the vagina and cervix in daughters of treated women ("DES daughters"). Subsequent recognition of reproductive abnormalities in DES sons and daughters. The cultural shock of a routinely-prescribed prenatal drug causing cancer in the next generation. FDA contraindicated DES for pregnancy use in 1971.

## Medicine identity

DES *partially* survived for non-pregnancy indications:
- **Stilphostrol** (DES diphosphate) — used in advanced prostate cancer treatment for decades; largely replaced by GnRH agonists by the 2000s but technically still around in some jurisdictions.
- **Off-label estrogen use** for various indications — substantially replaced by other estrogens (conjugated equine estrogens / Premarin, estradiol products).

But the dominant cultural identity of DES is the scandal, not the rebrand. **Effectively a failed/null rebrand case.**

## Arc type

`failed_medicine_rebranded`. The original medical use was scandalous; the rebrand into prostate-cancer treatment was niche and is now largely abandoned.

## Chemistry hypothesis

**Identical** for what little DES use remains. The molecule didn't change; the indications did.

## Source hierarchy

1. **Herbst, Ulfelder, Poskanzer 1971 *NEJM* paper** — the foundational connection to cancer.
2. **FDA contraindication for pregnancy use (1971).**
3. **CDC DES Update materials** — public-health follow-up on DES daughters/sons.
4. **Historical urology / prostate cancer guidelines** for the Stilphostrol arc.
5. **Academic history-of-medicine literature** on DES — a well-studied case.

## Caveats

- Like thalidomide (ticket 015), DES is a famous pharma scandal where the same molecule had a later medical use. But unlike thalidomide, DES's rebrand into prostate cancer was modest and is now mostly displaced. This is the *failed* version of the thalidomide arc.
- The cultural meaning of "DES" remains the original scandal, even though the prostate-cancer use technically existed. Honest framing matters here.
- Public awareness of DES the molecule has faded — younger Americans largely don't recognize it. The demon identity is itself fading.

## Output format

Write result to `results/035-des-pulled-medicine.md` using the YAML frontmatter and body sections specified in `plan.md`.

- `rebrand_success`: "low" or "failed"
- `arc_type`: "failed_medicine_rebranded"

## What good data looks like

- 1938 synthesis, 1940s–1971 pregnancy use, 1971 NEJM paper / FDA contraindication.
- Stilphostrol / prostate cancer secondary use covered.
- Honest framing: this is the *anti-thalidomide* case — same shape, different outcome.
- Awareness % marked low-confidence; this drug is fading from cultural memory.
