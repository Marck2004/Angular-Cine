import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  constructor(private router:ActivatedRoute){}
  
  conteo:number = 0;

  contadorCarrito(){
    this.router.queryParams.subscribe(datos=>{
      console.log(datos["numeroEntradas"]);
      this.conteo = datos["numeroEntradas"];
    })
  }
}
