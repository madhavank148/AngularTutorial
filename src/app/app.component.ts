import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  /*display the user name*/
  userName:string="";
  fontColor:string="";
  visitorCount:number;
  todayDate:Date;
  genderType:string;
  constructor(){
    this.userName ="Madhavan"; //bring this up from the login screen/db
    this.fontColor="pink"; //db - theme set //style binding
    this.visitorCount=100; //db - theme set //style binding
    this.todayDate=new Date(); //db - theme set //style binding
    this.genderType="M"
  }
}
