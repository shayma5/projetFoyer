import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { FoyerComponent } from './foyer/foyer.component';


@NgModule({
  declarations: [
    FoyerComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
