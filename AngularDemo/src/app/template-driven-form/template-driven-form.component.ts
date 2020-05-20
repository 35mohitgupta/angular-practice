import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  username: string;
  password: string;
  successMsg: string;
  failureMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.username+'123'===this.password){
      this.successMsg="User Logged in Successfully";
      this.failureMsg="";
    }else{
      this.successMsg="";
      this.failureMsg="Failed to Logged in";
    }
  }

}
