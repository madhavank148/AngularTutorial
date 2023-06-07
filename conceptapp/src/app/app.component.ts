import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conceptapp';
  address:any ="";
  constructor(){
    this.address="Hyderabad";

  }
}
