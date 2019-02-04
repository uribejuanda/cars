import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Subscription } from 'rxjs/Subscription';
import { Car } from '../../../models/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-dock',
  templateUrl: './compare-dock.component.html',
  styleUrls: ['./compare-dock.component.scss']
})
export class CompareDockComponent implements OnInit, OnDestroy {
  private carsToCompareSubscription: Subscription;
  comparedElements: Car[] = [];

  constructor(
    private carsService: CarsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carsToCompareSubscription = this.carsService.carsToCompare$.subscribe(data => {
      this.comparedElements = data;
    });
  }

  goToCompare() {
    const ids = this.comparedElements.map(car => car.vehicleId);
    this.router.navigate(['compare', ...ids]);
  }

  removeCarFromCompare(car: Car) {
    this.carsService.removeFromCompare(car);
  }

  ngOnDestroy() {
    this.carsToCompareSubscription.unsubscribe();
  }

}
