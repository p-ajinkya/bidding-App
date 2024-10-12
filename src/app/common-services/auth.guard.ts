import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router){

  }

  canActivate(): boolean {
    if (this.loginService.checkLoggedIn()) {
      // If the user is authenticated, allow access to the route
      return true;
    } else {
      // If the user is not authenticated, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
