# Ticket 023 — Amphetamine arc: Benzedrine → Obetrol → Adderall

## Demon identity

Multiple eras of amphetamine cultural identity:
- **1930s–1940s: Benzedrine inhaler** (Smith Kline & French, marketed from 1933 as a nasal decongestant). Widely abused; SK&F's own salesmen openly noted recreational use.
- **1950s–1960s: "Pep pills" / "diet pills"** (Dexedrine and others) — housewife-stimulant cultural moment, *Valley of the Dolls* era.
- **1960s–1970s: "Speed kills"** demonization, especially after FDA's 1971 reclassification of amphetamines to Schedule II.

## Medicine identity

Multiple medicine identities for the same drug class over time:
- **Benzedrine** (racemic amphetamine inhaler, 1933) — narcolepsy, ADHD predecessor (then called "hyperkinetic disorder"), depression.
- **Dexedrine** (dextroamphetamine, 1937 onward).
- **Obetrol** (mixed amphetamine + methamphetamine salts, Rexar Pharmaceutical, marketed 1960s as a diet pill). Withdrawn amid abuse concerns / Schedule II reclassification in 1973.
- **Adderall** (mixed amphetamine salts, FDA approved 1996 — see ticket 003). Richwood Pharmaceuticals literally bought Obetrol, removed the methamphetamine component, and relaunched the formula under the new brand name for ADHD.
- **Vyvanse** (lisdexamfetamine prodrug, 2007).

## Arc type

`both`. Amphetamine has been medicine → demonized → medicine repeatedly, with multiple brand identities cycling through over 90 years. Treat this ticket as the *historical-arc* version of the meth/Adderall story (ticket 003 covers the cultural recognition pair specifically).

## Chemistry hypothesis

Across the arc: **identical-to-sibling** depending on which formulation. Benzedrine = racemic amphetamine. Dexedrine = d-amphetamine. Obetrol = mixed AMP + methamphetamine salts. Adderall = mixed amphetamine salts (no methamphetamine). Vyvanse = lisdexamfetamine prodrug (converts to d-amphetamine in vivo). All same family; chemistry distinctions matter.

## Source hierarchy

1. **Nicolas Rasmussen, *On Speed: The Many Lives of Amphetamine*** (2008) — the definitive academic history.
2. **FDA approval history** for each brand: Benzedrine (1933), Dexedrine (1937), Obetrol (1960), Obetrol withdrawal (1973), Adderall NDA (1996), Vyvanse (2007).
3. **DEA scheduling history** — 1971 Schedule II reclassification is the inflection point.
4. **Smith Kline & French historical materials** for Benzedrine marketing.
5. **Rexar Pharmaceutical / Richwood Pharmaceutical** records for the Obetrol→Adderall transition.

## Caveats

- This is a *historical-arc* ticket, not a single-pair ticket. The data point for the graph should probably capture the *full arc* rather than a single rebrand event. Discuss with future ticket-004-meets-024 graph-design decision.
- The Obetrol→Adderall transition (1996) is the most concrete rebrand event — same formula minus the methamphetamine, new name, new indication branding. Worth capturing as the "anchor" rebrand year.
- Amphetamine has uniquely cycled through medicine → demon → medicine multiple times. The "rebrand lag" metric is weird here; consider tracking it as the most recent cycle (Obetrol 1973 withdrawal → Adderall 1996 launch = 23 years).

## Output format

Write result to `results/023-amphetamine-benzedrine-obetrol.md` using the YAML frontmatter and body sections specified in `plan.md`.

## What good data looks like

- Full timeline 1933 → 2007 captured.
- The Obetrol-to-Adderall transition treated as the key rebrand event.
- Honest framing of amphetamine's repeated cycling between medicine and demon.
- Source: Rasmussen 2008 is the best single secondary source for this arc.
