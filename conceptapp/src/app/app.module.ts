import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RESTAPIComponent } from './restapi/restapi.component';
import { BindingComponent } from './binding/binding.component';
import { TDFComponent } from './tdf/tdf.component';
import { MDFComponent } from './mdf/mdf.component';

@NgModule({
  declarations: [
    AppComponent,
    RESTAPIComponent,
    BindingComponent,
    TDFComponent,
    MDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
