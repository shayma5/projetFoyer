import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlocRoutingModule } from './bloc-routing.module';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { MatTableModule } from '@angular/material/table';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    BlocListComponent,
    EditBlocComponent,
    AddBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class BlocModule { }
