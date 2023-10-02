import { Injectable } from '@angular/core';
import { PopularMoviesResponse } from './models/PopularMoviesResponse';
import { Movie } from './models/Movie';
import { HttpClient } from '@angular/common/http';
import { Observable, map, retry } from 'rxjs';
import { MovieOverview } from './models/MovieOverview';

@Injectable({
    providedIn: 'root'
})
export class MoviesApiService {
    constructor(private http: HttpClient) { }

    getPopularMovies(): Observable<Array<MovieOverview>> {
        return this.http.get<PopularMoviesResponse>('movie/popular')
            .pipe(
                map(data => data.results),
                retry(3)
            )
    }

    getMovieDetail(movieId: Number): Observable<Movie> {
        return this.http.get<Movie>(`movie/${movieId}`)
    }
}
