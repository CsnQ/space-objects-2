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
 

  constructor(private FireballDataService: FireballDataService) {
    this.FireballDataService.fetchTestFireballData().then((data) => {
      this.fireballData = data;
      this.countOfFireballs = this.fireballData.length;
      this.getNumberOfFireballs();
      this.getLocationsFromData();
    })

    // this.FireballDataService.fetchDataByMinDate().then((data)=>{
    //   this.realFireBallData = data;
    //   console.log(data);
     
    // })
  }

 
  getNumberOfFireballs() {
    return this.countOfFireballs;
  }

  getLocationsFromData(){
    console.log(this.fireballData);
    let locations = new Array;
    for (let item in this.fireballData){
     let x= this.fireballData[item].latdeg;
     let y = this.fireballData[item].londeg;
     console.log(x,y)
     locations[item]=[x,y];
    }
    
    
  }

  getNumberOfRealFireballs(){
    //return this.realCountOfFireBalls;
    return "commented out whilst building app"
  }

  ngOnInit() {
 
  }

}
