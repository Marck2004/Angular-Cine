import { Injectable } from '@angular/core';
import { InterfazUsuariosBuscados } from '../interfaces/interfaz-usuarios-buscados';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() { }

    async inicioSesion(usuario:InterfazUsuariosBuscados){
      
      const response = await fetch("http://localhost:2525/login",{
        method:"post",
        mode:"cors",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
      });
        
        const data:any = await response.json();
      
        return data;
    }
    async recuperarUsuarios():Promise<InterfazUsuariosBuscados[]>{

      const response = await fetch("http://localhost:2525/usuarios");
  
        const data:InterfazUsuariosBuscados[] = await response.json();
  
        return data;
      }
      async modificarUsuario(usuario:InterfazUsuariosBuscados){
      
        const response = await fetch("http://localhost:2525/modifUsuario",{
          method:"put",
          mode:"cors",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(usuario)
        });
        const data:any = await response.json();
      
        return data;
    }
    async añadirUsuario(envio:InterfazUsuariosBuscados){
      
      const response = await fetch("http://localhost:2525/addUsuario",{
        method:"post",
        mode:"cors",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(envio)
      });
      const data:any = await response.json();
      
      return data;
    }
    async eliminarUsuario(nombre:String){
      
      const response = await fetch(`http://localhost:2525/usuarios/${nombre}`,{
        method:"DELETE"
      });      

        const data:any = await response.json();
        return data;
      }
}
