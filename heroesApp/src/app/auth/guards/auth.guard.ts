import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  GuardResult,
  MaybeAsync,
  Route, Router, RouterStateSnapshot,
  UrlSegment
} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  private checkAuthStatus(): MaybeAsync<GuardResult> {
    return this.authService.checkAuth().pipe(
      tap(
        (isAuthenticated) =>{
          if(!isAuthenticated) return this.router.navigate(['/auth/login'])

          return true
        }
      )
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    // console.log('can activate')
    // console.log({route, state})
    // throw new Error('a ver 1')
    return this.checkAuthStatus();
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    // console.log('can match')
    // console.log({route, segments})
    // throw new Error('a ver 2')
    return this.checkAuthStatus();
  }

}
