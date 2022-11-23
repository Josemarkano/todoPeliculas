import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallespComponent } from './detallesp/detallesp.component';
import { DetallessComponent } from './detalless/detalless.component';
import { ImagenPipe } from '../pipes/imagen.pipe';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PopularesComponent } from './populares/populares.component';
import { PuntuacionPipe } from '../pipes/puntuacion.pipe';
import { SeriesComponent } from './series/series.component';
import { TodopelisRoutingModule } from './todopelis-routing.module';



@NgModule({
  declarations: [
    DetallespComponent,
    DetallessComponent,
    ImagenPipe,
    PeliculasComponent,
    PopularesComponent,
    PuntuacionPipe,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    TodopelisRoutingModule
  ]
})
export class TodopelisModule { }
