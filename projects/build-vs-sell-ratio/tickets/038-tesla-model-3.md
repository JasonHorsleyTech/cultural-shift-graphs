# Ticket 038 — Tesla Model 3

## Product

A Tesla Model 3.

## Parent company

Tesla Inc. (NASDAQ: TSLA).

## Panel

consumer

## Segment to use

**Tesla Automotive segment.** Tesla reports Automotive (sales + leasing) and Energy generation/storage. Use Automotive only. Tesla doesn't have a separate finco at material scale (Tesla Financial Services exists but is small and integrated).

## Source hierarchy

1. **Tesla FY2024 10-K** — segment reporting, R&D explicitly disclosed.
2. **Tesla earnings calls and shareholder letters** — Tesla discloses unit volumes and ASP by quarter.
3. **InsideEVs / Electrek** for category context.

## Specific caveats for this product

- **Apples-to-oranges with Toyota/Ford:** Tesla is direct-sale (no franchised dealers). Tesla's books include the dealership-equivalent function (showrooms/galleries, online sales). So Tesla's cost structure is *more vertically integrated* than Toyota's. **Per `research/angle-02.md`**, this means Tesla's build% will look LOWER than Toyota's not because Tesla spends more on sell, but because Toyota's sell happens at a separate (invisible) dealer entity. Surface this in methodology notes prominently.
- Tesla showrooms: retail real estate → sell per rubric. Material number for Tesla.
- Tesla famously had near-zero traditional advertising for years, but has begun spending in 2023-2024. Note the year of measurement.
- Tesla's R&D is significant (Autopilot/FSD, manufacturing innovation, robotics) — counted as build per rubric.
- Service centers → build (gut test: stop spending, existing cars don't get serviced).
- Supercharger network is partially open to other EVs now — separate revenue line; treat thoughtfully.

## Output format

`results/038-tesla-model-3.md` per spec. **Methodology must explain the vertical-integration apples-to-oranges issue.**

## What "good data" looks like

- Automotive segment financials cited.
- Build_pct probably 80-90% — but explicitly lower than Toyota due to integrated retail; explained, not glossed.
- Confidence: **high**.
