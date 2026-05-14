# Plan: Simultaneous With Friends

## Constants (every ticket uses these)

- **N_friends = 50** — close friends, Dunbar's "good friends" tier
- **N_best = 1** — your single best friend
- **Lifetime = 70 years = 2.208 × 10⁹ seconds**
- **Active waking hours = 16/day** (unless overridden — e.g. dreaming uses sleep hours)
- **Assume same time zone** for friend group (otherwise clustering math falls apart)

## Math model

### Repeatable activities (sneeze, fart, etc.)

Let:
- `f_day` = activity rate per person per day (during the active window)
- `h` = effective active window in hours/day (when the act *could* happen)
- `d` = duration of one instance, in seconds
- `r = f_day / (h × 3600)` — rate per second during the active window

Probability of overlap during ONE of your acts with a single friend ≈ `2 × r × d` (Poisson approximation: friend has a start within ±d of yours).

Expected wall-clock time between simultaneous overlaps with N friends:

```
t_overlap = (24 / h) × 1 / (2 × r² × d × N)   [seconds]
```

The `(24 / h)` factor scales active-window time to wall-clock time.

### Time-clustered activities (brushing teeth, sex)

Use a tight `h` — the cluster window where most acts actually happen. Brushing teeth happens in roughly two 30-min windows daily, so effective `h ≈ 1`. This dramatically compresses the time-between-overlaps because everyone clusters together.

### Lifetime-rare events (arrest, ambulance, locked-out)

Let:
- `C` = lifetime count per person
- `L` = lifetime in seconds (2.208 × 10⁹)

Expected number of simultaneous-overlap events across a lifetime, with N friends:

```
E[overlap] = 2 × N × C² × d / L
```

If `E[overlap] < 1`, report as percentage of lifetime ("0.6% chance you're ever simultaneously arrested with one of your 50 friends"). Convert to "expected time between overlaps" only if E ≥ 1.

For sub-1 results, the data file stores `t_50_seconds = L / E[overlap]` (essentially "expected time you'd have to live to see one overlap") — which gets reported on the graph as "10× lifetime" or similar. Honesty about uncertainty matters more than precision here.

## Ticket output spec

Each ticket researches ONE activity. The agent writes `results/NNN-<slug>.md` with frontmatter + body. The frontmatter MUST include these fields (parsed by the data file):

```yaml
---
slug: <slug>
name: <Display Name>
emoji: <single emoji>
order: <NNN as integer>
duration_seconds: <number>
frequency_per_day: <number, or "lifetime" if rare>
lifetime_count: <number or null>
active_hours_per_day: <number>
clustering_notes: <one-line description of when this happens>
t_50_seconds: <expected time between overlaps with any of 50, in seconds>
t_1_seconds: <expected time between overlaps with best friend, in seconds>
confidence: <high | medium | low>
---
```

Body sections (mandatory):
1. `## Setup` — 1 paragraph framing
2. `## Inputs` — frequency, duration, clustering, caveats with sources
3. `## Math` — show the formula plug-in
4. `## Result` — human-readable answers
5. `## Surprise check` — was the intuition right?
6. `## Sources` — real URLs

## Activities (19)

| # | Slug | Display |
|---|------|---------|
| 001 | sneeze | Sneezing |
| 002 | pee | Peeing |
| 003 | poop | Pooping |
| 004 | fart | Farting |
| 005 | brush-teeth | Brushing teeth |
| 006 | cry | Crying |
| 007 | stub-toe | Stubbing your toe |
| 008 | orgasm | Orgasming |
| 009 | sex | Having sex |
| 010 | dream | Dreaming |
| 011 | sign-contract | Signing a contract |
| 012 | video-game-end-credits | Watching end credits of a great video game |
| 013 | ride-ambulance | Riding in an ambulance |
| 014 | get-arrested | Getting arrested |
| 015 | stuck-in-elevator | Stuck in an elevator |
| 016 | hiccup | Hiccupping |
| 017 | same-song-in-head | Same song stuck in your head |
| 018 | throw-up | Throwing up |
| 019 | locked-out-of-house | Locked out of your house |
