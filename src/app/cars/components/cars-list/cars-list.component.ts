import { Component, OnDestroy, OnInit } from '@angular/core';

import { Car } from '../../../models/car.model';
import { CarsService } from '../../services/cars.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit, OnDestroy {
  private carsToCompareSubscription: Subscription;
  cars: Observable<Car>;
  disableCompare;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.cars = this.carsService.getCars();
    this.carsToCompareSubscription = this.carsService.carsToCompare$.subscribe(data => {
      this.checkIfDisableCompare(data.length);
    });
  }

  addToCompare(car: Car) {
    this.carsService.addToCompare(car);
  }

  checkIfDisableCompare(size: number) {
    this.disableCompare = size >= 3;
  }

  ngOnDestroy() {
    this.carsToCompareSubscription.unsubscribe();
  }


}
