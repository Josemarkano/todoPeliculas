import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta : string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li, a{
      cursor:pointer;
    }    
  `]
})
export class NavbarComponent {

  todopeliMenu: MenuItem[] = [
    {
      texto: 'Peliculas',
      ruta: 'tp/peliculas'
    },
    {
      texto: 'Series',
      ruta: 'tp/series'
    }
  ];

  todohomeMenu: MenuItem[] = [
    {
      texto: 'Todo Peliculas',
      ruta: 'tp/populares'
    }
  ];

  
 
}
