import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionParadaService {

  url:string="http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/asignacionesParadas"

  constructor(private http:HttpClient) { }

  obtenerAsignaciones():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  obtenerAsignacionesDeRuta(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.url+"DeRuta/"+id)
  }

  asignar(body:any):Observable<any>{
    return this.http.post<any>(this.url,body)
  }
}
