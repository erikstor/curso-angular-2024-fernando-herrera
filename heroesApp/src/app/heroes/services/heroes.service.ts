import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
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

}
