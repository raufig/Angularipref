import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesas-restaurante',
  templateUrl: './mesas-restaurante.component.html',
  styleUrls: ['./mesas-restaurante.component.css']
})
export class MesasRestauranteComponent implements OnInit {

  public pedidos: Number[];
  constructor() { 
    this.pedidos=[1,2,3,4]
  }

  ngOnInit(): void {
  }

}
