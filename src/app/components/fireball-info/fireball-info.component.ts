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
  // locations={'locationData': []};
  locations = [];


  constructor(private FireballDataService: FireballDataService) {

    // this.FireballDataService.fetchDataByMinDate().then((data)=>{
    //   this.realFireBallData = data;
    //   console.log(data);

    // })
  }

  getdata(){
    this.FireballDataService.fetchTestFireballData().then((data) => {
      this.fireballData = data;
      this.countOfFireballs = this.fireballData.length;
      // console.log(this.fireballData);
      this.getLocationsFromData(this.fireballData);
     
    })
  }

  getNumberOfFireballs() {
    return this.fireballData.length;
  }

  getLocationsFromData(data) {
    for (let item in data) {
      console.log(data[item])
      let x = data[item].latdeg;
      let y = data[item].londeg;
      //this.locations[item] = [x, y];
      this.locations.push([x,y])
    }
    console.log(this.locations)
  }

  getNumberOfRealFireballs() {
    //return this.realCountOfFireBalls;
    return "commented out whilst building app"
  }

  searchByDate(searchTerm){
    console.log("this is the parent: ")
    console.log(searchTerm)
    this.FireballDataService.fetchDataByMinDate2(searchTerm).then((data) => {
      this.fireballData = data;
      this.countOfFireballs = this.fireballData.length;
      // console.log(this.fireballData);
      this.getLocationsFromData(this.fireballData);
     
    })
  }

  ngOnInit() {
    this.getdata();
  }

}
