import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurantes } from 'src/app/models/restaurantes';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { MapaComponent } from '../mapa/mapa.component';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  //ElementRef es el tipo genérico de Angular para referenciar
  //a una etiqueta estándar de HTML
  //Envoltorio de angular a los elementos/etiquetas
  //nativas "wrapper"
  @ViewChild('cajabusqueda') cajaInput!:ElementRef;
  @ViewChild('mapa') mapaHijo!: MapaComponent;
  


  listaRestaurantes!:Array<Restaurantes>;

  constructor(private rs:RestauranteService) { }

  ngOnInit(): void {
  }

    busqueda1()
  {
    
    let terminoBusqueda:string = this.cajaInput.nativeElement.value;
    console.log('busqueda1 ' + terminoBusqueda);
    //TODO: consumir el servicio web de búsqueda
    //para traer los restaurantes que coincidan
    //con el término de búsqueda
    if (terminoBusqueda!='')
    {
      this.rs.getRestaurantesPorTermino(terminoBusqueda).subscribe
      (
        {
          complete: () => console.log("completado"),
          error: (errorRx) => console.error(errorRx),
          next: (listaRestaurantesRx) =>
          {
            this.listaRestaurantes = listaRestaurantesRx;
          }
        }
      )
    } else {
      this.listaRestaurantes.length = 0;
    }
    
  }

  restauranteTocado (restaurante:Restaurantes)
  {
    this.listaRestaurantes.length = 0;
    console.log('Nombre tocado = ' +restaurante.nombre);
    // alert('Nombre tocado = ' + restaurante.nombre + ' id ' + restaurante.id);
    this.mapaHijo.dibujarPosicion (restaurante.latitud, restaurante.longitud)
  }




  busqueda2()
  {
    console.log('busqueda2');
  }

  busqueda3()
  {
    console.log('busqueda3');
  }
}