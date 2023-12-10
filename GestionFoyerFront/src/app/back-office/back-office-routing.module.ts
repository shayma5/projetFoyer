import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { HomeBackComponent } from './home-back/home-back.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      {
        path: "univesite", loadChildren: () =>
          import('./univesite/univesite.module').then(m => m.UnivesiteModule)
      },
      {
        path: "foyer", loadChildren: () =>
          import('./foyer/foyer.module').then(m => m.FoyerModule)
      },
      {
        path: "bloc", loadChildren: () =>
          import('./bloc/bloc.module').then(m => m.BlocModule)
      },

      {
        path: "chambre", loadChildren: () =>
          import('./chambre/chambre.module').then(m => m.ChambreModule)
      },
      {
        path: "reservation", loadChildren: () =>
          import('./reservation/reservation.module').then(m => m.ReservationModule)
      },
      { path: "dashboard", component: HomeBackComponent },
      {
        path: "user", loadChildren: () =>
          import('./user/user.module').then(m => m.UserModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
