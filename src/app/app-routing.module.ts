import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// agragados para relaizar el routing en el lugar indicado
import { IndexIprefComponent } from './index-ipref/index-ipref.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { MesasRestauranteComponent } from './mesas-restaurante/mesas-restaurante.component';
import { MetodosPagoComponent } from './metodos-pago/metodos-pago.component';
import {CuponComponent} from './cupon/cupon.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilRestauranteComponent } from './perfil-restaurante/perfil-restaurante.component';
import { CrearPlatoComponent } from './menu/crear-plato/crear-plato.component';
import { MenuComponent } from './menu/menu.component';
import { PreferenciasUsuarioComponent } from './preferencias-usuario/preferencias-usuario.component';
import { FormularioMesasComponent } from './mesas-restaurante/formulario-mesas/formulario-mesas.component'
import { SugerenciasPrefUsuarioComponent } from './sugerencias-pref-usuario/sugerencias-pref-usuario.component';

const routes: Routes = [
  
  {
    path:'',component:IndexIprefComponent,
    pathMatch: 'full',
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'ordenes', component: OrdenesComponent
  },
  {
    path: 'mesas', component: MesasRestauranteComponent
  },
  {
    path: 'metodos-pago', component: MetodosPagoComponent
  },
  {
    path: 'cupon', component: CuponComponent
  },
  {
    path: 'perfil-usuario', component: PerfilUsuarioComponent
  },
  {
    path: 'perfil-restaurante', component: PerfilRestauranteComponent
  },
  {
    path: 'crearPlato', component: CrearPlatoComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'prefUsuario', component: PreferenciasUsuarioComponent
  },
  {
    path:'formularioMesas', component: FormularioMesasComponent
  },
  {
    path: 'sugUsuario', component: SugerenciasPrefUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
