# Ticket 023: Taxi Drivers / Medallion Holders

## Event
The disruption of the US taxi industry by ride-sharing platforms (Uber launched 2010, UberX 2012, Lyft 2012). A tipping point that didn't eliminate driving-for-hire as work but destroyed the medallion system and the economics of traditional taxi ownership.

## Mechanism
**Tipping point** (tech_platform)

## What to Research

### Workforce Timeline
Track US taxi/limousine employment and medallion values from ~2005 to present:

- Pre-Uber: ~233,000 taxi drivers and chauffeurs (BLS, 2008). NYC had ~13,237 medallion cabs.
- Key dates: Uber launched (SF, 2010), UberX (2012), Lyft launch (2012), NYC medallion peak value (~$1.3M, 2013), NYC medallion collapse (~$100K–200K, 2017–2019)
- Current: category is complicated because Uber/Lyft drivers are "transportation network company" drivers. Traditional taxi employment has cratered but total for-hire drivers exploded.
- SOC 53-3041 (Taxi Drivers) and 53-3054 (Ride-hailing drivers, added in 2018 SOC update)

**Source hierarchy:**
1. BLS OES data, SOC 53-3041 (Taxi Drivers and Chauffeurs)
2. NYC Taxi and Limousine Commission (TLC) data — medallion transfers, prices, trip data
3. Uber/Lyft IPO filings (S-1) — driver counts, revenue data
4. Schaller Consulting reports on NYC for-hire transportation
5. BLS CPS data for rideshare drivers (post-2018)

### Income Data
The taxi story has two distinct layers — medallion *owners* vs. *drivers*:

- Medallion owners: NYC medallions peaked at ~$1.3M (2013), crashed to ~$100K–200K. Many owners went bankrupt. Some committed suicide.
- Drivers: pre-Uber taxi drivers earned ~$25K–35K/year (BLS median ~$24,300 in 2013). Uber/Lyft drivers initially earned more but rates have been cut repeatedly.
- Track median wages for taxi drivers and for-hire drivers 2010–2023

**Source hierarchy:**
1. BLS OES median annual wage for SOC 53-3041
2. NYC TLC annual reports — driver income studies
3. Uber/Lyft driver earnings studies (academic, e.g., Mishel/EPI, Stanford/MIT studies)
4. Parrott & Reich, "An Earnings Standard for New York City's App-Based Drivers" (2018)

### Where They Went
This is unusual — the profession didn't die, it was reconfigured:
- Many taxi drivers became Uber/Lyft drivers (same work, different platform, worse economics)
- Medallion owners lost wealth but some continued driving
- Some exited driving entirely for delivery (DoorDash, UberEats)
- The driver suicides (at least 6 NYC taxi drivers died by suicide 2017–2018, linked to financial stress)

**Source hierarchy:**
1. NYC TLC data on active drivers (taxi vs. app-based)
2. Academic studies on taxi-to-rideshare transitions
3. News reporting on driver suicides and medallion debt crisis

### Foresight Stories
- **Adapters:** Taxi companies that built their own apps (Curb/Arro). Medallion owners who sold at the peak.
- **False movers:** Individual medallion buyers who purchased at $1M+ in 2012–2013, right before the crash. Taxi companies that fought Uber through regulation rather than innovation.
- **Deniers:** "Uber is just a car service, it won't affect the taxi industry." NYC TLC predictions that medallion values would hold.
- **Survival pattern:** Not being leveraged on medallion debt. Willingness to adopt new platforms.

### Unique Texture
- Medallion values: from $1.3M to $100K in 5 years — one of the fastest asset collapses in the dataset
- The suicide crisis — at least 6 NYC taxi driver/owner suicides in ~18 months (2017–2018)
- The regulatory capture story: medallions were a government-created monopoly. The government allowed a new entrant to bypass the system it created.
- This is an *ongoing* displacement — the dust hasn't settled. Uber/Lyft are still unprofitable at times and the gig economy model is under regulatory pressure.
- Total drivers-for-hire actually *increased* dramatically — the profession didn't die, it was disrupted and precaritized

## What Good Data Looks Like
- NYC medallion transfer prices annually from 2005–2023
- BLS taxi driver employment from 2005–2023
- Uber/Lyft driver counts (from S-1 filings, annual reports)
- Driver earnings data (taxi vs. rideshare)
- The suicide crisis documented with timeline

## Result Format
Follow the template in `plan.md` exactly. Save to `results/023-taxi-drivers.md`.
