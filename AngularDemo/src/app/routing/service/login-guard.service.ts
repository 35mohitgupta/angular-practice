import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserLoginRegisterService } from './user-login-register.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private loginService: UserLoginRegisterService, private router: Router) { }

  canActivate(): boolean{
    if(this.loginService.loginSuccess)
      return true;
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
