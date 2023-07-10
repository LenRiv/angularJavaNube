import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perroweb } from '../models/perroweb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  // Desde aquí interactuamos con el sevidor
  //https://dog.ceo/dog-api/

  static readonly URL_API_PERROS = "https://dog.ceo/api/breeds/image/random"


  constructor(private httpClient: HttpClient) { 
    //Ahora http es un atributo de la clase

  }
  //El metodo me devielve un PerroWeb en un futuro(latencia)
  getPerroAleatorio():Observable<Perroweb>
  {
    //Entre <comillas> indico el tipo de dato recibido el cuerpo del mensaje en JSON
   return this.httpClient.get<Perroweb>(PerroService.URL_API_PERROS);
  }


}
