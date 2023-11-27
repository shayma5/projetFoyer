import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: '',
    component: UserComponent,
    children: [  
      {path:"signin",component:SignInComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
