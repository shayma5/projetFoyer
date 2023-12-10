import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);

      if (user && user.role === UserRole.ADMIN) {
        return true;
      }
    }

    this.router.navigate(['/accessdenied']);
    return false;
  }
}