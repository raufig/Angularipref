import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service'

@Component({
  selector: 'app-header-sugerencia-pref-u',
  templateUrl: './header-sugerencia-pref-u.component.html',
  styleUrls: ['./header-sugerencia-pref-u.component.css']
})
export class HeaderSugerenciaPrefUComponent implements OnInit {

  constructor(private informacion: HomeService) { }
  info =[];
  ngOnInit(): void {
this.infouser()
 }
 infouser(){
  this.informacion.getinfo().subscribe(
    (res)=>{
      this.info = res
    },
    (err)=>{
      console.log(err)
    }
  ) 
 }
}
