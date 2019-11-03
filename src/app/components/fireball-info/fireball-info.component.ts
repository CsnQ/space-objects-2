import { Component, OnInit } from '@angular/core';
import { FireballDataService } from '../../services/fireball-data.service';

@Component({
  selector: 'app-fireball-info',
  templateUrl: './fireball-info.component.html',
  styleUrls: ['./fireball-info.component.scss']
})
export class FireballInfoComponent implements OnInit {
  fireballData;
  countOfFireballs;

  constructor(private FireballDataService: FireballDataService) {
    this.FireballDataService.fetchFireballData().then((data) => {
      this.fireballData = data;
      this.countOfFireballs = this.fireballData.count;
    })
  }
  getNumberOfFireballs() {
    return this.countOfFireballs;
  }
  ngOnInit() {
  }

}