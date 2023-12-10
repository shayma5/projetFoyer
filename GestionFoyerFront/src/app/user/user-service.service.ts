import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:9090';
  constructor(private http: HttpClient) { }

  getCurrentUserCIN(): number | null {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString).cin : null;
  }
  
}