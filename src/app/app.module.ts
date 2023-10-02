import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationRoutingModule } from './application-routing/application-routing.module';
import { MoviesModule } from './movies/movies.module';
import { MoviesApiInterceptorProvider } from './interceptors/MoviesApiInterceptor';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/movies/movies.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MoviesModule,
        RouterModule,
        HttpClientModule,
        ApplicationRoutingModule,
        StoreModule.forRoot({ favorites: movieReducer }, {}),
    ],
    providers: [MoviesApiInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
