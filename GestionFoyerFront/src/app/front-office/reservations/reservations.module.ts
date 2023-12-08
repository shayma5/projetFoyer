import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationsListComponent,
    AddReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
