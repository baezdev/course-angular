import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public searchDefaultValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.store.byCountry.countries;
    this.searchDefaultValue = this.countriesService.store.byCountry.searchValue;
  }

  handleSearchByName(name: string) {
    this.countriesService
      .searchByName(name)
      .subscribe((countries) => (this.countries = [...countries]));
  }
}
