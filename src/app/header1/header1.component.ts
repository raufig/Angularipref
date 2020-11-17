import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  
  desplegar(){
    document.getElementById('nav').style.left='0px';
  }
  ocultar(){
    document.getElementById('nav').style.left='-245px';
  }
  openFooter(){
    document.getElementById('footer').style.left='20px';
  }

}
