import { Component } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { MovieOverview } from '../models/MovieOverview';
import { FavoriteStoreService } from 'src/app/favorites/favorite-store.service';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
    public movies: Array<MovieOverview> = [];
    constructor(
        private moviesApiService: MoviesApiService,
        private favoriteStore: FavoriteStoreService
    ) {
        this.favoriteStore.favoriteList$.subscribe((data) => {
            console.log("recebemos novos dados", data);
        }
        );

    }
    ngOnInit(): void {
        this.moviesApiService.getPopularMovies().subscribe((movies) => {
            this.movies = movies;
        })
    }
}
