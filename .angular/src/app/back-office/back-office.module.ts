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
import { FormsModule } from '@angular/forms';
import { UnivesiteModule } from './univesite/univesite.module';
import { FoyerModule } from './foyer/foyer.module';
import { ChambreModule } from './chambre/chambre.module';

@NgModule({
  declarations: [
    BackOfficeComponent,
    HomeBackComponent,
    SidebarComponent,
    NavComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    BlocModule,
    FormsModule,
    FoyerModule,
    UnivesiteModule,
    ChambreModule
  ]
})
export class BackOfficeModule { }
