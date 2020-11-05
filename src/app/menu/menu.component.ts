import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
arregloMenu: object[];
  constructor() {
    this.arregloMenu=[{
      nombre: "Arroz",
      tiempo: 60,
      descripcion:"Se calienta agua con cebolla larga, sal, aceite",
      imagen:"https://s1.eestatic.com/2020/05/29/ciencia/nutricion/Arroz-Seguridad_alimentaria-Enfermedades-Nutricion_493711911_152762637_1706x960.jpg"
    },
    { nombre: "Limonada",
      tiempo: 15,
      descripcion:"Se calienta agua con cebolla larga, sal, aceite", 
      imagen:"https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/CE17D32B-FB73-4B10-906D-FB397B545D08/Derivates/4ba93f3c-ce25-433c-95cc-b8505608189b.jpg"
    },
      
      { nombre: "Arroz",
      tiempo: 60,
      descripcion:"Se calienta agua con cebolla larga, sal, aceite",
      imagen:"https://s1.eestatic.com/2020/05/29/ciencia/nutricion/Arroz-Seguridad_alimentaria-Enfermedades-Nutricion_493711911_152762637_1706x960.jpg"
    }]
   }

  ngOnInit(): void {
  }
  
  showformCrud(){
    document.getElementById('camiCrud').style.top="60px"
  }

}
