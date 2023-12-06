import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { UniversityModule } from './university/university.module';
import { FrontOfficeComponent } from './front-office.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { BackOfficeRoutingModule } from '../back-office/back-office-routing.module';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [
    FrontOfficeComponent,
    HeaderComponent,
    SlideComponent,
    FooterComponent,
    ReservationComponent  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    BackOfficeRoutingModule,
    UniversityModule
  ]
})
export class FrontOfficeModule { }
