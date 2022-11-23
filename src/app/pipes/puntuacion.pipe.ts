import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula-interface';
import { Serie } from '../interfaces/serie-interface';

@Pipe({
  name: 'puntuacion',
  pure: false
})
export class PuntuacionPipe implements PipeTransform {

  transform(termino: Pelicula | Serie): number {
    if (!termino.id && !termino.vote_average) {
      return 0 ;
    } else  if ( termino.vote_average ) {
      return termino.vote_average * 10 ;
    } else {
      return termino.vote_average * 10 ;
    }
  }

}
