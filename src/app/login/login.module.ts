import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { routing } from './login-routing.module';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { NuevaPasswordComponent } from './nueva-password/nueva-password.component';

@NgModule( {
    imports: [
        CommonModule,
        routing
    ],
    declarations: [ LoginComponent, LoginResetComponent, NuevaPasswordComponent ]
})
export class LoginModule { }
