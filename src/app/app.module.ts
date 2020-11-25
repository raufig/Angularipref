import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptManagerMenusFormService } from './script-manager-menus-form.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service'
import { CrearMenuService } from './service/crear-menu.service';

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
import { MetodosPagoComponent } from './metodos-pago/metodos-pago.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { InfoCuentaUserComponent } from './perfil-usuario/info-cuenta-user/info-cuenta-user.component';
import { CirculosUserComponent } from './perfil-usuario/circulos-user/circulos-user.component';
import { PerfilRestauranteComponent } from './perfil-restaurante/perfil-restaurante.component';
import { InfoCuentaRestaComponent } from './perfil-restaurante/info-cuenta-resta/info-cuenta-resta.component';
import { SucursalesComponent } from './perfil-restaurante/sucursales/sucursales.component';
import { CuponComponent } from './cupon/cupon.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CrearPlatoComponent } from './menu/crear-plato/crear-plato.component';
import { PreferenciasUsuarioComponent } from './preferencias-usuario/preferencias-usuario.component';
import { HeaderPrefUsuarioComponent } from './preferencias-usuario/header-pref-usuario/header-pref-usuario.component';
import { FormularioMesasComponent } from './mesas-restaurante/formulario-mesas/formulario-mesas.component';
import { IndexIprefComponent } from './index-ipref/index-ipref.component';
import { FormularioPersonaComponent } from './index-ipref/formulario-persona/formulario-persona.component';
import { FormularioEmpresaComponent } from './index-ipref/formulario-empresa/formulario-empresa.component';
import { HeaderRestauranteComponent } from './header-restaurante/header-restaurante.component';
import { SugerenciasPrefUsuarioComponent } from './sugerencias-pref-usuario/sugerencias-pref-usuario.component';
import { HeaderSugerenciaPrefUComponent } from './sugerencias-pref-usuario/header-sugerencia-pref-u/header-sugerencia-pref-u.component';
import { HomeCartasComponent } from './home/home-cartas/home-cartas.component';
import { CirculosComponent } from './preferencias-usuario/circulos/circulos.component';
import { UpdatePlatoComponent } from './menu/update-plato/update-plato.component';

// const appRouter: Routes = [
//   {path:'',component:IndexIprefComponent},
//   {path:'home',component:HomeComponent},
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'ordenes', component: OrdenesComponent},
//   {path: 'mesas', component: MesasRestauranteComponent},
//   {path: 'metodos-pago', component: MetodosPagoComponent},
//   {path: 'cupon', component: CuponComponent},
//   {path: 'perfil-usuario', component: PerfilUsuarioComponent},
//   {path: 'perfil-restaurante', component: PerfilRestauranteComponent},
//   {path: 'crearPlato', component: CrearPlatoComponent},
//   {path: 'menu', component: MenuComponent},
//   {path: 'prefUsuario', component: PreferenciasUsuarioComponent},
//   {path:'formularioMesas', component: FormularioMesasComponent},
//   {path: 'sugUsuario', component: SugerenciasPrefUsuarioComponent},
// ];

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
    MetodosPagoComponent,
    PerfilUsuarioComponent,
    InfoCuentaUserComponent,
    CirculosUserComponent,
    PerfilRestauranteComponent,
    InfoCuentaRestaComponent,
    SucursalesComponent,
    CuponComponent,
    FooterComponent,
    MenuComponent,
    CrearPlatoComponent,
    PreferenciasUsuarioComponent,
    HeaderPrefUsuarioComponent,
    IndexIprefComponent,
    FormularioPersonaComponent,
    FormularioEmpresaComponent,
    HeaderRestauranteComponent,
    SugerenciasPrefUsuarioComponent,
    HeaderSugerenciaPrefUComponent,
    HomeCartasComponent,
    FormularioMesasComponent,
    CirculosComponent,
    UpdatePlatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // RouterModule.forRoot(appRouter),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ScriptManagerMenusFormService, 
    AuthService, 
    CrearMenuService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
