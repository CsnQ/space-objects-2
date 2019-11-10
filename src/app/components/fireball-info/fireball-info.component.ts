import { Component, OnInit } from '@angular/core';
import { FireballDataService } from '../../services/fireball-data.service';

@Component({
  selector: 'app-fireball-info',
  templateUrl: './fireball-info.component.html',
  styleUrls: ['./fireball-info.component.scss']
})
export class FireballInfoComponent implements OnInit {
  fireballData;
  realFireBallData;
  countOfFireballs: number;
  realCountOfFireBalls: number;
  dateSubmitted: string;
  locations=[];


  constructor(private FireballDataService: FireballDataService) {
    this.getdata();

    // this.FireballDataService.fetchDataByMinDate().then((data)=>{
    //   this.realFireBallData = data;
    //   console.log(data);

    // })
  }

  getdata(){
    this.FireballDataService.fetchTestFireballData().then((data) => {
      this.fireballData = data;
      this.countOfFireballs = this.fireballData.length;
      console.log(this.fireballData);
      this.getLocationsFromData(this.fireballData);
     
    })
  }

  getNumberOfFireballs() {
    return this.fireballData.length;
  }

  getLocationsFromData(data) {
    for (let item in data) {
      let x = data[item].latdeg;
      let y = data[item].londeg;
      this.locations[item] = [x, y];
    }
  
  }

  getNumberOfRealFireballs() {
    //return this.realCountOfFireBalls;
    return "commented out whilst building app"
  }

  ngOnInit() {

  }

}
