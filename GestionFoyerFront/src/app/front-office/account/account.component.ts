import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user!: User;
  editMode: boolean = false;
  editForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    const userString = localStorage.getItem('user');

    if (userString) {
      this.user = JSON.parse(userString);
      console.log('Retrieved User:', this.user);

      
    }

    this.editForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      cin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^\d+$/)]],
      ecole: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateNaissance: ['', this.dateOfBirthValidator],
      confirmPassword: ['', Validators.required]
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

  toggleEditMode(): void {
    this.editMode = true;

    this.editForm.setValue({
      email: this.user.email,
      nom: this.user.nom,
      prenom: this.user.prenom,
      ecole: this.user.ecole,
      cin: this.user.cin,
      dateNaissance: this.user.dateNaissance,
      password: '',
      confirmPassword: '',
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      if (this.editForm.value.password !== this.editForm.value.confirmPassword) {
        this.editForm.get('confirmPassword')?.setErrors({ passwordsNotMatch: true });
        return;
      }

      this.editForm.value.role = 'ETUDIANT';

      this.editForm.value.id = this.user.id;
      const updatedUserData = { ...this.user, ...this.editForm.value };

      console.log('Retrieved User:', updatedUserData);

      this.http.put('http://localhost:9090/auth/update', updatedUserData)
        .subscribe(
          (response) => {
            console.log('User updated successfully:', response);
            this.editMode = false;
            this.router.navigate(['/user/account']);
          },
          (error) => {
            console.error('Error updating user:', error);
          }
        );
    }
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editForm.reset();
  }

}
