import { Injectable }      from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras
}                           from '@angular/router';

import { AuthService }      from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private authService: AuthService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;

    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
