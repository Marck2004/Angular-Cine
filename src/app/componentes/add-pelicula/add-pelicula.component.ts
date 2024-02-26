import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import { FormsModule } from '@angular/forms';
import { ServicioApiPrivadaService } from '../../servicios/servicio-api-privada.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-add-pelicula',
  standalone: true,
  imports: [MatInputModule,FormsModule,NavComponent],
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

    constructor(private enviarPelicula:ServicioApiPrivadaService){}

    enviarDatos(pelicula:InterfazPeliculas){
      
      this.enviarPelicula.añadirPelicula(pelicula).then((datos)=>{
        if(datos.status == "ok"){
          alert("Pelicula añadida")
        }else{
          alert("No se ha podido añadir la pelicula")
        }
        console.log(datos.status);
        
      })
    }
}
