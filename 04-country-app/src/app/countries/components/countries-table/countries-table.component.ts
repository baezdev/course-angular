import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
})
export class CountriesTableComponent {
  @Input()
  public countries: Country[] = [];
}
