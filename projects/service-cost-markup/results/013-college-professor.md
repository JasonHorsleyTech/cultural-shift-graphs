# Higher Education — College Professor

## Summary

The college professor's share of tuition revenue has collapsed from roughly 108% in 1970 to 46% in 2020 — a fall of more than half. In 1970, a full-time professor's salary alone exceeded the total tuition revenue their students generated (the gap was covered by state appropriations and endowments). By the mid-1980s, tuition revenue had overtaken salary, and the ratio has fallen steadily since. The sharpest decade of decline was the 1980s, when tuition surged while faculty salaries grew modestly. When you factor in that ~68% of college instruction is now delivered by adjuncts earning ~$3,500 per course, the share going to the person actually teaching the class drops to roughly 10%.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | $12,710 | $659 | tuition+fees/student/yr | 17.8 | 108.4 | med-high |
| 1975 | $16,659 | $917 | tuition+fees/student/yr | 17.5 | 103.8 | med |
| 1980 | $23,302 | $1,360 | tuition+fees/student/yr | 17.1 | 100.2 | med-high |
| 1985 | $32,392 | $2,310 | tuition+fees/student/yr | 16.8 | 83.5 | med |
| 1990 | $42,165 | $3,434 | tuition+fees/student/yr | 16.4 | 74.9 | med-high |
| 1995 | $49,309 | $4,881 | tuition+fees/student/yr | 15.4 | 65.6 | med |
| 2000 | $55,888 | $6,166 | tuition+fees/student/yr | 14.4 | 62.9 | med-high |
| 2005 | $66,172 | $8,421 | tuition+fees/student/yr | 14.3 | 54.9 | med |
| 2010 | $75,481 | $10,605 | tuition+fees/student/yr | 14.1 | 50.5 | med-high |
| 2015 | $82,224 | $13,092 | tuition+fees/student/yr | 13.4 | 46.9 | med |
| 2020 | $91,908 | $15,364 | tuition+fees/student/yr | 13.0 | 46.0 | med |

### By rank (benchmark years)

| Year | Full Professor Salary | Full Prof Ratio (%) | Assoc Prof Salary | Assoc Ratio (%) | Asst Prof Salary | Asst Ratio (%) |
|------|----------------------|--------------------|--------------------|-----------------|------------------|----------------|
| 1970 | $17,958 | 153.1 | $13,563 | 115.6 | $11,176 | 95.3 |
| 1980 | $30,753 | 132.2 | $23,214 | 99.8 | $18,901 | 81.3 |
| 1990 | $55,540 | 98.6 | $41,414 | 73.5 | $34,434 | 61.1 |
| 2000 | ~$75,000 | 84.5 | ~$55,000 | 61.9 | ~$46,000 | 51.8 |
| 2010 | $104,961 | 70.2 | $75,107 | 50.2 | $63,136 | 42.2 |
| 2020 | $127,767 | 64.0 | $90,341 | 45.2 | $77,903 | 39.0 |

### The adjunct reality

By 2020, approximately 68% of faculty appointments are contingent (adjunct or non-tenure-track). The typical adjunct earns ~$3,500 per course, teaching ~6 courses/year for roughly $21,000/year. Using adjunct compensation instead of full-time salary:

| Year | Adjunct Comp (est.) | Tuition Revenue/Worker | Adjunct Ratio (%) |
|------|--------------------|-----------------------|-------------------|
| 2000 | ~$15,000 | $88,790 | ~16.9 |
| 2010 | ~$18,000 | $149,531 | ~12.0 |
| 2020 | ~$21,000 | $199,732 | ~10.5 |

## Methodology

**Ratio formula:** Full-time faculty salary / (enrollment-weighted average tuition × student-to-faculty ratio)

**Worker compensation:** Average salary of all full-time instructional faculty on 9-month contracts, all institutions combined, all ranks. Source: NCES Digest of Education Statistics, Table 316.10 (1970-71 through 2020-21). For 1999-2000, sourced from NCES Table 235 (Digest 2002).

**Customer cost:** Published tuition and required fees (sticker price, not net-after-aid), enrollment-weighted average of 4-year public (75%) and 4-year private nonprofit (25%) institutions. The 75/25 split approximates the historical enrollment distribution at 4-year degree-granting institutions. Source: NCES Digest Table 330.10.

**Customers per worker:** Student-to-faculty ratio from NCES historical summary (Table 301.20), which includes all faculty (full-time and part-time). For non-benchmark years (1975, 1985, 1995, 2005, 2015, 2020), ratios are linearly interpolated between available NCES data points.

