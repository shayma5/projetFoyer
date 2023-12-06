import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityCartComponent } from './university-cart/university-cart.component';
import { FoyerComponent } from './foyer/foyer.component';

const routes: Routes = [
  {path:"",component:UniversityCartComponent},
  {path:"foyer/:param",component:FoyerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
