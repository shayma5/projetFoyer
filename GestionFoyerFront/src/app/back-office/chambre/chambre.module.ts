import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { EditChambreComponent } from './edit-chambre/edit-chambre.component';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddChambreComponent,
    EditChambreComponent,
    ChambreListComponent
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChambreModule { }
