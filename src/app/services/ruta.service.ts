import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ruta, RutaSubmit } from '../interfaces/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  url:string="http://localhost:8080/api/v1/routes"

  constructor(private http:HttpClient) { }

  obtenerRutas():Observable<Ruta[]>{
    return this.http.get<Ruta[]>(this.url)
  }

  obtenerRutaPorId(id:number):Observable<Ruta>{
    let url=this.url+"/"+id
    return this.http.get<Ruta>(url)
  }

  obtenerRutasPorConductor(username:string):Observable<Ruta[]>{
    return this.http.get<Ruta[]>("http://localhost:8080/api/v1/rutasDeUsuario/"+username)
  }

  crearRuta(ruta:RutaSubmit):Observable<Ruta>{
    return this.http.post<Ruta>(this.url,ruta)
  }

  actualizarRuta(ruta:Ruta):Observable<Ruta>{
    let url=this.url+"/"+ruta.id
    return this.http.put<Ruta>(url,ruta)
  }

  borrarRuta(id:number):Observable<any>{
    let url=this.url+"/"+id
    return this.http.delete(url)
  }
}
