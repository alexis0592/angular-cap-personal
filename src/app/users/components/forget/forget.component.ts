import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  public formBuilder: FormBuilder = new FormBuilder();
  public forgotForm: FormGroup = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]]
  });

  constructor() { }

  ngOnInit() {
  }

}
