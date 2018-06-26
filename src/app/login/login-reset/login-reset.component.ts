import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reset',
  templateUrl: './login-reset.component.html',
  styleUrls: ['./login-reset.component.css']
})
export class LoginResetComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  resetform = this.fb.group({
    email: ['', Validators.required]
  });

  ngOnInit() {
  }

}
