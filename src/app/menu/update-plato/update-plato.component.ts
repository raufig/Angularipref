import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CrearMenuService } from '../../service/crear-menu.service';

@Component({
  selector: 'app-update-plato',
  templateUrl: './update-plato.component.html',
  styleUrls: ['./update-plato.component.css']
})
export class UpdatePlatoComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private editplato: CrearMenuService) {}

  ngOnInit(): void {
  
  }

}
