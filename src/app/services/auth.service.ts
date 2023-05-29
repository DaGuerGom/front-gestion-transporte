import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario, UsuarioLogin } from '../interfaces/usuario';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Nombre de usuario (PK) que se recogerá desde el sessionStorage.
  username!:string;

  constructor(private http:HttpClient,private router:Router) {
    this.username=<string>sessionStorage.getItem("usuarioActivo");
  }

  iniciarSesion(credentials: UsuarioLogin): Observable<any> {
    const url = 'http://localhost:8080/login';
    return this.http.post<any>(url, credentials, {observe:'response'});
  }
  
  cerrarSesion(){
    sessionStorage.removeItem("usuarioActivo")
    this.router.navigate([""])
  }

  estaLogueado(): Observable<boolean> {
    if(this.username){
      return of(true);
    }
    return of(false);
  }
}
