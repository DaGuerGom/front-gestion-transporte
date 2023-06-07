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
import { SolicitudesUsuariosComponent } from './solicitudes-usuarios/solicitudes-usuarios.component';
import { PortadaComponent } from './portada/portada.component';
import { ParadasComponent } from './paradas/paradas.component';
import { ActualizarParadaComponent } from './paradas/actualizar-parada/actualizar-parada.component';
import { NuevaParadaComponent } from './paradas/nueva-parada/nueva-parada.component';
import { AutobusesComponent } from './autobuses/autobuses.component';
import { NuevoAutobusComponent } from './autobuses/nuevo-autobus/nuevo-autobus.component';
import { EditarAutobusComponent } from './autobuses/editar-autobus/editar-autobus.component';
import { RutasAdminComponent } from './rutas-admin/rutas-admin.component';
import { NuevaRutaComponent } from './rutas-admin/nueva-ruta/nueva-ruta.component';
import { EditarRutaComponent } from './rutas-admin/editar-ruta/editar-ruta.component';

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
    HomeAdminComponent,
    SolicitudesUsuariosComponent,
    PortadaComponent,
    ParadasComponent,
    ActualizarParadaComponent,
    NuevaParadaComponent,
    AutobusesComponent,
    NuevoAutobusComponent,
    EditarAutobusComponent,
    RutasAdminComponent,
    NuevaRutaComponent,
    EditarRutaComponent
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
