
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { HeroService } from './services/hero.service';
import { BsModalService } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuardService, AuthenticationService, HeroService, BsModalService],
})
export class CoreModule { }
