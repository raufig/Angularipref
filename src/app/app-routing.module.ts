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
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
  
  {
    path:'',component:IndexIprefComponent,
    pathMatch: 'full',
  },
  {
    path:'home',component:HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'ordenes', component: OrdenesComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'mesas', component: MesasRestauranteComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'metodos-pago', component: MetodosPagoComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'cupon', component: CuponComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'perfil-usuario', component: PerfilUsuarioComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'perfil-restaurante', component: PerfilRestauranteComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'crearPlato', component: CrearPlatoComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'menu', component: MenuComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'prefUsuario', component: PreferenciasUsuarioComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'formularioMesas', component: FormularioMesasComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'sugUsuario', component: SugerenciasPrefUsuarioComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
