import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';



@NgModule({
  declarations: [
  
    AddReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
