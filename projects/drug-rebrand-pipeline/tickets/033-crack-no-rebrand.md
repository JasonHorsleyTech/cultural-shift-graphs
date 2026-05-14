# Ticket 033 — Crack cocaine (null case: no rebrand)

## Demon identity

Crack cocaine (rock, freebase). Cultural demonization peaked 1986–1992 — the "crack epidemic" moral panic, Len Bias (June 1986), Anti-Drug Abuse Acts of 1986 and 1988 (the infamous 100:1 sentencing disparity between crack and powder cocaine). One of the most intensely demonized drugs of the 20th century, with explicit racial dimensions in enforcement.

## Medicine identity

**None.** Crack is freebase cocaine — chemically identical to powder cocaine but smokable due to the freebase form. There has never been a medical use specifically for freebase/smokable cocaine. Topical cocaine HCl (powder cocaine medical use, see ticket 008) exists, but the "crack" form has never been rebranded.

## Arc type

`failed_medicine_rebranded` doesn't fit. This is more accurately a **null case for the "no rebrand was ever attempted"** category. Crack the cultural-identity is fading (cocaine use never went away but the smokable form has lost much of its 1980s prominence) but there's been no medicine arc for the freebase form specifically.

## Chemistry hypothesis

Crack and powder cocaine differ in *form* (free base vs. hydrochloride salt) but not in active molecule. The "demon" cultural identity attached to the smokable form, not the molecule. Medical cocaine HCl uses the salt form and is covered in ticket 008.

## Source hierarchy

1. **Anti-Drug Abuse Acts of 1986 and 1988** — sentencing history.
2. **Fair Sentencing Act of 2010** — reduced 100:1 disparity to 18:1.
3. **First Step Act of 2018** — retroactive application.
4. **CDC / SAMHSA data** on cocaine and crack use trajectories.
5. **Academic literature** on the racialization of crack demonization vs. powder cocaine.

## Caveats

- This is a **null case** — the value of the ticket is the contrast it provides for the rebrand-success arc. The graph needs cases where rebrand wasn't attempted at all, alongside successful rebrands (Adderall, ketamine therapy) and failed rebrands (Quaaludes, PCP).
- The 1980s crack demonization had explicit racial enforcement asymmetries (vs. powder cocaine). Honesty section should acknowledge that the *reasons* a rebrand never happened are intertwined with race and class, not just pharmacology.
- Crack the form is not banned per se — it's just cocaine in a particular preparation. Cocaine HCl medical use exists; freebase medical use does not.

## Output format

Write result to `results/033-crack-no-rebrand.md` using the YAML frontmatter and body sections specified in `plan.md`.

- `medicine_year`: null
- `medicine_name`: null (note powder cocaine HCl has separate medical use covered in ticket 008)
- `rebrand_success`: "failed" or "none_attempted"
- `arc_type`: edge case — propose new category if needed

## What good data looks like

- Null case clearly framed.
- 1986–1992 demonization era cited.
- 2010 Fair Sentencing Act / 2018 First Step Act covered.
- Honest framing of racial enforcement asymmetries and how they shape the "no rebrand was ever attempted" outcome.
