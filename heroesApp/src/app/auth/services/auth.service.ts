import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../../environments/environments";
import {UserInterface} from "../interfaces/user.interface";
import {catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environments.baseURL
  private user: UserInterface | null = null

  constructor(private http: HttpClient) {
  }

  get currentUser(): UserInterface | null {
    if (!this.user) return null

    return structuredClone(this.user)
  }

  login(email: string, password: string): Observable<UserInterface | null> {
    return this.http.get<UserInterface | null>(`${this.baseURL}/users/${1}`)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(null)
        }),
        tap(user => {
          if (!user) return

          this.user = user

          localStorage.setItem('token', user.id.toString())
        })
      )
  }


  logout() {
    this.user = null
    localStorage.clear()
  }

  checkAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false)

    const token = localStorage.getItem('token')

    return this.http.get(`${this.baseURL}/users/${token}`).pipe(
      tap((user: any) => this.user = user),
      map(user => !!user),
      catchError((err) => {
        console.log(err)
        return of(false)
      }),
    )

  }

}
