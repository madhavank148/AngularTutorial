import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieData: any[];

  specificData: any;

  movieTitle: any;

  selectedMovieData: any;

  constructor(
    private objRoute: ActivatedRoute,
    private objService: MovieService
  ) {
    //dependency injection
    // this.movieData = data;//data from the service
    this.movieData = objService.getMovieData();
  }

  ngOnInit() {
    //extract the parameter   //Rxjs - observables, observer, subscribe->notify, unsubsrcibe

    // console.log('ng on init fired');

    this.objRoute.paramMap.subscribe((params) => {
      this.movieTitle = params.get('movieName');

      console.log(this.movieTitle);

      this.getSelectedMovieData(this.movieTitle);
    });

    //display the respective movie data on the UI
  }

  getSelectedMovieData(mtitle: string) {
    for (let d of this.movieData) {
      if (d.title == mtitle) {
        this.selectedMovieData = d;

        break;
      }
    }
  }

  //http://localhost:4200/Movies/Drishyam
}
