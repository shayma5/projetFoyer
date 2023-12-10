import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnivesiteRoutingModule } from './univesite-routing.module';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { FormsModule } from '@angular/forms';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteUniversityComponent } from './delete-university/delete-university.component';
import { DesaffecterFoyerComponent } from './desaffecter-foyer/desaffecter-foyer.component';

@NgModule({
  declarations: [
    UniversiteListComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    DeleteUniversityComponent,
    DesaffecterFoyerComponent
  ],
  imports: [
    CommonModule,
    UnivesiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UnivesiteModule { }
