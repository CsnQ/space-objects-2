import { Injectable } from '@angular/core';
import { fireBallTestData } from '../../assets/data/test-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireballDataService {

  constructor(private http: HttpClient) { }

  public fetchTestFireballData() {
    return new Promise((resolve, reject) => {
      resolve(fireBallTestData);
    });
  }

  public fetchDataByMinDate() {
    return this.http.get('https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2019-10-01&req-loc=true')
      .toPromise()
      //.then(data => data)
      .then(data => this.hydrateFireballs(data))
      .catch()
  }

  private convertLongLat(degrees, direction) {
    switch (direction) {
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
    //create array to store objects of data 
    let fireballs = [];

    for (let item of data.data) {
      //create an object
      let normalisedData = {};

      //based on data structure, go through each item in fields and use that as a key for the data
      for (let index in data.fields) {
        normalisedData[data.fields[index]] = item[index];
      }

      //create the object
      const y = {
        date: normalisedData["date"],
        "lat-deg": this.convertLongLat(normalisedData["lat"], normalisedData["lat-dir"]),
        "lon-deg": this.convertLongLat(normalisedData["lon"], normalisedData["lon-dir"])
      };
      
      //push to array
      fireballs.push(y);
    }
    return fireballs
  }
}
