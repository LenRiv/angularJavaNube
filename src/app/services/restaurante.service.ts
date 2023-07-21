import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurantes } from '../models/restaurantes';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  static readonly URL_GET_RESTAURANTES: string = "http://localhost:8081/restaurante";
  
  cabeceras: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

 

  constructor(private http: HttpClient) { }

  getListaRestaurantes(): Observable<Array<Restaurantes>> {
    return this.http.get<Array<Restaurantes>>(RestauranteService.URL_GET_RESTAURANTES);
  }

  postRestaurante(restaurante: Restaurantes):Observable<Restaurantes> {

  return    this.http.post <Restaurantes>(RestauranteService.URL_GET_RESTAURANTES, restaurante, { headers: this.cabeceras });
    
  }

  postRestauranteConFoto (restaurante:Restaurantes, archivo:File): Observable<Restaurantes>
  {
//declaramos una variable local que represente el FormData
    let formData = new FormData();

        formData.append('nombre', restaurante.nombre);
        formData.append('direccion', restaurante.direccion);
        formData.append('barrio', restaurante.barrio);
        formData.append('web', restaurante.web);
        formData.append('fichaGoogle', restaurante.fichaGoogle);
        formData.append('latitud', restaurante.latitud+'');
        formData.append('longuitud',  restaurante.longitud+'');
        formData.append('precio', restaurante.precio+'');
        formData.append('especialidad1', restaurante.especialidad1);
        formData.append('especialidad2', restaurante.especialidad2);
        formData.append('especialidad3', restaurante.especialidad3);
        formData.append('archivo', archivo);
    
    return this.http.post<Restaurantes>(RestauranteService.URL_GET_RESTAURANTES+"/crear-con-foto", formData);
  }


  //GET http://localhost:8081/restaurante/pagina?page=2&size=2
  getPaginaRestaurantes (page:number, size:number):Observable<any>  {
    let parametros:HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(RestauranteService.URL_GET_RESTAURANTES+"/pagina", {params:parametros});
  }

   //GET http://localhost:8081/restaurante/buscarPorBarrioNombreOEspecialidad?clave=papa
   getRestaurantesPorTermino (termino:string):Observable<Array<Restaurantes>>  {
    let parametros:HttpParams = new HttpParams().set('clave', termino);
    return this.http.get<Array<Restaurantes>>(RestauranteService.URL_GET_RESTAURANTES+"/buscarPorBarrioNombreOEspecialidad", {params:parametros});
  }



//   utilizando HttpClient para realizar una solicitud HTTP DELETE al servidor. Utilizamos la plantilla de URL para construir la URL completa del restaurante que queremos eliminar.

// La función eliminarRestaurante() devuelve un Observable<any> que representará la respuesta de la solicitud HTTP DELETE.

// Asegúrate de que la constante URL_GET_RESTAURANTES en el servicio apunte a la ruta base del servicio REST que maneja los restaurantes.

// Con esta implementación en el servicio, ya tendrás el método eliminarRestaurante(id: number) disponible para ser utilizado en tu componente RestaurantePagComponent para eliminar restaurantes. Para ello, simplemente llama a esta función pasando el ID del restaurante que deseas eliminar, de la siguiente manera:
  
  
  
  
  
  
  
}