import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';

const routes: Routes = [
  {path:"bloclist", component:BlocListComponent},
  {path:"addbloc", component:AddBlocComponent},
  {path:"editbloc/:param", component:EditBlocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
