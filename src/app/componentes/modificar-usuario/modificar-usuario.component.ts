import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from '../nav/nav.component';
import { InterfazUsuariosBuscados } from '../../interfaces/interfaz-usuarios-buscados';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioUsuariosService } from '../../servicios/servicio-usuarios.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modificar-usuario',
  standalone: true,
  imports: [MatInputModule,FormsModule,NavComponent,MatOption,MatSelect,NgClass],
  templateUrl: './modificar-usuario.component.html',
  styleUrl: './modificar-usuario.component.css'
})
export class ModificarUsuarioComponent {
  usuarioModificar:InterfazUsuariosBuscados={
    nombre:"",
    contrasenia:"",
    email:"",
    telefono:0,
    estado:""
  }
  credencialesCorrectas:boolean = true;
  constructor(private router:ActivatedRoute,
    private servicioUsuario:ServicioUsuariosService,
    private enrutado:Router){}

  ngOnInit(){
    this.mostrarUsuario();
  }
  mostrarUsuario(){
    this.router.params.subscribe((datos)=>{
      this.usuarioModificar = JSON.parse(datos["usuario"]); 
    })
  }
  enviarUsuario(usuarioNuevo:InterfazUsuariosBuscados){
    this.servicioUsuario.modificarUsuario(usuarioNuevo).then((datos)=>{
      if(datos.status == "ok"){
        console.log(datos);
        alert("Usuario modificado correctamente");
        this.enrutado.navigate(["usuarios"]);
      }else{
        this.credencialesCorrectas = false;
        alert("No se actualizo bien al usuario")
      }
    })
    
  }
}
