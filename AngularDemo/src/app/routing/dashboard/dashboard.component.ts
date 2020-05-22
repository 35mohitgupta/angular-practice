import { Component, OnInit } from '@angular/core';
import { RoutingParamsService } from '../service/routing-params.service';
import { UserLoginRegisterService } from '../service/user-login-register.service';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  email: string
  

  constructor(private userService: UserLoginRegisterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let email = this.routingParamService.getEmailParam();
    this.route.params.subscribe(param => this.email = param['emailId']);
    this.user = this.userService.getUserDetails(this.email);
    console.log(this.user)
  }

  logout(){
    this.userService.logout();
  }




}
