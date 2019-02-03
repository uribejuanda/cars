import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../../models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => this.loadCar(Number(param.id)));
  }

  loadCar(id: number) {
    this.carsService.getCar(id).subscribe(data => this.car = data);
  }

}
