import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {
  title = 'Título';
  content = 'Binding popover content...';
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onShown() {
    this.message = 'Ahora me muestro';
  }

  onHidden() {
    this.message = 'Me escondo';
  }

}
