import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'; // para el get
import 'rxjs/add/operator/do'; // para el get

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public signUp(user:User):Observable<User>{
    return this._http.post('users/', user);
  }

  public login(username:string, password:string){
    return this._http.post('authenticate/', {
      username:username,
      password:password
    });
  }

  public getAll():Observable<any>{
    return this._http.get('users/');
  }

  // public async getAll (): Promise<User[]> {
  //   return this._http.get<User[]>('users/')
  //     .toPromise()
  //     .then((users: User[]) => users)
  //     .catch();
  // }

}
