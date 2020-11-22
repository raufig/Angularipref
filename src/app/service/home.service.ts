import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private getRest = 'http://localhost:3000/api/user/home';
  private getInfo = 'http://localhost:3000/api/user/edit-perfil';

  getHome(){
    return this.http.get<any>(this.getRest)
  }

  getinfo(){
    return this.http.get<any>(this.getInfo)
  }
}
