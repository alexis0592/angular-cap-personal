import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

import 'rxjs/add/operator/retry';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formBuilder = new FormBuilder();
  public registerForm: FormGroup = this.formBuilder.group({
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
    }]],
    email:['', [Validators.email]]
  });

  @Output() public modeChange:EventEmitter<string> = new EventEmitter<string>();

  @Input() set mode(mode: string) {
    this.modeValue = mode;
  }

  public modeValue: string;
  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  public goBack():void{
    this.registerForm.reset();

    this.modeValue = 'login'
    this.modeChange.emit(this.modeValue);
  }

  submitRegister(form):void{
    if(this.registerForm.valid){
      const username:string = this.registerForm.get('username').value;
      const password:string = this.registerForm.get('password').value;
      const email:string = this.registerForm.get('email').value;
      const user:User = new User(username, password, email);

      this._userService.signUp(user)
        .retry(3)
        .subscribe((data) => {
          console.log(data, 'SignUp');
        });
    }else {
      Object.keys(this.registerForm.controls).forEach((field) => {
        const control = this.registerForm.get(field);

        control.markAsTouched({ onlySelf: true });
      });

      this.registerForm.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
  }
  

}
