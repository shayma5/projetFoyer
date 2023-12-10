import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { UniversityModule } from './university/university.module';
import { FrontOfficeComponent } from './front-office.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { BackOfficeRoutingModule } from '../back-office/back-office-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UniversityCartComponent } from './university/university-cart/university-cart.component';
import { ReservationModule } from '../back-office/reservation/reservation.module';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    FrontOfficeComponent,
    HeaderComponent,
    SlideComponent,
    FooterComponent,
    AccountComponent,
    UniversityCartComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    BackOfficeRoutingModule,
    MatMenuModule,
    FormsModule,
    ReservationModule,
    ReactiveFormsModule,
    
  ]
})
export class FrontOfficeModule { }
