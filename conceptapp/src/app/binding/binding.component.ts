import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  address:any ="";
  isChecked:boolean=false;
  constructor(){
    this.address="Hyderabad";

  }
}
