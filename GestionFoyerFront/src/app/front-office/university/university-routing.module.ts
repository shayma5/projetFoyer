import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityCartComponent } from './university-cart/university-cart.component';

const routes: Routes = [
  {path:"university",component:UniversityCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
