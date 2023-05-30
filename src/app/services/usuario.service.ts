import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, UsuarioRegistro } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private authService:AuthService, private http:HttpClient) { }

  obtenerUsuarioActivo(): Observable<any> {
    let url = "http://localhost:8080/api/v1/users/" + this.authService.username
    return this.http.get<any>(url, {observe: 'response' })
}

  registrarUsuario(usuario:UsuarioRegistro):Observable<any>{
    let url="http://localhost:8080/api/v1/users"
    return this.http.post<any>(url,usuario)
  }

  obtenerUsuariosPendientes():Observable<any>{
    let url = "http://localhost:8080/api/v1/users/en-espera"
    return this.http.get<any>(url, {observe: 'response' })
  }

  actualizarUsuario(usuario:Usuario):Observable<any>{
    let url="http://localhost:8080/api/v1/users/"+usuario.username
    return this.http.put<any>(url,usuario)
  }
}