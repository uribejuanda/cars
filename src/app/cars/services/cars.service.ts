import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Cars } from '../../models/cars.model';

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('./assets/data.json')
      .pipe(
        map((res: Cars) => res.vehicles)
      );
  }

  getCar(id: number) {
    return this.getCars().pipe(
      map(data => data.find((car) => {
        return car.vehicleId === id;
      }))
    );
  }

}
