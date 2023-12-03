import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FrontOfficeComponent } from './front-office.component';
import { ReservationComponent } from './reservation/reservation.component';

const frontroot: Routes = [
  //{path:"", component:FrontOfficeComponent},
  {path: '',
    component: FrontOfficeComponent,
    children: [
      {path:"universities",loadChildren:()=>
      import('./university/university.module').then(m=>m.UniversityModule)},
      {path:"home", component:SlideComponent},
      {path:"reservations",loadChildren:()=>
      import('./reservations/reservations.module').then(m=>m.ReservationsModule)}
]}];

@NgModule({
  imports: [RouterModule.forChild(frontroot)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
