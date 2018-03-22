import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() public modeChange:EventEmitter<string> = new EventEmitter<string>();

  @Input() set mode(mode:string){
    this.modevalue = mode;
  }

  public modevalue:string;

  constructor() { }

  ngOnInit() {
  }

  public goBack():void{
    this.forgotForm.reset();

    this.modevalue = 'login';
    this.modeChange.emit(this.modevalue);
  }

}
