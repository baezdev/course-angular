import { Country } from './country';
import { Regions } from './region';

export interface Store {
  byCapital: CountriesStore;
  byCountry: CountriesStore;
  byRegion: RegionStore;
}

export interface CountriesStore {
  searchValue: string;
  countries: Country[];
}

export interface RegionStore {
  region: Regions;
  countries: Country[];
}
