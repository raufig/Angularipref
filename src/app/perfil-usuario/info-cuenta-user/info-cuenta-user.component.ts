import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cuenta-user',
  templateUrl: './info-cuenta-user.component.html',
  styleUrls: ['./info-cuenta-user.component.css']
})
export class InfoCuentaUserComponent implements OnInit {
  public InfoUser: object[];
  constructor() { 
    this.InfoUser = [{
      correo: "correoAndres@mail.com",
      contrasena: "123456789",
    },
    ]}

  ngOnInit(): void {
  }

}
