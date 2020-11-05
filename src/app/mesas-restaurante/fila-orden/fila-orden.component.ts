import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila-orden',
  templateUrl: './fila-orden.component.html',
  styleUrls: ['./fila-orden.component.css']
})
export class FilaOrdenComponent implements OnInit {
public arreglo: object[]
  constructor() {
      this.arreglo=[{
        noMesa: 1,
        estado: "Coccion",
        tiempo:20,
      },
      {
        noMesa: 2,
        estado: "Entregado",
        tiempo:22,
      },
      {
        noMesa: 3,
        estado: "Coccion",
        tiempo:23,
      },
    ]
    }

  ngOnInit(): void {
  }

 mostrarFormulario(){
   document.getElementById("contenedorFormulario").style.top="0px";
 }



}
