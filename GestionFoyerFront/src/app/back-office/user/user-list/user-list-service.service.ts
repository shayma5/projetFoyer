import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserListServiceService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  deleteUser(userId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/etudiant/${userId}`;
    return this.http.delete<void>(deleteUrl);
  }

}
