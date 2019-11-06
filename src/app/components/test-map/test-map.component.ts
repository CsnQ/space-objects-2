import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements OnInit {
  coordinates = [
    [12.0, 76.0],
    [51.5, 0.14],
    [60.5, 0.14]
  ]

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
