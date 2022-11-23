import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Serie } from '../../interfaces/serie-interface';
import { TodopelisService } from '../../services/todopelis.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: [
  ]
})
export class SeriesComponent implements OnInit {

  series: Serie[] = [];

  constructor( private tpService: TodopelisService,
               private router: Router ) { }

  ngOnInit(): void {
    this.tpService.getSeries()
    .subscribe(series => this.series = series.results);
  }

  detalles(id: string) {
    this.router.navigate(['tp/detalless', id]);
  }

}
