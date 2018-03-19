import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

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

  constructor() { 
    this.mode = 'login';
  }

  ngOnInit() {

  }

  submitLogin(form):void{
    console.log('submitLogin');
  }

}
