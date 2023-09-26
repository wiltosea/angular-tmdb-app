import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-HTTP';
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      console.log(data);
    });
  }
}
