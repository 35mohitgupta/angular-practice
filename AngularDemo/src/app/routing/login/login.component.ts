import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginRegisterService } from '../service/user-login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failureMsg: string;

  constructor(private formBuilder: FormBuilder, private userService: UserLoginRegisterService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['', Validators.required]
    });
  }

  login(){
      this.failureMsg = this.userService.loginUser(this.loginForm.get('email').value,this.loginForm.get('password').value);
  }

}
