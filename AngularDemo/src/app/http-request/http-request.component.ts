import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/user-httpget-request';
import { User } from '../models/User';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  users: User[] = [];
  
  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
  }

  getUsers(){
    this.getUserService.getAllUsers().subscribe(
      users => this.users = users,
      error => console.log(error.message)
      );
  }


}
