import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnivesiteRoutingModule } from './univesite-routing.module';
import { UniversiteListComponent } from './universite-list/universite-list.component';


@NgModule({
  declarations: [
    UniversiteListComponent
  ],
  imports: [
    CommonModule,
    UnivesiteRoutingModule
  ]
})
export class UnivesiteModule { }
