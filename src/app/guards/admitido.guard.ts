import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmitidoGuard implements CanActivate {
  constructor(private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.estaLogueado().pipe(
        map(estaLogueado => {
          if (this.authService.user.admitido == "S") {
            return true;
          } else {
            this.authService.cerrarSesion();
            return false;
          }
        })
      );
    }
  }