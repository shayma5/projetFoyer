import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './authentification/auth.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
  {
    path: "front", loadChildren: () =>
      import('./front-office/front-office.module').then(m => (m).FrontOfficeModule)
  },
  {
    path: "back", canActivate: [AuthGuard], loadChildren: () =>
      import('./back-office/back-office.module').then(m => (m).BackOfficeModule)
  },
  {
    path: "user", loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', redirectTo: '**', pathMatch: 'full' },
  { path: "**", component: NotFoundComponent },
  { path: "accessdenied", component: AccessDeniedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
