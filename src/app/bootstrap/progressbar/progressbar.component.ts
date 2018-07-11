import { Component, OnInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  value = 0;
  type = 'warning';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      while (this.value < 100) {
        this.value++;
        if (this.value === 100) {
          setTimeout(() => {
            this.type = 'success';
          }, 400);
        }
      }
    }, 250);
  }


}
