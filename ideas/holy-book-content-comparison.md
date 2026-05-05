# Holy Book Content Comparison

Compare and contrast the actual contents of major religious texts using AI-scored verse-by-verse categorization. We already have the Bible scored (bible-content-breakdown project, ~$30 of Haiku tokens). Do the same for the Quran, and potentially Buddhist/Hindu texts, then graph them side by side.

## The core insight

The current Bible scoring schema is too Bible-specific and mixes form with topic. For cross-religion comparison, we need a two-axis system:

**Axis 1 — Form** (what is the text DOING?): narrative, law/command, wisdom/teaching, poetry/hymn, prophecy/vision, catalog/list, dialogue (teacher-student exchange — huge in Buddhism/Hinduism/Gospels)

**Axis 2 — Topic** (what is the text ABOUT?): worship/devotion, warfare/violence, sex/body, food/purity, death/afterlife, justice/punishment, mercy/compassion, creation/cosmology, inner life (meditation/prayer/discipline), social order, outsiders/other religions, nature of the divine

## Sex-positive vs sex-negative is CRITICAL

Do NOT lump Song of Solomon and Leviticus 18 together. Song of Solomon is a straight-up celebration of sex — "I want to climb the palm tree and grab the fruit" is about touching your wife's breasts. Leviticus is prohibition — who you shall not fuck. These are opposite stances on the same topic.

Jason's experience: growing up in church, sex was ALWAYS punitive, ALWAYS a mistake, all about the Virgin Mary's purity. Nobody taught Song of Solomon in Sunday school. The discovery that the OT has this huge sex-positive chunk is genuinely surprising to most churchgoers. That contrast needs to show up in the data.

So wherever sex appears, we need a stance dimension: celebration/positive vs prohibition/negative vs neutral description. This might apply to other topics too (violence celebrated vs condemned, etc.) but sex is where the current schema most obviously fails. Haiku scored Song of Solomon 7:7-8 ("I climb the palm tree, your breasts are like clusters of grapes") as pure `poetry_praise` with zero sexual tagging. Because the category was "sexual & marital RULES" and SoS isn't a rule. The category definition itself excluded the most interesting data.

## What graphs this enables

- "What's in your holy book?" — stacked bar by form across religions
- Violence as % of text across religions (people have STRONG priors, graph either confirms or destroys them)
- Sex-positive vs sex-negative content by religion (Bible might be the only one with significant celebration)
- Afterlife focus by religion (Quran and Buddhism would tower over the OT)
- "How much does your religion talk about outsiders?" — guaranteed argument-starter
- Mercy vs punishment ratio across religions
- Inner life / contemplation — Buddhism dominates, Bible is light

## Practical notes

- Bible cost ~$30 of Haiku tokens to process. Quran is shorter, maybe $15-20.
- Could optimize token use: shorter field names in the schema (e.g. not spelling out "function" every time), tighter TypeScript definitions
- Need to re-score the Bible too with the new categories (the existing scoring is useless for this since the categories are different)
- Each holy book's verses need a source text in a consistent format (we have the Bible already parsed into JSON by chapter)
- This is separate from the sermon-vs-scripture idea (what churches teach vs what's actually in the Bible)

## Open questions

- Which religions to include? Bible, Quran are obvious. Bhagavad Gita? Pali Canon (Buddhist)? Book of Mormon? Guru Granth Sahib?
- How to handle texts that aren't verse-structured? Buddhist sutras are dialogues, not numbered verses.
- Is two-axis scoring (form + topic) enough, or do we need a third axis for stance (positive/negative/neutral)?
- How to normalize for text length when comparing? (Bible is ~31k verses, Quran is ~6k ayahs)
