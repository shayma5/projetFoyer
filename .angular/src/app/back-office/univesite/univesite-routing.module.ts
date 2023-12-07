import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { DeleteUniversityComponent } from './delete-university/delete-university.component';
import { DesaffecterFoyerComponent } from './desaffecter-foyer/desaffecter-foyer.component';

const routes: Routes = [
  {path:"", component:UniversiteListComponent},
  {path:"add", component:AddUniversityComponent},
  {path:"edit/:param", component:UpdateUniversityComponent},
  {path:"delete/:id", component:DeleteUniversityComponent},
  {path:"desafficter/:param", component:DesaffecterFoyerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnivesiteRoutingModule { }
