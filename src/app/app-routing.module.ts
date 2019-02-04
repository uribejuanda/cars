import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsListComponent } from './cars/components/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/components/car-details/car-details.component';
import { CompareCarsComponent } from './cars/components/compare-cars/compare-cars.component';

const routes: Routes = [
  { path: '', component: CarsListComponent},
  { path: 'details/:id', component: CarDetailsComponent},
  { path: 'compare/:id1/:id2', component: CompareCarsComponent},
  { path: 'compare/:id1/:id2/:id3', component: CompareCarsComponent},
  { path: 'otra', redirectTo: 'otra', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
