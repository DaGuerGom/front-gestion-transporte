import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeAlumnoComponent } from './home-alumno/home-alumno.component';
import { HomeConductorComponent } from './home-conductor/home-conductor.component';
import { RegistroComponent } from './registro/registro.component';

const routes:Routes=[
  {path: "", component: InicioSesionComponent},
  {path:"registro",component:RegistroComponent},
  {path: "home-alumno", component: HomeAlumnoComponent},
  {path: "home-conductor", component: HomeConductorComponent},
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
