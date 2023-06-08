import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { RESTAPIComponent } from './restapi/restapi.component';
import { TDFComponent } from './tdf/tdf.component';
import { MDFComponent } from './mdf/mdf.component';

const routes: Routes = [

  {path:'binding',component:BindingComponent},
  {path:'RESTAPI',component:RESTAPIComponent},
  {path:'xyz',loadChildren:()=> import("../app/payment/payment.module").then(mod => mod.PaymentModule) },
  {path:'tdf',component:TDFComponent},
  {path:'mdf',component:MDFComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
