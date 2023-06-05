import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autobus, AutobusSubmit } from '../interfaces/autobus';

@Injectable({
  providedIn: 'root'
})
export class AutobusService {

  url:string="http://localhost:8080/api/v1/bus"

  constructor(private http:HttpClient) { }

  obtenerAutobuses():Observable<Autobus[]>{
    return this.http.get<Autobus[]>(this.url)
  }

  obtenerAutobusPorId(id:number):Observable<Autobus>{
    const url=this.url+"/"+id
    return this.http.get<Autobus>(url)
  }

  guardarAutobus(autobus:AutobusSubmit):Observable<Autobus>{
    return this.http.post<Autobus>(this.url,autobus)
  }

  actualizarAutobus(autobus:Autobus):Observable<Autobus>{
    const url=this.url+"/"+autobus.id
    return this.http.put<Autobus>(this.url,autobus)
  }

  borrarAutobus(id:number):Observable<Autobus>{
    const url=this.url+"/"+id
    return this.http.delete<Autobus>(url)
  }
}
