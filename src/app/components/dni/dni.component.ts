import { Component, OnInit } from '@angular/core';
import { Dni } from 'src/app/models/dni';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  //readonly pq es constante
//static es un atributo de la clase
//para cada etiqueta/instancia, no cambia
static readonly SECUENCIA_LETRAS_DNI:string = "TRWAGMYFPDXBNJZSQVHLCKE";

  dni:string;
  letra:string;
  titulo: string;
  

  listaDnis:Array<Dni>;//esta lista, va a almacenar todos los dnis que calculemos
  listaDnisExtranjeros!:Array<Dni>;//esta lista, va a almacenar todos los dnis extranjeros que calculemos

  constructor() { 
    this.dni='';
    this.letra='';
    this.titulo = 'CALCULE SU LETRA DE DNI';
    this.listaDnis = new Array<Dni>();
  }

  //TODO: completar el ejercicio, para que funcione
  //e informe de la letra del dni introducido


  ngOnInit(): void {
    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
  }

  calcularLetra() : void
  {

    let dni:Dni=new Dni();//creamos dni nuevo
    
    let numdni:number=0;
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
    if (inputSeleccionado.value!="sin") 
    {
      //estoy en el caso extranjero , recalculo el dni
      //Se concatena el valor del radio seleccionado con el número de DNI introducido por el y se almacena en la variable dnistrin.
      let dnistrin: string = inputSeleccionado.value + this.dni;
      //Convertimos dnistrin en un número con parseInt() y se asigna a numdni.
      numdni = parseInt(dnistrin);
      //El id del elemento de entrada de radio se asigna a dni.prefijo, que representa el prefijo del DNI extranjero.
       dni.prefijo = inputSeleccionado.id;    
    } 
    //Si el valor es "sin" (DNI español sin prefijo extranjero), se ejecuta else. Se convierte el número de DNI a  (almacenado en this.dni) en un número y se asigna a numdni.
    else
    {
      numdni = parseInt(this.dni);
    }
    console.log(`El número introducido es  ${this.dni}`);
    //Integer numero = java
    
    //Se calcula el resto de la división por 23. Se almacena en la variable resto de tipo number.
    let resto: number = numdni % 23;
    //Acceso a la secuencia de letras SECUENCIA_LETRAS_DNI utilizando la clase DniComponent y se obtiene el carácter en la posición resto. Este carácter representa la letra correspondiente al número de DNI.
    this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log("la letra es " + this.letra);
    

    //Se asigna la letra calculada (this.letra) al atributo letra del objeto dni. 
    //Se convierte el  DNI introducido (this.dni) en un número y se asigna a dni.numero.
    dni.letra = this.letra;
    dni.numero = parseInt(this.dni);

    //Se añade el objeto dni al array listaDnis con el método push(). Se llama a las funciones obtenerDnisExtranjeros() y mostrarListaDnis() para actualizar la lista de DNIs extranjeros y mostrar los DNIs en la consola, respectivamente.
    this.listaDnis.push(dni);
    this.listaDnisExtranjeros = this.obtenerDnisExtranjeros();

    this.mostrarListaDnis();

    }

  

  obtenerDnisExtranjeros():Array<Dni>
  {
    let listaDnisEx:Array<Dni>;

      listaDnisEx = this.listaDnis.filter(dni => dni.prefijo != '');

    return listaDnisEx;

  }


  mostrarListaDnis():void
  {
    console.log("Mostrando lista DNIS");
    this.listaDnis.forEach(d => {
      console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`);
    });

    console.log("Mostrando lista DNIS Extranjeros");

    this.listaDnisExtranjeros.forEach(d => {
      console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`);
    });
    
  }

  //TODO: add un boton para ordenar por letra
  //TODO: haced un componente con el ejercico del IMC peso, altura

  ordenarPorNumero(): void {
    this.listaDnis.sort((dni1, dni2) => dni1.numero - dni2.numero);

   /* this.listaDnis.sort(
      (a:Dni, b:Dni) => {
        let resultado:number = 0 ;
          
          if (a.numero>b.numero)
          {
            resultado=1;
          } else if (a.numero<b.numero)
          {
            resultado=-1
          } else {
            resultado = 0;
          }

        return resultado;
      }
    )*/
  }    
  


  ordenarPorLetra(): void {
  this.listaDnis.sort((letraDni1: Dni, letraDni2: Dni) => {
    if (letraDni1.letra > letraDni2.letra) {
      return 1;
    } else if (letraDni1.letra < letraDni2.letra) {
      return -1;
    } else {
      return 0;
    }
  });
}
  
}


//TODO
//ordenar por letra
//Componente IMC del ejercicio del principio

