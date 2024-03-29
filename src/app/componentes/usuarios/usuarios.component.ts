import { Component } from '@angular/core';
import { ServicioUsuariosService } from '../../servicios/servicio-usuarios.service';
import { InterfazUsuariosBuscados } from '../../interfaces/interfaz-usuarios-buscados';
import { NavComponent } from '../nav/nav.component';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';
import { MatSortModule,Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NavComponent,MatTableModule,MatSortModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios:any = [];

  displayedColumns: string[] = ['nombre', 'contrasenia', 'email', 'telefono','estado',"modificar","borrar"];
  dataSource = new MatTableDataSource<InterfazUsuariosBuscados>(this.usuarios);

  constructor(private servicioUsuarios:ServicioUsuariosService,
    private router:Router){}
  ngOnInit(){
    this.devolverUsuarios();
  }
  devolverUsuarios(){
    this.servicioUsuarios.recuperarUsuarios().then((datos:any)=>{
      this.usuarios = datos;
      this.dataSource.data = this.usuarios;
      
    })
  }
  enviarInputs(persona:InterfazUsuariosBuscados){
    this.router.navigate(["modificarUsuario",JSON.stringify(persona)]);
  }
  eliminarUsuario(nombreUsuario:String){
    this.servicioUsuarios.eliminarUsuario(nombreUsuario).then((datos:any)=>{
      
      if(datos.status == "ok"){
        alert("Usuario borrado correctamente");
      this.devolverUsuarios();
      }else{
        alert("Error al borrar el usuario")
      }
    })
  }

}
