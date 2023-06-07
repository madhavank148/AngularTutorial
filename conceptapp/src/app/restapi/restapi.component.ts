import { Component } from '@angular/core';
import { TODOService } from '../todo.service';
@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RESTAPIComponent {
  todoData:any=[];

  constructor(private objToDoService:TODOService){

    this.todoData = objToDoService.getTodoData().subscribe((data:any)=>{

      this.todoData = data;

    })

  }
}
