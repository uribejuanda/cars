import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.scss']
})
export class CompareCarsComponent implements OnInit {
  carsToCompare = [];
  columns: number;

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      let carsToCompare: number[];
      carsToCompare = Object.keys(param).map(p => Number(param[p]));
      this.loadCarsToCompare(carsToCompare);
      this.columns = 12 / carsToCompare.length;
    });
  }

  loadCarsToCompare(idArray: number[]) {
    idArray.forEach(elem => {
      this.carsService.getCar(elem).subscribe(
        data => this.carsToCompare.push(data)
      );
    });
  }

}
