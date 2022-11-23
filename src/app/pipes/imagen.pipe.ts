import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula-interface';
import { Serie } from '../interfaces/serie-interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(termino: Pelicula | Serie): string {

    if (!termino.id && !termino.poster_path) {
      return 'assets/no-image.png';
    } else  if ( termino.poster_path ) {
      return 'https://image.tmdb.org/t/p/original/' + termino.poster_path;
    } else {
      return 'https://image.tmdb.org/t/p/original/' + termino.poster_path;
    }

  }

}
