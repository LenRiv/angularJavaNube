import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { EjBasicoComponent } from './components/ej-basico/ej-basico.component';
import { IMCComponent } from './components/imc/imc.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantePagComponent } from './components/restaurante-pag/restaurante-pag.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


// En este array de rutas tengo que tener una ruta path asociado al componente 
const routes: Routes = [
  {path:"dni",component: DniComponent},
  {path:"adivina",component: AdivinaComponent},
  {path:"perros",component: PerroComponent},
  { path: "ejbasico", component: EjBasicoComponent },
  { path: "imc", component: IMCComponent },
  { path: "chucknorrisweb", component: ChuckNorrisComponent },
  { path: "restaurantes", component: RestaurantesComponent},
  { path: "restaurantes/nuevo", component: FormularioRestauranteComponent},
  { path: "restaurantes/nuevo", component: RestaurantePagComponent},
  { path: "restaurantespag", component: RestaurantePagComponent},
  { path: "busqueda", component: BusquedaComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
