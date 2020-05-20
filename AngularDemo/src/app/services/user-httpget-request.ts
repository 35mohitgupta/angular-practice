import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable()
export class GetUserService{

    getUserUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private httpClient: HttpClient){}

    getAllUsers(): Observable<User[]>{
        //
        return this.httpClient.get<User[]>(this.getUserUrl).pipe(retry(3));
    }
}