import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'tp',
    loadChildren: () => import ('./todopelis/todopelis.module').then( m => m.TodopelisModule)
  },
  {
    path: '',
    redirectTo: 'tp/populares',
    pathMatch: 'full'
  },
 
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
