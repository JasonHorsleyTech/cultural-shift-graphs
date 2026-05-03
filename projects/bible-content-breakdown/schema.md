# Bible Content Breakdown — Output Schema

## Per-chapter JSON output

Each Haiku call processes one chapter and produces a JSON file with this structure:

```json
{
  "book": "Genesis",
  "chapter": 1,
  "verses": [
    {
      "ref": "Gen 1:1",
      "function": "narrative"
    },
    {
      "ref": "Gen 6:15",
      "function": "specifications",
      "secondary": { "function": "narrative", "weight": 0.3 }
    }
  ],
  "stories": [
    {
      "name": "Creation of the World",
      "start": "Gen 1:1",
      "end": "Gen 2:3",
      "continues_from_previous": false,
      "continues_in_next": true,
      "morals": [
        { "theme": "gods_power", "weight": 2.0 },
        { "theme": "obey_god", "weight": 0.5 }
      ]
    }
  ]
}
```

## Verse function categories

Every verse gets a primary `function` (required). If the verse genuinely straddles two categories, add an optional `secondary` object with its own `function` and a `weight` (0.1–0.9) indicating how much of the verse it represents. Most verses won't need a secondary — only use it when forcing a single label would be dishonest.

Categories:

| Key | Label | Description |
|-----|-------|-------------|
| `narrative` | Narrative | Tells you what happened — events, actions, dialogue, "and then..." |
| `catalog` | Catalog | Genealogies, census data, tribal lists, ages, travel itineraries, lists of names/officials |
| `specifications` | Specifications | Dimensions, construction details, quantities, materials, measurements |
| `ritual_instruction` | Ritual instruction | How to sacrifice, which animal, what to do with blood, priestly garments, festival procedures |
| `civil_law` | Civil/criminal law | Property, debt, punishment, slavery regulations, judicial procedure, inheritance |
| `purity_dietary` | Purity & dietary | Clean/unclean animals, skin disease, bodily discharge, contamination, food laws |
| `sexual_marital` | Sexual & marital rules | Marriage, divorce, sexual prohibitions, gender roles |
| `moral_instruction` | Moral instruction | How to treat people — generosity, justice, honesty, compassion (non-sexual ethics) |
| `wisdom` | Wisdom saying | Practical observations about life, pithy advice, proverbs |
| `poetry_praise` | Poetry & praise | Songs, hymns, laments, worship expression, love poetry |
| `prophecy` | Prophecy | Visions, oracles against nations, predictions, apocalyptic imagery, blessings/curses about the future |
| `theological` | Theological teaching | Claims about God's nature, salvation, faith, doctrine, covenants |

## Story moral themes

Each story gets 1–3 morals. Each moral has an optional weight (default 1.0). Use weight > 1 when a theme is THE point of the story (e.g., 2.0). Use weight < 1 when it's present but secondary (e.g., 0.5).

| Key | Label | Description |
|-----|-------|-------------|
| `obey_god` | Obey God | Do what God says, or face consequences |
| `faith_trust` | Faith / trust | Believe and trust even when it doesn't make sense |
| `courage` | Courage | Stand up, face danger, act despite fear |
| `humility` | Humility | Don't be proud; the mighty fall, the lowly are lifted |
| `justice` | Justice / fairness | Treat people fairly, uphold what's right |
| `mercy` | Mercy / compassion | Show kindness, forgive, care for others' suffering |
| `generosity` | Generosity | Give freely, share what you have |
| `loyalty` | Loyalty / faithfulness | Stay true to your commitments and relationships |
| `consequences` | Consequences of sin | Bad choices lead to bad outcomes |
| `redemption` | Redemption / second chances | People and situations can be restored |
| `sexual_purity` | Sexual purity | Sexual behavior matters and has consequences |
| `gods_power` | God's power | God is mighty, sovereign, in control |
| `sacrifice` | Sacrifice / selflessness | Give up something valuable for a greater purpose |
| `care_vulnerable` | Care for the vulnerable | Protect widows, orphans, foreigners, the poor |
| `hypocrisy` | Hypocrisy | Don't say one thing and do another |

## Story continuity across chapters

Stories often span chapters. Each story segment in a chapter includes:
- `continues_from_previous: true` if this story was already in progress from the prior chapter
- `continues_in_next: true` if this story continues into the next chapter
- Use the SAME `name` for the same story across chapters (e.g., "Noah and the Flood" in chapters 6, 7, 8, and 9)

After all chapters of a book are processed, story segments with matching names get merged into complete stories.
