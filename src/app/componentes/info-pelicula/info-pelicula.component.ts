import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';

@Component({
  selector: 'app-info-pelicula',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,NavUsuarioComponent],
  templateUrl: './info-pelicula.component.html',
  styleUrl: './info-pelicula.component.css'
})
export class InfoPeliculaComponent {
    pelicula?:InterfazPeliculas;
    constructor(private router:ActivatedRoute,
      private enrutado:Router){
    }

    ngOnInit(){
      this.mostrarInformacion();
    }
    mostrarInformacion(){
      this.router.params.subscribe(datos=>{
        this.pelicula = JSON.parse(datos["pelicula"]);
      })
    }
    back(){
      this.enrutado.navigate(["peliculas"]);
    }
    comprarEntrada(){
      this.enrutado.navigate(["/compraEntrada",JSON.stringify(this.pelicula)]);
    }
}
