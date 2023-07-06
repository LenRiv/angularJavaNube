import { Component, OnInit, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {
  


  //readonly pq es constante
//static es un atributo de la clase
//para cada etiqueta/instancia, no cambia
  static readonly SECUENCIA_LETRAS_DNI: string = "TRWAGMYFPDXBNJZSQVHLCKE";
  

   numdniusuario: any;
  

  constructor() { }



  ngOnInit(): void {
    let numdniusuario : number = 25733447;
    let resto:number =  numdniusuario%23;
    console.log("resto marcel = " + resto);
    let letra:string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log("letra marcel = " + letra);

    this.numdniusuario = 0;

    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
  }
  
  
  calcularLetra(): void {
    console.log(`El número introducido ${this.numdniusuario}`);
     let resto: number = this.numdniusuario % 23;
     let letra: string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
   
    // if (inputSeleccionado.value != "sin") {
       
    //  }
     console.log(letra);
     
     
     let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');

     

    }

}
