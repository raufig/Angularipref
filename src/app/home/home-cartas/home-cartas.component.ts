import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service'
import { OrdenesService } from '../../service/ordenes.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-cartas',
  templateUrl: './home-cartas.component.html',
  styleUrls: ['./home-cartas.component.css']
})
export class HomeCartasComponent implements OnInit {

  public restaurantes: object[];
  

  constructor(private home: HomeService, private ordenes: OrdenesService, private router: Router) { }
  restCards =[];
  img: File = null

  ngOnInit(): void {
     this.home.getHome().subscribe(
      (res)=>{
        this.restCards = res
      },
      (err)=>{
        console.log(err)
      }
    ) 
  }
  getMenuResta(info){
   //this.ordenes.getMenu2(info)
    this.router.navigate([`/sugUsuario/${info._id}`])
  }
/*   getImg(event){
    const file = new FormData();
    file.append('nombre',this.restCards.nombre)
    //minuto 21 video
  } */
}
