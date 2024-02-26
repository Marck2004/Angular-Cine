import { Component } from '@angular/core';
import { ServicioApiPrivadaService } from '../../servicios/servicio-api-privada.service';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { NavComponent } from '../nav/nav.component';
import { InterfazUsuariosBuscados } from '../../interfaces/interfaz-usuarios-buscados';
import { NgIf } from '@angular/common';
import { NavUsuarioComponent } from '../nav-usuario/nav-usuario.component';
import { Router } from '@angular/router';

const tipoPeliculas:InterfazPeliculas[] = [];

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [MatTableModule,MatSortModule,NavComponent,NgIf,NavUsuarioComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})

export class PeliculasComponent {
  usuario?:InterfazUsuariosBuscados;
  peliculas?:InterfazPeliculas[];

  displayedColumns: string[] = ['nombre', 'autor', 'anio', 'tipo','foto','borrar'];
  dataSource = new MatTableDataSource(tipoPeliculas);

  constructor(private peliculasRecuperadas:ServicioApiPrivadaService,
    private _liveAnnouncer: LiveAnnouncer,
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
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
