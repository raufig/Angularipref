import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css'],
})
export class FormularioPersonaComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  //Datos obtenidos desde el HTML
  registrarUsuario = {
    docu: '',
    name: '',
    lastN: '',
    email: '',
    addr: '',
    phone: '',
    passw: '',
    birDate: '',
  };

  ngOnInit(): void {}

  registrarUs() {
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
