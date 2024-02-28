import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

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
                console.log(Math.floor(Math.random() * 6 )+17);
                
                
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
