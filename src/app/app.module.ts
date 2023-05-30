import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeAlumnoComponent } from './home-alumno/home-alumno.component';
import { HomeConductorComponent } from './home-conductor/home-conductor.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { EnEsperaComponent } from './en-espera/en-espera.component';
import { RechazadoComponent } from './rechazado/rechazado.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    HomeAlumnoComponent,
    HomeConductorComponent,
    MenuComponent,
    RegistroComponent,
    EnEsperaComponent,
    RechazadoComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
