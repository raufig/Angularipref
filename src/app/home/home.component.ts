import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imagenesCarousel: String[];


  constructor() {
    this.imagenesCarousel = []
  }

  ngOnInit(): void {
    this.llenarImagenes();
  }

  llenarImagenes(){
    for(let i=0;i<25;i++){
      this.imagenesCarousel.push('../../assets/img/home/asian.jpg')
    }
    let html='';
    this.imagenesCarousel.map(imagen=>{
     html+=`
      <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ">
            <img src="${imagen}" class="img-fluid mx-auto d-block" alt="img1">
      </div>
      ` 
    })
   /*  document.getElementById('carousel').innerHTML+=html; */
    return html;
  } 


}
