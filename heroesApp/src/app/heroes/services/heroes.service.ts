import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {HeroInterface} from "../interfaces/hero.interface";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL: string = environments.baseURL

  constructor(private httpClient: HttpClient) {
  }

  getHeroes(): Observable<HeroInterface[]> {
    return this.httpClient.get<HeroInterface[]>(`${this.baseURL}/heroes`)
  }

  getHeroeById(id: string): Observable<HeroInterface | undefined> {
    return this.httpClient.get<HeroInterface>(`${this.baseURL}/heroes/${id}`)
      .pipe(
        catchError((error) => {
          return of(undefined)
        })
      )
  }

  searchHero(term: string): Observable<HeroInterface[]> {
    return this.httpClient.get<HeroInterface[]>(`${this.baseURL}/heroes?q=${term}&_limit=6`)
      .pipe(
        catchError((error) => {
          return of([])
        })
      )
  }

  addHero(hero: HeroInterface): Observable<HeroInterface | null> {
    return this.httpClient.post<HeroInterface>(`${this.baseURL}/heroes`, {...hero})
      .pipe(
        catchError((error) => {
          return of(null)
        })
      )
  }

  patchHero(hero: HeroInterface): Observable<HeroInterface | null> {

    if(!hero.id) throw new Error('Hero id is required')

    return this.httpClient.patch<HeroInterface >(`${this.baseURL}/heroes/${hero.id}`, {...hero})
      .pipe(
        catchError((error) => {
          return of(null)
        })
      )
  }

  deleteHero(id: string): Observable<boolean> {

    if(!id) throw new Error('Hero id is required')

    return this.httpClient.delete(`${this.baseURL}/heroes/${id}`)
      .pipe(
        catchError((error) => {
          return of(false)
        }),
        map( resp => true)
      )
  }

}
