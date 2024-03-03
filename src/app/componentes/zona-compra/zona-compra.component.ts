import { Component } from '@angular/core';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { CompraService } from '../../servicios/compra.service';

@Component({
  selector: 'app-zona-compra',
  standalone: true,
  imports: [NavUsuarioComponent,NgFor,NgIf,KeyValuePipe],
  templateUrl: './zona-compra.component.html',
  styleUrl: './zona-compra.component.css'
})
export class ZonaCompraComponent {
  entrada?:any;
  propiedadesPelicula?:InterfazPeliculas;
  numEntradas?:number;
  constructor(private servicioCompra:CompraService){}

  ngOnInit(){
    this.mostrarInformacion();
  }
  mostrarInformacion(){
      let Storage = localStorage.getItem("pelicula");
      if(Storage != null){
        this.entrada = JSON.parse(Storage);
      }
      this.numEntradas = this.entrada.entradas;
      this.propiedadesPelicula = this.entrada.pelicula;

  }
  comprarPaypal(){
    this.servicioCompra.finalizarCompra(this.entrada.precio).then((datos)=>{
      console.log(datos);
      
    })
  }
}
