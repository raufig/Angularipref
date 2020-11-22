import { Component, OnInit } from '@angular/core';
import { PreferenciasService } from '../../service/preferencias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-circulos',
  templateUrl: './circulos.component.html',
  styleUrls: ['./circulos.component.css']
})
export class CirculosComponent implements OnInit {

  constructor(private preferencias: PreferenciasService, private router: Router) { }

  prefer =[];
  
 
  ngOnInit(): void {
    this.getPref();
  }

  getPref(){
    this.preferencias.getPref().subscribe(
      (res)=>{
        this.prefer = res
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  selectedPrefs = {
    pref1: '',
    pref2: '',
    except: ''
  };
 
  savePref(event, idpref, idsubpref, idexcept){
    this.selectedPrefs=Object.assign({
      pref1: idpref,
      pref2: idsubpref,
      except: idexcept
    })
    console.log(this.selectedPrefs)
  }

  getValueForSubPrefId(id){
    //return this.selectedPrefs.find(pref => pref.pref2 == id)
}

//observable = from(this.selectedPrefs);

savePreferences(){
  console.log(this.selectedPrefs)
 
  this.preferencias.savePref(this.selectedPrefs).subscribe(val =>
   {
    console.log(val);
    
    this.router.navigate(['/home']);
  },
  (err) => {
    console.log(err)
  });
  
}  




  
}


