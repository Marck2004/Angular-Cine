import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Cine';
}
