import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  checkModel: any = { left: false, middle: true, right: false };
  singleModel: any = '1';
  radioModel: any = 'Middle';
  uncheckable: any = 'Middle';
  disabled = true;
  form: FormGroup;
  radioForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      left: false,
      middle: true,
      right: false
    });

    this.radioForm = this.fb.group({
      radio: 'C'
    });
  }
}
