import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroUrlUsuario = 'http://localhost:3000/api/user/';
  private loginUrlUsuario = 'http://localhost:3000/api/loginU';

  // Incluir variables para el restaurante
  private registroUrlRestaurante = 'http://localhost:3000/api/rest/';
  private loginUrlRestaurante = 'http://localhost:3000/api/loginR';

  constructor(private http: HttpClient) { }

  registroUsuario(user){
    return this.http.post<any>(this.registroUrlUsuario, user);
  }

  loginUsuario(user){
    return this.http.post<any>(this.loginUrlUsuario, user);
  }

  // Incluir funciones para el restaurante
  registroRestaurante(rest){
    return this.http.post<any>(this.registroUrlRestaurante, rest);
  }

  loginRestaurante(rest){
    return this.http.post<any>(this.loginUrlRestaurante, rest);
  }
}
