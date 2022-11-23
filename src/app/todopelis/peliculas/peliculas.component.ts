import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pelicula } from 'src/app/interfaces/pelicula-interface';
import { TodopelisService } from '../../services/todopelis.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [
  ]
})
export class PeliculasComponent implements OnInit {

 peliculas: Pelicula[] = [];

  constructor( private tpService: TodopelisService,
               private router: Router) { }

  ngOnInit(): void {
    this.tpService.getPeliculas()
    .subscribe(peliculas => this.peliculas = peliculas.results);
  }

  detalles(id: string) {
    this.router.navigate(['tp/detallesp', id]);
  }

}
