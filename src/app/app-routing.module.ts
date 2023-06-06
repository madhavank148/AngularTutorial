import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { MovieShowsComponent } from './movie-shows/movie-shows.component';

const routes: Routes = [
  {path:"/home", component:SliderComponent}, 
   {path:"movies", component:MovieShowsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
