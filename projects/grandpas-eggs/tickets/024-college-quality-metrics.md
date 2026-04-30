# State College — Quality Metrics Over Time 1960-2025

## What to research

Build time series for the key quality dimensions of the college experience at public four-year institutions from 1960 to 2025. This is NOT a price ticket — it provides context for the quality rubric and supports annotations on the graph.

## Metrics to collect

Collect as many of these as you can find longitudinal data for:

1. **Student-faculty ratio** at public 4-year institutions (NCES tracks this)
2. **Percentage of faculty who are full-time / tenure-track** (vs. adjunct/part-time)
3. **Instructional spending as percentage of total educational expenditures** (i.e., how much of each tuition dollar goes to instruction vs. administration, facilities, athletics)
4. **Administrative staff per 100 students** (or administrators-to-faculty ratio)
5. **6-year graduation/completion rate** at public 4-year institutions
6. **Average class size** or percentage of classes with <20 students (if available)

## Target data points

Every 5 years from 1960 to 2025. More frequent if the data supports it. These metrics change slowly — 5-year intervals are fine.

## Data source hierarchy

1. **NCES Digest of Education Statistics** — The primary source for most of these metrics. Historical tables go back decades.
2. **AAUP Annual Report on the Economic Status of the Profession** — Faculty composition, adjunct trends.
3. **Delta Cost Project (AIR/NCES)** — Spending breakdowns per student.
4. **IPEDS (Integrated Postsecondary Education Data System)** — The raw data behind NCES digests. More detailed but requires more work to extract.
5. **Academic studies** on administrative bloat, adjunctification, etc.

## Output format

Use a modified version of the Type 3 format:

```markdown
# State College — Quality Metrics

## Summary
[What's the story? Did quality improve, degrade, or is it mixed?]

## Data

### Student-Faculty Ratio
| Year | Ratio | Source | Confidence |
|------|-------|--------|------------|
...

### Full-Time Faculty Share
| Year | Percentage | Source | Confidence |
|------|------------|--------|------------|
...

[One table per metric]

## Methodology
[Sources and caveats for each metric]

## Sources
- [Full citations]

## Notes
[Which metrics show improvement? Which show degradation? Overall picture.]
```

## What "good data" looks like

- At least 3-4 of the 6 metrics with reasonable longitudinal coverage
- An honest bottom line: if most metrics improved (as expected), say so — the cost explosion happened alongside quality improvement, not instead of it
- Clear enough data that the graph phase could add quality-trend annotations to the college mini-chart
