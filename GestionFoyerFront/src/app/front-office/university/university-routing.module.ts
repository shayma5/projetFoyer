import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityCartComponent } from './university-cart/university-cart.component';
import { FoyerComponent } from './foyer/foyer.component';
import { BlocComponent } from './bloc/bloc.component';
import { ChambreComponent } from './chambre/chambre.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

const routes: Routes = [
  { path: "", component: UniversityCartComponent },
  { path: "foyer/:param", component: FoyerComponent },
  { path: "foyer/:param/bloc", component: BlocComponent },
  { path: "foyer/:param/bloc/:id/chambres", component: ChambreComponent },
  { path: "addreservation", component: AddReservationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
