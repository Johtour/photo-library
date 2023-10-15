import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayingPhotosComponent } from './components/displaying-photos/displaying-photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SingleFavoriteImageComponent } from './components/single-favorite-image/single-favorite-image.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayingPhotosComponent,
    LoadingSpinnerComponent,
    FavoritesComponent,
    SingleFavoriteImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
