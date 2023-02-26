import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingRequestOverviewComponent } from './components/booking-request-overview/booking-request-overview.component';
import { BookingResourceDialogComponent } from './components/booking-resource-dialog/booking-resource-dialog.component';

import { RequestBookingService } from './services/request-booking.service';
import { ResourcesService } from './services/resources.service';

@NgModule({
  declarations: [
    AppComponent,
    BookingRequestOverviewComponent,
    BookingResourceDialogComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RequestBookingService, ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
