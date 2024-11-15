import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Regions } from '../../interfaces/region';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Regions[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion: Regions = 'Africa';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.store.byRegion.countries;
    this.selectedRegion = this.countriesService.store.byRegion.region;
  }

  handleSearchByRegion(region: Regions) {
    this.selectedRegion = region;

    this.countriesService
      .searchByRegion(region)
      .subscribe((countries) => (this.countries = [...countries]));
  }
}
