import { Component, OnInit } from '@angular/core';
import {ScriptManagerMenusFormService} from '../script-manager-menus-form.service';
@Component({
  selector: 'app-menus-formularios',
  templateUrl: './menus-formularios.component.html',
  styleUrls: ['./menus-formularios.component.css']
})
export class MenusFormulariosComponent implements OnInit {

  constructor(private scriptManager: ScriptManagerMenusFormService) { 
     this.scriptManager.cargarScriptMenusFormulario(['menusFormulario']); 
  }

  ngOnInit(): void {
  }

}
