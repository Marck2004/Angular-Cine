import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {
  constructor(){

  }
  hora?:number;
  minutos?:number;
  horaTotal?:string;
  horaTotalSeg?:string;
  horaTotalTerc?:string;
  manejarClick:boolean = false;

  ngOnInit(){
    this.asignarHorario();
  }
  asignarHorario(){
    for (let i = 0; i < 3; i++) {

    this.hora = Math.floor(Math.random() * 7 )+17
                this.minutos = Math.floor(Math.random()*3)+1;
                switch (this.minutos) {
                  case 1:
                  this.minutos = 15;
                  break;
                  case 2:
                  this.minutos = 30;
                  break;
                  case 3:
                  this.minutos = 45;
                  break;
                }

                if(this.horaTotal == undefined){
                this.horaTotal = this.hora+":"+this.minutos;
              }else if(this.horaTotalSeg == undefined){
                this.horaTotalSeg = this.hora+":"+this.minutos;
              }else if(this.horaTotalTerc == undefined){
                this.horaTotalTerc = this.hora+":"+this.minutos;
              }
                 
          }
  }
  guardarHora(event:MouseEvent){

    if(!this.manejarClick){
    
    const texto = (event.target as HTMLElement).textContent

    let variableStorage = localStorage.getItem("pelicula");
    let pelicula:any;

    if(variableStorage != null){
    pelicula = JSON.parse(variableStorage);
  }
  pelicula.hora = texto;
  localStorage.setItem("pelicula",JSON.stringify(pelicula));
    this.manejarClick = true;
  }
}
}
