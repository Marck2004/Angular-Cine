import { Component } from '@angular/core';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-realizada',
  standalone: true,
  imports: [NavUsuarioComponent],
  templateUrl: './compra-realizada.component.html',
  styleUrl: './compra-realizada.component.css'
})
export class CompraRealizadaComponent {
  constructor(private router:Router){

  }
  imgPelicula?:any;
  numEntradas?:number;
  hora?:String;
  fecha?:String;
  ngOnInit(){
    this.mostrarFoto();
  }
    mostrarFoto(){
      let Storage = localStorage.getItem("pelicula");
      if(Storage){
        this.imgPelicula = JSON.parse(Storage).pelicula.foto;
        this.numEntradas = JSON.parse(Storage).entradas;
        this.hora = JSON.parse(Storage).hora;
        this.fecha = JSON.parse(Storage).fecha;
      console.log(JSON.parse(Storage));
    }
      
    }
    volverMenu(){
      this.router.navigate(["inicioSesion"]);
    }
}
