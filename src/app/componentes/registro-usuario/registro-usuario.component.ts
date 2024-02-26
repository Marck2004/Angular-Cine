import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServicioUsuariosService } from '../../servicios/servicio-usuarios.service';
import { InterfazUsuariosBuscados } from '../../interfaces/interfaz-usuarios-buscados';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule,MatFormField,MatInputModule,NgClass],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  credencialesCorrectas:boolean = true;
  usuarioBuscado:InterfazUsuariosBuscados={
    nombre:"",
    contrasenia:"",
    email:"",
    telefono:0,
    estado:"usuario"
  };
  constructor(private servicioUsuarios:ServicioUsuariosService,
      private router:Router){}

  validarRegistro(usuario:InterfazUsuariosBuscados){
    if(usuario.contrasenia.length < 8 || !usuario.email.includes("@gmail.com") || (usuario.telefono < 100000000 || usuario.telefono > 999999999)){
    if(usuario.contrasenia.length < 8){
      alert("La contraseña debe tener mas de 8 caracteres");
    }
    if(!usuario.email.includes("@gmail.com")){
      alert("El formato del mail es incorrecto");
    }
    if(usuario.telefono < 100000000 || usuario.telefono > 999999999){
      alert("El telefono tiene que tener 9 digitos");
    }
    this.credencialesCorrectas = false;
  }else{
    this.servicioUsuarios.añadirUsuario(usuario).then((datos)=>{
      if(datos.status == "ok"){
        alert("Usuario registrado");
        this.router.navigate(["peliculas"]);
      }else{
        alert("No se ha podido añadir al usuario");
      }
    })
  }

    
  }
  volver(){
    this.router.navigate(["inicioSesion"]);
  }
}
