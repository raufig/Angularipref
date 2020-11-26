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

  selectedFood = {
    rest_id: '',
    nombre_plato:[],
    descrip_plato:[],
    cantidad:0,
    total_orden: 0
  };
  sumTotal = []

  crearOrden(event, rest, nombre, descrip, idPlato) {

    let list = this.menu.filter(x=> x._id === idPlato)[0]._id
    let pricePlato = (<HTMLInputElement>document.getElementById(`price${list}`)).value
    let Total = parseInt(pricePlato)
    let cantidad = (<HTMLInputElement>document.getElementById(`${list}`)).value;
    let cantiNumber = parseInt(cantidad)
    if (cantiNumber <= 0) {
      alert("seleccione cantidad que desea")
    }else{
      this.selectedFood.rest_id = this.menuRestId
      this.selectedFood.nombre_plato.push(nombre);
      this.selectedFood.descrip_plato.push(descrip);
      this.selectedFood.cantidad = cantiNumber;
      let sum = 0
      this.sumTotal.push(Total)
      this.sumTotal.forEach ((numero)=>{
        sum += numero;
    });
      this.selectedFood.total_orden = sum
      alert("Agregado a la canasta")
  }
  }
  cancelar(){
    console.log(this.selectedFood);
  }
  EnviarOrden(){
    this.ordenes.createOrder(this.selectedFood).subscribe(
      (res)=>{
        console.log(res)
        alert("Orden creada, pronto entregaran tu pedido")
      },(err)=>{
        console.log(err)
        alert("Tu orden se encuentra vacia")
      }
    )
  }
}
