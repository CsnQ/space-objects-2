import { Injectable } from '@angular/core';
import {fireBallTestData} from '../../assets/data/test-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireballDataService {

  constructor(private http:HttpClient) {}

  public fetchTestFireballData() {
    return new Promise((resolve, reject) => {
        resolve(fireBallTestData);
    });
  }

  public fetchDataByMinDate(){
    return this.http.get('https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2019-09-01&req-loc=true')
    .toPromise()
    .then(data => data)
    // .then(data => this.hydrateFireballs(data))
    .catch()
  }
  
  // private hydrateFireballs(data) {
  //   // returns neat little interface
  //   return IFireball {
  //     something: data.something,

  //   }
  // }
}
