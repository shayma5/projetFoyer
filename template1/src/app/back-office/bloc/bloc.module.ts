import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';


@NgModule({
  declarations: [
    BlocListComponent,
    EditBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule
  ]
})
export class BlocModule { }
