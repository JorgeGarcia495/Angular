import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.css']
})
export class AccordionExampleComponent implements OnInit {
  isFirstDisabled = false;
  isFirstOpen = true;
  oneAtAtime = true;
  customClass = 'customClass';
  items = ['Item 1', 'Item 2', 'Item 3'];
  objects = ['Object', 'Object 2', 'Object 3'];

  constructor() { }

  ngOnInit() {
  }

  addItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  addobjects() {
    this.objects.push(this.objects[0]);
  }

  resetobjects() {
    this.objects = ['Object', 'Object 2', 'Object 3'];
  }

  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }

}
