import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { HomeBackComponent } from './home-back/home-back.component';

const routes: Routes = [
  {path: '',
    component: BackOfficeComponent,
    children: [
      {path:"bloc",loadChildren:()=>
        import('./bloc/bloc.module').then(m=>m.BlocModule)},
      {path:"reservation",loadChildren:()=>
        import('./reservation/reservation.module').then(m=>m.ReservationModule)},
      {path:"dashboard", component:HomeBackComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
