import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Cars } from '../../models/cars.model';
import { Car } from '../../models/car.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {
  private carsToCompare: Array<Car>;
  private behaviorSubjectCompare: BehaviorSubject<Car[]>;
  carsToCompare$: Observable<Car[]>;


  constructor(private http: HttpClient) {
    this.carsToCompare = new Array<Car>();
    this.behaviorSubjectCompare = new BehaviorSubject<Car[]>(this.carsToCompare);
    this.carsToCompare$ = this.behaviorSubjectCompare.asObservable();
  }

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

  addToCompare(car: Car) {
    const result = this.carsToCompare.find( elem => elem.vehicleId === car.vehicleId );
    if (!result) {
      this.carsToCompare.push(car);
      this.behaviorSubjectCompare.next(this.carsToCompare);
    }
  }

  removeFromCompare(car: Car) {
    const result = this.carsToCompare.filter( elem => elem.vehicleId !== car.vehicleId );
    this.carsToCompare = result;
    this.behaviorSubjectCompare.next(this.carsToCompare);
  }

}
