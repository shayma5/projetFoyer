import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../authentification/auth.guard';
import { LocalstorageGuard } from '../authentification/localstorage.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: "signup", canActivate: [LocalstorageGuard], component: SignupComponent },
      { path: "login", canActivate: [LocalstorageGuard], component: LoginComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
