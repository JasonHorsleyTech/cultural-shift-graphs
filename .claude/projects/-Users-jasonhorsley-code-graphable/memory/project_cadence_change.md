---
name: Orchestrator cadence increased to 45 minutes
description: Cron pipeline changed from 30-min to 45-min ticks to reduce token burn on Claude Max subscription
type: project
---

Orchestrator cron cadence changed from 30 minutes to 45 minutes (2026-04-23).

**Why:** Nearly burned through all Claude Max subscription tokens in 7 days on the 30-minute cadence.

**How to apply:** All references to tick interval in code, docs, and crontab now say 45 minutes. If adding new references to the cron cadence, use 45 minutes.
