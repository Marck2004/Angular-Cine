import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';

@Component({
  selector: 'app-compra-entrada',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,NavUsuarioComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './compra-entrada.component.html',
  styleUrl: './compra-entrada.component.css'
})
export class CompraEntradaComponent {
  constructor(){}

  fecha?:String;
  numeroEntradas:number = 0;
  hora?:number;
  minutos?:number;
  horaTotal?:string;

  infoPelicula?:{
    hora:String,
    fecha:String,
    entradas:number,
    pelicula:InterfazPeliculas
  }
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
                this.hora = Math.floor(Math.random() * 7 )+17
                this.minutos = Math.floor(Math.random()*3)+1;
                switch (this.minutos) {
                  case 1:
                  this.minutos = 15;
                  break;
                  case 2:
                  this.minutos = 30;
                  break;
                  case 3:
                  this.minutos = 45;
                  break;
                }
                this.horaTotal = this.hora+":"+this.minutos;
                console.log(this.horaTotal);

                //this.infoPelicula?.hora = this.horaTotal;

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
}
