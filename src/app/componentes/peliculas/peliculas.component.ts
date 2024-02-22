import { Component } from '@angular/core';
import { ServicioApiPrivadaService } from '../../servicios/servicio-api-privada.service';
import { InterfazPeliculas } from '../../interfaces/interfaz-peliculas';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { NavComponent } from '../nav/nav.component';

const tipoPeliculas:InterfazPeliculas[] = [];

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [MatTableModule,MatSortModule,NavComponent,NavComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})

export class PeliculasComponent {
  peliculas?:InterfazPeliculas[];

  displayedColumns: string[] = ['nombre', 'autor', 'anio', 'tipo','foto','edicion'];
  dataSource = new MatTableDataSource(tipoPeliculas);

  constructor(private peliculasRecuperadas:ServicioApiPrivadaService,
    private _liveAnnouncer: LiveAnnouncer){
  }

  ngOnInit(){
    this.recuperarPeliculas();
  }
  recuperarPeliculas(){
    this.peliculasRecuperadas.recuperarPelicula().then((peliculasDevueltas)=>{
      this.peliculas = peliculasDevueltas;
      this.dataSource.data = this.peliculas;
      console.log(this.peliculas);
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
