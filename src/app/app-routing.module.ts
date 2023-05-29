import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeAlumnoComponent } from './home-alumno/home-alumno.component';
import { HomeConductorComponent } from './home-conductor/home-conductor.component';
import { RegistroComponent } from './registro/registro.component';
import { EnEsperaComponent } from './en-espera/en-espera.component';
import { RechazadoComponent } from './rechazado/rechazado.component';
import { AuthGuard } from './guards/auth.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { ConductorGuard } from './guards/conductor.guard';
import { AdminGuard } from './guards/admin.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdmitidoGuard } from './guards/admitido.guard';


//Guards: Son necesarias cumplir sus condiciones para acceder a la ruta. En caso de que se intente conectar, se cerrará la sesión.

const routes:Routes=[
  {path: "", component: InicioSesionComponent},
  {path: "registro",component:RegistroComponent},
  {path: "espera", component: EnEsperaComponent,canActivate:[AuthGuard]},
  {path: "rechazado", component: RechazadoComponent,canActivate:[AuthGuard]},
  {path: "home-alumno", component: HomeAlumnoComponent,canActivate:[AuthGuard,AdmitidoGuard,AlumnoGuard]},
  {path: "home-conductor", component: HomeConductorComponent,canActivate:[AuthGuard,AdmitidoGuard,ConductorGuard]},
  {path: "home-admin", component: HomeAdminComponent,canActivate:[AuthGuard,AdmitidoGuard,AdminGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
