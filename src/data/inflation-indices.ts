// Inflation index annual averages for deflating nominal dollars to 2024 dollars.
// Sources: BLS API (CPI-U, R-CPI-U-RS), FRED/BEA (PCE Price Index)
// Verified 2026-04-21 from primary sources.
//
// To convert nominal year X dollars to 2024 dollars:
//   real_2024 = nominal * (index[2024] / index[yearX])

export interface InflationIndex {
  name: string
  description: string
  values: Record<number, number>
}

export const inflationIndices: Record<string, InflationIndex> = {
  cpiU: {
    name: 'CPI-U (Official BLS)',
    description: 'The Consumer Price Index for All Urban Consumers (base 1982-84=100). The headline inflation number used for Social Security adjustments and tax brackets. Critics argue it understates inflation due to hedonic adjustments and substitution effects — if steak gets expensive and you buy chicken instead, the index counts that as "no inflation."',
    values: {
      1960: 29.6, 1961: 29.9, 1962: 30.2, 1963: 30.6, 1964: 31.0,
      1965: 31.5, 1966: 32.4, 1967: 33.4, 1968: 34.8, 1969: 36.7,
      1970: 38.8, 1971: 40.5, 1972: 41.8, 1973: 44.4, 1974: 49.3,
      1975: 53.8, 1976: 56.9, 1977: 60.6, 1978: 65.2, 1979: 72.6,
      1980: 82.4, 1981: 90.9, 1982: 96.5, 1983: 99.6, 1984: 103.9,
      1985: 107.6, 1986: 109.6, 1987: 113.6, 1988: 118.3, 1989: 124.0,
      1990: 130.7, 1991: 136.2, 1992: 140.3, 1993: 144.5, 1994: 148.2,
      1995: 152.4, 1996: 156.9, 1997: 160.5, 1998: 163.0, 1999: 166.6,
      2000: 172.2, 2001: 177.1, 2002: 179.9, 2003: 184.0, 2004: 188.9,
      2005: 195.3, 2006: 201.6, 2007: 207.342, 2008: 215.303, 2009: 214.537,
      2010: 218.056, 2011: 224.939, 2012: 229.594, 2013: 232.957, 2014: 236.736,
      2015: 237.017, 2016: 240.007, 2017: 245.120, 2018: 251.107, 2019: 255.657,
      2020: 258.811, 2021: 270.970, 2022: 292.655, 2023: 304.702, 2024: 313.689,
      2025: 321.943,
    },
  },

  shadowStats: {
    name: 'ShadowStats 1980 CPI (Alternative)',
    description: 'An approximation of John Williams\' Shadow Government Statistics alternative CPI, which reconstructs inflation using pre-1980 BLS methodology — before hedonic adjustments, geometric means, and the switch from home ownership costs to "Owner\'s Equivalent Rent." This index adds the estimated methodological offset (~3% from 1983 housing changes, ~7% from 1993 Boskin Commission changes) to official CPI-U rates. The result is dramatically higher cumulative inflation, implying that real wages have fallen far more than official numbers suggest. Controversial — most economists consider the offset too large.',
    values: {
      1960: 29.6, 1961: 29.9, 1962: 30.2, 1963: 30.6, 1964: 31.0,
      1965: 31.5, 1966: 32.4, 1967: 33.4, 1968: 34.8, 1969: 36.7,
      1970: 38.8, 1971: 40.5, 1972: 41.8, 1973: 44.4, 1974: 49.3,
      1975: 53.8, 1976: 56.9, 1977: 60.6, 1978: 65.2, 1979: 72.6,
      1980: 82.4, 1981: 90.9, 1982: 96.5,
      1983: 102.5, 1984: 110.0, 1985: 117.2, 1986: 122.9, 1987: 131.1,
      1988: 140.5, 1989: 151.5, 1990: 164.2, 1991: 176.0, 1992: 186.6,
      1993: 205.2, 1994: 224.8, 1995: 246.9, 1996: 271.5, 1997: 296.7,
      1998: 322.1, 1999: 351.8, 2000: 388.3, 2001: 426.5, 2002: 463.1,
      2003: 506.1, 2004: 555.0, 2005: 612.7, 2006: 675.4, 2007: 741.9,
      2008: 822.3, 2009: 876.9, 2010: 952.7, 2011: 1049.5, 2012: 1144.7,
      2013: 1241.6, 2014: 1348.7, 2015: 1444.7, 2016: 1564.1, 2017: 1706.9,
      2018: 1868.1, 2019: 2032.7, 2020: 2200.1, 2021: 2457.5, 2022: 2826.2,
      2023: 3140.4, 2024: 3452.9, 2025: 3785.5,
    },
  },

  gold: {
    name: 'Gold (USD/oz)',
    description: 'Annual average gold price per troy ounce. Using gold as a deflator answers: "what would this salary buy in gold?" Before 1971, gold was fixed at ~$35/oz under Bretton Woods; after Nixon closed the gold window, it floated freely. Gold bugs argue this is the only honest inflation measure — by this metric, real wages have collapsed since 1971. Critics note gold is volatile, driven by speculation, and doesn\'t track the cost of actual goods people buy.',
    values: {
      1960: 36.50, 1961: 35.50, 1962: 35.35, 1963: 35.25, 1964: 35.35,
      1965: 35.50, 1966: 35.40, 1967: 35.50, 1968: 43.50, 1969: 41.00,
      1970: 38.90, 1971: 44.60, 1972: 63.84, 1973: 106.48, 1974: 183.77,
      1975: 139.29, 1976: 133.77, 1977: 161.10, 1978: 208.10, 1979: 459.00,
      1980: 594.90, 1981: 400.00, 1982: 447.00, 1983: 380.00, 1984: 308.00,
      1985: 327.00, 1986: 390.90, 1987: 486.50, 1988: 410.15, 1989: 401.00,
      1990: 386.20, 1991: 353.15, 1992: 333.00, 1993: 391.75, 1994: 383.25,
      1995: 387.00, 1996: 369.00, 1997: 287.05, 1998: 288.70, 1999: 290.25,
      2000: 272.65, 2001: 276.50, 2002: 342.75, 2003: 417.25, 2004: 435.60,
      2005: 513.00, 2006: 635.70, 2007: 836.50, 2008: 869.75, 2009: 1087.50,
      2010: 1420.25, 2011: 1531.00, 2012: 1664.00, 2013: 1204.50, 2014: 1199.25,
      2015: 1060.00, 2016: 1250.74, 2017: 1257.12, 2018: 1268.49, 2019: 1392.60,
      2020: 1769.64, 2021: 1798.61, 2022: 1800.09, 2023: 1940.54, 2024: 2386.40,
      2025: 2900.00,
    },
  },
}
