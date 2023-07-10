import { Injectable } from '@angular/core';
import { Chucknorrisweb } from '../models/chucknorrisweb';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {


  static readonly URL_API_CHUCKNORRIS = "https://api.chucknorris.io/jokes/random"

  constructor(private httpClient: HttpClient) { }


  getFraseAleatorio():Observable<Chucknorrisweb>
  {
    return this.httpClient.get<Chucknorrisweb>(ChucknorrisService.URL_API_CHUCKNORRIS);
  }
}
