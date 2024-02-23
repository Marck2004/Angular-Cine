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
    async añadirPelicula(envio:any){
      
      const response = await fetch("http://localhost:2525/peliculas",{
        method:"post",
        mode:"cors",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(envio)
      });
        
        const data:any = await response.json();
      
        return data;
      }
      async eliminarPelicula(nombre:String){
      
        const response = await fetch(`http://localhost:2525/peliculas/${nombre}`,{
          method:"DELETE"
        });      

          const data:any = await response.json();
          return data;
        }

        async modificarPelicula(nombre:String){
      
          const response = await fetch(`http://localhost:2525/peliculas/${nombre}`,{
            method:"put"
          });      
            
            const data:any = await response.json();
            return data;
          }
}
