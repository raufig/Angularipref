import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-restaurante',
  templateUrl: './header-restaurante.component.html',
  styleUrls: ['./header-restaurante.component.css']
})
export class HeaderRestauranteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  desplegar(){
    document.getElementById('navres').style.left='0px';
  }
   ocultar(){
    document.getElementById('navres').style.left='-245px';
  } 
  mostrarOpciones(){
    document.getElementById('navres').style.left='0px';
   
  }
}
