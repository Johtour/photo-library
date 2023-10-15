import { Component, OnInit } from '@angular/core';
import { ImageResponseI } from 'src/app/services/images.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  localStorageArray:ImageResponseI[] = []
  constructor() { }

  ngOnInit(): void {
    const favorites = localStorage.getItem('photo')
    this.localStorageArray = favorites ? JSON.parse(favorites) : [];
  }

  favoriteImageClicked(photo:any){
    console.log(photo);
  }

}
