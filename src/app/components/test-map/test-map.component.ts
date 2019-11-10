import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements OnInit {
  @Input() locations;
  
  
  zoom =1;
  coordinates = [
     [12.0, -76.0],
     [51.5, 0.14],
     [60.5, 0.14]
  ]

  setLocations(){
      console.log("*************")
      console.log(this.locations)
      console.log("*************")
  }

  title = 'My first AGM project';
  lat = 21.678418;
  lng = 20.809007;
  mapType = 'satellite';
  
  constructor() {
    console.log("hello")
   }
  
 

  ngOnInit() {
    this.setLocations();
  }

}
