import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';

import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 public usersList:Array<User> = new Array<User>();
 
  constructor(private _userService:UserService) { 
    this.loadUsers();
    
  }

  ngOnInit() {
  }

  loadUsers():void{
    this._userService.getAll()
      .retry(3)
      //.subscribe((data) => console.log(data['items']));
      .subscribe((data) => {this.usersList = data['items'];
        console.log(this.usersList)});
    // this._userService.getAll()
    // .then((user) => {
    //   this.usersList = user;
    //   console.log(user);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

}
