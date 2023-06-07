import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  //previous content and the next content

  //array of movies =4  0,1,2,3

  //beginning - counter=0

  //next ctr++     //prev ctr--

  //counter

  counter: number;

  movieJSON: any[];

  constructor() {
    this.counter = 0;

    this.movieJSON=[

      {

        "title": "Anand",

        "year": "1971",

        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ0MzA3NDY3Nl5BMl5BanBnXkFtZTcwOTAwMzIzMg@@._V1_SY235_CR0,0,177,235_AL_.jpg"

      },

      {

        "title": "Dangal",

        "year": "2016",

        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg"

      },

      {

        "title": "Drishyam",

        "year": "2013",

        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg"

      },

      {

        "title": "Nayakan",

        "year": "1987",

        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMjMzMzU2N15BMl5BanBnXkFtZTgwMDkxOTE3NDE@._V1_SY250_CR0,0,187,250_AL_.jpg"

      }

    ];
  }

  //0,1,2,3

  //2=>1, 3=>2

  //0=>3

  previousMovie() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.movieJSON.length - 1;
    }
  }

  //0,1,2,3

  //3=>0

  //1=>2

  nextMovie() {
    if (this.counter < this.movieJSON.length - 1) this.counter++;
    else this.counter = 0;
  }
}
