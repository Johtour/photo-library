import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,  map, switchMap} from 'rxjs/operators';
import { Observable, of, from, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  
  constructor(
    private http: HttpClient
  ) { }

  // we get a list of images (but they are huge in size)
  getImagesData(page:number):Observable<ImageResponseI[]>{
    return this.http.get<ImageResponseI[]>('https://picsum.photos/v2/list',{params:{page:page,limit:9}}).pipe(catchError((error)=>{
      return of([]);
    }))
  }
 
}


export interface ImageResponseI {
  id:string;
  author:string;
  width:number;
  height:number;
  url:string;
  download_url:string;
}