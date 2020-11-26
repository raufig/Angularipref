import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearMenuService } from '../service/crear-menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  arregloMenu = [];
  
  constructor(private menuList: CrearMenuService, private router: Router) {

   }

  ngOnInit(): void {
    this.menuList.listarMenu().subscribe(
      (res) => {
        this.arregloMenu = res;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  updatePlato=[{
    _id: '',
    img: '',
    NombrePlato: '',
    categoria: '',
    descrip: '',
    tiempoPreparacion: '',
    precio: '',
    ingredientes: [],
    gramaje: []
  }]

  editarMenu(plato){
    console.log(plato)
    console.log(this.updatePlato)
    this.updatePlato=Object.assign({
      _id: plato._id,
      img: plato.img,
      NombrePlato: plato.nombre,
      categoria: plato.categoria,
      descrip: plato.descrip,
      tiempoPreparacion: plato.tiempoPreparacion,
      precio: plato.precio,
      ingredientes: plato.ingredientesName,
      gramaje: plato.gramaje
    })
  }

  duplicarMenu() {
    
  }

  eliminarMenu(eliminarLista){
    this.menuList.eliminarMenu(eliminarLista).subscribe(
      (res) => {
        const index = this.arregloMenu.indexOf(eliminarLista);
        if(index > -1) {
          this.arregloMenu.splice(index, 1);
        }
      },
      (err) => {
        console.log(err);
      } 
    );
  }
  
  IdExist: boolean = false;

  showformCrud(){
    document.getElementById('MenuCrud').style.top="60px"
  }
  showUpdateMenu(info){
    this.IdExist = true
    document.getElementById('MenuUpdate').style.top="60px"
    this.router.navigate([`/menu/${info._id}`])
    console.log("estoy aqui", this.IdExist)


  }

}
