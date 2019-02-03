import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../../../models/car.model';
import { CarsService } from '../../services/cars.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  cars: Observable<Car>;

  constructor(
    private carsService: CarsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cars = this.carsService.getCars();
  }

  selectCar(id: number) {
    this.router.navigate(['details', id]);
  }

}
