import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

const routes: Routes = [
  { path: "reservationlist", component: ReservationsListComponent },
  { path: "addreservation", component: AddReservationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
