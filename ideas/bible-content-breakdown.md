# Bible Content Breakdown

## The question
What is the Bible actually about, measured verse-by-verse? Hypothesis: churches teach ~50% sexual morality, ~25% generosity/tithing, ~25% be a good person. The actual text is probably overwhelmingly genealogy, geography, census data, and civil law — with sexual behavior rules being maybe 5%.

## Bible version
New English Translation (NET) — Jason considers it the most accurate translation. Translation choice matters enormously (confirmed after rereading Genesis in NET).

## Granularity
Verse-by-verse categorization. Every verse in the Bible gets exactly one primary category.

## Categories (draft, needs workshopping)
- TBD, ~10-15 categories

## Graph vision
Interactive pie chart. Filterable by:
- Whole Bible
- Old Testament vs New Testament
- Individual book
- Maybe book groupings (Pentateuch, Gospels, Pauline epistles, etc.)

The punchline: you can see what percentage of Numbers is tax law vs "don't be gay."

## Technical decisions
- **Mode: manual.** This doesn't fit the one-ticket-per-cron-tick model. Jason runs it himself.
- **Translation: NET Bible.** Free JSON API at labs.bible.org/api/, no API key, verse-level markup out of the box. NRSVue is the academic gold standard but has no public API and a 500-verse fair-use limit. NET is defensible — Daniel Wallace (Dallas Theological Seminary) led the translation, the 60k translator notes are used as references by ESV/TNIV translators.
- **Data sourcing:** Download full NET Bible text as local JSON during explore phase. No network dependency per ticket.
- **Agent model:** Opus orchestrates per-book ticket, delegates chapters to Haiku sub-agents for categorization. Haiku is plenty for sentiment/topic classification.
- **Ticket structure:** One ticket per book (66 tickets). Opus delegates to Haiku within each ticket.

## Open questions
- What are the right categories? (Draft list of 12 proposed, needs workshopping)
- How to handle verses that span multiple categories? (Primary + secondary, or primary only?)
- Exact JSON schema for verse-level categorization output
