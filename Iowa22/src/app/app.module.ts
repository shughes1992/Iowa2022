import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadTripComponent } from './road-trip/road-trip.component';
import { HeaderComponent } from './header/header.component';
import { InsideRoadTripComponent } from './road-trip/inside-road-trip/inside-road-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadTripComponent,
    HeaderComponent,
    InsideRoadTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
