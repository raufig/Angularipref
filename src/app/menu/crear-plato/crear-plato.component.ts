import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CrearMenuService } from '../../service/crear-menu.service';
import { ScriptManagerService } from '../../script-manager.service';

@Component({
  selector: 'app-crear-plato',
  templateUrl: './crear-plato.component.html',
  styleUrls: ['./crear-plato.component.css']
})
export class CrearPlatoComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router, private crearmenu: CrearMenuService, private ScriptManager: ScriptManagerService) {}

  crearPlato = {

    nombre: '',
    categoria: '',
    descrip: '',
    tiempoPreparacion: '',
    ingredientesName: '',
    ingredientes: '',
    gruposAliment: '',
    precio: '',
    img: '',
    
  };
  img: File = null;
  currentImage ;
  ingredientes=[]
  ingredientesUpload = []

  ngOnInit(): void {
    this.ScriptManager.cargarScript(['crearPlato']);
    this.readIngredientes();
    //this.tmp()
    //this.mostrarImagen(this.foto)
  }
  readIngredientes(){
    this.crearmenu.getIngredientes().subscribe(
      (res)=>{
        this.ingredientes = res
      },
      (err)=>{
        console.log(err)
      }
    ) 
    
  }
 uploadFile(event){
  this.img = <File>event.target.files[0]
  console.log(this.crearPlato) 
 }
 imgPreview(e) {
   console.log(e)
   
let foto = (<HTMLImageElement>document.getElementById('imgp'));
 console.log("thisIsFoto", foto)
  const reader = new FileReader();
     reader.onload = (e) => {
       foto.src = e.target.result as string;
     }
     reader.readAsDataURL(e.target.files[0])
  //this.currentImage = e.target.files[0].name as string
 // console.log(this.currentImage)

}
  crear() {

    const file = new FormData();
    file.append('nombre', this.crearPlato.nombre);
    file.append('categoria', this.crearPlato.categoria);
    file.append('descrip', this.crearPlato.descrip);
    file.append('tiempoPreparacion', this.crearPlato.tiempoPreparacion);
    file.append('ingredientesName', this.crearPlato.ingredientesName);
    file.append('ingredientes', this.crearPlato.ingredientes);
    file.append('gruposAliment', this.crearPlato.gruposAliment);
    file.append('precio', this.crearPlato.precio);
    file.append('img', this.img, this.img.name);
    
    this.crearmenu.crearMenu(file).subscribe(
      (res)=>{ 
        console.log(res)
        this.hideformCrud()
        this.refresh()
      },
      (err)=>{
        console.log(err);
      }
    )
    console.log("para enviar a DB",this.crearPlato)
  }

  hideformCrud(){
    document.getElementById('camiCrud').style.top="-900px"
  }

  refresh(): void { window.location.reload(); }
  ingrdientesInfo={
NombreIngredi: [],
IDingreNombre: [],
gruposAlimen: []
}
ingreHtml=[]

  test(e){
    let ingredi = (<HTMLInputElement>document.getElementById('ingrediente')).value;
    let gramaje = (<HTMLInputElement>document.getElementById('gramaje')).value;
    let list = this.ingredientes.filter(x => x.nombre === ingredi)[0];
    //this.ingrdientesInfo.IDingreNombre.push(list._id)
    //console.log(this.ingrdientesInfo)
    if(!ingredi && !gramaje){
      alert('ingrese ingrediente y gramaje')
    }else{
      this.ingrdientesInfo.IDingreNombre.push(list._id)
      this.ingrdientesInfo.NombreIngredi.push(list.nombre)
      this.ingrdientesInfo.gruposAlimen.push(list.ref_id)
     
      this.ingreHtml.push( {
        ingrediente: list.nombre,
        gramaje: gramaje
        
      })
      this.crearPlato=Object.assign({
        ingredientesName: this.ingrdientesInfo.NombreIngredi,
        ingredientes: this.ingrdientesInfo.IDingreNombre,
        gruposAliment: this.ingrdientesInfo.gruposAlimen
      })

      console.log("para enviar a DB",this.crearPlato)
      
      console.log(this.ingrdientesInfo)
    }
   
  }

}
