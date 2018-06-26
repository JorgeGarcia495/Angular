import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    public auth: AuthenticationService,
    public router: Router
  ) { }
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  canLoad(): boolean {
    return this.canActivate();
  }
}
