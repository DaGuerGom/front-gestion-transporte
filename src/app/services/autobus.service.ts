import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autobus, AutobusSubmit } from '../interfaces/autobus';

@Injectable({
  providedIn: 'root'
})
export class AutobusService {
  

  url:string="http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/bus"

  constructor(private http:HttpClient) { }

  obtenerAutobuses():Observable<Autobus[]>{
    return this.http.get<Autobus[]>(this.url)
  }

  obtenerAutobusesDeRuta(idRuta:number):Observable<Autobus[]>{
    return this.http.get<Autobus[]>("http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/busesDeRuta/"+idRuta)
  }

  //Buses que no tienen la capacidad completa en una ruta determinada
  obtenerAutobusesLibresDeRuta(idRuta:number):Observable<Autobus[]>{
    return this.http.get<Autobus[]>("http://backendgestiontransporte-env.eba-3txpmryu.us-east-1.elasticbeanstalk.com/api/v1/busesDeRuta/"+idRuta+"/sinOcupar")
  }

  //Buses que están en menos de dos rutas asignadas
  obtenerAutobusesLibres():Observable<Autobus[]>{
    return this.http.get<Autobus[]>(this.url+"Libre")
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
    return this.http.put<Autobus>(url,autobus)
  }

  borrarAutobus(id:number):Observable<Autobus>{
    const url=this.url+"/"+id
    return this.http.delete<Autobus>(url)
  }
}
