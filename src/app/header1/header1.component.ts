import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service'
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  info =[];
  

  constructor(private informacion: HomeService) { }

  ngOnInit(): void {
    this.infouser()
  }
  
  desplegar(){
    document.getElementById('nav').style.left='0px';
  }
  ocultar(){
    document.getElementById('nav').style.left='-245px';
  }
  openFooter(){
    document.getElementById('footer').style.left='20px';
  }


  infouser(){
    this.informacion.getinfo().subscribe(
      (res)=>{
        this.info = res
      },
      (err)=>{
        console.log(err)
      }
    ) 
    
  }

}
