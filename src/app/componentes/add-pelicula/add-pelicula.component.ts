import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import { FormsModule } from '@angular/forms';
import { ServicioApiPrivadaService } from '../../servicios/servicio-api-privada.service';
import { NavComponent } from '../nav/nav.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-pelicula',
  standalone: true,
  imports: [MatInputModule,FormsModule,NavComponent,SpinnerComponent,NgClass],
  templateUrl: './add-pelicula.component.html',
  styleUrl: './add-pelicula.component.css'
})
export class AddPeliculaComponent {
    peliculaAnadida:InterfazPeliculas={
      nombre:"",
      autor:"",
      anio:0,
      tipo:"",
      foto:""
    };
    loading:boolean = false;
    credencialesCorrectas:boolean = true;
    constructor(private enviarPelicula:ServicioApiPrivadaService){}

    enviarDatos(pelicula:InterfazPeliculas){
      
      this.enviarPelicula.añadirPelicula(pelicula).then((datos)=>{
        if(datos.status == "ok"){
          
          this.loading = true;
          let contador = 1;
          let intervalo = setInterval(()=>{
            if(contador == 1){
              clearInterval(intervalo);
              this.loading = false;
                alert("Pelicula añadida")
            }
            contador++;
          },3000);
          
        }else{
          this.credencialesCorrectas = false;
          alert("No se ha podido añadir la pelicula")
        }
        console.log(datos.status);
        
      })
    }
}
