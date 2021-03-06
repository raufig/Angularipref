import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CrearMenuService {
  
  constructor(private http: HttpClient) { }

  private postCrearPLato = 'http://localhost:3000/api/rest/crearPlato';

  private getMenu = 'http://localhost:3000/api/rest/MenuRestaurante';
  // private getMenuId = 'http://localhost:3000/api/rest/MenuRestaurante/:_id';
  // private putMenuId = 'http://localhost:3000/api/rest/MenuRestaurante/:_id';

  private deleteMenuId = 'http://localhost:3000/api/rest/MenuRestaurante';
  private ingredientes = 'http://localhost:3000/api/rest/crearPlato';
  private updatePlato = 'http://localhost:3000/api/rest/MenuRestaurante';

  getIngredientes(){
    return this.http.get<any>(this.ingredientes);
  }


  listarMenu(){
    return this.http.get<any>(this.getMenu);
  }

  crearMenu(plato) {
    return this.http.post<any>(this.postCrearPLato, plato);
  }

  getPlato(plato){
    const _id = plato
    const url = `${this.updatePlato}/${_id}`;
    return this.http.get<any>(url);
  }
  putPlato(plato){
    const _id = plato._id
    const url = `${this.updatePlato}/${_id}`;
    return this.http.put<any>(url, plato);

  }

  eliminarMenu(plato){
    const _id = plato._id
    const url = `${this.deleteMenuId}/${_id}`;

    return this.http.delete<any>(url);
  }
}
