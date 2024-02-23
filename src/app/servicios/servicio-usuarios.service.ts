import { Injectable } from '@angular/core';
import { InterfazUsuariosBuscados } from '../interfaces/interfaz-usuarios-buscados';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() { }

    async inicioSesion(usuario:InterfazUsuariosBuscados){
      console.log(usuario);
      
      const response = await fetch("http://localhost:2525/login",{
        method:"post",
        mode:"cors",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
      });
        
        const data:any = await response.json();
      
        return data;
    }
}
