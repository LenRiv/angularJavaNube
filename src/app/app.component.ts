import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//La etiqueta raiz o padre
  templateUrl: './app.component.html',// su html
  styleUrls: ['./app.component.css']//su css
})
export class AppComponent {
  title = 'my-app';

  //Aqui va el JAVASCRIPT - la funcionalidad del componente

  constructor()
  {
    console.log("Estamos en el constructor del APP component");
  }
}
