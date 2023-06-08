import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UPIComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'card',component:CardComponent},
  {path:'upi',component:UPIComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
