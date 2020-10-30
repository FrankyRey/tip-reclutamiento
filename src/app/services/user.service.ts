import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService {

  public url: string;
  public identity;
  public token;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url
  }

  test() {
    return "Hola Mundo";
  }

  register(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'usuario/registro', params, {headers: headers});
  }

  singup(user, gettoken = null): Observable<any> {
    if(gettoken != null) {
      user.getToken = 'true';
    }

    let json = JSON.stringify(user);
    let params = 'json='+json

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'login', params, {headers: headers});
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity && identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return identity;
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));

    if(token && token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return token;
  }
}
