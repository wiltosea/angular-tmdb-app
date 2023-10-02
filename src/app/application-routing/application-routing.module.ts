import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from '../movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from '../movies/movie-details/movie-details.component';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot([{
            path: "",
            component: MoviesListComponent
        },
        {
            path: "movie/:id",
            component: MovieDetailsComponent
        },
        {
            path: 'favorite-movies',
            loadChildren: () =>
                import(/*webpackChunkName: "favorite-movies" */'../favorites/favorites.module').then(
                    m => m.FavoritesModule
                )
        },])
    ]
})
export class ApplicationRoutingModule { }
