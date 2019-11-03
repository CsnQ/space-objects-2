import { Injectable } from '@angular/core';
import {fireBallTestData} from '../../assets/data/test-data';

@Injectable({
  providedIn: 'root'
})
export class FireballDataService {

  constructor() { }

   fetchTestFireballData() {
    return new Promise((resolve, reject) => {
        resolve(fireBallTestData);
    });
  }
  
  
}
