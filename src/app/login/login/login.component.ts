import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showAlert = false;

    constructor(private fb: FormBuilder) {

    }

    loginform = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    get username() { return this.loginform.get('username'); }
    get password() { return this.loginform.get('password'); }

    ngOnInit() {

    }
}
