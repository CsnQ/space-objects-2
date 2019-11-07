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
    return this.http.get('https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2019-10-01&req-loc=true')
    .toPromise()
    //.then(data => data)
    .then(data => this.hydrateFireballs(data))
    .catch()
  }

  private convertLongLat(degrees, direction) {
    switch(direction) {
      case 'N':
        return degrees;
      case 'S':
        return (degrees * -1);
      case 'E':
        return degrees;
      case 'W':
        return (degrees * -1);
    }
  }
  
  private hydrateFireballs(data) {
      return  {
      count: data.data.count,
      fireballs: data.data.forEach(fireball => {
        date: fireball[0];
        latitude: this.convertLongLat(fireball[3], fireball[4]);
        longitude: this.convertLongLat(fireball[5], fireball[6]);
      })    
    }
  }
}
