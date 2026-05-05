# Ticket 032: Saccharin → Cancer (False Positive)

## Objective

Research the timeline of saccharin's regulatory history as a FALSE POSITIVE case — science initially suggested saccharin caused cancer, regulation followed, then the science was retracted and regulation was reversed. This is the dataset's CONTROL CASE for what happens when science gets it wrong.

## What to research

1. **Early evidence date** — Rat studies in the early 1970s (particularly the 1970 Wisconsin Alumni Research Foundation study and subsequent NCI studies) showed saccharin caused bladder cancer in rats at high doses. The mechanism was later found to be rat-specific (related to sodium saccharin forming crystals in rat urine, which doesn't occur in humans).

2. **Regulatory action** — Congress passed a saccharin warning label requirement in 1977 (Saccharin Study and Labeling Act) after FDA proposed banning it. The label stated: "Use of this product may be hazardous to your health. This product contains saccharin, which has been determined to cause cancer in laboratory animals." Timeline of the label requirement?

3. **Science reversal** — When did the scientific consensus shift from "possibly carcinogenic" to "not carcinogenic in humans"? IARC downgraded saccharin from Group 2B (1987 listing) to Group 3 ("not classifiable") in 1999. NTP delisted saccharin from the Report on Carcinogens in 2000.

4. **Regulatory reversal** — Warning labels were removed in 2000 (SWEETEST Act / saccharin warning elimination). The full cycle: evidence (1970s) → warning labels (1977) → science reversal (late 1990s) → label removal (2000).

5. **What this case reveals** — The lag from "bad science" to regulation was ~7 years (1970 → 1977). The lag from "science corrected" to regulation reversal was ~1 year (1999 → 2000). Society acted on BAD science faster than it acts on GOOD science for many hazards. Why?

6. **Context** — Congress prevented FDA from banning saccharin outright because of public outcry (dieters didn't want to lose their sweetener). The label requirement was a compromise. This shows public demand pushing back against regulation.

## Where to look

1. Saccharin Study and Labeling Act (1977)
2. SWEETEST Act / saccharin label removal legislation (2000)
3. NTP Report on Carcinogens — saccharin delisting (2000)
4. IARC Monographs — saccharin classification history
5. Cohen et al. — studies demonstrating the rat-specific bladder cancer mechanism
6. FDA history of saccharin regulatory actions

## Output format

Use the result file format from plan.md. Fill in all fields. Use the following special handling:

- **early_evidence_year:** Year of rat cancer studies (this is the "false alarm" evidence)
- **consensus_year:** Year of the false consensus (when a major body classified saccharin as potentially carcinogenic)
- **first_regulation_year:** Year of the warning label requirement
- **Notes MUST document:** This is a false positive case. The evidence was later retracted, IARC downgraded the classification, NTP delisted, and warning labels were removed. Include the REVERSAL dates prominently.

## What "good data" looks like

- The complete arc: evidence → regulation → science corrected → regulation reversed
- Specific dates for IARC classification AND downgrade
- NTP listing AND delisting dates
- Congressional action for both the warning label (1977) and its removal (2000)
- Analysis of WHY the false-positive lag was fast (~7 years) compared to many true-positive cases

## Known pitfalls

- Saccharin was never actually BANNED in the US — FDA proposed a ban but Congress intervened. The regulatory action was warning labels, not prohibition. Be precise.
- The "evidence" was valid for rats but not humans. This is not "fraud" or "bad science" — it's a legitimate result that didn't translate across species. Frame it as a false positive, not scientific misconduct.
- Category: This doesn't fit cleanly. Use "substance-ban" since the intended regulation was a ban (even though the actual action was labeling). Or consider creating a special annotation for false positive cases.
- This is the only case in the dataset where the regulatory direction REVERSED. This makes it valuable as a comparison point but structurally different from all other cases.
