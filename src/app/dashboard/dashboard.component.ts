import { Component, OnInit } from '@angular/core';
import { OrdenesService } from "../service/ordenes.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
