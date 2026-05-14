# Ticket 017 — Minoxidil (BP drug → Rogaine)

## Demon identity

Not a street drug. The "demon" here is again the failed-cardiovascular-original: minoxidil was developed as a vasodilator for severe hypertension. Brand name **Loniten** (Upjohn, FDA approved 1979 for hypertension refractory to other treatments). The side effect noticed in hypertension trials: hypertrichosis — patients grew hair on their bodies.

## Medicine identity

**Rogaine** (minoxidil topical solution, originally 2%, later 5%). FDA approved August 1988 as a prescription product for androgenetic alopecia; switched to OTC in 1996. Upjohn (later Pharmacia & Upjohn, now Pfizer; Rogaine brand currently Johnson & Johnson). Plus **Women's Rogaine** (1991/1996), **foam formulations** (2006), **oral minoxidil low-dose** (off-label, exploded in popularity 2018+ for hair loss).

## Arc type

`failed_medicine_rebranded`. Same molecule, completely different indication (hypertension → hair loss).

## Chemistry hypothesis

**Identical.** Minoxidil in both Loniten and Rogaine. Different formulation (oral tablet vs. topical solution) and different dose, but the active molecule is the same. PubChem confirms.

Note that oral low-dose minoxidil for hair loss (off-label) is a recent twist — same drug as Loniten just at smaller doses. Worth flagging.

## Source hierarchy

1. **FDA approval letters** for Loniten (1979) and Rogaine prescription (1988) and OTC switch (1996).
2. **Upjohn historical materials** for the discovery story (hypertrichosis side effect).
3. **Recent dermatology literature** on oral low-dose minoxidil (post-2017 surge).
4. **Pfizer / J&J historical product data** for Rogaine sales trajectory.

## Caveats

- The "demon" framing is weak here — Loniten wasn't a scandal, it was just a niche third-line antihypertensive. This is more of a "boring drug becomes famous" rebrand than a "scary drug becomes medicine" rebrand. Reflect this in the result.
- Oral low-dose minoxidil (off-label hair-loss prescription) is essentially Loniten-the-original-drug being repurposed *back* at a smaller dose for hair loss. Wild full-circle moment.

## Output format

Write result to `results/017-minoxidil-rogaine.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- 1979 / 1988 / 1996 approval years.
- Mention of recent oral low-dose minoxidil prescribing surge.
- Awareness % — Rogaine brand recognition is near-saturation; awareness of original BP indication is the interesting number.
