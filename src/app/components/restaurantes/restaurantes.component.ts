import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurantes } from 'src/app/models/restaurantes';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  lista_restaurantes!: Array<Restaurantes>;

  constructor(private restaurantesService: RestauranteService, private servicioRutas:Router) { }

  ngOnInit(): void {
    this.restaurantesService.getListaRestaurantes().subscribe(
      {
        complete: () => console.log("comunicacion completada"),
        error: (errorRX) => {
          console.log((errorRX));
        },
        next: (listaRestaurantesRX) => {
          console.log('Lista Restaurantes Recibida');
          listaRestaurantesRX.forEach(
            rest => {
              console.log(` ID = ${rest.id} NOMBRE = ${rest.nombre}`);
              this.servicioRutas.navigateByUrl("/restaurantes")
            }
          );
          this.lista_restaurantes = listaRestaurantesRX;
        }
      }
    );
  }

  borrarrestaurante() {
    console.log("Quiere borrar el restaurante");
  }


  //TODO obtener el ID del restaurante y hacer el delete




}

