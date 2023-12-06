import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', this.dateOfBirthValidator],
      ecole: ['', Validators.required],
      cin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^\d+$/)]],
    }, {
      validator: this.passwordsMatchValidator('password', 'confirmPassword')
    });
  }

  passwordsMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordsNotMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  dateOfBirthValidator(control: any) {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (selectedDate > currentDate) {
      return { dateInvalid: true };
    }

    return null;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const newUser = { ...this.signUpForm.value, role: 'ETUDIANT' };
      console.log('User object before sending:', newUser);

      this.http.post('http://localhost:9090/auth/registerEtudiant', newUser)
        .subscribe(
          (response) => {
            console.log('User created successfully:', response);

            this.router.navigate(['/front/home']);
            console.log('Stored User:', response);
            localStorage.setItem('user', JSON.stringify(response));
          },
          (error) => {
            console.error('Error creating user:', error);

            if (error instanceof HttpErrorResponse) {
              if (error.status === 500) {
                console.log('Internal Server Error. Please check server logs.');
              } else {
                console.log(`Error: ${error.error}`);
              }
            } else {
              console.log('An unexpected error occurred.');
            }
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}
