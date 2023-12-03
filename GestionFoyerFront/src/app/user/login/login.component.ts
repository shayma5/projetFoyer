import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User, UserRole } from '../user';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

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
        this.loginError = '';

        //tsavi l user
        console.log('Stored User:', response);
        localStorage.setItem('user', JSON.stringify(response));


        //tchoufou est ce que admin wala etud
        if (response.role === UserRole.ADMIN) {
          this.router.navigate(['/back/dashboard']);
        } else if (response.role === UserRole.ETUDIANT) {
          this.router.navigate(['/front/home']);
        } else {
          console.error('Unknown role:', response.role);
        }

      },
      (error) => {
        console.error('Login failed', error);

        if (error instanceof HttpErrorResponse) {
          console.error(`Status: ${error.status}, ${error.statusText}`);
          console.error('Response body:', error.error);
        }

        if (error.status === 401) {
          this.loginError = 'Wrong email address or password.';
        } else {
          this.loginError = 'Wrong email address or password.';
        }

      }
    );
  }
}