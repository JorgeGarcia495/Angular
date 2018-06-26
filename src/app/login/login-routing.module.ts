import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { NuevaPasswordComponent } from './nueva-password/nueva-password.component';

const routes: Routes = [
    { path: 'loginReset', component: LoginResetComponent},
    { path: 'nuevaPassword', component: NuevaPasswordComponent },
    { path: '', component: LoginComponent}
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
