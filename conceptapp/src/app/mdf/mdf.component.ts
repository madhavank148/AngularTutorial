import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MDFComponent {
  frmRegistration:any;

  //constructor - add all the controls FormGroup - validation

  constructor(){
    this.frmRegistration = new FormGroup({
      name : new FormControl('',[Validators.required]), //required
      age:new FormControl('',Validators.minLength(1)), //minimum length
      email: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]) //required, pattern
    })
  }
  receiveValues(){
    console.log(this.frmRegistration.value.name + " "  +this.frmRegistration.value.age + this.frmRegistration.value.email)
  }
}
