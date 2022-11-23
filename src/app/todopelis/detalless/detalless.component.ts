import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs';

import { Serie } from 'src/app/interfaces/serie-interface';
import { TodopelisService } from 'src/app/services/todopelis.service';

@Component({
  selector: 'app-detalless',
  templateUrl: './detalless.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`]
})
export class DetallessComponent implements OnInit {

  serie: Serie = {
    id:            '',
    overview:      '',
    poster_path:   '',
    name:          '',
    vote_average:  0,
    genres:        '',
    type:          ''
  }
  
  constructor( private activatedRoute: ActivatedRoute,
               private tpServices: TodopelisService,
               private router: Router, ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.tpServices.getSeriePorId(id)),
      tap(console.log)
  )
  .subscribe( serie => this.serie = serie);

  }

  regresar() {
    this.router.navigate(['tp/populares']);
  }

}
