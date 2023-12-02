import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User, UserRole } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    const apiUrl = 'http://localhost:9090/auth/login';
    this.http.post<User>(apiUrl, loginData).subscribe(
      (response) => {
        console.log('Login successful', response);

        /*localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        if (response.role === UserRole.ADMIN) {
          this.router.navigate(['/back/dashboard']);
        } else if (response.role === UserRole.ETUDIANT) {
          this.router.navigate(['/front/home']);
        } else {
          console.error('Unknown role:', response.role);
        }*/
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}