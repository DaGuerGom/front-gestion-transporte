import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { UsuarioLogin } from '../interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username!: string|null;

  constructor(private http:HttpClient) { }

  iniciarSesion(credentials: UsuarioLogin): Observable<any> {
    const url = 'http://localhost:8080/login';
    return this.http.post<any>(url, credentials, {observe:'response'});
  }
  
}
