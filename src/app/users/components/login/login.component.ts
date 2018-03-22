import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { UserService } from '../../../core/services/user.service';

import 'rxjs/add/operator/retry';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formBuilder = new FormBuilder();
  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8), (control: FormControl) => {
      if (control.value && control.value.length > 12) {
        return {
          maxLength: {
            value: control.value,
            message: 'Error maximo de longitud.'
          }
        };
      } else {
        return null;
      }
    }]]
  });

  public mode :string;

  constructor(private _userService:UserService) { 
    this.mode = 'login';
  }

  ngOnInit() {

  }

  submitLogin(form):void{
    console.log('submitLogin');
    if(this.loginForm.valid){
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      this._userService.login(username, password)
        .retry(3)
        .subscribe((data) => {
          console.log(data, 'Login')
        });
    }else {
      Object.keys(this.loginForm.controls).forEach((field) => {
        const control = this.loginForm.get(field);

        control.markAsTouched({ onlySelf: true });
      });

      this.loginForm.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
  }

  public onChangeMode(data:any):void{
    this.mode = data;
    this.loginForm.reset();
  }


}
