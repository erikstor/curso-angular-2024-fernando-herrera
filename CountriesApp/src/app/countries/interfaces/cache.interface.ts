import {SearchCountriesResponse} from "./captial-response.interface";
import {RegionType} from "./region.type";

export interface CacheInterface {
  byCapital: TermCountries,
  byCountries: TermCountries,
  byRegion: RegionCountries,
}

export interface TermCountries {
  term: string,
  countries: SearchCountriesResponse[]
}


export interface RegionCountries {
  term: RegionType,
  countries: SearchCountriesResponse[]
}

