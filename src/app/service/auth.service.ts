import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroUrlUsuario = 'http://localhost:3000/api/user/';
  private loginUrlUsuario = 'http://localhost:3000/api/user/loginU';

  // Incluir variables para el restaurante
  private registroUrlRestaurante = 'http://localhost:3000/api/rest/';
  private loginUrlRestaurante = 'http://localhost:3000/api/rest/LoginR';

  constructor(private http: HttpClient) { }

  registroUsuario(user){
    return this.http.post<any>(this.registroUrlUsuario, user);
  }

  loginUsuario(user){
    return this.http.post<any>(this.loginUrlUsuario, user);
  }



  // -----------------------Incluir funciones para el restaurante -----------------
  registroRestaurante(rest){
    return this.http.post<any>(this.registroUrlRestaurante, rest);
  }

  loginRestaurante(rest){
    return this.http.post<any>(this.loginUrlRestaurante, rest);
  }

  
   // -----------------Metodos que sirven tanto para Usuario y Restaurante para revisar los jwtToken en local -----------------
// Si el usuario esta conectado, puede navegar por las otras urls.
// La funcion loginUs() en formulario-persona guarda el jwtToken en la variable 'token'
loginOn() {
  return !!localStorage.getItem('token')
}
// Comprobar que el token no ha sido vulnerado
obtenerToken() {
  return localStorage.getItem('token');
}
}
