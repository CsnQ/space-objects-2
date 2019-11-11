import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements OnInit {
  @Input() locations;
  //location data can be rendered directly in the HTML
  
  zoom =1;
  title = 'Space Objects';
  //default position of the map 
  lat = 21.678418;
  lng = 20.809007;
  mapType = 'satellite';
  
  constructor() {
    console.log("hello")
   }
  
   showdata(){
     console.log("data is: ")
     console.log(this.locations)
   }

  ngOnInit() {
    // this.showdata()
    
  }

}
