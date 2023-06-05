import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parada, ParadaSubmit } from '../interfaces/parada';

@Injectable({
  providedIn: 'root'
})
export class ParadaService {

  constructor(private http:HttpClient) { }

  obtenerParadas():Observable<Parada[]>{
    let url="http://localhost:8080/api/v1/paradas"
    return this.http.get<Parada[]>(url)
  }

  obtenerParadaPorId(id:number):Observable<Parada>{
    let url="http://localhost:8080/api/v1/paradas/"+id
    return this.http.get<Parada>(url)
  }

  crearParada(parada:ParadaSubmit):Observable<Parada>{
    let url="http://localhost:8080/api/v1/paradas"
    return this.http.post<Parada>(url,parada)
  }

  actualizarParada(parada:Parada):Observable<Parada>{
    let url="http://localhost:8080/api/v1/paradas/"+parada.id
    return this.http.put<Parada>(url,parada)
  }

  borrarParada(id:number):Observable<any>{
    let url="http://localhost:8080/api/v1/paradas/"+id
    return this.http.delete(url)
  }
}
