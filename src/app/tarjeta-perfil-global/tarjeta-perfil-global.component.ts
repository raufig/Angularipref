import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service'

@Component({
  selector: 'app-tarjeta-perfil-global',
  templateUrl: './tarjeta-perfil-global.component.html',
  styleUrls: ['./tarjeta-perfil-global.component.css']
})
export class TarjetaPerfilGlobalComponent implements OnInit {

  constructor(private informacion: HomeService) { }

  info =[];
  ngOnInit(): void {
    this.infoUser()
    this.inforest()
  }

  infoUser(){
    this.informacion.getinfo().subscribe(
      (res)=>{
        this.info = res
      },
      (err)=>{
        console.log(err)
      }
    ) 
  }
  inforest(){
    this.informacion.getinfoR().subscribe(
      (res)=>{
        this.info = res
      },
      (err)=>{
        console.log(err)
      }
    ) 
  }
  
}
