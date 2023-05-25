import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private authService:AuthService, private http:HttpClient) { }

  obtenerUsuarioActivo(): Observable<any> {
    let url = "http://localhost:8080/api/v1/users/" + this.authService.username
    return this.http.get<any>(url, {observe: 'response' })
}
}