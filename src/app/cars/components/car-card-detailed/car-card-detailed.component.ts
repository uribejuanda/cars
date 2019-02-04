import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';

@Component({
  selector: 'app-car-card-detailed',
  templateUrl: './car-card-detailed.component.html',
  styleUrls: ['./car-card-detailed.component.scss']
})
export class CarCardDetailedComponent implements OnInit {

  @Input() car: Car;
  @Input() singleColumn: boolean;

  constructor() { }

  ngOnInit() {
  }

}
