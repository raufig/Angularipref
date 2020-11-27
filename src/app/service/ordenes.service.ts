import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  private menuResta = 'http://localhost:3000/api/user/menu-resta';
  private getOrders = 'http://localhost:3000/api/rest/ordenes';

  getMenu2(tablero) {
    const _id = tablero;
    const url = `${this.menuResta}/${tablero}`;
    return this.http.get<any>(url);
    
  }

  getMenu(){
    return this.http.get<any>(this.menuResta);
  }

  createOrder(orden){
    return this.http.post<any>(this.menuResta, orden);
  }

  getOrder(){
    return this.http.get<any>(this.getOrders);
  }
}
