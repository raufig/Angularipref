import { Component, OnInit } from '@angular/core';
import { HomeCartasComponent } from 'src/app/home/home-cartas/home-cartas.component';
import { OrdenesService } from "../../service/ordenes.service";
@Component({
  selector: 'app-tarjeta-estado',
  templateUrl: './tarjeta-estado.component.html',
  styleUrls: ['./tarjeta-estado.component.css']
})
export class TarjetaEstadoComponent implements OnInit {
  info =[];
  public tarjetaEst: object[];
  
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

  //hora = this.info[0].createdAt.split("T")[1]
  

}
