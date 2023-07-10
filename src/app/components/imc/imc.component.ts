import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
  
export class IMCComponent implements OnInit{

  titulo: string;
  peso: number;
  altura: number;
  imc: number;
  imcRango: string;

  constructor() {
    this.titulo = 'CALCULE SU INDICE DE MASA CORPORAL';
    this.peso = 0;
    this.altura = 0;
    this.imc = 0;
    this.imcRango = '';
  }

  ngOnInit(): void {
   
  }


  cacularImc(): void {
    if (this.peso !== null && this.altura !== null) {
      let alturaMetros = this.altura / 100;
      this.imc = this.peso / (alturaMetros * alturaMetros);
      this.imcRango = this.calcularRangoImc(this.imc);
    }
  }

  calcularRangoImc(imc: number): string {
    if (imc < 16) {
      return 'Su IMC es DESNUTRIDO';
    } else if (imc >= 16 && imc < 18) {
      return 'Su IMC es DELGADO';
    } else if (imc >= 18 && imc < 25) {
      return 'Su IMC es IDEAL';
    } else if (imc >= 25 && imc < 31) {
      return 'Su IMC es SOBREPESO';
    } else{
      return 'Su IMC es OBESO';
    }
  }

  reset() {
    this.peso = 0;
    this.altura = 0;
    this.imc = 0;
    this.imcRango = "";
  }
}

