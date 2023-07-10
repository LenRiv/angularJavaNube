import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Chucknorrisweb } from 'src/app/models/chucknorrisweb';
import { ChucknorrisService } from 'src/app/services/chucknorris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  value!: string;
  fraseChuck!: string;

  observerChuckNorris: Observer<Chucknorrisweb> = {
  next: (chuckNorrisRX: Chucknorrisweb) => {
    console.log('Frase recibida');
    this.fraseChuck = chuckNorrisRX.value; // Asignar la frase recibida a this.fraseChuck
  },
  error: fallo => console.error('Fallo ' + fallo),
  complete: () => console.log('Comunicación completada')
};

  
  

  constructor(private chucknorriservice: ChucknorrisService) {
    console.log("Carga correcta");

  }

 
  ngOnInit(): void {
    console.log("Traer frase del servidor");
   
    this.chucknorriservice.getFraseAleatorio().subscribe(this.observerChuckNorris);
    console.log("La frase... ");
  }


  dameFrase() {
    this.chucknorriservice.getFraseAleatorio().subscribe(this.observerChuckNorris);
  }




}
