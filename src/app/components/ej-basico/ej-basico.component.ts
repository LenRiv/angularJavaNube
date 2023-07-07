import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-basico',
  templateUrl: './ej-basico.component.html',
  styleUrls: ['./ej-basico.component.css']
})
export class EjBasicoComponent implements OnInit {

  titulo: string;


  fraseusuario: string ;
  fraseAlReves: string ;
  longitud: number;
  esPar: boolean ;

  ngOnInit(): void {
    console.log("");
  }

  constructor() {
    this.titulo = "DIME TU FRASE";
    this.fraseusuario = "";
    this.fraseAlReves = "";
    this.longitud = 0;
    this.esPar = false;
  }

  getFraseUsuario() {
    this.fraseAlReves = this.fraseusuario.split('').reverse().join('');
    this.longitud = this.fraseusuario.length;
    this.esPar = this.longitud % 2 === 0;
  }

reset() {

}

  
}

