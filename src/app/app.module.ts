//Librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule//Enrutamiento 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
