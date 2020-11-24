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

  logearUsuario = {
    email: '',
    passw: '',
  };


  ngOnInit(): void {}

  registrarUs() {
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
        alert("felicitaciones acabas de registrarte");
        // this.router.navigate(['/prefUsuario']);
        this.showInput()
        this.clearForm()
      },
      (err) => console.log(err)
    );
  }
  
  loginUs() {
    this.auth.loginUsuario(this.logearUsuario).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/prefUsuario']);
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
  clearForm(){
    const formClear = <HTMLFormElement>document.getElementById('formulario')
    formClear.reset();
  }
}
