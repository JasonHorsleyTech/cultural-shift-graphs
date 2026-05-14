# Ticket 032 — Quaaludes / Methaqualone (null case: failed rebrand)

## Demon identity

Quaaludes (methaqualone). Cultural demonization peak: late 1970s as "ludes" became the canonical recreational sedative — disco culture, *The Wolf of Wall Street*–era excess. DEA moved methaqualone from Schedule II to Schedule I in 1984; US production ceased shortly after.

## Medicine identity

**Quaalude / Sopor / Mandrax** (methaqualone). Marketed from 1962 (originally synthesized in India 1951 for antimalarial purposes) as a non-barbiturate sleep aid. Sold under multiple brands globally. Widely abused; pulled from US market by 1984 with the Schedule I move.

No successful rebrand. Methaqualone has no current FDA-approved medical use. **This is a null case — the rebrand pipeline failed.**

## Arc type

`failed_medicine_rebranded` with no rebrand success. The "rebrand" was the demonization itself; the molecule never came back as a respectable medicine.

## Chemistry hypothesis

N/A — there is no current medicine identity to classify chemistry against. For the methaqualone-itself classification, it's a quinazolinone GABA-A positive modulator. Sibling/cousin candidates exist (mecloqualone, etaqualone — all also banned) but no successful rebrand within the family.

## Source hierarchy

1. **DEA methaqualone scheduling history** — Schedule II 1973, Schedule I 1984.
2. **FDA approvals and withdrawals** for quaalude products (1965–1984).
3. **Historical context** on barbiturate-alternative marketing of methaqualone.
4. **Why didn't it come back?** — peer-reviewed reviews on benzodiazepines outcompeting methaqualone as anxiolytics/sedatives.

## Caveats

- This is a **null case ticket** — important for project honesty. The graph needs failed rebrands to show that the rebrand pipeline isn't automatic.
- Methaqualone is still occasionally available illicitly in South Africa as "Mandrax" — flag this for international context.
- The honesty question: *why* did methaqualone fail to rebrand when so many others succeeded? Likely a mix of (a) benzodiazepines arrived with a cleaner safety profile and stole the market, and (b) the abuse profile was uniquely sticky. Research should attempt to answer this.

## Output format

Write result to `results/032-quaaludes-failed-rebrand.md` using the YAML frontmatter and body sections specified in `plan.md`.

- `medicine_year`: null
- `medicine_name`: null (or "none")
- `rebrand_success`: "failed"
- `chemical_relationship`: null (no rebrand pair)
- `arc_type`: "failed_medicine_rebranded"

## What good data looks like

- Clear null-case framing.
- 1962 launch / 1984 Schedule I move dates.
- Honest analysis of *why* the rebrand didn't happen — what made methaqualone different from drugs that did rebrand.
- The South Africa / Mandrax current international context noted.
