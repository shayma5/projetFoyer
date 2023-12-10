import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { EditChambreComponent } from './edit-chambre/edit-chambre.component';

const routes: Routes = [
  {path:"chambrelist", component:ChambreListComponent},
  {path:"addchambre", component:AddChambreComponent},
  {path:"editchambre/:param", component:EditChambreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
