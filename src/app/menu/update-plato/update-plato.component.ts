import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CrearMenuService } from '../../service/crear-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-plato',
  templateUrl: './update-plato.component.html',
  styleUrls: ['./update-plato.component.css']
})
export class UpdatePlatoComponent implements OnInit {
  private platoId;
  constructor(private auth: AuthService, private editplato: CrearMenuService, private route: ActivatedRoute, private router: Router) { }
  platoInfo = []
  infoArray =[this.platoInfo]
  ngOnInit(): void {
    let URL = this.route.snapshot.paramMap.get('_id');
    this.platoId = URL
    this.getInfoPlato(this.platoId)
  }
  getInfoPlato(id){
    this.editplato.getPlato(id).subscribe(
      (res)=>{
        this.platoInfo.push(res) 
      },
      (err)=>{
        console.log(err)
      }
    )
    console.log(this.platoInfo)
  }
  hideformUpdate(){
    document.getElementById('MenuUpdate').style.top="-900px"
    this.router.navigate(['/menu'])
    console.log(this.platoInfo)
    console.log(this.infoArray)
  }

  //cambiar la peticion a la DB que no sea params sino desde el body
  
}
