import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import { ActivatedRoute, Router } from '@angular/router';
import { HorariosComponent } from '../horarios/horarios.component';

@Component({
  selector: 'app-compra-entrada',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,NavUsuarioComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule,HorariosComponent],
  templateUrl: './compra-entrada.component.html',
  styleUrl: './compra-entrada.component.css'
})
export class CompraEntradaComponent {
  constructor(private router:ActivatedRoute,
    private enrutado:Router){}

  fecha?:string;
  numeroEntradas:number = 0;


  infoPelicula = {
    hora:"",
    fecha:"",
    entradas:0,
    pelicula:""
  }
  mostrarHorarios?:boolean = false;
  mostrarDatePicker(){
    document.querySelector(".mat-calendar-content")?.addEventListener("click",()=>{
      this.validarFecha();
    })
  }
  validarFecha(){
      this.fecha = document.querySelector("input")?.value;
      
      if (this.fecha!="" && this.fecha != undefined){
        let partesFecha = this.fecha.split("/");
        if (partesFecha.length == 3){
          let diaElegido = new Date(parseInt(partesFecha[2]),parseInt(partesFecha[0])-1,parseInt(partesFecha[1]));

          let hoy = new Date();

          if(diaElegido.getDate() == parseInt(partesFecha[1])
           && diaElegido.getMonth() == parseInt(partesFecha[0])-1
           && diaElegido.getFullYear() == parseInt(partesFecha[2])){

              if(diaElegido > hoy){

                this.mostrarHorarios = true;
                this.router.params.subscribe(datos=>{
                  this.infoPelicula.pelicula =  JSON.parse(datos["pelicula"]);
                });

                this.infoPelicula.fecha = this.fecha;
                localStorage.setItem("pelicula",JSON.stringify(this.infoPelicula));
                console.log(this.infoPelicula);
          
              }else{
                alert("La fecha debe ser mayor que la actual")
              }
          }else{
            alert("Fecha no valida");
          }
        } else {
          alert("No ha seleccionado nada");
        }
      } else {
        alert("No ha seleccionado nada");
      }  
  }
  sumarEntrada(){
    this.numeroEntradas++;
  }
  restarEntrada(){
    if(this.numeroEntradas <= 0){
      this.numeroEntradas = 0;
    }else{
    this.numeroEntradas--;
  }
  }
  modifCarrito(){
    let Storage = localStorage.getItem("pelicula");
    let pelicula:any;
    
    if(Storage != null){
      pelicula = JSON.parse(Storage);
      
    }

    pelicula.entradas = this.numeroEntradas;
    
    localStorage.setItem("pelicula",JSON.stringify(pelicula));
  }
}
