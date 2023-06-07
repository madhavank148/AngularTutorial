import { Injectable } from '@angular/core';
import  data  from "../assets/Movie.json";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {
   }
   getMovieData(){
    return data;
   }
}
