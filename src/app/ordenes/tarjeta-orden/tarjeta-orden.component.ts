import { Component, OnInit } from '@angular/core';
import { OrdenesService } from "../../service/ordenes.service";
@Component({
  selector: 'app-tarjeta-orden',
  templateUrl: './tarjeta-orden.component.html',
  styleUrls: ['./tarjeta-orden.component.css']
})
export class TarjetaOrdenComponent implements OnInit {
  info =[];
  public tarjetaOrd: object[];

  constructor(private ordenes: OrdenesService) { }
 
  ngOnInit(): void {
    this.getOrders()
  }
  getOrders(){
    this.ordenes.getOrder().subscribe(
      (res)=>{
        this.info = res
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
