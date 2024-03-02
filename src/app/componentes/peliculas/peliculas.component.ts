import { Component } from '@angular/core';
import { ServicioApiPrivadaService } from '../../servicios/servicio-api-privada.service';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { NavComponent } from '../nav/nav.component';
import { InterfazUsuariosBuscados } from '../../interfaces/interfaz-usuarios-buscados';
import { NgIf } from '@angular/common';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

const tipoPeliculas:InterfazPeliculas[] = [];

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [MatTableModule,MatSortModule,NavComponent,NgIf,NavUsuarioComponent,FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})

export class PeliculasComponent {
  usuario?:InterfazUsuariosBuscados;
  peliculas?:InterfazPeliculas[];
  LISTAPELICULAS?:InterfazPeliculas[];
  filtro:string="";
  displayedColumns: string[] = ['nombre', 'autor', 'anio', 'tipo','foto','borrar'];
  dataSource = new MatTableDataSource(tipoPeliculas);

  constructor(private peliculasRecuperadas:ServicioApiPrivadaService,
    private router:Router){
  }

  ngOnInit(){
    this.recuperarPeliculas();
  }
  recuperarPeliculas(){
    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString != null) {
      this.usuario = JSON.parse(usuarioString);
      console.log(this.usuario);
      
    }
  
    this.peliculasRecuperadas.recuperarPelicula().then((peliculasDevueltas)=>{
      this.peliculas = peliculasDevueltas;
      this.LISTAPELICULAS = peliculasDevueltas;
      this.dataSource.data = this.peliculas;
    })
  }
  comprarPelicula(pelicula:InterfazPeliculas){
    //Lo ponemos asi porque si envio pelicula enviaria el _id de la bbdd y eso no interesa por temas de seguridad
    let peliculaEnviada:InterfazPeliculas ={
      nombre:pelicula.nombre,
      autor:pelicula.autor,
      anio:pelicula.anio,
      foto:pelicula.foto,
      tipo:pelicula.tipo
    } 
    peliculaEnviada = pelicula
    
    this.router.navigate(["/informacion",JSON.stringify(peliculaEnviada)]);
  }
  filtrar(){
    if (this.LISTAPELICULAS){
      this.dataSource.data = this.LISTAPELICULAS.filter(pelicula=>pelicula.nombre.includes(this.filtro));
    }
  }
  removeFilm(nombrePelicula:String){
    this.peliculasRecuperadas.eliminarPelicula(nombrePelicula).then((datos)=>{
      
      if(datos.status == "ok"){
        alert("Pelicula borrada correctamente");
      this.recuperarPeliculas();
      }else{
        alert("Error al borrar la pelicula")
      }
    })
  }

  ordenar(campo:string,orden:number){
    if (this.peliculas){
      if (campo == "Nombre"){
        this.dataSource.data = this.peliculas.sort((a,b)=>{
          if (a.nombre.toLocaleUpperCase() >b.nombre.toLocaleUpperCase()) return 1*orden;
          else return -1*orden;
        })
      }else if(campo == "Autor"){
        this.dataSource.data = this.peliculas.sort((a,b)=>{
          if (a.autor.toLocaleUpperCase() >b.autor.toLocaleUpperCase()) return 1*orden;
          else return -1*orden;
      })
      }else if(campo == "Anio"){
        this.dataSource.data = this.peliculas.sort((a,b)=>{
          if (a.anio >b.anio) return 1*orden;
          else return -1*orden;
      })
      }
      else if(campo == "Tipo"){
        this.dataSource.data = this.peliculas.sort((a,b)=>{
          if (a.tipo.toLocaleUpperCase() >b.tipo.toLocaleUpperCase()) return 1*orden;
          else return -1*orden;
      })
      }else if(campo == "Imagen"){
        this.dataSource.data = this.peliculas.sort((a,b)=>{
          if (a.foto.toLocaleUpperCase() >b.foto.toLocaleUpperCase()) return 1*orden;
          else return -1*orden;
      })
      }
    
  }
  }
}
