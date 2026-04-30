export type Mechanism = 'gradual' | 'tipping' | 'shock'

export type Destination = { name: string; pct: number }

export type DisplacedEvent = {
  id: string
  name: string
  mechanism: Mechanism
  country: string
  peakYear: number
  peakWorkforce: number
  declineShape: string
  currentStatus: string
  killingEvent: string
  yearsTo75pctDecline: number | null
  incomeRecoveryPct: number | null
  timeline: [number, number, string][]
  destinations: Destination[]
  texture: string
}

export const events: DisplacedEvent[] = [
  // === Gradual erosion (9) ===
  {
    id: 'handloom-weavers', name: 'Handloom weavers', mechanism: 'gradual',
    country: 'UK', peakYear: 1820, peakWorkforce: 250000,
    declineShape: 's_curve', currentStatus: 'extinct',
    killingEvent: 'The power loom undercut handloom weavers on speed and cost — an unskilled boy could produce 3.5x the output of a skilled weaver.',
    yearsTo75pctDecline: 30, incomeRecoveryPct: 17,
    timeline: [
      [1795, 75000, 'Bythell (1969)'], [1810, 200000, 'Bythell (1969)'], [1820, 240000, 'Parliamentary Papers'], [1834, 250000, 'Kennedy/Baines'],
      [1840, 150000, 'Royal Commission'], [1845, 70000, 'Interpolated'], [1850, 45000, 'Bythell (1969)'], [1856, 20000, 'Bythell (1969)'], [1861, 7000, 'UK Census 1861'],
    ],
    destinations: [
      { name: 'Factory work (power looms)', pct: 28 }, { name: 'General labor & construction', pct: 18 },
      { name: 'Emigration (US, Australia)', pct: 13 }, { name: 'Mining', pct: 10 },
      { name: 'Remained at starvation wages', pct: 15 }, { name: 'Poor Law / workhouse', pct: 8 },
    ],
    texture: 'A Bolton weaver earning 30 shillings/week in 1795 earned just 4-5 shillings by 1840 — same skill, same loom.',
  },
  {
    id: 'travel-agents', name: 'Travel agents', mechanism: 'gradual',
    country: 'US', peakYear: 2000, peakWorkforce: 124000,
    declineShape: 'stepped', currentStatus: 'contracted',
    killingEvent: 'Online travel agencies enabled direct booking while airlines eliminated agent commissions, destroying the economic model.',
    yearsTo75pctDecline: null, incomeRecoveryPct: 93,
    timeline: [
      [2000, 124000, 'BLS OES'], [2006, 88000, 'BLS OES'], [2010, 64000, 'BLS OES'], [2014, 62956, 'BLS/Data USA'], [2016, 67000, 'BLS TED'],
      [2019, 64000, 'BLS OES'], [2020, 51000, 'BLS OES (COVID)'], [2021, 56000, 'BLS OOH'], [2022, 66300, 'BLS OES'], [2023, 56400, 'BLS OES'], [2024, 65700, 'BLS OES'],
    ],
    destinations: [
      { name: 'Customer service / call centers', pct: 20 }, { name: 'General office/admin', pct: 20 },
      { name: 'Retirement / left workforce', pct: 25 }, { name: 'Corporate travel management', pct: 10 },
    ],
    texture: 'The survivors actually earn more — the profession shed its low earners and the remainder specialize in luxury travel.',
  },
  {
    id: 'switchboard-operators', name: 'Switchboard operators', mechanism: 'gradual',
    country: 'US', peakYear: 1950, peakWorkforce: 420000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'Automated telephone switching (dial phones, direct distance dialing, electronic switches) eliminated operators over 60+ years.',
    yearsTo75pctDecline: 11, incomeRecoveryPct: 95,
    timeline: [
      [1910, 88000, 'US Census'], [1920, 178000, 'US Census'], [1930, 235000, 'US Census'], [1940, 200000, 'Census est.'],
      [1950, 1350000, 'Richmond Fed (incl. private switchboard)'], [1970, 420000, 'BLS'], [1984, 40000, 'Conversable Economist'],
      [2000, 50000, 'BLS OES'], [2010, 20000, 'BLS OES'], [2021, 5000, 'BLS'], [2023, 1460, 'BLS OES'],
    ],
    destinations: [
      { name: 'Secretaries / clerical', pct: 35 }, { name: 'Customer service', pct: 20 },
      { name: 'Other telephone company roles', pct: 15 }, { name: 'Left labor force', pct: 15 },
    ],
    texture: 'At peak call volume, the US phone network would have required every working-age woman in the country to work as an operator.',
  },
  {
    id: 'typists', name: 'Typists', mechanism: 'gradual',
    country: 'US', peakYear: 1980, peakWorkforce: 1000000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'The personal computer made typing a universal office skill, eliminating the need for dedicated typists.',
    yearsTo75pctDecline: 22, incomeRecoveryPct: 95,
    timeline: [
      [1900, 112000, 'US Census'], [1910, 317000, 'US Census'], [1920, 615000, 'US Census'], [1930, 811000, 'US Census'],
      [1980, 1000000, 'US Census/BLS'], [1990, 650000, 'Estimated'], [2000, 350000, 'Estimated'], [2005, 194000, 'BLS OES'],
      [2020, 45200, 'BLS'], [2023, 37200, 'BLS'], [2024, 47460, 'BLS OES'],
    ],
    destinations: [
      { name: 'Admin / executive assistant', pct: 40 }, { name: 'Data entry', pct: 15 },
      { name: 'Customer service / office support', pct: 15 }, { name: 'Exited workforce', pct: 15 },
    ],
    texture: 'By 2024, the average office worker types faster than what was required to pass a 1960s secretarial exam.',
  },
  {
    id: 'textile-workers', name: 'US textile workers', mechanism: 'gradual',
    country: 'US', peakYear: 1973, peakWorkforce: 1300000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'Decades of offshoring to low-wage countries, accelerated by NAFTA, China\'s WTO accession, and Multi-Fibre Arrangement expiry.',
    yearsTo75pctDecline: 30, incomeRecoveryPct: 75,
    timeline: [
      [1973, 1300000, 'BLS CES'], [1980, 848000, 'BLS MLR'], [1990, 600000, 'BLS CES'], [2000, 450000, 'BLS CES'],
      [2005, 250000, 'BLS/FRED'], [2010, 120000, 'BLS/FRED'], [2024, 90000, 'BLS CES'],
    ],
    destinations: [
      { name: 'Retail and service sector', pct: 28 }, { name: 'Unemployment / disability / retirement', pct: 23 },
      { name: 'Other manufacturing', pct: 18 }, { name: 'Healthcare and education', pct: 13 },
    ],
    texture: 'Between 2000 and 2007, the US lost more textile jobs than the total current workforce of several textile-producing countries.',
  },
  {
    id: 'domestic-servants', name: 'British domestic servants', mechanism: 'gradual',
    country: 'UK', peakYear: 1891, peakWorkforce: 1500000,
    declineShape: 'stepped', currentStatus: 'remnant',
    killingEvent: 'WWI pulled women into factories; post-war cultural shifts, appliances, and better jobs made service permanently unattractive.',
    yearsTo75pctDecline: 70, incomeRecoveryPct: 120,
    timeline: [
      [1851, 1038791, 'Census England & Wales'], [1861, 1106974, 'Census'], [1871, 1494411, 'Census'], [1881, 1600000, 'Census est.'],
      [1891, 1444694, 'Census'], [1901, 1500000, 'UK Census'], [1911, 1335358, 'Census'], [1921, 1100000, 'UK Census'],
      [1931, 1332000, 'Census'], [1939, 1200000, '1939 Register'], [1951, 500000, 'Delap (2011)'], [1961, 300000, 'Estimated'], [1971, 200000, 'Estimated'],
    ],
    destinations: [
      { name: 'Factory / manufacturing', pct: 25 }, { name: 'Office / clerical', pct: 25 },
      { name: 'Retail / shop work', pct: 15 }, { name: 'Marriage / home duties', pct: 15 },
    ],
    texture: 'Workers who left domestic service for factories earned more. This is the rare displacement where the displaced were better off.',
  },
  {
    id: 'steel-workers', name: 'US steel workers', mechanism: 'gradual',
    country: 'US', peakYear: 1953, peakWorkforce: 650000,
    declineShape: 'stepped', currentStatus: 'remnant',
    killingEvent: 'Import competition, the mini-mill revolution, and massive productivity gains halved employment in five years (1979-1984).',
    yearsTo75pctDecline: 40, incomeRecoveryPct: 50,
    timeline: [
      [1950, 700000, 'AISI'], [1953, 650000, 'AISI'], [1960, 600000, 'AISI'], [1969, 530000, 'BLS/AISI'], [1974, 512000, 'AISI'],
      [1979, 450000, 'AISI/BLS'], [1980, 399000, 'AISI'], [1982, 250000, 'AISI'], [1984, 236000, 'AISI'], [1990, 257200, 'AISI'],
      [2000, 187000, 'BLS CES'], [2010, 150000, 'BLS CES'], [2015, 142000, 'AISI'], [2019, 83000, 'BLS OES'], [2021, 143000, 'AISI'], [2025, 83600, 'BLS'],
    ],
    destinations: [
      { name: 'Long-term unemployment / disability', pct: 30 }, { name: 'Service sector', pct: 23 },
      { name: 'Other manufacturing', pct: 18 }, { name: 'Out-migration', pct: 18 },
    ],
    texture: 'Pittsburgh lost 50% of its steel jobs in five years (1979-1984). Youngstown\'s unemployment hit 24.9%.',
  },
  {
    id: 'elevator-operators', name: 'Elevator operators', mechanism: 'gradual',
    country: 'US', peakYear: 1950, peakWorkforce: 114473,
    declineShape: 's_curve', currentStatus: 'extinct',
    killingEvent: 'Automatic push-button elevators replaced human operators building-by-building over three decades after the 1945 NYC strike proved buildings could function without them.',
    yearsTo75pctDecline: 18, incomeRecoveryPct: 95,
    timeline: [
      [1870, 497, 'US Census/ITIF'], [1900, 10000, 'Census est.'], [1920, 40000, 'Census est.'], [1930, 60000, 'Census est.'],
      [1940, 90000, 'Census'], [1950, 114473, 'US Census/ITIF'], [1960, 65000, 'Estimated'], [1970, 20000, 'Estimated'],
      [1980, 5000, 'Estimated'], [1990, 1000, 'ITIF'],
    ],
    destinations: [
      { name: 'Building maintenance / janitorial', pct: 30 }, { name: 'Security / lobby / doormen', pct: 25 },
      { name: 'Other service sector', pct: 25 }, { name: 'Retirement', pct: 15 },
    ],
    texture: 'The 1945 NYC elevator strike inadvertently proved buildings could function without operators, accelerating their elimination.',
  },
  {
    id: 'ice-industry', name: 'Ice harvesters', mechanism: 'gradual',
    country: 'US', peakYear: 1920, peakWorkforce: 250000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'Mechanical home refrigerators gradually eliminated household demand for delivered ice — a three-stage disruption from lakes to ice plants to home fridges.',
    yearsTo75pctDecline: 25, incomeRecoveryPct: 95,
    timeline: [
      [1880, 90000, 'Census Special Report'], [1890, 95000, 'Estimated'], [1900, 120000, 'Census Bureau'], [1910, 140000, 'Inferred'],
      [1920, 160000, 'Census of Manufactures'], [1925, 150000, 'Estimated'], [1930, 110000, 'Estimated'], [1940, 50000, 'Census housing data'], [1950, 12500, 'Census est.'],
    ],
    destinations: [
      { name: 'General trucking / delivery', pct: 35 }, { name: 'Construction / manual labor', pct: 25 },
      { name: 'Manufactured ice plants', pct: 15 }, { name: 'Cold storage / refrigerated transport', pct: 10 },
    ],
    texture: 'Americans used 5 million tons of ice per year by 1886, mostly harvested from frozen lakes. The refrigerator killed a supply chain that existed for millennia.',
  },

  // === Tipping point (9) ===
  {
    id: 'kodak', name: 'Kodak workers', mechanism: 'tipping',
    country: 'US', peakYear: 1988, peakWorkforce: 145300,
    declineShape: 'stepped', currentStatus: 'remnant',
    killingEvent: 'Digital cameras crossed a quality/price threshold around 2003, making film obsolete. Kodak filed for bankruptcy in 2012.',
    yearsTo75pctDecline: 16, incomeRecoveryPct: 50,
    timeline: [
      [1962, 75000, 'RBJ'], [1966, 100000, 'RBJ'], [1973, 120000, 'RBJ'], [1988, 145300, 'RBJ/Kodak 10-K'],
      [1999, 80650, 'Kodak 10-K'], [2002, 70000, 'Wikipedia'], [2004, 40900, 'PPI'], [2010, 18800, 'RBJ'],
      [2013, 8800, 'Post-bankruptcy filings'], [2021, 4200, 'Stock Analysis'], [2025, 3500, 'Stock Analysis'],
    ],
    destinations: [
      { name: 'Healthcare (URMC)', pct: 25 }, { name: 'Retirement (voluntary/early)', pct: 20 },
      { name: 'Left Rochester metro', pct: 15 }, { name: 'Low-wage service sector', pct: 15 },
    ],
    texture: 'Rochester, NY went from 60,000 Kodak jobs to 3,500. The city that Kodak built couldn\'t build past Kodak.',
  },
  {
    id: 'video-rental', name: 'Video rental workers', mechanism: 'tipping',
    country: 'US', peakYear: 2004, peakWorkforce: 168000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'DVD-by-mail eroded convenience, then streaming destroyed the value proposition of physical rental entirely.',
    yearsTo75pctDecline: 8, incomeRecoveryPct: 100,
    timeline: [
      [1983, 54000, 'BLS'], [2000, 167800, 'BLS'], [2004, 168000, 'BLS NAICS 532282'], [2006, 155000, 'BLS est.'],
      [2008, 128000, 'BLS est.'], [2010, 80000, 'BLS est.'], [2012, 40000, 'BLS est.'], [2014, 15000, 'BLS/FRED'],
      [2017, 14029, 'Data USA/ACS'], [2020, 5000, 'BLS est.'], [2023, 2700, 'FRED Blog'],
    ],
    destinations: [
      { name: 'Other retail (Walmart, Target)', pct: 35 }, { name: 'Food service', pct: 25 },
      { name: 'Customer service / call centers', pct: 15 }, { name: 'Returned to school', pct: 10 },
    ],
    texture: 'There is exactly one Blockbuster left, in Bend, Oregon. It accepts cryptocurrency.',
  },
  {
    id: 'human-computers', name: 'Human computers', mechanism: 'tipping',
    country: 'US/UK', peakYear: 1945, peakWorkforce: 3000,
    declineShape: 's_curve', currentStatus: 'extinct',
    killingEvent: 'Electronic digital computers (ENIAC 1945, UNIVAC 1951, IBM mainframes) rendered hand calculation obsolete within 15 years.',
    yearsTo75pctDecline: 12, incomeRecoveryPct: 130,
    timeline: [
      [1920, 200, 'Grier (2005)'], [1930, 400, 'Grier (2005)'], [1938, 700, 'WPA project + facilities'],
      [1943, 2000, 'Wartime expansion'], [1945, 2750, 'Peak wartime'], [1950, 1500, 'Post-war drawdown'],
      [1955, 500, 'IBM mainframes spreading'], [1960, 100, 'NASA remnant'], [1965, 20, 'De facto programmers'], [1970, 0, 'Extinct'],
    ],
    destinations: [
      { name: 'Computer programmers', pct: 45 }, { name: 'Left workforce (marriage/family)', pct: 23 },
      { name: 'Systems analysts / operations research', pct: 13 }, { name: 'Engineering / scientific roles', pct: 8 },
    ],
    texture: 'The women who computed ballistics trajectories at Aberdeen became ENIAC\'s first programmers — the machine that replaced them.',
  },
  {
    id: 'whalers', name: 'American whalers', mechanism: 'tipping',
    country: 'US', peakYear: 1846, peakWorkforce: 70000,
    declineShape: 's_curve', currentStatus: 'extinct',
    killingEvent: 'Kerosene displaced whale oil as illuminant while overhunting depleted populations — rising costs met collapsing demand.',
    yearsTo75pctDecline: 24, incomeRecoveryPct: 10,
    timeline: [
      [1820, 10000, 'Starbuck (1878)'], [1829, 17000, 'Starbuck (1878)'], [1834, 35000, 'Starbuck (1878)'], [1840, 46000, 'Starbuck (1878)'],
      [1846, 70000, 'Starbuck/PBS'], [1851, 55000, 'Starbuck (1878)'], [1858, 45000, 'Wikipedia'], [1866, 25000, 'Wikipedia'],
      [1876, 3000, 'Wikipedia'], [1895, 4000, 'Wikipedia'], [1906, 500, 'Mystic Seaport'], [1927, 50, 'NB Whaling Museum'],
    ],
    destinations: [
      { name: 'Textile mill workers', pct: 30 }, { name: 'Merchant marine / shipping', pct: 20 },
      { name: 'Commercial fishing', pct: 15 }, { name: 'Western migration (Gold Rush)', pct: 15 },
    ],
    texture: 'Whaling voyages lasted 3-4 years. By the 1870s, crews often returned in debt to shipowners after expense deductions.',
  },
  {
    id: 'linotype-operators', name: 'Linotype operators', mechanism: 'tipping',
    country: 'US', peakYear: 1964, peakWorkforce: 122000,
    declineShape: 'stepped', currentStatus: 'extinct',
    killingEvent: 'Desktop publishing (Mac + LaserWriter + PageMaker, 1985) eliminated the specialist typesetter after phototypesetting had already weakened the profession.',
    yearsTo75pctDecline: 22, incomeRecoveryPct: 65,
    timeline: [
      [1964, 122000, 'ITU records'], [1970, 175000, 'Census occupational est.'], [1975, 140000, 'Estimated'], [1980, 92000, 'ITU records'],
      [1985, 74000, 'ITU records'], [1986, 44000, 'ITU dissolution'], [1987, 37600, 'Census of Manufactures'], [1992, 32000, 'Interpolated'],
      [1997, 27754, 'Census of Manufactures'], [2000, 15000, 'BLS OES'], [2010, 5000, 'BLS'],
    ],
    destinations: [
      { name: 'Retirement (voluntary/forced)', pct: 30 }, { name: 'Graphic design / DTP', pct: 20 },
      { name: 'General manufacturing / trades', pct: 15 }, { name: 'Unemployment / left workforce', pct: 15 },
    ],
    texture: 'The Linotype was called "the eighth wonder of the world." Desktop publishing killed it in under a decade.',
  },
  {
    id: 'photo-labs', name: 'Photo lab workers', mechanism: 'tipping',
    country: 'US', peakYear: 2000, peakWorkforce: 70000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'Digital cameras surpassed film in 2003, then smartphone cameras (iPhone 2007) eliminated film development entirely.',
    yearsTo75pctDecline: 9, incomeRecoveryPct: 100,
    timeline: [
      [1982, 71700, 'Census Bureau'], [1987, 82500, 'Census Bureau'], [1992, 69300, 'Census Bureau'], [1997, 71991, 'Census Bureau'],
      [2000, 70000, 'BLS QCEW'], [2003, 55000, 'Estimated'], [2006, 35000, 'BLS est.'], [2008, 25000, 'Estimated'],
      [2010, 18000, 'Estimated'], [2012, 12000, 'Estimated'], [2015, 8000, 'Estimated'], [2020, 6000, 'Estimated'], [2025, 5700, 'BLS QCEW'],
    ],
    destinations: [
      { name: 'General retail (same employer)', pct: 30 }, { name: 'Other customer service / retail', pct: 25 },
      { name: 'Left workforce', pct: 15 }, { name: 'Digital printing / photo products', pct: 10 },
    ],
    texture: 'In 2000, Americans developed 800 million rolls of film. By 2011, they took 80 billion digital photos.',
  },
  {
    id: 'encyclopedia-sales', name: 'Encyclopedia sellers', mechanism: 'tipping',
    country: 'US', peakYear: 1978, peakWorkforce: 70000,
    declineShape: 's_curve', currentStatus: 'extinct',
    killingEvent: 'CD-ROM encyclopedias (Encarta, 1993) destroyed the price basis ($1,500 → $99), then Wikipedia made them free.',
    yearsTo75pctDecline: 17, incomeRecoveryPct: 70,
    timeline: [
      [1978, 67500, 'World Book/Wikipedia'], [1985, 52500, 'World Book est.'], [1990, 47500, 'Industry est.'], [1993, 30000, 'Post-Encarta'],
      [1994, 20000, 'Britannica layoffs'], [1996, 2000, "Britannica + Collier's collapse"], [2000, 500, 'Institutional only'], [2010, 95, 'Publishers Weekly'], [2020, 95, 'World Book institutional'],
    ],
    destinations: [
      { name: 'Insurance sales', pct: 18 }, { name: 'Other direct sales', pct: 18 },
      { name: 'Left sales / retired', pct: 23 }, { name: 'General retail / sales', pct: 13 },
    ],
    texture: 'Encyclopedia Britannica went from $1,500 per set to free (Wikipedia) in under 15 years.',
  },
  {
    id: 'taxi-drivers', name: 'Taxi drivers', mechanism: 'tipping',
    country: 'US', peakYear: 2013, peakWorkforce: 233000,
    declineShape: 's_curve', currentStatus: 'contracted',
    killingEvent: 'Uber and Lyft bypassed the medallion monopoly with app-based ride-hailing, collapsing medallion values from $1.3M to under $200K.',
    yearsTo75pctDecline: 10, incomeRecoveryPct: 79,
    timeline: [
      [2008, 233000, 'BLS OOH'], [2012, 168600, 'BLS OES'], [2014, 178000, 'BLS OES'], [2017, 154000, 'BLS OES'],
    ],
    destinations: [
      { name: 'Uber/Lyft/rideshare driver', pct: 55 }, { name: 'Delivery services', pct: 13 },
      { name: 'Exited driving entirely', pct: 18 }, { name: 'Bankruptcy / financial ruin', pct: 8 },
    ],
    texture: 'NYC medallion values crashed from $1.3 million to under $200,000. At least nine taxi drivers died by suicide during the collapse.',
  },
  {
    id: 'newspaper-journalists', name: 'Print journalists', mechanism: 'tipping',
    country: 'US', peakYear: 2000, peakWorkforce: 56400,
    declineShape: 'stepped', currentStatus: 'contracted',
    killingEvent: 'Classified advertising collapsed (primarily to Craigslist) and display ads migrated to digital, destroying the economic model funding journalism.',
    yearsTo75pctDecline: null, incomeRecoveryPct: 90,
    timeline: [
      [2000, 56400, 'ASNE'], [2004, 54200, 'ASNE'], [2006, 53600, 'ASNE'], [2008, 52000, 'ASNE est.'],
      [2010, 41600, 'Pew/BLS'], [2012, 38000, 'ASNE'], [2015, 33000, 'ASNE'], [2020, 31000, 'Pew Research'], [2024, 26500, 'BLS'],
    ],
    destinations: [
      { name: 'PR / corporate comms', pct: 33 }, { name: 'Digital-native news outlets', pct: 18 },
      { name: 'Left profession entirely', pct: 23 }, { name: 'Freelance journalism', pct: 13 },
    ],
    texture: 'US newspapers have lost 79% of their total workforce since 2001. More than 2,900 newspapers have closed.',
  },

  // === Discrete shock (9) ===
  {
    id: 'soviet-workers', name: 'Soviet defense workers', mechanism: 'shock',
    country: 'Russia', peakYear: 1990, peakWorkforce: 9000000,
    declineShape: 'cliff', currentStatus: 'contracted',
    killingEvent: 'USSR dissolved in December 1991; shock therapy market reforms eliminated centralized military procurement virtually overnight.',
    yearsTo75pctDecline: 7, incomeRecoveryPct: 42,
    timeline: [
      [1990, 9000000, 'FAS/GlobalSecurity'], [1991, 9000000, 'Pre-dissolution'], [1993, 5000000, 'Goskomoboronprom'],
      [1995, 3500000, 'GlobalSecurity'], [1997, 2500000, 'GlobalSecurity'], [2000, 2000000, 'Post-1998 est.'], [2005, 2000000, 'Putin stabilization'],
    ],
    destinations: [
      { name: 'Shadow economy / informal sector', pct: 35 }, { name: 'Remaining in defense industry', pct: 25 },
      { name: 'Shuttle traders (chelnoki)', pct: 18 }, { name: 'Withdrew from labor force', pct: 10 },
    ],
    texture: 'Nuclear physicists became street vendors. 35% of former defense workers entered the shadow economy.',
  },
  {
    id: 'cod-fishers', name: 'Newfoundland cod fishers', mechanism: 'shock',
    country: 'Canada', peakYear: 1990, peakWorkforce: 40000,
    declineShape: 'cliff', currentStatus: 'remnant',
    killingEvent: 'On July 2, 1992, the federal government declared an indefinite moratorium after cod stocks collapsed to 1% of historic levels — the largest mass layoff in Canadian history.',
    yearsTo75pctDecline: 2, incomeRecoveryPct: 73,
    timeline: [
      [1989, 37665, 'Heritage NL'], [1990, 40000, 'Heritage NL'], [1991, 39000, 'Heritage NL'], [1992, 10000, 'Heritage NL/Britannica'],
      [1995, 20000, 'Heritage NL'], [2001, 28500, 'Heritage NL'], [2007, 24805, 'Heritage NL'], [2008, 23500, 'Heritage NL'], [2010, 21140, 'Heritage NL'],
    ],
    destinations: [
      { name: 'Shellfish fisheries (crab, shrimp)', pct: 25 }, { name: 'Outmigration to Alberta (oil)', pct: 20 },
      { name: 'NCARP/TAGS income support', pct: 15 }, { name: 'Unemployed / informal economy', pct: 15 },
    ],
    texture: 'The moratorium was lifted in 2024 after 32 years. The cod still haven\'t come back in meaningful numbers.',
  },
  {
    id: 'samurai', name: 'Samurai class', mechanism: 'shock',
    country: 'Japan', peakYear: 1868, peakWorkforce: 1900000,
    declineShape: 'cliff', currentStatus: 'extinct',
    killingEvent: 'The Meiji Restoration abolished feudal domains and the warrior class through rapid edicts (1868-1876), ending with compulsory stipend commutation and the sword ban.',
    yearsTo75pctDecline: 8, incomeRecoveryPct: 25,
    timeline: [
      [1868, 1900000, 'Jansen (2000)/Totman (2005)'], [1871, 1282167, 'Jinshin koseki census'], [1876, 340000, 'Kinroku Kosai'], [1880, 0, 'Sonoda (1990)'],
    ],
    destinations: [
      { name: 'Poverty / economic ruin', pct: 33 }, { name: 'Government bureaucracy', pct: 25 },
      { name: 'Business / entrepreneurship', pct: 13 }, { name: 'Agriculture / land reclamation', pct: 10 },
    ],
    texture: 'Two-thirds of samurai faced economic ruin. The warrior class that ruled Japan for 700 years was impoverished in under a decade.',
  },
  {
    id: 'freed-slaves', name: 'Freed slaves', mechanism: 'shock',
    country: 'US', peakYear: 1860, peakWorkforce: 3953760,
    declineShape: 'cliff', currentStatus: 'extinct',
    killingEvent: 'The 13th Amendment abolished slavery, instantly displacing ~4 million people from a coerced labor system with no capital, land, or institutional support.',
    yearsTo75pctDecline: 1, incomeRecoveryPct: 24,
    timeline: [
      [1860, 3953760, '1860 US Census'], [1865, 4000000, "Freedmen's Bureau"], [1870, 1000000, '1870 Census/EH.net'],
      [1880, 2270000, '1880 Census/EH.net'], [1900, 2700000, '1900 US Census'], [1910, 2900000, '1910 US Census'],
    ],
    destinations: [
      { name: 'Sharecropping', pct: 55 }, { name: 'Domestic service', pct: 10 },
      { name: 'Tenant farming (non-share)', pct: 10 }, { name: 'Wage labor on plantations', pct: 10 },
    ],
    texture: 'By 1870, black per capita income was 24% of white levels. The sharecropping system was, economically, barely better than slavery.',
  },
  {
    id: 'child-labor', name: 'Child laborers', mechanism: 'shock',
    country: 'US', peakYear: 1910, peakWorkforce: 2000000,
    declineShape: 's_curve', currentStatus: 'remnant',
    killingEvent: 'Cascading state and federal legislation culminating in the Fair Labor Standards Act of 1938 combined with rising incomes and compulsory schooling.',
    yearsTo75pctDecline: 20, incomeRecoveryPct: null,
    timeline: [
      [1880, 1500000, 'US Census/EH.net'], [1890, 1500000, 'Census/Historical Stats'], [1900, 1750000, 'US Census'],
      [1910, 2000000, 'Census/BLS MLR'], [1920, 1060000, 'Census/Historical Stats'], [1930, 570000, 'Census/EH.net'], [1940, 870000, 'Census/BLS'],
    ],
    destinations: [
      { name: 'School (compulsory education)', pct: 70 }, { name: 'Home / family duties', pct: 15 },
      { name: 'Agriculture (exempt sector)', pct: 10 }, { name: 'Unregulated street trades', pct: 5 },
    ],
    texture: 'At peak in 1910, one in five American children aged 10-15 was gainfully employed.',
  },
  {
    id: 'prohibition', name: 'Prohibition workers', mechanism: 'shock',
    country: 'US', peakYear: 1914, peakWorkforce: 400000,
    declineShape: 'cliff', currentStatus: 'contracted',
    killingEvent: 'The 18th Amendment banned manufacture, sale, and transport of alcoholic beverages effective January 17, 1920.',
    yearsTo75pctDecline: 6, incomeRecoveryPct: 80,
    timeline: [
      [1910, 400000, 'Census 1910/Revenue Bureau'], [1920, 40000, 'Perez et al. (2024)'], [1930, 10000, 'Perez et al. (2024)'], [1934, 100000, 'Taylor/EH.net'],
    ],
    destinations: [
      { name: 'General manufacturing / low-skill', pct: 30 }, { name: 'Bootlegging / speakeasies', pct: 20 },
      { name: 'Near beer / soft drinks', pct: 13 }, { name: 'Returned post-repeal (1933)', pct: 13 },
    ],
    texture: 'This is the only displacement in the dataset that was reversed — the industry came back after repeal in 1933.',
  },
  {
    id: 'irish-famine', name: 'Irish farm laborers', mechanism: 'shock',
    country: 'Ireland', peakYear: 1845, peakWorkforce: 1000000,
    declineShape: 'cliff', currentStatus: 'extinct',
    killingEvent: 'Phytophthora infestans destroyed the potato crop — the sole food source for the laborer class — across consecutive seasons 1845-1849.',
    yearsTo75pctDecline: 6, incomeRecoveryPct: null,
    timeline: [
      [1841, 1004000, 'Irish Census 1841'], [1845, 1000000, 'Extrapolation'], [1847, 700000, "Mokyr/\u00D3 Gr\u00E1da"],
      [1851, 300000, 'Irish Census 1851'], [1861, 200000, 'Irish Census'], [1871, 150000, 'Irish Census'], [1881, 100000, 'Irish Census'],
    ],
    destinations: [
      { name: 'Emigration to US', pct: 35 }, { name: 'Death (starvation/disease)', pct: 30 },
      { name: 'Emigration to Britain', pct: 13 }, { name: 'Emigration to Canada', pct: 10 },
    ],
    texture: 'Ireland\'s population has never recovered. At 5.1 million today, it\'s still below its 1841 level of 8.2 million.',
  },
  {
    id: 'colonial-administrators', name: 'Colonial administrators', mechanism: 'shock',
    country: 'UK/France', peakYear: 1954, peakWorkforce: 50000,
    declineShape: 'stepped', currentStatus: 'extinct',
    killingEvent: 'Wave of decolonization (1945-1970) rendered European colonial civil services obsolete as colonies gained independence.',
    yearsTo75pctDecline: 13, incomeRecoveryPct: 65,
    timeline: [
      [1938, 8000, 'Kirk-Greene'], [1947, 11000, 'Kirk-Greene'], [1954, 18000, 'Kirk-Greene'], [1960, 12000, 'Decolonization inferred'],
      [1966, 3000, 'Colonial Office merger'], [1970, 1000, 'Residual territories'], [1997, 0, 'Hong Kong handover'],
    ],
    destinations: [
      { name: 'Home civil service', pct: 25 }, { name: 'Retirement (early, with pension)', pct: 25 },
      { name: 'Private sector / business', pct: 20 }, { name: 'International development (UN, WB)', pct: 10 },
    ],
    texture: 'The entire British Colonial Office employed fewer people than a medium-sized corporation.',
  },
  {
    id: 'dust-bowl', name: 'Dust Bowl farmers', mechanism: 'shock',
    country: 'US', peakYear: 1930, peakWorkforce: 1200000,
    declineShape: 'cliff', currentStatus: 'contracted',
    killingEvent: 'Prolonged drought (1930-1940) combined with destructive farming practices stripped topsoil, compounded by the Great Depression price collapse.',
    yearsTo75pctDecline: null, incomeRecoveryPct: 60,
    timeline: [
      [1920, 912000, 'Census of Agriculture 1920'], [1925, 950000, 'Census of Agriculture 1925'], [1930, 1200000, 'Census of Agriculture 1930'],
      [1935, 1100000, 'Census of Agriculture 1935'], [1940, 970000, 'Census of Agriculture 1940'], [1945, 900000, 'Census of Agriculture 1945'], [1950, 850000, 'Census of Agriculture 1950'],
    ],
    destinations: [
      { name: 'Stayed, adopted conservation', pct: 35 }, { name: 'California (migrant labor)', pct: 20 },
      { name: 'Urban centers within Plains states', pct: 20 }, { name: 'Other Western states', pct: 10 },
    ],
    texture: 'The Dust Bowl displaced 2.5 million people. Many former Dust Bowl counties have never recovered their 1930 population.',
  },
]
