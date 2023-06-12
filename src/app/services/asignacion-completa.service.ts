import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionCompletaService {
  url:string="http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/misRutas"
  constructor(private http:HttpClient) { }

  obtenerAsignacionesDeUsuario(username:string):Observable<any[]>{
    return this.http.get<any[]>(this.url+"/"+username)
  }
}
