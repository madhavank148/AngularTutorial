import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName:string="";
  fontColor:string="";
  todayDate:Date;
  genderType:string;
constructor(){
  this.userName ="Madhavan"; //bring this up from the login screen/db
  this.fontColor="pink"; //db - theme set //style binding
  this.todayDate=new Date(); //db - theme set //style binding
  this.genderType="M"
}
}
