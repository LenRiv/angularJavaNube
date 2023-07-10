import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Perroweb } from 'src/app/models/perroweb';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit {


  perroweb!: Perroweb;
  raza!: string;

  observerPerros:Observer<Perroweb>  = {
    next: (perroRx:Perroweb) => {
      console.log('Perro recibido bien');
      console.log(perroRx.message);
      console.log(perroRx.status);
      this.perroweb = perroRx;
      let palabrasUrl: Array<string> = perroRx.message.split("/");
      console.log("La raza es:" + palabrasUrl[4]);
      this.raza = palabrasUrl[4];
    },
    error: fallo => console.error('Fallo al rx el Perro ' + fallo),
    complete: () => console.log('Comunicación completada')
  };

  constructor(private perroService:PerroService) {
    console.log("Estamos cargado el componente");
   }

   //LA COMUNICACIÓN CON UN SERVICIO, DEBER HACERSE
   //DESDE ngOnInit https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
  ngOnInit(): void {
    console.log("Vamos a traernos un perro del servidor");
    //cuando me suscribo al Observer, le estoy diciendo, cuando vuelvas, me avisas aquí
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
    console.log("PERRO SOLICTADO ... ");
  }


  damePerro() {
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
     }
}