import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";


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

  @Input() set mode(mode: string) {
    this.modeValue = mode;
  }

  public modeValue: string;
  constructor() { }

  ngOnInit() {
  }

}
