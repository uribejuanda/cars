import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CarsListComponent } from './cars/components/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/components/car-details/car-details.component';
import { CarCardComponent } from './cars/components/car-card/car-card.component';

import { CarsService } from './cars/services/cars.service';
import { CompareCarsComponent } from './cars/components/compare-cars/compare-cars.component';
import { CarCardDetailedComponent } from './cars/components/car-card-detailed/car-card-detailed.component';
import { CompareDockComponent } from './cars/components/compare-dock/compare-dock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    CarDetailsComponent,
    CarCardComponent,
    CompareCarsComponent,
    CarCardDetailedComponent,
    CompareDockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
