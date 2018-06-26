import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(
    public router: Router
  ) { }

  public isAuthenticated(): boolean {
    return true;
  }
}
