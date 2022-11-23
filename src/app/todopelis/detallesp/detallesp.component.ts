import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { Pelicula } from 'src/app/interfaces/pelicula-interface';
import { TodopelisService } from 'src/app/services/todopelis.service';

@Component({
  selector: 'app-detallesp',
  templateUrl: './detallesp.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`]
})
export class DetallespComponent implements OnInit {

  pelicula:  Pelicula = {
    id:            '',
    overview:      '',
    poster_path:   '',
    title:         '',
    vote_average:  0,
    genres:        '',
    runtime:       0
  }

  constructor( private activatedRoute: ActivatedRoute,
               private tpServices: TodopelisService,
               private router: Router, ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.tpServices.getPeliculaPorId(id))
    )
    .subscribe( pelicula => this.pelicula = pelicula);

  }

  regresar() {
    this.router.navigate(['tp/populares']);
  }

}
