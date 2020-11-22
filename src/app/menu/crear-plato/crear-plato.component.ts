import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CrearMenuService } from '../../service/crear-menu.service';
// import { ScriptManagerService } from '../../script-manager.service';

@Component({
  selector: 'app-crear-plato',
  templateUrl: './crear-plato.component.html',
  styleUrls: ['./crear-plato.component.css']
})
export class CrearPlatoComponent implements OnInit {
 // constructor(private ScriptManager: ScriptManagerService) { }

  constructor(private auth: AuthService, private router: Router, private crearmenu: CrearMenuService) {}

  crearPlato = {
    rest_id: '',
    nombre: '',
    categoria: '',
    descrip: '',
    tiempoPreparacion: '',
    // ingredientes: '',
    // gruposAliment: '',
    precio: '',
    // img: '',
    
  };

  ngOnInit(): void {
    // this.ScriptManager.cargarScript(['crearPlato']);
  }
 
  crear() {
    console.log("crear");
    this.crearmenu.crearMenu(this.crearPlato).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.hideformCrud()
    this.refresh()
  }

  hideformCrud(){
    document.getElementById('camiCrud').style.top="-900px"
  }

  refresh(): void { window.location.reload(); }
}
