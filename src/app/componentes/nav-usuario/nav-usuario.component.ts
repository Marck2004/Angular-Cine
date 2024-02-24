import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-usuario',
  standalone: true,
  imports: [MatChipsModule,RouterLink],
  templateUrl: './nav-usuario.component.html',
  styleUrl: './nav-usuario.component.css'
})
export class NavUsuarioComponent {

}
