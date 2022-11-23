import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetallespComponent } from './detallesp/detallesp.component';
import { DetallessComponent } from './detalless/detalless.component';
import { PopularesComponent } from './populares/populares.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'populares', component: PopularesComponent},
      {path: 'peliculas', component: PeliculasComponent},
      {path: 'series', component: SeriesComponent},
      {path: 'detallesp/:id', component: DetallespComponent},
      {path: 'detalless/:id', component: DetallessComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodopelisRoutingModule { }
