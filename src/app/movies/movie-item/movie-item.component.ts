import { Component, Input } from '@angular/core';
import { MovieOverview } from '../models/MovieOverview';
import { FavoriteStoreService } from 'src/app/favorites/favorite-store.service';
import { addToFavorite } from 'src/app/store/movies/movies.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
    @Input() movie!: MovieOverview;

    constructor(
        private favoriteStore: FavoriteStoreService,
        private store: Store) { }

    addToFavorite() {
        this.store.dispatch(addToFavorite({ movie: this.movie }));
    }
}
