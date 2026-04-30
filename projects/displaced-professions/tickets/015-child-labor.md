# Ticket 015: Child Laborers (Regulatory Abolition)

## Event
The elimination of child labor in the US and UK through progressive regulation, ~1900s–1930s. A gradual regulatory shock — multiple laws over decades rather than a single ban — that removed millions of children from the workforce.

## Mechanism
**Discrete shock** (regulatory)

## What to Research

### Workforce Timeline
Track child labor rates in the US and/or UK from ~1880 to ~1940:

- US: 1880 Census showed ~1.1 million children (10–15) "gainfully employed." By 1900: ~1.75 million (18% of children 10–15). By 1930: sharply reduced. By 1940: negligible.
- Key US legislation: Keating-Owen Act (1916, struck down 1918), child labor tax (1919, struck down 1922), Fair Labor Standards Act (1938 — the one that stuck)
- Key UK legislation: Factory Acts (1833 onward), Education Act (1880), Prevention of Cruelty to Children Act (1889)
- Industries: textiles (mills), agriculture, mining, domestic service, street trades (newsboys, bootblacks)

**Source hierarchy:**
1. US Census data 1880–1940 (child employment rates via IPUMS)
2. Hindman, "Child Labor: An American History" (2002)
3. National Child Labor Committee records and Lewis Hine photographs documentation
4. UK Parliamentary Papers on child labor
5. Nardinelli, "Child Labor and the Industrial Revolution" (1990)
6. Historical Statistics of the United States

### Income Data
**Known caveats:** Children's wages are not comparable to adult displaced-worker income. Use different metrics:

- Child employment rates as the primary metric (% of children 10–15 employed)
- School enrollment rates as the inverse metric
- Children's wages relative to adult wages in the same industry (children typically earned 25–50% of adult wages)
- Family income impact: many families depended on child wages — what happened to household income when children were removed from the workforce?

**Source hierarchy:**
1. Census data on child employment and school enrollment
2. Moehling, "State Child Labor Laws and the Decline of Child Labor" (1999)
3. Goldin & Katz, "The Race between Education and Technology" (2008)

### Where They Went
This is unique in the dataset — the "displaced workers" went to school:
- School enrollment (compulsory education laws paired with child labor laws)
- Home / family duties
- Some shifted to unregulated sectors (agriculture was exempted from many early laws)
- Street trades were hardest to regulate

**Source hierarchy:**
1. Census school enrollment data 1880–1940
2. State-level compulsory education laws timeline
3. Hindman (2002)

### Foresight Stories
- **Adapters:** Families that invested in children's education early, reaping returns a generation later. Industries that mechanized to replace child workers.
- **False movers:** The Keating-Owen Act (1916) — passed, enforced, relied upon, then struck down by the Supreme Court in Hammer v. Dagenhart (1918). Families that pulled children from work were suddenly unprotected.
- **Deniers:** Mill owners who argued children's "nimble fingers" were essential. Parents who argued they needed the income. Specific quotes from Congressional testimony.
- **Survival pattern:** For families: access to alternative income. For industries: mechanization.

### Unique Texture
- Lewis Hine's photographs — the most powerful visual documentation of any displacement in this dataset
- The constitutional battle: two federal laws struck down before FLSA succeeded. The child labor amendment (proposed 1924) was never ratified.
- Children in coal mines — breaker boys picking slate, some as young as 8
- The "family economy" argument — was banning child labor a net positive or negative for poor families in the short term?
- Agriculture exemption: child farm labor remains legal and common in the US today

## What Good Data Looks Like
- Child employment rates (% of children 10–15) at each decennial census from 1880–1940
- School enrollment rates over the same period (inverse metric)
- Breakdown by industry (textiles, mining, agriculture, domestic, street trades)
- Timeline of legislation (state + federal) with enforcement dates
- Family income impact data if available

## Result Format
Follow the template in `plan.md` exactly. Save to `results/015-child-labor.md`.
