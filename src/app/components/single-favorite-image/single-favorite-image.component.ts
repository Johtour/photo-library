import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ImageResponseI } from 'src/app/services/images.service';

@Component({
  selector: 'app-single-favorite-image',
  templateUrl: './single-favorite-image.component.html',
  styleUrls: ['./single-favorite-image.component.scss']
})
export class SingleFavoriteImageComponent implements OnInit {

  photo:ImageResponseI | null = null
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(params);
      const favorites = localStorage.getItem('photo');
      console.log(favorites);
      const localStorageArray:ImageResponseI[] = favorites ? JSON.parse(favorites) : [];
      console.log(localStorageArray);
      this.photo = localStorageArray.filter((item)=>item.id === params['id'])[0];
      console.log(this.photo);
    })
  }

  removePhotoFromFavorites(photo:any){
    console.log(photo);
    const favorites = localStorage.getItem('photo');
    const localStorageArray:ImageResponseI[] = favorites ? JSON.parse(favorites) : [];
    const filteredArray = localStorageArray.filter((item)=>item.id !== photo['id']);
    console.log(filteredArray);
    localStorage.setItem('photo', JSON.stringify(filteredArray));
    this.toastr.success('Photo Deleted From Favorites');
  }

}
