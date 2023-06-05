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
  constructor(){
    this.userName ="Madhavan"; //bring this up from the login screen/db
    this.fontColor="pink"; //db - theme set //style binding
  }
}
