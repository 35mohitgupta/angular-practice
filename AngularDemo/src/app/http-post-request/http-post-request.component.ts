import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-post-request',
  templateUrl: './http-post-request.component.html',
  styleUrls: ['./http-post-request.component.css']
})
export class HttpPostRequestComponent implements OnInit {

  addUserForm: FormGroup;
  successMsg2: string;
  errorMsg: string;
  postUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      userId: ['',Validators.required],
      title: ['',Validators.required],
      body: ['',Validators.required]
    })
  }

  addUser(){
    console.log('form',this.addUserForm.value)
    this.http.post(this.postUrl,this.addUserForm.value)
      .subscribe(response => {
        this.successMsg2="User added successfully";
        this.errorMsg='';
        console.log('response',response)
      },
      error => {this.errorMsg=error.message;
        this.successMsg2='';
        console.log(error.message)  
      });
  }

}
