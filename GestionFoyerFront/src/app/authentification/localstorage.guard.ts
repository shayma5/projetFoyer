import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const isLocalStorageEmpty = !localStorage.getItem('user');

    if (!isLocalStorageEmpty) {
      this.router.navigate(['/accessdenied']);
      return false;
    }

    //Local storage is empty, allow access to the route
    return true;
  }

}
