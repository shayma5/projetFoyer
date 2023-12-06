import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { HomeBackComponent } from './home-back/home-back.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { BlocModule } from './bloc/bloc.module';
import { UnivesiteModule } from './univesite/univesite.module';
import { FoyerModule } from './foyer/foyer.module';




@NgModule({
  declarations: [


    BackOfficeComponent,
            HomeBackComponent,
            SidebarComponent,
            NavComponent,

         ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    BlocModule,
    UnivesiteModule,
    FoyerModule
    

  ]
})
export class BackOfficeModule { }
