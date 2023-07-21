import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Restaurantes } from 'src/app/models/restaurantes';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-pag',// Selector del componente para ser utilizado en la vista
  templateUrl: './restaurante-pag.component.html',// Ruta de la plantilla HTML del componente
  styleUrls: ['./restaurante-pag.component.css']  // Rutas de los archivos CSS para el componente
})
export class RestaurantePagComponent implements OnInit {

  lista_restaurantes!: Array<Restaurantes>;

  totalRegistros: number = 0;
  totalPorPagina: number = 2;
  opcionesTamanio: number[] = [2, 4, 6, 8];
  paginaActual: number = 0;

  constructor(private restaurantesService: RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantesPorPagina();
  }



  paginar(evento: PageEvent) {
    console.log("evento paginator");
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;
    this.getRestaurantesPorPagina();
  }

  borrarrestaurante() {
    console.log("Quiere borrar el restaurante");
  }

  getRestaurantesPorPagina() {
    this.restaurantesService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).subscribe(
      {
        complete: () => console.log("completo"),
        error: (errorRx) => console.error(errorRx),
        next: (pagina) => {
          this.lista_restaurantes = <Array<Restaurantes>>pagina.content;
          this.totalRegistros = pagina.totalElements;
        }
      }
    )
  }
}