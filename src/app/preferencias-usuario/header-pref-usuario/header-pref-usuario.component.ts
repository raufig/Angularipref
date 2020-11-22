import { Component, OnInit } from '@angular/core';
import { PreferenciasService } from '../../service/preferencias.service'
@Component({
  selector: 'app-header-pref-usuario',
  templateUrl: './header-pref-usuario.component.html',
  styleUrls: ['./header-pref-usuario.component.css']
})
export class HeaderPrefUsuarioComponent implements OnInit {

  constructor(private preferencias: PreferenciasService) { }
  
  info =[];
  ngOnInit(): void {
     this.preferencias.getInfor().subscribe(
      (res)=>{
        this.info = res
      },
      (err)=>{
        console.log(err)
      }
    ) 
  }

}
