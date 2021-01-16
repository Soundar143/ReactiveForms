import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { AccomodationDetailsComponent } from './accomodation-details/accomodation-details.component';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    AccomodationDetailsComponent,
    BookVehicleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
