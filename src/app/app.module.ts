//Librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { EjBasicoComponent } from './components/ej-basico/ej-basico.component';
import { IMCComponent } from './components/imc/imc.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { CdTimerModule } from 'angular-cd-timer';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantePagComponent } from './components/restaurante-pag/restaurante-pag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent,
    EjBasicoComponent,
    IMCComponent,
    ChuckNorrisComponent,
    RestaurantesComponent,
    FormularioRestauranteComponent,
    RestaurantePagComponent,
    BusquedaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//routin module
    FormsModule,
    HttpClientModule,//Enrutamiento
    CdTimerModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
