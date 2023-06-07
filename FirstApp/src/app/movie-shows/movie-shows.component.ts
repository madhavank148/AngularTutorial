import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-shows',
  templateUrl: './movie-shows.component.html',
  styleUrls: ['./movie-shows.component.css']
})
export class MovieShowsComponent {
  movieData:any[];
  constructor(private objService:MovieService){
    //this.movieData = data;//get the data from the service
    this.movieData = objService.getMovieData();
  }
}
