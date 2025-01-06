import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Artwork } from '../models/artwork.interface';
@Injectable({
  providedIn: 'root'
})
export class artworkService {

  constructor(private http: HttpClient) {}

  getAllArtwork():Observable<Artwork[]>{
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,artist_display,image_id,description').pipe(
      map(response => response.data));
  }
  getArtworkById(id:string | null):Observable<Artwork>{
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks/'+ id +'/?fields=id,title,date_display,artist_display,image_id,description').pipe(
      map(response => response.data));
  }
}
 