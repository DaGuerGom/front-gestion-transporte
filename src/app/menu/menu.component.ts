import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarioActivo: any;
  usuariosPendientes: number = 0;
  //Como la cabecera se compartirá para los 3 roles, y cada uno tiene un home, a partir del rol del usuario
  //se le asignará una ruta distinta.
  rutaHome!:string

  constructor(protected userService: UsuarioService, private router:Router, protected authService:AuthService) {}

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
    this.userService.obtenerUsuariosPendientes().toPromise()
      .then(resp => {
        this.usuariosPendientes=resp.body.length
      })
    }

  cerrarSesion(){
    this.authService.cerrarSesion();
  }
}
