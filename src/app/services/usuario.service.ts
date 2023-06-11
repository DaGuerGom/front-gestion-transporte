import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, UsuarioRegistro } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string="http://localhost:8080/api/v1/users"

  constructor(private authService:AuthService, private http:HttpClient) { }

  obtenerUsuarioActivo(): Observable<any> {
    let url = this.url+"/" + this.authService.username
    return this.http.get<any>(url, {observe: 'response' })
}
obtenerUsuarioPorUsername(username:string): Observable<any> {
  let url = this.url+"/" + username
  return this.http.get<any>(url, {observe: 'response' })
}
obtenerConductores():Observable<any>{
  return this.http.get<any>(this.url+"/conductores")
}
  registrarUsuario(usuario:UsuarioRegistro):Observable<any>{
    return this.http.post<any>(this.url,usuario)
  }

  obtenerUsuariosPendientes():Observable<any>{
    let url = this.url+"/en-espera"
    return this.http.get<any>(url, {observe: 'response' })
  }

  actualizarUsuario(usuario:Usuario):Observable<any>{
    let url=this.url+"/"+usuario.username
    return this.http.put<any>(url,usuario)
  }
}