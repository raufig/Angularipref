import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulos-user',
  templateUrl: './circulos-user.component.html',
  styleUrls: ['./circulos-user.component.css']
})
export class CirculosUserComponent implements OnInit {
  public genero: object[];
  public prefer: object[];
  constructor() { 
    this.genero = [
      {
       nombre: "Femenino",
       icon: "fas fa-venus",
      },
      {
        nombre: "Masculino",
        icon: "fas fa-mars",
       },
       {
        nombre: "Otro",
        icon: "fas fa-neuter",
       },
    ],
    this.prefer =[
      {
        nombre: 'vegetariana',
        icon: "🥦"
      },
      {
        nombre: "vegana",
        icon: "🍃"
      },
      {
        nombre: "gourmet",
        icon: "👩‍🍳"
      },
      {
        nombre: "tipico",
        icon: "🥟"
      },
      
      
    ]
  }
  ngOnInit(): void {
    
  }

  
}
