import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from '../../script-manager.service';

@Component({
  selector: 'app-crear-plato',
  templateUrl: './crear-plato.component.html',
  styleUrls: ['./crear-plato.component.css']
})
export class CrearPlatoComponent implements OnInit {

  constructor(private ScriptManager: ScriptManagerService) { }

  ngOnInit(): void {
    this.ScriptManager.cargarScript(['crearPlato']);
  }
 
  hideformCrud(){
    document.getElementById('camiCrud').style.top="-900px"
  }

}
