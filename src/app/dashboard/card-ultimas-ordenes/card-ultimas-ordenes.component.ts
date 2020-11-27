import { Component, OnInit } from '@angular/core';
import { OrdenesService } from "../../service/ordenes.service";
@Component({
  selector: 'app-card-ultimas-ordenes',
  templateUrl: './card-ultimas-ordenes.component.html',
  styleUrls: ['./card-ultimas-ordenes.component.css']
})
export class CardUltimasOrdenesComponent implements OnInit {
  info =[];
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
