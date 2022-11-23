import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pelicula } from 'src/app/interfaces/pelicula-interface';
import { Serie } from 'src/app/interfaces/serie-interface';
import { TodopelisService } from 'src/app/services/todopelis.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styles: [
  ]
})
export class PopularesComponent implements OnInit {

  peliculas: Pelicula[] = [];
  series   : Serie[] = [];

  constructor( private tpService: TodopelisService,
               private router: Router ) { }

  ngOnInit(): void {
    this.tpService.getPeliculas()
    .subscribe( peliculas => this.peliculas = peliculas.results.slice(0,10) );
    
    this.tpService.getSeries()
    .subscribe( series => this.series = series.results.slice(0,10));
  }

  detallesp(id: string) {
    this.router.navigate(['tp/detallesp', id]);
  }
  
  detalless(id: string) {
    this.router.navigate(['tp/detalless', id]);
  }

}
