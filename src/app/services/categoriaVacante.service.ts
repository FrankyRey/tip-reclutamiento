import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaVacante } from '../models/categoriaVacante';
import { global } from './global';

@Injectable()
export class CategoriaVacanteService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url
  }

  test() {
    return "Hola Mundo";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url+'catalogos/categoriavacante', {headers: headers});
  }

  register(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'usuario/registro', params, {headers: headers});
  }
}
