import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MovieOverview } from "../movies/models/MovieOverview";

@Injectable({
    providedIn: 'root'
})

export class FavoriteStoreService {
    favoriteList$ = new BehaviorSubject<Array<MovieOverview>>([]);

    addToFavorite(movie: MovieOverview) {
        this.favoriteList$.next([...this.favoriteList$.getValue(), movie]);
    }
}
