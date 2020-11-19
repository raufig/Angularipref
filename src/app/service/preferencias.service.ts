import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {

  constructor(private http: HttpClient) { }

  private getPrefUrl = 'http://localhost:3000/api/user/welcome';
  private getInfo = 'http://localhost:3000/api/user/edit-perfil';

  getPref(){
    return this.http.get<any>(this.getPrefUrl)
  }
  savePref(pref){
    return this.http.post<any>(this.getPrefUrl, pref)
  }
  getInfor(){
    return this.http.get<any>(this.getInfo)
  }
}
