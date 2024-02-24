import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { InterfazUsuariosBuscados } from '../../interfaces/interfaz-usuarios-buscados';
import { ServicioUsuariosService } from '../../servicios/servicio-usuarios.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [NavComponent,FormsModule, MatFormFieldModule, MatInputModule,NgClass],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})

export class InicioSesionComponent {
  credencialesCorrectas:boolean = true;
  usuarioBuscado:InterfazUsuariosBuscados={
    nombre:"",
    contrasenia:"",
    email:"",
    telefono:0,
    estado:""
  };
  constructor(private servicioUsuarios:ServicioUsuariosService,
      private router:Router){}

  validarInicioSesion(usuario:InterfazUsuariosBuscados){
    
    this.servicioUsuarios.inicioSesion(usuario).then((datos)=>{
      if(datos.status == "ok"){
        console.log(datos);
        localStorage.setItem("usuario",JSON.stringify(datos.usuario));
        this.router.navigate(["peliculas"]);
      }else{
        this.credencialesCorrectas = false;
        alert("Credenciales incorrectas, vuelva a intentarlo");
      }

    })
  }
}
