# Sermon vs Scripture

## The question
What do churches actually talk about vs what's actually in the Bible? Pull ~1,000 average US church sermons from YouTube (mid-sized channels, not megachurches), run the same topic categorization on the transcripts, and compare side-by-side with the Bible content breakdown.

## Angles
- Side-by-side pie charts: Bible content vs sermon content
- Which parts of the Bible go "unsermoned" — chapters/topics that never get preached
- Slice by denomination (weight by US church membership: ~25% Catholic, ~15% Southern Baptist, ~15% nondenominational, etc.)
- Could extend to the Quran — same categorization framework applied to a different holy text

## Data source
- YouTube Data API for sermon video discovery
- `youtube-transcript-api` (Python) for auto-generated transcripts
- Filter for mid-sized church channels (1k-50k subscribers)

## Depends on
- Bible content breakdown project (provides the categorization framework and baseline)
