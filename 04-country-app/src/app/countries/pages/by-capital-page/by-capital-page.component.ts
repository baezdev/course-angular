import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public loading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.store.byCapital.countries;
    this.initialValue = this.countriesService.store.byCapital.searchValue;
  }

  searchByCapital(value: string) {
    this.loading = true;

    this.countriesService.searchCapital(value).subscribe((countries) => {
      this.loading = false;
      this.countries = [...countries];
    });
  }
}
