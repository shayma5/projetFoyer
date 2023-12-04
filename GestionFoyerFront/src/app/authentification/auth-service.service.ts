import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:9090/auth';

  constructor(private http: HttpClient, private router: Router) { }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/front/home']);
  }

  /*getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  getUserDetails(): Observable<User> {
    const apiUrl = 'http://localhost:9090/auth/user';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getAccessToken()}`,
    });
    return this.http.get<User>(apiUrl, { headers });
  }*/

  isLoggedIn(): boolean {
    const userString = localStorage.getItem('user');
    return !!userString;
  }

}
