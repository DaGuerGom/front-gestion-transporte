import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionBusService {

  url:string="http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/asignacionesBuses"

  constructor(private http:HttpClient) { }

  obtenerAsignaciones():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  asignar(body:any):Observable<any>{
    return this.http.post<any>(this.url,body)
  }
}
