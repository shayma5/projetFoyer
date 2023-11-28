import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './universite-list/universite-list.component';

const routes: Routes = [
  {path:"univlist", component:UniversiteListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnivesiteRoutingModule { }
