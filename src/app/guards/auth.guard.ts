import { AuthService } from './../modules/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    const user = this.authService?.user?.value;
    if (!user) {
      return false;
    }
    return true;
  }
}
