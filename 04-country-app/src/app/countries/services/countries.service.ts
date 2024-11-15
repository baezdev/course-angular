import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Store } from '../interfaces/store';
import { Regions } from '../interfaces/region';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  public store: Store = {
    byCapital: {
      searchValue: '',
      countries: [],
    },
    byCountry: {
      searchValue: '',
      countries: [],
    },
    byRegion: {
      region: '',
      countries: [],
    },
  };

  constructor(private http: HttpClient) {
    this.loadDataFromLocalStorage();
  }

  private saveDataToLocalStorage() {
    localStorage.setItem('store', JSON.stringify(this.store));
  }

  private loadDataFromLocalStorage() {
    if (!localStorage.getItem('store')) return;

    this.store = JSON.parse(localStorage.getItem('store')!);
  }

  private getCountriesReques(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }

  searchCapital(query: string): Observable<Country[]> {
    return this.getCountriesReques(`${this.apiUrl}capital/${query}`).pipe(
      tap(
        (countries) =>
          (this.store.byCapital = { searchValue: query, countries })
      ),
      tap(() => this.saveDataToLocalStorage())
    );
  }

  searchByName(name: string): Observable<Country[]> {
    return this.getCountriesReques(`${this.apiUrl}name/${name}`).pipe(
      tap(
        (countries) => (this.store.byCountry = { searchValue: name, countries })
      ),
      tap(() => this.saveDataToLocalStorage())
    );
  }

  searchByRegion(region: Regions): Observable<Country[]> {
    return this.getCountriesReques(`${this.apiUrl}region/${region}`).pipe(
      tap((countries) => (this.store.byRegion = { region, countries })),
      tap(() => this.saveDataToLocalStorage())
    );
  }

  sarchByCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((err) => of(null))
    );
  }
}
