import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginRegisterService {

  users= new Map<string,User>();
  loginSuccess: boolean;


  loginUser(email: string,password: string): string{
    let user=this.users.get(email);
    let  loginFailureMsg: string;
    if(user && user.password==password){
        this.loginSuccess=true;
        loginFailureMsg='';
        this.router.navigate(['/dashboard',email]);
    }else{
      this.loginSuccess=false;
      loginFailureMsg="Invalid User Login";
    }
    return loginFailureMsg
  }

  logout(){
    this.loginSuccess=false;
    this.router.navigate(['/login']);
  }

  registerUser(newUser: User){
      this.users.set(newUser.email,newUser);
      console.log(this.users)
      this.router.navigate(['/login'])
      return 'User successfully registered';
  }

  getUserDetails(email: string): User{
    console.log(email,this.users.get(email))
    return this.users.get(email);
  }

  constructor(private router: Router) { }
}
