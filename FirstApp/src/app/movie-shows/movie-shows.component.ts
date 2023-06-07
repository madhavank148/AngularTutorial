import { Component } from '@angular/core';
import  data  from "../../assets/Movie.json";
@Component({
  selector: 'app-movie-shows',
  templateUrl: './movie-shows.component.html',
  styleUrls: ['./movie-shows.component.css']
})
export class MovieShowsComponent {
  movieData:any[];
constructor() { 
    this.movieData = data;
}
}
