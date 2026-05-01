/** Water usage data for the US. Withdrawals in Bgal/day. Population in millions. */

export type HistoricalYear = {
  year: number
  population: number
  thermoelectric: number
  irrigation: number
  publicSupply: number
  other: number
  total: number
}

/** USGS 5-year water-use compilations, 1950–2015.
 *  "other" = total minus thermoelectric, irrigation, and public supply.
 *  Encompasses industrial, domestic, livestock, aquaculture, mining, commercial. */
export const historicalWithdrawals: HistoricalYear[] = [
  { year: 1950, population: 150.7, thermoelectric: 40, irrigation: 89, publicSupply: 14, other: 37, total: 180 },
  { year: 1955, population: 164.0, thermoelectric: 72, irrigation: 110, publicSupply: 17, other: 41, total: 240 },
  { year: 1960, population: 179.3, thermoelectric: 100, irrigation: 110, publicSupply: 21, other: 39, total: 270 },
  { year: 1965, population: 193.8, thermoelectric: 130, irrigation: 120, publicSupply: 24, other: 36, total: 310 },
  { year: 1970, population: 205.9, thermoelectric: 170, irrigation: 130, publicSupply: 27, other: 43, total: 370 },
  { year: 1975, population: 216.4, thermoelectric: 200, irrigation: 140, publicSupply: 29, other: 51, total: 420 },
  { year: 1980, population: 229.6, thermoelectric: 210, irrigation: 150, publicSupply: 34, other: 46, total: 440 },
  { year: 1985, population: 242.4, thermoelectric: 187, irrigation: 137, publicSupply: 36.5, other: 38.5, total: 399 },
  { year: 1990, population: 252.3, thermoelectric: 195, irrigation: 137, publicSupply: 38.5, other: 37.5, total: 408 },
  { year: 1995, population: 267.1, thermoelectric: 190, irrigation: 134, publicSupply: 40.2, other: 37.8, total: 402 },
  { year: 2000, population: 285.3, thermoelectric: 195, irrigation: 137, publicSupply: 43.3, other: 32.7, total: 408 },
  { year: 2005, population: 301, thermoelectric: 201, irrigation: 128, publicSupply: 44.2, other: 36.8, total: 410 },
  { year: 2010, population: 313.0, thermoelectric: 161, irrigation: 115, publicSupply: 42.0, other: 37, total: 355 },
  { year: 2015, population: 325.0, thermoelectric: 133, irrigation: 118, publicSupply: 39.0, other: 32, total: 322 },
]

export type SubCategory = {
  name: string
  perCapita: number
  group: 'agriculture' | 'residential' | 'industrial'
}

/** Per-capita daily water use by sub-category (gal/person/day, ~2020, ~332M population). */
export const subCategories: SubCategory[] = [
  { name: 'Alfalfa & hay', perCapita: 54.1, group: 'agriculture' },
  { name: 'Corn', perCapita: 36.2, group: 'agriculture' },
  { name: 'Lawn & garden', perCapita: 27.1, group: 'residential' },
  { name: 'Cotton', perCapita: 25.9, group: 'agriculture' },
  { name: 'Soybean', perCapita: 19.8, group: 'agriculture' },
  { name: 'Showers & baths', perCapita: 11.6, group: 'residential' },
  { name: 'Toilet flushing', perCapita: 8.0, group: 'residential' },
  { name: 'Golf courses', perCapita: 4.5, group: 'industrial' },
  { name: 'Swimming pools', perCapita: 1.2, group: 'residential' },
  { name: 'Fracking', perCapita: 1.0, group: 'industrial' },
  { name: 'Bottled water', perCapita: 0.19, group: 'industrial' },
  { name: 'Data centers', perCapita: 0.14, group: 'industrial' },
  { name: 'Car washes', perCapita: 0.03, group: 'residential' },
]

export type SupplyPoint = {
  year: number
  pctOfRenewable: number
}

/** Total US water withdrawal as % of renewable freshwater supply (3,069 km3/yr). */
export const supplyRatio: SupplyPoint[] = [
  { year: 1950, pctOfRenewable: 8.1 },
  { year: 1955, pctOfRenewable: 10.8 },
  { year: 1960, pctOfRenewable: 12.2 },
  { year: 1965, pctOfRenewable: 14.0 },
  { year: 1970, pctOfRenewable: 16.7 },
  { year: 1975, pctOfRenewable: 18.9 },
  { year: 1980, pctOfRenewable: 19.8 },
  { year: 1985, pctOfRenewable: 18.0 },
  { year: 1990, pctOfRenewable: 18.4 },
  { year: 1995, pctOfRenewable: 18.1 },
  { year: 2000, pctOfRenewable: 18.4 },
  { year: 2005, pctOfRenewable: 18.5 },
  { year: 2010, pctOfRenewable: 16.0 },
  { year: 2015, pctOfRenewable: 14.5 },
]

export type SectorComparison = {
  name: string
  mgalDay: number
  highlight?: boolean
}

/** Water use by sector in Mgal/day (2015 USGS + sub-category estimates). */
export const sectorComparisons: SectorComparison[] = [
  { name: 'Thermoelectric', mgalDay: 133000 },
  { name: 'Irrigation', mgalDay: 118000 },
  { name: 'Public supply', mgalDay: 39000 },
  { name: 'Industrial', mgalDay: 14800 },
  { name: 'Residential lawns', mgalDay: 9000 },
  { name: 'Toilet flushing', mgalDay: 2660 },
  { name: 'Golf courses', mgalDay: 1500 },
  { name: 'Swimming pools', mgalDay: 390 },
  { name: 'Data centers', mgalDay: 48, highlight: true },
]
