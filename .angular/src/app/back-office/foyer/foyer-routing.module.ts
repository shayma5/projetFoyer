import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerlistComponent } from './foyerlist/foyerlist.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { DaleteFoyerComponent } from './dalete-foyer/dalete-foyer.component';

const routes: Routes = [
  {path:"", component:FoyerlistComponent},
  {path:"add", component:AddFoyerComponent},
  {path:"edit/:param", component:UpdateFoyerComponent},
  {path:"delete/:id", component:DaleteFoyerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
