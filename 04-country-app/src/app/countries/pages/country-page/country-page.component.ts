import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.actRoute.params
      .pipe(
        switchMap(({ id: code }) => this.countriesService.sarchByCode(code))
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }

        this.country = country;
        return;
      });
  }
}
