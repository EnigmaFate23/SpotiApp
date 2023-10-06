import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBfUwjQkpPf7m3Xlyho4z-uikXDg-L4IfFoMmk1b8SE-RGZW33vgj-I8jkQ9wTSa2Cky2_bwl9z0V_9QsvY3x_61GrzbeBugph7lOWmPxGgVkxvJxw'
    });

    return this.http.get(url, { headers });

  }


  getAlbumTheHives(){
    return this.getQuery('albums/6agQKhrctciHD4QH7KufOS')
            .pipe( map( data => data ));
  }

  getAlbumDojaCat(){
    return this.getQuery('albums/6DmPNcfpkXBVRJsEIJY9tl')
            .pipe( map( data => data ));
  }

  getAlbumAlbum5(){
    return this.getQuery('albums/6DmPNcfpkXBVRJsEIJY9tl')
            .pipe( map( data => data ));
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }

}
