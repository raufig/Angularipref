import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-mesas',
  templateUrl: './formulario-mesas.component.html',
  styleUrls: ['./formulario-mesas.component.css']
})
export class FormularioMesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 ocultarFormulario(){
   document.getElementById("contenedorFormulario").style.top = "-900px"
 }
}
