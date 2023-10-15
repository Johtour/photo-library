import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DisplayingPhotosComponent } from './components/displaying-photos/displaying-photos.component';
import { SingleFavoriteImageComponent } from './components/single-favorite-image/single-favorite-image.component';


const routes: Routes = [
  { path: '' , component: DisplayingPhotosComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: 'photos/:id', component: SingleFavoriteImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
