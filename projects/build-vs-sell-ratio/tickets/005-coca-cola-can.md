# Ticket 005 — Coca-Cola can

## Product

A 12oz can of Coca-Cola Classic.

## Parent company

The Coca-Cola Company (NYSE: KO) — the brand owner and concentrate manufacturer.

## Panel

consumer

## Segment to use

**Coca-Cola Co. consolidated.** Coca-Cola Co. is mostly a marketing-and-concentrate business; bottling is at independently-owned bottlers (Reyes Holdings, Coca-Cola Consolidated, Arca Continental, etc.). **The result will measure the brand owner's books, not the can in the consumer's hand.** This is a known systematic issue documented in `research/angle-02.md` fatal break #3 — capture it explicitly in the methodology notes.

## Source hierarchy

1. **Coca-Cola Co. FY2024 10-K** — revenue, COGS, SG&A, advertising expense (Coke breaks this out: typically ~$5B/yr).
2. **Coca-Cola earnings calls** for color on marketing intensity and bottler relationships.
3. **Coca-Cola Consolidated 10-K** (NASDAQ: COKE — the largest US bottler) for cost-structure of the bottling step, used as context (NOT folded into the primary number).
4. **Beverage Digest** for industry mix data.

## Specific caveats for this product

- **Crucial caveat to surface:** the parent-rubric build% will be high-ish (probably 60-70% per angle-01 napkin math) because Coca-Cola Co. is mostly cheap concentrate manufacturing plus marketing. The "consumer's $1" answer is very different — most of the can-cost is bottler/retailer. State this explicitly.
- Coca-Cola Co. discloses advertising expense (FASB compliance) — use the disclosed number, don't estimate.
- Distribution costs on Coca-Cola Co.'s books are concentrate-shipping to bottlers, not consumer-facing distribution. Counted as build per rubric.
- Capex: Coca-Cola Co.'s capex is mostly concentrate plants and a smaller bottling capacity (mostly divested over the past decade).

## Output format

`results/005-coca-cola-can.md` per spec. **Methodology notes must call out the parent-vs-can issue prominently.**

## What "good data" looks like

- Disclosed advertising expense from the 10-K cited directly.
- A clear methodology paragraph that says "this measures Coca-Cola Co.'s controllable spending; the can-in-hand cost structure is dominated by downstream bottlers/retailers we don't measure."
- Build_pct probably 55-70%.
- Confidence: **high** for the parent-rubric question, but the result must flag the framing limitation.
