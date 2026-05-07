# Validation: Male-Targeted Heartthrob List

**Ticket:** 002
**Type:** Validation (not a character profile)
**Audience:** male-targeted (female love interests / fantasy figures in male-targeted media)
**Scope:** the 25 locked characters in `heartthrobs.md`

## Methodology

Aggregated mentions and qualitative evidence from accessible English-language sources via web search:

1. FHM's 100 Sexiest Women (UK) annual lists, 1995–2017 (Wikipedia compilation of year-by-year #1s and historical top-10 placings)
2. FHM Hall of Fame / All-time Sexiest archives (Listal, eBay archives of print issues)
3. Maxim Hot 100 archived issues (CBS News, Maxim, IMDb compilations)
4. Esquire "Sexiest Woman Alive" annual archive
5. BAFTA "Most Iconic Video Game Character" 2024 poll (4,000+ voters)
6. Ranker community polls: "Most Beautiful Female Characters in Film" (300K+ voters), "Hottest Women in Marvel" (1K+ voters), "Most Attractive Anime Girls" (328K+ voters)
7. WatchMojo "Top 10 Video Games With The Best Waifus" / "Top 20 Greatest Nintendo Characters"
8. FandomSpot, CBR, ScreenRant, Collider "best video game waifus" / "hottest MCU women" / "iconic sex symbols of [decade]" listicles
9. Genshin Impact: HoYoLAB official 2024 / 2025 popularity polls; GENSHIN.CH usage data
10. MyAnimeList / MyWaifuList community popularity boards
11. Empire's "100 Sexiest Movie Stars of All Time" reader poll (50 actresses + 50 actors)
12. Square Enix / NHK Final Fantasy character polls (2013, 2014, 2020 — 200-character bracket)
13. Nintendo's Valentine's Day character popularity poll (2023, 2024, 2025 winners)
14. Wikipedia / fandom wikis used for box office, sales, and viewership cross-validation only (not for fame ranking)

**Aggregation rule:** "appears in multiple aggregated rankings as a top-N entrant or is cited as the canonical example of its genre/decade." Counts are coarse (low / medium / high / very high) rather than numeric — published list scoring varies widely in scope (top-10 vs. top-100), and the male-target ecosystem mixes tiered FHM/Maxim *actress* rankings, fan-character rankings, and game-popularity polls that aren't directly comparable. Reach proxies (box office, units shipped, viewership) are pulled from Wikipedia and the Variety/Hollywood Reporter ecosystem.

**Cap:** one ticket's worth of work. Sources behind paywalls (full Maxim print archive, complete FHM US back-issues, IGN/GameSpot pre-2015 listicles) were not exhaustively crawled. Where a character had clear top-tier signal across 3+ free sources, additional confirmation was deemed unnecessary.

**Source-ecosystem awareness flag (per ticket spec):** As warned in the ticket, the male-target source pool is heavily weighted toward "hottest"-framed rankings (FHM/Maxim/Hot 100, "sexiest movie heroines") rather than "best character"-framed rankings. This means validation signal here is biased toward physical-aesthetic recognition. Two consequences:

1. Characters whose male-fantasy footprint is primarily *physical* (Mikaela Banes, Selene, CJ Parker, Bayonetta) over-validate easily.
2. Characters whose male-fantasy footprint is more *archetypal* (Regina George as "hot mean girl," Princess Peach as the rescued princess) need to be triangulated through fan-art / cosplay / meme-footprint signals rather than "sexiest" lists alone.

Both kinds of evidence were used. Where I had to lean on fan-art/cosplay/meme-volume in the absence of a clean "sexiest" listing, I flagged it in the row.

**Operational-definition check:** The locked list defines the male-target slot as "fictional female character functioning as fantasy object regardless of strict plot role." This is broader than "love interest" and properly includes protagonists (Lara, Buffy, Bayonetta, 2B). Most published "sexiest movie heroines" rankings are *narrower* than this — they frequently exclude animation and games entirely and skew toward live-action love interests. The validation aggregation therefore had to combine multiple source pools (film-character "sexiest" lists, video-game waifu rankings, anime waifu polls, fan-art-volume signals) to honor the locked operational definition. The locked list's broader scope is well-supported by evidence; the *source ecosystem* is just fragmented across genres, which is itself a finding worth acknowledging in the final graph.

## Reach Validation Table

Status legend: **CONFIRMED** = top-tier signal across multiple sources, decade slot fits cultural peak. **CONFIRMED (note)** = top-tier but with a caveat. **CONSIDER SWAP** = signal is weaker than at least one alternate from the same decade.

