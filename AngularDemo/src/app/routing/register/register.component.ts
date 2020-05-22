import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginRegisterService } from '../service/user-login-register.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  register(){
    let user: User = this.registerForm.value;
    console.log(user);
    this.userService.registerUser(user)
  }

  constructor(private formBuilder: FormBuilder, private userService: UserLoginRegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['', Validators.required],
      phoneNo: ['',Validators.required]
    });
  }

}
