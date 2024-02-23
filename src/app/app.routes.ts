import { Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { AddPeliculaComponent } from './componentes/add-pelicula/add-pelicula.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';

export const routes: Routes = [
    {path:"",component:PeliculasComponent},
    {path:"peliculas",component:PeliculasComponent},
    {path:"añadirPelicula",component:AddPeliculaComponent},
    {path:"inicioSesion",component:InicioSesionComponent}
];
