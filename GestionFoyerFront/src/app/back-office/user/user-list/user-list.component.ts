import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserListServiceService } from './user-list-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/user/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  students: any[] = [];
  admins: any[] = [];
  showAddColumnButton: boolean = false;
  isRowDisabled: boolean = false;
  adminForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private userListService: UserListServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchAdmins();

    this.route.queryParams.subscribe((params) => {
      this.showAddColumnButton = params['showAddColumnButton'] === 'true';
    });

    console.log('showAddColumnButton:', this.showAddColumnButton);
    console.log('isRowDisabled:', this.isRowDisabled);
    this.adminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    console.log('Admin Form:', this.adminForm);
  }

  onDeleteUser(userId: number): void {
    this.userListService.deleteUser(userId).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== userId);
        console.log(`User with ID ${userId} deleted successfully.`);

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.route.snapshot.url]);
        });
      },
      (error) => {
        console.error(`Error deleting user with ID ${userId}:`, error);
      }
    );
  }

  onSubmit() {
    if (this.adminForm.valid) {
      const newUser = { ...this.adminForm.value, role: 'ADMIN' };
      console.log('User object before sending:', newUser);

      this.http.post('http://localhost:9090/auth/registerAdmin', newUser)
        .subscribe(
          (response) => {
            console.log('User created successfully:', response);
            this.adminForm.reset();
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/back/user/list']);
            });
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
      for (const controlName in this.adminForm.controls) {
        const control = this.adminForm.get(controlName);
        if (control?.invalid) {
          console.log(`Invalid ${controlName}: ${JSON.stringify(control.errors)}`);
        }
      }
    }
  }



  fetchStudents() {
    this.http.get<any[]>('http://localhost:9090/etudiant')
      .subscribe((data) => {
        this.students = data;
      });
  }

  fetchAdmins() {
    this.http.get<any[]>('http://localhost:9090/etudiant/admins')
      .subscribe((data) => {
        this.admins = data;
      });
  }

  disableRow(): void {
    this.showAddColumnButton = false;
    this.router.navigate(['/back/user/list']);
  }
}