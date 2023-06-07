import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { RESTAPIComponent } from './restapi/restapi.component';

const routes: Routes = [

  {path:'binding',component:BindingComponent},

  {path:'RESTAPI',component:RESTAPIComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
