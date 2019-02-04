import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../../models/car.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car;
  @Input() disableCompare: boolean;
  @Output() compared = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  compare() {
    this.compared.emit();
  }

}
