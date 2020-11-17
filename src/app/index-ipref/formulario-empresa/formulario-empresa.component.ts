import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  //Datos obtenidos desde el HTML
  registrarRestaurante = {
    nit: '',
    name: '',
    email: '',
    raSocial: '',
    addr: '',
    phone: '',
    passw: '',
    restId: '',
  };

  logearRestaurante = {
    email: '',
    passw: '',
  };

  ngOnInit(): void {}

  registrarRes() {
    this.auth.registroRestaurante(this.registrarRestaurante).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  loginRes() {
    this.auth.loginRestaurante(this.logearRestaurante).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }


  showInput(){

    const loginIngresarctual = document.getElementById('login-ingresar');
    const formRegistro = document.getElementById('formulario');

      loginIngresarctual.style.top='100px'
      formRegistro.style.backgroundColor='#d1d1b477'
  };
}


