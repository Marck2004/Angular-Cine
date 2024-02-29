import { NgFor, KeyValuePipe, NgIf } from '@angular/common';
import { TypeofExpr } from '@angular/compiler';
import { Component, KeyValueDiffers } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor,KeyValuePipe,NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  mostrar?:boolean = false;
  entrada?:any;
  propiedadesPelicula?:InterfazPeliculas;
  numEntradas?:number;
  constructor(private router:ActivatedRoute,
    private enrutado:Router){}

  esObjeto(valor: any): boolean {
    return typeof valor === 'object' && valor !== null;
  }

  mostrarCarrito(){
    if(localStorage.getItem("pelicula")){
      this.mostrar = true;
      let Storage = localStorage.getItem("pelicula");
      if(Storage != null){
        this.entrada = JSON.parse(Storage);
      }
      this.numEntradas = this.entrada.entradas;
      this.propiedadesPelicula = this.entrada.pelicula;
      console.log(this.numEntradas);
      
      console.log(this.propiedadesPelicula);
      
      console.log(this.entrada);
      
    }else{
      alert("El carrito esta vacio");
    }
  }
  compra(){
    this.enrutado.navigate(["zonaCompra"]);
  }
}
