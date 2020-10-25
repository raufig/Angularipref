import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-orden',
  templateUrl: './tarjeta-orden.component.html',
  styleUrls: ['./tarjeta-orden.component.css']
})
export class TarjetaOrdenComponent implements OnInit {

  public tarjetaOrd: object[];

  constructor() {
    this.tarjetaOrd = [{
      img: "../../../assets/img/home/german.jpg",
      Producto: "Hamburguesa",
      Descripcion: "La mejor hamburguesa de la sabana de occidente",
      Precio: "$30.600"
    },
    {
      img: "../../../assets/img/home/jamon01.png",
      Producto: "Caserola de papas",
      Descripcion: "La mejor combinacion papas, con tocineta y queso derretido",
      Precio: "$12.000"
    },
    
  ]
   }

  ngOnInit(): void {
  }

}
