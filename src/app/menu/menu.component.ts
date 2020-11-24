import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CardTendenciaComponent } from '../dashboard/card-tendencia/card-tendencia.component';
import { CrearMenuService } from '../service/crear-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  arregloMenu = [];
  
  constructor(private menuList: CrearMenuService) {

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

  editarMenu() {
    this.showformCrud()
    
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
  
  
  showformCrud(){
    document.getElementById('camiCrud').style.top="60px"
  }

}
