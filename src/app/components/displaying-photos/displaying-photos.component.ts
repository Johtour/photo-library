import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageResponseI, ImagesService } from 'src/app/services/images.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-displaying-photos',
  templateUrl: './displaying-photos.component.html',
  styleUrls: ['./displaying-photos.component.scss']
})
export class DisplayingPhotosComponent implements OnInit {

  page: number = 1;
  photosArray:ImageResponseI[] = [];

  loadingMoreImages: boolean = false;
  constructor(
    private http: HttpClient,
    public imagesService:ImagesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getNewPhotos();
  }

  getNewPhotos(){
    if (this.loadingMoreImages) {
      return; // Do nothing if a request is already in progress
    }

    this.loadingMoreImages = true;
    const delay = Math.floor(Math.random() * 101) + 200;
    const getImages$ = this.imagesService.getImagesData(this.page).subscribe((data)=>{
      console.log(data);
      console.log('photosArray length:', this.photosArray.length);
      if(this.photosArray.length){
        setTimeout(() => {
          this.photosArray = this.photosArray.concat(data);
          getImages$.unsubscribe();
        }, delay);
      }
      else{
        console.log('nelo2')
        this.photosArray = data;
      }    
      getImages$.unsubscribe();
      setTimeout(() => {
        this.loadingMoreImages = false;
      }, 5000);
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Check if the user has scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // If yes, load more images
      this.page++;
      this.getNewPhotos();
    }
  }

  addImageToFavorites(photo:ImageResponseI){
    console.log(photo);
    const localStorageArray = this.getFavoritesFromLocalStorage();
    console.log(localStorageArray);
    if(localStorageArray){
      if (!localStorageArray.some((item:ImageResponseI) => item.id === photo.id)) {
        localStorageArray.push(photo);
        this.updateFavoritesInLocalStorage(localStorageArray);
        this.toastr.success('Photo added to favorites');
      } else {
        this.toastr.warning('Photo is already in favorites');
      }
    }
    else{
      localStorageArray.push(photo);
      this.updateFavoritesInLocalStorage(localStorageArray);
      this.toastr.success('Photo added to favorites');
    }
  }

  getFavoritesFromLocalStorage(){
    const favoritesJson = localStorage.getItem('photo');
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  updateFavoritesInLocalStorage(localStorageArray:ImageResponseI[]) {
    localStorage.setItem('photo', JSON.stringify(localStorageArray));
  }
}
