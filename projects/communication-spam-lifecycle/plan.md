# Plan: Communication Spam Lifecycle

## Data format

Each research ticket produces a result file containing data points sampled at key years across the system's lifecycle (launch, early adoption, growth, peak, spam crossover, decline, present/death). Not every field will have hard data for every year — use best available estimates and cite sources. Mark truly unknown values as `null`.

### TypeScript type (for `src/data/communication-spam-lifecycle.ts`)

```typescript
export type CommunicationSystem = {
  /** Short identifier: "telegraph", "email", "facebook", etc. */
  id: string;
  /** Display name */
  name: string;
  /** Year the system became publicly available */
  yearLaunched: number;
  /** Year spam became majority (>50%) of traffic, or null if not yet */
  yearSpamCrossover: number | null;
  /** Year the system effectively died as communication, or null if still alive */
  yearDead: number | null;
  /** Years from launch to spam saturation (>50%) */
  yearsToSpamSaturation: number | null;
  /** What you need to message someone */
  barrierToReach: "physical-address" | "phone-number" | "email" | "username" | "none" | "broadcast";
  /** Message reach model */
  reachType: "one-to-one" | "one-to-few" | "one-to-many" | "broadcast";
  /** Access control model */
  gatekeeping: "open" | "semi-open" | "gated";
  /** Key regulatory responses: [{year, name, description}] */
  regulations: Array<{ year: number; name: string; description: string }>;
  /** Key defense mechanisms: [{year, name, description}] */
  defenses: Array<{ year: number; name: string; description: string }>;
  /** Time-series data points */
  dataPoints: DataPoint[];
};

export type DataPoint = {
  year: number;
  /** % of messages that are spam/junk/solicitation (0-100), null if unknown */
  spamPercentage: number | null;
  /** Total messages per year (approximate), null if unknown */
  messageVolume: number | null;
  /** Unit for messageVolume (e.g., "billions", "millions", "trillions") */
  messageVolumeUnit: string | null;
  /** % of US population using this as primary communication */
  primaryUserShare: number | null;
  /** % of US population using this at all */
  totalUserShare: number | null;
  /** Cost to sender per message in 2026 USD */
  userCostPerMessage: number | null;
  /** Average time to compose/send one message in minutes */
  userTimePerMessage: number | null;
  /** Infrastructure cost per message in 2026 USD */
  infraCostPerMessage: number | null;
  /** Platform annual revenue per user in 2026 USD */
  platformArpu: number | null;
  /** Source citations for this data point */
  sources: string[];
  /** Any notable context for this year */
  notes: string | null;
};
```

## Ticket structure

16 tickets, one per communication system. Each ticket specifies:
- The system and its time range
- Key years to sample
- Known data sources to check
- The 14 dimensions to collect

Tickets are independent — no ticket depends on another's results. Safe for parallel research (batch mode).

## Result format

Each result file should contain:
1. A prose summary of findings (2-3 paragraphs)
2. The structured data as a JSON-compatible TypeScript object matching the types above
3. A sources section listing all references

## Communication systems (16 tickets)

| # | System | Time range | Expected data quality |
|---|--------|-----------|----------------------|
| 001 | US Postal Mail | 1775–present | Excellent (USPS annual reports) |
| 002 | Telegraph | 1844–1960s | Moderate (historical records) |
| 003 | Newspaper classifieds | 1700s–present | Moderate (industry reports) |
| 004 | Telephone | 1876–present | Good (FCC data, YouMail) |
| 005 | Radio | 1920–present | Good (FCC, industry data) |
| 006 | Television | 1941–present | Good (Nielsen, FCC) |
| 007 | Fax | 1966–2000s | Moderate (TCPA records, industry) |
| 008 | Pagers | 1980s–2000s | Low (niche, short-lived) |
| 009 | Usenet & BBS | 1980–2000s | Moderate (academic papers) |
| 010 | Email | 1990s–present | Excellent (Symantec, Cisco, Radicati) |
| 011 | Instant messaging | 1996–2010s | Moderate (AIM/ICQ/MSN era) |
| 012 | SMS / Text messages | 2000s–present | Good (CTIA, carrier reports) |
| 013 | Facebook | 2004–present | Good (SEC filings, Pew Research) |
| 014 | Twitter | 2006–present | Good (SEC filings, research) |
| 015 | LinkedIn | 2003–present | Moderate (SEC filings) |
| 016 | Face-to-face communication | All of history | Speculative (sociological) |
