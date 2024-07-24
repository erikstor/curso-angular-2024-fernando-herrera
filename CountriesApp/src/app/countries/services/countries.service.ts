import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, map, Observable, of, tap} from 'rxjs';
import {SearchCountriesResponse} from '../interfaces/captial-response.interface';
import {CacheInterface} from "../interfaces/cache.interface";
import {RegionType} from "../interfaces/region.type";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1/'

  public cacheStore: CacheInterface = {
    byCapital: {
      countries: [],
      term: ''
    },
    byCountries: {
      countries: [],
      term: ''
    },
    byRegion: {
      countries: [],
      term: ''
    },
  }

  constructor(private HttpClient: HttpClient) {

    this.loadFromLocalStorage()
  }

  private saveToLocalStorage() {

    localStorage.setItem('cache-store', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cache-store')) return

    this.cacheStore = JSON.parse(localStorage.getItem('cache-store')!)
  }

  private getCountriesHttpRequest(url: string): Observable<SearchCountriesResponse[]> {
    return this.HttpClient.get<SearchCountriesResponse[]>(url)
      .pipe(
        catchError((error) => {
          console.log(error)
          return of([])
        })
      )
  }

  searchCapital(term: string): Observable<SearchCountriesResponse[]> {

    const url = `${this.apiURL}capital/${term}`

    return this.getCountriesHttpRequest(url).pipe(
      tap((countries) => this.cacheStore.byCapital = {term, countries}),
      tap(() => this.saveToLocalStorage())
    )

  }


  searchCountry(term: string): Observable<SearchCountriesResponse[]> {
    const url = `${this.apiURL}name/${term}`

    return this.getCountriesHttpRequest(url).pipe(
      tap((countries) => this.cacheStore.byCountries = {term, countries}),
      tap(() => this.saveToLocalStorage())
    )
  }


  searchRegieon(term: RegionType): Observable<SearchCountriesResponse[]> {
    const url = `${this.apiURL}region/${term}`

    return this.getCountriesHttpRequest(url).pipe(
      tap((countries) => this.cacheStore.byRegion = {term, countries}),
      tap(() => this.saveToLocalStorage())
    )
  }


  searchCountryByAlfaCode(code: string): Observable<SearchCountriesResponse | null> {
    const url = `${this.apiURL}alpha/${code}`

    return this.HttpClient.get<SearchCountriesResponse[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError((error) => {
          console.log(error)
          return of(null)
        }),
      )
  }

}
