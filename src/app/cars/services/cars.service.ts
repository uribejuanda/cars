import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('./assets/data.json')
      .pipe(
        map(res => res.records)
      );
  }

  getCar(id: number) {
    console.log(id);
    return this.getCars().pipe(
      map(data => data.find((car) => {
        console.log(car.id);
        return car.id === id;
      }))
    );
  }

}
