import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario, UsuarioLogin } from '../interfaces/usuario';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  //Nombre de usuario (PK) que se recogerá desde el sessionStorage.
  username!:string;
  user!:Usuario;

  constructor(private http:HttpClient,private router:Router) {}
  ngOnInit(): void {
    this.username=<string>sessionStorage.getItem("usuarioActivo");
    if (this.username){
      this.findUserByUsername(this.username).subscribe(
        (resp)=>{
          this.user=resp
          sessionStorage.setItem('usuarioActivo',resp.username)}
      )
    }
  }

  iniciarSesion(credentials: UsuarioLogin): Observable<any> {
    const url = 'http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/login';
    return this.http.post<any>(url, credentials, {observe:'response'});
  }

  cerrarSesion(){
    sessionStorage.removeItem("usuarioActivo")
    this.router.navigate([""])
  }

  estaLogueado(): Observable<boolean> {
    this.username=<string>sessionStorage.getItem("usuarioActivo");
    if(this.username){
      return of(true);
    }
    return of(false);
  }

  findUserByUsername(username:string):Observable<Usuario>{
    let url="http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/users/"+username;
    return this.http.get<Usuario>(url)
  }
}
