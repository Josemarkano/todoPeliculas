import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula, Tpelicula } from '../interfaces/pelicula-interface';
import { Tserie, Serie } from '../interfaces/serie-interface';


@Injectable({
  providedIn: 'root'
})
export class TodopelisService {

  private apiKey: string = '8317cfba8ad41a7bd81c95444054d596';
  private apiUrl: string = 'https://api.themoviedb.org/3/';

  constructor( private http: HttpClient ) { }

  getPeliculas ():Observable<Tpelicula> {

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('language', 'es-ES')

    return this.http.get<Tpelicula>(`${this.apiUrl}movie/popular`,{params});      
    
  }

  getSeries ():Observable<Tserie> {

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('language', 'es-ES')

    return this.http.get<Tserie>(`${this.apiUrl}tv/popular`,{params});      
    
  }

  getPeliculaPorId (id: string):Observable<Pelicula> {

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('language', 'es-ES')

    return this.http.get<Pelicula>(`${ this.apiUrl }movie/${id}`,{params});
              
  };

  getSeriePorId (id: string):Observable<Serie> {

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('language', 'es-ES')

    return this.http.get<Serie>(`${ this.apiUrl }tv/${id}`,{params});
              
  };

}
