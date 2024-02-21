import { Injectable } from '@angular/core';
import { InterfazPeliculas } from '../interfaces/interfaz-peliculas';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiPrivadaService {

  constructor() { }

  async recuperarPelicula():Promise<InterfazPeliculas[]>{

    const response = await fetch("http://localhost:2525/peliculas");

      const data:InterfazPeliculas[] = await response.json();

      return data;
    }

}
