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
  dateSubmitted:string;
  coordinates: string[];

  constructor(private FireballDataService: FireballDataService) {
    this.FireballDataService.fetchTestFireballData().then((data) => {
      this.fireballData = data;
      this.countOfFireballs = this.fireballData.count;
    })

    this.FireballDataService.fetchDataByMinDate().then((data)=>{
      this.realFireBallData = data;
      this.realCountOfFireBalls=this.realFireBallData.count;
    })
  }
  getNumberOfFireballs() {
    return this.countOfFireballs;
  }

  getNumberOfRealFireballs(){
    //return this.realCountOfFireBalls;
    return "commented out whilst building app"
  }

  bananas(){
    console.log("bananas")
  }
  showData(){
    console.log(this.realFireBallData);
  }
  ngOnInit() {
 
  }

}
