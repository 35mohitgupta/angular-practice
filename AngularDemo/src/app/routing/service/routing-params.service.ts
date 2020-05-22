import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingParamsService {

  emailId: string;

  constructor(private route: ActivatedRoute) { }


  //wrong can't access param outside the route component
  getEmailParam(): string{
    this.route.paramMap.subscribe(param => {
      this.emailId = param.get('emailId');
      console.log('param',param);
    });
    console.log('email ',this.emailId)
    return this.emailId;
  }
}
