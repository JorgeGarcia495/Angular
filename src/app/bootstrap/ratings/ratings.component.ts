import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  value = 0;
  max = 5;
  max2 = 10;
  rate = 7;

  isReadonly = false;

  overStar: number;
  percent: number;

  x = 5;
  y = 2;

  constructor() { }

  ngOnInit() {
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max2) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }
}
