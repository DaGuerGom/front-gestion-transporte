import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdmitidoGuard implements CanActivate {
  constructor(private authService: AuthService,private userService:UsuarioService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.obtenerUsuarioActivo().pipe(
      map(resp => {
        if (resp.body.admitido == "S") {
          return true;
        } else {
          this.authService.cerrarSesion();
          return false;
        }
      })
    );
  }
}