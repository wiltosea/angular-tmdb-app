// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-movie-list',
//   templateUrl: './movie-list.component.html',
//   styleUrls: ['./movie-list.component.css']
// })
// export class MovieListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.movies = data;
      },
      (error) => {
        console.error('Erro ao buscar filmes:', error);
      }
    );
  }
}
