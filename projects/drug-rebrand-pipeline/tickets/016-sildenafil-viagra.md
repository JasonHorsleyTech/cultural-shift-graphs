# Ticket 016 — Sildenafil (failed heart drug → Viagra → Revatio)

## Demon identity

Not a street drug. The "demon" here is a failed cardiovascular drug indication — sildenafil citrate was developed by Pfizer in the early 1990s as a treatment for angina and hypertension. The cardiac trials underwhelmed; the side-effect of induced erections was the actual finding.

## Medicine identity

Two co-branded identities for the same molecule:
- **Viagra** (sildenafil 25/50/100 mg). FDA approved March 1998 for erectile dysfunction. Pfizer. The original blockbuster — and one of the most successful rebrands in pharma history.
- **Revatio** (sildenafil 20 mg). FDA approved June 2005 for pulmonary arterial hypertension. Same molecule, lower dose, different name, different indication. Pfizer kept the original cardiovascular indication alive at a different dose under a different brand.

## Arc type

`failed_medicine_rebranded`. Same molecule, completely different indication from the original cardiac development. The repurposing is the textbook "side effect became the product" case.

## Chemistry hypothesis

**Identical.** Sildenafil citrate in both Viagra and Revatio. PubChem and Pfizer label confirm. The only difference is dose and brand.

## Source hierarchy

1. **FDA approval letters** for Viagra (1998) and Revatio (2005).
2. **Pfizer historical publications** on sildenafil development — the original cardiac trials are documented.
3. **Pfizer earnings reports** for Viagra revenue trajectory (peak ~$2B/year before patent expiry 2012-2013).
4. **PAH treatment guidelines** showing Revatio's role.
5. **News and academic retrospectives** on Viagra's launch and cultural impact.

## Caveats

- This is the "demon" category only in the sense of "drug that failed its original purpose." Not a street drug. Mark in the result that this ticket fits the second arc, not the street-to-medicine one.
- The Viagra rebrand is often cited as the *most* commercially successful drug repurposing. The cultural-acceptance metric should be near-ceiling.
- Generic sildenafil (post-2017 in the US after Pfizer's patent extensions ran out) reduced Viagra brand dominance — note this in the rebrand success arc.

## Output format

Write result to `results/016-sildenafil-viagra.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- 1998 / 2005 FDA approval years cited.
- Viagra revenue trajectory (peak vs. current).
- Awareness % — likely near-saturation that Viagra exists; awareness that it was originally a heart drug is the more interesting number.
- Honest framing: this is the cleanest "repurposing success" in pharma history.
