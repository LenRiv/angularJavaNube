import { Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

/**
   * 
   * HACED UNA APP DONDE EL PROGRAMA
   * PIENSE UN NÚMERO DEL 1 AL 100
   * 
   * EL USUARIO, TENDRÁ 5 INTENTOS PARA AVERIGÜAR el
   * NÚMERO PENSADO POR LA MÁQUINA
   * 
   * POR CADA INTENTO, SI FALLA, LE DEBEMOS DAR UNA PISTA
   * Y DECIRLE SI EL NÚMERO INTRODUCIDO ES 
   * MENOR O MAYOR QUE EL BUSCADO
   * 
   * SI ACIERTA, PUES LE DAMOS LA ENHORABUENA
   * SI SUPERA LOS 5 INTENTOS, PUES LE DECIMOS
   * QUE HA PERDIDO Y LA SOLUCIÓN
   */

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
  
  
export class AdivinaComponent implements OnInit {

  titulo: string;
  numusuario: number;
  numadivina: number;
  intentos: number;
  mensaje: string;
  ganopierdo: string;
  finDelJuego: string;
  juegoTerminado: boolean;
  finPartida: boolean;
  //Asociamos cd-timer
  @ViewChild('basicTimer') contador!:CdTimerComponent;
  
  constructor() {
    console.log("Estoy en el constructor");
    this.titulo = "ADIVINA UN NÚMERO EN 5 INTENTOS";
    this.numusuario = 0;
    

    //TODO: calcular el nuemero a adivinar
    this.numadivina = this.calcularNumAleatorioDe1a100();//Almacenamos el número aleatorio que se genera
    console.log("Numero a adivinar " + this.numadivina);
    console.log(`Numero a adivinar ${this.numadivina} por el ususario`);
    this.intentos = 0;
    this.mensaje = "";
    this.ganopierdo = "";
    this.finDelJuego = "";
    this.juegoTerminado = false;
    this.finPartida = false;
  }


  ngAfterViewInit(): void{
    this.contador.stop();
   }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Estamos en OnInit");
  }

  calcularNumAleatorioDe1a100(): number {
    let numgen: number = 0;

    numgen = Math.floor(Math.random() * (100) + 1);

    return numgen;
  }


  //   console.log("comprobando intento...");
  //   console.log(this.numusuario);
  //   window.alert("Mensaje a usuario")
  //TODO: completar la logica del juego informando al usuario de las cirsunstancias:
  // 1 - el numero buscado es mayor que el introducido
  // 2- el numero buscado es menor
  // 3- ACIERTO!
  //4 - has perdido! te has quedado sin intentos
 


  comprobarIntento(): void {
    if (this.numusuario === this.numadivina) {
      this.ganopierdo = "ACIERTO!!";
      
    } else {
      if (this.numusuario < this.numadivina) {
        this.mensaje = "El número buscado es mayor que el introducido " + this.numusuario + ".";
      } else {
        this.mensaje = "El número buscado es menor que el introducido " + this.numusuario + ".";
      }
      this.intentos++;
      if (this.intentos === 5) {
        this.ganopierdo = " Has perdido! te has quedado sin intentos. El número buscado era " + this.numadivina + ".";
        this.juegoTerminado = true;
        window.alert(this.ganopierdo);
      } else {
        window.alert(this.mensaje);
        this.finDelJuego = "VUELVE A JUGAR!!!";
      }
        if (this.juegoTerminado)
        {
          this.juegoTerminado = true;
      this.contador.stop();//paro el contador
      let ti:TimeInterface = this.contador.get();
      console.log("Has tardado " + ti.minutes + " minutos y " +ti.seconds + " segundos");
      
    }
  }

 
       
  }

      reset(): void {
         this.numusuario = 0;
         this.intentos = 0;
         this.ganopierdo = '';
         this.finDelJuego = '';
         this.juegoTerminado  = true;
        this.juegoTerminado = false;
        //window.location.reload();

       }

  

}
