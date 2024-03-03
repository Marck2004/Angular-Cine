import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatChipsModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router:Router){

  }

  cerrarSesion(){
    if(localStorage.getItem("usuario")){
      localStorage.removeItem("usuario");
      if(localStorage.getItem("pelicula")){
        localStorage.removeItem("pelicula");
      }
    }
    this.router.navigate(["inicioSesion"]);
  }
}
