import { Component, OnInit } from '@angular/core';
import { PreferenciasService } from '../../service/preferencias.service'

@Component({
  selector: 'app-circulos',
  templateUrl: './circulos.component.html',
  styleUrls: ['./circulos.component.css']
})
export class CirculosComponent implements OnInit {

  constructor(private preferencias: PreferenciasService) { }

  prefer =[];
  ngOnInit(): void {
    this.preferencias.getPref().subscribe(
      (res)=>{
        this.prefer = res
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
