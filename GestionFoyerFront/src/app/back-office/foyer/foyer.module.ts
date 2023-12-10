import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { FoyerlistComponent } from './foyerlist/foyerlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { DaleteFoyerComponent } from './dalete-foyer/dalete-foyer.component';


@NgModule({
  declarations: [
    FoyerlistComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DaleteFoyerComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoyerModule { }
