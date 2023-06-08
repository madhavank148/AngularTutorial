import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TDFComponent {
  receiveValues(userRegForm: any) {
    console.log(userRegForm);

    console.log('User Name' + userRegForm.value.txtName);

    console.log('User Age' + userRegForm.value.txtAge);

    console.log('User Email' + userRegForm.value.txtEmail);
  }
}
