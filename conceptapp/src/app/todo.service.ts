import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TODOService {
  //avail the service from HTTPClient => helps to get the data using the REST API
  //https://jsonplaceholder.typicode.com/todos
  url: string = '';
  constructor(private objHTTPClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  getTodoData() {
    return this.objHTTPClient.get(this.url);
  } // returns observable object
}
