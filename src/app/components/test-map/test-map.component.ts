import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements OnInit {

  zoom =1;
  coordinates = [
    [12.0, 76.0],
    [51.5, 0.14],
    [60.5, 0.14]
  ]

  title = 'My first AGM project';
  lat = 21.678418;
  lng = 20.809007;
  mapType = 'satellite';

  constructor() { }

  ngOnInit() {
  }

}
