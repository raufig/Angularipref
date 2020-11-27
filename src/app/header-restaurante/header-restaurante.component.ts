import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service'
@Component({
  selector: 'app-header-restaurante',
  templateUrl: './header-restaurante.component.html',
  styleUrls: ['./header-restaurante.component.css']
})
export class HeaderRestauranteComponent implements OnInit {
  info =[];
  constructor(private informacion: HomeService) { }

  ngOnInit(): void {
    this.infouser()
  }
  desplegar(){
    document.getElementById('navres').style.left='0px';
  }
  ocultar(){
    document.getElementById('navres').style.left='-245px';
  } 
  // mostrarOpciones(){
  //   document.getElementById('opciones-estadisticas').style.left='0px';
  //  console.log("entro")
  // }

  mostrarOpciones(){
    document.getElementById('opciones-estadisticas').style.opacity='1';
    document.getElementById('opciones-estadisticas').style.backgroundColor='white';
}

infouser(){
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
