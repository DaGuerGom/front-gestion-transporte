import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

//Esta clase será muy importante, ya que recogerá al usuario activo y todas las vistas heredarán de este menú,
//obteniendo de una forma muy sencilla el usuario conectado.
export class MenuComponent implements OnInit {
  usuarioActivo: any;
  usuariosPendientes: number = 0;
  //Como la cabecera se compartirá para los 3 roles, y cada uno tiene un home, a partir del rol del usuario
  //se le asignará una ruta distinta.
  rutaHome!:string

  constructor(protected userService: UsuarioService, protected router:Router, protected authService:AuthService) {}

  async ngOnInit(): Promise<void> {
      const resp = await this.userService.obtenerUsuarioActivo().toPromise();
      this.usuarioActivo = resp.body;
      switch (this.usuarioActivo.tipo) {
        case "al":
          this.rutaHome = "/home-alumno";
          break;
        case "c":
          this.rutaHome = "/home-conductor";
          break;
        default:
          this.rutaHome = "/home-admin";
      }
      this.recargarUsuariosPendientes()
    }

  cerrarSesion(){
    this.authService.cerrarSesion();
  }

  recargarUsuariosPendientes(){
    this.userService.obtenerUsuariosPendientes().toPromise()
      .then(resp => {
        this.usuariosPendientes=resp.body.length
      })
  }
}
