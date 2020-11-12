import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cartas',
  templateUrl: './home-cartas.component.html',
  styleUrls: ['./home-cartas.component.css']
})
export class HomeCartasComponent implements OnInit {

  public restaurantes: object[];
  
  constructor() {
    this.restaurantes = [
      {
       nombre: "Crepes & Wafles",
       imagen: "../../../assets/img/home/crepes.png",
       descripcion: "Crepes & Wafles lo mejor para ti",
      },
      {
        nombre: "Corral",
        imagen: "../../../assets/img/home/jamon01.png",
        descripcion: "Crepes & Wafles lo mejor para ti",
       },
       {
        nombre: "Wafles",
        imagen: "../../../assets/img/home/crepes.png",
        descripcion: "Crepes & Wafles lo mejor para ti",
       },
    ]
  }
  ngOnInit(): void {
  }

}
