import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  visitorCount:number;
 
  constructor(){
    this.visitorCount=100; //db - theme set //style binding
  }
}
