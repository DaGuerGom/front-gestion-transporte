import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parada } from '../interfaces/parada';

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

  actualizarParada(parada:Parada):Observable<Parada>{
    let url="http://localhost:8080/api/v1/paradas/"+parada.id
    return this.http.put<Parada>(url,parada)
  }
}
