import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements OnInit {
  title = 'Fireball Mapper';
  lat = -33.8;
  lng = 151.2;
  constructor() { }

  ngOnInit() {
  }

}
