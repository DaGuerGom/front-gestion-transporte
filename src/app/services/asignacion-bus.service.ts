import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionBusService {

  url:string="http://localhost:8080/api/v1/asignacionesBuses"

  constructor(private http:HttpClient) { }

  obtenerAsignaciones():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
}
