import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError, throwError } from 'rxjs';
import { MovieHttpResult } from './types/movies/MovieHttpResult';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpService: HttpClient) { }

  getMovies() {
    return this.httpService.get<MovieHttpResult>('movie/popular')
      .pipe(
        map((data) => data.results),
        retry(3),
        catchError(this.handleApiError),
      );
  }
  private handleApiError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("client-side or network error has happpned")
    } else {
      console.error(`the API return with error ${error.status} and the error message is ${error.error}`)
    }
    return throwError("please try again later")
  }
}
