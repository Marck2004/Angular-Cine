import { Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { AddPeliculaComponent } from './componentes/add-pelicula/add-pelicula.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { InfoPeliculaComponent } from './componentes/info-pelicula/info-pelicula.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ModificarUsuarioComponent } from './componentes/modificar-usuario/modificar-usuario.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { CompraEntradaComponent } from './componentes/compra-entrada/compra-entrada.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ZonaCompraComponent } from './componentes/zona-compra/zona-compra.component';

export const routes: Routes = [
    {path:"",component:PeliculasComponent},
    {path:"peliculas",component:PeliculasComponent},
    {path:"añadirPelicula",component:AddPeliculaComponent},
    {path:"inicioSesion",component:InicioSesionComponent},
    {path:"informacion/:pelicula",component:InfoPeliculaComponent},
    {path:"usuarios",component:UsuariosComponent},
    {path:"modificarUsuario/:usuario",component:ModificarUsuarioComponent},
    {path:"registro",component:RegistroUsuarioComponent},
    {path:"compraEntrada/:pelicula",component:CompraEntradaComponent},
    {path:"carrito",component:CarritoComponent},
    {path:"zonaCompra",component:ZonaCompraComponent}
];
