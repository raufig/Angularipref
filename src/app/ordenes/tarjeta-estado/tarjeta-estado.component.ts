import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-estado',
  templateUrl: './tarjeta-estado.component.html',
  styleUrls: ['./tarjeta-estado.component.css']
})
export class TarjetaEstadoComponent implements OnInit {

  public tarjetaEst: object[];
  
  constructor() { 
    this.tarjetaEst = [{
      Cliente: "Andres",
      Producto: "Hamburguesa",
      Estado: "Cancelado",
      Tiempo: "10:30 a.m",
      Total: "$ 30.000"
    },
    {
      Cliente: "Juan",
      Producto: "Ensalada",
      Estado: "Entregado",
      Tiempo: "01:30 p.m",
      Total: "$ 20.000"
    },
  ]
  }
 
  ngOnInit(): void {
  }

}
