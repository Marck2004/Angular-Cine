import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Router, RouterLink } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-nav-usuario',
  standalone: true,
  imports: [MatChipsModule,RouterLink,CarritoComponent],
  templateUrl: './nav-usuario.component.html',
  styleUrl: './nav-usuario.component.css'
})
export class NavUsuarioComponent {
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