| # | Character | Reach proxy 1 | Reach proxy 2 | Aggregate-list signal | Validation status |
|---|---|---|---|---|---|
| 26 | Princess Leia (Slave Leia, 1983) | Star Wars OT >$2.5B box office; merchandising in the tens of billions across franchise | Slave Leia bikini "endured as a pop culture icon"; Hollywood Reporter / Yahoo / multiple pieces flag the costume as a defining sex-symbol moment of the era | Very high (canonical reference for "iconic male-fantasy female character" of the 80s) | CONFIRMED |
| 27 | Lisa (Weird Science, 1985) | Weird Science $38.9M domestic on $7.5M budget; durable cult/HBO rotation status | Kelly LeBrock named in 80s-icon retrospectives (Complex "80 Hottest Women of the 80s," CinemaBlend "iconic 80s movie roles") | Medium-high (cult-iconic, not blockbuster) | CONFIRMED |
| 28 | Linda Barrett — Phoebe Cates (Fast Times, 1982) | Fast Times $27M on $4.5M budget; consistent top-100 of "iconic 80s film" rankings | Pool-scene called "the single most iconic nude scene of the decade" / "one of the most paused moments in the history of cinema" — repeatedly named in 80s heroine retrospectives | Very high | CONFIRMED |
| 29 | Daisy Duke — Catherine Bach (Dukes of Hazzard) | Dukes of Hazzard ran 1979–1985; peaked at #2 in Nielsen; cut-off shorts are eponymous | "Daisy Dukes" entered the language as a generic noun for cut-off jean shorts; Bach's legs reportedly insured for $1M during the run | Very high | CONFIRMED (note: show launched 1979 — character is borderline late-70s/early-80s; the locked list slots her into 1980s, which is defensible since the cultural saturation peaked early-80s and the eponymous-shorts cultural footprint is overwhelmingly 80s+) |
| 30 | Jessica Rabbit (Who Framed Roger Rabbit, 1988) | Roger Rabbit $329M global on $50.6M budget; landmark animation/live-action hybrid | Universally cited "sexiest cartoon character" of all time across listicles (Ranker, CBR, Comics Alliance) | Very high | CONFIRMED |
| 31 | Rachel Green (Friends, 1994–2004) | Friends 52.5M-viewer finale; syndication revenue >$1B; "The Rachel" haircut estimated to have driven 40% of urban hair appointments mid-90s | Aniston "popular pin-up girl and sex symbol of the late 90s and early 2000s"; Rachel "1990s sex symbol" framing is canonical | Very high | CONFIRMED |
| 32 | CJ Parker — Pamela Anderson (Baywatch, 1992–1997) | Baywatch peaked at ~1.1B viewers in 142 countries — one of the most-watched TV shows in human history | Anderson's CJ "cemented her status as a sex symbol"; #8 FHM 2005, repeated FHM appearances; UGO "best 11 blondes in entertainment" | Very high | CONFIRMED |
| 33 | Lara Croft (Tomb Raider, 1996+) | Tomb Raider franchise 100M+ units sold; first BAFTA poll-winner "most iconic video game character of all time" (2024, 4,000+ voters, beat Mario and Sonic) | Time magazine: "first sex symbol of video games"; durable cross-generational icon | Very high (the canonical reference case for video-game male-fantasy) | CONFIRMED |
| 34 | Tifa Lockhart (Final Fantasy VII, 1997) | FF VII franchise 14M+ units (original) + Remake/Rebirth 7M+; durable cross-generational waifu poll dominance | NYT named her "the pin-up girl of the cyber generation"; described as "bona-fide sex symbol" — frequently called the original gaming waifu | Very high | CONFIRMED |
| 35 | Buffy Summers — Sarah Michelle Gellar (1997–2003) | Buffy 144 episodes, 7 seasons, durable academic / cultural-studies canon | SMG was **#1 on FHM's UK 100 Sexiest Women in 1999** and #3 in 2000 — direct top-of-list signal during the show's run | Very high | CONFIRMED |
| 36 | Mikaela Banes — Megan Fox (Transformers, 2007) | Transformers (2007) $709M global on $150M budget; sequel $836M | **#1 FHM 100 Sexiest Women 2008**; #2 FHM in 2009 and 2010; FHM "Sexiest Woman Alive" framing originating directly from the role | Very high | CONFIRMED |
| 37 | Yuna (Final Fantasy X, 2001) | FFX/FFX-2 14M+ units lifetime; HD remasters re-charted in 2010s | **2014 official Square Enix poll: most popular FF heroine**; 2020 NHK 200-character poll: **#2 across the entire FF franchise** (highest-ranked from highest-ranked game) | Very high | CONFIRMED |
| 38 | Princess Peach (Mario, recurring; especially Smash Bros era 2000s) | Mario franchise 800M+ units; Peach playable in every major Smash Bros | **Won Nintendo Valentine's Day Poll 2023, 2024, 2025** (3-peat); Guinness Gamer's Edition #44 video game character of all time (2011) | High (Nintendo-iconic) / Medium (as "fantasy object" specifically — the appeal here is more iconic-princess than overt sex-symbol) | CONFIRMED (note: see swap consideration below — Peach validates as iconic but is the *softest* fantasy-object case on the list; her presence on the M-target list rests on Smash-era cosplay/fan-art volume + the rescued-princess archetype, not on "hottest" rankings) |
| 39 | Selene — Kate Beckinsale (Underworld, 2003+) | Underworld franchise 5 films, $539M+ global cumulative | Beckinsale's portrayal "instant icon in the action genre"; durable on "hottest action heroine" rankings; 5-time FHM appearances | High | CONFIRMED |
| 40 | Regina George — Rachel McAdams (Mean Girls, 2004) | Mean Girls $130M global on $17M budget; Broadway adaptation; 2024 musical remake $105M global | "Cult classic of early 2000s pop culture"; canonical "hot mean girl" archetype, durable in costume / Halloween / meme footprint | High (archetype-iconic) / Medium (in "sexiest" frame — she's primarily iconic-mean-girl, not a top FHM-style placement) | CONFIRMED (note: the locked list explicitly chose her over Allie Hamilton from The Notebook because of "hot mean girl archetype" footprint; that reasoning holds. But she's a less-cleanly-"fantasy-object" pick than the others — her cultural footprint is *meaner-girl-iconic*, which arguably is its own male-fantasy track) |
| 41 | Black Widow / Natasha Romanoff (MCU, 2010+) | MCU peaked at $29B+ box-office; Black Widow appeared in 9 MCU films + solo film $379M | **#1 on Ranker "25+ Hottest Women in Marvel"** (1K+ voters); "all-time fan-favorite MCU character" (CBR, Variety) | Very high | CONFIRMED |
| 42 | Wonder Woman / Diana — Gal Gadot (DCEU, 2017+) | Wonder Woman (2017) $824M global; tenth highest-grossing film of 2017; highest-grossing solo-female-director film until Barbie (2023) | **Gadot won FHM UK 100 Sexiest Women 2017 (#1)**; Esquire "Sexiest Woman Alive 2018" | Very high | CONFIRMED |
| 43 | Yennefer — Anya Chalotra (Witcher 3, 2015 + Netflix 2019+) | Witcher 3: 50M+ units lifetime (one of best-selling games ever); Netflix series consistently in top-10 originals | "Fan-favourite character," career trajectory "predicted to mirror Game of Thrones' Emilia Clarke"; high among sorceress-archetype rankings | Very high | CONFIRMED |
| 44 | Daenerys Targaryen — Emilia Clarke (GoT, 2011–2019) | GoT peaked at 19.3M average viewers/ep S8; 161-episode run; one of the most-watched TV phenomena ever | **Esquire Sexiest Woman Alive 2015**; #2 FHM UK 2017; #9 FHM UK 2015; "the most iconic character in the entirety of Game of Thrones" | Very high | CONFIRMED |
| 45 | Bayonetta (Bayonetta 2, 2014) | Franchise 7M+ units lifetime; flagship PlatinumGames IP; multiple Smash Bros DLC inclusions | Frequently top-3 on "sexiest video game waifus" rankings — "if a waifu ranking focused exclusively on sexiness, Bayonetta would be at the top" (FandomSpot) | High | CONFIRMED |
| 46 | Wanda Maximoff / Scarlet Witch — Elizabeth Olsen (WandaVision 2021, MoM 2022) | WandaVision Disney+ debut — most-watched Disney+ release at the time; MoM $955M global | **#2 on Ranker "Hottest Women in Marvel"**; durable presence on "hottest MCU women" rankings | High | CONFIRMED |
| 47 | Ciri — Freya Allan / game-asset version (Witcher 3 carryover, Netflix 2019+) | Witcher 3 50M+ units (peak 2015, durable through 2020s); Netflix series ran 2019–2025 with Ciri promoted to lead in S4 | "Top three favorites" alongside Geralt and Yennefer in Witcher rankings | Medium-high inside Witcher fandom / Medium (as a 2020s emergence specifically — her cultural peak was the 2015 game release, not the 2020s) | CONSIDER SWAP — see swap considerations below. Ciri's cultural-peak decade is genuinely debatable; she's more 2010s than 2020s under most reasonable cuts. Also: Ciri is canonically Geralt's foster daughter, which makes the male-fantasy framing awkward in a way the methodology should at least flag |
| 48 | 2B (NieR: Automata, 2017+) | NieR: Automata 8.5M+ units lifetime; sustained year-over-year sales tail; multiple cross-game guest appearances (SoulCalibur VI, Granblue, Smash Mii Costumes, etc.) | Widely described as having "taken Tifa's ancient seat as the top waifu" (FandomSpot); "more popular and recognizable than the NieR brand itself" (ResetEra consensus) | Very high | CONFIRMED |
| 49 | Rebecca (Cyberpunk: Edgerunners, 2022) | Edgerunners drove a >2x sales spike for Cyberpunk 2077 (game went from "failure" to >30M units); the most-watched anime adaptation of a video-game IP | Top-3 character ranking on Ranker (300+ votes); enormous fan-art / cosplay / meme footprint disproportionate to her supporting role | High | CONFIRMED (note: she's a *supporting* character — Lucy is the canonical romantic lead — but per the locked list's operational definition of "fantasy object regardless of strict plot role," Rebecca's fan-art volume and meme footprint defensibly outpaces Lucy's. See swap consideration #2 — Lucy is a credible alternate, and this slot is genuinely close) |
| 50 | Raiden Shogun (Genshin Impact, 2021) | Genshin Impact lifetime revenue >$5B; one of the highest-grossing games of all time | **Top of Genshin character usage data 2024 (34.28%)** and one of the longest-tenured top characters; fan-poll lead in 2021–2023 | High in 2021–2023; **medium** in 2024+ where Furina, Arlecchino, Wanderer have eclipsed her in official HoYoLAB polls | CONSIDER SWAP — see swap considerations below. The locked list explicitly pre-flagged this slot as a known judgment call; validation confirms the call is real. Raiden was dominant 2021–2023; **Furina** is the 2024 poll-winner and may be a stronger 2020s representative |

## Swap Considerations (recommendations to Jason; do NOT execute)

### 1. 2020s slot — Raiden Shogun vs. Furina vs. Hu Tao (Genshin Impact)

The locked list flagged this as a known judgment call ("Raiden Shogun is the placeholder; validation may swap to Hu Tao, Yae Miko, or another"). Validation findings:

- **Raiden Shogun (2021):** Most usage-data dominance and longest tenure as a top-tier popularity character; held the #1 slot for most of 2021–2023.
- **Hu Tao (2021):** One of the longest-running consistent fan-favorites; durable popularity outside official HoYoLAB polls (which tend to favor recent/free-trial banners).
- **Furina (2023):** **Won the 2024 official HoYoLAB top-10 popularity poll**; Lady Furina, the Hydro Archon, is currently the #1 Genshin character. Strongest current signal.
- **Arlecchino (2024):** #3 in 2024 official poll, dominating recent waves.

**Recommendation:** lean toward **Furina** if the goal is "single strongest 2020s Genshin signal" (she dominated the most recent two years' polls). Lean toward **Hu Tao** if the goal is "longest-running 2020s Genshin fan-favorite that survives recency bias." Lean toward **keeping Raiden** if the goal is "first major Genshin breakout character that defined the 2020s gacha-waifu era and held the top slot longest." All three are defensible; the locked list pre-flagged the call. Jason should pick.

### 2. 2020s slot — Rebecca vs. Lucy (Cyberpunk: Edgerunners)

The locked list slots Rebecca, justified by fan-art and meme footprint. Validation finding:

- **Rebecca** has *outsized* fan-art / cosplay / meme volume relative to her supporting role; she's the breakout meme-fan-favorite of Edgerunners, ranking #2 on Ranker character polls (above Lucy).
- **Lucy** is the canonical romantic lead — the love interest David falls for, the character whose face dominates the show's promotional materials, and a strong waifu-poll performer in her own right.

**Recommendation:** Both are defensible. Rebecca is the better pick if the criterion is "fantasy-object footprint regardless of plot role" (per the locked operational definition). Lucy is the better pick if the criterion is "canonical female love interest." Since the locked list explicitly chose the broader operational definition (and that definition is what makes Lara Croft, Buffy, and Bayonetta eligible), **keep Rebecca**. The Lucy alternative is worth noting but doesn't outweigh the methodological consistency.

### 3. 2020s slot — Ciri (Witcher 3 carryover)

The locked list slots Ciri as a 2020s pick on the strength of the Netflix series and her in-game popularity. Validation finding:

- Her cultural peak as a *character* was Witcher 3 (2015), which is a 2010s phenomenon.
- Netflix carried her forward into the 2020s but the show was dominated by Yennefer (already on the 2010s slot) and Geralt; Ciri is more of an archetypal-fantasy-daughter-figure.
- The strict male-fantasy framing is **awkward** because Ciri is canonically Geralt's foster daughter — most of her cultural footprint is action-heroine-with-Elder-blood, not love-interest. (She is romanced by some game players via the Skjall arc, but it's a minor thread.)

**Recommendation:** This is the **weakest 2020s placement on the male-target list** in the same way Nick Nelson was the weakest on the female-target list. Plausible alternates for a stronger 2020s slot:

- **Aerith / Tifa (Final Fantasy VII Remake, 2020+)** — the FFVII remake trilogy is the dominant 2020s waifu-game phenomenon. Tifa is already in the 1990s slot; **Aerith** is a clean 2020s candidate (Remake's Aerith dominates fan polls in a way classic-Aerith never did). Slight risk of feeling like "double-dipping FFVII" if Tifa stays.
- **Yor Forger (Spy x Family, 2022)** — over 328K Ranker voters place her #1 of "most attractive anime girls of all time"; the dominant 2020s anime sex-symbol character.
- **Marin Kitagawa (My Dress-Up Darling, 2022)** — top-3 on most 2022–2024 anime waifu polls; defining 2020s otaku-target character.
- **Power / Makima (Chainsaw Man, 2022)** — Makima specifically, "managed to become one of the most popular female anime characters of all time" (CBR).
- **Aloy (Horizon Forbidden West, 2022)** — Western action-heroine equivalent of Ciri but with a 2020s peak.

**Recommendation:** **Strongly consider Yor Forger** as a 2020s swap. She is the cleanest 2020s "fantasy-object" emergence on the male-target side — top of the largest community poll in this validation pass (328K voters), with the dominant anime breakout role of the early 2020s, and a clean fit for the "physical fantasy + emotional appeal" stack pattern this project is testing. Either decision is defensible, but if the project goal is to test the Man Stack hypothesis with the strongest decade-representative samples, Yor is a stronger 2020s test case than Ciri.

### 4. 2000s slot — Princess Peach (judgment call, no swap recommended)

Princess Peach is iconic and consistently wins the Nintendo Valentine's Day poll, but her appeal is more "rescued-princess archetype + Smash-Bros-era cosplay" than "sexiest" in the FHM sense. The locked list is defensible (she has very high cosplay/fan-art/meme footprint and is the canonical 2000s Nintendo-female-character) but worth flagging that the trait-stack analysis on Peach will look quite different from, say, Tifa or Lara Croft — Peach's "stack" is light on the physical-fantasy axis and heavy on the archetypal/aesthetic axis. **Recommendation:** keep her, but be ready for the result to come out at low-improbability (similar to Jack Dawson on the F-target side — a "characterization, not slider-max" reference case for the M-target 2000s).

### 5. 1980s slot — Daisy Duke (borderline decade placement)

*Dukes of Hazzard* ran 1979–1985. Daisy Duke is locked in the 1980s slot. The character's *first* cultural appearance is 1979, but the cultural saturation (the eponymous-shorts moment, the Bach-as-pinup era, the Hazzard-cultural-peak in syndication) is overwhelmingly 1980–1985. **Recommendation:** keep her in the 1980s slot — defensible — but flag this in graph annotations alongside the Sam Wheat (Ghost, 1990) borderline case on the F-target side.

## High-Scoring Characters Missing From the Locked List

Worth flagging for completeness. None of these are recommended swaps unless paired with one of the swap considerations above:

- **Yor Forger (Spy x Family, 2022)** — see swap consideration #3. Top of the largest aggregate poll in this validation pass.
- **Lucy (Cyberpunk: Edgerunners)** — see swap consideration #2. Defensible Rebecca alternate.
- **Furina / Hu Tao (Genshin Impact)** — see swap consideration #1. Defensible Raiden alternates.
- **Aloy (Horizon Zero Dawn 2017 / Forbidden West 2022)** — strong 2010s/2020s Western action-heroine. Slot crowded out by Black Widow/Wonder Woman in 2010s and the 2020s slot is already game-heavy.
- **Aerith Gainsborough (FFVII Remake era)** — strong 2020s waifu-game candidate but creates double-dipping with Tifa.
- **Makima / Power (Chainsaw Man, 2022)** — strong 2020s anime candidates.
- **Marin Kitagawa (My Dress-Up Darling, 2022)** — strong 2020s otaku-target candidate.
- **Jill Valentine / Ada Wong (Resident Evil)** — durable RE waifu rankings but slot would crowd with Tifa (90s) and Lara (90s).
- **Mai Shiranui (King of Fighters)** — durable fighting-game waifu since 1992. Slot would crowd with Tifa.
- **Ivy Valentine (Soulcalibur, 1998+)** — frequently called "one of gaming's sexiest characters ever." Crowded out by Tifa for the 1990s game slot.
- **Misa Amane / Mikasa Ackerman / Asuka / Rei (anime)** — durable anime waifus but no individual hit a 2010s peak strong enough to displace Bayonetta or Yennefer.
- **Asuna (Sword Art Online, 2012)** — top of waifu polls historically; the missing anime presence on the 2010s slot is a fair criticism but no hard recommendation here without dropping someone established.
- **Halle Berry as Catwoman / Storm** — appeared #1 FHM 2003 but no specific *character* on the male-target list captures her decade-defining sex-symbol moment. Storm is more action-character; Catwoman the film flopped.
- **Jessica Alba (Sin City, Fantastic Four)** — #1 FHM 2007, top FHM placements 2002–2009. No single character of hers reaches the iconic-fantasy-object threshold this list uses.

## Aggregation Notes / Caveats

- **Asymmetric source ecosystem (re-flagged per ticket spec):** Male-target source pool over-indexes on "hottest"-framed actress rankings and under-indexes on "best character"-framed rankings. This means that physical-fantasy-coded characters validate easily (Mikaela Banes, Selene, Bayonetta) and archetype-coded characters need cross-checking via fan-art and cosplay volume (Princess Peach, Regina George). Flagged in those rows.
- **Cross-medium aggregation:** The locked list spans live-action film, TV, video games, comics, and anime. Each medium has its own ranking ecosystem. No single source dominates; aggregation is unavoidably qualitative.
- **Recency bias in Genshin / anime polls:** HoYoLAB and MyAnimeList polls weight active-voter recency heavily — Furina (2023) leads 2024 polls partly because she's the newest popular character. For the Man Stack analysis, durability-weighted picks (Hu Tao, Tifa, 2B) may be better trait-stack representatives than newest-banner picks.
- **English-language bias:** Anime rankings used here lean Western-fan-poll. Japanese-domestic fan polls would likely re-rank significantly (e.g., Asuna and Rem typically place higher in Japanese polls than Western Ranker results).
- **Print-archive paywalls:** Full historical Maxim/FHM US back-issue archives, IGN/GameSpot pre-2015 listicle archives, and Empire's 100 Sexiest Movie Stars complete ranked list were not exhaustively crawled. Where a character had unambiguous top-tier signal across 3+ free sources, additional crawling was deemed unnecessary.
- **The "fantasy object regardless of plot role" definition (per ticket question):** Source lists used **mostly respect** the broader definition — gaming polls, anime polls, and "iconic film characters" lists explicitly include protagonists. Where they don't (FHM/Maxim "sexiest *actress*" lists), the actress/character mapping was cross-checked: e.g., Anderson is on FHM lists for years overlapping CJ Parker's run; Megan Fox FHM #1 is directly traceable to Mikaela Banes. The narrowest cases ("love interest only") are the romance-coded film lists, but the male-target list has fewer of those than the female-target list, so the bias toward narrow-love-interest framing is *less* of an issue here than it was on F-target side.

## Summary

**22 of 25 confirmed cleanly.** Three slots have meaningful judgment calls or weaker validation:

- **2020s Genshin slot — Raiden Shogun (locked) vs. Furina vs. Hu Tao** — locked list pre-flagged this; recommend Furina if going by current dominance, Hu Tao if going by durability, keep Raiden if going by 2021–2023 peak. Jason picks.
- **2020s Witcher slot — Ciri** — weakest 2020s placement on the M-target list. Recommend serious consideration of **Yor Forger (Spy x Family, 2022)** as a swap, OR explicit acknowledgment in graph annotations that Ciri is being slotted as a "carryover with diluted 2020s peak" reference case.
- **2020s Edgerunners slot — Rebecca vs. Lucy** — close call; Rebecca defensible under operational definition. Keep.

The locked list's pre-flagged 1980s borderline (Daisy Duke late-70s/early-80s) is real but lower priority — the cultural saturation period is squarely 80s.

No structural problems with the list. Generational stratification holds. Cultural-peak decade assignments are defensible across 23 of 25; Ciri is the one genuinely weak placement, mirroring Nick Nelson's role on the F-target side. Genre coverage is appropriately diverse (live-action film, TV, video games, comics/MCU, anime) and matches where male-target fantasy-object production has historically clustered.

## Sources

- [FHM's 100 Sexiest Women (UK) — Wikipedia](https://en.wikipedia.org/wiki/FHM%27s_100_Sexiest_Women_(UK))
- [BAFTA: Lara Croft Crowned Most Iconic Video Games Character of All Time](https://www.bafta.org/media-centre/press-releases/lara-croft-crowned-most-iconic-video-games-character-of-all-time-according-to-bafta-poll/)
- [NBC News: Lara Croft is the 'most iconic' video game character (BAFTA poll)](https://www.nbcnews.com/tech/video-games/lara-croft-tomb-raider-most-iconic-video-game-character-bafta-poll-rcna146410)
- [Wikipedia: Tifa Lockhart](https://en.wikipedia.org/wiki/Tifa_Lockhart)
- [Wikipedia: Yuna (Final Fantasy)](https://en.wikipedia.org/wiki/Yuna_(Final_Fantasy))
- [Wikipedia: Princess Leia](https://en.wikipedia.org/wiki/Princess_Leia)
- [Hollywood Reporter: Carrie Fisher And That Iconic Slave Leia Bikini](https://www.hollywoodreporter.com/news/general-news/carrie-fisher-slave-leia-costume-959475/)
- [Wikipedia: Daisy Duke](https://en.wikipedia.org/wiki/Daisy_Duke)
- [Wikipedia: Catherine Bach](https://en.wikipedia.org/wiki/Catherine_Bach)
- [Wikipedia: Megan Fox](https://en.wikipedia.org/wiki/Megan_Fox)
- [Wikipedia: Mikaela Banes](https://en.wikipedia.org/wiki/Mikaela_Banes)
- [Today: Megan Fox tops FHM's sexiest women list](https://www.today.com/popculture/megan-fox-tops-fhms-sexiest-women-list-1c9425150)
- [Wikipedia: Pamela Anderson](https://en.wikipedia.org/wiki/Pamela_Anderson)
- [Wikipedia: Sarah Michelle Gellar](https://en.wikipedia.org/wiki/Sarah_Michelle_Gellar)
- [Wikipedia: Daenerys Targaryen](https://en.wikipedia.org/wiki/Daenerys_Targaryen)
- [Wikipedia: Emilia Clarke](https://en.wikipedia.org/wiki/Emilia_Clarke)
- [Wikipedia: Wonder Woman (2017 film)](https://en.wikipedia.org/wiki/Wonder_Woman_(2017_film))
- [Wikipedia: Wanda Maximoff (MCU)](https://en.wikipedia.org/wiki/Wanda_Maximoff_(Marvel_Cinematic_Universe))
- [Wikipedia: Natasha Romanoff (MCU)](https://en.wikipedia.org/wiki/Natasha_Romanoff_(Marvel_Cinematic_Universe))
- [Wikipedia: Selene (Underworld)](https://en.wikipedia.org/wiki/Selene_(Underworld))
- [Wikipedia: Bayonetta](https://en.wikipedia.org/wiki/Bayonetta)
- [Wikipedia: Anya Chalotra](https://en.wikipedia.org/wiki/Anya_Chalotra)
- [Wikipedia: Ciri (character)](https://en.wikipedia.org/wiki/Ciri_(character))
- [Wikipedia: Princess Peach](https://en.wikipedia.org/wiki/Princess_Peach)
- [Wikipedia: Regina George](https://en.wikipedia.org/wiki/Regina_George)
- [Wikipedia: Mean Girls](https://en.wikipedia.org/wiki/Mean_Girls)
- [Wikipedia: Rachel Green](https://en.wikipedia.org/wiki/Rachel_Green)
- [Wikipedia: The Rachel (haircut)](https://en.wikipedia.org/wiki/The_Rachel)
- [Ranker: Hottest Women in Marvel](https://www.ranker.com/list/hottest-women-in-marvel/michaelchoi)
- [Ranker: Most Beautiful Female Characters in Film](https://www.ranker.com/list/hottest-characters-in-film-history/greg)
- [Ranker: Most Attractive Anime Girls](https://www.ranker.com/list/popular-anime-girls/ranker-anime)
- [FandomSpot: Top 25 Video Game Waifus Of All Time](https://www.fandomspot.com/best-video-game-waifus/)
- [FandomSpot: Top 5 Best Waifus from NieR (and franchise)](https://www.fandomspot.com/nier-waifus/)
- [WatchMojo: Top 10 Video Games With The Best Waifus](https://www.watchmojo.com/articles/top-10-video-games-with-the-best-waifus)
- [HoYoLAB: 2024 TOP 10 Most Popular Characters Poll Genshin Impact](https://www.hoyolab.com/article/35879715)
- [HoYoLAB: 2025 TOP 10 Most Popular Characters Poll](https://www.hoyolab.com/article/42863680)
- [GENSHIN.CH: Characters popularity (usage data)](https://genshin.ch/en-popl)
- [GameRant: Genshin Impact Reveals Most Popular Characters 2024](https://gamerant.com/genshin-impact-most-popular-characters-2024/)
- [Wikipedia: WandaVision](https://en.wikipedia.org/wiki/WandaVision)
- [Britannica: Elizabeth Olsen](https://www.britannica.com/biography/Elizabeth-Olsen)
- [Empire: 100 Sexiest Movie Stars of All Time (museum item)](https://www.bdcmuseum.org.uk/explore/item/89996/)
- [CBR: How Cyberpunk: Edgerunners' Rebecca Quickly Became a Fan-Favorite](https://www.cbr.com/cyberpunk-edgerunners-anime-rebecca-fan-favorite/)
- [Cyberpunk Wiki: Rebecca](https://cyberpunk.fandom.com/wiki/Rebecca)
- [Wikipedia: 2B (Nier: Automata) — Ultimate Pop Culture](https://ultimatepopculture.fandom.com/wiki/2B_(Nier:_Automata))
- [Wikipedia: Lara Croft](https://en.wikipedia.org/wiki/Lara_Croft)
- [TheGamer: Yuna and the Strong Female Character — Final Fantasy X](https://www.thegamer.com/personal-essay-yuna-and-the-strong-female-character-final-fantasy-x/)
- [Final Fantasy Wiki: Yuna](https://finalfantasy.fandom.com/wiki/Yuna)
- [TheGamer: Final Fantasy 10 Reasons Yuna Is The Strongest Character](https://www.thegamer.com/final-fantasy-10-reasons-yuna-strongest-character/)
- [Sportskeeda: Top 10 Best Anime Waifus, Ranked by Popularity and Fan Devotion](https://www.sportskeeda.com/anime/top-10-best-anime-waifus-ranked-basis-popularity-fan-devotion)
- [CBR: 45 Best Anime Waifus Of All Time, Ranked](https://www.cbr.com/best-anime-waifus-ever-ranked/)
- [Variety: Wonder Woman Box Office Study](https://variety.com/2017/film/news/wonder-woman-study-box-office-1202488262/)
- [Listal: FHM All-time Sexiest Women Hall of Fame](https://www.listal.com/list/alltime-100-sexiest-hall-fame)
- [Play Nintendo: Peach Won the Nintendo Valentine's Day Poll 2025](https://party.alibaba.com/valentine/who-won-the-nintendo-valentines-day-poll)
- [TVTropes: Weird Science (1985)](https://tvtropes.org/pmwiki/pmwiki.php/Film/WeirdScience1985)
- [Complex: 80 Hottest Women of the '80s](https://www.complex.com/pop-culture/a/complex/the-80-hottest-women-of-the-80s)

## Confidence

- **Overall validation:** medium-high. 22 of 25 are top-tier across multiple sources with no realistic challenger. Three slots have genuine close calls (Genshin, Witcher, Edgerunners), two of which were pre-flagged in the locked list itself.
- **Decade assignment:** medium-high. Cultural-peak decades are defensible for 23 of 25 (Ciri's 2020s slot is the one genuinely soft assignment; Daisy Duke's 1980s slot has a minor 1979 leak).
- **Reach proxies:** high (sales, viewership, box-office numbers are well-attested via Wikipedia / industry sources).
- **Genre / medium balance:** medium-high. Cross-medium spread (live-action film, TV, video games, comics/MCU, anime) is intentional and matches where male-target fantasy-object production clusters. Slight under-representation of pure-anime characters on the 2010s/2020s slots (Yor Forger, Asuna, Marin Kitagawa would be defensible additions); see swap considerations.
- **Source-ecosystem bias awareness:** medium. The "hottest"-framed source lean was actively compensated for via fan-art / cosplay / meme volume cross-checks where rankings alone were insufficient (Princess Peach, Regina George, Rebecca, 2B). But the compensation is qualitative and not as auditable as a ranked-list count would be.

<!-- COMPLETE -->
