import { Component, OnInit } from '@angular/core';
import { FavoriteStoreService } from '../favorite-store.service';
import { Observable } from 'rxjs';
import { MovieOverview } from 'src/app/movies/models/MovieOverview';
import { Store, select } from '@ngrx/store';
import { MovieStore } from 'src/app/store/movies/movies.store';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})

export default class FavoritesComponent implements OnInit {
    favoriteObservable$!: Observable<MovieStore>; // Usar o tipo correto retornado pelo serviço
    favoriteList: Array<MovieOverview> = [];

    constructor(
        private store: Store<{ favorites: MovieStore }>
    ) { }
    ngOnInit(): void {
        this.favoriteObservable$ = this.store.pipe(select('favorites'));
        this.favoriteObservable$.subscribe((data) => {
            this.favoriteList = this.favoriteList.concat(data.favorites);
        })
    }
}
