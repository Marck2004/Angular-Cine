import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor() { }

  async finalizarCompra(precio:any){
      
    const response = await fetch("http://localhost:2525/crear-orden",{
      method:"post",
      mode:"cors",
      headers:{'Content-Type': 'application/json'},
      body:precio
    });
    const data:any = await response.json();
      console.log(data);
      
    window.location.href = data.links[1].href;
  }
}