**Why this proxy?** Tuition is the direct, visible price the student pays. It excludes room & board (which aren't instructional costs) and excludes financial aid (we want the sticker price — what the institution charges, not what any individual student negotiates). The ratio captures: for every dollar in tuition revenue flowing past one faculty member, how many cents go to that faculty member's salary?

**Why ratios above 100% in early years?** In 1970, public university tuition was near-trivial ($358/year). State appropriations, not tuition, funded most of the university budget. A professor's salary alone exceeded the tuition their students paid — the state covered the gap. As states withdrew funding from the 1980s onward, tuition rose to fill the hole. By ~1980, tuition revenue caught up with faculty salary, and by 2020, tuition revenue per faculty member ($200K) dwarfs the average salary ($92K). The 62 percentage-point collapse doesn't mean professors earn less — it means vastly more of what students pay goes to things other than the professor.

**Known biases and limitations:**
- Faculty salary data covers all institutions (including 2-year) while tuition data is 4-year only. Including 2-year would lower both average salary and average tuition; effects partially cancel.
- The student-to-faculty ratio includes part-time faculty, but salary data is full-time only. This makes the ratio conservative — using full-time-only S:F ratios would show an even steeper collapse.
- The 75/25 public/private weighting is approximate. The actual split has shifted slightly toward private over the decades (~71% public in 1970 to ~65% in 2020). Using a time-varying weight would change absolute levels by a few percentage points but would not alter the trend.
- 2020-21 data may reflect early COVID impacts (enrollment dips, hiring freezes).
- 2000-01 rank-specific salaries are estimated from the all-ranks figure using proportional interpolation between 1995-96 and 2005-06 NCES data; marked with ~.

## Sources

- NCES Digest of Education Statistics, Table 316.10: Average salary of full-time instructional faculty on 9-month contracts, 1970-71 through 2020-21. https://nces.ed.gov/programs/digest/d21/tables/dt21_316.10.asp
- NCES Digest of Education Statistics, Table 330.10: Average undergraduate tuition, fees, room, and board rates, 1963-64 through 2022-23. https://nces.ed.gov/programs/digest/d23/tables/dt23_330.10.asp
- NCES Digest of Education Statistics, Table 301.20: Historical summary of faculty, enrollment, degrees conferred, and finances, 1869-70 through 2019-20. https://nces.ed.gov/programs/digest/d19/tables/dt19_301.20.asp
- NCES Digest of Education Statistics, Table 315.10: Number of faculty by employment status, 1970 through 2018. https://nces.ed.gov/programs/digest/d19/tables/dt19_315.10.asp
- NCES Digest of Education Statistics, Table 105.40: Number of faculty in degree-granting institutions, 1970 through 2030. https://nces.ed.gov/programs/digest/d21/tables/dt21_105.40.asp
- NCES Digest of Education Statistics, Table 235 (Digest 2002): Faculty salaries 1970-71 to 1999-2000. https://nces.ed.gov/programs/digest/d02/dt235.asp
- AAUP Faculty Compensation Survey: https://data.aaup.org/fcs-ft-faculty-salaries/
- AAUP Data Snapshot: Contingent Faculty in US Higher Ed (2018). https://www.aaup.org/sites/default/files/10112018%20Data%20Snapshot%20Tenure.pdf
- Inside Higher Ed: "New report says many adjuncts make less than $3,500 per course" (2020). https://www.insidehighered.com/news/2020/04/20/new-report-says-many-adjuncts-make-less-3500-course-and-25000-year
- Blue Book Diaries: "The Typical U.S. College Professor Makes $3,556 Per Course" (2021). https://bluebook.life/2021/08/07/the-typical-us-college-professor-makes-3556-per-course/

## Notes

- **This is the poster child for the project.** The collapse from 108% to 46% is one of the most dramatic on the graph. What makes it especially striking is that the ratio started ABOVE 100% — meaning tuition didn't even cover the professor. The entire decline represents tuition outpacing salary while simultaneously losing its connection to instruction.
- **The adjunctification angle is devastating.** The full-time faculty ratio (46%) already tells a bad story, but the real teaching workforce is increasingly adjuncts. When 68% of instruction is delivered by people earning ~$21K/year, and tuition revenue per faculty position is ~$200K, only about 10% reaches the person in the classroom. The other 90% goes to administration, facilities, student services, athletics, and institutional overhead.
- **Administrative bloat is the primary absorber.** Administrator-to-student ratios roughly doubled from ~1:84 in 1975 to ~1:68 by the 2010s, while professor-to-student ratios barely changed. The number of non-faculty professional staff at universities grew 369% between 1976 and 2018, compared to 150% growth in faculty.
- **State funding withdrawal is the catalyst.** State appropriations per student at public universities fell roughly 30% in real terms between 1990 and 2020. Tuition rose to backfill, but the new revenue didn't flow proportionally to instruction — it funded the institutional expansion that state money had previously constrained.
- **The 1980s were the inflection decade.** The ratio dropped 17 points (100% → 84%) between 1980 and 1985 alone. This aligns with the beginning of aggressive tuition increases at both public and private institutions, driven by the expansion of federal student loan programs (the "Bennett Hypothesis" that aid availability enables tuition inflation).
- **For the graph:** The "all faculty" line (108% → 46%) should be the primary line. Optionally overlay the full professor line (153% → 64%) and assistant professor line (95% → 39%) to show rank divergence. The adjunct line (est. ~17% → ~10%) could be a powerful addition if other industries also track contingent/gig workers.

<!-- COMPLETE -->
