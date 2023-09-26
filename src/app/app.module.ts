import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';
import { MovieListComponent } from './movie-list/movie-list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [movieApiInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
