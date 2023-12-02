import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { HomeBackComponent } from './home-back/home-back.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { BlocModule } from './bloc/bloc.module';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    BackOfficeComponent,
    HomeBackComponent,
    SidebarComponent,
    NavComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    BlocModule,
  ]
})
export class BackOfficeModule { }
