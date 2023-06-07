import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { UPIComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    UPIComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
