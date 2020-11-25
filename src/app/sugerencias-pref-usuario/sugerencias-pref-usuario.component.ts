import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../service/ordenes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sugerencias-pref-usuario',
  templateUrl: './sugerencias-pref-usuario.component.html',
  styleUrls: ['./sugerencias-pref-usuario.component.css'],
})
export class SugerenciasPrefUsuarioComponent implements OnInit {
  private menuRestId;
  constructor(private ordenes: OrdenesService, private route: ActivatedRoute) {}
  menu = [];
  ngOnInit(): void {
    let URL = this.route.snapshot.paramMap.get('_id');
    this.menuRestId = URL;
    this.getPlatos(this.menuRestId);
  }
  getPlatos(info) {
    this.ordenes.getMenu2(info).subscribe(
      (res) => {
        this.menu = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

//list = this.menu.filter(x=> x._id === idPlato)[0]._id

  //inicio = 1

/*   aumentar(cantidad) {
    let list = this.menu.filter(x=> x._id === cantidad)[0].unidad
    let toNum =parseInt(list)
    this.inicio = ++ toNum
    console.log(this.inicio)
    //let selectedcant = (<HTMLInputElement>document.getElementById(`${list}`)).value;
    //let cantiNumber = parseInt(selectedcant)
    //this.inicio = ++ cantiNumber;
    //console.log(cantiNumber)
  } */

 /*  disminuir() {
    this.inicio = --this.inicio;
    console.log(this.inicio)
  } */
  selectedFood = {
    rest_id:'',
    nombre_plato:[],
    descrip_plato:[]
  };
  

  crearOrden(event, rest, nombre, descrip, idPlato) {
    let list = this.menu.filter(x=> x._id === idPlato)[0]._id
    let cantidad = (<HTMLInputElement>document.getElementById(`${list}`)).value;
    let cantiNumber = parseInt(cantidad)
    console.log("cantidadSelected",cantidad)
    if (cantiNumber <= 0) {
      alert("seleccione cantidad que desea")
    }else{
    this.selectedFood = Object.assign({
      rest_id: rest,
      nombre_plato: nombre,
      descrip_plato: descrip,
      //cantidad: canti
    })
    console.log(this.selectedFood);
  }
  }
}
