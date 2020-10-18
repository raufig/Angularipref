import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { HomeComponent } from './home/home.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { TarjetaOrdenComponent } from './ordenes/tarjeta-orden/tarjeta-orden.component';
import { TarjetaEstadoComponent } from './ordenes/tarjeta-estado/tarjeta-estado.component';
import { TarjetaPerfilGlobalComponent } from './tarjeta-perfil-global/tarjeta-perfil-global.component';
import { MesasRestauranteComponent } from './mesas-restaurante/mesas-restaurante.component';
import { FilaOrdenComponent } from './mesas-restaurante/fila-orden/fila-orden.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardTendenciaComponent } from './dashboard/card-tendencia/card-tendencia.component';
import { CardUltimasOrdenesComponent } from './dashboard/card-ultimas-ordenes/card-ultimas-ordenes.component';
import { FilaEstadoOrdenComponent } from './dashboard/fila-estado-orden/fila-estado-orden.component';
import { MetodosPagoComponent } from './metodos-pago/metodos-pago.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { InfoCuentaUserComponent } from './perfil-usuario/info-cuenta-user/info-cuenta-user.component';
import { CirculosUserComponent } from './perfil-usuario/circulos-user/circulos-user.component';
import { PerfilRestauranteComponent } from './perfil-restaurante/perfil-restaurante.component';
import { InfoCuentaRestaComponent } from './perfil-restaurante/info-cuenta-resta/info-cuenta-resta.component';
import { SucursalesComponent } from './perfil-restaurante/sucursales/sucursales.component';
import {CuponComponent} from './cupon/cupon.component'

const appRouter:Routes=[
  {path:'home',component:HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ordenes', component: OrdenesComponent},
  {path: 'mesas', component: MesasRestauranteComponent},
  {path: 'metodos-pago', component: MetodosPagoComponent},
  {path: 'cupon', component: CuponComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    HomeComponent,
    OrdenesComponent,
    TarjetaOrdenComponent,
    TarjetaEstadoComponent,
    TarjetaPerfilGlobalComponent,
    MesasRestauranteComponent,
    FilaOrdenComponent,
    DashboardComponent,
    CardTendenciaComponent,
    CardUltimasOrdenesComponent,
    FilaEstadoOrdenComponent,
    MetodosPagoComponent,
    PerfilUsuarioComponent,
    InfoCuentaUserComponent,
    CirculosUserComponent,
    PerfilRestauranteComponent,
    InfoCuentaRestaComponent,
    SucursalesComponent,
    CuponComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
