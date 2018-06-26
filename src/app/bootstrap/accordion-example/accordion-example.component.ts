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
  penes = ['8====D', '8====D', '8====D'];

  constructor() { }

  ngOnInit() {
  }

  addItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  addPenes() {
    this.penes.push(this.penes[0]);
  }

  resetPenes() {
    this.penes = ['8====D', '8====D', '8====D'];
  }

  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }

}
