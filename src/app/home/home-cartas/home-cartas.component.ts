import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service'
@Component({
  selector: 'app-home-cartas',
  templateUrl: './home-cartas.component.html',
  styleUrls: ['./home-cartas.component.css']
})
export class HomeCartasComponent implements OnInit {

  public restaurantes: object[];
  
  constructor(private home: HomeService) { }
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
/*   getImg(event){
    const file = new FormData();
    file.append('nombre',this.restCards.nombre)
    //minuto 21 video
  } */
}
